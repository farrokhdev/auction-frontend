import React from 'react'
import { Link } from 'react-router-dom';
import { convertCurrencyType } from '../../utils/converTypePersion';
import TransferToPay from "./TransferToPay"

function CardItem(props) {

    return (
        <>
            <div className="col">
                <div className="col-flex">
                    <div className="artwork-img">
                        {/* <img src={props?.exactUrl} width="317" height="280" alt="auction_img" className="img-fluid" /> */}

                        <div className="image-custom-back" style={{
                            backgroundImage: `url(${props?.exactUrl})`,
                            height: "8rem"
                        }}>
                        </div>
                    </div>
                    <div className="artwork-info">
                        <div className="artwork-info-left col-md-6">
                            <div>
                                <span>{props.artist}</span>
                                <h5 className="default">{props.artworkTitle}</h5>
                            </div>
                            <p className="mrgt10">از<Link to="/">{props.Link}</Link></p>
                        </div>
                        <div className="artwork-info-right col-md-6">
                            <p className={props.paymentMethod === "OFFLINE" && "d-none"} >پس از پرداخت
                                <Link to="/">{props.Link} </Link>
                                جهت ارسال اثر با شما تماس خواهند گرفت..
                            </p>

                            <p className={props.paymentMethod === "ONLINE" && "d-none"}>
                                <Link to="/">{props.listWonPurchasse?.latest_auction?.house?.home_auction_name} </Link>
                                جهت ارسال و نحوه پرداخت با شما تماس خواهد گرفت.
                            </p>

                            <p className="showdate mr-2">
                                <span className="ml-2">تاریخ خرید :</span>
                                <span className="mx-2">{props.date}</span>
                            </p>
                            <div className="d-block d-xl-flex justify-content-between flex-row align-items-baseline mrgt10">
                                <p className="">
                                    <span className="mx-2">پیشنهاد شما :</span>
                                    <span className="bid-style ">{props.price}
                                        <span className="price-unit mx-2">{props.price ? convertCurrencyType(props.currency) : ''}</span>
                                    </span>
                                </p>
                                <TransferToPay
                                    paymentMethod={props.paymentMethod}
                                    price={props.price}
                                    currency={props.currency}
                                    artist={props.artist}
                                    artworkTitle={props.artworkTitle}
                                    homAuction={props.Link}
                                    url={props?.exactUrl}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardItem;