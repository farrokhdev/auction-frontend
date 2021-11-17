import React , {useState} from 'react';
import { Tabs } from 'antd';
import AllTab from './AllTab';
import AuctionsTab from './AuctionsTab';
import ArtworksTab from './ArtworksTab';
import AuctionHousesTab from './AuctionHousesTab';
import RecentlySearch from './RecentlySearch';

function Search() {

    const { TabPane } = Tabs;
    const [activeKey, setActiveKey] = useState("1")

    function callback(key) {
        setActiveKey(key)
    }


    return (
        <>
           <div className="inner-nav" id="nav-search" aria-labelledby="#navsearch">
                <div className="container containercs">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="main-search">
                                <input placeholder="Search artworks, auctions, auctions home ...."/>
                                <button type="button" className="btn btn-view">Advance</button>
                            </div>
                        </div>
                    </div>
                    <div className="row mrgt30">


                        <RecentlySearch/>

     
                        <div className="col-md-9 col-lg-10">
                            <div className="category-search">

                                <Tabs activeKey={activeKey} onChange={callback}
                                    className="nav nav-tabs justify-content-star main-tab " unmountInactiveTabs={true}>
                                    <TabPane tab="All" key="1" className="nav-item ">
                                        <AllTab/>
                                    </TabPane>
                                    <TabPane tab="Auctions" key="2" className="nav-item ">
                                        <AuctionsTab/>
                                    </TabPane>
                                    <TabPane tab="Artworks" key="3" className="nav-item ">
                                        <ArtworksTab/>
                                    </TabPane>
                                    <TabPane tab="Auction homes" key="4" className="nav-item ">
                                        <AuctionHousesTab/>
                                    </TabPane>
                                </Tabs>

                            </div>
                        </div>
                    </div>
                </div>
            </div>                 
        </>
    )
}

export default Search;