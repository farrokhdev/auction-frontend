import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGlobe, faMapMarker, faPhone } from "@fortawesome/free-solid-svg-icons";
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import '../../assets/style/leaflet.scss';

function SiderSectionSingleHouseAuctionPage(props) {


    const [HouseDetail, setHouseDetail] = useState([])
    const [zoom, setZoom] = useState(13);
    const [location, setLocation] = useState([]);

    const getHouseDetails = () => {
        axios.get(`${BASE_URL}/account/home-auction/${props.id}/`).then(res => {
            props.setHouseDetails(res.data.data.result)
            setHouseDetail(res.data.data.result);
            setLocation([res.data.data.result.home_auction_location.point.longitude, res.data.data.result.home_auction_location.point.latitude])
        }).catch(err => {
            console.error(err)
        })
    }

    useEffect(() => {

        getHouseDetails();
    }, [])

    const parseWebSite = (data, type) => {
        for (let i in data)
            if (data[i].type === type) {
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


    
    const Follow = (data, action) => {
        if (action) {
            axios.delete(`${BASE_URL}/following/${data}`)
                .then(resp => {
                    getHouseDetails()
                })
        } else {
            axios.post(`${BASE_URL}/following/`, {
                "content_type": "auction_house",
                "object_id": data,
                "activity_type": "follow"
            })
                .then(resp => {
                    if (resp.data.code === 201) {
                        getHouseDetails()
                    }

                })
                .catch(err => {
                    console.error(err);
                })
        }
    }


    return (
     
        <div className="col-lg-3">
        <div className="ah-block">
            <div className="ah-block-info logo">
                <div className="bg-shadow tl-shadow10">
                <img src={HouseDetail?.media?.[0].exact_url}  className="image-detail-house-auction" alt='' />
                </div>
            </div>
            <div className="ah-block-info ">
                <div className="ah-block-title">
                    <h5 className="default">{HouseDetail?.home_auction_name_en}</h5>
                    <button
                        onClick={() =>
                            Follow(
                                HouseDetail?.following?.follow?.is_active ?
                                    HouseDetail?.following?.follow?.id :
                                    HouseDetail?.id, HouseDetail?.following?.follow?.is_active)
                        }
                        type="button" className={" btn-follow " + (HouseDetail?.following?.follow?.is_active ? "following" : "")}>
                        {HouseDetail?.following?.follow?.is_active ? "Unfollow" : "follow"}
                    </button>
                </div>
                <div className="d-sm-flex d-lg-block justify-content-sm-between">
                <div className="">
                        <div className="d-flex mt-3">
                            <FontAwesomeIcon className="mx-2" icon={faGlobe} />
                            <a href={parseWebSite(HouseDetail?.info_link, 'website')} >{parseWebSite(HouseDetail?.info_link, 'website')}</a>
                        </div>

                        <div className="d-flex my-2">
                            <FontAwesomeIcon className="mx-2" icon={faEnvelope} />
                            <a href={`mailto: ${HouseDetail?.email}`}
                                className="all-info">{HouseDetail?.email}</a>
                        </div>

                        <div className="d-flex">
                            <FontAwesomeIcon className="mx-2" icon={faPhone} />
                            <p className="all-info" >{HouseDetail?.phone ? HouseDetail?.phone : HouseDetail?.mobile}</p>
                        </div>

                        <div className="d-flex">
                            <FontAwesomeIcon className="mx-2" icon={faMapMarker} />
                            <address className="">
                                {HouseDetail?.home_auction_location?.address_en}
                            </address>
                        </div>
                    </div>

                    <div className="info-location bg-shadow tl-shadow10">
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12951.668025778226!2d51.4458866!3d35.7528446!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x42e7c301666fc308!2sArtibition%20Art%20Gallery!5e0!3m2!1sen!2s!4v1619847195968!5m2!1sen!2s"
                                width="100%" height="165" style="border:0;" allowfullscreen=""
                                loading="lazy"></iframe> */}

                        <Map
                            center={location?.length > 0 ? location : ["35.790655", "51.420518"]}
                            zoom={zoom}
                            onzoomend={e => setZoom(e.target._zoom)}
                            style={{ width: "100%", height: "200px" }}
                        >
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker
                                position={location.length > 0 ? location : ["35.790655", "51.420518"]}
                            >
                                <Popup>house auction location</Popup>
                            </Marker>
                        </Map>

                    </div>
                </div>
                <ul className="social">

                    <li>
                        <a href={parseWebSite(HouseDetail?.info_link, 'facebook')} id="facebook" />
                    </li>
                    <li>
                        <a href={parseWebSite(HouseDetail?.info_link, 'instagram')} id="instagram" />
                    </li>
                    <li>
                        <a href={parseWebSite(HouseDetail?.info_link, 'telegram')} id="telegram" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default SiderSectionSingleHouseAuctionPage;
