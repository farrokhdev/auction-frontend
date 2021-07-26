import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCheckCircle,
    faTimesCircle,
    faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.css";

import logowhite from "../../images/logo-white.png";
import loginactive from "../../images/login-active.png";
import {Link} from "react-router-dom";
import HeaderPanel from "../../components/HeaderPanel";
import PanelSidebar from "../../components/PanelSidebar";
import EditPanelProfile from "./EditPanelProfile";
import ChangePasswordPanelProfile from "./ChangePasswordPanelProfile";
import EditPhoneNumberPanelProfile from "./EditPhoneNumberPanelProfile";
import EditEmailPanelProfile from "./EditEmailPanelProfile";
import {message, Tabs} from "antd";
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import {EDIT_PROFILE} from "../../utils/constant";
import "antd/dist/antd.css";

function PanelProfile() {
    const {TabPane} = Tabs;
    const [activeKey, setActiveKey] = useState("1")
    const [data, setData] = useState({})


    function callback(key) {
        console.log(key);
        setActiveKey(key)
    }
    useEffect(()=>{
        getData()
    },[])
    const getData = () => {
        axios.get(`${BASE_URL}${EDIT_PROFILE}`)
            .then(resp => {
                if ((resp.data.code === 200) && resp.data?.data?.result) {
                    setData(resp.data.data.result)
                }
            })
            .catch(err => {
                console.error(err);
                message.error("صفحه را دوباره لود کنید")
            })
    }
    
    return (
        <div>
            <HeaderPanel titlePage={"پروفایل"}/>
            <main>
                <div className="panel-main">
                    <PanelSidebar />
                    <div className="panel-body">
                        <div className="panel-container">
                            <Tabs activeKey={activeKey} onChange={callback} className="nav nav-tabs justify-content-star main-tab "  unmountInactiveTabs={true}>
                                <TabPane tab=" ویرایش پروفایل" key="1"  className="nav-item ">
                                    <EditPanelProfile data={data} setActiveKey={setActiveKey} getProfile={getData}/>
                                </TabPane>
                                <TabPane tab=" تغییر رمز عبور" key="2" className="nav-item ">
                                    <ChangePasswordPanelProfile data={data} getProfile={getData}/>
                                </TabPane>
                                <TabPane tab="ویرایش شماره همراه" key="3" className="nav-item " >
                                    <EditPhoneNumberPanelProfile data={data} getProfile={getData}/>
                                </TabPane>
                                <TabPane tab="ویرایش ایمیل" key="4" className="nav-item ">
                                    <EditEmailPanelProfile data={data} getProfile={getData}/>
                                </TabPane>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default PanelProfile;
