import React from 'react';
import HeaderPanel from '../../components/HeaderPanel';
import PanelSidebar from '../../components/PanelSidebar';
import {Link} from "react-router-dom";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function UserPanelCreateAuctionsOnlineAuctionDate() {
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
                        <li className="current">
                            <span className="d-none d-md-inline-block">تاریخ حراج</span>
                            <span className="wizard-mobile d-md-none">2</span>
                        </li>
                        <li>
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
                        <div className="col-12">
                            <div className="form-check sm-mrgt35">
                                <input className="form-check-input" type="checkbox"  value=""
                                       id="checkbox41"/>
                                <label className="form-check-label" for="checkbox41">
                                    حراج در روزهای آتی برگزار می‌شود.
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="input-group">
                                <label className="default-lable">تاریخ حراج<span className="auction-num">#1</span></label>
                                <input type="date" className="default-input" placeholder="تاریخ شروع را وارد نمایید."/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="input-group">
                                <label className="default-lable">شروع از شماره لت</label>
                                <input type="text" className="default-input" placeholder="شماره لت را وارد نمایید." value="101"/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="input-group">
                                <label className="default-lable">تا شماره لت</label>
                                <input type="text" className="default-input" placeholder="شماره لت را وارد نمایید." value="200"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="input-group">
                                <label className="default-lable">تاریخ حراج<span className="auction-num">#2</span></label>
                                <input type="date" className="default-input" placeholder="تاریخ شروع را وارد نمایید."/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="input-group">
                                <label className="default-lable">شروع از شماره لت</label>
                                <input type="text" className="default-input" placeholder="شماره لت را وارد نمایید."/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="input-group">
                                <label className="default-lable">تا شماره لت</label>
                                <input type="text" className="default-input" placeholder="شماره لت را وارد نمایید."/>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="add-row"><FontAwesomeIcon icon={faPlus} /> افزودن تاریخ جدید</button>
                    <div className="row">
                        <div className="col-12">
                            <div className="button-group">
                                <Link to="/user-panel-create-auctions-basic-information">
                                <button type="button" className="btn-gray">بازگشت</button>
                                </Link>
                                <Link to="/user-panel-create-auctions-online-auction-offer-range">
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

export default UserPanelCreateAuctionsOnlineAuctionDate; 