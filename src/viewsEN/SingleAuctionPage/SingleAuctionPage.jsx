import React, { useState , useEffect} from 'react';
import HeaderEN from '../../componentsEN/HeaderEN';
import Footer from '../../componentsEN/Footer';
import MainTitle from '../../componentsEN/MainTitle/MainTitle';
import logo from "../../imgEN/logo-1.jpg"

import queryString from 'query-string';
import axios from '../../utils/request';
import { BASE_URL } from '../../utils';
import { LIST_AUCTIONS } from '../../utils/constant';
import {  Spin } from "antd";

function SingleAuctionPage(props) {

    const [countAuctionsOfHouseAuction, setCountAuctionsOfHouseAuction] = useState(0)
    const [auctionsOfHouseAuction, setAuctionsOfHouseAuction] = useState([])
    const [loading, setLoading] = useState(false);


    const [params, setParams] = useState({
        home_auction : props.match.params.id ,
        page : 1 , 
        page_size : 10 
    })

    const getListAuctions = () => {
        setLoading(true)
        const queries = queryString.stringify(params);
        axios.get(`${BASE_URL}${LIST_AUCTIONS}?${queries}`).then(res => {
            setAuctionsOfHouseAuction(res.data.data.result);
            setCountAuctionsOfHouseAuction(res.data.data.count)
            setLoading(false)
        }).catch(err => {
            console.error(err)
            setLoading(false)
        })
    }
    useEffect(() => {
        getListAuctions();
    }, [params])



    const handleSetOrderingOld = () => {
        setParams({
            // since the ordering field on the product is different from auctions we have to
            // set this explicitly
            ...params, ordering: '-creation_time'
        })
    }

    const handleSetOrdering = () => {
        setParams({
            // since the ordering field on the product is different from auctions we have to
            // set this explicitly
            ...params, ordering: 'creation_time'
        })
    }

    

    const handeSelectPage = (e) => {
        setParams({
            ...params, page: e
        })
    }


    return (
        <>
        <Spin spinning={loading}>
            <HeaderEN />
            <main className="innercontent" id="all-auctions">
                <div className="container innercontainer">
                    <MainTitle title={'Collection7'} handleSetOrdering={handleSetOrdering} handleSetOrderingOld={handleSetOrderingOld} />

            <div class="w-100 lg-mrgb50 d-lg-none d-block"></div>
            <div class="col-lg-6 ">
                <p class="auction-link">More information about this auction, <a href="#">Click here.</a></p>
            </div>
       
        <div class="inner-cover"></div>
        <div class="flex-row-reverse d-flex over-cover">
            <div class="col-xl-4 col-lg-5 col-md-6 col-12">
                <div class="bg-shadow br-shadow10">
                    <div class="auction-detail">
                        <div class="block-head row">
                            <div class="col-6">
                                    <span class="category-icon online-icon">Online</span>
                            </div>
                            <div class="col-6 textalign-right">
                                <span class="reminder-icon">Reminde me</span>
                            </div>
                        </div>
                        <div class="auction-calender">
                            <div class="auction-date">
                                <span class="start-date">19 June</span>
                                <span class="end-date">22 June</span>
                            </div>
                            <div class="auction-time">
                                <span class="start-time">10 AM</span>
                                <span class="end-time">10 PM</span>
                            </div>
                        </div>
                        <div class="auction-moreinfo">
                            <a href="#" class="d-info category"><h6 class="default">Modern and contemporary
                                art</h6></a>
                            <a href="#" class="d-info gallery"><h6 class="default">Arthibition gallery</h6>
                            </a>
                        </div>
                        <div class="auction-btns">
                            <button type="button" class="btn btn-gray view">View live</button>
                            <button type="button" class="btn btn-main join">Join <span class="">this auction</span></button>
                        </div>
                        <div class="detail-bid">
                            <div class="db-left">
                                <span class="db-title">Artworks</span>
                                <div class="price-block">
                                    <span class="price">100</span>
                                </div>
                            </div>
                            <span class="seprator brdrbefor"></span>
                            <div class="db-center">
                                <span class="db-title">Estimate</span>
                                <div class="price-block">
                                    <span class="price">500-700</span>
                                    <span class="unit"> USD</span>
                                </div>
                            </div>
                            <span class="seprator brdrbefor"></span>
                            <div class="db-right ">
                                <span class="db-title ">Artists</span>
                                <div class="price-block ">
                                    <span class="price">25</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="">
            <ul class="nav nav-tabs justify-content-star main-tab" id="auction-tab"
                role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" data-bs-toggle="tab"
                            data-bs-target="#auction1"
                            type="button" role="tab" aria-controls="catsearch1" aria-selected="true">Artworks (100)
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" data-bs-toggle="tab"
                            data-bs-target="#auction2"
                            type="button" role="tab" aria-controls="tab2" aria-selected="false">Auction details
                    </button>
                </li>
            </ul>
            <div class="tab-content main-tab-content" id="auction-content">
                <div class="tab-pane fade show active" id="auction1" role="tabpanel"
                     aria-labelledby="home-tab">
                    <div class="row">
                        <div class="col-lg-3 col-sm-5 col-9">
                            <div class="search-input">
                                <input type="text" class="default-input" placeholder="Search more than 100 auctions..."/>
                                <button type="button" class="btn-search"></button>
                            </div>
                        </div>
                        <div class="col-lg-9 col-sm-7 col-3">
                            <div class="sort-block">
                                <span class="btn-sort">Sort by<span class="d-none d-md-inline-block">:</span></span>
                                <ul class="sort-list">
                                    <li>Ascending</li>
                                    <li class="active">Descending</li>
                                    <li>popular</li>
                                    <li>Sell</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row mrgt30 all-artwork"  >
                        <div class="col">
                            <div class="artwork-block">
                                <div class="artwork-img">
                                    <img src="img/img-6.jpg" width="317" height="280" alt="" class="img-fluid"/>
                                    <div class="artwork-category">
                                        <span class="category-save artwork-bookmark"></span>
                                    </div>
                                </div>
                                <div class="block-body">
                                    <div class="ra-row">
                                        <div class="ra-col">
                                            <h6 class="default gray50 ">Sohrab Sepehri</h6>
                                            <h4 class="default">From the Saqakhaneh series</h4>
                                        </div>
                                        <div class="ra-col">
                                            <h5 class="default lot-num">1</h5>
                                        </div>
                                    </div>
                                    <div class="detail-bid">
                                        <div class="db-left">
                                            <span class="db-title">Estimate</span>
                                            <div class="price-block">
                                                <span class="price">500-700</span>
                                                <span class="unit"> USD</span>
                                            </div>
                                        </div>
                                        <span class="seprator brdrbefor"></span>
                                        <div class="db-right ">
                                            <span class="db-title">Start bid</span>
                                            <div class="price-block">
                                                <span class="price">100</span>
                                                <span class="unit"> USD</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" class="btn-lightpink">Place bid</button>
                                </div>
                            </div>
                            <div class="artwork-block">
                                <div class="artwork-img">
                                    <img src="img/img-7.jpg" width="998" height="880" alt="" class="img-fluid w-100"/>
                                    <div class="artwork-category">
                                        <span class="category-save artwork-bookmark"></span>
                                    </div>
                                </div>
                                <div class="block-body">
                                    <div class="ra-row">
                                        <div class="ra-col">
                                            <h6 class="default gray50 ">Sohrab Sepehri</h6>
                                            <h4 class="default">From the Saqakhaneh series</h4>
                                        </div>
                                        <div class="ra-col">
                                            <h5 class="default lot-num">2</h5>
                                        </div>
                                    </div>
                                    <div class="detail-bid">
                                        <div class="db-left">
                                            <span class="db-title">Estimate</span>
                                            <div class="price-block">
                                                <span class="price">500-700</span>
                                                <span class="unit"> USD</span>
                                            </div>
                                        </div>
                                        <span class="seprator brdrbefor"></span>
                                        <div class="db-right ">
                                            <span class="db-title bluecolor">Current bid</span>
                                            <div class="price-block bluecolor">
                                                <span class="price">2000</span>
                                                <span class="unit"> USD</span><span
                                                    class="bids-num">(<span>12</span>bid)</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" class="btn-lightpink">Place bid</button>
                                </div>
                            </div>
                            <div class="artwork-block">
                                <div class="artwork-img">
                                    <img src="img/img-8.jpg" width="317" height="280" alt="" class="img-fluid w-100"/>
                                    <div class="artwork-category">
                                        <span class="category-save artwork-bookmark"></span>
                                    </div>
                                </div>
                                <div class="block-body">
                                    <div class="ra-row">
                                        <div class="ra-col">
                                            <h6 class="default gray50 ">Sohrab Sepehri</h6>
                                            <h4 class="default">From the Saqakhaneh series</h4>
                                        </div>
                                        <div class="ra-col">
                                            <h5 class="default lot-num">3</h5>
                                        </div>
                                    </div>
                                    <div class="detail-bid">
                                        <div class="db-left">
                                            <span class="db-title">Estimate</span>
                                            <div class="price-block">
                                                <span class="price">500-700</span>
                                                <span class="unit"> USD</span>
                                            </div>
                                        </div>
                                        <span class="seprator brdrbefor"></span>
                                        <div class="db-right ">
                                            <span class="db-title">Start bid</span>
                                            <div class="price-block">
                                                <span class="price">100</span>
                                                <span class="unit"> USD</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" class="btn-lightpink">Place bid</button>
                                </div>
                            </div>
                            <div class="artwork-block">
                                <div class="artwork-img">
                                    <img src="img/img-9.jpg" width="317" height="280" alt="" class="img-fluid w-100"/>
                                    <div class="artwork-category">
                                        <span class="category-save artwork-bookmark"></span>
                                    </div>
                                </div>
                                <div class="block-body">
                                    <div class="ra-row">
                                        <div class="ra-col">
                                            <h6 class="default gray50 ">Sohrab Sepehri</h6>
                                            <h4 class="default">From the Saqakhaneh series</h4>
                                        </div>
                                        <div class="ra-col">
                                            <h5 class="default lot-num">4</h5>
                                        </div>
                                    </div>
                                    <div class="detail-bid">
                                        <div class="db-left">
                                            <span class="db-title">Estimate</span>
                                            <div class="price-block">
                                                <span class="price">500-700</span>
                                                <span class="unit"> USD</span>
                                            </div>
                                        </div>
                                        <span class="seprator brdrbefor"></span>
                                        <div class="db-right ">
                                            <span class="db-title">Start bid</span>
                                            <div class="price-block">
                                                <span class="price">100</span>
                                                <span class="unit"> USD</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" class="btn-lightpink">Place bid</button>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="artwork-block">
                                <div class="artwork-img">
                                    <img src="img/pic7.jpg" width="493" height="621" alt="" class="img-fluid w-100"/>
                                    <div class="artwork-category">
                                        <span class="category-save artwork-bookmark"></span>
                                    </div>
                                </div>
                                <div class="block-body">
                                    <div class="ra-row">
                                        <div class="ra-col">
                                            <h6 class="default gray50 ">Sohrab Sepehri</h6>
                                            <h4 class="default">From the Saqakhaneh series</h4>
                                        </div>
                                        <div class="ra-col">
                                            <h5 class="default lot-num">2</h5>
                                        </div>
                                    </div>
                                    <div class="detail-bid">
                                        <div class="db-left">
                                            <span class="db-title">Estimate</span>
                                            <div class="price-block">
                                                <span class="price">500-700</span>
                                                <span class="unit"> USD</span>
                                            </div>
                                        </div>
                                        <span class="seprator brdrbefor"></span>
                                        <div class="db-right ">
                                            <span class="db-title bluecolor">Current bid</span>
                                            <div class="price-block bluecolor">
                                                <span class="price">2000</span>
                                                <span class="unit"> USD</span><span
                                                    class="bids-num">(<span>12</span>bid)</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" class="btn-lightpink">Place bid</button>
                                </div>
                            </div>
                            <div class="artwork-block">
                                <div class="artwork-img">
                                    <img src="img/pic1.jpg" width="998" height="880" alt="" class="img-fluid w-100"/>
                                    <div class="artwork-category">
                                        <span class="category-save artwork-bookmark"></span>
                                    </div>
                                </div>
                                <div class="block-body">
                                    <div class="ra-row">
                                        <div class="ra-col">
                                            <h6 class="default gray50 ">Sohrab Sepehri</h6>
                                            <h4 class="default">From the Saqakhaneh series</h4>
                                        </div>
                                        <div class="ra-col">
                                            <h5 class="default lot-num">1</h5>
                                        </div>
                                    </div>
                                    <div class="detail-bid">
                                        <div class="db-left">
                                            <span class="db-title">Estimate</span>
                                            <div class="price-block">
                                                <span class="price">500-700</span>
                                                <span class="unit"> USD</span>
                                            </div>
                                        </div>
                                        <span class="seprator brdrbefor"></span>
                                        <div class="db-right ">
                                            <span class="db-title">Start bid</span>
                                            <div class="price-block">
                                                <span class="price">100</span>
                                                <span class="unit"> USD</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" class="btn-lightpink">Place bid</button>
                                </div>
                            </div>
                            <div class="artwork-block">
                                <div class="artwork-img">
                                    <img src="img/pic2.jpg" width="998" height="880" alt="" class="img-fluid w-100"/>
                                    <div class="artwork-category">
                                        <span class="category-save artwork-bookmark"></span>
                                    </div>
                                </div>
                                <div class="block-body">
                                    <div class="ra-row">
                                        <div class="ra-col">
                                            <h6 class="default gray50 ">Sohrab Sepehri</h6>
                                            <h4 class="default">From the Saqakhaneh series</h4>
                                        </div>
                                        <div class="ra-col">
                                            <h5 class="default lot-num">3</h5>
                                        </div>
                                    </div>
                                    <div class="detail-bid">
                                        <div class="db-left">
                                            <span class="db-title">Estimate</span>
                                            <div class="price-block">
                                                <span class="price">500-700</span>
                                                <span class="unit"> USD</span>
                                            </div>
                                        </div>
                                        <span class="seprator brdrbefor"></span>
                                        <div class="db-right ">
                                            <span class="db-title">Start bid</span>
                                            <div class="price-block">
                                                <span class="price">100</span>
                                                <span class="unit"> USD</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" class="btn-lightpink">Place bid</button>
                                </div>
                            </div>
                            <div class="artwork-block">
                                <div class="artwork-img">
                                    <img src="img/pic3.jpg" width="998" height="880" alt="" class="img-fluid w-100"/>
                                    <div class="artwork-category">
                                        <span class="category-save artwork-bookmark"></span>
                                    </div>
                                </div>
                                <div class="block-body">
                                    <div class="ra-row">
                                        <div class="ra-col">
                                            <h6 class="default gray50 ">Sohrab Sepehri</h6>
                                            <h4 class="default">From the Saqakhaneh series</h4>
                                        </div>
                                        <div class="ra-col">
                                            <h5 class="default lot-num">4</h5>
                                        </div>
                                    </div>
                                    <div class="detail-bid">
                                        <div class="db-left">
                                            <span class="db-title">Estimate</span>
                                            <div class="price-block">
                                                <span class="price">500-700</span>
                                                <span class="unit"> USD</span>
                                            </div>
                                        </div>
                                        <span class="seprator brdrbefor"></span>
                                        <div class="db-right ">
                                            <span class="db-title">Start bid</span>
                                            <div class="price-block">
                                                <span class="price">100</span>
                                                <span class="unit"> USD</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" class="btn-lightpink">Place bid</button>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="artwork-block">
                                <div class="artwork-img">
                                    <img src="img/pic4.jpg" width="998" height="880" alt="" class="img-fluid w-100"/>
                                    <div class="artwork-category">
                                        <span class="category-save artwork-bookmark"></span>
                                    </div>
                                </div>
                                <div class="block-body">
                                    <div class="ra-row">
                                        <div class="ra-col">
                                            <h6 class="default gray50 ">Sohrab Sepehri</h6>
                                            <h4 class="default">From the Saqakhaneh series</h4>
                                        </div>
                                        <div class="ra-col">
                                            <h5 class="default lot-num">1</h5>
                                        </div>
                                    </div>
                                    <div class="detail-bid">
                                        <div class="db-left">
                                            <span class="db-title">Estimate</span>
                                            <div class="price-block">
                                                <span class="price">500-700</span>
                                                <span class="unit"> USD</span>
                                            </div>
                                        </div>
                                        <span class="seprator brdrbefor"></span>
                                        <div class="db-right ">
                                            <span class="db-title">Start bid</span>
                                            <div class="price-block">
                                                <span class="price">100</span>
                                                <span class="unit"> USD</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" class="btn-lightpink">Place bid</button>
                                </div>
                            </div>
                            <div class="artwork-block">
                                <div class="artwork-img">
                                    <img src="img/pic5.jpg" width="998" height="880" alt="" class="img-fluid w-100"/>
                                    <div class="artwork-category">
                                        <span class="category-save artwork-bookmark"></span>
                                    </div>
                                </div>
                                <div class="block-body">
                                    <div class="ra-row">
                                        <div class="ra-col">
                                            <h6 class="default gray50 ">Sohrab Sepehri</h6>
                                            <h4 class="default">From the Saqakhaneh series</h4>
                                        </div>
                                        <div class="ra-col">
                                            <h5 class="default lot-num">2</h5>
                                        </div>
                                    </div>
                                    <div class="detail-bid">
                                        <div class="db-left">
                                            <span class="db-title">Estimate</span>
                                            <div class="price-block">
                                                <span class="price">500-700</span>
                                                <span class="unit"> USD</span>
                                            </div>
                                        </div>
                                        <span class="seprator brdrbefor"></span>
                                        <div class="db-right ">
                                            <span class="db-title bluecolor">Current bid</span>
                                            <div class="price-block bluecolor">
                                                <span class="price">2000</span>
                                                <span class="unit"> USD</span><span
                                                    class="bids-num">(<span>12</span>bid)</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" class="btn-lightpink">Place bid</button>
                                </div>
                            </div>
                            <div class="artwork-block">
                                <div class="artwork-img">
                                    <img src="img/pic6.jpg" width="570" height="470" alt="" class="img-fluid w-100"/>
                                    <div class="artwork-category">
                                        <span class="category-save artwork-bookmark"></span>
                                    </div>
                                </div>
                                <div class="block-body">
                                    <div class="ra-row">
                                        <div class="ra-col">
                                            <h6 class="default gray50 ">Sohrab Sepehri</h6>
                                            <h4 class="default">From the Saqakhaneh series</h4>
                                        </div>
                                        <div class="ra-col">
                                            <h5 class="default lot-num">3</h5>
                                        </div>
                                    </div>
                                    <div class="detail-bid">
                                        <div class="db-left">
                                            <span class="db-title">Estimate</span>
                                            <div class="price-block">
                                                <span class="price">500-700</span>
                                                <span class="unit"> USD</span>
                                            </div>
                                        </div>
                                        <span class="seprator brdrbefor"></span>
                                        <div class="db-right ">
                                            <span class="db-title">Start bid</span>
                                            <div class="price-block">
                                                <span class="price">100</span>
                                                <span class="unit"> USD</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" class="btn-lightpink">Place bid</button>
                                </div>
                            </div>
                            <div class="artwork-block">
                                <div class="artwork-img">
                                    <img src="img/pic7.jpg" width="493" height="621" alt="" class="img-fluid w-100"/>
                                    <div class="artwork-category">
                                        <span class="category-save artwork-bookmark"></span>
                                    </div>
                                </div>
                                <div class="block-body">
                                    <div class="ra-row">
                                        <div class="ra-col">
                                            <h6 class="default gray50 ">Sohrab Sepehri</h6>
                                            <h4 class="default">From the Saqakhaneh series</h4>
                                        </div>
                                        <div class="ra-col">
                                            <h5 class="default lot-num">4</h5>
                                        </div>
                                    </div>
                                    <div class="detail-bid">
                                        <div class="db-left">
                                            <span class="db-title">Estimate</span>
                                            <div class="price-block">
                                                <span class="price">500-700</span>
                                                <span class="unit"> USD</span>
                                            </div>
                                        </div>
                                        <span class="seprator brdrbefor"></span>
                                        <div class="db-right ">
                                            <span class="db-title">Start bid</span>
                                            <div class="price-block">
                                                <span class="price">100</span>
                                                <span class="unit"> USD</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" class="btn-lightpink">Place bid</button>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="artwork-block">
                                <div class="artwork-img">
                                    <img src="img/pic1.jpg" width="998" height="880" alt="" class="img-fluid w-100"/>
                                    <div class="artwork-category">
                                        <span class="category-save artwork-bookmark"></span>
                                    </div>
                                </div>
                                <div class="block-body">
                                    <div class="ra-row">
                                        <div class="ra-col">
                                            <h6 class="default gray50 ">Sohrab Sepehri</h6>
                                            <h4 class="default">From the Saqakhaneh series</h4>
                                        </div>
                                        <div class="ra-col">
                                            <h5 class="default lot-num">1</h5>
                                        </div>
                                    </div>
                                    <div class="detail-bid">
                                        <div class="db-left">
                                            <span class="db-title">Estimate</span>
                                            <div class="price-block">
                                                <span class="price">500-700</span>
                                                <span class="unit"> USD</span>
                                            </div>
                                        </div>
                                        <span class="seprator brdrbefor"></span>
                                        <div class="db-right ">
                                            <span class="db-title">Start bid</span>
                                            <div class="price-block">
                                                <span class="price">100</span>
                                                <span class="unit"> USD</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" class="btn-lightpink">Place bid</button>
                                </div>
                            </div>
                            <div class="artwork-block">
                                <div class="artwork-img">
                                    <img src="img/pic7.jpg" width="493" height="621" alt="" class="img-fluid w-100"/>
                                    <div class="artwork-category">
                                        <span class="category-save artwork-bookmark"></span>
                                    </div>
                                </div>
                                <div class="block-body">
                                    <div class="ra-row">
                                        <div class="ra-col">
                                            <h6 class="default gray50 ">Sohrab Sepehri</h6>
                                            <h4 class="default">From the Saqakhaneh series</h4>
                                        </div>
                                        <div class="ra-col">
                                            <h5 class="default lot-num">2</h5>
                                        </div>
                                    </div>
                                    <div class="detail-bid">
                                        <div class="db-left">
                                            <span class="db-title">Estimate</span>
                                            <div class="price-block">
                                                <span class="price">500-700</span>
                                                <span class="unit"> USD</span>
                                            </div>
                                        </div>
                                        <span class="seprator brdrbefor"></span>
                                        <div class="db-right ">
                                            <span class="db-title bluecolor">Current bid</span>
                                            <div class="price-block bluecolor">
                                                <span class="price">2000</span>
                                                <span class="unit"> USD</span><span
                                                    class="bids-num">(<span>12</span>bid)</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" class="btn-lightpink">Place bid</button>
                                </div>
                            </div>
                            <div class="artwork-block">
                                <div class="artwork-img">
                                    <img src="img/img-8.jpg" width="317" height="280" alt="" class="img-fluid w-100"/>
                                    <div class="artwork-category">
                                        <span class="category-save artwork-bookmark"></span>
                                    </div>
                                </div>
                                <div class="block-body">
                                    <div class="ra-row">
                                        <div class="ra-col">
                                            <h6 class="default gray50 ">Sohrab Sepehri</h6>
                                            <h4 class="default">From the Saqakhaneh series</h4>
                                        </div>
                                        <div class="ra-col">
                                            <h5 class="default lot-num">3</h5>
                                        </div>
                                    </div>
                                    <div class="detail-bid">
                                        <div class="db-left">
                                            <span class="db-title">Estimate</span>
                                            <div class="price-block">
                                                <span class="price">500-700</span>
                                                <span class="unit"> USD</span>
                                            </div>
                                        </div>
                                        <span class="seprator brdrbefor"></span>
                                        <div class="db-right ">
                                            <span class="db-title">Start bid</span>
                                            <div class="price-block">
                                                <span class="price">100</span>
                                                <span class="unit"> USD</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" class="btn-lightpink">Place bid</button>
                                </div>
                            </div>
                            <div class="artwork-block">
                                <div class="artwork-img">
                                    <img src="img/img-9.jpg" width="317" height="280" alt="" class="img-fluid w-100"/>
                                    <div class="artwork-category">
                                        <span class="category-save artwork-bookmark"></span>
                                    </div>
                                </div>
                                <div class="block-body">
                                    <div class="ra-row">
                                        <div class="ra-col">
                                            <h6 class="default gray50 ">Sohrab Sepehri</h6>
                                            <h4 class="default">From the Saqakhaneh series</h4>
                                        </div>
                                        <div class="ra-col">
                                            <h5 class="default lot-num">4</h5>
                                        </div>
                                    </div>
                                    <div class="detail-bid">
                                        <div class="db-left">
                                            <span class="db-title">Estimate</span>
                                            <div class="price-block">
                                                <span class="price">500-700</span>
                                                <span class="unit"> USD</span>
                                            </div>
                                        </div>
                                        <span class="seprator brdrbefor"></span>
                                        <div class="db-right ">
                                            <span class="db-title">Start bid</span>
                                            <div class="price-block">
                                                <span class="price">100</span>
                                                <span class="unit"> USD</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" class="btn-lightpink">Place bid</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <nav aria-label="Page navigation">
                            <ul class="pagination">
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Previous"></a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item active" aria-current="page"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">4</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Next"></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="tab-pane fade" id="auction2" role="tabpanel"
                     aria-labelledby="profile-tab">
                    <div class="row">
                        <div class="col-lg-8">
                            <p>It is always a special moment when works from artists’ personal collections appear on the market,
                                but never more so than when those artists are among the world’s most celebrated names.</p>
                            <p>Sotheby’s is honoured to announce the sale of works from the long-time New York studio and home
                                of internationally renowned artists Christo and Jeanne-Claude. The captivating collection
                                invites the world to step into the private sphere of the famed artistic couple, through nearly
                                400 lots that showcase the range of their artistic inspirations, friendships with leading 20th
                                century artists, and the famed studio where Christo and Jeanne-Claude projected their artistic
                                vision to the world.</p>
                            <p>Additionally, the collection includes several works by Christo and Jeanne-Claude spanning their
                                multi-decade practice, featuring many of their most well-known public projects, such as The Pont
                                Neuf Wrapped, Project for Paris, and The Umbrellas, Joint Project for Japan and USA, as well as
                                their famed Package and Store Front series from the 1960s.</p>
                            <div class="vartical-tab">
                                <ul class="nav nav-tabs " id="vt-1" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active" id="vtab1" data-bs-toggle="tab" data-bs-target="#v1"
                                                type="button" role="tab" aria-controls="v1" aria-selected="true">Payment
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="vtab2" data-bs-toggle="tab" data-bs-target="#v2"
                                                type="button"
                                                role="tab" aria-controls="v2" aria-selected="false">Shipping
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="vtab3" data-bs-toggle="tab" data-bs-target="#v3"
                                                type="button"
                                                role="tab" aria-controls="v3" aria-selected="false">Terms of use
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="vtab4" data-bs-toggle="tab" data-bs-target="#v4"
                                                type="button"
                                                role="tab" aria-controls="v4" aria-selected="false">Other
                                        </button>
                                    </li>
                                </ul>
                                <div class="tab-content" id="vt-1Content">
                                    <div class="tab-pane fade show active" id="v1" role="tabpanel" aria-labelledby="vtab1">
                                        <p>
                                            Lorsqu’une personne qui a un intérêt, direct ou indirect, dans la vente d’un Lot
                                            (par
                                            exemple, parce qu’elle est membre d’une indivision propriétaire du Lot ou parce
                                            qu’elle
                                            a
                                            donné une garantie pour ce Lot), est autorisée à enchérir pour ledit Lot, il vous
                                            sera
                                            indiqué, par un courriel et/ou dans les Informations sur la Vente en Ligne, que des
                                            parties
                                            intéres sées sont susceptibles d’enchérir sur ce Lot. Ces parties intéressées
                                            pourront
                                            parfois avoir connaissance du Prix de Réserve du Lot.</p>
                                        <h5 class="default">Payment terms</h5>
                                        <p>
                                            Additionally, the collection includes several works by Christo and Jeanne-Claude
                                            spanning
                                            their multi-decade practice, featuring many of their most well-known public
                                            projects,
                                            such
                                            as The Pont Neuf Wrapped, Project for Paris, and The Umbrellas, Joint Project for
                                            Japan
                                            and
                                            USA, as well as their famed Package and Store Front series from the 1960s.
                                        </p>
                                    </div>
                                    <div class="tab-pane fade" id="v2" role="tabpanel" aria-labelledby="vtab2">
                                        <p>
                                            Lorsqu’une personne qui a un intérêt, direct ou indirect, dans la vente d’un Lot
                                            (par
                                            exemple, parce qu’elle est membre d’une indivision propriétaire du Lot ou parce
                                            qu’elle
                                            a
                                            donné une garantie pour ce Lot), est autorisée à enchérir pour ledit Lot, il vous
                                            sera
                                            indiqué, par un courriel et/ou dans les Informations sur la Vente en Ligne, que des
                                            parties
                                            intéres sées sont susceptibles d’enchérir sur ce Lot. Ces parties intéressées
                                            pourront
                                            parfois avoir connaissance du Prix de Réserve du Lot.</p>
                                        <h5 class="default">Shipping</h5>
                                        <p>
                                            Additionally, the collection includes several works by Christo and Jeanne-Claude
                                            spanning
                                            their multi-decade practice, featuring many of their most well-known public
                                            projects,
                                            such
                                            as The Pont Neuf Wrapped, Project for Paris, and The Umbrellas, Joint Project for
                                            Japan
                                            and
                                            USA, as well as their famed Package and Store Front series from the 1960s.
                                        </p>
                                    </div>
                                    <div class="tab-pane fade" id="v3" role="tabpanel" aria-labelledby="vtab3">
                                        <p>
                                            Lorsqu’une personne qui a un intérêt, direct ou indirect, dans la vente d’un Lot
                                            (par
                                            exemple, parce qu’elle est membre d’une indivision propriétaire du Lot ou parce
                                            qu’elle
                                            a
                                            donné une garantie pour ce Lot), est autorisée à enchérir pour ledit Lot, il vous
                                            sera
                                            indiqué, par un courriel et/ou dans les Informations sur la Vente en Ligne, que des
                                            parties
                                            intéres sées sont susceptibles d’enchérir sur ce Lot. Ces parties intéressées
                                            pourront
                                            parfois avoir connaissance du Prix de Réserve du Lot.</p>
                                        <h5 class="default">Terms of use</h5>
                                        <p>
                                            Additionally, the collection includes several works by Christo and Jeanne-Claude
                                            spanning
                                            their multi-decade practice, featuring many of their most well-known public
                                            projects,
                                            such
                                            as The Pont Neuf Wrapped, Project for Paris, and The Umbrellas, Joint Project for
                                            Japan
                                            and
                                            USA, as well as their famed Package and Store Front series from the 1960s.
                                        </p>
                                    </div>
                                    <div class="tab-pane fade" id="v4" role="tabpanel" aria-labelledby="vtab3">
                                        <p>
                                            Lorsqu’une personne qui a un intérêt, direct ou indirect, dans la vente d’un Lot
                                            (par
                                            exemple, parce qu’elle est membre d’une indivision propriétaire du Lot ou parce
                                            qu’elle
                                            a
                                            donné une garantie pour ce Lot), est autorisée à enchérir pour ledit Lot, il vous
                                            sera
                                            indiqué, par un courriel et/ou dans les Informations sur la Vente en Ligne, que des
                                            parties
                                            intéres sées sont susceptibles d’enchérir sur ce Lot. Ces parties intéressées
                                            pourront
                                            parfois avoir connaissance du Prix de Réserve du Lot.
                                        </p>
                                        <h5 class="default">Other</h5>
                                        <p>
                                            Additionally, the collection includes several works by Christo and Jeanne-Claude
                                            spanning
                                            their multi-decade practice, featuring many of their most well-known public
                                            projects,
                                            such
                                            as The Pont Neuf Wrapped, Project for Paris, and The Umbrellas, Joint Project for
                                            Japan
                                            and
                                            USA, as well as their famed Package and Store Front series from the 1960s.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="auction-gallery-info">
                                <div class="ah-left">
                                    <div class="h-block-img">
                                        <img src="img/logo-3.png" width="159" height="159"
                                             alt="arthibition gallery"/>
                                    </div>
                                    <div class="detail-ahm">
                                        <a href="#" class="ah-link"><h3 class="default">Arthibition gallery</h3></a>
                                        <button type="button" class="btn-follow">Follow</button>
                                    </div>
                                </div>
                                <div class="ah-block-all-info">
                                    <a href="#" class="link-info all-info">www.sarebangallery.com</a>
                                    <a href="mailto: Info@sarebangallery.com"
                                       class="all-info mail-info">Info@sarebangallery.com</a>
                                    <a href="+982144258856" class="info-tel all-info">+98 21 4425 8856</a>
                                    <address class="all-info"><span class="province">Tehran Province,</span>Tehran,
                                        Hoveyzeh St, No.130
                                    </address>
                                </div>
                                <ul class="social">
                                    <li><a href="#" id="facebook"></a></li>
                                    <li><a href="#" id="instagram"></a></li>
                                    <li><a href="#" id="telegram"></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
            <Footer />
            </Spin>
        </>
    )
}

export default SingleAuctionPage;
