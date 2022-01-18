import React, {useEffect, useState} from "react";
import { Tabs } from 'antd';
import AllTab from './AllTab';
import AuctionsTab from './AuctionsTab';
import ArtworksTab from './ArtworksTab';
import AuctionHousesTab from './AuctionHousesTab';
import RecentlySearch from './RecentlySearch';


import pic12 from "../../images/pic12.jpg";
import {Link} from "react-router-dom";
import queryString from "query-string";
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import {Spin} from "antd";
import Timer from "react-compound-timer";
import img from "../../images/logo-1.jpg";

function Search() {

    const { TabPane } = Tabs;
    const [activeKey, setActiveKey] = useState("1")
    const [loading, setLoading] = useState(false)
    const [items, setItems] = useState({});
    const [params, setParams] = useState({
        search: '',
        object_type: ''
    })
    function callback(key) {
        setActiveKey(key)
    }


    const search = () => {
        setLoading(true)
        const queries = queryString.stringify(params);
        axios.get(`${BASE_URL}/sale/search/?${queries}`)
            .then(resp => {
                if (resp.status === 200) {
                    setItems(resp.data)
                    setLoading(false)
                }

            })
            .catch(err => {
                console.error(err);
                setLoading(false)
            })
    }


    const handleSearch = (value) => {
        console.log("value : " , value);
        setParams({
            ...params, search: value
        })
    }


    function timeExpire(time) {
        let expire = new Date(time)
        let now = new Date()
        if (expire > now) {
            return expire - now
        } else {
            return 0

        }
    }


    useEffect(() => {
        if (params?.search !== "")
            search()
    }, [params])

    return (
        <>
           <div className="inner-nav" id="nav-search" aria-labelledby="#navsearch">
        <Spin spinning={loading}>
                <div className="container containercs">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="main-search">
                                <input onChange={(e)=> handleSearch(e.target.value)} placeholder="Search artworks, auctions, auctions home ...."/>
                                {/* <button   type="button" className="btn btn-view">Advance</button> */}
                            </div>
                        </div>
                    </div>
                    <div className="row mrgt30">

                        {/* <RecentlySearch/> */}

                        <div className="col-md-9 col-lg-10">
                            {/* <div className="category-search"> */}

                                <Tabs activeKey={activeKey} onChange={callback}
                                    className="nav nav-tabs justify-content-star main-tab " unmountInactiveTabs={true}>
                                    <TabPane tab="All" key="1" className="nav-item ">
                                        <AllTab items={items} search={search} timeExpire={timeExpire}/>
                                    </TabPane>
                                    <TabPane tab="Auctions" key="2" className="nav-item ">
                                        <AuctionsTab items={items} search={search}/>
                                    </TabPane>
                                    <TabPane tab="Artworks" key="3" className="nav-item ">
                                        <ArtworksTab items={items}/>
                                    </TabPane>
                                    <TabPane tab="Auction Houses" key="4" className="nav-item ">
                                        <AuctionHousesTab items={items}/>
                                    </TabPane>
                                </Tabs>

                            {/* </div> */}
                        </div>
                    </div>
                </div>
        </Spin>           
            </div>      
        </>
    )
}

export default Search;