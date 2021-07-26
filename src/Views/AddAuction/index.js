import React, {useEffect, useReducer, useState} from 'react';
import HeaderPanel from '../../components/HeaderPanel';
import PanelSidebar from '../../components/PanelSidebar';
import {Link, Redirect, useParams} from "react-router-dom";
import BaseInformation from "./baseInformation";
import EditPanelProfile from "../BuyerRegister/profile";
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import {ADD_AUCTION, DETAIL_AUCTION,EDIT_AUCTION} from "../../utils/constant";
import {Button, message, Spin} from "antd";
import Conditions from "./conditions";
import Products from "./products";
import {useDispatch, useSelector} from "react-redux";
import {getProfile} from "../../redux/reducers/profile/profile.actions";
import {removeAUCTION, setAUCTION} from "../../redux/reducers/auction/auction.actions";
import moment from "moment-jalaali";
import Suggest from "./suggest";
import Currency from "./currency";
import Validate from "./validate";
import {UrlQuery} from "../../utils/utils";

const listComponent = [
    {name: "اطلاعات پایه", value: 1, thisComponent: BaseInformation},
    {name: "انتخاب محصول", value: 2, thisComponent: Products},
    //AddProductDate
    //AddProduct
    //ChooseArtWork
    {name: " واحد پول ", value: 3, thisComponent: Currency},
    {name: " بازه پیشنهادات", value: 4, thisComponent: Suggest},
    //bidAddSuggest
    {name: "اعتبارسنجی خریداران", value: 5, thisComponent: Validate},
    //priceAddValidate
    {name: "شرایط", value: 6, thisComponent: Conditions},
]

function Index() {
    // const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)
    const [next, setNext] = useState(false)
    // const [products, setProducts] = useState([])
    // const [selectComponent, setSelectComponent] = useState(1);
    const dispatch = useDispatch();
    let {auctionId} = useParams();
    const {id} = useSelector((state) => state.profileReducer)
    const {
        data,
        products,
        selectComponent,
        payment_method,
        steps,
        productsDate,
        choose_product_daily,
        productsArrayDate,
        is_send_invitation,

    } = useSelector((state) => state.auctionReducer)
    const checkData = useSelector((state) => state.auctionReducer)

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
                    let products = {}
                    let steps = []
                    let productsArrayDate = []
                    let productsDate = {}
                    let choose_product_daily = !!res?.dates_auction?.length;
                    let gallery_start_date =res?.gallery_start_date ? res?.gallery_start_date :''
                    let gallery_end_date =res?.gallery_end_date ? res?.gallery_end_date :''

                    res.auction_product.map(t => products[t?.product_id] = {...t?.product, ...t,id:t?.product_id})
                    steps = res.steps.map((t, i, array) => ({minimum: (i > 0 ? array[i - 1]?.threshold : 0), ...t}))
                    if(res?.dates_auction?.length){
                        res.dates_auction.map(t => {
                            let p= {}
                            t?.product?.length && t?.product.map(c=>{
                                p[c?.id]=c
                            })
                            productsDate[t?.date] =p
                        })
                        productsArrayDate= res.auction_product.map(t =>({...t?.product, ...t,id:t?.product_id}))
                    }
                    dispatch(setAUCTION({
                        ...res,
                        products,
                        steps,
                        gallery_start_date,
                        gallery_end_date,
                        productsDate,
                        productsArrayDate,
                        choose_product_daily
                    }))
                    // setData(res)
                    // setDataCount(resp.data?.data?.count)
                }
            })
            .catch(err => {
                setLoading(false)
                console.error(err);
                message.error("صفحه را دوباره لود کنید")
            })
    }

    const sendData =async (values) => {
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

        if(!allDataMain?.gallery_start_date){
            //error from server
            delete allDataMain["gallery_start_date"]
            delete allDataMain["gallery_end_date"]
        }
        if( !allData?.gallery_start_date){
            //error from server
            delete allData["gallery_start_date"]
            delete allData["gallery_end_date"]
        }
        if( !allDataMain?.address){
            delete allData?.address
        }
        setLoading(true)
        allData["start_time"] = await moment(allDataMain.start_time).format("YYYY-MM-DD hh:mm:ss")
        allData["end_time"] = await (allDataMain?.type !== "LIVE") ? moment(allDataMain.end_time).format("YYYY-MM-DD hh:mm:ss") : null
        allDataMain["bidding_interval"] = await (allDataMain?.type === "ONLINE") ? allDataMain.bidding_interval : null

        let auction_product = []
        let auctions_date = []
        if (choose_product_daily) {
            await Object.keys(productsDate).map(t => {
                let p = []
                Object.keys(productsDate[t]).map(c => p.push(productsDate[t][c]?.id))
                auctions_date.push({date: t, products_id: p})
            })
            auction_product = await productsArrayDate.map(t => ({
                base_price: (t?.base_price || 0),
                reserve_price: (t?.reserve_price || 0),
                product_id: t?.id
            }))
        } else {
            await    Object.keys(products).map(t => (auction_product.push({
                base_price: (products[t]?.base_price || 0),
                reserve_price: (products[t]?.reserve_price || 0),
                product_id: products[t]?.id
            })))
        }
        let getDate = new Date();
        getDate = await moment(getDate).format("YYYY-MM-DDThh:mm")
        let file_name = await is_send_invitation ? allData?.title + getDate : "";

        if (auctionId !== "new" ){
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
                    if (resp.data.code === 201) {
                        message.success("اطلاعات حساب شما با موفقیت ثبت شد")
                        dispatch(removeAUCTION())
                        setNext(true)

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
        }else {
            await axios.post(`${BASE_URL}${ADD_AUCTION}`, {
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
                    if (resp.data.code === 201) {
                        message.success("اطلاعات حساب شما با موفقیت ثبت شد")
                        dispatch(removeAUCTION())
                        setNext(true)

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
        return <Redirect to="/auctions-list"/>
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
        <div>
            <HeaderPanel/>
            <div className="panel-main">

                <PanelSidebar/>
                <div className="panel-body">
                    <div className="panel-container newauction">
                        <div className="wizard leftalign">
                            <ul className="wizard-list">
                                {
                                    listComponent.map((item, i) => <li key={i}
                                                                       className={`${selectComponent === item?.value && "current"} ${selectComponent > item?.value && "done"}`}>
                                        <span className="d-none d-md-inline-block"> {item?.name}</span>
                                        <span className="wizard-mobile d-md-none">{i + 1}</span>
                                    </li>)
                                }
                            </ul>
                        </div>
                        <Spin spinning={loading}>
                        {
                            listComponent.map((item, i) => {
                                let MyComponent = item.thisComponent;
                                return (selectComponent === item.value) &&
                                    <MyComponent setSelectComponent={setSelectComponent}
                                                 selectComponent={selectComponent}
                                                 finalData={checkData} setFinalData={setData} products={products} id={id}
                                                 setProducts={setProducts}
                                                 steps={steps}
                                                 payment_method={payment_method} setPayment_method={setPayment_method}
                                                 sendData={sendData}
                                    />
                            })
                        }
                        </Spin>
                        <div className="text-start">
                            {selectComponent !== 1 ?
                                <Button type="button" className="btn-warn-custom mt-4" loading={loading}
                                        onClick={() => {
                                            dispatch(removeAUCTION())
                                        }}>انصراف و حذف اطلاعات
                                </Button> : ''}
                            {/*{selectComponent === 6 ?*/}
                            {/*    <Button className="btn-default me-2" loading={loading} onClick={sendData}>ثبت*/}
                            {/*        نهایی</Button> : ''}*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Index;
