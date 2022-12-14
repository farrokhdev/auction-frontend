import React, { useEffect, useReducer, useState } from 'react'
import HeaderPanel from '../../componentsEN/HeaderPanel';
import PanelSideBar from '../../componentsEN/PanelSideBar';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect, useParams } from 'react-router-dom';
import { Button, message, Spin } from 'antd';
import BaseInformation from './BaseInformation';
import Currency from './Currency';
import Suggest from './Suggest'
import {removeAUCTION , setAUCTION } from '../../redux/reducers/auction/auction.actions';
import Products from './products';
import Validate from './validate';
import Conditions from './Conditions';
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import {ADD_AUCTION, DETAIL_AUCTION, EDIT_AUCTION} from "../../utils/constant";
import moment from "moment-jalaali";
import {UrlQuery} from "../../utils/utils";
import {getProfile} from '../../redux/reducers/profile/profile.actions';


function AddAuction() {

    const [loading, setLoading] = useState(false)
    const [next, setNext] = useState(false)
    
    // We have turned the components into lists that contain the names, values, and names of the components.
    const listComponent = [
        {
            name: "Basic information", num: 1,
            thisComponent: BaseInformation
        },
        {
            name: "Product selection", num: 2,
            thisComponent: Products
        },
        {
            name: "Currency", num: 3,
            thisComponent: Currency
        },
        {
            name: "Bid ranges", num: 4,
            thisComponent: Suggest
        },
        {
            name: "Buyers' validation", num: 5,
            thisComponent: Validate
        },
        {
            name: "Conditions", num: 6,
            thisComponent: Conditions
        },
    ]

    let { auctionId } = useParams();
    const dispatch = useDispatch();
    const checkData = useSelector((state) => state.auctionReducer)
    const {id} = useSelector((state) => state.profileReducer)
    const {
        products,
        selectComponent,
        payment_method,
        steps,
        productsDate,
        choose_product_daily,
        productsArrayDate,
        is_send_invitation } = useSelector((state) => state.auctionReducer)


        useEffect(() => {
            if (auctionId !== "new")
                getData()
            if (!id)
                dispatch(getProfile())
        }, [])

        const getData = (e = "") => {
            setLoading(true)
            axios.get(UrlQuery(`${BASE_URL}${DETAIL_AUCTION(auctionId)}`))
                .then(resp => {
                    setLoading(false)
    
                    if ((resp.data.code === 200) && resp.data?.data?.result) {
    
                        const res = resp.data?.data?.result;
                        let productsGet = {}
                        let stepsGet = []
                        let productsArrayDateGet = []
                        let productsDateGet = {}
                        let choose_product_daily_get = !!res?.dates_auction?.length;
                        let gallery_start_date_get = res?.gallery_start_date ? res?.gallery_start_date : ''
                        let gallery_end_date_get = res?.gallery_end_date ? res?.gallery_end_date : ''
                        let start_clock = res?.start_time.slice(11)
                        let end_clock = res?.end_time.slice(11)
                        let gallery_start_clock =res?.gallery_start_date ? moment(res?.gallery_start_date.slice(11), "HH:mm") : moment("08:00","HH:mm")
                        let gallery_end_clock =res?.gallery_end_date ? moment(res?.gallery_end_date.slice(11), "HH:mm") : moment("20:00","HH:mm")
    
                        res.auction_product.map(t => productsGet[t?.product_id] = {...t?.product, ...t, id: t?.product_id})
                        stepsGet = res.steps.map((t, i, array) => ({minimum: (i > 0 ? array[i - 1]?.threshold : 0), ...t}))
                        if (res?.dates_auction?.length) {
                            res.dates_auction.map(t => {
                                let p = {}
                                t?.product?.length && t?.product.map(c => {
                                    p[c?.id] = c
                                })
                                productsDateGet[t?.date] = p
                            })
                            productsArrayDateGet = res.auction_product.map(t => ({...t?.product, ...t, id: t?.product_id}))
                        }
                        dispatch(setAUCTION({
                            ...res,
                            products:productsGet,
                            steps:stepsGet,
                            gallery_start_date:gallery_start_date_get,
                            gallery_end_date:gallery_end_date_get,
                            productsDate:productsDateGet,
                            productsArrayDate:productsArrayDateGet,
                            choose_product_daily:choose_product_daily_get,
                            start_clock: moment(start_clock, "HH:mm"),
                            end_clock: moment(end_clock, "HH:mm"),
                            gallery_start_clock:gallery_start_clock,
                            gallery_end_clock:gallery_end_clock,
                        }))
                        // setData(res)
                        // setDataCount(resp.data?.data?.count)
                    }
                })
                .catch(err => {
                    setLoading(false)
                    console.error(err);
                    message.error("Reload the page")
                })
        }
    

        const sendData = async (values) => {
            // console.log(products, productsDate, data, checkData)
    
            // let allData = {...data, ...values}
            let allData = {...values}
            let allDataMain = {}
            Object.assign(allDataMain, checkData)
            delete allDataMain["data"]
            delete allDataMain["productsArrayDate"]
            delete allDataMain["productsDate"]
            delete allDataMain["products"]
            delete allDataMain["error"]
            delete allData["dates_auction"]
            delete allDataMain["dates_auction"]
    
            if (!allDataMain?.gallery_start_date) {
                //error from server
                delete allDataMain["gallery_start_date"]
                delete allDataMain["gallery_end_date"]
            }else{
                allDataMain["gallery_start_date"]=await moment(allDataMain.gallery_start_date).format("YYYY-MM-DD ") + moment(allDataMain.gallery_start_clock).format("HH:mm")
                allDataMain["gallery_end_date"]=await moment(allDataMain.gallery_end_date).format("YYYY-MM-DD ") + moment(allDataMain.gallery_end_clock).format("HH:mm")
            }
            if (!allData?.gallery_start_date) {
                //error from server
                delete allData["gallery_start_date"]
                delete allData["gallery_end_date"]
            }
            if (!allDataMain?.address) {
                delete allDataMain?.address
            }
            setLoading(true)
            allData["start_time"] = await moment(allDataMain.start_time).format("YYYY-MM-DD ") + moment(allDataMain.start_clock).format("HH:mm")
            allData["end_time"] = await (allDataMain?.type !== "LIVE") ? moment(allDataMain.end_time).format("YYYY-MM-DD ") + moment(allDataMain.end_clock).format("HH:mm") : null
            allDataMain["bidding_interval"] = await (allDataMain?.type === "ONLINE") ? allDataMain.bidding_interval : null
    
            let auction_product = []
            let auctions_date = []
    
            if (choose_product_daily) {
    
                 Object.keys(productsDate).map(t => {
                    let p = []
                    Object.keys(productsDate[t]).map(c => p.push(productsDate[t][c]?.id))
                    auctions_date.push({date: moment(t,"jYYYY-jMM-jDD").format("YYYY-MM-DD ")
                        , products_id: p})
                })
                auction_product = await productsArrayDate.map(t => ({
                    base_price: (t?.base_price || 0),
                    reserve_price: (Number(t?.reserve_price) || 0),
                    product_id: t?.id,
                    lot_num:(t?.lot_num || 0)
    
                }))
            } else {
                 Object.keys(products).map(t => (auction_product.push({
                    base_price: (products[t]?.base_price || 0),
                    reserve_price: (Number(products[t]?.reserve_price) || 0),
                    product_id: products[t]?.id,
                    lot_num:( products[t]?.lot_num || 0)
                })))
                // delete allDataMain["dates_auction"]
            }
            let getDate = new Date();
            getDate = await moment(getDate).format("YYYY-MM-DDThh:mm")
            let file_name = await is_send_invitation ? allData?.title + getDate : "";
    
            if (auctionId !== "new") {
                await axios.put(`${BASE_URL}${EDIT_AUCTION(auctionId)}`, {
                    ...allDataMain,
                    ...allData,
                    auction_product: auction_product,
                    dates_auction: auctions_date,
                    "is_live_streaming": false,
                    "is_bidding_banned": false,
                    file_name,
                })
                    .then(resp => {
                        setLoading(false)
                        if (resp.data.code === 200) {
                            message.success("Your account information was successfully registered")
                            setNext(true)
                            dispatch(removeAUCTION())
    
    
                        } else {
                            console.log(resp)
                        }
                    })
                    .catch(err => {
                        setLoading(false)
                        console.error(err.response);
    
                        if (err.response?.data?.message === "ok")
                            message.error(err.response?.data?.data?.error_message)
                        else
                            message.error(err.response?.data?.message)
    
                    })
            } else {
                console.log(allDataMain,allData)
                await axios.post(`${BASE_URL}${ADD_AUCTION}`, {
                    ...allDataMain,
                    ...allData,
                    auction_product: auction_product,
                    dates_auction: auctions_date,
                    "is_live_streaming": false,
                    "is_bidding_banned": false,
                    file_name,
                    title_en:allDataMain.title
                })
                    .then(resp => {
                        setLoading(false)
                        if (resp.data.code === 201) {
                            message.success("Your account information was successfully registered")
                            setNext(true)
                            dispatch(removeAUCTION())
    
    
                        } else {
                            console.log(resp)
                        }
                    })
                    .catch(err => {
                        setLoading(false)
                        console.error(err.response);
    
                        if (err.response?.data?.message === "ok")
                            message.error(err.response?.data?.data?.error_message)
                        else
                            message.error(err.response?.data?.message)
    
                    })
            }
    
        }
        // console.log(productsDate, productsArrayDate)
        if (next) {
            return <Redirect to="/en/auctions-list"/>
        }

        const setData = (data) => {
            dispatch(setAUCTION({...data}))
        }
        const setProducts = (products) => {
            dispatch(setAUCTION({products}))
        }
        const setSelectComponent = (selectComponent) => {
            dispatch(setAUCTION({selectComponent}))
        }
        const setPayment_method = (payment_method) => {
            dispatch(setAUCTION({payment_method}))
        }
    
    return (
        <>
            <HeaderPanel />
            <div className="panel-main">
                <PanelSideBar />
                <div className="panel-body">
                    <div className="panel-container newauction">
                        <div className="wizard leftalign">
                            <ul className="wizard-list">
                                {listComponent.map((item, index) =>
                                    <li key={index} className={`${selectComponent === item?.num && "current"} ${selectComponent > item?.num && "done"}`}>
                                        <span className="d-none d-md-inline-block">{item.name}</span>
                                        <span className="wizard-mobile d-md-none">{index + 1}</span>
                                    </li>
                                )}
                            </ul>
                        </div>

                        <Spin spinning={loading}>
                            {listComponent.map(item => {
                                let MyComponent = item.thisComponent;

                                return (selectComponent === item?.num) && <MyComponent


                                    setSelectComponent={setSelectComponent}
                                    selectComponent={selectComponent}
                                    finalData={checkData} setFinalData={setData} products={products}
                                    id={id}
                                    setProducts={setProducts}
                                    steps={steps}
                                    payment_method={payment_method}
                                    setPayment_method={setPayment_method}
                                    sendData={sendData}

                                />
                            })}
                        </Spin>
                        <div className="text-start">
                            {selectComponent !== 1 ?
                                <Button type="button" className="btn-warn-custom mt-4" loading={loading}
                                onClick={() => {
                                    dispatch(removeAUCTION())
                                }}
                                >Cancel and delete information
                                </Button> : ''}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddAuction;