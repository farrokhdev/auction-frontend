import React, {useEffect, useState} from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import slider1 from "../../images/slider1.jpg";
import {
    faBell,
    faEye,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import Maintitle from "../../components/main title for all";
import Sidebar from "../../components/side-bar";
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import queryString from "query-string";
import {Pagination} from "antd";
import Timer from 'react-compound-timer'

function Auctions() {

    const [Auctions, setAuctions] = useState("");
    const [countAuctions, setCountAuctions] = useState(0)
    const [params, setParams] = useState({
        page: 1,
        page_size: 9,
        search: '',
        category: [],
        date_after: '',
        date_before: '',
        ordering: '',
        auction_houses__home_auction_name: [],
        type: [],
    })

    const queries = queryString.stringify(params);

    const getProducts = () => {
        axios.get(`${BASE_URL}/sale/auctions/?${queries}`)
            .then(resp => {
                if (resp.data.code === 200) {
                    setAuctions(resp.data.data.result)
                    setCountAuctions(resp.data.data.count)
                }

            })
            .catch(err => {
                console.error(err);
            })
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
            ...params, type: value
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
            date_after: '2021-01-05',
            date_before: '2021-03-07'
        })

    }

    function AuctionType(type){
        switch(type){
            case "SECOND_HIDDEN":
                return "دومین پیشنهاد"
            case "HIDDEN":
                return "اولین پیشنهاد"
            case "PERIODIC":
                return "حراج مدت دار "
            case "ONLINE":
                return "حراج آنلاین"
            case "LIVE  ":
                return "حراج زنده"
            default:
                return ""
        }
    }

    function timeExpire(time) {
        let expire = new Date(time)
        let now = new Date()
        if (expire > now){
            return expire - now
        }
        else {
            return 0

        }
    }

    return (
        <div dir="rtl">
            <Header/>
            <main className="innercontent" id="all-auctions">
                <div className="container innercontainer">
                    <Maintitle title={'حراج ها'} handleSetOrdering={handleSetOrdering}/>
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
                        />

                        <div className="col-lg-9">
                            {Auctions && Auctions.length >= 1 ? Auctions.map((item, key) => {
                                return (
                                    <div key={key} className="row-blocks">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <Link to={`/one-auction/${item.id}`} className="bg-shadow tr-shadow10">
                                                    <img src={slider1} width="500" height="500" alt=""/>
                                                </Link>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="block-head row">
                                                    <div className="col-xl-3 col-sm-4 col-3">
                                                        <span className="category-icon live-icon">
                                                          <span className="d-none d-md-inline-block"> </span> {AuctionType(item.type) }

                                                        </span>
                                                    </div>
                                                    <div className="col-xl-9 col-sm-8 col-9 textalign-left">
                                                        <FontAwesomeIcon icon={faBell}/>
                                                        <span className="reminder-icon ">یادآوری</span>
                                                        <button type="button" className="link-source">
                                                              <span>
                                                                <span className="d-none d-sm-inline-block">
                                                                  مشاهده{" "}
                                                                </span>
                                                                آثار (<span>{item?.product ? item.product.length : 0}</span>)
                                                              </span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="block-main">
                                                    <Link to="/">
                                                        <h5 className="default">
                                                            {item.text}
                                                        </h5>
                                                    </Link>
                                                    <div className="block-detail">
                                                        <h6 className="default">{item.title}</h6>
                                                        <Link to="/" className="default">
                                                            <h6 className="default gray50">گالری آرتیبیشن</h6>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="block-footer row">
                                                    <div className="col-sm-5">
                                                        <div
                                                            className="jumbotron countdown show end date-show"
                                                            data-Date="2021/06/05 16:09:00"
                                                        >
                                                            {item.status !== "CLOSED" ?
                                                            <div className="ended">
                                                                    <div className="text">حراج به پایان رسید</div>
                                                            </div>
                                                                :
                                                                <Timer
                                                                    initialTime={timeExpire(item.end_time)}
                                                                    direction="backward"
                                                                >
                                                                    {() => (
                                                                        <div style={{direction:'ltr', textAlign:"right"}}>
                                                                            <Timer.Days /> :
                                                                            <Timer.Hours /> :
                                                                            <Timer.Minutes /> :
                                                                            <Timer.Seconds />
                                                                        </div>
                                                                    )}
                                                                </Timer>
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-7 textalign-left">
                                                        <button type="button" className="btn btn-gray ms-2">
                                                            <FontAwesomeIcon icon={faEye}/>
                                                            مشاهده {AuctionType(item.type) }

                                                        </button>
                                                        {item.status !== "CLOSED" ?
                                                            <button type="button" class="btn btn-lightpink">حراج به پایان رسید</button>
                                                            :
                                                        <button type="button" className="btn btn-main join">
                                                            {/* عضویت در حراج  */}
                                                            {item.status? "عضویت در حراج" : "ثبت نطر"}
                                                        
                                                        </button>
                                                            
                                                            
                                                    }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) : ""}


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
                                total={countAuctions}
                                pageSizeOptions={[9, 18, 36, 48]}
                                defaultPageSize={9}
                            />

                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default Auctions;
