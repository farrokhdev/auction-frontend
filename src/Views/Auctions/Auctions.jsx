import React, { useEffect, useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Maintitle from "../../components/main title for all";
import Sidebar from "../../components/side-bar";
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import queryString from "query-string";
import { Pagination, Spin } from "antd";
import Timer from 'react-compound-timer'
import { AuctionStatusTextBtn, AuctionType } from '../../utils/converTypePersion';
import moment from "jalali-moment";
import PaginationComponent from '../../components/PaginationComponent';

function Auctions() {

    const [Auctions, setAuctions] = useState("");
    const [countAuctions, setCountAuctions] = useState(0)
    const [loading, setLoading] = useState(false)
    const [params, setParams] = useState({
        page: 1,
        page_size: 10,
        search: '',
        category: [],
        date_after: '',
        date_before: '',
        ordering: '',
        home_auction_name: [],
        type: [],
        visible_in_site: true
    })

    const queries = queryString.stringify(params);

    const getProducts = () => {
        setLoading(true)
        axios.get(`${BASE_URL}/sale/auctions/?${queries}`)
            .then(resp => {
                setLoading(false)
                setCountAuctions(resp.data.data.count)
                setAuctions(resp.data.data.result)
            })
            .catch(err => {
                setLoading(false)
                console.error(err);
            })
    }

    useEffect(() => {
        getProducts()

    }, [params])


    const Follow = (data, action) => {
        if (action) {
            axios.delete(`${BASE_URL}/following/${data}`)
                .then(resp => {
                    getProducts()
                })
        } else {
            axios.post(`${BASE_URL}/following/`, {
                "content_type": "auction",
                "object_id": data,
                "activity_type": "follow"
            })
                .then(resp => {
                    if (resp.data.code === 201) {
                        getProducts()
                    }

                })
                .catch(err => {
                    console.error(err);
                })

        }
    }

    const handeSelectPage = (e) => {
        setParams({
            ...params, page: e
        })
    }

    const handleSearchProducts = (value) => {
        setParams({
            ...params,page:1, search: value
        })
    }

    const handleSetCategory = (value) => {
        setParams({
            ...params, page: 1, category: value
        })
    }

    const handleSetHomeAuction = (value) => {
        setParams({
            ...params, page: 1, home_auction_name: value
        })
    }

    const handleSetHomeAuctionSelect = (value) => {
        setParams({
            ...params, home_auction_name: value
        })
    }

    const handleSetType = (value) => {
        setParams({
            ...params, page: 1, type: value
        })
    }

    const handleSetOrdering = () => {
        setParams({
            // since the ordering field on the product is different from auctions we have to
            // set this explicitly
            ...params, ordering: 'creation_time'
        })
    }

    const handleSetDate = (dateFrom, dateTo) => {
        setParams({
            ...params,
            start_date_before: dateTo ? moment.from(dateTo, 'fa', 'YYYY/MM/DD').locale('en').format('YYYY-MM-DD') : "",
            start_date_after: dateFrom ? moment.from(dateFrom, 'fa', 'YYYY/MM/DD').locale('en').format('YYYY-MM-DD') : "",
            page: 1,
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

    return (
        <div dir="rtl">
            <Header />
            <Spin spinning={loading}>
                <main className="innercontent" id="all-auctions">
                    <div className="container innercontainer">
                        <Maintitle title={'حراج‌ها'} handleSetOrdering={handleSetOrdering} />
                        <div className="row">
                            <Sidebar
                                params={params}
                                setParams={setParams}
                                handleSetHomeAuction={handleSetHomeAuction}
                                handleSearchProducts={handleSearchProducts}
                                handleSetCategory={handleSetCategory}
                                handleSetType={handleSetType}
                                handleSetHomeAuctionSelect={handleSetHomeAuctionSelect}
                                handleSetDate={handleSetDate}
                                typeCategory="خانه های حراج"
                            />

                            <div className="col-lg-9">
                                {Auctions && Auctions.length >= 1 ? Auctions.map((item, key) => {
                                    return (
                                        <div key={key} className="row-blocks">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <Link to={`/one-auction/${item.id}`}
                                                        className="bg-shadow tr-shadow10">
                                                        <div className="image-custom-back" style={{ backgroundImage: `url(${item?.media?.exact_url})`, height: "250px" }} />
                                                    </Link>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="block-head row">
                                                        <div className="col-xl-3 col-sm-4 col-3">
                                                            <span className="category-icon live-icon">
                                                                <span
                                                                    className="d-none d-md-inline-block"> </span> {AuctionType(item.type)}
                                                            </span>
                                                        </div>
                                                        <div className="col-xl-9 col-sm-8 col-9 textalign-left">

                                                            <button
                                                                onClick={() =>
                                                                    Follow(
                                                                        item?.following?.follow?.is_active ?
                                                                            item?.following?.follow?.id :
                                                                            item?.id, item?.following?.follow?.is_active)
                                                                }
                                                                type="button" className={" reminder-icon " + (item?.following?.follow?.is_active ? "active" : "")}>
                                                                یادآوری
                                                            </button>
                                                            <button type="button" className="link-source">
                                                                <Link to={`/one-auction/${item.id}`}>
                                                                    <span className="d-none d-sm-inline-block">مشاهده</span>
                                                                    آثار
                                                                    (<span>{item?.products_count ? item.products_count : 0}</span>)
                                                                </Link>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="block-main">
                                                        {/* <Link to="/"> */}
                                                            <h5 className="default">
                                                                {item.description}
                                                            </h5>
                                                        {/* </Link> */}
                                                        <div className="block-detail">
                                                            <h6 className="default">{item.title}</h6>
                                                            {/* <Link to="/" className="default"> */}
                                                                <h6 className="default gray50">{item.house}</h6>
                                                            {/* </Link> */}
                                                        </div>
                                                    </div>
                                                    <div className="block-footer row">
                                                        <div className="col-sm-5">
                                                            <div
                                                                className="jumbotron countdown show end date-show"
                                                                data-Date="2021/06/05 16:09:00"
                                                            >
                                                                {item?.status === "CLOSED" ?

                                                                    <div className="ended">
                                                                        <div className="text">حراج به پایان رسید</div>
                                                                    </div>
                                                                    : <div>
                                                                        {item?.status === "ACTIVE" &&
                                                                            <Timer
                                                                                initialTime={timeExpire(item.end_time)}
                                                                                direction="backward"
                                                                            >
                                                                                {({ start, resume, pause, stop, reset, timerState }) => (
                                                                                    <div style={{
                                                                                        direction: 'ltr',
                                                                                        textAlign: "right"
                                                                                    }}>

                                                                                        <span className="d-inline-block ">ساعت</span>
                                                                                        <span className="d-inline-block"><Timer.Hours /> </span>
                                                                                        <span className="d-inline-block">:</span>
                                                                                        <span className="d-inline-block"><Timer.Minutes /></span>
                                                                                        <span className="d-inline-block">:</span>
                                                                                        <span className="d-inline-block "><Timer.Seconds /></span>

                                                                                        <span className="d-inline-block mx-2">  و  </span>
                                                                                        <span className="d-inline-block ">  روز  </span>
                                                                                        <span className="d-inline-block "><Timer.Days /></span>
                                                                                    </div>
                                                                                )}
                                                                            </Timer>
                                                                        }
                                                                        {
                                                                            item?.status === "PREPARING" && <span>درحال آماده سازی</span>
                                                                        }

                                                                    </div>
                                                                }
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-7 textalign-left">

                                                            {item?.status !== "CLOSED" ? <Link to={`/one-auction/${item.id}`}>
                                                                <button type="button" className="btn btn-gray ms-2">
                                                                    <FontAwesomeIcon className="mx-1" icon={faEye} />
                                                                    {/* مشاهده  */}
                                                                    {AuctionType(item.type)}
                                                                </button>
                                                            </Link> : null}

                                                            {AuctionStatusTextBtn(item?.status, item?.user_is_enrolled, item.id)}

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }) : ""}

                                <PaginationComponent count={countAuctions} handeSelectPage={handeSelectPage} />
{/* 
                                <Pagination
                                    style={{ direction: 'ltr', textAlign: 'center' }}
                                    showSizeChanger
                                    responsive
                                    onShowSizeChange={(current, pageSize) => {
                                        getProducts(pageSize)
                                    }}
                                    onChange={(e) => handeSelectPage(e)}
                                    defaultCurrent={1}
                                    total={countAuctions}
                                    pageSizeOptions={[9, 18, 36, 48]}
                                    defaultPageSize={10}
                                /> */}
                            </div>
                        </div>
                    </div>
                </main>
            </Spin>
            <Footer />
        </div>
    );
}

export default Auctions;
