import React from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";
import slider1 from '../../images/slider1.jpg';
import slider2 from '../../images/slider2.jpg';
import slider3 from '../../images/slider3.jpg';
import pic1 from '../../images/pic1.jpg';
import pic2 from '../../images/pic2.jpg';
import pic3 from '../../images/pic3.jpg';
import pic4 from '../../images/pic4.jpg';
import pic5 from '../../images/pic5.jpg';
import Slider from "react-slick";
function AfterLoginPage() {


    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
      };


return (
<React.Fragment>
    <Header />
    <main>
        <div className="container containercs ">
        <section className="slider">
                <div className="container innercontainer top130 position-relative">
                    <div className="row">
                        <div className="col-sm-6 col-lg-5 order-sm-2">
                            <div id="main-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel"
                                data-bs-interval="0">
                                <div className="carousel-inner">
                                    <div className="carousel-item active ">
                                        <div className="bg-shadow tr-shadow20 max-width-500">
                                            <img src={slider1} width="500" height="500" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="bg-shadow tr-shadow20 max-width-500">
                                            <img src={slider2} width="500" height="500" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="carousel-item ">
                                        <div className="bg-shadow tr-shadow20 max-width-500">
                                            <img src={slider3} width="470" height="587" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-controls">
                                    <button className="carousel-control-prev" type="button"
                                        data-bs-target="#main-carousel" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">قبلی</span>
                                    </button>
                                    <div className="carousel-number-indicator">
                                        <span className="now-slide">00</span>
                                        <span className="all-slide">05</span>
                                    </div>
                                    <button className="carousel-control-next" type="button"
                                        data-bs-target="#main-carousel" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">بعدی</span>
                                    </button>
                                </div>

                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-7 leftslider order-sm-1">
                            <h1 className="default">Contemporary Iranian Art Jan 2020</h1>
                            <p className="font15">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                                است nonummy nibh euismod
                                tincidunt ut laoreet dolore magna aliquam erat volutpat
                            </p>
                            <button type="button" className="btn btn-basic">عضویت در حراج</button>
                        </div>
                        <div className="col-sm-12 col-lg-7 mrgtop150slider order-sm-3">
                            <div className="row">
                                <div className="col-sm-3 ">
                                    <h6 className="slider-title">برگزار کننده:</h6>
                                    <span>حراج تهران</span>
                                </div>
                                <div className="col-sm-3">
                                    <h6 className="slider-title">نوع:</h6>
                                    <span>Online auction</span>
                                </div>
                                <div className="col-sm-6">
                                    <h6 className="slider-title">تاریخ برگزاری:</h6>
                                    <div className="auction-calender">
                                        <div className="auction-date">
                                            <span className="start-date">19 آبان</span>
                                            <span className="end-date">22 آبان</span>
                                        </div>
                                        <div className="auction-time">
                                            <span className="start-time">10</span>
                                            <span className="end-time">22</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            <div  style={{overflow : 'auto'}} className="row">
                 <h2> Multiple items </h2>
                        <div className="col-md-3 col-sm-12">
                            <div className="main-title">
                                <h2 className="default titr">آخرین آثار حراج</h2>
                                 <a href="#" className="btn-view">مشاهده همه</a>
                            </div>
                        </div>
                        <Slider className="mt-5" {...settings}>
                            <div >
                                        <a href="#" className="artwork-block ">
                                             <div className="artwork-img">
                                                 <img src={pic1} width="998" height="880" alt=""
                                                     className="img-fluid" />
                                                 <div className="artwork-category">
                                                     <span className="category-save artwork-bookmark"></span>
                                                     <span className="category-icon live-icon">زنده</span>
                                                 </div>
                                             </div>
                                             <div className="block-body text-center">
                                                 <h6 className="default gray50 ">سهراب سپهری</h6>
                                                 <h4 className="default">از ژورنال سقاخانه</h4>
                                                 <div className="auction-calender">
                                                     <div className="auction-date">
                                                         <span className="start-date">7 خرداد</span>
                                                         <span className="end-date">9 خرداد</span>
                                                     </div>
                                                     <div className="auction-time">
                                                         <span className="start-time">10</span>
                                                    </div>
                                                 </div>
                                                 <div className="price-block">
                                                     <span>قیمت پایه:</span>
                                                     <span className="price">100,000,000<span
                                                             className="price-unit">تومان</span></span>
                                                 </div>
                                             </div>
                                         </a>
                            </div>
                            <div >
                                        <a href="#" className="artwork-block ">
                                             <div className="artwork-img">
                                                 <img src={pic1} width="998" height="880" alt=""
                                                     className="img-fluid" />
                                                 <div className="artwork-category">
                                                     <span className="category-save artwork-bookmark"></span>
                                                     <span className="category-icon live-icon">زنده</span>
                                                 </div>
                                             </div>
                                             <div className="block-body text-center">
                                                 <h6 className="default gray50 ">سهراب سپهری</h6>
                                                 <h4 className="default">از ژورنال سقاخانه</h4>
                                                 <div className="auction-calender">
                                                     <div className="auction-date">
                                                         <span className="start-date">7 خرداد</span>
                                                         <span className="end-date">9 خرداد</span>
                                                     </div>
                                                     <div className="auction-time">
                                                         <span className="start-time">10</span>
                                                    </div>
                                                 </div>
                                                 <div className="price-block">
                                                     <span>قیمت پایه:</span>
                                                     <span className="price">100,000,000<span
                                                             className="price-unit">تومان</span></span>
                                                 </div>
                                             </div>
                                         </a>
                            </div>
                            <div className="mx-3">
                                        <a href="#" className="artwork-block ">
                                             <div className="artwork-img">
                                                 <img src={pic1} width="998" height="880" alt=""
                                                     className="img-fluid" />
                                                 <div className="artwork-category">
                                                     <span className="category-save artwork-bookmark"></span>
                                                     <span className="category-icon live-icon">زنده</span>
                                                 </div>
                                             </div>
                                             <div className="block-body text-center">
                                                 <h6 className="default gray50 ">سهراب سپهری</h6>
                                                 <h4 className="default">از ژورنال سقاخانه</h4>
                                                 <div className="auction-calender">
                                                     <div className="auction-date">
                                                         <span className="start-date">7 خرداد</span>
                                                         <span className="end-date">9 خرداد</span>
                                                     </div>
                                                     <div className="auction-time">
                                                         <span className="start-time">10</span>
                                                    </div>
                                                 </div>
                                                 <div className="price-block">
                                                     <span>قیمت پایه:</span>
                                                     <span className="price">100,000,000<span
                                                             className="price-unit">تومان</span></span>
                                                 </div>
                                             </div>
                                         </a>
                            </div>
                            <div className="mx-3">
                            <a href="#" className="artwork-block ">
                                             <div className="artwork-img">
                                                 <img src={pic2} width="998" height="880" alt=""
                                                     className="img-fluid" />
                                                 <div className="artwork-category">
                                                     <span className="category-save artwork-bookmark"></span>
                                                     <span className="category-icon live-icon">زنده</span>
                                                 </div>
                                             </div>
                                             <div className="block-body text-center">
                                                 <h6 className="default gray50 ">سهراب سپهری</h6>
                                                 <h4 className="default">از ژورنال سقاخانه</h4>
                                                 <div className="auction-calender">
                                                     <div className="auction-date">
                                                         <span className="start-date">7 خرداد</span>
                                                         <span className="end-date">9 خرداد</span>
                                                     </div>
                                                     <div className="auction-time">
                                                         <span className="start-time">10</span>
                                                    </div>
                                                 </div>
                                                 <div className="price-block">
                                                     <span>قیمت پایه:</span>
                                                     <span className="price">100,000,000<span
                                                             className="price-unit">تومان</span></span>
                                                 </div>
                                             </div>
                                         </a>
                            </div>
                            <div className="mx-3">
                            <a href="#" className="artwork-block ">
                                             <div className="artwork-img">
                                                 <img src={pic3} width="998" height="880" alt=""
                                                     className="img-fluid" />
                                                 <div className="artwork-category">
                                                     <span className="category-save artwork-bookmark"></span>
                                                     <span className="category-icon live-icon">زنده</span>
                                                 </div>
                                             </div>
                                             <div className="block-body text-center">
                                                 <h6 className="default gray50 ">سهراب سپهری</h6>
                                                 <h4 className="default">از ژورنال سقاخانه</h4>
                                                 <div className="auction-calender">
                                                     <div className="auction-date">
                                                         <span className="start-date">7 خرداد</span>
                                                         <span className="end-date">9 خرداد</span>
                                                     </div>
                                                     <div className="auction-time">
                                                         <span className="start-time">10</span>
                                                    </div>
                                                 </div>
                                                 <div className="price-block">
                                                     <span>قیمت پایه:</span>
                                                     <span className="price">100,000,000<span
                                                             className="price-unit">تومان</span></span>
                                                 </div>
                                             </div>
                                         </a>
                            </div>
                            <div>
                            <a href="#" className="artwork-block ">
                                             <div className="artwork-img">
                                                 <img src={pic4} width="998" height="880" alt=""
                                                     className="img-fluid" />
                                                 <div className="artwork-category">
                                                     <span className="category-save artwork-bookmark"></span>
                                                     <span className="category-icon live-icon">زنده</span>
                                                 </div>
                                             </div>
                                             <div className="block-body text-center">
                                                 <h6 className="default gray50 ">سهراب سپهری</h6>
                                                 <h4 className="default">از ژورنال سقاخانه</h4>
                                                 <div className="auction-calender">
                                                     <div className="auction-date">
                                                         <span className="start-date">7 خرداد</span>
                                                         <span className="end-date">9 خرداد</span>
                                                     </div>
                                                     <div className="auction-time">
                                                         <span className="start-time">10</span>
                                                    </div>
                                                 </div>
                                                 <div className="price-block">
                                                     <span>قیمت پایه:</span>
                                                     <span className="price">100,000,000<span
                                                             className="price-unit">تومان</span></span>
                                                 </div>
                                             </div>
                                         </a>
                            </div>

                        </Slider>
            </div>
        </div>
        <div className="container-fluid">
             <section className="latest-auction">
                 <div className="row">
                     <div className="col">
                         <div className="main-title">
                             <h2 className="default titr">آخرین حراج‌ها</h2>
                             <a href="#" className="btn-view">مشاهده همه</a>
                         </div>
                     </div>
                 </div>
                 <div className="container innercontainer">
                     <div className="row">
                         <div className="col-xl-4 col-lg-4 col-sm-5">
                             <div className="bg-shadow tl-shadow20">
                                 <div className="artwork-img">
                                     <img src={pic4} width="570" height="470" alt="" className="img-fluid" />
                                     <div className="auction-category">
                                         <span className="category-save auction-reminder"></span>
                                         <span className="category-icon live-icon">زنده</span>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div className="col-xl-4 col-lg-6 col-sm-7">
                             <div className="auction-info">
                                 <h6 className="auctioninfo location">تهران</h6>
                                 <div className="auction-calender auctioninfo">
                                     <div className="auction-date">
                                         <span className="start-date">7 خرداد</span>
                                         <span className="end-date">9 خرداد</span>
                                     </div>
                                     <div className="auction-time">
                                         <span className="start-time">10</span>
                                         <span className="end-time">22</span>
                                     </div>
                                 </div>
                                 <h3 className="default">مبارزه با بی‌سوادی، از مجموعه سپید و سه بعدی</h3>
                                 <button type="button" className="btn btn-basic">عضویت در حراج</button>
                             </div>
                         </div>
                     </div>
                     <div className="row flex-row-reverse pull-top100">
                         <div className="col-xl-4 col-lg-4 col-sm-5">
                             <div className="bg-shadow tl-shadow20">
                                 <div className="artwork-img">
                                     <img src={pic4} width="493" height="621" alt="" className="img-fluid" />
                                     <div className="auction-category">
                                         <span className="category-save auction-reminder"></span>
                                         <span className="category-icon online-icon">آنلاین</span>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div className="col-xl-4 col-lg-6 col-sm-7">
                             <div className="auction-info rightalign">
                                 <h6 className="auctioninfo location">تهران</h6>
                                 <div className="auction-calender auctioninfo">
                                     <div className="auction-date">
                                         <span className="start-date">7 خرداد</span>
                                         <span className="end-date">9 خرداد</span>
                                     </div>
                                     <div className="auction-time">
                                         <span className="start-time">10</span>
                                     <span className="end-time">22</span>
                                     </div>
                                 </div>
                                 <h3 className="default">مبارزه با بی‌سوادی، از مجموعه سپید و سه بعدی</h3>
                                 <button type="button" className="btn btn-basic">عضویت در حراج</button>
                             </div>
                         </div>
                     </div>
                     <div className="row pull-top100">
                         <div className="col-xl-4 col-lg-4 col-sm-5">
                             <div className="bg-shadow tl-shadow20">
                                 <div className="artwork-img">
                                     <img src={pic4} width="998" height="880" alt="" className="img-fluid" />
                                     <div className="auction-category">
                                         <span className="category-save auction-reminder"></span>
                                         <span className="category-icon firstoffer-icon">اولین پیشنهاد</span>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div className="col-xl-4 col-lg-6 col-sm-7">
                             <div className="auction-info">
                                 <h6 className="auctioninfo location">تهران</h6>
                                 <div className="auction-calender auctioninfo">
                                     <div className="auction-date">
                                         <span className="start-date">7 خرداد</span>
                                         <span className="end-date">9 خرداد</span>
                                     </div>
                                     <div className="auction-time">
                                         <span className="start-time">10</span>
                                         <span className="end-time">22</span>
                                    </div>
                                 </div>
                                 <h3 className="default">مبارزه با بی‌سوادی، از مجموعه سپید و سه بعدی</h3>
                                 <button type="button" className="btn btn-basic">عضویت در حراج</button>
                             </div>
                         </div>
                     </div>

                 </div>
             </section>
         </div>
    </main>
    <Footer/>
</React.Fragment>
)
}

