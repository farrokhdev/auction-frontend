import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../../components/header';
import Footer from '../../components/footer';
import img from '../../images/img-1.jpg';
import phone from '../../images/tel-darkgray.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe , faPhone , faEnvelope , faMapMarker} from "@fortawesome/free-solid-svg-icons";

function SingleHouseAuctionPage() {
return (
<div>
    <Header />
    <main className="innercontent" id="all-auctions">
        <div className="container innercontainer">
            
            <div className="row sm-mrgb50">
                <div className="col-6">
                    <div className="main-title d-inline-flex">
                        <h2 className="default titr">گالری آرتیبیشن</h2>
                        <ul className="breadcrumb-cs">
                            <li><a href="#">صفحه اصلی</a></li>
                            <li><a href="#">خانه‌های حراج</a></li>
                            <li className="active">گالری آرتیبیشن</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="row">

                <div className="col-lg-3">
                    <div className="ah-block">
                        <div className="ah-block-info logo">
                            <div className="bg-shadow tr-shadow10">
                                {/* <img src="img/logo-3.png" width="159" height="159" alt="گالری آرتیبیشن" /> */}
                                <img src={img} width="159" height="159" alt="گالری آرتیبیشن" />
                            </div>
                        </div>
                        <div className="ah-block-info ">
                            <div className="ah-block-title">
                                <h5 className="default">هنرهای تجسمی</h5>
                                <button type="button" className="btn-follow">دنبال کردن</button>
                            </div>


                            <div className="d-sm-flex d-lg-block justify-content-sm-between">
                                <div className="">

                                    <div className="d-flex mt-3">
                                        <FontAwesomeIcon className="mx-2" icon={faGlobe}/>
                                        
                                        <a href="#" >www.sarebangallery.com</a>
                                    </div>

                                    <div className="d-flex my-2">
                                        <FontAwesomeIcon className="mx-2" icon={faEnvelope}/>
                                        <a href="mailto: Info@sarebangallery.com"
                                            className="all-info">Info@sarebangallery.com</a>
                                    </div>

                                    <div className="d-flex">
                                        <FontAwesomeIcon className="mx-2" icon={faPhone}/>
                                        {/* <a href="+982144258856" className="info-tel all-info">+98 21 4425 8856</a> */}
                                        <p className="all-info" >+98 21 4425 8856</p>
                                    </div>

                                    <div className="d-flex">
                                        <FontAwesomeIcon className="mx-2" icon={faMapMarker}/>
                                        <address className="">
                                            <span className="province">تهران، </span>میدان هویزه،
                                            پلاک 103
                                        </address>
                                    </div>
                                </div>
                                <div className="info-location">
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
                                <li><a href="#" id="facebook"></a></li>
                                <li><a href="#" id="instagram"></a></li>
                                <li><a href="#" id="telegram"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-9">
                    <div className="row-blocks">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="bg-shadow tr-shadow10">
                                    {/* <img src="img/slider1.jpg" width="500" height="500" alt="" /> */}
                                    <img src={img} width="500" height="500" alt="" />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="block-head row">
                                    <div className="col-xl-3 col-sm-4 col-3">
                                        <span className="category-icon live-icon"><span
                                                className="d-none d-md-inline-block">حراج</span> زنده</span>
                                    </div>
                                    <div className="col-xl-9 col-sm-8 col-9 textalign-left">
                                        <span className="reminder-icon">یادآوری</span>
                                        <button type="button" className="link-source">
                                            <span><span className="d-none d-sm-inline-block">مشاهده </span>آثار
                                                (<span>25</span>)</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="block-main">
                                    <h5 className="default">فقط بصورت آنلاین زندگی کنید ، کتابهای عتیقه ، هنرهای تزئینی
                                        و تصاویر</h5>
                                    <div className="block-detail">
                                        <h6 className="default">هنر معاصر</h6>
                                        <h6 className="default gray50">گالری آرتیبیشن</h6>
                                    </div>
                                </div>
                                <div className="block-footer row">
                                    <div className="col-sm-5">
                                        <div className="jumbotron countdown show end date-show"
                                            data-Date='2021/06/05 16:09:00'>
                                            <div className="running">
                                                <timer>
                                                    <span className="days"></span>:<span className="hours"></span>:<span
                                                        className="minutes"></span><span className="show-text"></span>
                                                </timer>
                                                <div className="break"></div>
                                            </div>
                                            <div className="ended">
                                                <div className="text">حراج به پایان رسید</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-7 textalign-left">
                                        <button type="button" className="btn btn-gray view">مشاهده زنده</button>
                                        <button type="button" className="btn btn-main join">عضویت در حراج</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row-blocks">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="bg-shadow tr-shadow10">
                                    {/* <img src="img/pic7.jpg" width="493" height="621" alt="" /> */}
                                    <img src={img} width="493" height="621" alt="" />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="block-head row">
                                    <div className="col-xl-3 col-sm-4 col-3">
                                        <span className="category-icon online-icon"><span
                                                className="d-none d-md-inline-block">حراج</span> آنلاین</span>
                                    </div>
                                    <div className="col-xl-9 col-sm-8 col-9 textalign-left">
                                        <span className="reminder-icon">یادآوری</span>
                                        <button type="button" className="link-source">
                                            <span><span className="d-none d-sm-inline-block">مشاهده </span>آثار
                                                (<span>10</span>)</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="block-main">
                                    <h5 className="default">هنرهای تزئینی و تصاویر عتیقه ، کتاب</h5>
                                    <div className="block-detail">
                                        <h6 className="default">هنرهای تجسمی</h6>
                                        <h6 className="default gray50">هان گالری</h6>
                                    </div>
                                </div>
                                <div className="block-footer row">
                                    <div className="col-sm-5">
                                        <div className="jumbotron countdown show start date-show"
                                            data-Date='2021/06/05 16:09:00'>
                                            <div className="running">
                                                <timer>
                                                    <span className="days"></span>:<span className="hours"></span>:<span
                                                        className="minutes"></span><span className="show-text"></span>
                                                </timer>
                                                <div className="break"></div>
                                            </div>
                                            <div className="ended">
                                                <div className="text">حراج به پایان رسید</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-7 textalign-left">
                                        <button type="button" className="btn btn-gray view">مشاهده زنده</button>
                                        <button type="button" className="btn btn-main join">عضویت در حراج</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row-blocks">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="bg-shadow tr-shadow10">
                                    {/* <img src="img/pic2.jpg" width="998" height="880" alt="" /> */}
                                    <img src={img} width="998" height="880" alt="" />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="block-head row">
                                    <div className="col-xl-3 col-sm-4 col-3">
                                        <span className="category-icon timed-icon"><span
                                                className="d-none d-md-inline-block">حراج</span>مدت‌دار </span>
                                    </div>
                                    <div className="col-xl-9 col-sm-8 col-9 textalign-left">
                                        <span className="reminder-icon">یادآوری</span>
                                        <button type="button" className="link-source">
                                            <span><span className="d-none d-sm-inline-block">مشاهده </span>آثار
                                                (<span>24</span>)</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="block-main">
                                    <h5 className="default">Tranquility and Deep Silence in Pure Nature</h5>
                                    <div className="block-detail">
                                        <h6 className="default">Modern art</h6>
                                        <h6 className="default gray50">گالری آرتیبیشن</h6>
                                    </div>
                                </div>
                                <div className="block-footer row">
                                    <div className="col-sm-5">
                                        <div className="auction-calender date-show">
                                            <div className="auction-date">
                                                <span className="start-date">7 خرداد</span>
                                                <span className="end-date">9 خرداد</span>
                                            </div>
                                            <div className="auction-time">
                                                <span className="start-time">10</span>
                                                <span className="end-time">22</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-7 textalign-left">
                                        <button type="button" className="btn btn-gray view">مشاهده زنده</button>
                                        <button type="button" className="btn btn-main join">عضویت در حراج</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            
        </div>
    </main>

    <Footer />
</div>
)
}

export default SingleHouseAuctionPage