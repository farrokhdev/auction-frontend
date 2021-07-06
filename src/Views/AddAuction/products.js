import React, {useEffect, useState} from 'react';
import {Button, Card, Checkbox, message, Modal} from "antd";
import Meta from "antd/es/card/Meta";
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import {LIST_PRODUCTS} from "../../utils/constant";
import Chooseartwork from "./ChooseArtwork";
import {Link} from "react-router-dom";

const Products = (props) => {
    const {selectComponent, setSelectComponent, products, setProducts,id} = props;
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})
    const [isModalVisible, setIsModalVisible] = useState(false)

    // useEffect(()=>{
    //     getData()
    // },[])

    // const getData = (e = "") => {
    //     setLoading(true)
    //     axios.get(`${BASE_URL}${LIST_PRODUCTS}`)
    //         .then(resp => {
    //             setLoading(false)
    //
    //             if ((resp.data.code === 200) && resp.data?.data?.result) {
    //                 const res = resp.data?.data?.result;
    //                 // form.setFieldsValue(res)
    //                 setData(res)
    //                 // setDataCount(resp.data?.data?.count)
    //                 // let check = Object.keys(res).some(t => !res[t]);
    //                 // console.log(check)
    //                 // setNext(!check)
    //             }
    //         })
    //         .catch(err => {
    //             setLoading(false)
    //             console.error(err);
    //             message.error("صفحه را دوباره لود کنید")
    //         })
    // }
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
            <div className="row">
                <div className="col-12">
                    <div className="button-group">

                        <button type="button" className="btn-gray" onClick={() => {
                            setSelectComponent(selectComponent - 1)
                        }}>بازگشت
                        </button>


                        {products.length ? <button type="button" className="btn-default" onClick={() => {
                            setSelectComponent(selectComponent + 1)
                        }}> ثبت و ادامه</button> : ''}
                    </div>
                </div>
            </div>
            {/*{*/}
            {/*    data && data?.length && data.map((item, i) => <div className="col-12 col-md-6 col-lg-4 col-xl-3">*/}
            {/*        <div className="my-3">*/}
            {/*            <Card*/}
            {/*                style={{width: "100%"}}*/}
            {/*                cover={*/}
            {/*                    <img*/}
            {/*                        alt="بدون تصویر"*/}
            {/*                        src={item?.media?.exact_url}*/}
            {/*                    />*/}
            {/*                }*/}
            {/*                // actions={[*/}
            {/*                //   <SettingOutlined key="setting" />,*/}
            {/*                //   <EditOutlined key="edit" />,*/}
            {/*                //   <EllipsisOutlined key="ellipsis" />,*/}
            {/*                // ]}*/}
            {/*            >*/}
            {/*                <Meta*/}
            {/*                    avatar={<Checkbox checked={products.some(t => item?.id === t?.id)} onChange={e => {*/}
            {/*                        if (e.target.checked)*/}
            {/*                            setProducts([...products, item])*/}
            {/*                        else {*/}
            {/*                            let t = products.filter(t => t?.id !== item?.id)*/}
            {/*                            setProducts(t)*/}
            {/*                        }*/}

            {/*                    }}/>}*/}
            {/*                    title={item.artwork_title}*/}
            {/*                    description={item?.technique}*/}
            {/*                />*/}
            {/*            </Card>*/}
            {/*        </div>*/}
            {/*    </div>)*/}
            {/*}*/}


        </div>
    );
};

export default Products;