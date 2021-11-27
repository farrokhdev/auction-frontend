import React, {useEffect, useState} from "react";
import HeaderPanel from "../../componentsEN/HeaderPanel";
import PanelSidebar from "../../componentsEN/PanelSideBar";
import {Link} from "react-router-dom";
import {Spin} from "antd";
import PaginationComponent from "../../components/PaginationComponent";
import queryString from "query-string";
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";

function AuctionsBids(props) {

    const [bidsCount, setBidsCount] = useState(0);

    const [bids, setBids] = useState([]);
    const [loading, setLoading] = useState(false);
    const [params, setParams] = useState({
        page : 1 , 
        page_size : 10 , 
        auction : props.match.params.id
    })

    useEffect(() => {

    }, [params])


    const handeSelectPage = (e) => {
        setParams({
            ...params, page: e
        })
    }

    const getBids = () => {
        setLoading(true)
        const queries = queryString.stringify(params);
        axios.get(`${BASE_URL}/bidding/?${queries}`)
            .then(resp => {
                console.log(resp)
                    setLoading(false)
                    setBids(resp.data.data.result)
                    setBidsCount(resp.data.data.count)
            })
            .catch(err => {
                console.error(err.response);
                setLoading(false)
            })
    }

    useEffect(() => {
        getBids()

    }, [params])


  
    return (
        <>
            <HeaderPanel titlePage={'Bids'}/>
            <Spin spinning={loading}>
                <div className="panel-main">
                    <PanelSidebar/>
                    <div className="panel-body">
                        <div className="panel-container">
                            <div className="modal-header">
                                <div className="container g-0 d-flex justify-content-between">
                                    <div className="main-title">
                                        <h2 className="default titr">
                                        Bids
                                        </h2>
                                    </div>
                                    <Link to="/en/auctions-list">
                                        <button type="button" className="btn-outline-gray">
                                        Return to the auction list
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            {bids? bids.map((item, key) => {
                                return(
                                    <div className="amount-list" key={key}>
                                        <div className="amount-block">
                                            <div className="amount-range">{item?.user?.first_name_en + " " + item?.user?.last_name_en}</div>
                                            <div className="amount-range">
                                                {item.price}<span className="unit">{item?.currency}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) : ""}


                                <PaginationComponent count={bidsCount} handeSelectPage={handeSelectPage} />
                        </div>
                    </div>
                </div>
                {/**Main**/}


                
            </Spin>

        </>


    );
}

export default AuctionsBids;
