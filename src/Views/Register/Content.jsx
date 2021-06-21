import React from "react";
import { Link } from "react-router-dom";

function Content() {
  return (
    <>
      <main className="innercontent" id="buyer-registration">
        <div className="container innercontainer">
          <div className="row sm-mrgb50">
            <div className="col-12">
              <div className="main-title d-inline-flex">
                <h2 className="default titr">ثبت نام خریداران</h2>
                <ul className="breadcrumb-cs">
                  <li>
                    <Link to="/">صفحه اصلی</Link>
                  </li>
                  <li className="active">ثبت نام خریداران</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="wizard">
              <ul className="wizard-list">
                <li className="current">
                  <span className="d-none d-md-inline-block">اطلاعات شخصی</span>
                  <span className="wizard-mobile d-md-none">1</span>
                </li>
                <li>
                  <span className="d-none d-md-inline-block">اطلاعات مالی</span>
                  <span className="wizard-mobile d-md-none">2</span>
                </li>
                <li>
                  <span className="d-none d-md-inline-block">
                    آثارمورد علاقه
                  </span>
                  <span className="wizard-mobile d-md-none">3</span>
                </li>
                <li>
                  <span className="d-none d-md-inline-block">کیف پول</span>
                  <span className="wizard-mobile d-md-none">4</span>
                </li>
                <li>
                  <span className="d-none d-md-inline-block">معرف</span>
                  <span className="wizard-mobile d-md-none">5</span>
                </li>
                <li>
                  <span className="d-none d-md-inline-block">قرارداد</span>
                  <span className="wizard-mobile d-md-none">6</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="container container-form">
            <div className="row">
              <div className="col-md-6">
                <div className="input-group">
                  <label className="default-lable">نام</label>
                  <input
                    type="text"
                    className="default-input"
                    placeholder="نام خود را وارد نمایید."
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group">
                  <label className="default-lable">نام خانوادگی</label>
                  <input
                    type="text"
                    className="default-input"
                    placeholder="نام خانوادگی خود را وارد نمایید."
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group approved">
                  <label className="default-lable">شماره همراه</label>
                  <input
                    type="tel"
                    className="default-input"
                    placeholder="شماره موبایل مورد نظر را وارد نمایید."
                    value="+98 912 506 3365"
                  />
                  <span className="approved input-state">تایید</span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group notapproved">
                  <label className="default-lable">ایمیل</label>
                  <input
                    type="email"
                    className="default-input"
                    placeholder="ایمیل خود را وارد نمایید."
                    value="Nima.heirdari@gmail.com"
                  />
                  <span className="input-note">
                    برای تایید ایمیل خود اینجا کلیک کنید.
                  </span>
                  <span className="notapproved input-state">تایید نشده</span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group">
                  <label className="default-lable">کد ملی</label>
                  <input
                    type="text"
                    className="default-input"
                    placeholder="کد ملی خود را وارد نمایید."
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group">
                  <label className="default-lable">کدپستی</label>
                  <input
                    type="text"
                    className="default-input"
                    placeholder="کد پستی خود را وارد نمایید."
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="input-group">
                  <label className="default-lable">آدرس</label>
                  <textarea
                    rows="3"
                    className="default-input"
                    placeholder="آدرس خود را وارد نمایید."
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="button-group">
              <Link to="/financial-information">
                <button type="button" className="btn-default">
                  ادامه
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Content;
