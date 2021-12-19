import React from 'react';
import classnames from 'classnames';
import moment from 'jalali-moment';
import { Link } from 'react-router-dom';
import { convertMouthToPersian, AuctionStatusTextBtn, AuctionType, convertStatusShowAuctionPersian, convertTypeAuctionToPersian } from '../../utils/converTypePersion';
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CardAucitonInfo({ auction , Follow}) {

    return (
        <div className="row-blocks">
            <div className="row">
                <div className="col-md-4">
                    <div className="bg-shadow tr-shadow10">
                        <Link to={`/one-auction/${auction?.id}`}>
                            <img src={auction.media.exact_url} width="500" height="500" alt="" />
                        </Link>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="block-head row">
                        <div className="col-xl-3 col-sm-4 col-3">
                            <span
                                className={classnames("category-icon", {
                                    "live-icon": auction?.type === 'LIVE',
                                    "online-icon": auction?.type === 'ONLINE',
                                    "timed-icon": auction?.type === 'PERIODIC',
                                    "firstoffer-icon": auction?.type === 'HIDDEN',
                                    "secondoffer-icon": auction?.type === 'SECOND_HIDDEN',

                                })} >
                                <span className="d-none d-md-inline-block mx-1"> حراج </span>
                                {auction?.type ? convertTypeAuctionToPersian(auction?.type) : ''}
                            </span>
                        </div>
                        <div className="col-xl-9 col-sm-8 col-9 textalign-left">
                            <button
                                onClick={() =>
                                    Follow(
                                        auction?.following?.follow?.is_active ?
                                        auction?.following?.follow?.id :
                                        auction?.id, auction?.following?.follow?.is_active)
                                }
                                type="button" className={" reminder-icon " + (auction?.following?.follow?.is_active ? "active" : "")}>
                                یادآوری
                            </button>
                            <button type="button" className="link-source">
                                <Link to={`/one-auction/${auction?.id}`}>
                                    <span className="d-none d-sm-inline-block">مشاهده</span>
                                    آثار
                                    (<span>{auction?.products_count ? auction.products_count : 0}</span>)
                                </Link>
                            </button>
                        </div>
                    </div>

                    <div className="block-main">
                        <h5 className="default">{auction.title}</h5>

                        <div className="block-detail">

                            <h6 className="default">{auction.house_type}</h6>

                            <h6 className="default gray50">{auction.house}</h6>

                        </div>
                    </div>
                    <div className="block-footer row">

                        <div className="col-sm-5">
                            <div className="auction-calender date-show">

                                <div className={classnames("auction-date", {
                                    "d-none": auction?.status === 'CLOSED',
                                })} >
                                    <span className="start-date">{auction?.start_time ? convertMouthToPersian(moment(auction?.start_time).format('MM')) : ''}</span>
                                    <span className="end-date">{auction?.end_time ? convertMouthToPersian(moment(auction?.end_time).format('MM')) : ''}</span>
                                </div>


                                <div className={classnames("auction-time", {
                                    "d-none": auction?.status === 'CLOSED',
                                })} >
                                    <span className="start-time">{auction?.start_time ? moment(auction?.start_time).format('DD') : ''}</span>
                                    <span className="end-time">{auction?.end_time ? moment(auction?.end_time).format('DD') : ''}</span>
                                </div>


                                {auction?.status === "CLOSED" ?

                                    <div className="ended">
                                        <div className="text">حراج به پایان رسید</div>
                                    </div>

                                    : ''}

                            </div>
                        </div>

                        <div className="col-sm-7 textalign-left">
                            {auction?.type === "LIVE" ?
                                <Link to={`/live-auction/${auction?.id}`} >
                                    <button type="button" className="btn btn-gray ms-2">
                                        <FontAwesomeIcon className="mx-1" icon={faEye} />
                                        {AuctionType(auction.type)}
                                    </button>
                                </Link>
                                :
                                auction?.status !== "CLOSED" ?
                                    <Link to={`/one-auction/${auction.id}`}>
                                        <button type="button" className="btn btn-gray ms-2">
                                            <FontAwesomeIcon className="mx-1" icon={faEye} />
                                            {AuctionType(auction.type)}
                                        </button>
                                    </Link> : null


                            }
                            {AuctionStatusTextBtn(auction?.status, auction?.user_is_enrolled, auction.id)}

                            {/* <button className={classnames("btn btn-gray  mx-2", {
                                "d-none": auction?.status === 'CLOSED',
                            })} type="button"  >
                                {auction?.type ? convertStatusShowAuctionPersian(auction?.type) : null}
                            </button> */}
                            {/* <button className={classnames("btn", "btn-main", "join", {
                                "d-none": auction?.status === 'ACTIVE',
                                "d-none": auction?.status === 'CLOSED',
                            })} type="button" >عضویت در حراج</button> */}

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardAucitonInfo
