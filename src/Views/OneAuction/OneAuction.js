import React, {useEffect, useState} from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import {message, Pagination, Spin} from 'antd';
import 'antd/dist/antd.css';
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import queryString from 'query-string';
import Breadcrumbs from '../../components/Breadcrumbs';
import moment from "jalali-moment";
import {Link} from "react-router-dom";
import img from "../../images/img-1.jpg";
import {useSelector} from "react-redux";
import {AuctionStatusTextBtn} from "../../utils/converTypePersion";

function OneAuction(props) {
    const {is_logged_in} = useSelector((state) => state.authReducer)
    const [Auction, setAuction] = useState("");
    const [Product, setProduct] = useState("");
    const [countProducts, setCountProducts] = useState(0)
    const [reminder, setReminder] = useState(false)
    const [bookmark, setBookmark] = useState(false)
    const [loading, setLoading] = useState(false)
    const [HouseDetail, setHouseDetail] = useState([])

    const id = props.match.params.id;
    const [params, setParams] = useState({
        page: 1,
        page_size: 10,
        auctions__id: id,
        search: "",
        ordering: "id",
    })
    const queries = queryString.stringify(params);

    const getProducts = () => {
        axios.get(`${BASE_URL}/sale/product/?${queries}`)
            .then(resp => {
                if ((resp.data.code === 200) && resp.data?.data?.result) {
                    const res = resp.data?.data?.result;
                    setProduct(res)
                    setCountProducts(resp.data?.data?.count)
                }
            })
            .catch(err => {
                console.error(err);
                setLoading(false)
            })
    }

    const getAuction = () => {
        setLoading(true)
        axios.get(`${BASE_URL}/sale/auctions/${id}/`)
            .then(resp => {
                if (resp.data.code === 200) {
                    setAuction(resp.data.data.result)
                    axios.get(`${BASE_URL}/account/home-auction/${resp.data.data.result?.house?.id}/`).then(res => {
                        setHouseDetail(res.data.data.result);
                    }).catch(err => {
                        console.error(err)
                    })
                }
                getProducts()
                setLoading(false)

            })
            .catch(err => {
                console.error(err);
                setLoading(false)
            })
    }
    useEffect(() => {
        getAuction()
    }, [])

    useEffect(() => {
        getProducts()
    }, [params])

    const handeSelectPage = (e) => {
        setParams({
            ...params, page: e
        })
    }

    const parseWebSite = (data, type) => {
        for (let i in data)
            if (data[i].type === type) {
                if (data[i].url.startsWith("http"))
                    return data[i].url
                else
                    return "http://" + data[i].url
            }
    }

    const parser = (data, type) => {
        for (let i in data)
            if (data[i].type === type) {
                return data[i].exact_url
            }
    }

    const handleSearchProducts = (value) => {
        setParams({
            ...params, search: value
        })
    }

    const handleSetOrdering = (value) => {
        setParams({
            ...params, ordering: value
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
        <>
            <Header/>
            <Spin spinning={loading}>
                <main className="innercontent" id="oneAuction">
                    <div className="container innercontainer">
                        <div className="row sm-mrgb50">
                            <Breadcrumbs
                                title={Auction.title}
                                parent={{'title': 'حراج ها', 'link': '/auctions'}}
                            >
                                <div className="w-100 lg-mrgb50 d-lg-none d-block"/>
                                <div className="col-lg-6 ">
                                    <p className="auction-link"> برای کسب اطلاعات بیشتر در مورد این حراج،<a
                                        style={{marginRight: 3}} href="#"> اینجا کلیک کنید. </a></p>
                                </div>
                            </Breadcrumbs>

                        </div>

                        <div className="inner-cover"/>


                        <div className="flex-row-reverse d-flex over-cover">
                            <div className="col-xl-4 col-lg-5 col-md-6 col-12">
                                <div className="bg-shadow bl-shadow10">
                                    <div className="auction-detail">
                                        <div className="block-head row">
                                            <div className="col-6">
                                                {convertToEn(Auction.type)}
                                            </div>
                                            <div className="col-6 textalign-left"
                                                 onClick={() => setReminder(!reminder)}>
                                                <Link to={`/panel-reminders`}>
                                            <span className={"reminder-icon " + (reminder ? "active" : "")}>
                                                {reminder ? "در حال یادآوری" : "یادآوری"}
                                            </span>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="auction-calender">
                                            {Auction?.status !== "CLOSED" ?
                                                <>
                                                    <div className="auction-date">
                                            <span className="start-date ps-2">
                                                {Auction && Auction?.start_time !== 'None' ? moment(Auction?.start_time, 'YYYY-MM-DD').locale('fa').format('D MMMM') : ""}
                                            </span>
                                                        <span className="end-date pe-2">
                                                {Auction && Auction?.end_time !== 'None' ? moment(Auction?.end_time, 'YYYY-MM-DD').locale('fa').format('D MMMM') : ""}
                                            </span>
                                                    </div>
                                                    <div className="auction-time">
                                            <span
                                                className="start-time ps-1"> {moment(Auction?.start_time, 'YYYY-MM-DD HH:mm').locale('fa').format('HH')}</span>

                                                        <span className="end-time pe-2">
                                                {Auction?.end_time !== 'None' ? moment(Auction?.end_time, 'YYYY-MM-DD HH:mm').locale('fa').format('HH') : ""}
                                            </span>
                                                    </div>
                                                </>
                                                :
                                                <div className="ended" style={{display: "flex"}}>
                                                    <div className="text">حراج به پایان رسید</div>
                                                </div>
                                            }
                                        </div>
                                        <div className="auction-moreinfo">
                                            <a href="#" className="d-info category"><h6
                                                className="default">{Auction.category ? Auction.category[0]?.title : ""}</h6>
                                            </a>
                                            <a href="#" className="d-info gallery"><h6
                                                className="default">{Auction?.house?.home_auction_name}</h6>
                                            </a>
                                        </div>
                                        <div className="auction-btns">
                                            {Auction?.status !== "CLOSED" ?
                                                <>
                                                    {Auction?.is_live_streaming ?
                                                        <button type="button" className="btn btn-gray view">مشاهده
                                                            زنده
                                                        </button> : ""}
                                                    {/* <Link to={`/buyer-register/${Auction?.id}`}>
                                                        <button type="button" className="btn btn-main join">عضویت <span
                                                            className="">در حراج</span>
                                                        </button>
                                                    </Link> */}

                                                    {AuctionStatusTextBtn(Auction?.status, Auction?.user_is_enrolled, Auction?.id)}
                                                </>
                                                :

                                                <>
                                                    <div className="auction-closed">حراج بسته شد</div>
                                                    <div className="auction-total-price">
                                                        <span>مبلغ کل فروش:  </span>
                                                        <span>{Auction?.products_total_price} تومان</span>
                                                    </div>
                                                </>

                                            }
                                        </div>
                                        <div className="detail-bid">
                                            <div className="db-left">
                                                <span className="db-title">آثار</span>
                                                <div className="price-block">
                                                    <span className="price">{Auction?.products_count}</span>
                                                </div>
                                            </div>
                                            <span className="seprator brdrbefor"/>
                                            <div className="db-right ">
                                                <span className="db-title ">هنرمندان</span>
                                                <div className="price-block ">
                                                    <span className="price">{Auction?.artists_count}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="">
                            <ul className="nav nav-tabs justify-content-star main-tab" id="auction-tab"
                                role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" data-bs-toggle="tab"
                                            data-bs-target="#auction1"
                                            type="button" role="tab" aria-controls="catsearch1"
                                            aria-selected="true">آثار
                                        ({countProducts})
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" data-bs-toggle="tab"
                                            data-bs-target="#auction2"
                                            type="button" role="tab" aria-controls="tab2" aria-selected="false">جزئیات
                                        حراج
                                    </button>
                                </li>
                            </ul>
                            <div className="tab-content mrgt50" id="auction-content">
                                <div className="tab-pane fade show active" id="auction1" role="tabpanel"
                                     aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-lg-3 col-sm-5 col-9">
                                            <div className="search-input">
                                                <input type="text" className="default-input"
                                                       placeholder="جستجو" onChange={(e) => {
                                                    setParams({
                                                        ...params, search: e.target.value
                                                    })
                                                }}/>
                                                <button type="button" className="btn-search"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-9 col-sm-7 col-3">
                                            <div className="sort-block">
                                            <span className="btn-sort">مرتب‌سازی با<span
                                                className="d-none d-md-inline-block">:</span></span>
                                                <ul className="sort-list">
                                                    <li
                                                        onClick={() => {
                                                            setParams({
                                                                ...params, ordering: "id"
                                                            })
                                                        }}
                                                        className={params.ordering === "id" ? "active" : ""}>صعودی
                                                    </li>
                                                    <li
                                                        onClick={() => {
                                                            setParams({
                                                                ...params, ordering: "-id"
                                                            })
                                                        }}
                                                        className={params.ordering === "-id" ? "active" : ""}>نزولی
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mrgt30 all-artwork row-cols-2  row-cols-lg-4">

                                        {Product ? Product.map((item, key) => {
                                            return (
                                                <div className="artwork-block" key={key}>
                                                    <div className="artwork-img">
                                                        <div className="image-custom-back" style={{
                                                            backgroundImage: `url(${item.media.exact_url})`,
                                                            height: "250px"
                                                        }}/>
                                                        {/*<img src={item?.media?.exact_url} width="317" height="280"*/}
                                                        {/*     alt=""*/}
                                                        {/*     className="img-fluid"/>*/}
                                                        <div className="artwork-category"
                                                             onClick={() => setBookmark(!bookmark)}>
                                                        <span onClick={() =>
                                                            addBookmark(
                                                                item?.following?.bookmark?.is_active ?
                                                                    item?.following?.bookmark?.id :
                                                                    item?.id, item?.following?.bookmark?.is_active)
                                                        }
                                                              className={"category-save artwork-bookmark " + (item?.following?.bookmark?.is_active ? "active" : "")}/>
                                                        </div>
                                                    </div>
                                                    <div className="block-body">
                                                        <div className="ra-row">
                                                            <div className="ra-col">
                                                                <h6 className="default gray50 ">{item?.artwork_title}</h6>
                                                                <h4 className="default">از {Auction.title}</h4>
                                                            </div>
                                                            <div className="ra-col">
                                                                <h5 className="default lot-num">{key + 1}</h5>
                                                            </div>
                                                        </div>
                                                        <div className="detail-bid">
                                                            <div className="db-left">
                                                                <span className="db-title">تخمین</span>
                                                                <div className="price-block">
                                                                <span
                                                                    className="price">{item?.min_price} - {item?.max_price}</span>
                                                                    <span className="unit"> تومان</span>
                                                                </div>
                                                            </div>
                                                            <span className="seprator brdrbefor"/>
                                                            {
                                                                Auction?.status === "CLOSED" ?
                                                                    <div>
                                                                        {
                                                                            item?.sale_status ?
                                                                                <div className="db-right text-success">
                                                                                    <span className="db-title"> پیشنهاد نهایی</span>
                                                                                    <div className="price-block">
                                                                                        <span
                                                                                            className="price text-success">{item?.bidding_details?.max_bid || 0}</span>
                                                                                        <span
                                                                                            className="unit text-success"> تومان</span>
                                                                                        <span className="text-success"
                                                                                              style={{fontSize: '.7rem'}}> ({item?.bidding_details?.total_bids}) پیشنهاد</span>

                                                                                    </div>
                                                                                </div>
                                                                                :
                                                                                <div className="db-right ">
                                                                                    <span className="db-title">قیمت فعلی</span>
                                                                                    <div className="price-block">
                                                                                        <span className="price">{item?.bidding_details?.max_bid || 0}</span>
                                                                                        <span className="unit"> تومان</span>
                                                                                        <span className="unit" style={{fontSize:'.7rem'}}> ({item?.bidding_details?.total_bids}) پیشنهاد</span>
                                                                                    </div>
                                                                                </div>
                                                                        }
                                                                    </div>

                                                                    :
                                                                                <div className="db-right ">
                                                                                    <span className="db-title">قیمت پایه</span>
                                                                                    <div className="price-block">
                                                                                        <span className="price">{item?.price}</span>
                                                                                        <span className="unit"> تومان</span>

                                                                                    </div>
                                                                                </div>
                                                                        }

                                                        </div>
                                                        {is_logged_in ? <div>

                                                                {
                                                                    item?.sale_status ?
                                                                        <Link to={`/artworks/${item?.id}`} type="button"
                                                                              className="text-center btn-lightgreenbg">
                                                                            فروخته شد
                                                                        </Link> :
                                                                        <div>
                                                                            {
                                                                                Auction?.status === "CLOSED" ?
                                                                                    <Link to={`/artworks/${item?.id}`} type="button"
                                                                                          className="text-center btn-lightpink">
                                                                                       فروخته نشد
                                                                                    </Link>
                                                                                    :
                                                                                    <Link to={`/artworks/${item?.id}`} type="button"
                                                                                                                     className="text-center btn-lightpink">
                                                                                    {item?.product_status === "on_stage" ? 'ثبت پیشنهاد' : 'مشاهده محصول'}
                                                                                </Link>
                                                                            }
                                                                        </div>

                                                                }

                                                            </div>

                                                            : ''}
                                                    </div>
                                                </div>
                                            )
                                        }) : ""}

                                    </div>
                                    {countProducts > 10 ?
                                        <div className="row">
                                            <Pagination
                                                style={{direction: 'ltr', textAlign: 'center'}}
                                                responsive
                                                onChange={(e) => handeSelectPage(e)}
                                                defaultCurrent={1}
                                                total={countProducts}
                                            />
                                        </div>
                                        : ""
                                    }
                                </div>
                                <div className="tab-pane fade" id="auction2" role="tabpanel"
                                     aria-labelledby="profile-tab">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <p>{Auction.description}</p>
                                            <div className="vartical-tab">
                                                <ul className="nav nav-tabs " id="vt-1" role="tablist">
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link active" id="vtab1"
                                                                data-bs-toggle="tab"
                                                                data-bs-target="#v1"
                                                                type="button" role="tab" aria-controls="v1"
                                                                aria-selected="true">پرداخت
                                                        </button>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link" id="vtab2" data-bs-toggle="tab"
                                                                data-bs-target="#v2"
                                                                type="button"
                                                                role="tab" aria-controls="v2" aria-selected="false">حمل
                                                            و
                                                            نقل
                                                        </button>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link" id="vtab3" data-bs-toggle="tab"
                                                                data-bs-target="#v3"
                                                                type="button"
                                                                role="tab" aria-controls="v3"
                                                                aria-selected="false"> شرایط
                                                            استفاده
                                                        </button>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link" id="vtab4" data-bs-toggle="tab"
                                                                data-bs-target="#v4"
                                                                type="button"
                                                                role="tab" aria-controls="v4" aria-selected="false">سایر
                                                        </button>
                                                    </li>
                                                </ul>
                                                <div className="tab-content" id="vt-1Content">
                                                    <div className="tab-pane fade show active" id="v1" role="tabpanel"
                                                         aria-labelledby="vtab1">
                                                        <p>{Auction?.payment_method_conditions}</p>
                                                        <h5 className="default">نحوه‌ی پرداخت</h5>
                                                        <p>{Auction?.payment_method === 'ONLINE' ? 'آنلاین' : "آفلاین"}</p>
                                                    </div>
                                                    <div className="tab-pane fade" id="v2" role="tabpanel"
                                                         aria-labelledby="vtab2">
                                                        <p>{Auction?.transportation}</p>
                                                    </div>
                                                    <div className="tab-pane fade" id="v3" role="tabpanel"
                                                         aria-labelledby="vtab3">
                                                        <p>{Auction?.return_rules}</p>
                                                    </div>
                                                    <div className="tab-pane fade" id="v4" role="tabpanel"
                                                         aria-labelledby="vtab3">
                                                        <p>{Auction?.details}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">


                                            <div className="auction-gallery-info">
                                                <div className="ah-left">
                                                    <div className="h-block-img">
                                                        <img src={parser(HouseDetail.media, 'profile')} width="159"
                                                             height="159"
                                                             alt={HouseDetail.home_auction_name}/>
                                                    </div>
                                                    <div className="detail-ahm">
                                                        <a href="#" className="ah-link"><h3
                                                            className="default">{HouseDetail.home_auction_name}</h3></a>
                                                        <button type="button" className="btn-follow">دنبال کردن</button>
                                                    </div>
                                                </div>
                                                <div className="ah-block-all-info">
                                                    <a href={parseWebSite(HouseDetail.info_link, 'website')}
                                                       className="link-info all-info">{parseWebSite(HouseDetail.info_link, 'website')}</a>
                                                    <a href={`mailto: ${HouseDetail.email}`}
                                                       className="all-info mail-info">{HouseDetail.email}</a>
                                                    <a href={HouseDetail.phone ? HouseDetail.phone : HouseDetail.mobile}
                                                       className="info-tel all-info">{HouseDetail.phone ? HouseDetail.phone : HouseDetail.mobile}</a>
                                                    <address className="all-info">
                                                        {HouseDetail?.home_auction_location?.address}
                                                    </address>
                                                </div>
                                                <ul className="social">
                                                    <li>
                                                        <a href={parseWebSite(HouseDetail.info_link, 'facebook')}
                                                           id="facebook"/>
                                                    </li>
                                                    <li>
                                                        <a href={parseWebSite(HouseDetail.info_link, 'instagram')}
                                                           id="instagram"/>
                                                    </li>
                                                    <li>
                                                        <a href={parseWebSite(HouseDetail.info_link, 'telegram')}
                                                           id="telegram"/>
                                                    </li>
                                                </ul>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </main>


                <Footer/>
            </Spin>
        </>
    );
}

export default OneAuction;
