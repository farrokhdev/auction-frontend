import React, {useEffect, useReducer, useState} from 'react';
import HeaderPanel from '../../components/HeaderPanel';
import PanelSidebar from '../../components/PanelSidebar';
import {Link, Redirect} from "react-router-dom";
import BaseInformation from "./baseInformation";
import EditPanelProfile from "../BuyerRegister/profile";
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import {ADD_AUCTION} from "../../utils/constant";
import {Button, message} from "antd";
import Conditions from "./conditions";
import Products from "./products";
import {useDispatch, useSelector} from "react-redux";
import {getProfile} from "../../redux/reducers/profile/profile.actions";
import {removeAUCTION, setAUCTION} from "../../redux/reducers/auction/auction.actions";
import moment from "moment-jalaali";

const listComponent = [
    {name: "اطلاعات پایه", value: 1, thisComponent: BaseInformation},
    {name: "انتخاب محصول", value: 2, thisComponent: Products},
    {name: "شرایط", value: 3, thisComponent: Conditions},
]


function Index() {
    // const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)
    const [next, setNext] = useState(false)
    // const [products, setProducts] = useState([])
    // const [selectComponent, setSelectComponent] = useState(1);
    const dispatch = useDispatch();
    const {id} = useSelector((state) => state.profileReducer)
    const {data, products, selectComponent, payment_method} = useSelector((state) => state.auctionReducer)

    useEffect(() => {
        if (!id)
            dispatch(getProfile())
    }, [])

    const sendData = () => {
        let allData = data
        setLoading(true)
        allData["start_time"] = moment(data.start_time).format("YYYY-MM-DD hh:mm:ss")
        allData["end_time"] = (data?.type !== "LIVE") ? moment(data.end_time).format("YYYY-MM-DD hh:mm:ss") : null
        let list_products = products.map(t => ({base_price: (t?.base_price || 0), product_id: t?.id}))
        axios.post(`${BASE_URL}${ADD_AUCTION}`, {
            ...allData,
            products_id: list_products,
            "is_live_streaming": false,
            "bidding_interval": null,
            "extendable_deadline": false,
            "is_bidding_banned": false,
        })
            .then(resp => {
                setLoading(false)
                if (resp.data.code === 201) {
                    // const res = resp.data?.data?.result;
                    message.success("اطلاعات حساب شما با موفقیت ثبت شد")
                    // let check = Object.keys(res).some(t => !res[t]);
                    setNext(true)
                    dispatch(removeAUCTION())
                    // refreshTable()
                    // setSelectComponent(selectComponent + 1)
                    // setIsModalVisible(false)
                }
            })
            .catch(err => {
                setLoading(false)
                console.error(err);
                message.error("دوباره تلاش کنید")
            })
    }
    if (next) {
        return <Redirect to="/auctions-list"/>
    }
    // const sendData = (values) => {
    //     setLoading(true)
    //     axios.post(`${BASE_URL}${ADD_AUCTION}`, data)
    //         .then(resp => {
    //             setLoading(false)
    //             if (resp.data.code === 201 && resp.data?.data?.result) {
    //                 const res = resp.data?.data?.result;
    //                 message.success("افزایش موجودی با موفقیت انجام شد")
    //                 // let check = Object.keys(res).some(t => !res[t]);
    //                 // setNext(!check)
    //
    //                 // refreshTable()
    //                 // setIsModalVisible(false)
    //             }
    //         })
    //         .catch(err => {
    //             setLoading(false)
    //             console.error(err);
    //             message.error("دوباره تلاش کنید")
    //         })
    // }
    const setData = (data) => {
        dispatch(setAUCTION({data}))
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
                                                                       className={selectComponent === item?.value && "current"}>
                                        <span className="d-none d-md-inline-block"> {item?.name}</span>
                                        <span className="wizard-mobile d-md-none">1</span>
                                    </li>)
                                }
                                {/*<li className="current">*/}
                                {/*    <span className="d-none d-md-inline-block">اطلاعات پایه</span>*/}
                                {/*    <span className="wizard-mobile d-md-none">1</span>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <span className="d-none d-md-inline-block">تاریخ حراج</span>*/}
                                {/*    <span className="wizard-mobile d-md-none">2</span>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <span className="d-none d-md-inline-block">بازه پیشنهادات</span>*/}
                                {/*    <span className="wizard-mobile d-md-none">3</span>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <span className="d-none d-md-inline-block">واحد پول</span>*/}
                                {/*    <span className="wizard-mobile d-md-none">4</span>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <span className="d-none d-md-inline-block">اعتبارسنجی خریداران</span>*/}
                                {/*    <span className="wizard-mobile d-md-none">5</span>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <span className="d-none d-md-inline-block">شرایط</span>*/}
                                {/*    <span className="wizard-mobile d-md-none">6</span>*/}
                                {/*</li>*/}
                            </ul>
                        </div>
                        {
                            listComponent.map((item, i) => {
                                let MyComponent = item.thisComponent;
                                return (selectComponent === item.value) &&
                                    <MyComponent setSelectComponent={setSelectComponent}
                                                 selectComponent={selectComponent}
                                                 finalData={data} setFinalData={setData} products={products} id={id}
                                                 setProducts={setProducts}
                                                 payment_method={payment_method} setPayment_method={setPayment_method}/>
                            })
                        }
                        {/*{selectComponent === 1 &&*/}
                        {/*<BaseInformation setSelectComponent={setSelectComponent} selectComponent={selectComponent}*/}
                        {/*                 finalData={data} setFinalData={setData}/>}*/}
                        {/*{selectComponent === 2 &&*/}
                        {/*<Products setSelectComponent={setSelectComponent} selectComponent={selectComponent}*/}
                        {/*          finalData={data} setFinalData={setData} products={products}*/}
                        {/*          id={id}*/}
                        {/*          setProducts={setProducts}/>}*/}
                        {/*{selectComponent === 3 &&*/}
                        {/*<Conditions setSelectComponent={setSelectComponent} selectComponent={selectComponent}*/}
                        {/*            finalData={data} setFinalData={setData} products={products} id={id}*/}
                        {/*            payment_method={payment_method} setPayment_method={setPayment_method}/>}*/}
                        <div className="text-start">
                            {selectComponent !== 1 ?
                                <Button type="button" className="btn-warn-custom mt-4"  loading={loading} onClick={() => {
                                    dispatch(removeAUCTION())
                                }}>انصراف و حذف اطلاعات
                                </Button> : ''}
                            {selectComponent === 3 ?
                                <Button className="btn-default me-2" loading={loading} onClick={sendData}>ثبت
                                    نهایی</Button> : ''}
                        </div>

                        {/*<div className="row">*/}
                        {/*    <div className="col-12">*/}
                        {/*        <div className="button-group">*/}
                        {/*            <button type="button" className="btn-gray">لغو</button>*/}
                        {/*            <Link to="/panel-auctions-date">*/}
                        {/*                <button type="button" className="btn-default">ادامه</button>*/}
                        {/*            </Link>*/}

                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Index;
