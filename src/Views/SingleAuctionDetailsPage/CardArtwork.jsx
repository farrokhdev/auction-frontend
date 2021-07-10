import React , {useState} from 'react'
import img6 from '../../images/img-6.jpg';
import bookmark_icon from '../../images/bookmark.svg';
import bookmark_active_icon from '../../images/bookmark-active.svg';
import { faToggleOff } from '@fortawesome/free-solid-svg-icons';


function CardArtwork({price_range , price_base , artist , house_auction , lot_num}) {

    const [is_saved, setIs_saved] = useState(false)

    const handleToggleBookmark = () => {
        setIs_saved(!is_saved)
    }

    return (
        <div class="artwork-block">
            <div class="artwork-img">
                <img src={img6} style={{width : '317px' , height : '280px'}} alt="" class="img-fluid w-100" />
                <div class="artwork-category">
                    {/* <span class="category-save artwork-bookmark"></span> */}
                    {!is_saved ? 
                        <img 
                            onClick={handleToggleBookmark} 
                            style={{height :'20px' , width : '15px'}} 
                            className="icon-bookmark" 
                            src={bookmark_active_icon} 
                            lt="bookmark_icon" 
                        /> : 
                        <img 
                            onClick={handleToggleBookmark} 
                            style={{height :'20px' , width : '15px'}} 
                            className="" src={bookmark_icon} 
                            alt="bookmark_icon" 
                        />}
                </div>
            </div>
            <div class="block-body">
                <div class="ra-row">
                    <div class="ra-col">
                        <h6 class="default gray50 ">{artist}</h6>
                        <h4 class="default">{house_auction}</h4>
                    </div>
                    <div class="ra-col">
                        <h5 class="default lot-num">{lot_num}</h5>
                    </div>
                </div>
                <div class="detail-bid">
                    <div class="db-left">
                        <span class="db-title">تخمین</span>
                        <div class="price-block">
                            <span class="price">{price_range}</span>
                            <span class="unit"> تومان</span>
                        </div>
                    </div>
                    <span class="seprator brdrbefor"></span>
                    <div class="db-right ">
                        <span class="db-title">قیمت پایه</span>
                        <div class="price-block">
                            <span class="price">{price_base}</span>
                            <span class="unit"> تومان</span>
                            <span class="bids-num">
                                (<span>12</span>پیشنهاد)
                            </span>
                        </div>
                    </div>
                </div>
                <button type="button" class="btn-lightpink">ثبت پیشنهاد</button>
            </div>
        </div>
    )
}

export default CardArtwork;