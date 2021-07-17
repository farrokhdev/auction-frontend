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

function AuctionsRequests(props) {
    const [bidsCount, setBidsCount] = useState(0);
    const [bids, setBids] = useState("");

    const getBids = () => {
        axios.get(`${BASE_URL}/bidding/?auction=${props.match.params.id}`)
            .then(resp => {
                if (resp.data.code === 200) {
                    setBids(resp.data.data.result)
                    setBidsCount(resp.data.data.count)
                }

            })
            .catch(err => {
                console.error(err);
            })
    }

    useEffect(() => {
        getBids()

    }, [])


    return (
        <div>
            <HeaderPanel titlePage={"پیشنهادات"}/>
            <div className="panel-main">
                <PanelSidebar/>
                {/**Main**/}
                <div className="panel-body">
                    <div className="panel-container">
                        <div className="modal-header">
                            <div className="container g-0 d-flex justify-content-between">
                                <div className="main-title">
                                    <h2 className="default titr">
                                        درخواست‌های{bids.title}
                                    </h2>
                                </div>
                                <Link to="/auctions-list">
                                    <button type="button" className="btn-outline-gray">
                                        بازگشت به لیست حراجی ها
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="amount-block">
                            <div className="amount-range">رضا شبستری</div>
                            <div className="amount-range">
                                <button type="button" className="btn btn-default">تایید</button>
                                <button type="button" className="btn btn-outline-gray">رد</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/**Main**/}


        </div>


    );
}

export default AuctionsRequests;
