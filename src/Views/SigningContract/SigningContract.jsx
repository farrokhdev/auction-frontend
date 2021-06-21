import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";

function SigningContract() {
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
                <li class="done">
                  <span class="d-none d-md-inline-block">معرف</span>
                  <span class="wizard-mobile d-md-none">5</span>
                </li>
                <li class="current">
                  <span class="d-none d-md-inline-block">قرارداد</span>
                  <span class="wizard-mobile d-md-none">6</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="container container-form">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
            <div class="row">
              <div class="col-md-6">
                <div class="input-group">
                  <label class="default-lable">مدرک شماره1</label>
                  <input type="file" class="default-input" placeholder="IR" />
                  <div class="input-file">
                    <span class="input-placeholder">انتخاب فایل</span>
                    <span class="btn-file"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="input-group">
                  <label class="default-lable">مدرک شماره2</label>
                  <input type="file" class="default-input" placeholder="IR" />
                  <div class="input-file">
                    <span class="input-placeholder">انتخاب فایل</span>
                    <span class="btn-file"></span>
                  </div>
                </div>
              </div>
            </div>
            <h5 class="default mrgt50">قرارداد</h5>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است،{" "}
              <Link to="/">برای دانلود نمونه قرارداد اینجا کلیک کنید.</Link>
            </p>
            <div class="row">
              <div class="col-md-6">
                <div class="input-group">
                  <label class="default-lable">قرارداد</label>
                  <input type="file" class="default-input" placeholder="IR" />
                  <div class="input-file">
                    <span class="input-placeholder">انتخاب فایل قرارداد</span>
                    <span class="btn-file"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="button-group">
              <Link to="/reagent">
                <button type="button" class="btn-gray">
                  بازگشت
                </button>
              </Link>
              <Link>
                <button type="button" class="btn-default">
                  ثبت نهایی
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

export default SigningContract;
