import React, { useEffect, useState, useRef } from 'react'
import { Carousel } from "antd";
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import { Link } from 'react-router-dom';
import moment from "jalali-moment";
import { AuctionStatusTextEN, AuctionTypeEN } from '../../utils/converTypePersion';
import { DEFAULT_URL_IMAGE } from '../../utils/defaultImage';


function LastProductsAuctionSlider({ setLoading }) {
    const sliderRef = useRef()
    const [curentIndex, setcurentIndex] = useState(1)

    const [LastAuctionOnStandBy, setLastAuctionOnStandBy] = useState([])
    const [auctionProduct, setAuctionProduct] = useState([])

    const getLastAuctionOnStandBy = () => {
        setLoading(true)
        axios.get(`${BASE_URL}/sale/auctions/on_standby/`)
            .then(resp => {
                setLastAuctionOnStandBy(resp.data.data.result)
                setAuctionProduct(resp.data.data.result.auction_product)
                setLoading(false)
            })
            .catch(err => {
                console.error(err);
                setLoading(false)
            })
    }

    useEffect(() => {
        getLastAuctionOnStandBy()

    }, [])

    const handleShowImage = (item) => {
        return (
            (item?.media?.length && item?.media?.filter(item => item?.is_default === true)[0]?.exact_url) ?
                item?.media?.filter(item => item?.is_default === true)[0]?.exact_url :
                DEFAULT_URL_IMAGE
        )
    }




    return (
        <>
            <section className="slider">
                <div className="container innercontainer top130 position-relative">
                    <div className="row">
                        <div className="col-sm-6 col-lg-5 order-sm-2">
                            <div id="main-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel"
                                data-bs-interval="0">
                                <div className="carousel-inner">
                                    <Carousel autoplay arrows
                                        afterChange={(e) => setcurentIndex(e + 1)}
                                        ref={sliderRef}
                                    >
                                        {auctionProduct?.length ? auctionProduct?.map((item, index) => {
                                            return (
                                                <div className="carousel-item active ">
                                                    <div className="bg-shadow tr-shadow20 max-width-500">
                                                        <Link to={`/en/artworks/${item?.product?.id}`} >
                                                            <img src={item?.product?.media[0]?.exact_url}
                                                                onClick={() => setcurentIndex(index)}
                                                                width="500" height="500" className="img-fluid" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            )
                                        }) : ""}
                                    </Carousel>
                                </div>
                                <div className="carousel-controls">
                                    <button className="carousel-control-prev" type="button"
                                        data-bs-target="#main-carousel" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true" onClick={() => sliderRef.current.prev()}></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <div className="carousel-number-indicator">
                                        <span className="now-slide">{curentIndex}</span>
                                        <span className="all-slide">{auctionProduct?.length}</span>
                                    </div>
                                    <button className="carousel-control-next" type="button"
                                        data-bs-target="#main-carousel" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"
                                            onClick={() => sliderRef.current.next()}
                                        ></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>

                            </div>

                        </div>
                        <div className="col-sm-6 col-lg-7 leftslider order-sm-1">
                            <h1 className="default">{LastAuctionOnStandBy?.title_en}</h1>
                            <p className="font15">
                                {LastAuctionOnStandBy?.description_en}
                            </p>
                            {AuctionStatusTextEN(LastAuctionOnStandBy?.status, LastAuctionOnStandBy?.user_is_enrolled, LastAuctionOnStandBy.id)}

                            {/* <button type="button" className="btn btn-basic">Join this auction</button> */}
                        </div>
                        <div className="col-sm-12 col-lg-7 mrgtop150slider order-sm-3">
                            <div className="row">
                                <div className="col-sm-3 ">
                                    <h6 className="slider-title">Presentor:</h6>
                                    <span>{LastAuctionOnStandBy?.house?.home_auction_name_en}</span>
                                </div>
                                <div className="col-sm-3">
                                    <h6 className="slider-title">Type:</h6>
                                    <span>{AuctionTypeEN(LastAuctionOnStandBy.type)}</span>
                                </div>
                                <div className="col-sm-6">
                                    <h6 className="slider-title">Date:</h6>
                                    <div className="auction-calender">
                                        <div className="auction-date">
                                            <span className="start-date">
                                                {LastAuctionOnStandBy?.start_time ?
                                                    moment(LastAuctionOnStandBy?.start_time, 'YYYY/MM/DD').locale('en').format('DD MMMM')
                                                    : ""}</span>
                                            <span className="end-date">
                                                {LastAuctionOnStandBy?.end_time ?
                                                    moment(LastAuctionOnStandBy?.end_time, 'YYYY/MM/DD').locale('en').format('DD MMMM')
                                                    : ""}</span>
                                        </div>
                                        <div className="auction-time">
                                            <span className="start-time">
                                                {LastAuctionOnStandBy?.start_time ?
                                                    moment(LastAuctionOnStandBy?.start_time, 'YYYY/MM/DD HH:mm ').locale('en').format(' HH:mm ')
                                                    : ""} </span>
                                            <span className="end-time">{LastAuctionOnStandBy?.end_time ?
                                                moment(LastAuctionOnStandBy?.end_time, 'YYYY/MM/DD HH:mm ').locale('en').format(' HH:mm ')
                                                : ""}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LastProductsAuctionSlider;