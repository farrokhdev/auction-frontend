import React from 'react'
import axios from '../../utils/request';
import { BASE_URL } from '../../utils';
import { Link } from 'react-router-dom'

function HouseDetails({ HouseDetail, getAuction }) {

    // const parser = (data, type) => {
    //     for (let i in data)
    //         if (data[i].type === type) {
    //             return data[i].exact_url
    //         }
    // }

    const parseWebSite = (data, type) => {
        for (let i in data)
            if (data[i].type === type) {
                if (data[i].url.startsWith("http"))
                    return data[i].url
                else
                    return "http://" + data[i].url
            }
    }


    const Follow = (data, action) => {
        if (action) {
            axios.delete(`${BASE_URL}/following/${data}`)
                .then(resp => {
                    getAuction()
                })
        } else {
            axios.post(`${BASE_URL}/following/`, {
                "content_type": "auction_house",
                "object_id": data,
                "activity_type": "follow"
            })
                .then(resp => {
                    if (resp.data.code === 201) {
                        getAuction()
                    }

                })
                .catch(err => {
                    console.error(err);
                })

        }
    }

    return (
        <>
            <div className="auction-gallery-info">
                <div className="ah-left">
                    <div className="h-block-img">
                        {console.log("HouseDetail===>", HouseDetail)}
                        <img src={HouseDetail?.media?.[0].exact_url} width="159"
                            height="159"
                            alt={HouseDetail?.home_auction_name} />
                    </div>
                    <div className="detail-ahm">
                        <Link to={`/house-acutions/${HouseDetail?.id}`} className="ah-link"><h3
                            className="default">{HouseDetail?.home_auction_name}</h3></Link>
                        <button
                            onClick={() =>
                                Follow(
                                    HouseDetail?.following?.follow?.is_active ?
                                        HouseDetail?.following?.follow?.id :
                                        HouseDetail?.id, HouseDetail?.following?.follow?.is_active)
                            }
                            type="button" className={" btn-follow " + (HouseDetail?.following?.follow?.is_active ? "following" : "")}>
                            {HouseDetail?.following?.follow?.is_active ? "عدم دنبال کردن " : "دنبال کردن"}
                        </button>
                    </div>
                </div>
                <div className="ah-block-all-info">
                    <a href={parseWebSite(HouseDetail?.info_link, 'website')}
                        className="link-info all-info">{parseWebSite(HouseDetail?.info_link, 'website')}</a>
                    <a href={`mailto: ${HouseDetail?.email}`}
                        className="all-info mail-info">{HouseDetail.email}</a>
                    <a href={HouseDetail?.phone ? HouseDetail?.phone : HouseDetail?.mobile}
                        className="info-tel all-info">{HouseDetail?.phone ? HouseDetail?.phone : HouseDetail?.mobile}</a>
                    <address className="all-info">
                        {HouseDetail?.home_auction_location?.address}
                    </address>
                </div>
                <ul className="social">
                    <li>
                        <a href={parseWebSite(HouseDetail?.info_link, 'facebook')}
                            id="facebook" />
                    </li>
                    <li>
                        <a href={parseWebSite(HouseDetail?.info_link, 'instagram')}
                            id="instagram" />
                    </li>
                    <li>
                        <a href={parseWebSite(HouseDetail?.info_link, 'telegram')}
                            id="telegram" />
                    </li>
                </ul>
            </div>
        </>
    )
}

export default HouseDetails;