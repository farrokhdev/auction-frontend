import React from 'react';
import { Link } from 'react-router-dom';
import { AuctionStatusTextBtn, AuctionType } from "../../utils/convertTypeEnglish";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Timer from 'react-compound-timer';
import { DEFAULT_URL_IMAGE } from "../../utils/defaultImage";
import { convertTypeToEn } from "../../utils/convertTypeEnglish";

function CardAuction({item , timeExpire}) {
    return (
        <div className="row-blocks">
        <div className="row">
            <div className="col-md-4">
                <Link to={`/en/auctions/${item.id}`} className="bg-shadow tl-shadow10">
                    <img className="image-auction" src={item?.media?.exact_url}  alt="" />
                </Link>
            </div>
            <div className="col-md-8">
                <div className="block-head row">
                    <div className="col-xl-3 col-sm-4 col-3">
                        <span className="">{convertTypeToEn(item?.type)}</span>
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

                                            <span className="d-inline-block ">ساعت</span>
                                            <span className="d-inline-block"><Timer.Hours /> </span>
                                            <span className="d-inline-block">:</span>
                                            <span className="d-inline-block"><Timer.Minutes /></span>
                                            <span className="d-inline-block">:</span>
                                            <span className="d-inline-block "><Timer.Seconds /></span>

                                            <span className="d-inline-block mx-2">  و  </span>
                                            <span className="d-inline-block ">  روز  </span>
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


                    {item?.status !== "CLOSED" ? <Link to={`/en/auctions/${item?.id}`}>
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
    )
}

export default CardAuction