export default AfterLoginPage;



//  <section className="slider">
//                 <div className="container innercontainer top130 position-relative">
//                     <div className="row">
//                         <div className="col-sm-6 col-lg-5 order-sm-2">
//                             <div id="main-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel"
//                                 data-bs-interval="0">
//                                 <div className="carousel-inner">
//                                     <div className="carousel-item active ">
//                                         <div className="bg-shadow tr-shadow20 max-width-500">
//                                             <img src={slider1} width="500" height="500" className="img-fluid" />
//                                         </div>
//                                     </div>
//                                     <div className="carousel-item">
//                                         <div className="bg-shadow tr-shadow20 max-width-500">
//                                             <img src={slider2} width="500" height="500" className="img-fluid" />
//                                         </div>
//                                     </div>
//                                     <div className="carousel-item ">
//                                         <div className="bg-shadow tr-shadow20 max-width-500">
//                                             <img src={slider3} width="470" height="587" className="img-fluid" />
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="carousel-controls">
//                                     <button className="carousel-control-prev" type="button"
//                                         data-bs-target="#main-carousel" data-bs-slide="prev">
//                                         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                                         <span className="visually-hidden">قبلی</span>
//                                     </button>
//                                     <div className="carousel-number-indicator">
//                                         <span className="now-slide">00</span>
//                                         <span className="all-slide">05</span>
//                                     </div>
//                                     <button className="carousel-control-next" type="button"
//                                         data-bs-target="#main-carousel" data-bs-slide="next">
//                                         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                                         <span className="visually-hidden">بعدی</span>
//                                     </button>
//                                 </div>

