import React from 'react'
import { Link } from 'react-router-dom';
import img9 from "../../images/img-9.jpg";
import TransferToPay from "./TransferToPay"

function CardItem(props) {
    return (
        <>
            <div className="col">
                <div className="col-flex">
                    <div className="artwork-img">
                        <img src={img9} width="317" height="280" alt="" className="img-fluid" />
                    </div>
                    <div className="artwork-info">
                        <div className="artwork-info-left col-md-6">
                            <div>
                                <span>{props.Span}</span>
                                <h5 className="default">{props.Head}</h5>
                            </div>
                            <p className="mrgt10">از<Link to="/">{props.Link}</Link></p>
                        </div>
                        <div className="artwork-info-right col-md-6">
                            <p className="d-block">پس از پرداخت
                                <Link to="/">{props.ArtworkLink} </Link>
                                جهت ارسال اثر با شما تماس خواهند گرفت..
                            </p>
                            <p className="showdate">تاریخ خرید:
                                <span>{props.ShowDate}</span>
                            </p>
                            <div className="d-flex justify-content-between flex-row align-items-baseline mrgt10">
                                <p className="">پیشنهاد شما:
                                    <span className="bid-style">{props.Price}
                                        <span className="price-unit">تومان</span>
                                    </span>
                                </p>
                                <TransferToPay />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardItem;