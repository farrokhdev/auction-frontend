import React, {useEffect, useState} from "react";
import Footer from "../../components/footer";
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTimes, faPlus} from "@fortawesome/free-solid-svg-icons";
import moment from 'jalali-moment'
import HeaderPanel from "../../components/HeaderPanel";
import PanelSidebar from "../../components/PanelSidebar";
import {Link} from "react-router-dom";
import {Spin} from "antd";
import queryString from "query-string";
import PaginationComponent from "../../components/PaginationComponent";

function AuctionsBids(props) {
    const [bidsCount, setBidsCount] = useState(0);
    const [bids, setBids] = useState([]);
    const [loading, setLoading] = useState(false);
    const [params, setParams] = useState({
        page : 1 , 
        page_size : 10 , 
        auction : props.match.params.id
    })

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


    const handeSelectPage = (e) => {
        setParams({
            ...params, page: e
        })
    }

    return (
        <div>
            <HeaderPanel titlePage={"پیشنهادات"}/>
            <Spin spinning={loading}>
                <div className="panel-main">
                    <PanelSidebar/>
                    {/**Main**/}
                    <div className="panel-body">
                        <div className="panel-container">
                            <div className="modal-header">
                                <div className="container g-0 d-flex justify-content-between">
                                    <div className="main-title">
                                        <h2 className="default titr">
                                            پیشنهادات{bids?.title}
                                        </h2>
                                    </div>
                                    <Link to="/auctions-list">
                                        <button type="button" className="btn-outline-gray">
                                            بازگشت به لیست حراجی ها
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            {bids? bids.map((item, key) => {
                                return(
                                    <div className="amount-list" key={key}>
                                        <div className="amount-block">
                                            <div className="amount-range">{item.user.first_name + " " + item.user.last_name}</div>
                                            <div className="amount-range">
                                                {item.price}<span className="unit">تومان</span>
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

        </div>


    );
}

export default AuctionsBids;
