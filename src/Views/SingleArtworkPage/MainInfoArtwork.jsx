import React from 'react'
import { convertTypeAuctionToPersian, convertToEn } from '../../utils/converTypePersion';
import classnames from 'classnames';
import { useSelector } from "react-redux";
import Bid from "./bid";
import Secret from "./secret";
import { Rate } from 'antd';

function MainInfoArtwork({ artwork, rate, updateRate, addBookmark, Follow }) {

    const { is_logged_in } = useSelector((state) => state.authReducer)

    // console.log("artwork==>>>> ", artwork);

    const handleSearchArtworkByLat = (value) => {
        if (value > 0) {
            window.location.href = `#/artworks/${value}`
        } else {
            return null
        }
    }
    return (
        <div className="row">
            <div className="col-lg-6">
                <div id="inner-artwork" className="carousel slide" data-bs-ride="carousel" data-bs-touch="false">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#inner-artwork" data-bs-slide-to="0" className="active"
                            aria-current="true" aria-label="Slide 1">
                            <img src={artwork?.media?.exact_url} width="547" height="547" className="img-fluid d-xl-block" alt="..." />
                        </button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={artwork?.media?.exact_url} width="547" height="547" className="d-block img-fluid" alt="..." />
                        </div>
                        <div className="carousel-item ">
                            <img src={artwork?.media?.exact_url} width="547" height="547" className="d-block img-fluid" alt="..." />
                        </div>
                        <div className="carousel-item ">
                            <img src={artwork?.media?.exact_url} width="547" height="547" className="d-block img-fluid" alt="..." />
                        </div>
                        <div className="carousel-item ">
                            <img src={artwork?.media?.exact_url} width="547" height="547" className="d-block img-fluid" alt="..." />
                        </div>

                        <div className="carousel-item ">
                            <img src={artwork?.media?.exact_url} width="547" height="547" className="d-block img-fluid" alt="..." />
                        </div>
                    </div>
                </div>
            </div>



            <div className="col-lg-6">
                <div className="detail-block">
                    <div className="search-input my-3 w-50 mx-auto">
                        <input
                            id="product-searchh"
                            type="number"
                            className="default-input"
                            onChange={(e) => handleSearchArtworkByLat(e?.target?.value)}
                            placeholder="شماره لت مورد نظر را وارد نمایید." />
                        <button type="button" className="btn-search"></button>
                    </div>
                    <div className="detail-block-body" style={{ marginTop: 0 }}>
                        <div className="bg-shadow bl-shadow20">
                            <div className="detail-info">
                                <div className="detail-head">
                                    {artwork?.latest_auction?.id && <span className={classnames("category-icon", {
                                        "live-icon": artwork?.latest_auction?.type === 'LIVE',
                                        "online-icon": artwork?.latest_auction?.type === 'ONLINE',
                                        "timed-icon": artwork?.latest_auction?.type === 'PERIODIC',
                                        "firstoffer-icon": artwork?.latest_auction?.type === 'HIDDEN',
                                        "secondoffer-icon": artwork?.latest_auction?.type === 'SECOND_HIDDEN',

                                    })}> <span
                                        className="d-none d-md-inline-block mx-1">حراج</span>{artwork?.latest_auction?.type ? convertTypeAuctionToPersian(artwork?.latest_auction?.type) : ''}</span>}
                                    <div className="artwork-category pt-4">
                                        {artwork?.following?.follow?.is_active ? "عدم نشان کردن " : "نشان کردن"}
                                        <button onClick={() =>
                                            addBookmark(
                                                artwork?.following?.bookmark?.is_active ?
                                                    artwork?.following?.bookmark?.id :
                                                    artwork?.id, artwork?.following?.bookmark?.is_active)
                                        }
                                            className={"category-save artwork-bookmark " + (artwork?.following?.bookmark?.is_active ? "active" : "")} />

                                    </div>
                                </div>
                                <div className="detail-artwork">
                                    <div className="d-artwork-left">
                                        <p className="d-info artist">
                                            <h6 className="default">{artwork?.persian_artist_name}</h6>
                                        </p>
                                        <p className="d-info category">
                                            <h6 className="default">{artwork?.category ? artwork?.category[0]?.title : ''}</h6>
                                        </p>
                                        <p className="d-info gallery">
                                            <h6 className="default">{artwork?.auctions?.latest_auction?.house?.home_auction_name ? artwork?.auctions?.latest_auction?.house?.home_auction_name : '--'}</h6>
                                        </p>
                                    </div>
                                    <div className="d-artwork-right">
                                        <h5 className="default lot-num">{artwork?.id}</h5>
                                    </div>
                                </div>
                                {((artwork?.latest_auction?.type === 'ONLINE') || (artwork?.latest_auction?.type === 'PERIODIC')) ?
                                    <Bid artwork={artwork} /> : ''}
                                {((artwork?.latest_auction?.type === 'HIDDEN') || (artwork?.latest_auction?.type === 'SECOND_HIDDEN')) ?
                                    <Secret artwork={artwork} /> : ''}
                                <div className="detail-ah">
                                    <div className="ah-left">
                                        <div className="h-block-img">
                                            <img src={artwork?.house?.media?.exact_url} width="159" height="159" alt={artwork?.house?.media?.home_auction_name}
                                                className="img-fluid" />
                                        </div>
                                        <div className="detail-ahm">
                                            <h6 className="ah-link">
                                                <h3 className="default">{artwork?.latest_auction?.house?.home_auction_name ? artwork?.latest_auction?.house?.home_auction_name : ''}</h3>
                                            </h6>
                                            {/* <button type="button" className="btn-follow">دنبال کردن</button> */}
                                            <button
                                                onClick={() =>
                                                    Follow(
                                                        artwork?.following?.follow?.is_active ?
                                                        artwork?.following?.follow?.id :
                                                        artwork?.id, artwork?.following?.follow?.is_active)
                                                }
                                                type="button" className={" btn-follow " + (artwork?.following?.follow?.is_active ? "following" : "")}>
                                                {artwork?.following?.follow?.is_active ? "عدم دنبال کردن " : "دنبال کردن"}
                                            </button>
                                        </div>
                                    </div>

                                    <Rate value={rate?.user_rate} onChange={value => { updateRate(value) }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainInfoArtwork;
