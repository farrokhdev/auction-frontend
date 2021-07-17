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
import Suggest from "./suggest";
import Currency from "./currency";
import Validate from "./validate";

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
    const {id} = useSelector((state) => state.profileReducer)
    const {
        data,
        products,
        selectComponent,
        payment_method,
        steps,
        extendable_deadline,
        has_recommendation,
        admin_confirmation,
        add_previous_buyer,
        productsDate,
        choose_product_daily,
        productsArrayDate,
        other,
        is_send_invitation,
        has_gallery,

    } = useSelector((state) => state.auctionReducer)
    const checkData = useSelector((state) => state.auctionReducer)

    useEffect(() => {


        if (!id)
            dispatch(getProfile())
    }, [])

    const sendData = async () => {
        // console.log(products, productsDate, data, checkData)
        let allData = data
        let allDataMain = {}
        Object.assign(allDataMain, checkData)
        delete allDataMain["data"]
        delete allDataMain["productsArrayDate"]
        delete allDataMain["productsDate"]
        delete allDataMain["products"]
        delete allDataMain["error"]
        setLoading(true)
        allData["start_time"] = moment(data.start_time).format("YYYY-MM-DD hh:mm:ss")
        allData["end_time"] = (data?.type !== "LIVE") ? moment(data.end_time).format("YYYY-MM-DD hh:mm:ss") : null
        allData["bidding_interval"] = (data?.type === "ONLINE") ? data.bidding_interval : null
        let auction_product = []
        let auctions_date = []
        if (choose_product_daily) {
            Object.keys(productsDate).map(t => {
                let p = []
                Object.keys(productsDate[t]).map(c => p.push(productsDate[t][productsDate[t][c]?.id]?.id))
                auctions_date.push({date: t, products_id: p})
            })
            auction_product = productsArrayDate.map(t => ({
                base_price: (t?.base_price || 0),
                product_id: t?.id
            }))
        } else {
            Object.keys(products).map(t => (auction_product.push({
                base_price: (products[t]?.base_price || 0),
                product_id: products[t]?.id
            })))
        }
        let getDate = new Date();
        getDate = moment(getDate).format("YYYY-MM-DDThh:mm")
        let file_name = is_send_invitation ? allData?.title + getDate : ""

        axios.post(`${BASE_URL}${ADD_AUCTION}`, {
            ...allDataMain,
            ...allData,
            // steps,
            // extendable_deadline,
            // has_recommendation,
            // admin_confirmation,
            // add_previous_buyer,
            // payment_method:payment_method,
            auction_product: auction_product,
            auctions_date: auctions_date,
            "is_live_streaming": false,
            "is_bidding_banned": false,
            file_name,
            // "currency": data.currency,
            // other,
            // is_send_invitation,
            // has_gallery
            // house:id
        })
            .then(resp => {
                setLoading(false)
                if (resp.data.code === 201) {
                    message.success("اطلاعات حساب شما با موفقیت ثبت شد")
                    setNext(true)
                    dispatch(removeAUCTION())
                } else {
                    console.log(resp)
                }
            })
            .catch(err => {
                setLoading(false)
                console.error(err.response);
                let t=err.response?.data?.message==="ok" ? err.response?.data?.data?.error_message :err.response?.data?.message
                message.error(t)
            })
    }
    if (next) {
        return <Redirect to="/auctions-list"/>
    }

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
                                                                       className={`${selectComponent === item?.value && "current"} ${selectComponent > item?.value && "done"}`}>
                                        <span className="d-none d-md-inline-block"> {item?.name}</span>
                                        <span className="wizard-mobile d-md-none">{i + 1}</span>
                                    </li>)
                                }
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
                                                 steps={steps}
                                                 payment_method={payment_method} setPayment_method={setPayment_method}/>
                            })
                        }
                        <div className="text-start">
                            {selectComponent !== 1 ?
                                <Button type="button" className="btn-warn-custom mt-4" loading={loading}
                                        onClick={() => {
                                            dispatch(removeAUCTION())
                                        }}>انصراف و حذف اطلاعات
                                </Button> : ''}
                            {selectComponent === 6 ?
                                <Button className="btn-default me-2" loading={loading} onClick={sendData}>ثبت
                                    نهایی</Button> : ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Index;
