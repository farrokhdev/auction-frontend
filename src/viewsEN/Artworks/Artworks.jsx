import React, { useState, useEffect } from 'react'
import HeaderEN from '../../componentsEN/HeaderEN';
import Footer from '../../componentsEN/Footer';
import MainTitle from '../../componentsEN/MainTitle/MainTitle';
import SideBar from '../../componentsEN/SideBar';
import { AuctionStatusTextBtn, AuctionType, status, convertTypeEN } from '../../utils/converTypePersion';
import moment from 'jalali-moment';
import PaginationComponent from '../../componentsEN/PaginationComponent';
import { Link } from 'react-router-dom';
import pic2 from '../../imgEN/pic2.jpg';


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
        type: [],
        visible_in_site: true,
        status: []
    })


    const handleClose = (value) => {
        if (params?.status.indexOf(status(value)) > -1) {
            handleAuctionStatus(params?.status?.filter(item => item !== status(value)))
        }
        if (params?.category.indexOf(value) > -1) {
            handleSetCategory(params?.category?.filter(item => item !== value))
        }
        if (params?.home_auction_name.indexOf(value) > -1) {
            handleSetHomeAuction(params?.home_auction_name?.filter(item => item !== value))
        }
        if (params?.type.indexOf(convertTypeEN(value)) > -1) {
            handleSetType(params?.type?.filter(item => item !== convertTypeEN(value)))
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
            type: [],
            visible_in_site: true,
            status: []
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
            ...params, page: 1, status: value
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

    const handleSetOrderingOld = () => {
        setParams({
            // since the ordering field on the product is different from auctions we have to
            // set this explicitly
            ...params, ordering: '-creation_time'
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
    const handleSetDateEN = (dateFrom, dateTo) => {
        setParams({
            ...params,
            start_date_before: dateTo,
            start_date_after: dateFrom,
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

    useEffect(() => {

    }, [params, Tags])
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
                            handleSetDate={handleSetDate}
                            typeCategory="آثار"
                        />
                        <div className="col-lg-9">
                            <div className="row row-cols-md-3 row-cols-2">
                                {Products && Products.length >= 1 ? Products.map((item, key) => {
                                    return (
                                        <div className="col">
                                            <Link to="/" className="artwork-block">
                                                <div className="artwork-img">
                                                    <img src={pic2} width="998" height="880" alt="" className="img-fluid" />
                                                    <div className="artwork-category">
                                                        <span className="category-save artwork-bookmark"></span>
                                                        <span className="category-icon live-icon">Live</span>
                                                    </div>
                                                </div>
                                                <div className="block-body text-center">
                                                    <h6 className="default gray50 ">Sohrab Sepehri</h6>
                                                    <h4 className="default">From the Saqakhaneh series</h4>
                                                    <div className="auction-calender">
                                                        <div className="auction-date">
                                                            <span className="start-date">19 June</span>
                                                            <span className="end-date">22 June</span>
                                                        </div>
                                                        <div className="auction-time">
                                                            <span className="start-time">10 AM</span>
                                                        </div>
                                                    </div>
                                                    <div className="price-block">
                                                        <span>Start bid:</span>
                                                        <span className="price">100<span className="price-unit">$</span></span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
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