import React, {useEffect, useState} from 'react';
import {Card} from "antd";
import {DeleteFilled} from "@ant-design/icons";
import {setAUCTION} from "../../redux/reducers/auction/auction.actions";
import Meta from "antd/es/card/Meta";
import {useDispatch, useSelector} from "react-redux";

function Productinput (props) {
    const {type, products} = useSelector((state) => state.auctionReducer);
    const {item ,key ,setCheck} = props;
    const dispatch = useDispatch();


    console.log("products[item]" , products[item])
    return (
        <div key={key}
             className="col-12 col-md-6 col-lg-4 ">
            <div className="my-3">

                <Card
                    style={{width: "100%"}}
                    cover={
                        <img
                            alt="No Photo"
                            src={products[item]?.media?.exact_url}
                        />
                    }
                    actions={[
                        <DeleteFilled key="ellipsis" onClick={() => {
                            setCheck(state=>false)
                            let p = products;
                            delete p[item];
                            dispatch(setAUCTION({products: p}))
                            setTimeout(()=>{
                                setCheck(state=>true)
                            },200)

                        }}/>,
                    ]}
                >
                    <Meta
                        title={products[item]?.artwork_title_en}
                        description={
                            <div className="pt-2">
                                <div className="d-flex align-items-center justify-content-between">
                                    <input type="number" className="default-input"
                                           defaultValue={products[item]?.base_price || 0}
                                           placeholder={type === "PERIODIC" ? "base price ..." : "min price ..."}
                                           onChange={e => {
                                               let val = e.target.value;

                                               if ((val.length > 3) || (val === "")) {
                                                   let p = products;
                                                   p[item]["base_price"] = (val || 0);
                                                   dispatch(setAUCTION({products: p}))
                                               }

                                           }}
                                    /><small className="pe-2">{products[item]?.latest_auction?.currency}</small></div>
                                {((type !== "ONLINE") && (type !== "LIVE")&& (type !== "PERIODIC")) ?<div className="pt-2">
                                    <div
                                        className="d-flex align-items-center justify-content-between ">
                                        <input type="number" className="default-input"
                                               defaultValue={products[item]?.reserve_price}
                                               placeholder={"Booking price ..."}
                                               onChange={e => {
                                                   let val = e.target.value
                                                   if ((val.length > 3) || (val === "")) {
                                                       let p = products;
                                                       p[item]["reserve_price"] = (e.target.value || 0)
                                                       dispatch(setAUCTION({products: p}))
                                                   }
                                               }}
                                        />
                                        <small className="pe-2">{products[item]?.latest_auction?.currency}</small>
                                        </div>
                                </div>:''}
                            </div>}
                    />
                </Card>
            </div>
        </div>
    );
};

export default Productinput;
