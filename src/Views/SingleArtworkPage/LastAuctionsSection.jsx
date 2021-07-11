import React , {useState} from 'react';
import Slider from "react-slick";
import img from '../../images/img-1.jpg';
import bookmark_icon from '../../images/bookmark.svg';
import bookmark_active_icon from '../../images/bookmark-active.svg';
import CardArtwork from './CardArtwork';
import axios from 'axios';
import { BASE_URL } from '../../utils';

function LastAuctionsSection() {

    const [is_saved, setIs_saved] = useState(false)

    const handleToggleBookmark = () => {
        setIs_saved(!is_saved)
    }

    const settings = {
        // dots: false,
        // breakpoint: 1024,
        // infinite: false,
        // speed: 500,
        // slidesToShow: 4,
        // slidesToScroll: 4,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


return (
    <div className="row">
        <section className="Categorized-artworks related-artworks">
            <div className="container innercontainer">
                <div className="row">
                    <div className="col-md-3 col-sm-12">
                        <div className="main-title">
                            <h2 className="default titr">آخرین آثار حراج</h2>
                            <a href="#" className="btn-view">مشاهده همه</a>
                        </div>
                    </div>
                </div>
                <div className="owl-carousel" id="relatedArtworks">



                <Slider className="mt-5" {...settings}>
                            
                    <div className="px-3">
                        <CardArtwork  
                            price_base={100000000}
                            price_range={"500-700"}
                            house_auction= {"از ژورنال سقاخانه"}
                            artist={"سهراب سپهری"}
                            lot_num={1}
                        />
                    </div> 
                    <div className="px-3">
                        <CardArtwork  
                            price_base={100000000}
                            price_range={"500-700"}
                            house_auction= {"از ژورنال سقاخانه"}
                            artist={"سهراب سپهری"}
                            lot_num={1}
                        />
                    </div> 
                    <div className="px-3">
                        <CardArtwork  
                            price_base={100000000}
                            price_range={"500-700"}
                            house_auction= {"از ژورنال سقاخانه"}
                            artist={"سهراب سپهری"}
                            lot_num={1}
                        />
                    </div>
                    <div className="px-3">
                        <CardArtwork  
                            price_base={100000000}
                            price_range={"500-700"}
                            house_auction= {"از ژورنال سقاخانه"}
                            artist={"سهراب سپهری"}
                            lot_num={1}
                        />
                    </div> 
                    <div className="px-3">
                        <CardArtwork  
                            price_base={100000000}
                            price_range={"500-700"}
                            house_auction= {"از ژورنال سقاخانه"}
                            artist={"سهراب سپهری"}
                            lot_num={1}
                        />
                    </div> 
                    <div className="px-3">
                        <CardArtwork  
                            price_base={100000000}
                            price_range={"500-700"}
                            house_auction= {"از ژورنال سقاخانه"}
                            artist={"سهراب سپهری"}
                            lot_num={1}
                        />
                    </div>

                </Slider>




                    {/* <div className="artwork-block">
                        <div className="artwork-img">
                            <img src={img} width="317" height="280" alt="" className="img-fluid" />
                            <div className="artwork-category">
                                <span className="category-save artwork-bookmark"></span>
                            </div>
                        </div>
                        <div className="block-body">
                            <div className="ra-row">
                                <div className="ra-col">
                                    <h6 className="default gray50 ">سهراب سپهری</h6>
                                    <h4 className="default">از ژورنال سقاخانه</h4>
                                </div>
                                <div className="ra-col">
                                    <h5 className="default lot-num">1</h5>
                                </div>
                            </div>
                            <div className="detail-bid">
                                <div className="db-left">
                                    <span className="db-title">تخمین</span>
                                    <div className="price-block">
                                        <span className="price">500-700</span>
                                        <span className="unit"> تومان</span>
                                    </div>
                                </div>
                                <span className="seprator brdrbefor"></span>
                                <div className="db-right ">
                                    <span className="db-title">قیمت پایه</span>
                                    <div className="price-block">
                                        <span className="price">100,000,000</span>
                                        <span className="unit"> تومان</span>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="btn-lightpink">ثبت پیشنهاد</button>
                        </div>
                    </div>

                    <div className="artwork-block">
                        <div className="artwork-img">
                            <img src={img} width="998" height="880" alt="" className="img-fluid" />
                            <div className="artwork-category">
                                <span className="category-save artwork-bookmark"></span>
                            </div>
                        </div>
                        <div className="block-body">
                            <div className="ra-row">
                                <div className="ra-col">
                                    <h6 className="default gray50 ">سهراب سپهری</h6>
                                    <h4 className="default">از ژورنال سقاخانه</h4>
                                </div>
                                <div className="ra-col">
                                    <h5 className="default lot-num">2</h5>
                                </div>
                            </div>
                            <div className="detail-bid">
                                <div className="db-left">
                                    <span className="db-title">تخمین</span>
                                    <div className="price-block">
                                        <span className="price">500-700</span>
                                        <span className="unit"> تومان</span>
                                    </div>
                                </div>
                                <span className="seprator brdrbefor"></span>
                                <div className="db-right ">
                                    <span className="db-title bluecolor">قیمت فعلی</span>
                                    <div className="price-block bluecolor">
                                        <span className="price">2000</span>
                                        <span className="unit"> تومان</span><span
                                            className="bids-num">(<span>12</span>پیشنهاد)</span>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="btn-lightpink">ثبت پیشنهاد</button>
                        </div>
                    </div>

                    <div className="artwork-block">
                        <div className="artwork-img">
                            <img src={img} width="317" height="280" alt="" className="img-fluid" />
                            <div className="artwork-category">
                                <span className="category-save artwork-bookmark"></span>
                            </div>
                        </div>
                        <div className="block-body">
                            <div className="ra-row">
                                <div className="ra-col">
                                    <h6 className="default gray50 ">سهراب سپهری</h6>
                                    <h4 className="default">از ژورنال سقاخانه</h4>
                                </div>
                                <div className="ra-col">
                                    <h5 className="default lot-num">3</h5>
                                </div>
                            </div>
                            <div className="detail-bid">
                                <div className="db-left">
                                    <span className="db-title">تخمین</span>
                                    <div className="price-block">
                                        <span className="price">500-700</span>
                                        <span className="unit"> تومان</span>
                                    </div>
                                </div>
                                <span className="seprator brdrbefor"></span>
                                <div className="db-right ">
                                    <span className="db-title">قیمت پایه</span>
                                    <div className="price-block">
                                        <span className="price">100,000,000</span>
                                        <span className="unit"> تومان</span>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="btn-lightpink">ثبت پیشنهاد</button>
                        </div>
                    </div>

                    <div className="artwork-block">
                        <div className="artwork-img">
                            <img src={img} width="317" height="280" alt="" className="img-fluid" />
                            <div className="artwork-category">
                                <span className="category-save artwork-bookmark"></span>
                            </div>
                        </div>
                        <div className="block-body">
                            <div className="ra-row">
                                <div className="ra-col">
                                    <h6 className="default gray50 ">سهراب سپهری</h6>
                                    <h4 className="default">از ژورنال سقاخانه</h4>
                                </div>
                                <div className="ra-col">
                                    <h5 className="default lot-num">4</h5>
                                </div>
                            </div>
                            <div className="detail-bid">
                                <div className="db-left">
                                    <span className="db-title">تخمین</span>
                                    <div className="price-block">
                                        <span className="price">500-700</span>
                                        <span className="unit"> تومان</span>
                                    </div>
                                </div>
                                <span className="seprator brdrbefor"></span>
                                <div className="db-right ">
                                    <span className="db-title">قیمت پایه</span>
                                    <div className="price-block">
                                        <span className="price">100,000,000</span>
                                        <span className="unit"> تومان</span>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="btn-lightpink">ثبت پیشنهاد</button>
                        </div>
                    </div>

                    <div className="artwork-block">
                        <div className="artwork-img">
                            <img src={img} width="998" height="880" alt="" className="img-fluid" />
                            <div className="artwork-category">
                                <span className="category-save artwork-bookmark"></span>
                            </div>
                        </div>
                        <div className="block-body">
                            <div className="ra-row">
                                <div className="ra-col">
                                    <h6 className="default gray50 ">سهراب سپهری</h6>
                                    <h4 className="default">از ژورنال سقاخانه</h4>
                                </div>
                                <div className="ra-col">
                                    <h5 className="default lot-num">5</h5>
                                </div>
                            </div>
                            <div className="detail-bid">
                                <div className="db-left">
                                    <span className="db-title">تخمین</span>
                                    <div className="price-block">
                                        <span className="price">500-700</span>
                                        <span className="unit"> تومان</span>
                                    </div>
                                </div>
                                <span className="seprator brdrbefor"></span>
                                <div className="db-right ">
                                    <span className="db-title">قیمت پایه</span>
                                    <div className="price-block">
                                        <span className="price">100,000,000</span>
                                        <span className="unit"> تومان</span>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="btn-lightpink">ثبت پیشنهاد</button>
                        </div>
                    </div> */}


                </div>


            </div>
        </section>
    </div>
)
}

export default LastAuctionsSection;