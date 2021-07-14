import React, {useEffect, useState} from 'react';
import {Button, Card, Checkbox, message, Modal} from "antd";
import Meta from "antd/es/card/Meta";
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import {LIST_PRODUCTS} from "../../utils/constant";
import Chooseartwork from "./ChooseArtwork";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Products = (props) => {
    const {selectComponent, setSelectComponent, products, setProducts,id} = props;
    const [loading, setLoading] = useState(false)
    // const [data, setData] = useState({})
    const [isModalVisible, setIsModalVisible] = useState(false)
    const {data} = useSelector((state) => state.auctionReducer)

    return (
        <div>
            <div className="text-center">
                <div className="default-box-choose mt-3 w-auto d-inline-block" onClick={() => {
                    setIsModalVisible(true)
                }}>انتخاب محصول
                </div>
            </div>


            <Modal centered title={
                <div className='d-flex align-items-center justify-content-between'>
                    <span className="default titr">آثار</span>

                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        onClick={() => setIsModalVisible(false)}
                    />

                </div>
            } className="text-end" width={1000} visible={isModalVisible}
                   onOk={() => setIsModalVisible(false)} onCancel={() => setIsModalVisible(false)}
                   footer={[<div className="text-center">
                       <Button key={2} type="" onClick={() => {
                           setIsModalVisible(false)
                           // let t = {}
                           // products.map(element => (t[element?.id] = element))
                           // setTimeout(() => {
                           //     setData(t)
                           //     setData(t)
                           // }, 200)

                       }}
                               className="btn-default">
                           تایید
                       </Button></div>]}>
                <Chooseartwork selectProduct={products} setSelectProduct={setProducts} id={id}/></Modal>
            <div className="row mt-3">
                {
                    products && products.length ? products.map((item, i) => <div key={i}
                                                                                 className="col-12 col-md-6 col-lg-4 ">
                            <div className="my-3">
                                <Card
                                    style={{width: "100%"}}
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
                                        title={item?.artwork_title}
                                        description={<div className="d-flex align-items-center justify-content-between">
                                            <input type="number" className="default-input"
                                                   defaultValue={item?.base_price}
                                                   placeholder="قیمت..."
                                                   onChange={e => {
                                                       // let t= {base_price:e.target.value || 0}
                                                       // let t= data
                                                       //  t[item?.id]={...t[item?.id],base_price:e.target.value || 0}
                                                       //  setData(t)
                                                       let p = products.filter(p => p?.id !== item?.id)
                                                       setProducts([...p,{...item,base_price:e.target.value || 0}])
                                                   }}
                                            /><small className="pe-2">تومان</small></div>}
                                    />
                                </Card>
                            </div>
                        </div>
                    ) : ''
                }
            </div>


        </div>
    );
};

export default Products;