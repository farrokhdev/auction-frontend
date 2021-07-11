import React from 'react'
import img from '../../images/img-1.jpg';

function MainInfoArtwork({artwork}) {
return (
    <div className="row">


        <div className="col-lg-6">
            <div id="inner-artwork" className="carousel slide" data-bs-ride="carousel" data-bs-touch="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#inner-artwork" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1">
                        <img src={artwork?.media?.media_path} width="547" height="547" className="img-fluid d-xl-block" alt="..." />
                    </button>
                    {/* <button type="button" data-bs-target="#inner-artwork" data-bs-slide-to="1" aria-label="Slide 2">
                        <img src={img} width="547" height="547" className="d-xl-block img-fluid" alt="..." />
                    </button>
                    <button type="button" data-bs-target="#inner-artwork" data-bs-slide-to="2" aria-label="Slide 3">
                        <img src={img} width="547" height="547" className="d-xl-block img-fluid" alt="..." />
                    </button>
                    <button type="button" data-bs-target="#inner-artwork" data-bs-slide-to="3" aria-label="Slide 4">
                        <img src={img} width="547" height="547" className="d-xl-block img-fluid" alt="..." />
                    </button>
                    <button type="button" data-bs-target="#inner-artwork" data-bs-slide-to="4" aria-label="Slide 5">
                        <img src={img} width="547" height="547" className="d-xl-block img-fluid" alt="..." />
                    </button>
                    <button type="button" data-bs-target="#inner-artwork" data-bs-slide-to="5" aria-label="Slide 6">
                        <img src={img} width="547" height="547" className="d-xl-block img-fluid" alt="..." />
                    </button> */}
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={artwork?.media?.exact_url} width="547" height="547" className="d-block img-fluid" alt="..." />
                    </div>
                    <div className="carousel-item ">
                        <img src={artwork?.media?.exact_url} width="547" height="547" className="d-block img-fluid" alt="..." />
                    </div>
                    <div className="carousel-item ">
                        <img src={artwork?.media?.exact_url} width="547" height="547" className="d-block img-fluid" alt="..." />
                    </div>
                    <div className="carousel-item ">
                        <img src={img} width="547" height="547" className="d-block img-fluid" alt="..." />
                    </div>

                    <div className="carousel-item ">
                        <img src={artwork?.media?.exact_url} width="547" height="547" className="d-block img-fluid" alt="..." />
                    </div>
                    {/* <div className="carousel-item">
                        <img src={img} width="547" height="547" className="d-block img-fluid" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img} width="547" height="547" className="d-block img-fluid" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img} width="547" height="547" className="d-block img-fluid" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img} width="547" height="547" className="d-block img-fluid" alt="..." />
                    </div> */}
                </div>
            </div>
        </div>



        <div className="col-lg-6">
            <div className="detail-block">
                <div className="detail-block-header">
                    <a href="#" className="btn-lot prev"><span className="d-none d-md-block">لت قبلی</span></a>
                    <div className="search-input">
                        <input type="text" className="default-input" placeholder="شماره لت مورد نظر را وارد نمایید." />
                        <button type="button" className="btn-search"></button>
                    </div>
                    <a href="#" className="btn-lot next"><span className="d-none d-md-block">لت بعدی</span></a>
                </div>
                <div className="detail-block-body">
                    <div className="bg-shadow bl-shadow20">
                        <div className="detail-info">
                            <div className="detail-head">
                                <span className="category-icon live-icon"><span
                                        className="d-none d-md-inline-block">حراج</span> زنده</span>
                                <button type="button" className="btn-bookmark">نشان کردن</button>
                            </div>
                            <div className="detail-artwork">
                                <div className="d-artwork-left">
                                    <a href="#" className="d-info artist">
                                        {/* <h6 className="default">صادق ادهم</h6> */}
                                        <h6 className="default">{artwork?.persian_artist_name}</h6>
                                    </a>
                                    <a href="#" className="d-info category">
                                        {/* <h6 className="default">هنر مدرن و معاصر</h6> */}
                                        <h6 className="default">{artwork?.category[0]?.title}</h6>
                                    </a>
                                    <a href="#" className="d-info gallery">
                                        <h6 className="default">----</h6>
                                    </a>
                                </div>
                                <div className="d-artwork-right">
                                    <h5 className="default lot-num">1</h5>
                                </div>
                            </div>
                            <div className="detail-bid">
                                <div className="db-left">
                                    <span className="db-title">تخمین</span>
                                    <div className="price-block">
                                        <span className="price">----</span>
                                        <span className="unit"> تومان</span>
                                    </div>
                                </div>
                                <span className="seprator brdrbefor"></span>
                                <div className="db-right ">
                                    <span className="db-title bluecolor">قیمت فعلی</span>
                                    <div className="price-block bluecolor">
                                        <span className="price">----</span>
                                        <span className="unit"> تومان</span><span
                                            className="bids-num">(<span>--</span>پیشنهاد)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="detail-placebid general-bid">
                                <div className="general-bid-block">
                                    <div className="search-input">
                                        <input type="text" className="default-input"
                                            placeholder="حداکثر پیشنهاد خود را وارد نمایید." />
                                        <span className="unit">تومان</span>
                                    </div>
                                    <button type="button" className="btn-lightpink">ثبت</button>
                                </div>
                                <div className="general-bid-block">
                                    <div className="number-input">
                                        <button
                                            onclick="this.parentNode.querySelector('input[type=number]').stepDown()"></button>
                                        <input className="default-inputquantity" min="0" name="quantity" type="number"
                                            max="100" step="10" placeholder="انتخاب پیشنهاد" />
                                        <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                            className="plus"></button>
                                        <span className="unit">تومان</span>
                                    </div>
                                    <button type="button" className="btn-lightpink">ثبت پیشنهاد</button>
                                </div>

                            </div>
                            <div className="detail-ah">
                                <div className="ah-left">
                                    <div className="h-block-img">
                                        <img src={img} width="159" height="159" alt="گالری آرتیبیشن"
                                            className="img-fluid" />
                                    </div>
                                    <div className="detail-ahm">
                                        <a href="#" className="ah-link">
                                            <h3 className="default">گالری آرتیبیشن</h3>
                                        </a>
                                        <button type="button" className="btn-follow">دنبال کردن</button>
                                    </div>
                                </div>
                                <div className="ah-right">
                                    <ul className="star-rate">
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default MainInfoArtwork;