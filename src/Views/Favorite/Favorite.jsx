import React, { useState } from "react";
import HeaderPanel from "../../components/HeaderPanel";
import PanelSidebar from "../../components/PanelSidebar";
import { message, Tabs } from "antd";
import Artwork from "./Artwork";
import Sales from "./Sales";
import AuctionHouses from "./AuctionHouses";

function Favorite() {
    const { TabPane } = Tabs;
    const [activeKey, setActiveKey] = useState("1");
    const [data, setData] = useState({})


    function callback(key) {
        console.log(key);
        setActiveKey(key)
    }

    const getData = () => {

        
    }

    return (
        <>
            <HeaderPanel titlePage = {"علاقه‌مندی‌ها"} />
            <div className="panel-main">
                <PanelSidebar />
                <div className="panel-body">
                    <div className="panel-container">
                        <Tabs activeKey={activeKey} onChange={callback} className="nav nav-tabs justify-content-star main-tab " unmountInactiveTabs={true}>
                            <TabPane tab="آثار" key="1" className="nav-item " >
                                <Artwork data={data} getProfile={getData} />
                            </TabPane>
                            <TabPane tab="حراج" key="2" className="nav-item ">
                                <Sales data={data} getProfile={getData} />
                            </TabPane>
                            <TabPane tab="خانه حراج" key="3" className="nav-item ">
                                <AuctionHouses data={data} getProfile={getData} />
                            </TabPane>
                            {/* <TabPane tab="ویرایش ایمیل" key="4" className="nav-item ">
                                 <EditEmailPanelProfile data={data} getProfile={getData} /> 
                            </TabPane> */}
                        </Tabs>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Favorite;