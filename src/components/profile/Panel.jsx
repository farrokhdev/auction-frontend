import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faGavel,
  faPlusCircle,
  faHeart,
  faBell,
  faShoppingCart,
  faWallet,
  faDollarSign,
  faCommentAlt,
  faEnvelope,
  faCreditCard,
  faSignOutAlt,
  faCheckCircle,
  faTimesCircle,
  faExclamationCircle,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.css";

import logowhite from "../../images/logo-white.png";
import loginactive from "../../images/login-active.png";
import { Link } from "react-router-dom";

function Panel() {
  return (
    <div dir="rtl">
      <header>
        <div className="panel-header">
          <div className="panel-brand">
            <Link href="/">
              <img src={logowhite} width="139" height="30" alt="اسمارت آکشن" />
            </Link>
          </div>
          <div className="panel-head">
            <div className="d-block d-lg-none col-2 ">
              <img
                src="img/auction-white.svg"
                width="16"
                height="16"
                alt=""
                className="panel-menu"
              />
            </div>
            <div className="panel-title col-8">
              <h4 className="default">پروفایل</h4>
            </div>
            <div className="panel-info col-lg-4 col-2">
              <ul className="navbar-nav flex-row-reverse">
                <li className="nav-item">
                  <Link className="nav-link text-dark" to="/">
                    EN
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark" to="/">
                    <img
                      src={loginactive}
                      width="30"
                      height="30"
                      alt="ورود به اسمارت آکشن"
                    />
                    <span className="d-none d-lg-inline-block ">
                      نیما حیدری
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="panel-main">
          <div className="panel-sidebar">
            <Link to="/" className="d-md-none d-block">
              <img
                src="img/logo-white.png"
                width="139"
                height="30"
                alt="اسمارت آکشن"
              />
            </Link>
            <ul className="panel-list">
              <li className="active">
                <Link to="/panel-profile">
                  <FontAwesomeIcon icon={faPen} /> پروفایل
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faGavel} /> حراج‌های من
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faPlusCircle} /> حراج‌های ساخته‌شده
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faDollarSign} /> پیشنهادهای من
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faHeart} /> علاقه‌مندی‌ها
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faBell} /> یادآوری‌ها
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faShoppingCart} /> خریدهای من
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faWallet} /> کیف پول
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faWallet} /> مشاوره فروش
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faCommentAlt} /> پیشنهاد فروش
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faEnvelope} /> پیام‌ها
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faCreditCard} /> اطلاعات مالی
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faSignOutAlt} /> خروج
                </Link>
              </li>
            </ul>
          </div>
          <div className="panel-body">
            <div className="panel-container">
              <div className="alert-container col-md-4">
                <div className="alert alert-success" role="alert">
                  <FontAwesomeIcon icon={faCheckCircle} />
                  رمز عبور با موفقیت تغییر یافت!
                </div>
                <div className="alert alert-danger" role="alert">
                  <FontAwesomeIcon icon={faTimesCircle} />
                  کد ورود اشتباه است!
                </div>
                <div className="alert alert-warning" role="alert">
                  <FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>
                  کد حداقل باید شامل 6 کارکتر باشد.
                </div>
              </div>
              <div className="col-xxl-8">
                <ul
                  className="nav nav-tabs justify-content-star main-tab"
                  id="profile-tab"
                  role="tablist"
                >
                  <li className="nav-item " role="presentation">
                    <button
                      className="nav-link active"
                      id="tab-11"
                      data-bs-toggle="tab"
                      data-bs-target="#profiletab1"
                      type="button"
                      role="tab"
                      aria-controls="profiletab1"
                      aria-selected="true"
                    >
                      ویرایش پروفایل
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="tab-21"
                      data-bs-toggle="tab"
                      data-bs-target="#profiletab2"
                      type="button"
                      role="tab"
                      aria-controls="profiletab2"
                      aria-selected="false"
                    >
                      تغییر رمز عبور
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="tab-31"
                      data-bs-toggle="tab"
                      data-bs-target="#profiletab3"
                      type="button"
                      role="tab"
                      aria-controls="profiletab3"
                      aria-selected="false"
                    >
                      ویرایش شماره همراه
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="tab-41"
                      data-bs-toggle="tab"
                      data-bs-target="#profiletab4"
                      type="button"
                      role="tab"
                      aria-controls="profiletab4"
                      aria-selected="false"
                    >
                      ویرایش ایمیل
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="profile-tab-content">
                  <div
                    className="tab-pane fade  show active"
                    id="profiletab1"
                    role="tabpanel"
                    aria-labelledby="profiletab1-tab"
                  >
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
                        <div className="input-group">
                          <label className="default-lable">شماره همراه</label>
                          <input
                            type="tel"
                            className="default-input"
                            placeholder="شماره موبایل مورد نظر را وارد نمایید."
                            value="+98 912 506 3365"
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-group ">
                          <label className="default-lable">ایمیل</label>
                          <input
                            type="email"
                            className="default-input"
                            placeholder="ایمیل خود را وارد نمایید."
                            value="Nima.heirdari@gmail.com"
                            disabled
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
                    <div className="row">
                      <div className="col-12 button-group">
                        <button type="button" className="btn-default">
                          ثبت
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profiletab2"
                    role="tabpanel"
                    aria-labelledby="profiletab2-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-group ">
                          <label className="default-lable">رمز عبور فعلی</label>
                          <input
                            type="password"
                            className="default-input is-valid"
                            placeholder="رمز عبور فعلی خود را وارد نمایید."
                          />
                          <span className="password-visibility ">
                            <FontAwesomeIcon icon={faEyeSlash} />
                          </span>
                          <div className="input-feedback valid-feedback">
                            رمز عبور می‌بایست شامل حداقل 8 کاراکتر باشد.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-group ">
                          <label className="default-lable">رمز عبور جدید</label>
                          <input
                            type="password"
                            className="default-input is-invalid"
                            placeholder="رمز عبور جدید را وارد نمایید."
                          />
                          <span className="password-visibility ">
                            <FontAwesomeIcon icon={faEyeSlash} />
                          </span>
                          <div className="input-feedback invalid-feedback">
                            رمز عبور می‌بایست شامل حداقل 8 کاراکتر باشد.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-group ">
                          <label className="default-lable">
                            تکرار رمز عبور جدید
                          </label>
                          <input
                            type="password"
                            className="default-input"
                            placeholder="رمز عبور جدید خود را دوباره وارد نمایید."
                          />
                          <span className="password-visibility ">
                            <FontAwesomeIcon icon={faEyeSlash} />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="button-group col-md-6">
                        <button type="button" className="btn-default">
                          ثبت
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profiletab3"
                    role="tabpanel"
                    aria-labelledby="profiletab3-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-group">
                          <label className="default-lable">شماره همراه</label>
                          <input
                            type="tel"
                            className="default-input"
                            placeholder="شماره موبایل خود را وارد نمایید."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 button-group">
                        <button type="button" className="btn-default">
                          ثبت
                        </button>
                      </div>
                    </div>
                    <div className="row mrgt50">
                      <p className="darkgray dir-rtl">
                        همکار گرامی، در این قسمت، بعد از اینکه کاربر شماره تماس
                        خود را وارد نمود، قسمت بالا حذف شده و قسمت پایین نمایش
                        داده می شود. لطفا کلاس mrgt50 را در این قسمت حذف کنید.
                      </p>
                      <p className="darkgray">
                        ما یک کد به +98 912 ***** 9 ارسال کردیم ، برای تأیید
                        شماره تلفن خود ، کد را در زیر وارد کنید.
                      </p>
                      <div className="col-md-6">
                        <div className="input-group ">
                          <label className="default-lable">کد تایید</label>
                          <input
                            type="text"
                            className="default-input"
                            placeholder="کد تایید را اینجا وارد نمایید."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 button-group">
                        <button type="button" className="btn-default">
                          تایید
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profiletab4"
                    role="tabpanel"
                    aria-labelledby="profiletab4-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-group ">
                          <label className="default-lable">ایمیل</label>
                          <input
                            type="email"
                            className="default-input"
                            placeholder="ایمیل خود را وارد نمایید."
                            value=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 button-group">
                        <button type="button" className="btn-default">
                          ثبت
                        </button>
                      </div>
                    </div>
                    <div className="row mrgt50">
                      <p className="darkgray dir-rtl">
                        همکار گرامی، در این قسمت، بعد از اینکه کاربر ایمیل خود
                        را وارد نمود، قسمت بالا حذف شده و قسمت پایین نمایش داده
                        می شود. لطفا کلاس mrgt50 را در این قسمت حذف کنید.
                      </p>
                      <p className="darkgray">
                        ما یک کد به Ni****************@gmail.com ارسال کردیم ،
                        برای تأیید آدرس ایمیل خود کد را در زیر وارد کنید.
                      </p>
                      <div className="col-md-6">
                        <div className="input-group ">
                          <label className="default-lable">کد تایید</label>
                          <input
                            type="text"
                            className="default-input"
                            placeholder="کد تایید را اینجا وارد نمایید."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 button-group">
                        <button type="button" className="btn-default">
                          تایید
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Panel;
