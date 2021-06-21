import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";

function Reagent() {
  return (
    <div dir="rtl">
      <Header />
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
                <li class="done">
                  <span class="d-none d-md-inline-block">اطلاعات مالی</span>
                  <span class="wizard-mobile d-md-none">2</span>
                </li>
                <li class="done">
                  <span class="d-none d-md-inline-block">آثارمورد علاقه</span>
                  <span class="wizard-mobile d-md-none">3</span>
                </li>
                <li class="done">
                  <span class="d-none d-md-inline-block">کیف پول</span>
                  <span class="wizard-mobile d-md-none">4</span>
                </li>
                <li class="current">
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
            <p>نام و شماره همراه مورد نظر را وارد نمایید.</p>
            <div class="row">
              <div class="col-md-4">
                <div class="input-group">
                  <label class="default-lable">نام</label>
                  <input
                    type="text"
                    class="default-input"
                    placeholder="نام معرف را وارد نمایید."
                  />
                </div>
              </div>
              <div class="col-md-4">
                <div class="input-group">
                  <label class="default-lable">نام خانوادگی</label>
                  <input
                    type="text"
                    class="default-input"
                    placeholder="نام خانوادگی معرف را وارد نمایید."
                  />
                </div>
              </div>
              <div class="col-md-4">
                <div class="input-group">
                  <label class="default-lable">شماره همراه</label>
                  <input
                    type="tel"
                    class="default-input"
                    placeholder="شماره موبایل خود را وارد نمایید."
                  />
                </div>
              </div>
            </div>
            <div class="button-group">
              <Link to="/wallet">
                <button type="button" class="btn-gray">
                  بازگشت
                </button>
              </Link>
              <Link to="/signing-contract">
                <button type="button" class="btn-default">
                  ادامه
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Reagent;