//                             </div>
//                         </div>
//                         <div className="col-sm-6 col-lg-7 leftslider order-sm-1">
//                             <h1 className="default">Contemporary Iranian Art Jan 2020</h1>
//                             <p className="font15">
//                                 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
//                                 است nonummy nibh euismod
//                                 tincidunt ut laoreet dolore magna aliquam erat volutpat
//                             </p>
//                             <button type="button" className="btn btn-basic">عضویت در حراج</button>
//                         </div>
//                         <div className="col-sm-12 col-lg-7 mrgtop150slider order-sm-3">
//                             <div className="row">
//                                 <div className="col-sm-3 ">
//                                     <h6 className="slider-title">برگزار کننده:</h6>
//                                     <span>حراج تهران</span>
//                                 </div>
//                                 <div className="col-sm-3">
//                                     <h6 className="slider-title">نوع:</h6>
//                                     <span>Online auction</span>
//                                 </div>
//                                 <div className="col-sm-6">
//                                     <h6 className="slider-title">تاریخ برگزاری:</h6>
//                                     <div className="auction-calender">
//                                         <div className="auction-date">
//                                             <span className="start-date">19 آبان</span>
//                                             <span className="end-date">22 آبان</span>
//                                         </div>
//                                         <div className="auction-time">
//                                             <span className="start-time">10</span>
//                                             <span className="end-time">22</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <section className="Categorized-artworks">
//                 <div className="container innercontainer">
//                     <div className="row">
//                         <div className="col-md-3 col-sm-12">
//                             <div className="main-title">
//                                 <h2 className="default titr">آخرین آثار حراج</h2>
//                                 <a href="#" className="btn-view">مشاهده همه</a>
//                             </div>
//                         </div>
//                         <div className="col-md-9 col-sm-12">
//                             <ul className="nav nav-tabs justify-content-start justify-content-md-end main-tab"
//                                 id="myTab" role="tablist">
//                                 <li className="nav-item" role="presentation">
//                                     <button className="nav-link active" id="tab-1" data-bs-toggle="tab"
//                                         data-bs-target="#tab1" type="button" role="tab" aria-controls="tab1"
//                                         aria-selected="true">همه
//                                     </button>
//                                 </li>
//                                 <li className="nav-item" role="presentation">
//                                     <button className="nav-link" id="tab-2" data-bs-toggle="tab" data-bs-target="#tab2"
//                                         type="button" role="tab" aria-controls="tab2" aria-selected="false">زنده
//                                     </button>
//                                 </li>
//                                 <li className="nav-item" role="presentation">
//                                     <button className="nav-link" id="tab-3" data-bs-toggle="tab" data-bs-target="#tab3"
//                                         type="button" role="tab" aria-controls="tab3" aria-selected="false">آنلاین
//                                     </button>
//                                 </li>
//                                 <li className="nav-item" role="presentation">
//                                     <button className="nav-link" id="tab-4" data-bs-toggle="tab" data-bs-target="#tab4"
//                                         type="button" role="tab" aria-controls="tab4" aria-selected="false">مدت‌دار
//                                     </button>
//                                 </li>
//                                 <li className="nav-item" role="presentation">
//                                     <button className="nav-link" id="tab-5" data-bs-toggle="tab" data-bs-target="#tab5"
//                                         type="button" role="tab" aria-controls="tab5" aria-selected="false">اولین
//                                         پیشنهاد
//                                     </button>
//                                 </li>
//                                 <li className="nav-item" role="presentation">
//                                     <button className="nav-link" id="tab-6" data-bs-toggle="tab" data-bs-target="#tab6"
//                                         type="button" role="tab" aria-controls="tab6" aria-selected="false">دومین
//                                         پیشنهاد
//                                     </button>
//                                 </li>

