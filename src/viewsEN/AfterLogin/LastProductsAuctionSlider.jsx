import React, { useEffect, useState, useRef } from 'react'
import { Carousel } from "antd";
import slider1 from "../../imgEN/slider1.jpg"

function LastProductsAuctionSlider() {
    const sliderRef = useRef()
    const [curentIndex, setcurentIndex] = useState(1)

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
                                        {[1, 2, 3].map((item, index) => {
                                            return (
                                                <div className="carousel-item active ">
                                                    <div className="bg-shadow tr-shadow20 max-width-500">
                                                        <img src={slider1} width="500" height="500" className="img-fluid" />
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </Carousel>
                                </div>
                                <div className="carousel-controls">
                                    <button className="carousel-control-prev" type="button"
                                        data-bs-target="#main-carousel" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"  onClick={() => sliderRef.current.prev()}></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <div className="carousel-number-indicator">
                                        <span className="now-slide">{curentIndex}</span>
                                        <span className="all-slide">03</span>
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
                            <h1 className="default">Contemporary Iranian Art Jan 2020</h1>
                            <p className="font15">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                tincidunt ut laoreet dolore magna aliquam erat volutpat
                            </p>
                            <button type="button" className="btn btn-basic">Join this auction</button>
                        </div>
                        <div className="col-sm-12 col-lg-7 mrgtop150slider order-sm-3">
                            <div className="row">
                                <div className="col-sm-3 ">
                                    <h6 className="slider-title">Presentor:</h6>
                                    <span>Tehran auction</span>
                                </div>
                                <div className="col-sm-3">
                                    <h6 className="slider-title">Type:</h6>
                                    <span>Online auction</span>
                                </div>
                                <div className="col-sm-6">
                                    <h6 className="slider-title">Date:</h6>
                                    <div className="auction-calender">
                                        <div className="auction-date">
                                            <span className="start-date">19 JAN</span>
                                            <span className="end-date">22 JAN</span>
                                        </div>
                                        <div className="auction-time">
                                            <span className="start-time">10 AM</span>
                                            <span className="end-time">10 PM</span>
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