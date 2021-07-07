import React from 'react'
import logo3 from '../../images/logo-3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe , faPhone , faEnvelope , faMapMarker} from "@fortawesome/free-solid-svg-icons";
function DetailAuctionInfoTabSection() {
    return (
        <div class="tab-pane fade" id="auction2" role="tabpanel"
                     aria-labelledby="profile-tab">
                    <div class="row">
                        <div class="col-lg-8">
                            <p>چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته</p>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</p>
                           <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</p>
                            <div class="vartical-tab">
                                <ul class="nav nav-tabs " id="vt-1" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active" id="vtab1" data-bs-toggle="tab" data-bs-target="#v1"
                                                type="button" role="tab" aria-controls="v1" aria-selected="true">پرداخت
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="vtab2" data-bs-toggle="tab" data-bs-target="#v2"
                                                type="button"
                                                role="tab" aria-controls="v2" aria-selected="false">حمل و نقل
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="vtab3" data-bs-toggle="tab" data-bs-target="#v3"
                                                type="button"
                                                role="tab" aria-controls="v3" aria-selected="false"> شرایط استفاده
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="vtab4" data-bs-toggle="tab" data-bs-target="#v4"
                                                type="button"
                                                role="tab" aria-controls="v4" aria-selected="false">سایر
                                        </button>
                                    </li>
                                </ul>
                                <div class="tab-content" id="vt-1Content">
                                    <div class="tab-pane fade show active" id="v1" role="tabpanel" aria-labelledby="vtab1">
                                        <p>رای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد</p>
                                        <h5 class="default">نحوه‌ی پرداخت</h5>
                                        <p>رای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                                    باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان
                                    را می طلبد</p>
                                    </div>
                                    <div class="tab-pane fade" id="v2" role="tabpanel" aria-labelledby="vtab2">
                                        <p>رای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد</p>
                                        <h5 class="default">حمل و نقل</h5>
                                        <p>رای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                                    باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان
                                    را می طلبد</p>
                                    </div>
                                    <div class="tab-pane fade" id="v3" role="tabpanel" aria-labelledby="vtab3">
                                        <p>رای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد</p>
                                        <h5 class="default">شرایط استفاده</h5>
                                        <p>رای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                                    باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان
                                    را می طلبد</p>
                                    </div>
                                    <div class="tab-pane fade" id="v4" role="tabpanel" aria-labelledby="vtab3">
                                        <p>رای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                                    باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان
                                    را می طلبد</p>
                                        <h5 class="default">سایر</h5>
                                        <p>رای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                                    باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان
                                    را می طلبد</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="auction-gallery-info">
                                <div class="ah-left">
                                    <div class="h-block-img">
                                        {/* <img src="img/logo-3.png" width="159" height="159" */}
                                        <img src={logo3} width="159" height="159"
                                             alt="گالری آرتیبیشن"/>
                                    </div>
                                    <div class="detail-ahm">
                                        <a href="#" class="ah-link"><h3 class="default">گالری آرتیبیشن</h3></a>
                                        <a href="#" class="ah-link"><h3 class="default">گالری آرتیبیشن</h3></a>
                                        <button type="button" class="btn-follow">دنبال کردن</button>
                                    </div>
                                </div>

                                <div className="ah-block-all-info">

                                    <div className="d-flex mt-3">
                                        <FontAwesomeIcon className="mx-2" icon={faGlobe}/>

                                        <a href="#" ><p className="text-secondary">www.sarebangallery.com</p></a>
                                    </div>

                                    <div className="d-flex my-2">
                                        <FontAwesomeIcon className="mx-2" icon={faEnvelope}/>
                                        <a href="mailto: Info@sarebangallery.com"
                                            className="all-info text-secondary"><p className="mb-0">Info@sarebangallery.com</p></a>
                                    </div>

                                    <div className="d-flex">
                                        <FontAwesomeIcon className="mx-2" icon={faPhone}/>
                                        {/* <a href="+982144258856" className="info-tel all-info">+98 21 4425 8856</a> */}
                                        <p className="all-info text-secondary mt-0" >+98 21 4425 8856</p>
                                    </div>

                                    <div className="d-flex">
                                        <FontAwesomeIcon className="mx-2" icon={faMapMarker}/>
                                        <address className="">
                                            <p><span className="province">تهران، </span><span className="text-secondary">میدان هویزه، پلاک 103</span></p>
                                        </address>
                                    </div>
                                    </div>



                                {/* <div class="ah-block-all-info">
                                    <a href="#" class="link-info all-info">www.sarebangallery.com</a>
                                    <a href="mailto: Info@sarebangallery.com"
                                       class="all-info mail-info">Info@sarebangallery.com</a>
                                    <a href="+982144258856" class="info-tel all-info">+98 21 4425 8856</a>
                                    <address class="all-info"><span class="province">تهران، </span>میدان هویزه، پلاک 103
                                    </address>
                                </div> */}
                                <ul class="social">
                                    <li><a href="#" id="facebook"></a></li>
                                    <li><a href="#" id="instagram"></a></li>
                                    <li><a href="#" id="telegram"></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

    )
}

export default DetailAuctionInfoTabSection
