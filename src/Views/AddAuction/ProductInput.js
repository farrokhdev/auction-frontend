import React, { useEffect, useState } from 'react';
import { Card } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import { setAUCTION } from "../../redux/reducers/auction/auction.actions";
import Meta from "antd/es/card/Meta";
import { useDispatch, useSelector } from "react-redux";
import { handleShowImage } from '../../utils/showImageProduct';

const ProductInput = (props) => {
    const { type, products ,lot_num } = useSelector((state) => state.auctionReducer);
    const { item, key, setCheck } = props;
    const dispatch = useDispatch();

    return (
        <div key={key}
            className="col-12 col-md-6 col-lg-4 ">
            <div className="my-3">

                <Card
                    style={{ width: "100%" }}
                    cover={
                        <img
                            alt="بدون تصویر"
                            src={products[item] && handleShowImage(products[item])}
                        />
                    }
                    actions={[
                        <DeleteFilled key="ellipsis" onClick={() => {
                            setCheck(state => false)
                            let p = products;
                            delete p[item];
                            dispatch(setAUCTION({ products: p }))
                            setTimeout(() => {
                                setCheck(state => true)
                            }, 200)

                        }} />,
                    ]}
                >
                    <Meta
                        title={products[item]?.artwork_title}
                        description={
                            <div className="pt-2">
                                <div className="d-flex align-items-center justify-content-between">
                                    <input type="number" className="default-input"
                                        defaultValue={products[item]?.base_price || 0}
                                        placeholder={type === "PERIODIC" ? "قیمت پایه ..." : "کمترین قیمت ..."}
                                        onChange={e => {
                                            let val = e.target.value;

                                            if ((val.length > 3) || (val === "")) {
                                                let p = products;
                                                p[item]["base_price"] = (val || 0);
                                                dispatch(setAUCTION({ products: p }))
                                            }

                                        }}
                                    />
                        
                                    <small className="pe-2">تومان</small></div>
                                {((type !== "ONLINE") && (type !== "LIVE") && (type !== "PERIODIC")) ? <div className="pt-2">
                                    <div
                                        className="d-flex align-items-center justify-content-between ">
                                        <input type="number" className="default-input"
                                            defaultValue={products[item]?.reserve_price}
                                            placeholder={"قیمت رزرو ..."}
                                            onChange={e => {
                                                let val = e.target.value
                                                if ((val.length > 3) || (val === "")) {
                                                    let p = products;
                                                    p[item]["reserve_price"] = (e.target.value || 0)
                                                    dispatch(setAUCTION({ products: p }))
                                                }
                                            }}
                                        /><small className="pe-2">تومان</small></div>
                                </div> : ''}
                                <div className="d-flex align-items-center justify-content-between pt-2">
                                
                                    <input type="number" className="default-input"
                                        defaultValue={products[item]?.lot_num || 0 }
                                        placeholder="شماره لت محصول"
                                        onChange={e => {
                                            let val = e.target.value;
                                            
                                            // if () {
                                                let p = products;
                                                p[item]["lot_num"] = (val || 0);
                                                dispatch(setAUCTION({ products: p }))
                                            // }
                                            
                                                // dispatch(setAUCTION({ ...props.state , lot_num : e.target.value}))
                                        }}
                                    />
                                    <small className="pe-2">شماره لت</small></div>
                            </div>}
                    />
                </Card>
            </div>
        </div>
    );
};

export default ProductInput;
