import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Pagination, Spin } from 'antd';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";
import Maintitle from "../../components/main title for all";
import Sidebar from "../../components/side-bar";
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import queryString from 'query-string';
import moment from "jalali-moment";
import Timer from "react-compound-timer";
import numberWithCommas from "../../components/threeNumber";
import { convertToEn, status, convertTypeEN } from "../../utils/converTypePersion";

function Artworks() {

    const [Tags, setTags] = useState([])
    const [Products, setProducts] = useState("");
    const [countProducts, setCountProducts] = useState(0)
    const [loading, setLoading] = useState(false)
    const [params, setParams] = useState({
        page: 1,
        page_size: 9,
        search: '',
        category: [],
        date_after: '',
        date_before: '',
        ordering: '',
        home_auction_name: [],
        auctions__type: [],
        auctions__status: []
    })

    const queries = queryString.stringify(params);
    const getProducts = () => {
        setLoading(true)
        axios.get(`${BASE_URL}/sale/product/?${queries}`)
            .then(resp => {
                if (resp.data.code === 200) {
                    console.log(resp)
                    setProducts(resp.data.data.result)
                    setCountProducts(resp.data.data.count)
                    setLoading(false)
                }

            })
            .catch(err => {
                console.error(err);
                setLoading(false)
            })
    }

    const addBookmark = (data, action) => {
        if (action) {
            axios.delete(`${BASE_URL}/following/${data}`)
                .then(resp => {
                    getProducts()
                })
        } else {
            axios.post(`${BASE_URL}/following/`, {
                "content_type": "product",
                "object_id": data,
                "activity_type": "mark"
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

    useEffect(() => {
        getProducts()

    }, [params, Tags])

    const handleClose = (value) => {
        if (params?.auctions__status.indexOf(status(value)) > -1) {
            handleAuctionStatus(params?.auctions__status?.filter(item => item !== status(value)))
        }
        if (params?.category.indexOf(value) > -1) {
            handleSetCategory(params?.category?.filter(item => item !== value))
        }
        if (params?.home_auction_name.indexOf(value) > -1) {
            handleSetHomeAuction(params?.home_auction_name?.filter(item => item !== value))
        }
        if (params?.auctions__type.indexOf(convertTypeEN(value)) > -1) {
            handleSetType(params?.auctions__type?.filter(item => item !== convertTypeEN(value)))
        }
        setTags(Tags?.filter((item) => item !== value))
    };

    const handleRemoveFilters = () => {
        setTags([])
        setParams({
            page: 1,
            page_size: 9,
            search: '',
            category: [],
            date_after: '',
            date_before: '',
            ordering: '',
            home_auction_name: [],
            auctions__type: [],
            auctions__status: []
        })

    }

    const handeSelectPage = (e) => {
        setParams({
            ...params, page: e
        })
    }

    const handleSearchProducts = (value) => {
        setParams({
            ...params, page: 1, search: value
        })
    }

    const handleSetCategory = (value) => {
        setParams({
            ...params, page: 1, category: value
        })
    }

    const handleAuctionStatus = (value) => {
        setParams({
            ...params, page: 1, auctions__status: value
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
            ...params, page: 1, auctions__type: value
        })
    }

    const handleSetOrdering = () => {
        setParams({
            // since the ordering field on the product is different from auctions we have to
            // set this explicitly
            ...params, ordering: 'creation_date'
        })
    }

    const handleSetOrderingOld = () => {
        setParams({
            // since the ordering field on the product is different from auctions we have to
            // set this explicitly
            ...params, ordering: '-creation_date'
        })
    }



    const handleSetDate = (dateFrom, dateTo) => {
        setParams({
            ...params,
            date_before: dateFrom ? moment.from(dateFrom, 'fa', 'YYYY/MM/DD').locale('en').format('YYYY-MM-DD') : "",
            date_after: dateTo ? moment.from(dateTo, 'fa', 'YYYY/MM/DD').locale('en').format('YYYY-MM-DD') : "",
            page: 1
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
        <div style={{ overflow: 'hidden' }}>
            <Header />
            <Spin spinning={loading}>
                <main class="innercontent" id="all-artworks">
                    <div class="container innercontainer">
                        <Maintitle title={'محصولات'} handleSetOrdering={handleSetOrdering} handleSetOrderingOld={handleSetOrderingOld} />
                        <div class="row">
                            <Sidebar
                                handleClose={handleClose}
                                Tags={Tags}
                                setTags={setTags}
                                handleRemoveFilters={handleRemoveFilters}
                                params={params}
                                setParams={setParams}
                                handleSetHomeAuction={handleSetHomeAuction}
                                handleAuctionStatus={handleAuctionStatus}
                                handleSearchProducts={handleSearchProducts}
                                handleSetCategory={handleSetCategory}
                                handleSetType={handleSetType}
                                handleSetHomeAuctionSelect={handleSetHomeAuctionSelect}
                                handleSetDate={handleSetDate}
                                typeCategory="آثار"
                            />
                            <div class="col-lg-9">
                                <div class="row row-cols-md-3 row-cols-2">
                                    {Products && Products.length >= 1 ? Products.map((item, key) => {
                                        return (
                                            <div className="col" key={key}>
                                                <div className="artwork-img">
                                                    <Link to={`/artworks/${item?.id}`} class="artwork-block">
                                                        <div className="image-custom-back" style={{
                                                            backgroundImage: `url(${item.media.exact_url})`,
                                                            height: "270px"
                                                        }}>
                                                        </div>
                                                    </Link>
                                                    <div className="artwork-category">
                                                        <span onClick={() =>
                                                            addBookmark(
                                                                item?.following?.bookmark?.is_active ?
                                                                    item?.following?.bookmark?.id :
                                                                    item?.id, item?.following?.bookmark?.is_active)
                                                        }
                                                            className={"category-save artwork-bookmark " + (item?.following?.bookmark?.is_active ? "active" : "")} />
                                                        <span className="">{item?.latest_auction?.type ? convertToEn(item?.latest_auction?.type) : <span className="category-icon text-secondary">بدون حراجی</span>}</span>
                                                        {/* <span>{console.log(im)}</span> */}
                                                    </div>
                                                </div>
                                                <div className="block-body text-center">
                                                    <h6 className="default gray50 ">{item?.persian_artist_name}</h6>
                                                    <h4 className="default">{item?.artwork_title}</h4>
                                                    {item?.latest_auction?.status === "CLOSED" ?
                                                        <div className="auction-calender">
                                                            حراجی به پایان رسید
                                                        </div>
                                                        :
                                                        <div>
                                                            {
                                                                item?.latest_auction?.status === "ACTIVE" ?
                                                                    <div className="auction-calender">
                                                                        <Timer
                                                                            initialTime={timeExpire(item?.latest_auction.end_time)}
                                                                            direction="backward"
                                                                        >
                                                                            {({
                                                                                start,
                                                                                resume,
                                                                                pause,
                                                                                stop,
                                                                                reset,
                                                                                timerState
                                                                            }) => (
                                                                                <div style={{
                                                                                    direction: 'ltr',
                                                                                    textAlign: "center",
                                                                                }}>

                                                                                    <span className="d-inline-block text-secondary">به پایان</span>     <span className="d-inline-block text-secondary">/</span>
                                                                                    <span className="d-inline-block">
                                                                                        <span
                                                                                            className="d-inline-block text-danger">ساعت</span>
                                                                                        <span
                                                                                            className="d-inline-block text-danger"><Timer.Hours /> </span>
                                                                                        <span
                                                                                            className="d-inline-block text-danger">:</span>
                                                                                        <span
                                                                                            className="d-inline-block text-danger"><Timer.Minutes /></span>
                                                                                        <span
                                                                                            className="d-inline-block text-danger">:</span>
                                                                                        <span
                                                                                            className="d-inline-block text-danger"><Timer.Seconds /></span>

                                                                                        <span
                                                                                            className="d-inline-block text-danger mx-2">  و  </span>
                                                                                        <span
                                                                                            className="d-inline-block text-danger">  روز  </span>
                                                                                        <span
                                                                                            className="d-inline-block text-danger"><Timer.Days /></span>
                                                                                    </span>


                                                                                </div>

                                                                            )}
                                                                        </Timer></div>
                                                                    : <div>{
                                                                        item?.latest_auction?.status ?
                                                                            <div className="auction-calender">
                                                                                <div className="auction-date">
                                                                                    <span className="start-date">
                                                                                        {item?.latest_auction?.start_time ? moment(item?.latest_auction?.start_time, 'YYYY-MM-DD').locale('fa').format('DD MMMM') : ""}
                                                                                    </span>
                                                                                    <span
                                                                                        className="end-date">{item?.latest_auction?.end_time ? moment(item?.latest_auction?.end_time, 'YYYY-MM-DD').locale('fa').format('DD MMMM') : ""}</span>
                                                                                </div>
                                                                                <div className="auction-time">
                                                                                    <span
                                                                                        className="start-time">{item?.latest_auction?.start_time ? moment(item?.latest_auction?.start_time, 'YYYY-MM-DD HH').locale('fa').format('HH') : ""}</span>
                                                                                </div>
                                                                            </div> :
                                                                            ""
                                                                    }</div>
                                                            }
                                                        </div>

                                                    }
                                                    {item?.latest_auction?.status === "CLOSED" ? <div>
                                                        {
                                                            item?.sale_status ?
                                                                <div className="price-block">
                                                                    <span>قیمت فروخته شده:</span>
                                                                    <span className="price">{numberWithCommas(item?.price)}<span
                                                                        className="price-unit">تومان</span></span>
                                                                </div>
                                                                :
                                                                <div className="price-block">
                                                                    <span> فروخته نشده</span>
                                                                </div>
                                                        }
                                                    </div>
                                                        : <div>
                                                            {item?.latest_auction?.status === "ACTIVE" ?
                                                                <div>
                                                                    <div className="price-block">
                                                                        <span>قیمت پایه:</span>
                                                                        <span className="price">{numberWithCommas(item?.price)}<span
                                                                            className="price-unit">تومان</span></span>
                                                                    </div>

                                                                </div> :
                                                                <div className="price-block">
                                                                    <span>قیمت فعلی:</span>
                                                                    <span className="price">{numberWithCommas(item?.price)}<span
                                                                        className="price-unit">تومان</span></span>
                                                                </div>
                                                            }
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        )
                                    }) : ""}


                                </div>
                                <Pagination
                                    style={{ direction: 'ltr', textAlign: 'center' }}
                                    showSizeChanger={false}
                                    responsive
                                    // size="small"
                                    onShowSizeChange={(current, pageSize) => {
                                        getProducts(pageSize)
                                    }}
                                    onChange={(e) => handeSelectPage(e)}
                                    defaultCurrent={1}
                                    total={countProducts}
                                    pageSizeOptions={[9, 18, 36, 48]}
                                    defaultPageSize={params.page_size}
                                />

                            </div>
                        </div>
                    </div>
                </main>
            </Spin>
            <Footer />
        </div>
    );
}

export default Artworks;
