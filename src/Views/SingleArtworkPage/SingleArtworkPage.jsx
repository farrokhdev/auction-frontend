import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";
import img from '../../images/img-1.jpg'
function SigningContract() {
  return (
    <div dir="rtl">
      <Header />
      <main className="innercontent" id="oneartwork">
    <div className="container innercontainer">
        <div className="row sm-mrgb50">
            <div className="col-12">
                <div className="d-inline-flex main-title">
                    <h2 className="default titr">از سری سقاخانه</h2>
                    <div className="d-block">
                        <ul className="breadcrumb-cs ">
                            <li><Link to="/">صفحه اصلی</Link></li>
                            <li><Link >خانه‌های حراج</Link></li>
                            <li><Link >حراج تهران</Link></li>
                            <li><Link >کالکشن 7</Link></li>
                            <li className="active">از سری سقاخانه</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6">
                <div id="inner-artwork" className="carousel slide" data-bs-ride="carousel" data-bs-touch="false">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#inner-artwork" data-bs-slide-to="0" className="active"
                                aria-current="true" aria-label="Slide 1">
                            <img src={img} width="547" height="547" className="img-fluid d-xl-block" alt="..."/>
                        </button>
                        <button type="button" data-bs-target="#inner-artwork" data-bs-slide-to="1" aria-label="Slide 2">
                            <img src={img} width="547" height="547" className="d-xl-block img-fluid" alt="..."/>
                        </button>
                        <button type="button" data-bs-target="#inner-artwork" data-bs-slide-to="2" aria-label="Slide 3">
                            <img src={img} width="547" height="547" className="d-xl-block img-fluid" alt="..."/>
                        </button>
                        <button type="button" data-bs-target="#inner-artwork" data-bs-slide-to="3" aria-label="Slide 4">
                            <img src={img} width="547" height="547" className="d-xl-block img-fluid" alt="..."/>
                        </button>
                        <button type="button" data-bs-target="#inner-artwork" data-bs-slide-to="4" aria-label="Slide 5">
                            <img src={img} width="547" height="547" className="d-xl-block img-fluid" alt="..."/>
                        </button>
                        <button type="button" data-bs-target="#inner-artwork" data-bs-slide-to="5" aria-label="Slide 6">
                            <img src={img} width="547" height="547" className="d-xl-block img-fluid" alt="..."/>
                        </button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={img} width="547" height="547" className="d-block img-fluid" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={img} width="547" height="547" className="d-block img-fluid" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={img} width="547" height="547" className="d-block img-fluid" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={img} width="547" height="547" className="d-block img-fluid" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={img} width="547" height="547" className="d-block img-fluid" alt="..."/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="detail-block">
                    <div className="detail-block-header">
                        <a href="#" className="btn-lot prev"><span className="d-none d-md-block">لت قبلی</span></a>
                        <div className="search-input">
                            <input type="text" className="default-input" placeholder="شماره لت مورد نظر را وارد نمایید."/>
                            <button type="button" className="btn-search"></button>
                        </div>
                        <a href="#" className="btn-lot next"><span className="d-none d-md-block">لت بعدی</span></a>
                    </div>
                    <div className="detail-block-body">
                        <div className="bg-shadow bl-shadow20">
                            <div className="detail-info">
                                <div className="detail-head">
                                    <span className="category-icon live-icon"><span className="d-none d-md-inline-block">حراج</span> زنده</span>
                                    <button type="button" className="btn-bookmark">نشان کردن</button>
                                </div>
                                <div className="detail-artwork">
                                    <div className="d-artwork-left">
                                        <a href="#" className="d-info artist"><h6 className="default">صادق ادهم</h6></a>
                                        <a href="#" className="d-info category"><h6 className="default">هنر مدرن و معاصر</h6></a>
                                        <a href="#" className="d-info gallery"><h6 className="default">گالری آرتیبیشن</h6>
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
                                <div className="detail-placebid general-bid">
                                    <div className="general-bid-block">
                                        <div className="search-input">
                                            <input type="text" className="default-input"
                                                   placeholder="حداکثر پیشنهاد خود را وارد نمایید."/>
                                            <span className="unit">تومان</span>
                                        </div>
                                        <button type="button" className="btn-lightpink">ثبت</button>
                                    </div>
                                    <div className="general-bid-block">
                                        <div className="number-input">
                                            <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"></button>
                                            <input className="default-inputquantity" min="0" name="quantity" type="number"
                                                   max="100" step="10" placeholder="انتخاب پیشنهاد"/>
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
                                            <img src={img} width="159" height="159"
                                                 alt="گالری آرتیبیشن" className="img-fluid"/>
                                        </div>
                                        <div className="detail-ahm">
                                            <a href="#" className="ah-link"><h3 className="default">گالری آرتیبیشن</h3></a>
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
        <div className="row">
            <ul className="nav nav-tabs justify-content-star main-tab" id="da-tab"
                role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" data-bs-toggle="tab"
                            data-bs-target="#detail-artwork1"
                            type="button" role="tab" aria-controls="catsearch1" aria-selected="true">درباره اثر
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" data-bs-toggle="tab"
                            data-bs-target="#detail-artwork2"
                            type="button" role="tab" aria-controls="tab2" aria-selected="false">جزئیات حراج
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" data-bs-toggle="tab"
                            data-bs-target="#detail-artwork3"
                            type="button" role="tab" aria-controls="tab3" aria-selected="false">قوانین حراج
                    </button>
                </li>
            </ul>
            <div className="tab-content mrgt50" id="da-content">
                <div className="tab-pane fade show active" id="detail-artwork1" role="tabpanel"
                     aria-labelledby="home-tab">
                    <table className="table-main" id="about-artwork">
                        <tbody>
                        <tr>
                            <td>امضا</td>
                            <td>صادق ادهم 1368-1395 (پایین، راست)</td>
                        </tr>
                        <tr>
                            <td>دسته‌بندی</td>
                            <td>مجسمه سازی</td>
                        </tr>
                        <tr>
                            <td>ابعاد</td>
                            <td>50 * 70 cm</td>
                        </tr>
                        <tr>
                            <td>تاریخ</td>
                            <td>1989.08.09</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="tab-pane fade" id="detail-artwork2" role="tabpanel"
                     aria-labelledby="profile-tab">
                    <div className="row-blocks">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="bg-shadow tl-shadow10">
                                    <img src={img} width="500" height="500" alt=""/>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="block-head row">
                                    <div className="col-xl-3 col-sm-4 col-3">
                                        <span className="category-icon live-icon"><span
                                                    className="d-none d-md-inline-block">حراج</span> زنده</span>
                                    </div>
                                    <div className="col-xl-9 col-sm-8 col-9 textalign-left">
                                        <span className="reminder-icon">یادآوری</span>
                                        <button type="button" className="link-source">
                                        <span><span
                                                className="d-none d-sm-inline-block">مشاهده </span>آثار (<span>25</span>)</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="block-main">
                                    <h5 className="default">فقط بصورت آنلاین زندگی کنید ، کتابهای عتیقه ، هنرهای تزئینی و تصاویر</h5>
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
                </div>
                <div className="tab-pane fade" id="detail-artwork3" role="tabpanel"
                     aria-labelledby="contact-tab">
                    <p>چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته</p>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</p>
                   <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</p>
                    <div className="vartical-tab">
                        <ul className="nav nav-tabs " id="vt-1" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="vtab1" data-bs-toggle="tab" data-bs-target="#v1"
                                        type="button" role="tab" aria-controls="v1" aria-selected="true">پرداخت
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="vtab2" data-bs-toggle="tab" data-bs-target="#v2"
                                        type="button"
                                        role="tab" aria-controls="v2" aria-selected="false">حمل و نقل
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="vtab3" data-bs-toggle="tab" data-bs-target="#v3"
                                        type="button"
                                        role="tab" aria-controls="v3" aria-selected="false"> شرایط استفاده
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="vtab4" data-bs-toggle="tab" data-bs-target="#v4"
                                        type="button"
                                        role="tab" aria-controls="v4" aria-selected="false">سایر
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content" id="vt-1Content">
                            <div className="tab-pane fade show active" id="v1" role="tabpanel" aria-labelledby="vtab1">
                                <p>رای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد</p>
                                <h5 className="default">نحوه‌ی پرداخت</h5>
                                <p>رای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                                    باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان
                                    را می طلبد</p>
                            </div>
                            <div className="tab-pane fade" id="v2" role="tabpanel" aria-labelledby="vtab2">
                                <p>رای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد</p>
                                <h5 className="default">حمل و نقل</h5>
                                <p>رای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                                    باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان
                                    را می طلبد</p>
                            </div>
                            <div className="tab-pane fade" id="v3" role="tabpanel" aria-labelledby="vtab3">
                                <p>رای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد</p>
                                <h5 className="default">شرایط استفاده</h5>
                                <p>رای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                                    باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان
                                    را می طلبد</p>
                            </div>
                            <div className="tab-pane fade" id="v4" role="tabpanel" aria-labelledby="vtab3">
                                <p>رای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                                    باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان
                                    را می طلبد</p>
                                <h5 className="default">سایر</h5>
                                <p>رای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                                    باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان
                                    را می طلبد</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
                        <div className="artwork-block">
                            <div className="artwork-img">
                                <img src={img} width="317" height="280" alt="" className="img-fluid"/>
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
                                <img src={img} width="998" height="880" alt="" className="img-fluid"/>
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
                                <img src={img} width="317" height="280" alt="" className="img-fluid"/>
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
                                <img src={img} width="317" height="280" alt="" className="img-fluid"/>
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
                                <img src={img} width="998" height="880" alt="" className="img-fluid"/>
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
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</main>

      <Footer />
    </div>
  );
}

export default SigningContract;
