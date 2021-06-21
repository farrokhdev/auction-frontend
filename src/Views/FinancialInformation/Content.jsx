import React from "react";
import { Link } from "react-router-dom";

function Content() {
  return (
    <div dir="rtl">
      <main class="innercontent" id="buyer-registration">
        <div class="container innercontainer">
          <div class="row sm-mrgb50">
            <div class="col-12">
              <div class="main-title d-inline-flex">
                <h2 class="default titr">ثبت نام خریداران</h2>
                <ul class="breadcrumb-cs">
                  <li>
                    <Link to="/">صفحه اصلی</Link>
                  </li>
                  <li class="active">ثبت نام خریداران</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="wizard">
              <ul class="wizard-list">
                <li class="done">
                  <span class="d-none d-md-inline-block">اطلاعات شخصی</span>
                  <span class="wizard-mobile d-md-none">1</span>
                </li>
                <li class="current">
                  <span class="d-none d-md-inline-block">اطلاعات مالی</span>
                  <span class="wizard-mobile d-md-none">2</span>
                </li>
                <li>
                  <span class="d-none d-md-inline-block">آثارمورد علاقه</span>
                  <span class="wizard-mobile d-md-none">3</span>
                </li>
                <li>
                  <span class="d-none d-md-inline-block">کیف پول</span>
                  <span class="wizard-mobile d-md-none">4</span>
                </li>
                <li>
                  <span class="d-none d-md-inline-block">معرف</span>
                  <span class="wizard-mobile d-md-none">5</span>
                </li>
                <li>
                  <span class="d-none d-md-inline-block">قرارداد</span>
                  <span class="wizard-mobile d-md-none">6</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="container container-form">
            <div class="row">
              <div class="col-md-6">
                <div class="input-group">
                  <label class="default-lable">نام بانک</label>
                  <input
                    type="text"
                    class="default-input"
                    placeholder="نام بانک مورد نظر خود را وارد نمایید."
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-group">
                  <label class="default-lable">شماره کارت</label>
                  <input
                    type="text"
                    class="default-input"
                    placeholder="شماره کارت را وارد نمایید"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-group">
                  <label class="default-lable">شماره حساب</label>
                  <input
                    type="text"
                    class="default-input"
                    placeholder="شماره حساب را وارد نمایید."
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-group">
                  <label class="default-lable">شماره شبا</label>
                  <input type="text" class="default-input" placeholder="IR" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-group">
                  <label class="default-lable">گواهی انطباق مالی</label>
                  <input type="file" class="default-input" placeholder="IR" />
                  <div class="input-file">
                    <span class="input-placeholder">انتخاب فایل</span>
                    <span class="btn-file"></span>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <p class="moreinfo">
                  گواهی انطباق مالی الزامی است،
                  <Link
                    to="/"
                    data-bs-toggle="modal"
                    data-bs-target="#document-required"
                  >
                    برای راهنمایی بیشتر اینجا کلیک کنید.
                  </Link>
                </p>
              </div>
            </div>
            <div class="button-group">
              <Link to="/register">
                <button type="button" class="btn-gray">
                  بازگشت
                </button>
              </Link>
              <Link to="/works-of-interest">
                <button type="button" class="btn-default">
                  ادامه
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Content;
