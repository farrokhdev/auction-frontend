import React from 'react';
import img from '../../images/img-1.jpg';
import momentJalaali from 'moment-jalaali';


function DetailAboutArtworkInfo({artwork}) {
    return (
        
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
                        {/* <tr>
                            <td>امضا</td>
                            <td>صادق ادهم 1368-1395 (پایین، راست)</td>
                        </tr> */}
                        <tr>
                            <td>دسته‌بندی</td>
                            <td>{artwork?.category[0]?.title}</td>
                        </tr>
                        <tr>
                            <td>ابعاد</td>
                            {/* <td>50 * 70 cm</td> */}
                            <td>{`${artwork?.height ? artwork?.height + ' * ' : ''} ${artwork?.length ? artwork?.width : ''} * ${artwork?.length ? artwork?.width : ''} cm`}</td>
                        </tr>
                        <tr>
                            <td>تاریخ</td>
                            <td>{artwork?.creation_date ? momentJalaali(artwork?.creation_date).format(`jYYYY/jMM/jDD`) : ''}</td>
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
    )
}

export default DetailAboutArtworkInfo;
