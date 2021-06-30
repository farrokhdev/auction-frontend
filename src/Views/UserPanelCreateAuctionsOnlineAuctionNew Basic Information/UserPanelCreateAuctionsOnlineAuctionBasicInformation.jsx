import React from 'react';
import HeaderPanel from '../../components/HeaderPanel';
import PanelSidebar from '../../components/PanelSidebar';
import {Link} from "react-router-dom";

function UserPanelCreateAuctionsOnlineAuctionBasicInformation() {

    return (       
        <div>
          <HeaderPanel/>
          <div className="panel-main">

          <PanelSidebar/>  
          <div className="panel-body">
            <div className="panel-container newauction">
                <div className="wizard leftalign">
                    <ul className="wizard-list">
                        <li className="current">
                            <span className="d-none d-md-inline-block">اطلاعات پایه</span>
                            <span className="wizard-mobile d-md-none">1</span>
                        </li>
                        <li>
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
                        <div className="col-md-6">
                            <div className="input-group">
                                <label className="default-lable">نوع حراج</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>آنلاین</option>
                                    <option value="1">زنده</option>
                                    <option value="2">مدت‌دار</option>
                                    <option value="3">اولین پیشنهاد</option>
                                    <option value="3">دومین پیشنهاد</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="input-group">
                                <label className="default-lable">نام حراج</label>
                                <input type="text" className="default-input" placeholder="نام حراج را وارد نمایید."/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div class="col-md-6">
                                    <div class="input-group">
                                        <label class="default-lable">تاریخ شروع</label>
                                        <input type="date" class="default-input" placeholder="تاریخ شروع را وارد نمایید."/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="input-group">
                                        <label class="default-lable">تاریخ پایان</label>
                                        <input type="date" class="default-input" placeholder="تاریخ و زمان پایان را وارد نمایید."/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value=""
                                       id="checkboxphysicalex" />
                                <label class="form-check-label" for="checkboxphysicalex">
                                    نمایش در نمایشگاه فیزیکی
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row" id="physical-ex" style={{display:"block"}}>
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="input-group">
                                        <label class="default-lable">تاریخ شروع نمایشگاه</label>
                                        <input type="date" class="default-input" placeholder="تاریخ شروع را وارد نمایید."/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="input-group">
                                        <label class="default-lable">تاریخ پایان نمایشگاه</label>
                                        <input type="date" class="default-input" placeholder="تاریخ و زمان پایان را وارد نمایید."/>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="input-group">
                                        <label class="default-lable">آدرس</label>
                                        <textarea rows="3" class="default-input"
                                                  placeholder="آدرس را وارد نمایید."></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="button-group">
                            <button type="button" class="btn-gray">لغو</button>
                            <Link to="/user-panel-create-auctions-date">
                            <button type="button" class="btn-default">ادامه</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        
    )
}

export default UserPanelCreateAuctionsOnlineAuctionBasicInformation; 