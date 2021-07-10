import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe , faPhone , faEnvelope , faMapMarker} from "@fortawesome/free-solid-svg-icons";
import img from '../../images/img-1.jpg';

function SiderSectionSingleHouseAuction() {
    return (
        <div className="ah-block">
                        <div className="ah-block-info logo">
                            <div className="bg-shadow tr-shadow10">
                                {/* <img src="img/logo-3.png" width="159" height="159" alt="گالری آرتیبیشن" /> */}
                                <img src={img} width="159" height="159" alt="گالری آرتیبیشن" />
                            </div>
                        </div>
                        <div className="ah-block-info ">
                            <div className="ah-block-title">
                                <h5 className="default">هنرهای تجسمی</h5>
                                <button type="button" className="btn-follow">دنبال کردن</button>
                            </div>


                            <div className="d-sm-flex d-lg-block justify-content-sm-between">
                                <div className="">

                                    <div className="d-flex mt-3">
                                        <FontAwesomeIcon className="mx-2" icon={faGlobe}/>
                                        <a href="#" >www.sarebangallery.com</a>
                                    </div>

                                    <div className="d-flex my-2">
                                        <FontAwesomeIcon className="mx-2" icon={faEnvelope}/>
                                        <a href="mailto: Info@sarebangallery.com"
                                            className="all-info">Info@sarebangallery.com</a>
                                    </div>

                                    <div className="d-flex">
                                        <FontAwesomeIcon className="mx-2" icon={faPhone}/>
                                        {/* <a href="+982144258856" className="info-tel all-info">+98 21 4425 8856</a> */}
                                        <p className="all-info" >+98 21 4425 8856</p>
                                    </div>

                                    <div className="d-flex">
                                        <FontAwesomeIcon className="mx-2" icon={faMapMarker}/>
                                        <address className="">
                                            <span className="province">تهران، </span>میدان هویزه،
                                            پلاک 103
                                        </address>
                                    </div>
                                </div>
                                <div className="info-location">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12951.668025778226!2d51.4458866!3d35.7528446!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x42e7c301666fc308!2sArtibition%20Art%20Gallery!5e0!3m2!1sen!2s!4v1619847195968!5m2!1sen!2s"
                                        width="100%" 
                                        height="165" 
                                        style={{border : '0'}}
                                        allowfullscreen=""
                                        loading="lazy">
                                    </iframe>
                                </div>
                            </div>

                            
                            <ul className="social">
                                <li><a href="#" id="facebook"></a></li>
                                <li><a href="#" id="instagram"></a></li>
                                <li><a href="#" id="telegram"></a></li>
                            </ul>
                        </div>
                    </div>
    )
}

export default SiderSectionSingleHouseAuction
