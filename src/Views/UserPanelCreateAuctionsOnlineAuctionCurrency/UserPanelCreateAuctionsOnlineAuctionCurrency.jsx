import React from 'react';
import HeaderPanel from '../../components/HeaderPanel';
import PanelSidebar from '../../components/PanelSidebar';
import {Link} from "react-router-dom";

function UserPanelCreateAuctionsOnlineAuctionCurrency() {
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
                        <li className="current">
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
                                    نرخ تبدیل ارز روزانه
                                </label>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="input-group">
                                <label className="default-lable">نرخ تبدیل  از ریال به دلار</label>
                                <input type="text" className="default-input" placeholder="نرخ تبدیل را وارد نمایید."/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="button-group">
                                <Link to="/user-panel-create-auctions-online-auction-offer-range">
                                <button type="button" className="btn-gray">بازگشت</button>
                                </Link>
                                <Link to="/user-panel-create-auctions-online-auction-buyer-validation">
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

export default UserPanelCreateAuctionsOnlineAuctionCurrency; 