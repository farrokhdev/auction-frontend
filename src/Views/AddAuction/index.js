import React, {useEffect, useReducer, useState} from 'react';
import HeaderPanel from '../../components/HeaderPanel';
import PanelSidebar from '../../components/PanelSidebar';
import {Link} from "react-router-dom";
import BaseInformation from "./baseInformation";
import EditPanelProfile from "../BuyerRegister/profile";
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import {ADD_AUCTION} from "../../utils/constant";
import {message} from "antd";
import Conditions from "./conditions";
import Products from "./products";
import {useDispatch, useSelector} from "react-redux";
import {getProfile} from "../../redux/reducers/profile/profile.actions";

const listComponent = [
    {name: "اطلاعات پایه", value: 1},
    {name: "انتخاب محصول", value: 2},
    {name: "شرایط", value: 3},
]


function Index() {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [selectComponent, setSelectComponent] = useState(1);
    const dispatch = useDispatch();
    const {id} = useSelector((state) => state.profileReducer)

    useEffect(() => {
        if (!id)
            dispatch(getProfile())
    }, [])

    const sendData = (values) => {
        setLoading(true)
        axios.post(`${BASE_URL}${ADD_AUCTION}`, data)
            .then(resp => {
                setLoading(false)
                if (resp.data.code === 201 && resp.data?.data?.result) {
                    const res = resp.data?.data?.result;
                    message.success("افزایش موجودی با موفقیت انجام شد")
                    // let check = Object.keys(res).some(t => !res[t]);
                    // setNext(!check)

                    // refreshTable()
                    // setIsModalVisible(false)
                }
            })
            .catch(err => {
                setLoading(false)
                console.error(err);
                message.error("دوباره تلاش کنید")
            })
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
                        {selectComponent === 1 &&
                        <BaseInformation setSelectComponent={setSelectComponent} selectComponent={selectComponent}
                                         finalData={data} setFinalData={setData}/>}
                        {selectComponent === 2 &&
                        <Products setSelectComponent={setSelectComponent} selectComponent={selectComponent}
                                  finalData={data} setFinalData={setData} products={products}
                                  id={id}
                                  setProducts={setProducts}/>}
                        {selectComponent === 3 &&
                        <Conditions setSelectComponent={setSelectComponent} selectComponent={selectComponent}
                                    finalData={data} setFinalData={setData} products={products} id={id}/>}
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
