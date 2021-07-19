import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe , faPhone , faEnvelope , faMapMarker} from "@fortawesome/free-solid-svg-icons";
import img from '../../images/img-1.jpg';
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import GoogleMapReact from 'google-map-react';

function SiderSectionSingleHouseAuction(props) {

    const [HouseDetail, setHouseDetail] = useState([])

    const getHouseDetails = () => {
        axios.get(`${BASE_URL}/account/home-auction/${props.id}`).then(res => {
            props.setHouseDetails(res.data.data.result)
            setHouseDetail(res.data.data.result);
        }).catch(err => {
            console.error(err)
        })
    }

    useEffect(() => {
        getHouseDetails();
    }, [])

    const parseWebSite = (data , type) => {
        for(let i in data)
            if (data[i].type === type){
                if (data[i].url.startsWith("http"))
                    return data[i].url
                else
                    return "http://" + data[i].url
            }
    }

    const parser = (data, type) => {
        for (let i in data)
            if (data[i].type === type) {
                return data[i].exact_url
            }
    }

    return (
        <div className="ah-block">
                        <div className="ah-block-info logo">
                            <div className="bg-shadow tr-shadow10">
                                <img src={parser(HouseDetail.media, 'profile')} width="159" height="159" alt={HouseDetail.home_auction_name} />
                            </div>
                        </div>
                        <div className="ah-block-info ">
                            <div className="ah-block-title">
                                <h5 className="default">{HouseDetail.home_auction_name}</h5>
                                <button type="button" className="btn-follow">دنبال کردن</button>
                            </div>


                            <div className="d-sm-flex d-lg-block justify-content-sm-between">
                                <div className="">
                                    <div className="d-flex mt-3">
                                        <FontAwesomeIcon className="mx-2" icon={faGlobe}/>
                                        <a href={parseWebSite(HouseDetail.info_link, 'website')} >{parseWebSite(HouseDetail.info_link, 'website')}</a>
                                    </div>

                                    <div className="d-flex my-2">
                                        <FontAwesomeIcon className="mx-2" icon={faEnvelope}/>
                                        <a href={`mailto: ${HouseDetail.email}`}
                                            className="all-info">{HouseDetail.email}</a>
                                    </div>

                                    <div className="d-flex">
                                        <FontAwesomeIcon className="mx-2" icon={faPhone}/>
                                        <p className="all-info" >{HouseDetail.phone ? HouseDetail.phone : HouseDetail.mobile}</p>
                                    </div>

                                    <div className="d-flex">
                                        <FontAwesomeIcon className="mx-2" icon={faMapMarker}/>
                                        <address className="">
                                            {HouseDetail?.home_auction_location?.address}
                                        </address>
                                    </div>
                                </div>
                                <div className="info-location">
                                    <GoogleMapReact
                                        bootstrapURLKeys={{ key: "" }}
                                        defaultCenter={{
                                            lat: HouseDetail?.home_auction_location?.point?.lat,
                                            lng: HouseDetail?.home_auction_location?.point?.lng,
                                            latLng: ""
                                        }}
                                        defaultZoom={11}
                                    >
                                    </GoogleMapReact>

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
                                <li>
                                    <a href={parseWebSite(HouseDetail.info_link, 'facebook')} id="facebook"/>
                                </li>
                                <li>
                                    <a href={parseWebSite(HouseDetail.info_link, 'instagram')} id="instagram"/>
                                </li>
                                <li>
                                    <a href={parseWebSite(HouseDetail.info_link, 'telegram')} id="telegram"/>
                                </li>
                            </ul>
                        </div>
                    </div>
    )
}

export default SiderSectionSingleHouseAuction
