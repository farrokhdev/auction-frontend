import React from 'react'
import { Link } from 'react-router-dom';
import pic5 from "../../imgEN/pic5.jpg"
function Search() {
    return (
        <>
            <div className="inner-nav" id="nav-search" aria-labelledby="#navsearch">
                <div className="container containercs">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="main-search">
                                <input placeholder="Search artworks, auctions, auctions home ...." />
                                <button type="button" className="btn btn-view">Advance</button>
                            </div>
                        </div>
                    </div>
                    <div className="row mrgt30">
                        <div className="col-md-9 col-lg-10">
                            <div className="category-search">
                                <ul className="nav nav-tabs justify-content-star main-tab" id="cat-serach"
                                    role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="tab-11" data-bs-toggle="tab"
                                            data-bs-target="#catsearch1"
                                            type="button" role="tab" aria-controls="catsearch1"
                                            aria-selected="true">All
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="tab-21" data-bs-toggle="tab"
                                            data-bs-target="#catsearch2"
                                            type="button" role="tab" aria-controls="tab2"
                                            aria-selected="false">Auctions
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="tab-31" data-bs-toggle="tab"
                                            data-bs-target="#catsearch3"
                                            type="button" role="tab" aria-controls="tab3"
                                            aria-selected="false">Artworks
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="tab-41" data-bs-toggle="tab"
                                            data-bs-target="#catsearch4"
                                            type="button" role="tab" aria-controls="tab4"
                                            aria-selected="false">Auction
                                            homes
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content main-tab-content" id="cat-serach-content">
                                    <div className="tab-pane fade show active" id="catsearch1"
                                        role="tabpanel"
                                        aria-labelledby="home-tab">
                                        <div className="owl-carousel">
                                            <Link to="/" className="artwork-block">
                                                <div className="artwork-img">
                                                    <div className="bg-shadow tl-shadow10">
                                                        <img src={pic5} width="50" height="80"
                                                        style={{display:'block' , width:'50%' ,}}
                                                            alt=""
                                                            className="" />
                                                        <div className="artwork-category">
                                                            <span className="category-save artwork-bookmark"></span>
                                                            <span className="category-icon firstoffer-icon">First offer</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="block-body">
                                                    <h4 className="default">Windows from the Red series</h4>
                                                    <h6 className="default">Parivash Ganji</h6>
                                                    <div className="auction-calender">
                                                        <div className="auction-date">
                                                            <span className="start-date">19 June</span>
                                                            <span className="end-date">22 June</span>
                                                        </div>
                                                        <div className="auction-time">
                                                            <span className="start-time">10 AM</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search;