//                             </ul>
//                         </div>
//                     </div>
//                     <div className="row">
//                          <div className="d-block d-md-flex"> 
//                             <div className="tab-content main-tab-content" id="myTabContent">
//                                 <div className="tab-pane fade show active" id="tab1" role="tabpanel"
//                                     aria-labelledby="home-tab">
//                                     <div className="owl-carousel">
//                                         <a href="#" className="artwork-block ">
//                                             <div className="artwork-img">
//                                                 <img src={pic1} width="998" height="880" alt=""
//                                                     className="img-fluid w-25" />
//                                                 <div className="artwork-category">
//                                                     <span className="category-save artwork-bookmark"></span>
//                                                     <span className="category-icon live-icon">زنده</span>
//                                                 </div>
//                                             </div>
//                                             <div className="block-body text-center">
//                                                 <h6 className="default gray50 ">سهراب سپهری</h6>
//                                                 <h4 className="default">از ژورنال سقاخانه</h4>
//                                                 <div className="auction-calender">
//                                                     <div className="auction-date">
//                                                         <span className="start-date">7 خرداد</span>
//                                                         <span className="end-date">9 خرداد</span>
//                                                     </div>
//                                                     <div className="auction-time">
//                                                         <span className="start-time">10</span>
//                                                     </div>
//                                                 </div>
//                                                 <div className="price-block">
//                                                     <span>قیمت پایه:</span>
//                                                     <span className="price">100,000,000<span
//                                                             className="price-unit">تومان</span></span>
//                                                 </div>
//                                             </div>
//                                         </a>
//                                         <a href="#" className="artwork-block">
//                                             <div className="artwork-img">
//                                                 <img src={pic2} width="998" height="880" alt=""
//                                                     className="img-fluid w-25" />
//                                                 <div className="artwork-category">
//                                                     <span className="category-save artwork-bookmark"></span>
//                                                     <span className="category-icon online-icon">آنلاین</span>
//                                                 </div>
//                                             </div>
//                                             <div className="block-body text-center">
//                                                 <h6 className="default gray50 ">حسین کاظمی</h6>
//                                                 <h4 className="default">از مجموعه قرمز</h4>
//                                                 <div className="jumbotron countdown show start"
//                                                     data-Date='2021/06/05 16:09:00'>
//                                                     <div className="running">
//                                                         <timer>
//                                                             <span className="days"></span>:<span
//                                                                 className="hours"></span>:<span
//                                                                 className="minutes"></span><span
//                                                                 className="show-text"></span>
//                                                         </timer>
//                                                         <div className="break"></div>
//                                                     </div>
//                                                     <div className="ended">
//                                                         <div className="text">حراج به پایان رسید</div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="price-block">
//                                                     <span>قیمت پایه:</span>
//                                                     <span className="price">30,000,000<span
//                                                             className="price-unit">تومان</span></span>
//                                                 </div>
//                                             </div>
//                                         </a>
//                                         <a href="#" className="artwork-block">
//                                             <div className="artwork-img">
//                                                 <img src={pic3} width="998" height="880" alt=""
//                                                     className="img-fluid w-25" />
//                                                 <div className="artwork-category">
//                                                     <span className="category-save artwork-bookmark"></span>
//                                                     <span className="category-icon timed-icon">مدت‌دار</span>
//                                                 </div>
//                                             </div>
//                                             <div className="block-body text-center">
//                                                 <h6 className="default gray50 ">همایون سلیمی</h6>
//                                                 <h4 className="default">آرامش و سکوت در طبیعت بکر</h4>
//                                                 <div className="jumbotron countdown show end"
//                                                     data-Date='2021/10/12 23:09:00'>
//                                                     <div className="running">
//                                                         <timer>
//                                                             <span className="days"></span>:<span
//                                                                 className="hours"></span>:<span
//                                                                 className="minutes"></span><span
//                                                                 className="show-text"></span>
//                                                         </timer>
//                                                         <div className="break"></div>
//                                                     </div>
//                                                     <div className="ended">
//                                                         <div className="text">حراج به پایان رسید</div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="price-block">
//                                                     <span>قیمت پایه:</span>
//                                                     <span className="price">9,500,000<span
//                                                             className="price-unit">تومان</span></span>
//                                                 </div>
//                                             </div>
//                                         </a>
//                                         <a href="#" className="artwork-block">
//                                             <div className="artwork-img">
//                                                 <img src={pic4} width="998" height="880" alt=""
//                                                     className="img-fluid w-25" />
//                                                 <div className="artwork-category">
//                                                     <span className="category-save artwork-bookmark"></span>
//                                                     <span className="category-icon firstoffer-icon">اولین پیشنهاد</span>
//                                                 </div>
//                                             </div>
//                                             <div className="block-body text-center">
//                                                 <h6 className="default gray50 ">پریوش گنجی</h6>
//                                                 <h4 className="default">از مجموعه پنجره قرمز</h4>
//                                                 <div className="auction-calender">
//                                                     <div className="auction-date">
//                                                         <span className="start-date">7 خرداد</span>
//                                                         <span className="end-date">9 خرداد</span>
//                                                     </div>
//                                                     <div className="auction-time">
//                                                         <span className="start-time">10</span>
//                                                     </div>
//                                                 </div>
//                                                 <div className="price-block">
//                                                     <span>قیمت پایه:</span>
//                                                     <span className="price">5,000,000<span
//                                                             className="price-unit">تومان</span></span>
//                                                 </div>
//                                             </div>
//                                         </a>
//                                         <a href="#" className="artwork-block">
//                                             <div className="artwork-img">
//                                                 <img src={pic5} width="998" height="880" alt=""
//                                                     className="img-fluid w-25" />
//                                                 <div className="artwork-category">
//                                                     <span className="category-save artwork-bookmark"></span>
//                                                     <span className="category-icon secondoffer-icon">دومین
//                                                         پیشنهاد</span>
//                                                 </div>
//                                             </div>
//                                             <div className="block-body text-center">
//                                                 <h6 className="default gray50 ">پریوش گنجی</h6>
//                                                 <h4 className="default">از مجموعه پنجره قرمز</h4>
//                                                 <div className="auction-calender">
//                                                     <div className="auction-date">
//                                                         <span className="start-date">7 خرداد</span>
//                                                         <span className="end-date">9 خرداد</span>
//                                                     </div>
//                                                     <div className="auction-time">
//                                                         <span className="start-time">10</span>
//                                                     </div>
//                                                 </div>
//                                                 <div className="price-block">
//                                                     <span>قیمت پایه:</span>
//                                                     <span className="price">5,000,000<span
//                                                             className="price-unit">تومان</span></span>
//                                                 </div>
//                                             </div>
//                                         </a>
//                                     </div>
//                                 </div>
//                                 <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="profile-tab">
//                                     <div className="owl-carousel">
//                                         <a href="#" className="artwork-block">
//                                             <div className="artwork-img">
//                                                 <img src="img/pic3.jpg" width="998" height="880" alt=""
//                                                     className="img-fluid w-25" />
//                                                 <div className="artwork-category">
//                                                     <span className="category-save artwork-bookmark"></span>
//                                                     <span className="category-icon online-icon">آنلاین</span>
//                                                 </div>
//                                             </div>
//                                             <div className="block-body text-center">
//                                                 <h6 className="default gray50 ">حسین کاظمی</h6>
//                                                 <h4 className="default">از مجموعه قرمز</h4>
//                                                 <div className="auction-calender">
//                                                     <div className="auction-date">
//                                                         <span className="start-date">7 خرداد</span>
//                                                         <span className="end-date">9 خرداد</span>
//                                                     </div>
//                                                     <div className="auction-time">
//                                                         <span className="start-time">10</span>
//                                                     </div>
//                                                 </div>
//                                                 <div className="price-block">
//                                                     <span>قیمت پایه:</span>
//                                                     <span className="price">30,000,000<span
//                                                             className="price-unit">تومان</span></span>
//                                                 </div>
//                                             </div>
//                                         </a>
//                                         <a href="#" className="artwork-block">
//                                             <div className="artwork-img">
//                                                 <img src="img/pic4.jpg" width="998" height="880" alt=""
//                                                     className="img-fluid w-25" />
//                                                 <div className="artwork-category">
//                                                     <span className="category-save artwork-bookmark"></span>
//                                                     <span className="category-icon timed-icon">مدت‌دار</span>
//                                                 </div>
//                                             </div>
//                                             <div className="block-body text-center">
//                                                 <h6 className="default gray50 ">همایون سلیمی</h6>
//                                                 <h4 className="default">آرامش و سکوت در طبیعت بکر</h4>
//                                                 <div className="auction-calender">
//                                                     <div className="auction-date">
//                                                         <span className="start-date">7 خرداد</span>
//                                                         <span className="end-date">9 خرداد</span>
//                                                     </div>
//                                                     <div className="auction-time">
//                                                         <span className="start-time">10</span>
//                                                     </div>
//                                                 </div>
//                                                 <div className="price-block">
//                                                     <span>قیمت پایه:</span>
//                                                     <span className="price">9,500,000<span
//                                                             className="price-unit">تومان</span></span>
//                                                 </div>
//                                             </div>
//                                         </a>
//                                         <a href="#" className="artwork-block">
//                                             <div className="artwork-img">
//                                                 <img src="img/pic1.jpg" width="998" height="880" alt=""
//                                                     className="img-fluid w-25" />
//                                                 <div className="artwork-category">
//                                                     <span className="category-save artwork-bookmark"></span>
//                                                     <span className="category-icon firstoffer-icon">اولین پیشنهاد</span>
//                                                 </div>
//                                             </div>
//                                             <div className="block-body text-center">
//                                                 <h6 className="default gray50 ">پریوش گنجی</h6>
//                                                 <h4 className="default">از مجموعه پنجره قرمز</h4>
//                                                 <div className="auction-calender">
//                                                     <div className="auction-date">
//                                                         <span className="start-date">7 خرداد</span>
//                                                         <span className="end-date">9 خرداد</span>
//                                                     </div>
//                                                     <div className="auction-time">
//                                                         <span className="start-time">10</span>
//                                                     </div>
//                                                 </div>
//                                                 <div className="price-block">
//                                                     <span>قیمت پایه:</span>
//                                                     <span className="price">5,000,000<span
//                                                             className="price-unit">تومان</span></span>
//                                                 </div>
//                                             </div>
//                                         </a>
//                                         <a href="#" className="artwork-block">
//                                             <div className="artwork-img">
//                                                 <img src="img/pic5.jpg" width="998" height="880" alt=""
//                                                     className="img-fluid" />
//                                                 <div className="artwork-category">
//                                                     <span className="category-save artwork-bookmark"></span>
//                                                     <span className="category-icon secondoffer-icon">دومین
//                                                         پیشنهاد</span>
//                                                 </div>
//                                             </div>
//                                             <div className="block-body text-center">
//                                                 <h6 className="default gray50 ">پریوش گنجی</h6>
//                                                 <h4 className="default">از مجموعه پنجره قرمز</h4>
//                                                 <div className="auction-calender">
//                                                     <div className="auction-date">
//                                                         <span className="start-date">7 خرداد</span>
//                                                         <span className="end-date">9 خرداد</span>
//                                                     </div>
//                                                     <div className="auction-time">
//                                                         <span className="start-time">10</span>
//                                                     </div>
//                                                 </div>
//                                                 <div className="price-block">
//                                                     <span>قیمت پایه:</span>
//                                                     <span className="price">5,000,000<span
//                                                             className="price-unit">تومان</span></span>
//                                                 </div>
//                                             </div>
//                                         </a>
//                                     </div>
//                                 </div>
//                                 <div className="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="contact-tab">
//                                     <div className="owl-carousel">
//                                         <a href="#" className="artwork-block">
//                                             <div className="artwork-img">
//                                                 <img src="img/pic2.jpg" width="998" height="880" alt=""
//                                                     className="img-fluid" />
//                                                 <div className="artwork-category">
//                                                     <span className="category-save artwork-bookmark"></span>
//                                                     <span className="category-icon live-icon">زنده</span>
//                                                 </div>
//                                             </div>
//                                             <div className="block-body text-center">
//                                                 <h6 className="default gray50 ">سهراب سپهری</h6>
//                                                 <h4 className="default">از ژورنال سقاخانه</h4>
//                                                 <div className="auction-calender">
//                                                     <div className="auction-date">
//                                                         <span className="start-date">7 خرداد</span>
//                                                         <span className="end-date">9 خرداد</span>
//                                                     </div>
//                                                     <div className="auction-time">
//                                                         <span className="start-time">10</span>
//                                                     </div>
//                                                 </div>
//                                                 <div className="price-block">
//                                                     <span>قیمت پایه:</span>
//                                                     <span className="price">100,000,000<span
//                                                             className="price-unit">تومان</span></span>
//                                                 </div>
//                                             </div>
//                                         </a>
//                                         <a href="#" className="artwork-block">
//                                             <div className="artwork-img">
//                                                 <img src="img/pic3.jpg" width="998" height="880" alt=""
//                                                     className="img-fluid" />
//                                                 <div className="artwork-category">
//                                                     <span className="category-save artwork-bookmark"></span>
//                                                     <span className="category-icon online-icon">آنلاین</span>
//                                                 </div>
//                                             </div>
//                                             <div className="block-body text-center">
//                                                 <h6 className="default gray50 ">حسین کاظمی</h6>
//                                                 <h4 className="default">از مجموعه قرمز</h4>
//                                                 <div className="auction-calender">
//                                                     <div className="auction-date">
//                                                         <span className="start-date">7 خرداد</span>
//                                                         <span className="end-date">9 خرداد</span>
//                                                     </div>
//                                                     <div className="auction-time">
//                                                         <span className="start-time">10</span>
//                                                     </div>
//                                                 </div>
//                                                 <div className="price-block">
//                                                     <span>قیمت پایه:</span>
//                                                     <span className="price">30,000,000<span
//                                                             className="price-unit">تومان</span></span>
//                                                 </div>
//                                             </div>
//                                         </a>
//                                         <a href="#" className="artwork-block">
//                                             <div className="artwork-img">
//                                                 <img src="img/pic4.jpg" width="998" height="880" alt=""
//                                                     className="img-fluid" />
//                                                 <div className="artwork-category">
//                                                     <span className="category-save artwork-bookmark"></span>
//                                                     <span className="category-icon timed-icon">مدت‌دار</span>
//                                                 </div>
//                                             </div>
//                                             <div className="block-body text-center">
//                                                 <h6 className="default gray50 ">همایون سلیمی</h6>
//                                                 <h4 className="default">آرامش و سکوت در طبیعت بکر</h4>
//                                                 <div className="auction-calender">
//                                                     <div className="auction-date">
//                                                         <span className="start-date">7 خرداد</span>
//                                                         <span className="end-date">9 خرداد</span>
//                                                     </div>
//                                                     <div className="auction-time">
//                                                         <span className="start-time">10</span>
//                                                     </div>
//                                                 </div>
//                                                 <div className="price-block">
//                                                     <span>قیمت پایه:</span>
//                                                     <span className="price">9,500,000<span
//                                                             className="price-unit">تومان</span></span>
//                                                 </div>
//                                             </div>
//                                         </a>
//                                         <a href="#" className="artwork-block">
//                                             <div className="artwork-img">
//                                                 <img src="img/pic1.jpg" width="998" height="880" alt=""
//                                                     className="img-fluid" />
//                                                 <div className="artwork-category">
//                                                     <span className="category-save artwork-bookmark"></span>
//                                                     <span className="category-icon firstoffer-icon">اولین پیشنهاد</span>
//                                                 </div>
//                                             </div>
//                                             <div className="block-body text-center">
//                                                 <h6 className="default gray50 ">پریوش گنجی</h6>
//                                                 <h4 className="default">از مجموعه پنجره قرمز</h4>
//                                                 <div className="auction-calender">
//                                                     <div className="auction-date">
//                                                         <span className="start-date">7 خرداد</span>
//                                                         <span className="end-date">9 خرداد</span>
//                                                     </div>
//                                                     <div className="auction-time">
//                                                         <span className="start-time">10</span>
//                                                     </div>
//                                                 </div>
//                                                 <div className="price-block">
//                                                     <span>قیمت پایه:</span>
//                                                     <span className="price">5,000,000<span
//                                                             className="price-unit">تومان</span></span>
//                                                 </div>
//                                             </div>
//                                         </a>
//                                     </div>
//                                 </div>
//                                 <div className="tab-pane fade" id="tab4" role="tabpanel" aria-labelledby="contact-tab">
//                                     <div className="owl-carousel">
//                                         <a href="#" className="artwork-block">
//                                             <div className="artwork-img">
//                                                 <img src="img/pic2.jpg" width="998" height="880" alt=""
//                                                     className="img-fluid" />
//                                                 <div className="artwork-category">
//                                                     <span className="category-save artwork-bookmark"></span>
//                                                     <span className="category-icon live-icon">زنده</span>
//                                                 </div>
//                                             </div>
//                                             <div className="block-body text-center">
//                                                 <h6 className="default gray50 ">سهراب سپهری</h6>
//                                                 <h4 className="default">از ژورنال سقاخانه</h4>
//                                                 <div className="auction-calender">
//                                                     <div className="auction-date">
//                                                         <span className="start-date">7 خرداد</span>
//                                                         <span className="end-date">9 خرداد</span>
//                                                     </div>
//                                                     <div className="auction-time">
//                                                         <span className="start-time">10</span>
//                                                     </div>
//                                                 </div>
//                                                 <div className="price-block">
//                                                     <span>قیمت پایه:</span>
//                                                     <span className="price">100,000,000<span
//                                                             className="price-unit">تومان</span></span>
//                                                 </div>
//                                             </div>
//                                         </a>
//                                         <a href="#" className="artwork-block">
//                                             <div className="artwork-img">
//                                                 <img src="img/pic4.jpg" width="998" height="880" alt=""
//                                                     className="img-fluid" />
//                                                 <div className="artwork-category">
//                                                     <span className="category-save artwork-bookmark"></span>
//                                                     <span className="category-icon timed-icon">مدت‌دار</span>
//                                                 </div>
//                                             </div>
//                                             <div className="block-body text-center">
//                                                 <h6 className="default gray50 ">همایون سلیمی</h6>
//                                                 <h4 className="default">آرامش و سکوت در طبیعت بکر</h4>
//                                                 <div className="auction-calender">
//                                                     <div className="auction-date">
//                                                         <span className="start-date">7 خرداد</span>
//                                                         <span className="end-date">9 خرداد</span>
//                                                     </div>
//                                                     <div className="auction-time">
//                                                         <span className="start-time">10</span>
//                                                     </div>
//                                                 </div>
//                                                 <div className="price-block">
//                                                     <span>قیمت پایه:</span>
//                                                     <span className="price">9,500,000<span
//                                                             className="price-unit">تومان</span></span>
//                                                 </div>
//                                             </div>
//                                         </a>
//                                         <a href="#" className="artwork-block">
//                                             <div className="artwork-img">
//                                                 <img src="img/pic1.jpg" width="998" height="880" alt=""
//                                                     className="img-fluid" />
//                                                 <div className="artwork-category">
//                                                     <span className="category-save artwork-bookmark"></span>
//                                                     <span className="category-icon firstoffer-icon">اولین پیشنهاد</span>
//                                                 </div>
//                                             </div>
//                                             <div className="block-body text-center">
//                                                 <h6 className="default gray50 ">پریوش گنجی</h6>
//                                                 <h4 className="default">از مجموعه پنجره قرمز</h4>
//                                                 <div className="auction-calender">
//                                                     <div className="auction-date">
//                                                         <span className="start-date">7 خرداد</span>
//                                                         <span className="end-date">9 خرداد</span>
//                                                     </div>
//                                                     <div className="auction-time">
//                                                         <span className="start-time">10</span>
//                                                     </div>
//                                                 </div>
//                                                 <div className="price-block">
//                                                     <span>قیمت پایه:</span>
//                                                     <span className="price">5,000,000<span
//                                                             className="price-unit">تومان</span></span>
//                                                 </div>
//                                             </div>
//                                         </a>
//                                         <a href="#" className="artwork-block">
//                                             <div className="artwork-img">
//                                                 <img src="img/pic5.jpg" width="998" height="880" alt=""
//                                                     className="img-fluid" />
//                                                 <div className="artwork-category">
//                                                     <span className="category-save artwork-bookmark"></span>
//                                                     <span className="category-icon secondoffer-icon">دومین
//                                                         پیشنهاد</span>
//                                                 </div>
//                                             </div>
//                                             <div className="block-body text-center">
//                                                 <h6 className="default gray50 ">پریوش گنجی</h6>
//                                                 <h4 className="default">از مجموعه پنجره قرمز</h4>
//                                                 <div className="auction-calender">
//                                                     <div className="auction-date">
//                                                         <span className="start-date">7 خرداد</span>
//                                                         <span className="end-date">9 خرداد</span>
//                                                     </div>
//                                                     <div className="auction-time">
//                                                         <span className="start-time">10</span>
//                                                     </div>
//                                                 </div>
//                                                 <div className="price-block">
//                                                     <span>قیمت پایه:</span>
//                                                     <span className="price">5,000,000<span
//                                                             className="price-unit">تومان</span></span>
//                                                 </div>
//                                             </div>
//                                         </a>
//                                     </div>
//                                 </div>
//                                 <div className="tab-pane fade" id="tab5" role="tabpanel" aria-labelledby="contact-tab">
//                                     <div className="owl-carousel">
//                                         <a href="#" className="artwork-block">
//                                             <div className="artwork-img">
//                                                 <img src="img/pic2.jpg" width="998" height="880" alt=""
//                                                     className="img-fluid" />
//                                                 <div className="artwork-category">
//                                                     <span className="category-save artwork-bookmark"></span>
//                                                     <span className="category-icon live-icon">زنده</span>
//                                                 </div>
//                                             </div>
//                                             <div className="block-body text-center">
//                                                 <h6 className="default gray50 ">سهراب سپهری</h6>
//                                                 <h4 className="default">از ژورنال سقاخانه</h4>
//                                                 <div className="auction-calender">
//                                                     <div className="auction-date">
//                                                         <span className="start-date">7 خرداد</span>
//                                                         <span className="end-date">9 خرداد</span>
//                                                     </div>
//                                                     <div className="auction-time">
//                                                         <span className="start-time">10</span>
//                                                     </div>
//                                                 </div>
//                                                 <div className="price-block">
//                                                     <span>قیمت پایه:</span>
//                                                     <span className="price">100,000,000<span
//                                                             className="price-unit">تومان</span></span>
//                                                 </div>
//                                             </div>
//                                         </a>
//                                         <a href="#" className="artwork-block">
//                                             <div className="artwork-img">
//                                                 <img src="img/pic3.jpg" width="998" height="880" alt=""
//                                                     className="img-fluid" />
//                                                 <div className="artwork-category">
//                                                     <span className="category-save artwork-bookmark"></span>
//                                                     <span className="category-icon online-icon">آنلاین</span>
//                                                 </div>
//                                             </div>
//                                             <div className="block-body text-center">
//                                                 <h6 className="default gray50 ">حسین کاظمی</h6>
//                                                 <h4 className="default">از مجموعه قرمز</h4>
//                                                 <div className="auction-calender">
//                                                     <div className="auction-date">
//                                                         <span className="start-date">7 خرداد</span>
//                                                         <span className="end-date">9 خرداد</span>
//                                                     </div>
//                                                     <div className="auction-time">
//                                                         <span className="start-time">10</span>
//                                                     </div>
//                                                 </div>
//                                                 <div className="price-block">
//                                                     <span>قیمت پایه:</span>
//                                                     <span className="price">30,000,000<span
//                                                             className="price-unit">تومان</span></span>
//                                                 </div>
//                                             </div>
//                                         </a>
//                                         <a href="#" className="artwork-block">
//                                             <div className="artwork-img">
//                                                 <img src="img/pic5.jpg" width="998" height="880" alt=""
//                                                     className="img-fluid" />
//                                                 <div className="artwork-category">
//                                                     <span className="category-save artwork-bookmark"></span>
//                                                     <span className="category-icon secondoffer-icon">دومین
//                                                         پیشنهاد</span>
//                                                 </div>
//                                             </div>
//                                             <div className="block-body text-center">
//                                                 <h6 className="default gray50 ">پریوش گنجی</h6>
//                                                 <h4 className="default">از مجموعه پنجره قرمز</h4>
//                                                 <div className="auction-calender">
//                                                     <div className="auction-date">
//                                                         <span className="start-date">7 خرداد</span>
//                                                         <span className="end-date">9 خرداد</span>
//                                                     </div>
//                                                     <div className="auction-time">
//                                                         <span className="start-time">10</span>
//                                                     </div>
//                                                 </div>
//                                                 <div className="price-block">
//                                                     <span>قیمت پایه:</span>
//                                                     <span className="price">5,000,000<span
//                                                             className="price-unit">تومان</span></span>
//                                                 </div>
//                                             </div>
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                          </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//         <div className="container-fluid">
//             <section className="latest-auction">
//                 <div className="row">
//                     <div className="col">
//                         <div className="main-title">
//                             <h2 className="default titr">آخرین حراج‌ها</h2>
//                             <a href="#" className="btn-view">مشاهده همه</a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="container innercontainer">
//                     <div className="row">
//                         <div className="col-xl-4 col-lg-4 col-sm-5">
//                             <div className="bg-shadow tl-shadow20">
//                                 <div className="artwork-img">
//                                     <img src="img/pic6.jpg" width="570" height="470" alt="" className="img-fluid" />
//                                     <div className="auction-category">
//                                         <span className="category-save auction-reminder"></span>
//                                         <span className="category-icon live-icon">زنده</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-xl-4 col-lg-6 col-sm-7">
//                             <div className="auction-info">
//                                 <h6 className="auctioninfo location">تهران</h6>
//                                 <div className="auction-calender auctioninfo">
//                                     <div className="auction-date">
//                                         <span className="start-date">7 خرداد</span>
//                                         <span className="end-date">9 خرداد</span>
//                                     </div>
//                                     <div className="auction-time">
//                                         <span className="start-time">10</span>
//                                         <span className="end-time">22</span>
//                                     </div>
//                                 </div>
//                                 <h3 className="default">مبارزه با بی‌سوادی، از مجموعه سپید و سه بعدی</h3>
//                                 <button type="button" className="btn btn-basic">عضویت در حراج</button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row flex-row-reverse pull-top100">
//                         <div className="col-xl-4 col-lg-4 col-sm-5">
//                             <div className="bg-shadow tl-shadow20">
//                                 <div className="artwork-img">
//                                     <img src="img/pic7.jpg" width="493" height="621" alt="" className="img-fluid" />
//                                     <div className="auction-category">
//                                         <span className="category-save auction-reminder"></span>
//                                         <span className="category-icon online-icon">آنلاین</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-xl-4 col-lg-6 col-sm-7">
//                             <div className="auction-info rightalign">
//                                 <h6 className="auctioninfo location">تهران</h6>
//                                 <div className="auction-calender auctioninfo">
//                                     <div className="auction-date">
//                                         <span className="start-date">7 خرداد</span>
//                                         <span className="end-date">9 خرداد</span>
//                                     </div>
//                                     <div className="auction-time">
//                                         <span className="start-time">10</span>
//                                         <span className="end-time">22</span>
//                                     </div>
//                                 </div>
//                                 <h3 className="default">مبارزه با بی‌سوادی، از مجموعه سپید و سه بعدی</h3>
//                                 <button type="button" className="btn btn-basic">عضویت در حراج</button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row pull-top100">
//                         <div className="col-xl-4 col-lg-4 col-sm-5">
//                             <div className="bg-shadow tl-shadow20">
//                                 <div className="artwork-img">
//                                     <img src="img/pic2.jpg" width="998" height="880" alt="" className="img-fluid" />
//                                     <div className="auction-category">
//                                         <span className="category-save auction-reminder"></span>
//                                         <span className="category-icon firstoffer-icon">اولین پیشنهاد</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-xl-4 col-lg-6 col-sm-7">
//                             <div className="auction-info">
//                                 <h6 className="auctioninfo location">تهران</h6>
//                                 <div className="auction-calender auctioninfo">
//                                     <div className="auction-date">
//                                         <span className="start-date">7 خرداد</span>
//                                         <span className="end-date">9 خرداد</span>
//                                     </div>
//                                     <div className="auction-time">
//                                         <span className="start-time">10</span>
//                                         <span className="end-time">22</span>
//                                     </div>
//                                 </div>
//                                 <h3 className="default">مبارزه با بی‌سوادی، از مجموعه سپید و سه بعدی</h3>
//                                 <button type="button" className="btn btn-basic">عضویت در حراج</button>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </section>
//         </div>
//         <div className="container containercs ">
//             <section className="latest-articles">
//                 <div className="container innercontainer">
//                     <div className="row">
//                         <div className="col">
//                             <div className="main-title">
//                                 <h2 className="default titr">آخرین اخبار و مقالات</h2>
//                                 <a href="#" className="btn-view">مشاهده همه</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div id="latest-articles" className="carousel slide carousel-fade" data-bs-ride="carousel">
//                         <div className="row">
//                             <div className="col-lg-8">
//                                 <div className="carousel-inner">
//                                     <div className="carousel-item active" data-bs-interval="10000">
//                                         <div className="bg-shadow tl-shadow20">
//                                             <img src="img/pic8.jpg" className="d-block w-100" alt="..." />
//                                         </div>
//                                         <div className="carousel-caption ">
//                                             <span className="showdate">7 اردیبهشت 99</span>
//                                             <h5 className="default">سیزدهمین دوره حراج تهران تحت تاثیر کرونا به شیوه
//                                                 متفاوتی برگزار شد</h5>
//                                             <p className="d-sm-none d-lg-block">لورم ایپسوم متن ساختگی با تولید سادگی
//                                                 نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
//                                                 بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
//                                                 تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
//                                                 باشد.</p>
//                                         </div>
//                                     </div>
//                                     <div className="carousel-item" data-bs-interval="2000">
//                                         <div className="bg-shadow tl-shadow20">
//                                             <img src="img/pic9.jpg" className="d-block w-100" alt="..." />
//                                         </div>
//                                         <div className="carousel-caption ">
//                                             <span className="showdate">7 اردیبهشت 99</span>
//                                             <h5 className="default">Consectetuer adipiscing elit, sed diam nonummy nibh
//                                             </h5>
//                                             <p className="d-sm-none d-lg-block">that perfect piece is just waiting for
//                                                 you,
//                                                 Delve
//                                                 into our world of unique and
//                                                 amazing finds from the comfort of your sofa.</p>
//                                         </div>
//                                     </div>
//                                     <div className="carousel-item">
//                                         <div className="bg-shadow tl-shadow20">
//                                             <img src="img/pic10.jpg" className="d-block w-100" alt="..." />
//                                         </div>
//                                         <div className="carousel-caption ">
//                                             <span className="showdate">7 اردیبهشت 99</span>
//                                             <h5 className="default">Sed diam nonummy nibh </h5>
//                                             <p className="d-sm-none d-lg-block">Unique and amazing finds from the
//                                                 comfort of
//                                                 your
//                                                 sofa -
//                                                 that perfect piece is just waiting for you.</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="row">
//                             <div className="col-lg-5 ">
//                                 <div className="carousel-controls">
//                                     <button className="carousel-control-prev" type="button"
//                                         data-bs-target="#latest-articles" data-bs-slide="prev">
//                                         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                                         <span className="visually-hidden">قبلی</span>
//                                     </button>
//                                     <div className="carousel-number-indicator">
//                                         <span className="now-slide">00</span>
//                                         <span className="all-slide">05</span>
//                                     </div>
//                                     <button className="carousel-control-next" type="button"
//                                         data-bs-target="#latest-articles" data-bs-slide="next">
//                                         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                                         <span className="visually-hidden">بعدی</span>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="row flex-row-reverse ">
//                             <div className="col-lg-6">
//                                 <div className="carousel-indicators">
//                                     <div className="row position-relative">
//                                         <div className="col-4">
//                                             <img src="img/pic8.jpg" alt="" data-bs-target="#latest-articles"
//                                                 data-bs-slide-to="0" className="active max-width-180"
//                                                 aria-current="true" aria-label="Slide 1" />
//                                         </div>
//                                         <div className="col-4">
//                                             <img src="img/pic9.jpg" alt="" width="500" height="390"
//                                                 data-bs-target="#latest-articles" data-bs-slide-to="1"
//                                                 className="max-width-180" aria-label="Slide 2" />
//                                         </div>
//                                         <div className="col-4">
//                                             <img src="img/pic10.jpg" alt="" width="500" height="390"
//                                                 data-bs-target="#latest-articles" data-bs-slide-to="2"
//                                                 className="max-width-180" aria-label="Slide 3" />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <section className="about">
//                 <div className="container innercontainer">
//                     <div className="row">
//                         <div className="col">
//                             <div className="main-title small">
//                                 <h2 className="default titr">درباره ما</h2>
//                                 <a href="#" className="btn-view">بیشتر</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-lg-6">
//                             <div className="content-box">
//                                 <div className="row">
//                                     <div className="col-sm-8 ">
//                                         <h4 className="default">آرتیبیشن از هنر دوستان حمایت می‌کند</h4>
//                                         <p className="">هنر یک روش عالی برای ابراز وجود است ، خلاق بودن ، از بین بردن
//                                             فشار روانی و لذت بردن از خودمان است ، بنابراین شرم آور است وقتی می بینید که
//                                             استعداد زیادی وجود دارد که به دلیل عدم فرصت مناسب استفاده نشده است. آرتیبیشن
//                                             تصمیم گرفته این فرصت را برای درخشش علاقه مندان به هنر در زمینه های مختلف
//                                             هنرهای تجسمی ایجاد کند.</p>
//                                     </div>
//                                     <div className="col-sm-4 d-none d-sm-block">
//                                         <ul className="vertical-menu">
//                                             <li><a href="#">شرایط استفاده</a></li>
//                                             <li><a href="#">حریم خصوصی</a></li>
//                                             <li><a href="#">همکاری با ما</a></li>
//                                             <li><a href="#">سوالات متداول</a></li>
//                                             <li><a href="#">تماس با ما</a></li>
//                                         </ul>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                         <div className="col-lg-6">
//                             <div className="content-box newsletter">
//                                 <div className="main-title">
//                                     <h2 className="default titr">همین الان مشترک ما شوید!!</h2>
//                                     <span className="btn-view">برای اطلاع از آخرین حراج‌ها</span>
//                                     <div className="input-group-cs">
//                                         <input className="white" placeholder="Enter your Email ..." />
//                                         <button type="button" className="btn-input">ثبت</button>
//                                     </div>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </section> 