import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import { message } from "antd";
import { DEFAULT_URL_IMAGE } from '../../utils/defaultImage';
import { convertToEnForEnglish } from '../../utils/converTypePersion';
import moment from "jalali-moment";



function LastProducts() {

    const [lastProducts, setLastProducts] = useState([])
    const [loading, setLoading] = useState(false)
    let numeral = require('numeral');

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

    function err_msg_resolver(res_body) {
        if (res_body.code == 201 || res_body.code == 200)
            return res_body.data.error_message
        else {
            return res_body.message
        }
    }

    const getLastProducts = () => {
        setLoading(true)
        axios.get(`${BASE_URL}/sale/product/?page_size=8&joined_auction=true`)
            .then(resp => {
                if (resp.data.code === 200) {
                    setLastProducts(resp.data.data.result)
                }
            })
            .catch(err => {
                console.error(err);
                setLoading(false)
                message.error({
                    content: err_msg_resolver(err.response.data),
                    className: 'text-danger',
                    style: {
                        marginTop: '10vh',
                    },
                })
            })
    }

    const addBookmark = (data, action) => {
        if (action) {
            axios.delete(`${BASE_URL}/following/${data}`)
                .then(resp => {
                    getLastProducts()
                })
        } else {
            axios.post(`${BASE_URL}/following/`, {
                "content_type": "product",
                "object_id": data,
                "activity_type": "mark"
            })
                .then(resp => {
                    if (resp.data.code === 201) {
                        getLastProducts()
                    }

                })
                .catch(err => {
                    console.error(err);
                })

        }
    }

    useEffect(() => {
        getLastProducts()
    }, [])


    const handleShowImage = (item) => {
        return (
            (item?.media?.length && item?.media?.filter(item => item?.is_default === true)[0]?.exact_url) ?  
            item?.media?.filter(item => item?.is_default === true)[0]?.exact_url : 
            DEFAULT_URL_IMAGE
        )
    }


    return (
        <React.Fragment>
            <Slider className="mt-5" {...settings}>
                {lastProducts ? lastProducts.map((item, key) => {
                    return (
                        <div className=" w-75" key={key}>
                            <div className="artwork-img">
                                <Link to={`/en/artworks/${item?.id}`} className="artwork-block ">
                                    <img style={{ backgroundImage: `url(${item && handleShowImage(item)})`, height: "250px" ,backgroundRepeat : "round" }} width="998" height="880" alt="" className="img-fluid" />

                                </Link>
                                <div className="artwork-category">
                                    <span
                                        className={"category-save artwork-bookmark " + (true ? "active" : "")}
                                    className={"category-save artwork-bookmark " + (item?.following?.bookmark?.is_active ? "active" : "")}
                                    onClick={() =>
                                        addBookmark(
                                            item?.following?.bookmark?.is_active ?
                                                item?.following?.bookmark?.id :
                                                item?.id, item?.following?.bookmark?.is_active)
                                    }
                                    ></span>
                                    <span className="">{item?.latest_auction?.type ? convertToEnForEnglish(item?.latest_auction?.type) : <span className="category-icon text-secondary">Without auction</span>}</span>
                                </div>

                            </div>
                            <div className="block-body text-center">
                                <h6 className="default gray50 ">{item.artwork_title_en}</h6>
                                <h4 className="default">{item.latest_auction.title_en}</h4>
                                <div className="auction-calender">
                                    <div className="auction-date">
                                        <span className="start-date"> {item?.latest_auction?.start_time ? moment(item?.latest_auction?.start_time, 'YYYY/MM/DD').locale('en').format('DD MMMM') : ""}</span>
                                        <span className="end-date">{item?.latest_auction?.end_time ? moment(item?.latest_auction?.end_time, 'YYYY/MM/DD').locale('en').format('DD MMMM') : ""}</span>
                                    </div>
                                    <div className="auction-time">
                                        <span className="start-time">{item?.latest_auction?.start_time ? moment(item?.latest_auction?.start_time, 'YYYY/MM/DD HH:mm').locale('en').format('HH:mm') : ""}</span>
                                    </div>
                                </div>
                                <div className="price-block">
                                    <span>Start bid:</span>
                                    <span className="price"> {numeral(item.price).format('0,0')} <span className="price-unit"> {item?.latest_auction?.currency} </span></span>
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