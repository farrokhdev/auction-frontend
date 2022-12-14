import React, { useEffect, useState } from 'react'
import { convertTypeAuctionToPersian, convertToEn } from '../../utils/converTypePersion';
import classnames from 'classnames';
import { useSelector } from "react-redux";
import Bid from "./bid";
import Secret from "./secret";
import { message, Rate } from 'antd';
import { DEFAULT_URL_IMAGE } from '../../utils/defaultImage';
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import { ONE_PRODUCT } from "../../utils/constant";
import { Link } from 'react-router-dom';

function MainInfoArtwork({ artwork, rate, updateRate, addBookmark, Follow ,setArtwork}) {

    const { is_logged_in } = useSelector((state) => state.authReducer)
    const [loading, setLoading] = useState(false)
    // const [productList, setProductList] = useState([])
    const [prev, setPrev] = useState(null)
    const [next, setNext] = useState(null)

    const getListProducts = () => {
        axios.get(`${BASE_URL}/sale/product/?auctions__id=${artwork?.latest_auction?.id}&ordering=product_auction__lot_num&page=1&page_size=10&search=`).then(res => {
            setLoading(false)
            // setProductList(res.data.data.result);
            res.data.data.result.map((t, i, array) => {
                if (t.id === artwork.id) {


                    if (array.length > 1) {
                        if (i === 0) {
                            setNext(state => array[i + 1])
                        } else if (i === array.length - 1) {
                            setPrev(state => array[i - 1])
                        } else {
                            setNext(state => array[i + 1])
                            setPrev(state => array[i - 1])
                        }
                    }

                }
            });

        }).catch(err => {
            console.log(err);
            setLoading(false)
        })
    }

    useEffect(() => {
        if (artwork?.latest_auction?.id) {
            getListProducts()
        }
    }, [artwork?.latest_auction?.id])
    const handleSearchArtworkByLat = (lot_num) => {

        setLoading(true)

        axios.get(`${BASE_URL}/sale/product/?auctions__id=${artwork?.latest_auction?.id}&product_auction__lot_num=${lot_num}`).then(res => {
            if (lot_num >= 0 && res.data.data.result.length) {
                window.location.href = `#/artworks/${res.data.data.result[0].id}`
            } else {
                message.error("???????????? ???? ?????? ???????????? ?????????? ????????")
            }
            // setLoading(false)
            // setArtwork(res.data.data.result)
        }).catch(err => {
            // setLoading(false)
            console.error(err)
        })
    }


    const handleShowImage = (item) => {
        return (
            (item?.media?.length && item?.media?.filter(item => item?.is_default === true)[0]?.exact_url) ?
                item?.media?.filter(item => item?.is_default === true)[0]?.exact_url :
                DEFAULT_URL_IMAGE
        )
    }


    return (
        <div className="row">
            <div className="col-lg-6">
                <div id="inner-artwork" className="carousel slide" data-bs-ride="carousel" data-bs-touch="false">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#inner-artwork" data-bs-slide-to="0" className="active"
                            aria-current="true" aria-label="Slide 1">
                            {/* <img src={ artwork?.media?.exact_url} width="547" height="547" className="img-fluid d-xl-block" alt="..." /> */}
                            <img src={artwork?.media && handleShowImage(artwork)} width="547" height="547" className="img-fluid d-xl-block" alt="..." />
                        </button>
                    </div>
                    <div className="carousel-inner">

                        {artwork?.media?.length ? artwork?.media?.map((item, key) => (
                            <React.Fragment key={key}>
                                <div className="carousel-item active">
                                    <img src={item?.exact_url} className="d-block img-fluid" alt="..." />
                                </div>
                            </React.Fragment>
                        )) : ''}


                        {/* <div className="carousel-item active">
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
                        </div> */}
                    </div>
                </div>
            </div>



            <div className="col-lg-6">
                <div className="detail-block">
                    <div class="detail-block-header">

                        <Link to={(prev?.id && prev?.id !== artwork?.id) ? `/artworks/${prev?.id}` : '#'} className="btn-lot prev" style={{ cursor: `${(prev?.id && prev?.id !== artwork?.id) ? "pointer" : "not-allowed"}` }}><span class="d-none d-md-block">???? ????????</span></Link>
                        
                        <div class="search-input my-3 w-50 mx-auto">
                            <input
                                id="product-searchh"
                                type="number"
                                className="default-input"
                                onChange={(e) => handleSearchArtworkByLat(e?.target?.value)}
                                placeholder="?????????? ???? ???????? ?????? ???? ???????? ????????????." />
                            <button type="button" class="btn-search"></button>
                        </div>
                        <Link to={(next?.id && next?.id !== artwork?.id) ? `/artworks/${next?.id}` : '#'} className="btn-lot next" style={{ cursor: `${(next?.id && next?.id !== artwork?.id) ? "pointer" : "not-allowed"}` }}><span class="d-none d-md-block">???? ????????</span></Link>
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
                                        className="d-none d-md-inline-block mx-1">????????</span>{artwork?.latest_auction?.type ? convertTypeAuctionToPersian(artwork?.latest_auction?.type) : ''}</span>}
                                    <div className="artwork-category pt-4">
                                        {artwork?.following?.follow?.is_active ? "?????? ???????? ???????? " : "???????? ????????"}
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
                                            <h6 className="default">{artwork?.auctions?.latest_auction?.house?.home_auction_name ? artwork?.auctions?.latest_auction?.house?.home_auction_name : ''}</h6>
                                        </p>
                                    </div>
                                    <div className="d-artwork-right">
                                        <h5 className="default lot-num">{artwork?.latest_auction?.lot_num}</h5>
                                    </div>
                                </div>


                                {((artwork?.latest_auction?.type === 'ONLINE') || (artwork?.latest_auction?.type === 'PERIODIC') || (artwork?.latest_auction?.type === 'LIVE')) ?
                                    <Bid artwork={artwork} setArtwork={setArtwork} /> : ''}
                                {((artwork?.latest_auction?.type === 'HIDDEN') || (artwork?.latest_auction?.type === 'SECOND_HIDDEN')) ?
                                    <Secret artwork={artwork} /> : ''}
                                <div className="detail-ah">
                                    <div className="ah-left">
                                        <div className="h-block-img">
                                            <img src={artwork?.latest_auction?.house?.media[0]?.exact_url} width="159" height="159" alt={artwork?.house?.media?.home_auction_name}
                                                className="img-fluid" />
                                        </div>
                                        <div className="detail-ahm">
                                            <h6 className="ah-link">
                                                <h3 className="default">{artwork?.latest_auction?.house?.home_auction_name ? artwork?.latest_auction?.house?.home_auction_name : ''}</h3>
                                            </h6>
                                            <button
                                                onClick={() =>
                                                    Follow(
                                                        artwork?.latest_auction?.house?.following?.follow?.is_active ?
                                                            artwork?.latest_auction?.house?.following?.follow?.id :
                                                            artwork?.latest_auction?.house?.id, artwork?.latest_auction?.house?.following?.follow?.is_active)
                                                }
                                                type="button" className={" btn-follow " + (artwork?.latest_auction?.house?.following?.follow?.is_active ? "following" : "")}>
                                                {artwork?.following?.follow?.is_active ? "?????? ?????????? ???????? " : "?????????? ????????"}
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
