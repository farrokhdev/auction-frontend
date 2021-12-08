import React, {useEffect, useState} from "react";
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import {LIST_PRODUCTS} from "../../utils/constant";
import {Avatar, Card, Checkbox, message, Spin} from "antd";
import {EditOutlined, EllipsisOutlined, SettingOutlined} from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import {UrlQuery} from "../../utils/utils";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import { DEFAULT_URL_IMAGE } from "../../utils/defaultImage";
import { handleShowImage } from "../../utils/showImageProduct";
import queryString from "query-string";
import PaginationComponent from "../../componentsEN/PaginationComponent";

function Chooseartwork(props) {
    const {selectProduct, setSelectProduct,auction,listCheck}=props
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [currentPage, setcurrentPage] = useState(1);
  const [dataCount, setDataCount] = useState(0)
  // const {products,productsDate} = useSelector((state) => state.auctionReducer)
    // console.log(selectProduct)
  const {id} = useSelector((state) => state.profileReducer)

  const [params, setParams] = useState({
    page: 1,
    page_size: 10,
    auction_houses__id: id,
    product_assign: false,
    // owner__id: role !== 'user' ? id : '',

  })


  useEffect(()=>{
    getData()
  },[auction , params])
  const getData = (e="") => {
    setLoading(true)

    const queries = queryString.stringify(params);

    axios.get((`${BASE_URL}${LIST_PRODUCTS}?${queries}`))
  
        .then(resp => {
          setLoading(false)

          if ((resp.data.code === 200) && resp.data?.data?.result) {
            const res = resp.data?.data?.result;
            setData(res)
            setDataCount(resp.data?.data?.count)
          }
        })
        .catch(err => {
          setLoading(false)
          console.error(err);
          message.error("Reload the page")
        })
  }

  const handeSelectPage = (e) => {
    setcurrentPage(e)
    setParams({
      ...params, page: e
    })
  }

  const { Meta } = Card;

  return (
    <>
      <Spin spinning={loading}>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="search-input">
                <input
                    type="text"
                    className="default-input"
                    placeholder="Search over 100 auctions."
                    onChange={(e)=>getData(e.target.value)}
                />
                <button type="button" className="btn-search"></button>
              </div>
            </div>
            <div className="col-md-3 num-artwork">
              <span className="font12">Selected works: </span>
              <span className="num-artwork-item pinkcolor">{selectProduct?.length}</span>
              <span className="num-artwork-item">of</span>
              <span className="num-artwork-item">{dataCount}</span>
            </div>
          </div>
          <div className="chooseartwork-custome">
            <div className="row mt-3">

          {
            data && data.length ? data.map((item,i)=> <div key={i} className="col-12 col-md-6 col-lg-4 col-xl-3">
              <div className="my-3">
                <Card
                    style={{ width: "100%" }}
                    cover={<div className="image-custom-back" style={{ backgroundImage: `url(${item && handleShowImage(item)})` ,height:"250px" }}/>}
                >
                  <Meta
                      avatar={<Checkbox
                          disabled={listCheck.some(t=>item?.id===t?.id)}
                                        checked={selectProduct.some(t=>item?.id===t?.id) } onChange={e=>{
                        if(e.target.checked){
                          setSelectProduct([...selectProduct, {base_price:item?.min_price,...item}])
                        }

                        else {
                          let t=selectProduct.filter(t=>t?.id!==item?.id)
                            setSelectProduct(t)
                        }

                      }}/>}
                      title={item.artwork_title_en}
                      description={item?.technique_en}
                  />
                </Card>
              </div>
                </div>
            ):''
          }
            </div>
          </div>
          <PaginationComponent count={dataCount} handeSelectPage={handeSelectPage} />
         
        </div>
      </div>
      </Spin>
    </>
  );
}

export default Chooseartwork;
