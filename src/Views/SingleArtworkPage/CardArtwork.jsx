import React , {useState} from 'react'
import bookmark_icon from '../../images/bookmark.svg';
import bookmark_active_icon from '../../images/bookmark-active.svg';
import {Link} from 'react-router-dom'
import {useSelector} from "react-redux";


function CardArtwork({price_base , price_range , house_auction , title , lot_num , url }) {
    // const {is_logged_in} = useSelector((state) => state.authReducer)
    const [is_saved, setIs_saved] = useState(false)

    const handleToggleBookmark = () => {
        setIs_saved(!is_saved)
    }

return (

    <div dir='rtl' className="artwork-block">
        
            <div className="artwork-img">
                <img src={url}  alt="image-artwork" className="img-fluid image-artwork" />
                <div class="artwork-category">
                    {!is_saved ?
                    <img onClick={handleToggleBookmark} style={{height :'20px' , width : '15px'}} className="icon-bookmark"
                        src={bookmark_active_icon} lt="bookmark_icon" /> :
                    <img onClick={handleToggleBookmark} style={{height :'20px' , width : '15px'}} className=""
                        src={bookmark_icon} alt="bookmark_icon" />}
                </div>
            </div>
        
        <div className="block-body">
            <div className="ra-row">
                <div className="ra-col">
                    <h6 className="default gray50 ">{title}</h6>
                    <h4 className="default">{house_auction}</h4>
                </div>
                <div className="ra-col">
                    <h5 className="default lot-num">{lot_num}</h5>
                </div>
            </div>
            <div className="detail-bid">
                <div className="db-left">
                    <span className="db-title">تخمین</span>
                    <div className="price-block">
                        <span className="price">{price_range}</span>
                        <span className="unit"> تومان</span>
                    </div>
                </div>
                <span className="seprator brdrbefor"></span>
                <div className="db-right ">
                    <span className="db-title">قیمت پایه</span>
                    <div className="price-block">
                        {/* <span className="price">100,000,000</span> */}
                        <span className="price">{price_base}</span>
                        <span className="unit"> تومان</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

)
}

export default CardArtwork;
