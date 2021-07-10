import React from "react";
import { Link } from "react-router-dom";
import pic2 from "../../images/pic2.jpg";
import {faBookmark} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function CardArtwork(props) {
    return (
        <>
                 <div className="col">
                            <Link to="/" className="artwork-block">
                                <div className="artwork-img">
                                    <img src={pic2} width="998" height="880" alt="" className="img-fluid" />
                                    <div className="artwork-category">
                                        <FontAwesomeIcon icon={faBookmark}/>
                                        {/* <span className="category-save artwork-bookmark active"></span> */}
                                        <span className="category-icon live-icon">زنده</span>
                                    </div>
                                </div>
                                <div className="block-body text-center">
                                    <h6 className="default gray50 ">{props.Artworks}</h6>
                                    <h4 className="default">{props.Journal}</h4>
                                    <div className="auction-calender">
                                        <div className="auction-date">
                                            <span className="start-date">{props.StartDate}</span>
                                            <span className="end-date">{props.EndDate}</span>
                                        </div>
                                        <div className="auction-time">
                                            <span className="start-time">10</span>
                                        </div>
                                    </div>
                                    <div className="price-block">
                                        <span>قیمت پایه:</span>
                                        <span className="price">{props.Price}<span
                                            className="price-unit">تومان</span></span>
                                    </div>
                                </div>
                            </Link>
                        </div>   
        </>
    )
}

export default CardArtwork; 