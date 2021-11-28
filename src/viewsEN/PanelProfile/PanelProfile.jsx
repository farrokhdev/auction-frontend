import React, { useState , useEffect } from 'react'
import HeaderPanel from '../../componentsEN/HeaderPanel/index.js';
import PanelSideBar from '../../componentsEN/PanelSideBar/PanelSideBar.jsx';
import { message, Tabs } from 'antd';
import EditPanelProfile from './EditPanelProfile';
import ChangePasswordPanelProfile from './ChangePasswordPanelProfile.jsx';
import EditPhoneNumberPanelProfile from './EditPhoneNumberPanelProfile.jsx';
import EditEmailPanelProfile from './EditEmailPanelProfile.jsx';
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import {EDIT_PROFILE} from "../../utils/constant";

function PanelProfile() {
    const { TabPane } = Tabs;
    const [activeKey, setActiveKey] = useState("1")
    const [data, setData] = useState({})

    function callback(key) {
        setActiveKey(key)
    }

    function err_msg_resolver(res_body) {
        if (res_body.code == 201 || res_body.code == 200)
            return res_body.data.error_message
        else {
            return res_body.message
        }
    }

    const getData = () => {
        axios.get(`${BASE_URL}${EDIT_PROFILE}`)
            .then(resp => {
                if ((resp.data.code === 200) && resp.data?.data?.result) {
                    setData(resp.data.data.result)
                }
            })
            .catch(err => {
                console.error(err);
                message.error({
                    content: err_msg_resolver(err.response.data),
                    className: 'text-danger',
                    style: {
                        marginTop: '10vh',
                    },
                })
            })
    }

    useEffect(() => {
        getData()

    }, [])

    return (
        <>
            <HeaderPanel titlePage={"Profile"} />
            <main>
                <div class="panel-main">
                    <PanelSideBar />
                    <div className="panel-body">
                        <div className="panel-container">
                            <Tabs activeKey={activeKey} onChange={callback}
                                className="nav nav-tabs justify-content-star main-tab p-1" unmountInactiveTabs={true}>
                                <TabPane tab=" Edit profile" key="1" className="nav-item ">
                                    <EditPanelProfile setActiveKey={setActiveKey} data={data} getData={getData}/>
                                </TabPane>
                                <TabPane tab=" Change password" key="2" className="nav-item ">
                                    <ChangePasswordPanelProfile data={data} getData={getData}/>
                                </TabPane>
                                <TabPane tab="Change phone" key="3" className="nav-item ">
                                    <EditPhoneNumberPanelProfile data={data} getData={getData}/>
                                </TabPane>
                                <TabPane tab="Change email" key="4" className="nav-item ">
                                    <EditEmailPanelProfile data={data} getData={getData}/>
                                </TabPane>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}

export default PanelProfile;