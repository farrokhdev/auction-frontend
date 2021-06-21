import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";

function Wallet() {
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
                <li class="current">
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
            <div class="wallet-container">
              <div class="price-block textalign-center">
                <span class="price">
                  500<span class="price-unit">تومان</span>
                </span>
                <span class="price-lable">مانده حساب شما</span>
              </div>
              <Link data-bs-toggle="modal" data-bs-target="#charge-modal">
                چقدر باید شارژ کنم؟
              </Link>
              <button type="button" class="btn-outline-pink">
                افزایش اعتبار
              </button>
            </div>
            <p class="mrgt50">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </p>
            <div class="button-group">
              <Link to="/works-of-interest">
                <button type="button" class="btn-gray">
                  بازگشت
                </button>
              </Link>
              <Link to="/reagent">
                <button type="button" class="btn-default">
                  ادامه
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <div
        class="modal fade"
        id="charge-modal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog w-600">
          <div class="modal-content">
            <div class="modal-header">
              <div class="container g-0 d-flex justify-content-between">
                <div class="main-title">
                  <h2 class="default titr">چقدر باید شارژ کنم؟</h2>
                </div>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
            </div>
            <div class="modal-body textalign-center">
              <div class="recharge-txt">
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                  <strong> 1000 تومان</strong> از صنعت چاپ و با استفاده از
                  طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون
                  و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                  کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                </p>
              </div>
              <div class="amount-list">
                <div class="amount-block">
                  <div class="amount-range">
                    0 - 100<span class="unit">تومان</span>
                  </div>
                  <span class="d-none d-md-inline-block">نیاز دارد به</span>
                  <div class="amount-range">
                    1,000,000<span class="unit">تومان</span>
                  </div>
                </div>
                <div class="amount-block">
                  <div class="amount-range">
                    101 - 200<span class="unit">تومان</span>
                  </div>
                  <span class="d-none d-md-inline-block">نیاز دارد به</span>
                  <div class="amount-range">
                    2,000,000<span class="unit">تومان</span>
                  </div>
                </div>
                <div class="amount-block">
                  <div class="amount-range">
                    201 - 300<span class="unit">تومان</span>
                  </div>
                  <span class="d-none d-md-inline-block">نیاز دارد به</span>
                  <div class="amount-range">
                    3,000,000<span class="unit">تومان</span>
                  </div>
                </div>
                <div class="amount-block">
                  <div class="amount-range">
                    301 - 400<span class="unit">تومان</span>
                  </div>
                  <span class="d-none d-md-inline-block">نیاز دارد به</span>
                  <div class="amount-range">
                    4,000,000<span class="unit">تومان</span>
                  </div>
                </div>
                <div class="amount-block">
                  <div class="amount-range">
                    401 - 500<span class="unit">تومان</span>
                  </div>
                  <span class="d-none d-md-inline-block">نیاز دارد به</span>
                  <div class="amount-range">
                    5,000,000<span class="unit">تومان</span>
                  </div>
                </div>
                <div class="amount-block">
                  <div class="amount-range">
                    501 - 600<span class="unit">تومان</span>
                  </div>
                  <span class="d-none d-md-inline-block">نیاز دارد به</span>
                  <div class="amount-range">
                    6,000,000<span class="unit">تومان</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
