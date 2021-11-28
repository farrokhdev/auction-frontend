import React from 'react'
import moment from 'jalali-moment';
import numberWithCommas from '../../components/threeNumber';
import Timer from "react-compound-timer";
import {Link} from 'react-router-dom';
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import { convertTypeToEn } from '../../utils/convertTypeEnglish';
import { handleShowImage } from '../../utils/showImageProduct';

function CardArtworkLatestSection({item , getOtherProducts}) {

    function timeExpire(time) {
        let expire = new Date(time)
        let now = new Date()
        if (expire > now) {
            return expire - now
        } else {
            return 0

        }
    }

    const addBookmark = (data, action) => {
        if (action) {
            axios.delete(`${BASE_URL}/following/${data}`)
                .then(resp => {
                    getOtherProducts()
                })
        } else {
            axios.post(`${BASE_URL}/following/`, {
                "content_type": "product",
                "object_id": data,
                "activity_type": "mark"
            })
                .then(resp => {
                    if (resp.data.code === 201) {
                        getOtherProducts()
                    }

                })
                .catch(err => {
                    console.error(err);
                })

        }
    }

    return (
        <div className="col">
        <div className="artwork-img">
            <Link to={`/en/artworks/${item?.id}`} className="artwork-block">
                <img src={item && handleShowImage(item)} width="998" height="880" alt="" className="img-fluid" />
            </Link>
            <div className="artwork-category">

                <span onClick={() =>
                    addBookmark(
                        item?.following?.bookmark?.is_active ?
                            item?.following?.bookmark?.id :
                            item?.id, item?.following?.bookmark?.is_active)
                }
                    className={"category-save artwork-bookmark ms-2 " + (item?.following?.bookmark?.is_active ? "active" : "")} />
                <span className="">{item?.latest_auction?.type ? convertTypeToEn(item?.latest_auction?.type) : 
                <span className="category-icon text-secondary"> <span className="mx-2">Without auction</span></span>}</span>


                {/* <span className="category-save artwork-bookmark"></span>
                <span className="category-icon live-icon">Live</span> */}
            </div>
        </div>
        <div className="block-body text-center">
            <h6 className="default gray50 ">{item?.english_artist_name}</h6>
            <h4 className="default">{item?.artwork_title_en}</h4>


            {/* <div className="auction-calender">
                <div className="auction-date">
                    <span className="start-date">19 June</span>
                    <span className="end-date">22 June</span>
                </div>
                <div className="auction-time">
                    <span className="start-time">10 AM</span>
                </div>
            </div> */}

            {item?.latest_auction?.status === "CLOSED" ?
                <div className="auction-calender">
                    Order ended
                </div>
                :
                <div>
                    {
                        item?.latest_auction?.status === "ACTIVE" ?
                            <div className="auction-calender">
                                <Timer
                                    initialTime={timeExpire(item?.latest_auction.end_time)}
                                    direction="backward"
                                >
                                    {({
                                        start,
                                        resume,
                                        pause,
                                        stop,
                                        reset,
                                        timerState
                                    }) => (
                                        <div style={{
                                            direction: 'ltr',
                                            textAlign: "center",
                                        }}>

                                            <span className="d-inline-block">
                                                <span
                                                    className="d-inline-block text-danger"></span>
                                                <span
                                                    className="d-inline-block text-danger"><Timer.Hours /> </span>
                                                <span
                                                    className="d-inline-block text-danger"> : </span>
                                                <span
                                                    className="d-inline-block text-danger"><Timer.Minutes /></span>
                                                <span
                                                    className="d-inline-block text-danger"> : </span>
                                                <span
                                                    className="d-inline-block text-danger"><Timer.Seconds /></span>

                                                <span
                                                    className="d-inline-block text-danger mx-2">  and  </span>
                                                <span
                                                    className="d-inline-block text-danger">  Day  </span>
                                                <span
                                                    className="d-inline-block text-danger"><Timer.Days /></span>
                                            </span>
                                            <span className="d-inline-block text-secondary mx-2">/</span>
                                            <span className="d-inline-block text-secondary">to finish</span>     


                                        </div>

                                    )}
                                </Timer></div>
                            : <div>{
                                item?.latest_auction?.status ?
                                    <div className="auction-calender">
                                        <div className="auction-date">
                                            <span className="start-date">
                                                {item?.latest_auction?.start_time ? moment(item?.latest_auction?.start_time, 'YYYY-MM-DD').locale('en').format('DD MMMM') : ""}
                                            </span>
                                            <span
                                                className="end-date">{item?.latest_auction?.end_time ? moment(item?.latest_auction?.end_time, 'YYYY-MM-DD').locale('en').format('DD MMMM') : ""}</span>
                                        </div>
                                        <div className="auction-time">
                                            <span
                                                className="start-time">{item?.latest_auction?.start_time ? moment(item?.latest_auction?.start_time, 'YYYY-MM-DD HH').locale('en').format('HH') : ""}</span>
                                        </div>
                                    </div> :
                                    ""
                            }</div>
                    }
                </div>

            }

            {item?.latest_auction?.status === "CLOSED" ? <div>
                {
                    item?.sale_status ?
                        <div className="price-block">
                            <span>Sold price :</span>
                            <span className="price mx-2">{numberWithCommas(item?.price)}<span
                                className="price-unit mx-2">{item?.latest_auction?.currency !== "dollar" ? item?.latest_auction?.currency : '$'}</span></span>
                        </div>
                        :
                        <div className="price-block">
                            <span> Not sold</span>
                        </div>
                }
            </div>
                : <div>
                    {item?.latest_auction?.status === "ACTIVE" ?
                        <div>
                            <div className="price-block">
                                <span>Base price :</span>
                                <span className="price mx-2">{numberWithCommas(item?.price)}<span
                                    className="price-unit mx-2">{item?.latest_auction?.currency !== "dollar" ? item?.latest_auction?.currency : '$'}</span></span>
                            </div>

                        </div> :
                        item?.latest_auction?.type ? <div className="price-block">
                            <span>Current bid :</span>
                                <span className="price mx-2">
                                    { numberWithCommas(item?.bidding_details?.max_bid)}
                                <span
                                    className="price-unit mx-2">{item?.latest_auction?.currency !== "dollar" ? item?.latest_auction?.currency : '$'}
                                </span>
                            </span>
                        </div> : ''
                    }
                </div>
            }
                {/* <span>Start bid:</span>
                <span className="price">{numberWithCommas(item?.bidding_details?.max_bid)}<span className="price-unit">$</span></span> */}
            </div>
        </div>

    )
}

export default CardArtworkLatestSection;
