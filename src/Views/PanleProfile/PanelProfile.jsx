import React, {useState} from "react";
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
import {Tabs} from "antd";

function PanelProfile() {
    const {TabPane} = Tabs;
    const [activeKey, setActiveKey] = useState("1")
    function callback(key) {
        console.log(key);
        setActiveKey(key)
    }

    return (
        <div>
            <HeaderPanel/>
            <main>
                <div className="panel-main">
                    <PanelSidebar />
                    <div className="panel-body">
                        <div className="panel-container">
                            <Tabs activeKey={activeKey} onChange={callback} className="nav nav-tabs main-tab" unmountInactiveTabs={true}>
                                <TabPane tab=" ویرایش پروفایل" key="1" className="nav-item" >
                                    <EditPanelProfile/>
                                </TabPane>
                                <TabPane tab=" تغییر رمز عبور" key="2" className="nav-item ">
                                    <ChangePasswordPanelProfile/>
                                </TabPane>
                                <TabPane tab="ویرایش شماره همراه" key="3" className="nav-item ">
                                    <EditPhoneNumberPanelProfile/>
                                </TabPane>
                                <TabPane tab="ویرایش ایمیل" key="4" className="nav-item ">
                                    <EditEmailPanelProfile/>
                                </TabPane>
                            </Tabs>
                        </div>
                    </div>
                    {/*<div className="panel-body">*/}
                    {/*  <div className="panel-container">*/}
                    {/*    <div className="col-xxl-8">*/}
                    {/*      <ul*/}
                    {/*        className="nav nav-tabs justify-content-star main-tab"*/}
                    {/*        id="profile-tab"*/}
                    {/*        role="tablist"*/}
                    {/*      >*/}
                    {/*        <li className="nav-item " role="presentation">*/}
                    {/*          <button*/}
                    {/*            className="nav-link active"*/}
                    {/*            id="tab-11"*/}
                    {/*            data-bs-toggle="tab"*/}
                    {/*            data-bs-target="#profiletab1"*/}
                    {/*            type="button"*/}
                    {/*            role="tab"*/}
                    {/*            aria-controls="profiletab1"*/}
                    {/*            aria-selected="true"*/}
                    {/*          >*/}
                    {/*            ویرایش پروفایل*/}
                    {/*          </button>*/}
                    {/*        </li>*/}
                    {/*        <li className="nav-item" role="presentation">*/}
                    {/*          <button*/}
                    {/*            className="nav-link"*/}
                    {/*            id="tab-21"*/}
                    {/*            data-bs-toggle="tab"*/}
                    {/*            data-bs-target="#profiletab2"*/}
                    {/*            type="button"*/}
                    {/*            role="tab"*/}
                    {/*            aria-controls="profiletab2"*/}
                    {/*            aria-selected="false"*/}
                    {/*          >*/}
                    {/*            تغییر رمز عبور*/}
                    {/*          </button>*/}
                    {/*        </li>*/}
                    {/*        <li className="nav-item" role="presentation">*/}
                    {/*          <button*/}
                    {/*            className="nav-link"*/}
                    {/*            id="tab-31"*/}
                    {/*            data-bs-toggle="tab"*/}
                    {/*            data-bs-target="#profiletab3"*/}
                    {/*            type="button"*/}
                    {/*            role="tab"*/}
                    {/*            aria-controls="profiletab3"*/}
                    {/*            aria-selected="false"*/}
                    {/*          >*/}
                    {/*            ویرایش شماره همراه*/}
                    {/*          </button>*/}
                    {/*        </li>*/}
                    {/*        <li className="nav-item" role="presentation">*/}
                    {/*          <button*/}
                    {/*            className="nav-link"*/}
                    {/*            id="tab-41"*/}
                    {/*            data-bs-toggle="tab"*/}
                    {/*            data-bs-target="#profiletab4"*/}
                    {/*            type="button"*/}
                    {/*            role="tab"*/}
                    {/*            aria-controls="profiletab4"*/}
                    {/*            aria-selected="false"*/}
                    {/*          >*/}
                    {/*            ویرایش ایمیل*/}
                    {/*          </button>*/}
                    {/*        </li>*/}
                    {/*      </ul>*/}
                    {/*      <div className="tab-content" id="profile-tab-content">*/}
                    {/*        <EditPanelProfile/>*/}
                    {/*        <ChangePasswordPanelProfile/>*/}
                    {/*        <EditPhoneNumberPanelProfile/>*/}
                    {/*        <EditEmailPanelProfile/>*/}
                    {/*      </div>*/}
                    {/*    </div>*/}
                    {/*  </div>*/}
                    {/*</div>*/}
                </div>
            </main>
        </div>
    );
}

export default PanelProfile;
