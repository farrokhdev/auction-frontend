import React, { createRef, useEffect, useState } from "react";
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import { LIST_PRODUCTS } from "../../utils/constant";
import { Avatar, Card, Checkbox, message, Spin } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import { handleShowImage } from "../../utils/showImageProduct";

function Chooseartwork(props) {
  const { selectProduct, setSelectProduct, auction } = props;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  


  const [dataCount, setDataCount] = useState(0);

  useEffect(() => {
    setSelectProduct([]);
    if (props.id) getData();
  }, [auction]);
  const getData = (e = "") => {
    setLoading(true);
    axios
      .get(`${BASE_URL}/sale/product/?auctions__id=${props.id}&page_size=9999`)
      .then((resp) => {
        setLoading(false);
        if (resp.data.code === 200 && resp.data?.data?.result) {
          const res = resp.data?.data?.result;
          // form.setFieldsValue(res)
          setData(res);
          setDataCount(resp.data?.data?.count);
          // let check = Object.keys(res).some(t => !res[t]);
          // console.log(check)
          // setNext(!check)
        }
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        message.error("صفحه را دوباره لود کنید");
      });
  };
  const { Meta } = Card;
  const [checkedBox, setCheckedBox] = useState(false);
  const handleCheck = (item) => {
    if (selectProduct.some((t) => item?.id === t?.id)) {
      return true;
    } else {
      return false;
    }
  };


  // for checkbox 
  const dataLength=data.length
  console.log(Array(dataLength).fill)
  const[arrayRefs,setArrayRefs]=useState([])

  useEffect(() => {
    // add or remove refs
    setArrayRefs((arrayRefs) =>
      Array(dataLength)
        .fill()
        .map((_, i) => arrayRefs[i] || createRef()),
    );
  }, [dataLength]);

const checkArray=(item,index)=>{

// console.log(arrayRefs[index].current)

if(!arrayRefs[index].current.state.checked){
  arrayRefs[index].current.state.checked =true
}else{
  arrayRefs[index].current.state.checked =false
}

if (arrayRefs[index].current.state.checked) {
  message.success("به لیست اضافه شد");
  setSelectProduct([
    ...selectProduct,
    item,
  ]);
} else {
  message.error("از لیست حذف شد");
  let t = selectProduct.filter(
    (t) => t?.id !== item?.id
  );
  setSelectProduct(t);
}
}



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
                    placeholder="در بیش از 100 حراج جستجو کنید."
                    onChange={(e) => getData(e.target.value)}
                  />
                  <button type="button" className="btn-search"></button>
                </div>
              </div>
              <div className="col-md-3 num-artwork">
                <span className="font12">آثار انتخاب شده: </span>
                <span className="num-artwork-item pinkcolor">
                  {selectProduct?.length}
                </span>
                <span className="num-artwork-item">از</span>
                <span className="num-artwork-item">{dataCount}</span>
              </div>
            </div>
            <div className="chooseartwork-custome">
              <div className="row mt-3">
                {data && data.length
                  ? data.map((item, i) => (
                      <div
                        key={i}
                        className="col-12 col-md-6 col-lg-4 col-xl-3"
               
                      >
                        <div className="my-3">
                          <Card
                                   onClick={
                                    () => {
                                      
                                      checkArray(item,i)
                                  }
                                }
                            style={{ width: "100%" }}
                            cover={
                              <div
                                className="image-custom-back"
                                style={{
                                  backgroundImage: `url(${
                                    item && handleShowImage(item)
                                  })`,
                                  height: "250px",
                                }}
                         
                              />
                            }
                            // actions={[
                            //   <SettingOutlined key="setting" />,
                            //   <EditOutlined key="edit" />,
                            //   <EllipsisOutlined key="ellipsis" />,
                            // ]}
                          >
                            <Meta
                              className="custom-checkbox"
                              avatar={
                                <Checkbox
                                ref={arrayRefs[i]}
                                  checked={handleCheck(item)}
                                  // onChange={(e) => {
                                  //   checkArray(item,i)
                                  // }}
                                />
                              }
                              title={item.artwork_title}
                              description={item?.technique}
                            />
                          </Card>
                        </div>
                      </div>
                    ))
                  : ""}
              </div>
            </div>
          </div>
        </div>
      </Spin>
    </>
  );
}

export default Chooseartwork;
