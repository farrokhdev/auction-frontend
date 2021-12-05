import React, {useEffect, useState} from "react";
import {Card, Checkbox, message, Spin} from "antd";
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import { handleShowImage } from "../../utils/showImageProduct";

function Chooseartwork(props) {
  const {selectProduct, setSelectProduct,auction}=props
  const [loading, setLoading] = useState(false)
  const [allProducts, setAllProducts] = useState([])
  const [dataCount, setDataCount] = useState(0)
  const { Meta } = Card;

  
  const getData = (e="") => {
    setLoading(true)
    axios.get(`${BASE_URL}/sale/product/?auctions__id=${props.id}`)
        .then(resp => {
          setLoading(false)
          if ((resp.data.code === 200) && resp.data?.data?.result) {
            const res = resp.data?.data?.result;
            setAllProducts(res)
            setDataCount(resp.data?.data?.count)

          }
        })
        .catch(err => {
          setLoading(false)
          console.error(err);
          message.error("Reload the page")
        })
  }

  useEffect(()=>{
    setSelectProduct([])
    if(props.id)
    getData()
  },[auction])


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
                    placeholder="Search more than 100 auctions..."
                    onChange={(e)=>getData(e.target.value)}
                />
                <button type="button" className="btn-search"></button>
              </div>
            </div>
            <div className="col-md-3 num-artwork">
              <span className="font12">Artworks : </span>
              <span className="num-artwork-item pinkcolor">{selectProduct?.length}</span>
              <span className="num-artwork-item">of</span>
              <span className="num-artwork-item">{dataCount}</span>
            </div>
          </div>
          <div className="chooseartwork-custome">
            <div className="row mt-3">
          {
            allProducts && allProducts.length ? allProducts.map((item,i)=> <div key={i} className="col-12 col-md-6 col-lg-4 col-xl-3">
              <div className="my-3">
                <Card
                    style={{ width: "100%" }}
                    cover={
                      <div className="image-custom-back" style={{  backgroundImage: `url(${item && handleShowImage(item)})`, height: "250px" }} />
                    }
                >
                  <Meta
                      avatar={<Checkbox checked={selectProduct.some(t=>item?.id===t?.id)} onChange={e=>{
                        if(e.target.checked)
                          setSelectProduct([...selectProduct,item])
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
        </div>
      </div>
      </Spin>
    </>
  );
}

export default Chooseartwork;
