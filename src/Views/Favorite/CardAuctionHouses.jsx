import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo1 from "../../images/logo-1.jpg";
import { faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

function CardAuctionHouses(props) {
    return (
        <>
            <div className="col">
                <div className="h-block">
                    <div className="row">
                        <div className="col-lg-4 col-3">
                            <div className="h-block-img">
                                <img src={logo1} width="159" height="159"
                                    alt="smart auction"
                                    className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-8 col-9">
                            <div className="h-block-header">
                                <div className="h-block-title">
                                    <h3 className="default">{props.TitleHeadeGallery}</h3>
                                    <h6 className="default">{props.TitleHeadeArt}</h6>
                                </div>
                                <button type="button" className="btn-follow following">دنبال کردن</button>
                            </div>
                            <div className="h-block-info">
                                <Link to="/" className=" all-info">
                                    <FontAwesomeIcon icon={faPhone} />
                                    {props.PhoneNumber}
                                </Link>
                                <address className="">
                                    <span className="province">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                                        تهران,
                                    </span>
                                    میدان هویزه، پلاک 130
                                </address>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CardAuctionHouses;