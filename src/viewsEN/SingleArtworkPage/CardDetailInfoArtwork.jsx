import React from 'react';
import { convertTypeToEn } from '../../utils/convertTypeEnglish';
import Bid from './Bid';
import Secret from './Secret';
import axios from '../../utils/request';
import { BASE_URL } from '../../utils';
import { Rate } from 'antd';

function CardDetailInfoArtwork({artwork , addBookmark , getProduct , rate , updateRate}) {


    const handleSearchArtworkByLat = (value) => {
        if (value > 0) {
            window.location.href = `#/artworks/${value}`
        } else {
            return null
        }
    }

    const Follow = (data, action) => {
        if (action) {
            axios.delete(`${BASE_URL}/following/${data}`)
                .then(resp => {
                    getProduct()
                })
        } else {
            axios.post(`${BASE_URL}/following/`, {
                "content_type": "auction_house",
                "object_id": data,
                "activity_type": "follow"
            })
                .then(resp => {
                    if (resp.data.code === 201) {
                        getProduct()
                    }

                })
                .catch(err => {
                    console.error(err);
                })

        }
    }


    return (
        <div className="col-lg-6 ">
        <div className="detail-block">
            <div className="detail-block-header">
                {/* <a href="#" className="btn-lot prev"><span className="d-none d-md-block">Prev Lot</span></a> */}
                <div className="search-input">
                    <input 
                        onChange={(e)=>handleSearchArtworkByLat(e.target.value)}
                        type="number" 
                        className="default-input" 
                        placeholder="Enter Lot number..."/>
                    <button type="button" className="btn-search"></button>
                </div>
                {/* <a href="#" className="btn-lot next"><span className="d-none d-md-block">Next Lot</span></a> */}
            </div>
            <div className="detail-block-body">
                <div className="bg-shadow br-shadow20">
                    <div className="detail-info">

                    <div className="detail-head">
                        <span>{artwork?.latest_auction?.type ? convertTypeToEn(artwork?.latest_auction?.type) : ''}</span>
                        <div className="artwork-category  pt-4">
                            {!!artwork?.following?.bookmark?.is_active ?  "Bookmarked" : "Bookmark"}
                            <button onClick={() =>
                                addBookmark(
                                    artwork?.following?.bookmark?.is_active ?
                                        artwork?.following?.bookmark?.id :
                                        artwork?.id, artwork?.following?.bookmark?.is_active)
                            }
                                className={"category-save artwork-bookmark " + (artwork?.following?.bookmark?.is_active ? "active" : "")} />

                        </div>
                    </div>
                        <div className="detail-artwork">
                            <div className="d-artwork-left">
                                <a href="#" className="d-info artist"><h6 className="default">{artwork?.persian_artist_name_en}</h6></a>
                                <a href="#" className="d-info category"><h6 className="default">{artwork?.category ? artwork?.category[0]?.title_en : ''}</h6></a>
                                <a href="#" className="d-info gallery"><h6 className="default">{artwork?.auctions?.latest_auction?.house?.home_auction_name_en ? artwork?.auctions?.latest_auction?.house?.home_auction_name_en : ''}</h6>
                                </a>
                            </div>
                            <div className="d-artwork-right">
                                <h5 className="default lot-num">{artwork?.id}</h5>
                            </div>
                        </div>


                        {((artwork?.latest_auction?.type === 'ONLINE') || (artwork?.latest_auction?.type === 'PERIODIC')) ?
                                    <Bid artwork={artwork} /> : ''}
                                {((artwork?.latest_auction?.type === 'HIDDEN') || (artwork?.latest_auction?.type === 'SECOND_HIDDEN')) ?
                                    <Secret artwork={artwork} /> : ''}
                                <div className="detail-ah">
                                    <div className="ah-left">
                                        <div className="h-block-img">
                                            <img src={artwork?.house?.media?.exact_url} width="159" height="159" alt={artwork?.house?.media?.home_auction_name}
                                                className="img-fluid" />
                                        </div>
                                        <div className="detail-ahm">
                                            <h6 className="ah-link">
                                                <h3 className="default">{artwork?.latest_auction?.house?.home_auction_name_en ? artwork?.latest_auction?.house?.home_auction_name_en : ''}</h3>
                                            </h6>
                                            <button
                                                onClick={() =>
                                                    Follow(
                                                        artwork?.latest_auction?.house?.following?.follow?.is_active ?
                                                        artwork?.latest_auction?.house?.following?.follow?.id :
                                                        artwork?.latest_auction?.house?.id, artwork?.latest_auction?.house?.following?.follow?.is_active)
                                                }
                                                type="button" className={" btn-follow " + (artwork?.latest_auction?.house?.following?.follow?.is_active ? "following" : "")}>
                                                {artwork?.following?.follow?.is_active ? "Unfollow" : "Follow"}
                                            </button>
                                        </div>
                                    </div>

                                    <Rate value={rate?.user_rate} onChange={value => { updateRate(value) }} />
                                </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CardDetailInfoArtwork;
