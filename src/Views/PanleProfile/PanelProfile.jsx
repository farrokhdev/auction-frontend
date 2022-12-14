import React, {useEffect, useState} from "react";
import {AwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCheckCircle,
    faTimesCircle,
    faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.css";

import logowhite from "../../images/logo-white.png";
import loginactive from "../../images/login-active.png";
import {Link, useHistory, useParams, withRouter} from "react-router-dom";
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

function PanelProfile(props) {
    const {TabPane} = Tabs;
    const [activeKey, setActiveKey] = useState("1")
    const [data, setData] = useState({});

    function err_msg_resolver(res_body) {
        if (res_body.code == 201 || res_body.code == 200)
            return res_body.data.error_message
        else {
            return res_body.message
        }
    }

    function callback(key) {
        // console.log(key);
        setActiveKey(key)
    }

    useEffect(() => {
        getData()

    }, [])
    const getData = () => {
        axios.get(`${BASE_URL}${EDIT_PROFILE}`)
            .then(resp => {
                if ((resp.data.code === 200) && resp.data?.data?.result) {
                    setData(resp.data.data.result)
                    // setData({...data , address :  resp.data.data.result.home_auction_location?.address})
                }
            })
            .catch(err => {
                console.error(err);
                message.error({
                    // content: err_msg_resolver(err?.response?.data),
                    content:"?????????????? ???????? ???????????????????? ?????????? ???????? ??????" ,
                    className: 'text-danger',
                    style: {
                        marginTop: '10vh',
                    },
                })
                // message.error("???????? ???? ???????????? ?????? ????????")
            })
    }

    return (
        <div>
            <HeaderPanel titlePage={"??????????????"}/>
            <main>
                <div className="panel-main">
                    <PanelSidebar/>
                    <div className="panel-body">
                        <div className="panel-container">
                            <Tabs activeKey={activeKey} onChange={callback}
                                  className="nav nav-tabs justify-content-star main-tab " unmountInactiveTabs={true}>
                                <TabPane tab=" ???????????? ??????????????" key="1" className="nav-item ">
                                    <EditPanelProfile data={data} setActiveKey={setActiveKey} getProfile={getData}/>
                                </TabPane>
                                <TabPane tab=" ?????????? ?????? ????????" key="2" className="nav-item ">
                                    <ChangePasswordPanelProfile data={data} getProfile={getData}/>
                                </TabPane>
                                <TabPane tab="???????????? ?????????? ??????????" key="3" className="nav-item ">
                                    <EditPhoneNumberPanelProfile data={data} getProfile={getData}/>
                                </TabPane>
                                <TabPane tab="???????????? ??????????" key="4" className="nav-item ">
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

export default withRouter(PanelProfile);
