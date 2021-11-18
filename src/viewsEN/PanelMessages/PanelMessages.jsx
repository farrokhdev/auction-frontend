import React , {useState} from 'react'
import HeaderPanel from '../../components/HeaderPanel';
import PanelSideBar from '../../componentsEN/PanelSideBar/PanelSideBar';
import { Tabs } from 'antd';
import NotificationTab from './NotificationTab';
import TicketsTab from './TicketsTab';


function PanelMessages() {

    const { TabPane } = Tabs;
    const [activeKey, setActiveKey] = useState("1")

    function callback(key) {
        setActiveKey(key)
    }

    return (
        <>
        <HeaderPanel titlePage={"Favorites"} />
        <main>
            <div class="panel-main">
                <PanelSideBar />
                <div className="panel-body">
                    <div className="panel-container" style={{ paddingLeft: '1.7rem' }}>
                        <Tabs activeKey={activeKey} onChange={callback}
                                className="nav nav-tabs justify-content-star main-tab " unmountInactiveTabs={true}>
                                <TabPane tab="Notifications" key="1" className="nav-item ">
                                     <NotificationTab/>   
                                </TabPane>
                                <TabPane tab="Tickets" key="2" className="nav-item ">
                                    <TicketsTab/>
                                </TabPane>
                        </Tabs>
                    </div>
                </div>
            </div>
        </main>

    </>
    )
}

export default PanelMessages
