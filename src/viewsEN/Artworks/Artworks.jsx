import React, { useState, useEffect } from 'react'
import HeaderEN from '../../componentsEN/HeaderEN';
import Footer from '../../componentsEN/Footer';
import MainTitle from '../../componentsEN/MainTitle/MainTitle';
import SideBar from '../../componentsEN/SideBar';
import { AuctionStatusTextBtn, AuctionType, status, convertTypeEN } from '../../utils/converTypePersion';
import moment from 'jalali-moment';
import PaginationComponent from '../../componentsEN/PaginationComponent';
import { Link } from 'react-router-dom';
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import queryString from 'query-string';
import { DEFAULT_URL_IMAGE } from '../../utils/defaultImage';
import { handleShowImage } from '../../utils/showImageProduct';
import { convertTypeToEn } from '../../utils/convertTypeEnglish';
import numberWithCommas from '../../components/threeNumber';
import Timer from "react-compound-timer";

function Artworks() {

    const [Tags, setTags] = useState([])
    const [Products, setProducts] = useState([1, 2, 3, 4, 5]);
    const [countProducts, setCountProducts] = useState(1)
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
        auctions__type: [],
        visible_in_site: true,
        auctions__status: []
    })


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
            page_size: 10,
            search: '',
            category: [],
            date_after: '',
            date_before: '',
            ordering: '',
            home_auction_name: [],
            auctions__type: [],
            visible_in_site: true,
            auctions__status: []
        })

    }

    // console.log("Tags", Tags)

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

    const handleAuctionStatus = (value) => {
        setParams({
            ...params, page: 1, auctions__status: value
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
            ...params, page: 1, auctions__type: value
        })
    }

    const handleSetOrdering = () => {
        setParams({
            // since the ordering field on the product is different from auctions we have to
            // set this explicitly
            ...params, ordering: '-creation_date'
        })
    }

    const handleSetOrderingOld = () => {
        setParams({
            // since the ordering field on the product is different from auctions we have to
            // set this explicitly
            ...params, ordering: 'creation_date'
        })
    }



    const handleSetDate = (dateFrom, dateTo) => {
        setParams({
            ...params,
            date_before: dateTo ? moment.from(dateTo, 'fa', 'YYYY/MM/DD').locale('en').format('YYYY-MM-DD') : "",
            date_after: dateFrom ? moment.from(dateFrom, 'fa', 'YYYY/MM/DD').locale('en').format('YYYY-MM-DD') : "",
            page: 1,
        })

    }
    const handleSetDateEN = (dateFrom, dateTo) => {
        setParams({
            ...params,
            date_before: dateTo,
            date_after: dateFrom,
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

    const getProducts = () => {
        const queries = queryString.stringify(params);
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

    useEffect(() => {
        getProducts()
    }, [params, Tags])


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




    return (
        <div>
            <HeaderEN />
            <main className="innercontent" id="all-auctions">
                <div className="container innercontainer">
                    <MainTitle title={'Artworks'} handleSetOrdering={handleSetOrdering} handleSetOrderingOld={handleSetOrderingOld} />
                    <div className="row">
                        <SideBar
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
                            handleSetDateEN={handleSetDateEN}
                            handleSetDate={handleSetDate}
                            typeCategory="products"
                        />
                        <div className="col-lg-9">
                            <div className="row row-cols-md-3 row-cols-2">
                                {Products && Products.length >= 1 ? Products.map((item, key) => {
                                    return (
                                        <div className="col">
                                                <div className="artwork-img">
                                                    <Link to={`/en/artworks/${item?.id}`} className="artwork-block">
                                                        <img src={item && handleShowImage(item)} width="998" height="880" alt="" className="img-fluid" />
                                                    </Link>
                                                    <div className="artwork-category">

                                                        <span onClick={() =>
                                                            addBookmark(
                                                                item?.following?.bookmark?.is_active ?
                                                                    item?.following?.bookmark?.id :
                                                                    item?.id, item?.following?.bookmark?.is_active)
                                                        }
                                                            className={"category-save artwork-bookmark ms-2 " + (item?.following?.bookmark?.is_active ? "active" : "")} />
                                                        <span className="">{item?.latest_auction?.type ? convertTypeToEn(item?.latest_auction?.type) : 
                                                        <span className="category-icon text-secondary"> <span className="mx-2">Without auction</span></span>}</span>


                                                        {/* <span className="category-save artwork-bookmark"></span>
                                                        <span className="category-icon live-icon">Live</span> */}
                                                    </div>
                                                </div>
                                                <div className="block-body text-center">
                                                    <h6 className="default gray50 ">{item?.english_artist_name}</h6>
                                                    <h4 className="default">{item?.artwork_title_en}</h4>


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

                                                                                    <span className="d-inline-block">
                                                                                        <span
                                                                                            className="d-inline-block text-danger"></span>
                                                                                        <span
                                                                                            className="d-inline-block text-danger"><Timer.Hours /> </span>
                                                                                        <span
                                                                                            className="d-inline-block text-danger"> : </span>
                                                                                        <span
                                                                                            className="d-inline-block text-danger"><Timer.Minutes /></span>
                                                                                        <span
                                                                                            className="d-inline-block text-danger"> : </span>
                                                                                        <span
                                                                                            className="d-inline-block text-danger"><Timer.Seconds /></span>

                                                                                        <span
                                                                                            className="d-inline-block text-danger mx-2">  and  </span>
                                                                                        <span
                                                                                            className="d-inline-block text-danger">  Day  </span>
                                                                                        <span
                                                                                            className="d-inline-block text-danger"><Timer.Days /></span>
                                                                                    </span>
                                                                                    <span className="d-inline-block text-secondary mx-2">/</span>
                                                                                    <span className="d-inline-block text-secondary">to finish</span>     


                                                                                </div>

                                                                            )}
                                                                        </Timer></div>
                                                                    : <div>{
                                                                        item?.latest_auction?.status ?
                                                                            <div className="auction-calender">
                                                                                <div className="auction-date">
                                                                                    <span className="start-date">
                                                                                        {item?.latest_auction?.start_time ? moment(item?.latest_auction?.start_time, 'YYYY-MM-DD').locale('en').format('DD MMMM') : ""}
                                                                                    </span>
                                                                                    <span
                                                                                        className="end-date">{item?.latest_auction?.end_time ? moment(item?.latest_auction?.end_time, 'YYYY-MM-DD').locale('en').format('DD MMMM') : ""}</span>
                                                                                </div>
                                                                                <div className="auction-time">
                                                                                    <span
                                                                                        className="start-time">{item?.latest_auction?.start_time ? moment(item?.latest_auction?.start_time, 'YYYY-MM-DD HH').locale('en').format('HH') : ""}</span>
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
                                                                    <span>Sold price :</span>
                                                                    <span className="price mx-2">{numberWithCommas(item?.price)}<span
                                                                        className="price-unit mx-2">{item?.latest_auction?.currency !== "dollar" ? item?.latest_auction?.currency : '$'}</span></span>
                                                                </div>
                                                                :
                                                                <div className="price-block">
                                                                    <span> Not sold</span>
                                                                </div>
                                                        }
                                                    </div>
                                                        : <div>
                                                            {item?.latest_auction?.status === "ACTIVE" ?
                                                                <div>
                                                                    <div className="price-block">
                                                                        <span>Base price :</span>
                                                                        <span className="price mx-2">{numberWithCommas(item?.price)}<span
                                                                            className="price-unit mx-2">{item?.latest_auction?.currency !== "dollar" ? item?.latest_auction?.currency : '$'}</span></span>
                                                                    </div>

                                                                </div> :
                                                                item?.latest_auction?.type ? <div className="price-block">
                                                                    <span>Current bid :</span>
                                                                        <span className="price mx-2">
                                                                            { numberWithCommas(item?.bidding_details?.max_bid)}
                                                                        <span
                                                                            className="price-unit mx-2">{item?.latest_auction?.currency !== "dollar" ? item?.latest_auction?.currency : '$'}
                                                                        </span>
                                                                    </span>
                                                                </div> : ''
                                                            }
                                                        </div>
                                                    }
                                                        {/* <span>Start bid:</span>
                                                        <span className="price">{numberWithCommas(item?.bidding_details?.max_bid)}<span className="price-unit">$</span></span> */}
                                                    </div>
                                                </div>
                                        // </div>
                                    )
                                }) : ""}
                            </div>
                        </div>
                        <PaginationComponent count={countProducts} handeSelectPage={handeSelectPage} />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Artworks;