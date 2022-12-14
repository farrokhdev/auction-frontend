import React, { useState } from 'react'
import bookmark_icon from '../../images/bookmark.svg';
import bookmark_active_icon from '../../images/bookmark-active.svg';
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";

function CardArtwork({ price_base, price_range, house_auction, title, lot_num, url, getOtherProducts, product }) {
    // const {is_logged_in} = useSelector((state) => state.authReducer)
    let numeral = require('numeral');
    const [is_saved, setIs_saved] = useState(false)
    const [bookmark, setBookmark] = useState(false)

    // const handleToggleBookmark = () => {
    //     setIs_saved(!is_saved)
    // }


    const addBookmark = (data, action) => {
        if (action) {
            axios.delete(`${BASE_URL}/following/${data}`)
                .then(resp => {
                    getOtherProducts()
                })
        } else {
            axios.post(`${BASE_URL}/following/`, {
                "content_type": "product",
                "object_id": data,
                "activity_type": "mark"
            })
                .then(resp => {
                    if (resp.data.code === 201) {
                        getOtherProducts()
                    }

                })
                .catch(err => {
                    console.error(err);
                })

        }
    }


    return (

        <div dir='rtl' className="artwork-block">

            <div className="artwork-img">
                <Link to={`/artworks/${product?.id}`}>
                    {/* <img src={url} width="998" height="880" alt="" class="img-fluid" /> */}
                    <img src={url} alt="image-artwork" className="img-fluid image-artwork" />
                </Link>
                {/* <div class="artwork-category">
                    {!is_saved ?
                        <img onClick={handleToggleBookmark} style={{ height: '20px', width: '15px' }} className="icon-bookmark"
                            src={bookmark_active_icon} lt="bookmark_icon" /> :
                        <img onClick={handleToggleBookmark} style={{ height: '20px', width: '15px' }} className=""
                            src={bookmark_icon} alt="bookmark_icon" />}
                </div> */}
                <div className="artwork-category"
                    onClick={() => setBookmark(!bookmark)}>
                    <span onClick={() =>
                        addBookmark(
                            product?.following?.bookmark?.is_active ?
                                product?.following?.bookmark?.id :
                                product?.id, product?.following?.bookmark?.is_active)
                    }
                        className={"category-save artwork-bookmark " + (product?.following?.bookmark?.is_active ? "active" : "")} />
                </div>
            </div>


            <div className="block-body">
                <div className="ra-row">
                    <div className="ra-col">
                        {title?.length > 35 ?
                            <h6 className="default gray50 ">{title.slice(0, 35)}...</h6>

                            : <h6 className="default gray50 ">{title}</h6>
                        }
                        {house_auction?.length > 35 ?
                            <h4 className="default">???? {house_auction.slice(0, 35)}...</h4>

                            : <h4 className="default">???? {house_auction}</h4>
                        }
                    </div>
                    <div className="ra-col">
                        <h5 className="default lot-num">{lot_num}</h5>
                    </div>
                </div>
                <div className="detail-bid">
                    <div className="db-left">
                        <span className="db-title">??????????</span>
                        <div className="price-block">
                            <span className="price">{numeral(price_range).format('0,0')}</span>
                            <span className="unit"> ??????????</span>
                        </div>
                    </div>
                    <span className="seprator brdrbefor"></span>
                    <div className="db-right ">
                        <span className="db-title">???????? ????????</span>
                        <div className="price-block">
                            <span className="price">{numeral(price_base).format('0,0')}</span>
                            <span className="unit"> ??????????</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CardArtwork;
