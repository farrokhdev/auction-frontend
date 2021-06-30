import React from 'react'
import HeaderPanel from '../../components/HeaderPanel';
import PanelSidebar from '../../components/PanelSidebar';
import {Link} from "react-router-dom";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function UserPanelCreateAuctionsOnlineAuctionBuyerValidation() {
    return (
        <div>
              <HeaderPanel/>
          <div className="panel-main">
          <PanelSidebar/>  
          <div className="panel-body">
            <div className="panel-container newauction">
                <div className="wizard leftalign">
                    <ul className="wizard-list">
                        <li className="done">
                            <span className="d-none d-md-inline-block">اطلاعات پایه</span>
                            <span className="wizard-mobile d-md-none">1</span>
                        </li>
                        <li className="done">
                            <span className="d-none d-md-inline-block">تاریخ حراج</span>
                            <span className="wizard-mobile d-md-none">2</span>
                        </li>
                        <li className="done">
                            <span className="d-none d-md-inline-block">بازه پیشنهادات</span>
                            <span className="wizard-mobile d-md-none">3</span>
                        </li>
                        <li className="done">
                            <span className="d-none d-md-inline-block">واحد پول</span>
                            <span className="wizard-mobile d-md-none">4</span>
                        </li>
                        <li className="current">
                            <span className="d-none d-md-inline-block">اعتبارسنجی خریداران</span>
                            <span className="wizard-mobile d-md-none">5</span>
                        </li>
                        <li>
                            <span className="d-none d-md-inline-block">شرایط</span>
                            <span className="wizard-mobile d-md-none">6</span>
                        </li>
                    </ul>
                </div>
                <div className="col-xxxxl-8">
                    <div className="row">
                        <div className="col-12">
                            <div className="form-check sm-mrgt35">
                                <input className="form-check-input" type="checkbox" value=""
                                       id="checkbox41"/>
                                <label className="form-check-label" for="checkbox41">
                                    اعتبارسنجی توسط گالری آرتیبیشن
                                    <span className="form-check-txt">اگر می خواهید سایت مسئول مراحل احراز هویت باشد ، این گزینه را فعال کنید</span>
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-check sm-mrgt35">
                                <input className="form-check-input" type="checkbox" value=""
                                       id="checkbox42"/>
                                <label className="form-check-label" for="checkbox42">
                                    ارسال دعوتنامه
                                    <span className="form-check-txt">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد</span>
                                </label>
                            </div>
                            <button type="button" className="btn-outline-pink">آپلود لیست</button>
                        </div>
                        <div className="col-12">
                            <div className="form-check sm-mrgt35">
                                <input className="form-check-input" type="checkbox" value=""
                                       id="checkbox43"/>
                                <label className="form-check-label" for="checkbox43">
                                   افزایش اعتبار
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col">
                                    <div className="input-group">
                                        <label className="default-lable">کمترین قیمت</label>
                                        <input type="text" className="default-input" placeholder="کمترین قیمت مورد نظر را وارد نمایید."/>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="input-group">
                                        <label className="default-lable">بیشترین قیمت</label>
                                        <input type="text" className="default-input" placeholder="بیشترین قیمت را وارد نمایید."/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="input-group">
                                <label className="default-lable">واحد افزایش</label>
                                <input type="text" className="default-input" placeholder="واحد افزایش را انتخاب نمایید."/>
                                <span className="unit">تومان</span>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="add-row"><FontAwesomeIcon icon={faPlus}/> افزودن رکورد جدید</button>
                    <div className="col-12">
                        <div className="form-check sm-mrgt35">
                            <input className="form-check-input" type="checkbox" value=""
                                   id="checkbox53"/>
                            <label className="form-check-label" for="checkbox53">
                                توصیه‌نامه
                            </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-check sm-mrgt35">
                            <input className="form-check-input" type="checkbox" value=""
                                   id="checkbox63"/>
                            <label className="form-check-label" for="checkbox63">
                                خریداران قبلی
                            </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-check sm-mrgt35">
                            <input className="form-check-input" type="checkbox" value=""
                                   id="checkbox44"/>
                            <label className="form-check-label" for="checkbox44">
                                سایر
                                <span className="form-check-txt">اگر می خواهید سایت مسئول مراحل احراز هویت باشد ، این گزینه را فعال کنید</span>
                            </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="input-group">
                            <label className="default-lable">توضیحات</label>
                            <textarea rows="3" className="default-input"
                                      placeholder="توضیحات را وارد نمایید."></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="button-group">
                                <Link to="/user-panel-create-auctions-online-auction-currency">
                                <button type="button" className="btn-gray">بازگشت</button>
                                </Link>
                                <Link to="/user-panel-create-auctions-online-auction-conditions">
                                <button type="button" className="btn-default">ادامه</button>
                                </Link>
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

export default UserPanelCreateAuctionsOnlineAuctionBuyerValidation; 