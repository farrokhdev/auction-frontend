import React, { useState } from 'react'
import HeaderPanel from '../../componentsEN/HeaderPanel.jsx';
import PanelSideBar from '../../componentsEN/PanelSideBar/PanelSideBar.jsx';
import { message, Tabs } from 'antd';
import EditPanelProfile from './EditPanelProfile';
import ChangePasswordPanelProfile from './ChangePasswordPanelProfile.jsx';
import EditPhoneNumberPanelProfile from './EditPhoneNumberPanelProfile.jsx';
import EditEmailPanelProfile from './EditEmailPanelProfile.jsx';

function PanelProfile() {
    const { TabPane } = Tabs;
    const [activeKey, setActiveKey] = useState("1")

    function callback(key) {
        setActiveKey(key)
    }

    return (
        <>
            <HeaderPanel titlePage={"Profile"} />
            <main>
                <div class="panel-main">
                    <PanelSideBar />
                    <div className="panel-body">
                        <div className="panel-container" style={{ paddingLeft: '1.7rem' }}>
                            <Tabs activeKey={activeKey} onChange={callback}
                                className="nav nav-tabs justify-content-star main-tab " unmountInactiveTabs={true}>
                                <TabPane tab=" Edit profile" key="1" className="nav-item ">
                                    <EditPanelProfile setActiveKey={setActiveKey} />
                                </TabPane>
                                <TabPane tab=" Change password" key="2" className="nav-item ">
                                    <ChangePasswordPanelProfile
                                    />
                                </TabPane>
                                <TabPane tab="Change phone" key="3" className="nav-item ">
                                    <EditPhoneNumberPanelProfile
                                    />
                                </TabPane>
                                <TabPane tab="Change email" key="4" className="nav-item ">
                                    <EditEmailPanelProfile
                                    />
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