import React, { useState, useEffect } from 'react'
import HeaderPanel from '../../componentsEN/HeaderPanel';
import PanelSidebar from '../../componentsEN/PanelSideBar';
import { Pagination, Spin } from "antd";
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import { convertToEnForEnglish , AuctionTypeEN} from '../../utils/converTypePersion';
import { Link } from 'react-router-dom';
import Timer from 'react-compound-timer'
import queryString from "query-string";
import { isAwaitingApprovalEN } from '../../utils/converTypePersion';
import pic1 from '../../imgEN/slider1.jpg'

function UserPanelMyAuctions() {
    const [loading, setLoading] = useState(false)
    const [Auctions, setAuctions] = useState([])
    const [countProducts, setCountProducts] = useState(0)
    const [params, setParams] = useState({
        page: 1,
        page_size: 10,
        is_approve: "True"
    })

    const queries = queryString.stringify(params);

    const getSuggestion = () => {
        setLoading(true)
        axios.get(`${BASE_URL}/sale/join-auction/me/?${queries}`)
            .then(resp => {
                setLoading(false)
                console.log(resp)
                if (resp.data.code === 200) {
                    setAuctions(resp.data.data.result)
                    setCountProducts(resp.data.data.count)
                }

            })
            .catch(err => {
                setLoading(false)
                console.error(err);
            })
    }

    useEffect(() => {
        getSuggestion()
    }, [params])

    function timeExpire(time) {
        let expire = new Date(time)
        let now = new Date()
        if (expire > now) {
            return expire - now
        } else {
            return 0

        }
    }

    const handeSelectPage = (e) => {
        setParams({
            ...params, page: e
        })
    }

    const handleApproved = (e) => {
        setParams({
            ...params, page: 1, is_approve: e
        })
    }

    const Auctionlist = () => {
        return (
            Auctions && Auctions.length >= 1 ? Auctions.map((item, key) => {
                return (
                    <div class="row-blocks">
                        <div class="row">
                            <div class="col-xxl-2 col-md-3">
                                <div class="bg-shadow tl-shadow10">
                                    <img src={item?.sale?.media?.exact_url} width="500" height="500" alt="" />
                                </div>
                            </div>
                            <div class="col-xxl-10 col-md-9">
                                <div class="block-head row">
                                    <div class="col-xl-3 col-sm-4 col-3">
                                        <span class="category-icon">
                                            <span class="d-none d-md-inline-block" > </span>
                                            {convertToEnForEnglish(item?.sale?.type)}

                                        </span>
                                    </div>
                                    <div class="col-xl-9 col-sm-8 col-9 textalign-right">

                                        <button type="button" className={"sell-state " + (isAwaitingApprovalEN(item?.is_approve).css)}>
                                            {isAwaitingApprovalEN(item?.is_approve).title}

                                        </button>
                                        <button type="button" class="link-source">
                                            <Link to={`/en/auctions/${item?.sale_id}`}>
                                                <span className="d-none d-sm-inline-block">View artworks</span>

                                                (<span>{item?.sale?.products_count ? item?.sale?.products_count : 0}</span>)
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                                <div class="block-main">
                                    <h5 class="default">  {item?.sale?.description_en}</h5>
                                    <div class="block-detail">
                                        <h6 class="default">{item?.sale?.title_en}</h6>
                                        <h6 class="default gray50">{item?.sale?.house?.home_auction_name_en}</h6>
                                    </div>
                                </div>
                                <div class="block-footer row">
                                    <div class="col-sm-5">
                                        <div class="jumbotron countdown show end date-show"
                                            data-Date='2021/06/05 16:09:00'>
                                            {item?.sale?.status === "CLOSED" ?

                                                <div className="ended">
                                                    <div className="text">The auction is over</div>
                                                </div>
                                                : <div>
                                                    {item?.sale?.status === "ACTIVE" &&
                                                        <Timer
                                                            initialTime={timeExpire(item?.sale?.end_time)}
                                                            direction="backward"
                                                        >
                                                            {({ start, resume, pause, stop, reset, timerState }) => (
                                                                <div style={{
                                                                    direction: 'ltr',
                                                                    textAlign: "right"
                                                                }}>

                                                                    <span className="d-inline-block ">Hours</span>
                                                                    <span className="d-inline-block"><Timer.Hours /> </span>
                                                                    <span className="d-inline-block">:</span>
                                                                    <span className="d-inline-block"><Timer.Minutes /></span>
                                                                    <span className="d-inline-block">:</span>
                                                                    <span className="d-inline-block "><Timer.Seconds /></span>

                                                                    <span className="d-inline-block mx-2">  and  </span>
                                                                    <span className="d-inline-block ">  Days  </span>
                                                                    <span className="d-inline-block "><Timer.Days /></span>
                                                                </div>
                                                            )}
                                                        </Timer>
                                                    }
                                                    {
                                                        item?.sale?.status === "PREPARING" && <span>preparing</span>
                                                    }

                                                </div>
                                            }

                                        </div>
                                    </div>

                                    {/* <div class="col-sm-7 textalign-right">
                                        {item?.status !== "CLOSED" ? <Link to={`/one-auction/${item.sale_id}`}>
                                            <button type="button" className="btn btn-gray ms-2 view">
                                                {AuctionTypeEN(item?.type)}
                                            </button>
                                        </Link> : null}
                                    </div> */}

                                </div>
                            </div>
                        </div>
                    </div>
                )
            }) : ""
        )
    }
    return (
        <>
            <HeaderPanel titlePage={'My auctions'} />
            <div className="panel-main">
                <PanelSidebar />
                <div className="panel-body">
                    <div className="panel-container">
                        <ul className="nav nav-tabs justify-content-star main-tab" id="profile-tab"
                            role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="tab-11" data-bs-toggle="tab"
                                    data-bs-target="#profiletab1"
                                    onClick={() => handleApproved("True")}
                                    type="button" role="tab" aria-controls="profiletab1" aria-selected="true">Confirmed
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="tab-21" data-bs-toggle="tab"
                                    data-bs-target="#profiletab2"
                                    onClick={() => handleApproved("Null")}
                                    type="button" role="tab" aria-controls="profiletab2" aria-selected="false">Pending
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="tab-31" data-bs-toggle="tab"
                                    data-bs-target="#profiletab3"
                                    onClick={() => handleApproved("False")}
                                    type="button" role="tab" aria-controls="profiletab3" aria-selected="false">failed
                                </button>
                            </li>
                        </ul>

                        <Spin spinning={loading}>
                            <div class="tab-content " id="profile-tab-content">
                                <div class="tab-pane fade show active" id="profiletab1" role="tabpanel"
                                    aria-labelledby="profiletab1-tab">
                                    <Auctionlist />
                                </div>
                                <Pagination
                                    style={{ direction: 'ltr', textAlign: 'center', marginTop: 5 }}
                                    responsive
                                    onChange={(e) => handeSelectPage(e)}
                                    defaultCurrent={1}
                                    total={countProducts}
                                    defaultPageSize={10}
                                />
                            </div>
                        </Spin>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserPanelMyAuctions;