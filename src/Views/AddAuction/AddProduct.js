import React, {useEffect, useState} from 'react';
import {Button, Card, Checkbox, message, Modal} from "antd";
import Meta from "antd/es/card/Meta";
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import {LIST_PRODUCTS} from "../../utils/constant";
import Chooseartwork from "./ChooseArtwork";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setAUCTION} from "../../redux/reducers/auction/auction.actions";
import {DeleteColumnOutlined, DeleteFilled} from '@ant-design/icons';

const Products = (props) => {
    const {id} = props;
    const [loading, setLoading] = useState(false)
    const [productsList, setProductsList] = useState([])
    // const [data, setData] = useState({})
    const [isModalVisible, setIsModalVisible] = useState(false)
    const {type, products} = useSelector((state) => state.auctionReducer)
    const dispatch = useDispatch();

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
                           let list = {}
                           productsList.map(t => list[t?.id] = t)
                           // console.log(productsDate,list)
                           dispatch(setAUCTION({
                               products: {...products, ...list},
                           }))
                           setIsModalVisible(false)

                       }}
                               className="btn-default">
                           تایید
                       </Button></div>]}>
                <Chooseartwork selectProduct={productsList} setSelectProduct={setProductsList} id={id} listCheck={[]}/></Modal>
            <div className="row mt-3">
                {
                    products && Object.keys(products).length ? Object.keys(products).map((item, i) => <div key={i}
                                                                                                           className="col-12 col-md-6 col-lg-4 ">
                            <div className="my-3">
                                <Card
                                    style={{width: "100%"}}
                                    cover={
                                        <img
                                            alt="بدون تصویر"
                                            src={products[item]?.media?.exact_url}
                                        />
                                    }
                                    actions={[
                                        <DeleteFilled key="ellipsis" onClick={() => {
                                            let p = products;
                                            delete p[item];
                                            dispatch(setAUCTION({products: p}))
                                        }}/>,
                                    ]}
                                >
                                    <Meta
                                        title={products[item]?.artwork_title}
                                        description={
                                            <div className="pt-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <input type="number" className="default-input"
                                                           defaultValue={products[item]?.base_price}
                                                           placeholder={type === "PERIODIC" ? "قیمت پایه ..." : "کمترین قیمت ..."}
                                                           onChange={e => {
                                                               let val = e.target.value
                                                               if ((val.length > 4) || (val === "")) {
                                                                   let p = products;
                                                                   p[item]["base_price"] = (val || 0)
                                                                   dispatch(setAUCTION({products: p}))
                                                               }

                                                           }}
                                                    /><small className="pe-2">تومان</small></div>
                                                {((type !== "ONLINE") && (type !== "LIVE")) ?<div className="pt-2">
                                                    <div
                                                        className="d-flex align-items-center justify-content-between ">
                                                        <input type="number" className="default-input"
                                                               defaultValue={products[item]?.reserve_price}
                                                               placeholder={"قیمت رزرو ..."}
                                                               onChange={e => {
                                                                   let val = e.target.value
                                                                   if ((val.length > 4) || (val === "")) {
                                                                       let p = products;
                                                                       p[item]["reserve_price"] = (e.target.value || 0)
                                                                       dispatch(setAUCTION({products: p}))
                                                                   }
                                                               }}
                                                        /><small className="pe-2">تومان</small></div>
                                                </div>:''}
                                            </div>}
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