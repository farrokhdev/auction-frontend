import React from 'react';
import Timer from "react-compound-timer";
import { Link } from 'react-router-dom';
import { AuctionStatusTextBtn, AuctionType, convertTypeToEn } from '../../utils/convertTypeEnglish';
import { DEFAULT_URL_IMAGE } from '../../utils/defaultImage';
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";


function AuctionsTab({items , search}) {


    function timeExpire(time) {
        let expire = new Date(time)
        let now = new Date()
        if (expire > now) {
            return expire - now
        } else {
            return 0
    
        }
    }
    
    
    
    const Follow = (data, action) => {
        if (action) {
            axios.delete(`${BASE_URL}/following/${data}`)
                .then(resp => {
                    search()
                })
        } else {
            axios.post(`${BASE_URL}/following/`, {
                "content_type": "auction",
                "object_id": data,
                "activity_type": "follow"
            })
                .then(resp => {
                    if (resp.data.code === 201) {
                        search()
                    }
    
                })
                .catch(err => {
                    console.error(err);
                })
    
        }
    }
    
    return (
        <div className="tab-content main-tab-content " id="cat-serach-content">
      <div
        className="tab-pane fade show active"
        id="catsearch2"
        role="tabpane2"
        aria-labelledby="home-tab"
      >
        <div className="owl-carousel">


            {items?.auctions?.length ? items?.auctions?.map((item , key) => (
                <React.Fragment>

                    <div className="row-blocks">
                        <div className="row">
                            <div className="col">
                                <Link to={`/en/auctions/${item.id}`} className="bg-shadow tl-shadow10">
                                    <img className="image-auction" src={item?.media?.exact_url ? item?.media?.exact_url : DEFAULT_URL_IMAGE}  alt="" />
                                </Link>
                            </div>
                            <div className="col-md-8">
                                <div className="block-head row">
                                    <div className="col-xl-3 col-sm-4 col-3">
                                        <span className="">{convertTypeToEn(item?.type)}</span>
                                    </div>
                                    <div className="col-xl-9 col-sm-8 col-9 textalign-right">
                                            {/* <button
                                                onClick={() =>
                                                    Follow(
                                                        item?.following?.follow?.is_active ?
                                                            item?.following?.follow?.id :
                                                            item?.id, item?.following?.follow?.is_active)
                                                }
                                                type="button" className={" reminder-icon " + (item?.following?.follow?.is_active ? "active" : "")}>
                                                Reminde me
                                            </button> */}

                                        <button type="button" className="link-source">
                                            { !!item?.products_count ?
                                                <span>
                                                    <span className="d-none d-sm-inline-block">View </span>artworks (<span>{item?.products_count}</span>)
                                                </span>
                                            : null }
                                        </button>
                                    </div>
                                </div>
                                <div className="block-main">
                                    <Link to="/">
                                        <h5 className="default">{item?.title_en}</h5>
                                    </Link>
                                    <div className="block-detail">
                                        <h6 className="default">{item?.house_type}</h6>
                                        <Link to="/" className="default">
                                            <h6 className="default gray50">{item?.house_en}</h6>
                                        </Link>
                                    </div>
                                </div>
                                <div className="block-footer row">
                                    <div className="col-sm-5">


                                    {item?.status === "CLOSED" ?

                                        <div className="ended">
                                            <div className="text">Offer is ended</div>
                                        </div>
                                        : <div>
                                            {item?.status === "ACTIVE" &&
                                                <Timer
                                                    initialTime={timeExpire(item?.end_time)}
                                                    direction="backward"
                                                >
                                                    {({ start, resume, pause, stop, reset, timerState }) => (
                                                        <div style={{
                                                            direction: 'ltr',
                                                            textAlign: "right"
                                                        }}>

                                                            {/* <span className="d-inline-block ">ساعت</span> */}
                                                            <span className="d-inline-block"><Timer.Hours /> </span>
                                                            <span className="d-inline-block">:</span>
                                                            <span className="d-inline-block"><Timer.Minutes /></span>
                                                            <span className="d-inline-block">:</span>
                                                            <span className="d-inline-block "><Timer.Seconds /></span>

                                                            <span className="d-inline-block mx-2">  And </span>
                                                            <span className="d-inline-block ">  Day  </span>
                                                            <span className="d-inline-block "><Timer.Days /></span>
                                                        </div>
                                                    )}
                                                </Timer>
                                            }
                                            {
                                                item?.status === "PREPARING" && <span>Offer in preparation</span>
                                            }

                                        </div>
                                        }
                                    </div>
                                    <div className="col-sm-7 textalign-right">


                                    {item?.status !== "CLOSED" ? <Link to={`/one-auction/${item?.id}`}>
                                                <button type="button" className="btn btn-gray mx-2">
                                                    <FontAwesomeIcon className="mx-1" icon={faEye} />
                                                    {AuctionType(item?.type)}
                                                </button>
                                    </Link> : null}

                                            {AuctionStatusTextBtn(item?.status, item?.user_is_enrolled, item.id)}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                

                </React.Fragment>
            )) : ''}

            </div>

        </div>
      </div>


    )
}

export default AuctionsTab;



