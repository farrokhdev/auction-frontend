import React, { useState, useEffect } from 'react'
import HeaderEN from '../../componentsEN/HeaderEN';
import Footer from '../../componentsEN/Footer';
import MainTitle from '../../componentsEN/MainTitle/MainTitle';
import SideBar from '../../componentsEN/SideBar';
import { AuctionStatusTextBtn, AuctionType, status, convertTypeEN } from '../../utils/converTypePersion';
import moment from 'jalali-moment';
import pic6 from '../../imgEN/pic6.jpg';
import PaginationComponent from '../../componentsEN/PaginationComponent';

function Auctions() {

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
            <main class="innercontent" id="all-auctions">
                <div class="container innercontainer">
                    <MainTitle title={'Auctions'} handleSetOrdering={handleSetOrdering} handleSetOrderingOld={handleSetOrderingOld} />
                    <div class="row">
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
                        <div class="col-lg-9">
                            {Auctions && Auctions.length >= 1 ? Auctions.map((item, key) => {
                                return (
                                    <div class="row-blocks">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <a href="#" class="bg-shadow tl-shadow10">
                                                    <img src={pic6} width="500" height="500" alt="" />
                                                </a>
                                            </div>
                                            <div class="col-md-8">
                                                <div class="block-head row">
                                                    <div class="col-xl-3 col-sm-4 col-3">
                                                        <span class="category-icon live-icon">Live<span class="d-none d-md-inline-block">Auction</span></span>
                                                    </div>
                                                    <div class="col-xl-9 col-sm-8 col-9 textalign-right">
                                                        <span class="reminder-icon">Reminde me</span>
                                                        <button type="button" class="link-source">
                                                            <span><span
                                                                class="d-none d-sm-inline-block">View </span>artworks (<span>25</span>)</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="block-main">
                                                    <a href="#">
                                                        <h5 class="default">Live online only Mid Century Modern, Decorative Arts and
                                                            Pictures
                                                            Antiques, Books </h5>
                                                    </a>
                                                    <div class="block-detail">
                                                        <h6 class="default">Contemprory art</h6>
                                                        <a href="#" class="default">
                                                            <h6 class="default gray50">Arthibition gallery</h6>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="block-footer row">
                                                    <div class="col-sm-5">
                                                        <div class="jumbotron countdown show end date-show"
                                                            data-Date='2021/5/13 16:09:00'>
                                                            <div class="running">
                                                                <timer>
                                                                    <span class="days">13</span>:12<span class="hours"></span>:21<span
                                                                        class="minutes"></span><span class="show-text"></span>
                                                                </timer>
                                                                <div class="break"></div>
                                                            </div>
                                                            <div class="ended">
                                                                <div class="text">Offer is ended</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-7 textalign-right">
                                                        <button type="button" class="btn btn-gray view me-2">View live</button>
                                                        <button type="button" class="btn btn-main join">Join this auction</button>
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