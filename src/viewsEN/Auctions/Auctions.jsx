import React, { useState, useEffect } from 'react'
import HeaderEN from '../../componentsEN/HeaderEN';
import Footer from '../../componentsEN/Footer';
import MainTitle from '../../componentsEN/MainTitle/MainTitle';
import SideBar from '../../componentsEN/SideBar';
import { AuctionStatusTextBtn, AuctionType, status, convertTypeEN } from '../../utils/converTypePersion';
import moment from 'jalali-moment';
import pic6 from '../../imgEN/pic6.jpg';
import PaginationComponent from '../../componentsEN/PaginationComponent';
import { Link } from 'react-router-dom';

function Auctions(props) {

    const [Tags, setTags] = useState([])
    const [Auctions, setAuctions] = useState([1, 2, 3, 4]);
    const [countAuctions, setCountAuctions] = useState(1)
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
        <>
            <HeaderEN />
            <main className="innercontent" id="all-auctions">
                <div className="container innercontainer">
                    <MainTitle title={'Auctions'} handleSetOrdering={handleSetOrdering} handleSetOrderingOld={handleSetOrderingOld} />
                    <div className="row">
                        <SideBar
                            params={params}
                            setParams={setParams}
                            handleClose={handleClose}
                            Tags={Tags}
                            setTags={setTags}
                            handleRemoveFilters={handleRemoveFilters}
                            handleAuctionStatus={handleAuctionStatus}
                            handleSetHomeAuction={handleSetHomeAuction}
                            handleSearchProducts={handleSearchProducts}
                            handleSetCategory={handleSetCategory}
                            handleSetType={handleSetType}
                            handleSetHomeAuctionSelect={handleSetHomeAuctionSelect}
                            handleSetDate={handleSetDate}
                            handleSetDateEN={handleSetDateEN}
                        //    typeCategory="خانه های حراج" 
                        />
                        <div className="col-lg-9">
                            {Auctions && Auctions.length >= 1 ? Auctions.map((item, key) => {
                                return (
                                    <div className="row-blocks">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <Link to="/" className="bg-shadow tl-shadow10">
                                                    <img src={pic6} width="500" height="500" alt="" />
                                                </Link>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="block-head row">
                                                    <div className="col-xl-3 col-sm-4 col-3">
                                                        <span className="category-icon live-icon">Live<span className="d-none d-md-inline-block">Auction</span></span>
                                                    </div>
                                                    <div className="col-xl-9 col-sm-8 col-9 textalign-right">
                                                        <span className="reminder-icon">Reminde me</span>
                                                        <button type="button" className="link-source">
                                                            <span><span
                                                                className="d-none d-sm-inline-block">View </span>artworks (<span>25</span>)</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="block-main">
                                                    <Link to="/">
                                                        <h5 className="default">Live online only Mid Century Modern, Decorative Arts and
                                                            Pictures
                                                            Antiques, Books </h5>
                                                    </Link>
                                                    <div className="block-detail">
                                                        <h6 className="default">Contemprory art</h6>
                                                        <Link to="/" className="default">
                                                            <h6 className="default gray50">Arthibition gallery</h6>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="block-footer row">
                                                    <div className="col-sm-5">
                                                        <div className="jumbotron countdown show end date-show"
                                                            data-Date='2021/5/13 16:09:00'>
                                                            <div className="running">
                                                                <timer>
                                                                    <span className="days">13</span>:12<span className="hours"></span>:21<span
                                                                        className="minutes"></span><span className="show-text"></span>
                                                                </timer>
                                                                <div className="break"></div>
                                                            </div>
                                                            <div className="ended">
                                                                <div className="text">Offer is ended</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-7 textalign-right">
                                                        <button type="button" className="btn btn-gray view me-2">View live</button>

                                                        <Link to={`/en/buyer-register/${Auctions?.id}`}>
                                                        <button type="button" className="btn btn-main join">Join this auction</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) : ""}

                             <PaginationComponent count={countAuctions} handeSelectPage={handeSelectPage} />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Auctions;