import React, {useEffect, useState} from "react";
import pic12 from "../../images/pic12.jpg";
import {Link} from "react-router-dom";
import queryString from "query-string";
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import {Spin} from "antd";
import Timer from "react-compound-timer";
import img from "../../images/logo-1.jpg";

function Search() {

    const [params, setParams] = useState({
        search: '',
        object_type: ''
    })
    const [items, setItems] = useState("");
    const [loading, setLoading] = useState(false)

    const handleSearch = (value) => {
        setParams({
            ...params, search: value.target.value
        })
    }

    const handleType = (value) => {
        setParams({
            ...params, object_type: value
        })
    }

    const queries = queryString.stringify(params);

    const search = () => {
        setLoading(true)
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

    function timeExpire(time) {
        let expire = new Date(time)
        let now = new Date()
        if (expire > now) {
            return expire - now
        } else {
            return 0

        }
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

    useEffect(() => {
        if (params.search !== "")
            search()

    }, [params])

    const SearchType = (type, item) => {
        switch (type) {
            case 'products':
                return (
                    <Link to={`/artworks/${item?.id}`} className="artwork-block w-25">
                        <div className="artwork-img">
                            <div className="bg-shadow tl-shadow10">
                                <img
                                    src={item?.media?.exact_url}
                                    width="276"
                                    height="226"
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className="block-body">
                            <h4 className="default">{item?.artwork_title}</h4>
                            <h6 className="default">{item?.artist_name_fa}</h6>
                        </div>
                    </Link>
                )
            case 'auctions':
                return (
                    <Link to={`/one-auction/${item?.id}`} className="artwork-block w-25">
                        <div className="artwork-img">
                            <div className="bg-shadow tl-shadow10">
                                <img
                                    src={pic12}
                                    width="493"
                                    height="621"
                                    alt=""
                                    className="img-fluid"
                                />
                                <div className="artwork-category">
                                    {/*<FontAwesomeIcon icon={faBookmark}/>*/}
                                    {/* <span className="category-save artwork-bookmark"></span> */}
                                    {convertToEn(item?.type)}
                                </div>
                            </div>
                        </div>
                        <div className="block-body">
                            <h4 className="default">{item?.title}</h4>
                            <h6 className="default">{item?.house?.home_auction_name}</h6>
                            <div
                                className="jumbotron countdown show start"
                                data-Date="2021/06/05 16:09:00"
                            >
                                {item?.status === "CLOSED" ?
                                    <div className="ended">
                                        <div className="text">حراج به پایان رسید</div>
                                    </div>
                                    :
                                    <Timer
                                        initialTime={timeExpire(item?.end_time)}
                                        direction="backward"
                                    >
                                        {() => (
                                            <div style={{
                                                direction: 'ltr',
                                                textAlign: "right"
                                            }}>
                                                <Timer.Days/> :
                                                <Timer.Hours/> :
                                                <Timer.Minutes/> :
                                                <Timer.Seconds/>
                                            </div>
                                        )}
                                    </Timer>
                                }
                            </div>
                        </div>
                    </Link>
                )
            case 'home_auctions':
                return (
                    <div className="row">
                        <div className="col-xl-5 col-3">
                            <div className="h-block-img">
                                <Link to={`/house-acutions/${item?.id}`}>
                                    <img
                                        src={item.media}
                                        width="159" height="159"
                                        alt="smart auction"
                                        className="img-fluid"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-7 col-9">
                            <div className="h-block-header">
                                <div className="h-block-title">
                                    <h3 className="default">{item?.home_auction_name ? item?.home_auction_name : '---'}</h3>
                                    <h6 className="default">{item?.home_auction_type ? item?.home_auction_type : '---'}</h6>
                                </div>
                                <button type="button" className="btn-follow">دنبال کردن
                                </button>
                            </div>
                            <div className="h-block-info">
                                <a href={item?.phone ? item?.phone : item?.mobile}
                                   className="info-tel all-info">{item?.phone ? item?.phone : item?.mobile}</a>
                                {/* <address className="all-info"><span className="province">تهران، </span>میدان
                                                                هویزه، پلاک 103
                                                            </address> */}
                                <address className="all-info">
                                    {item?.home_auction_location?.address ? item?.home_auction_location?.address : '---'}
                                </address>
                            </div>
                        </div>
                    </div>
                )
        }

    }

    const SearchResults = (data) => {
        if (params.object_type === '' && params.search !== "") {
            return (
                <>
                    {data.data.auctions ? data.data.auctions.map(item => {
                        return (
                            SearchType('auctions', item)
                        )
                    }) : ""}
                    {data.data.products ? data.data.products.map(item => {
                        return (
                            SearchType('products', item)
                        )
                    }) : ""}
                    <div className="row row-cols-xl-2 row-cols-1">
                        {data.data.home_auctions ? data.data.home_auctions.map(item => {
                            return (
                                SearchType('home_auctions', item)
                            )
                        }):""}
                    </div>
                </>

            )
        }
        if (data.data.hasOwnProperty('auctions')) {
            return (
                data.data.auctions.map((item, key) => {
                    return (
                        SearchType('auctions', item)
                    )
                })
            )
        }
        if (data.data.hasOwnProperty('products')) {
            return (
                data.data.products.map((item, key) => {
                    return (
                        SearchType('products', item)
                    )
                })
            )
        }
        if (data.data.hasOwnProperty('home_auctions')) {
            return (
                <div className="row row-cols-xl-2 row-cols-1">
                    {data.data.home_auctions.map((item, key) => {
                        return (
                            SearchType('home_auctions', item)
                        )
                    })}
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    return (
        <>
            <div
                dir="rtl"
                className="inner-nav"
                id="nav-search"
                aria-labelledby="#navsearch"
            >
                <div className="container containercs">
                    <Spin spinning={loading}>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="main-search">
                                    <input type="text" placeholder="جستجوی اثر، حراج‌، خانه حراج"
                                           onChange={handleSearch}/>
                                    {/*<button type="button" className="btn-view text-muted">*/}
                                    {/*  جستجو پیشرفته*/}
                                    {/*</button>*/}
                                </div>
                            </div>
                        </div>
                        <div className="row mrgt30">

                            {/*<div className="col-md-3 col-lg-2 d-none d-md-block">*/}
                            {/*  <div className="recently-search">*/}
                            {/*    <h6 className="default">جستجوهای اخیر</h6>*/}
                            {/*    <ul>*/}
                            {/*      <li>*/}
                            {/*        <Link to="/">جواهرات</Link>*/}
                            {/*        <button type="button" className="btn-remove small"></button>*/}
                            {/*      </li>*/}
                            {/*      <li>*/}
                            {/*        <Link to="/">سهراب سپهری</Link>*/}
                            {/*        <button type="button" className="btn-remove small"></button>*/}
                            {/*      </li>*/}
                            {/*      <li>*/}
                            {/*        <Link to="/">گالری آرتیبیشن</Link>*/}
                            {/*        <button type="button" className="btn-remove small"></button>*/}
                            {/*      </li>*/}
                            {/*      <li>*/}
                            {/*        <Link to="/">گالری تهران</Link>*/}
                            {/*        <button type="button" className="btn-remove small"></button>*/}
                            {/*      </li>*/}
                            {/*    </ul>*/}
                            {/*  </div>*/}
                            {/*</div>*/}


                            <div className="col-md-12 col-lg-12">
                                <div className="category-search">
                                    <ul
                                        className="nav nav-tabs justify-content-star main-tab"
                                        id="detail-artwork"
                                        role="tablist"
                                    >
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link active"
                                                id="tab-11"
                                                data-bs-toggle="tab"
                                                data-bs-target="#catsearch1"
                                                type="button"
                                                role="tab"
                                                aria-controls="catsearch1"
                                                aria-selected="true"
                                                onClick={() => handleType('')}
                                            >
                                                همه
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="tab-21"
                                                data-bs-toggle="tab"
                                                data-bs-target="#catsearch2"
                                                type="button"
                                                role="tab"
                                                aria-controls="tab2"
                                                aria-selected="false"
                                                onClick={() => handleType('auction')}
                                            >
                                                حراج‌ها
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="tab-31"
                                                data-bs-toggle="tab"
                                                data-bs-target="#catsearch3"
                                                type="button"
                                                role="tab"
                                                aria-controls="tab3"
                                                aria-selected="false"
                                                onClick={() => handleType('product')}
                                            >
                                                آثار
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="tab-41"
                                                data-bs-toggle="tab"
                                                data-bs-target="#catsearch4"
                                                type="button"
                                                role="tab"
                                                aria-controls="tab4"
                                                aria-selected="false"
                                                onClick={() => handleType('home_auction')}
                                            >
                                                خانه‌های حراج
                                            </button>
                                        </li>
                                    </ul>
                                    <div
                                        className="tab-content main-tab-content"
                                        id="detail-artwork-content"
                                    >
                                        <div
                                            className="tab-pane fade show active"
                                            id="catsearch1"
                                            role="tabpanel"
                                            aria-labelledby="home-tab"
                                        >

                                            <div className="owl-carousel row">
                                                <SearchResults data={items}/>

                                            </div>

                                        </div>


                                        <div
                                            className="tab-pane fade"
                                            id="catsearch2"
                                            role="tabpanel"
                                            aria-labelledby="profile-tab"
                                        >
                                            <div className="owl-carousel row">
                                                <SearchResults data={items}/>
                                            </div>

                                        </div>


                                        <div
                                            className="tab-pane fade"
                                            id="catsearch3"
                                            role="tabpanel"
                                            aria-labelledby="contact-tab"
                                        >
                                            <div className="owl-carousel row">
                                                <SearchResults data={items}/>
                                            </div>

                                        </div>


                                        <div
                                            className="tab-pane fade"
                                            id="catsearch4"
                                            role="tabpanel"
                                            aria-labelledby="contact-tab"
                                        >

                                            <div className="owl-carousel row">
                                                <SearchResults data={items}/>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </Spin>
                </div>
            </div>
        </>
    );
}

export default Search;
