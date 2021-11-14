import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import pic3 from "../../imgEN/pic3.jpg"

function LastProducts() {

    const [lastProducts, setLastProducts] = useState([1, 2, 3, 4, 5])

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <React.Fragment>
            <Slider className="mt-5" {...settings}>
                {lastProducts ? lastProducts.map((item, key) => {
                    return (
                        <div className=" w-75" key={key}>
                            <div className="artwork-img">
                                <Link to={`/artworks/${item.id}`} className="artwork-block ">
                                    <img src={pic3} width="998" height="880" alt="" className="img-fluid" />

                                </Link>
                                <div className="artwork-category">
                                    <span
                                        className={"category-save artwork-bookmark " + (true ? "active" : "")}
                                    // className={"category-save artwork-bookmark " + (item?.following?.bookmark?.is_active ? "active" : "")}
                                    // onClick={() =>
                                    //     addBookmark(
                                    //         item?.following?.bookmark?.is_active ?
                                    //             item?.following?.bookmark?.id :
                                    //             item?.id, item?.following?.bookmark?.is_active)
                                    // }
                                    ></span>
                                    <span className="category-icon online-icon">Online</span>
                                    {/* <span className="">{item?.latest_auction?.type ? convertToEn(item?.latest_auction?.type) : <span className="category-icon text-secondary">بدون حراجی</span>}</span> */}
                                </div>

                            </div>
                            <div className="block-body text-center">
                                <h6 className="default gray50 ">Hosein Kazemi</h6>
                                <h4 className="default">The Sheet of Water</h4>
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
                                    <span className="price">300<span className="price-unit">$</span></span>
                                </div>
                            </div>
                        </div>
                    )
                }) : ""}
            </Slider>
        </React.Fragment>
    )
}

export default LastProducts;