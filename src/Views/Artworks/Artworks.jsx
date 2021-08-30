import React, {useEffect, useState} from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import {Pagination, Spin} from 'antd';
import 'antd/dist/antd.css';
import {Link} from "react-router-dom";
import Maintitle from "../../components/main title for all";
import Sidebar from "../../components/side-bar";
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import queryString from 'query-string';
import moment from "jalali-moment";

function Artworks() {

    const [Products, setProducts] = useState("");
    const [countProducts, setCountProducts] = useState(0)
    const [loading, setLoading] = useState(false)
    // const [pageSize, setPageSize] = useState(5);
    const [params, setParams] = useState({
        page: 1,
        page_size: 9,
        search: '',
        category: [],
        date_after: '',
        date_before: '',
        ordering: '',
        auction_houses__home_auction_name: [],
        auctions__type: [],
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
        if (action){
            axios.delete(`${BASE_URL}/following/${data}`)
                .then(resp => {
                    getProducts()
                })
        } else {
            axios.post(`${BASE_URL}/following/` , {
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

    }, [params])

    const handeSelectPage = (e) => {
        setParams({
            ...params, page: e
        })
    }

    const handleSearchProducts = (value) => {
        setParams({
            ...params, search: value
        })
    }

    const handleSetCategory = (value) => {
        setParams({
            ...params, category: value
        })
    }

    const handleSetHomeAuction = (value) => {
        setParams({
            ...params, auction_houses__home_auction_name: value
        })
    }

    const handleSetHomeAuctionSelect = (value) => {
        setParams({
            ...params, auction_houses__home_auction_name: value
        })
    }

    const handleSetType = (value) => {
        setParams({
            ...params, auctions__type: value
        })
    }

    const handleSetOrdering = (value) => {
        setParams({
            ...params, ordering: value
        })
    }

    const handleSetDate = (dateFrom, dateTo) => {
        setParams({
            ...params,
            date_before : dateFrom ? moment.from(dateFrom, 'fa', 'YYYY/MM/DD').locale('en').format('YYYY-MM-DD') : "",
            date_after : dateTo ? moment.from(dateTo, 'fa', 'YYYY/MM/DD').locale('en').format('YYYY-MM-DD') : ""
            // date_after: '2021-01-05',
            // date_before: '2021-03-07'
        })

    }


    const convertToEn = (value) => {

        switch (value) {

            case "ONLINE":
                return <span className="category-icon online-icon">آنلاین</span>
            case "LIVE":
                return <span className="category-icon live-icon">زنده</span>

            case "PERIODIC":
                return <span className="category-icon timed-icon">مدت دار</span>

            case "HIDDEN":
                return <span className="category-icon firstoffer-icon">اولین پیشنهاد</span>

            case "SECOND_HIDDEN":
                return <span className="category-icon secondoffer-icon">دومین پیشنهاد</span>

        }
    }


    return (
        <div style={{overflow: 'hidden'}}>
            <Header/>
            <Spin spinning={loading}>
                <main class="innercontent" id="all-artworks">
                    <div class="container innercontainer">
                        <Maintitle title={'محصولات'} handleSetOrdering={handleSetOrdering}/>
                        <div class="row">
                            <Sidebar
                                params={params}
                                setParams={setParams}
                                handleSetHomeAuction={handleSetHomeAuction}
                                handleSearchProducts={handleSearchProducts}
                                handleSetCategory={handleSetCategory}
                                handleSetType={handleSetType}
                                handleSetHomeAuctionSelect={handleSetHomeAuctionSelect}
                                handleSetDate={handleSetDate}
                            />
                            <div class="col-lg-9">
                                <div class="row row-cols-md-3 row-cols-2">
                                    {Products && Products.length >= 1 ? Products.map((item, key) => {
                                        return (
                                            <div className="col" key={key}>
                                                    <div className="artwork-img">
                                                        <Link to={`/artworks/${item?.id}`} class="artwork-block">
                                                            <div className="image-custom-back" style={{backgroundImage:`url(${item.media.exact_url})` ,height:"270px"}}>
                                                            </div>
                                                        {/*<img*/}
                                                        {/*    src={item.media.exact_url ? item.media.exact_url : ''}*/}
                                                        {/*    width="998"*/}
                                                        {/*    height="880"*/}
                                                        {/*    alt=""*/}
                                                        {/*    className="img-fluid"*/}
                                                        {/*/>*/}
                                                        </Link>
                                                        <div className="artwork-category">
                                                            <span onClick={() =>
                                                                addBookmark(
                                                                    item?.following?.bookmark?.is_active?
                                                                    item?.following?.bookmark?.id :
                                                                        item?.id, item?.following?.bookmark?.is_active)
                                                            }
                                                            className={"category-save artwork-bookmark " + (item?.following?.bookmark?.is_active ? "active" : "")}/>
                                                            {convertToEn(item?.auctions ? item?.auctions[0]?.type : '')}
                                                            {/* <span className="category-icon live-icon">زنده</span> */}
                                                        </div>
                                                    </div>
                                                    <div className="block-body text-center">
                                                        <h6 className="default gray50 ">{item?.persian_artist_name}</h6>
                                                        <h4 className="default">{item?.artwork_title}</h4>
                                                        <div className="auction-calender">
                                                            <div className="auction-date">
                                                                <span className="start-date">
                                                                    {item?.latest_auction?.start_time ? moment(item?.latest_auction?.start_time, 'YYYY/MM/DD').locale('fa').format('DD MMMM') : ""}
                                                                </span>
                                                                <span className="end-date">{item?.latest_auction?.end_time ? moment(item?.latest_auction?.end_time, 'YYYY/MM/DD').locale('fa').format('DD MMMM') : ""}</span>
                                                            </div>
                                                            <div className="auction-time">
                                                                <span className="start-time">{item?.latest_auction?.start_time ? moment(item?.latest_auction?.start_time, 'YYYY/MM/DD').locale('fa').format('HH') : ""}</span>
                                                            </div>
                                                        </div>
                                                        <div className="price-block">
                                                            <span>قیمت پایه:</span>
                                                            <span className="price">
                          {item?.price}<span className="price-unit">تومان</span>
                        </span>
                                                        </div>
                                                    </div>
                                            </div>
                                        )
                                    }) : ""}


                                </div>
                                <Pagination
                                    style={{direction: 'ltr', textAlign: 'center'}}
                                    showSizeChanger
                                    responsive
                                    onShowSizeChange={(current, pageSize) => {
                                        getProducts(pageSize)
                                    }}
                                    // onChange={(current, pageSize) => {
                                    //   console.log(current, pageSize)

                                    // }}
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
            <Footer/>
        </div>
    );
}

export default Artworks;
