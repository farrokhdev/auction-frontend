import React , {useState} from 'react'
import HeaderPanel from '../../componentsEN/HeaderPanel';
import PanelSideBar from '../../componentsEN/PanelSideBar/PanelSideBar';
import { Tabs } from 'antd';
import FavoriteArtworksTab from './FavoriteArtworksTab';
import FavoriteAuctionsTab from './FavoriteAuctionsTab';
import FavoriteAuctionHousesTab from './FavoriteAuctionHousesTab';

function PanelFavorits() {

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
                                <TabPane tab="Artworks" key="1" className="nav-item ">
                                    <FavoriteArtworksTab/>
                                </TabPane>
                                <TabPane tab="Auctions" key="2" className="nav-item ">
                                    <FavoriteAuctionsTab/>
                                </TabPane>
                                <TabPane tab="Auction houses" key="3" className="nav-item ">
                                    <FavoriteAuctionHousesTab/>
                                </TabPane>
                               
                        </Tabs>
                    </div>
                </div>
            </div>
        </main>

    </>
    )
}

export default PanelFavorits;
