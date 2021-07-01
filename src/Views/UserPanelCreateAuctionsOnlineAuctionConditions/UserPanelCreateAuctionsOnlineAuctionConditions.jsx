import React from 'react';
import HeaderPanel from '../../components/HeaderPanel';
import PanelSidebar from '../../components/PanelSidebar';
import {Link} from "react-router-dom";
function UserPanelCreateAuctionsOnlineAuctionConditions() {
    return (
        <div>
             <HeaderPanel/>
           <div className="panel-main">
          <PanelSidebar/>
          <div class="panel-body">
            <div class="panel-container newauction">
                <div class="wizard leftalign">
                    <ul class="wizard-list">
                        <li class="done">
                            <span class="d-none d-md-inline-block">اطلاعات پایه</span>
                            <span class="wizard-mobile d-md-none">1</span>
                        </li>
                        <li class="done">
                            <span class="d-none d-md-inline-block">تاریخ حراج</span>
                            <span class="wizard-mobile d-md-none">2</span>
                        </li>
                        <li class="done">
                            <span class="d-none d-md-inline-block">بازه پیشنهادات</span>
                            <span class="wizard-mobile d-md-none">3</span>
                        </li>
                        <li class="done">
                            <span class="d-none d-md-inline-block">واحد پول</span>
                            <span class="wizard-mobile d-md-none">4</span>
                        </li>
                        <li class="done">
                            <span class="d-none d-md-inline-block">اعتبارسنجی خریداران</span>
                            <span class="wizard-mobile d-md-none">5</span>
                        </li>
                        <li class="current">
                            <span class="d-none d-md-inline-block">شرایط</span>
                            <span class="wizard-mobile d-md-none">6</span>
                        </li>
                    </ul>
                </div>
                <div class="col-xxxxl-8">
                    <div class="row">
                        <div class="col-12">
                            <div class="form-check sm-mrgt35">
                                <input class="form-check-input" type="checkbox" value=""
                                       id="checkbox41"/>
                                <label class="form-check-label" for="checkbox41">
                                    پرداخت آنلاین
                                    <span class="form-check-txt">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</span>
                                </label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="input-group">
                                <label class="default-lable">نحوه‌ی پرداخت</label>
                                <textarea rows="3" class="default-input"
                                          placeholder="شرایط پرداخت را وارد نمایید."></textarea>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="input-group">
                                <label class="default-lable">قوانین بازگشت</label>
                                <textarea rows="3" class="default-input"
                                          placeholder="قوانین بازگشت را وارد نمایید."></textarea>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="input-group">
                                <label class="default-lable">حمل ونقل</label>
                                <textarea rows="3" class="default-input"
                                          placeholder="نحوه‌ی انتقال اثر را وارد نمایید."></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="button-group">
                                <Link to="/panel-auctions-buyervalidation">
                                <button type="button" class="btn-gray">بازگشت</button>
                                </Link>

                                <button type="button" class="btn-default">ثبت نهایی</button>
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

export default UserPanelCreateAuctionsOnlineAuctionConditions; 