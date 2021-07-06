import React, {useEffect, useState} from "react";
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import {LIST_PRODUCTS} from "../../utils/constant";
import {Avatar, Card, Checkbox, message, Spin} from "antd";
import {EditOutlined, EllipsisOutlined, SettingOutlined} from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import {UrlQuery} from "../../utils/utils";

function Chooseartwork(props) {
    const {selectProduct, setSelectProduct,auction,id}=props
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({})
  const [dataCount, setDataCount] = useState(0)

    // console.log(selectProduct)

  useEffect(()=>{
    setSelectProduct([])
    getData()
  },[auction])
  const getData = (e="") => {
    setLoading(true)
    axios.get(UrlQuery(`${BASE_URL}${LIST_PRODUCTS}`,{auction_houses__id:id}))
        .then(resp => {
          setLoading(false)

          if ((resp.data.code === 200) && resp.data?.data?.result) {
            const res = resp.data?.data?.result;
            // form.setFieldsValue(res)
            setData(res)
            setDataCount(resp.data?.data?.count)
            // let check = Object.keys(res).some(t => !res[t]);
            // console.log(check)
            // setNext(!check)
          }
        })
        .catch(err => {
          setLoading(false)
          console.error(err);
          message.error("صفحه را دوباره لود کنید")
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
                    placeholder="در بیش از 100 حراج جستجو کنید."
                    onChange={(e)=>getData(e.target.value)}
                />
                <button type="button" className="btn-search"></button>
              </div>
            </div>
            <div className="col-md-3 num-artwork">
              <span className="font12">آثار انتخاب شده: </span>
              <span className="num-artwork-item pinkcolor">{selectProduct?.length}</span>
              <span className="num-artwork-item">از</span>
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
                    cover={
                      <img
                          alt="بدون تصویر"
                          src={item?.media?.exact_url}
                      />
                    }
                    // actions={[
                    //   <SettingOutlined key="setting" />,
                    //   <EditOutlined key="edit" />,
                    //   <EllipsisOutlined key="ellipsis" />,
                    // ]}
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
                      title={item.artwork_title}
                      description={item?.technique}
                  />
                </Card>
              </div>
                </div>
            ):''
          }
            </div>
          </div>
           {/*<div className="form-check img-checkbox">*/}
           {/*  <input*/}
           {/*      className="form-check-input"*/}
           {/*      type="checkbox"*/}
           {/*      value=""*/}
           {/*      id="checkbox1"*/}
           {/*  />*/}
           {/*  <label className="form-check-label" htmlFor="checkbox1">*/}
           {/*    <div className="artwork-block">*/}
           {/*      <div className="artwork-img">*/}
           {/*        <img*/}
           {/*            src="img/img-1.jpg"*/}
           {/*            width="547"*/}
           {/*            height="547"*/}
           {/*            alt=""*/}
           {/*            className="img-fluid"*/}
           {/*        />*/}
           {/*      </div>*/}
           {/*      <div className="ra-row mrgt10">*/}
           {/*        <div className="ra-col">*/}
           {/*          <h6 className="default gray50 ">سهراب سپهری</h6>*/}
           {/*          <h4 className="default">از ژورنال سقاخانه</h4>*/}
           {/*        </div>*/}
           {/*        <div className="ra-col">*/}
           {/*          <h5 className="default lot-num">1</h5>*/}
           {/*        </div>*/}
           {/*      </div>*/}
           {/*    </div>*/}
           {/*  </label>*/}
           {/*</div>*/}

          {/*<div className="chooseartwork">*/}
          {/*  <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1">*/}
          {/*    <div className="col">*/}
          {/*      <div className="form-check img-checkbox">*/}
          {/*        <input*/}
          {/*            className="form-check-input"*/}
          {/*            type="checkbox"*/}
          {/*            value=""*/}
          {/*            id="checkbox1"*/}
          {/*        />*/}
          {/*        <label className="form-check-label" htmlFor="checkbox1">*/}
          {/*          <div className="artwork-block">*/}
          {/*            <div className="artwork-img">*/}
          {/*              <img*/}
          {/*                  src="img/img-1.jpg"*/}
          {/*                  width="547"*/}
          {/*                  height="547"*/}
          {/*                  alt=""*/}
          {/*                  className="img-fluid"*/}
          {/*              />*/}
          {/*            </div>*/}
          {/*            <div className="ra-row mrgt10">*/}
          {/*              <div className="ra-col">*/}
          {/*                <h6 className="default gray50 ">سهراب سپهری</h6>*/}
          {/*                <h4 className="default">از ژورنال سقاخانه</h4>*/}
          {/*              </div>*/}
          {/*              <div className="ra-col">*/}
          {/*                <h5 className="default lot-num">1</h5>*/}
          {/*              </div>*/}
          {/*            </div>*/}
          {/*          </div>*/}
          {/*        </label>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div className="col">*/}
          {/*      <div className="form-check img-checkbox">*/}
          {/*        <input*/}
          {/*            className="form-check-input"*/}
          {/*            type="checkbox"*/}
          {/*            checked*/}
          {/*            value=""*/}
          {/*            id="checkbox2"*/}
          {/*        />*/}
          {/*        <label className="form-check-label" htmlFor="checkbox2">*/}
          {/*          <div className="artwork-block">*/}
          {/*            <div className="artwork-img">*/}
          {/*              <img*/}
          {/*                  src="img/img-6.jpg"*/}
          {/*                  width="317"*/}
          {/*                  height="280"*/}
          {/*                  alt=""*/}
          {/*                  className="img-fluid"*/}
          {/*              />*/}
          {/*            </div>*/}
          {/*            <div className="ra-row mrgt10">*/}
          {/*              <div className="ra-col">*/}
          {/*                <h6 className="default gray50 ">سهراب سپهری</h6>*/}
          {/*                <h4 className="default">از ژورنال سقاخانه</h4>*/}
          {/*              </div>*/}
          {/*              <div className="ra-col">*/}
          {/*                <h5 className="default lot-num">2</h5>*/}
          {/*              </div>*/}
          {/*            </div>*/}
          {/*          </div>*/}
          {/*        </label>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div className="col">*/}
          {/*      <div className="form-check img-checkbox">*/}
          {/*        <input*/}
          {/*            className="form-check-input"*/}
          {/*            type="checkbox"*/}
          {/*            value=""*/}
          {/*            id="checkbox3"*/}
          {/*        />*/}
          {/*        <label className="form-check-label" htmlFor="checkbox3">*/}
          {/*          <div className="artwork-block">*/}
          {/*            <div className="artwork-img">*/}
          {/*              <img*/}
          {/*                  src="img/img-7.jpg"*/}
          {/*                  width="317"*/}
          {/*                  height="280"*/}
          {/*                  alt=""*/}
          {/*                  className="img-fluid"*/}
          {/*              />*/}
          {/*            </div>*/}
          {/*            <div className="ra-row mrgt10">*/}
          {/*              <div className="ra-col">*/}
          {/*                <h6 className="default gray50 ">سهراب سپهری</h6>*/}
          {/*                <h4 className="default">از ژورنال سقاخانه</h4>*/}
          {/*              </div>*/}
          {/*              <div className="ra-col">*/}
          {/*                <h5 className="default lot-num">3</h5>*/}
          {/*              </div>*/}
          {/*            </div>*/}
          {/*          </div>*/}
          {/*        </label>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div className="col">*/}
          {/*      <div className="form-check img-checkbox">*/}
          {/*        <input*/}
          {/*            className="form-check-input"*/}
          {/*            type="checkbox"*/}
          {/*            value=""*/}
          {/*            id="checkbox4"*/}
          {/*        />*/}
          {/*        <label className="form-check-label" htmlFor="checkbox4">*/}
          {/*          <div className="artwork-block">*/}
          {/*            <div className="artwork-img">*/}
          {/*              <img*/}
          {/*                  src="img/img-8.jpg"*/}
          {/*                  width="317"*/}
          {/*                  height="280"*/}
          {/*                  alt=""*/}
          {/*                  className="img-fluid"*/}
          {/*              />*/}
          {/*            </div>*/}
          {/*            <div className="ra-row mrgt10">*/}
          {/*              <div className="ra-col">*/}
          {/*                <h6 className="default gray50 ">سهراب سپهری</h6>*/}
          {/*                <h4 className="default">از ژورنال سقاخانه</h4>*/}
          {/*              </div>*/}
          {/*              <div className="ra-col">*/}
          {/*                <h5 className="default lot-num">4</h5>*/}
          {/*              </div>*/}
          {/*            </div>*/}
          {/*          </div>*/}
          {/*        </label>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div className="col">*/}
          {/*      <div className="form-check img-checkbox">*/}
          {/*        <input*/}
          {/*            className="form-check-input"*/}
          {/*            type="checkbox"*/}
          {/*            value=""*/}
          {/*            id="checkbox5"*/}
          {/*        />*/}
          {/*        <label className="form-check-label" htmlFor="checkbox5">*/}
          {/*          <div className="artwork-block">*/}
          {/*            <div className="artwork-img">*/}
          {/*              <img*/}
          {/*                  src="img/img-9.jpg"*/}
          {/*                  width="317"*/}
          {/*                  height="280"*/}
          {/*                  alt=""*/}
          {/*                  className="img-fluid"*/}
          {/*              />*/}
          {/*            </div>*/}
          {/*            <div className="ra-row mrgt10">*/}
          {/*              <div className="ra-col">*/}
          {/*                <h6 className="default gray50 ">سهراب سپهری</h6>*/}
          {/*                <h4 className="default">از ژورنال سقاخانه</h4>*/}
          {/*              </div>*/}
          {/*              <div className="ra-col">*/}
          {/*                <h5 className="default lot-num">5</h5>*/}
          {/*              </div>*/}
          {/*            </div>*/}
          {/*          </div>*/}
          {/*        </label>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div className="col">*/}
          {/*      <div className="form-check img-checkbox">*/}
          {/*        <input*/}
          {/*            className="form-check-input"*/}
          {/*            type="checkbox"*/}
          {/*            value=""*/}
          {/*            id="checkbox6"*/}
          {/*        />*/}
          {/*        <label className="form-check-label" htmlFor="checkbox6">*/}
          {/*          <div className="artwork-block">*/}
          {/*            <div className="artwork-img">*/}
          {/*              <img*/}
          {/*                  src="img/img-1.jpg"*/}
          {/*                  width="547"*/}
          {/*                  height="547"*/}
          {/*                  alt=""*/}
          {/*                  className="img-fluid"*/}
          {/*              />*/}
          {/*            </div>*/}
          {/*            <div className="ra-row mrgt10">*/}
          {/*              <div className="ra-col">*/}
          {/*                <h6 className="default gray50 ">سهراب سپهری</h6>*/}
          {/*                <h4 className="default">از ژورنال سقاخانه</h4>*/}
          {/*              </div>*/}
          {/*              <div className="ra-col">*/}
          {/*                <h5 className="default lot-num">6</h5>*/}
          {/*              </div>*/}
          {/*            </div>*/}
          {/*          </div>*/}
          {/*        </label>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div className="col">*/}
          {/*      <div className="form-check img-checkbox">*/}
          {/*        <input*/}
          {/*            className="form-check-input"*/}
          {/*            type="checkbox"*/}
          {/*            checked*/}
          {/*            value=""*/}
          {/*            id="checkbox7"*/}
          {/*        />*/}
          {/*        <label className="form-check-label" htmlFor="checkbox7">*/}
          {/*          <div className="artwork-block">*/}
          {/*            <div className="artwork-img">*/}
          {/*              <img*/}
          {/*                  src="img/img-6.jpg"*/}
          {/*                  width="317"*/}
          {/*                  height="280"*/}
          {/*                  alt=""*/}
          {/*                  className="img-fluid"*/}
          {/*              />*/}
          {/*            </div>*/}
          {/*            <div className="ra-row mrgt10">*/}
          {/*              <div className="ra-col">*/}
          {/*                <h6 className="default gray50 ">سهراب سپهری</h6>*/}
          {/*                <h4 className="default">از ژورنال سقاخانه</h4>*/}
          {/*              </div>*/}
          {/*              <div className="ra-col">*/}
          {/*                <h5 className="default lot-num">7</h5>*/}
          {/*              </div>*/}
          {/*            </div>*/}
          {/*          </div>*/}
          {/*        </label>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div className="col">*/}
          {/*      <div className="form-check img-checkbox">*/}
          {/*        <input*/}
          {/*            className="form-check-input"*/}
          {/*            type="checkbox"*/}
          {/*            checked*/}
          {/*            value=""*/}
          {/*            id="checkbox8"*/}
          {/*        />*/}
          {/*        <label className="form-check-label" htmlFor="checkbox8">*/}
          {/*          <div className="artwork-block">*/}
          {/*            <div className="artwork-img">*/}
          {/*              <img*/}
          {/*                  src="img/img-7.jpg"*/}
          {/*                  width="317"*/}
          {/*                  height="280"*/}
          {/*                  alt=""*/}
          {/*                  className="img-fluid"*/}
          {/*              />*/}
          {/*            </div>*/}
          {/*            <div className="ra-row mrgt10">*/}
          {/*              <div className="ra-col">*/}
          {/*                <h6 className="default gray50 ">سهراب سپهری</h6>*/}
          {/*                <h4 className="default">از ژورنال سقاخانه</h4>*/}
          {/*              </div>*/}
          {/*              <div className="ra-col">*/}
          {/*                <h5 className="default lot-num">8</h5>*/}
          {/*              </div>*/}
          {/*            </div>*/}
          {/*          </div>*/}
          {/*        </label>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div className="col">*/}
          {/*      <div className="form-check img-checkbox">*/}
          {/*        <input*/}
          {/*            className="form-check-input"*/}
          {/*            type="checkbox"*/}
          {/*            value=""*/}
          {/*            id="checkbox9"*/}
          {/*        />*/}
          {/*        <label className="form-check-label" htmlFor="checkbox9">*/}
          {/*          <div className="artwork-block">*/}
          {/*            <div className="artwork-img">*/}
          {/*              <img*/}
          {/*                  src="img/img-8.jpg"*/}
          {/*                  width="317"*/}
          {/*                  height="280"*/}
          {/*                  alt=""*/}
          {/*                  className="img-fluid"*/}
          {/*              />*/}
          {/*            </div>*/}
          {/*            <div className="ra-row mrgt10">*/}
          {/*              <div className="ra-col">*/}
          {/*                <h6 className="default gray50 ">سهراب سپهری</h6>*/}
          {/*                <h4 className="default">از ژورنال سقاخانه</h4>*/}
          {/*              </div>*/}
          {/*              <div className="ra-col">*/}
          {/*                <h5 className="default lot-num">9</h5>*/}
          {/*              </div>*/}
          {/*            </div>*/}
          {/*          </div>*/}
          {/*        </label>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div className="col">*/}
          {/*      <div className="form-check img-checkbox">*/}
          {/*        <input*/}
          {/*            className="form-check-input"*/}
          {/*            type="checkbox"*/}
          {/*            value=""*/}
          {/*            id="checkbox10"*/}
          {/*        />*/}
          {/*        <label className="form-check-label" htmlFor="checkbox10">*/}
          {/*          <div className="artwork-block">*/}
          {/*            <div className="artwork-img">*/}
          {/*              <img*/}
          {/*                  src="img/img-9.jpg"*/}
          {/*                  width="317"*/}
          {/*                  height="280"*/}
          {/*                  alt=""*/}
          {/*                  className="img-fluid"*/}
          {/*              />*/}
          {/*            </div>*/}
          {/*            <div className="ra-row mrgt10">*/}
          {/*              <div className="ra-col">*/}
          {/*                <h6 className="default gray50 ">سهراب سپهری</h6>*/}
          {/*                <h4 className="default">از ژورنال سقاخانه</h4>*/}
          {/*              </div>*/}
          {/*              <div className="ra-col">*/}
          {/*                <h5 className="default lot-num">10</h5>*/}
          {/*              </div>*/}
          {/*            </div>*/}
          {/*          </div>*/}
          {/*        </label>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
      </Spin>
    </>
  );
}

export default Chooseartwork;
