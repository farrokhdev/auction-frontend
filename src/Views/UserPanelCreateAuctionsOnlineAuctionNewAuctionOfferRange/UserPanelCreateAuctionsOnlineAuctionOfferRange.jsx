import React from 'react';
import HeaderPanel from '../../components/HeaderPanel';
import PanelSidebar from '../../components/PanelSidebar';
import {Link} from "react-router-dom";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function UserPanelCreateAuctionsOnlineAuctionOfferRange() {
    return (
        <div dir="rtl">
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
                        <li className="current">
                            <span className="d-none d-md-inline-block">بازه پیشنهادات</span>
                            <span className="wizard-mobile d-md-none">3</span>
                        </li>
                        <li>
                            <span className="d-none d-md-inline-block">واحد پول</span>
                            <span className="wizard-mobile d-md-none">4</span>
                        </li>
                        <li>
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
                        <div className="col-md-6">
                            <div className="input-group">
                                <label className="default-lable">واحد پول</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>تومان</option>
                                    <option value="1">تومان</option>
                                    <option value="2">تومان</option>
                                    <option value="3">تومان</option>
                                    <option value="3">تومان</option>
                                </select>
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
                    <button type="button" className="add-row"><FontAwesomeIcon icon={faPlus} /> افزودن رکورد جدید</button>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="input-group">
                                <label className="default-lable">بازه زمانی پیشنهاد</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>20 ثانیه</option>
                                    <option selected>30 ثانیه</option>
                                    <option selected>40 ثانیه</option>
                                    <option selected>50 ثانیه</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="form-check sm-mrgt35">
                                <input className="form-check-input" type="checkbox" value=""
                                       id="checkbox41"/>
                                <label className="form-check-label" for="checkbox41">
                                    تمدید حراج
                                    <span className="form-check-txt">این گزینه را فعال کنید تا به طور خودکار حراج را با ارائه پیشنهاد در آخرین لحظه تمدید کنید.</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="button-group">
                                <Link to="/panel-auctions-date">
                                <button type="button" className="btn-gray">بازگشت</button>
                                </Link>
                                <Link to="/panel-auctions-currency">
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

export default UserPanelCreateAuctionsOnlineAuctionOfferRange; 