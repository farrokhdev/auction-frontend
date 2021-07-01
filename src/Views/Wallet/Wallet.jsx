import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";

function Wallet() {
  return (
    <div dir="rtl">
      <Header />
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
                <li className="done">
                  <span className="d-none d-md-inline-block">اطلاعات شخصی</span>
                  <span className="wizard-mobile d-md-none">1</span>
                </li>
                <li className="done">
                  <span className="d-none d-md-inline-block">اطلاعات مالی</span>
                  <span className="wizard-mobile d-md-none">2</span>
                </li>
                <li className="done">
                  <span className="d-none d-md-inline-block">آثارمورد علاقه</span>
                  <span className="wizard-mobile d-md-none">3</span>
                </li>
                <li className="current">
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
            <div className="wallet-container">
              <div className="price-block textalign-center">
                <span className="price">
                  500<span className="price-unit">تومان</span>
                </span>
                <span className="price-lable">مانده حساب شما</span>
              </div>
              <Link data-bs-toggle="modal" data-bs-target="#charge-modal">
                چقدر باید شارژ کنم؟
              </Link>
              <button type="button" className="btn-outline-pink">
                افزایش اعتبار
              </button>
            </div>
            <p className="mrgt50">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </p>
            <div className="button-group">
              <Link to="/works-of-interest">
                <button type="button" className="btn-gray">
                  بازگشت
                </button>
              </Link>
              <Link to="/reagent">
                <button type="button" className="btn-default">
                  ادامه
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <div
        className="modal fade"
        id="charge-modal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog w-600">
          <div className="modal-content">
            <div className="modal-header">
              <div className="container g-0 d-flex justify-content-between">
                <div className="main-title">
                  <h2 className="default titr">چقدر باید شارژ کنم؟</h2>
                </div>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
            </div>
            <div className="modal-body textalign-center">
              <div className="recharge-txt">
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                  <strong> 1000 تومان</strong> از صنعت چاپ و با استفاده از
                  طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون
                  و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                  کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                </p>
              </div>
              <div className="amount-list">
                <div className="amount-block">
                  <div className="amount-range">
                    0 - 100<span className="unit">تومان</span>
                  </div>
                  <span className="d-none d-md-inline-block">نیاز دارد به</span>
                  <div className="amount-range">
                    1,000,000<span className="unit">تومان</span>
                  </div>
                </div>
                <div className="amount-block">
                  <div className="amount-range">
                    101 - 200<span className="unit">تومان</span>
                  </div>
                  <span className="d-none d-md-inline-block">نیاز دارد به</span>
                  <div className="amount-range">
                    2,000,000<span className="unit">تومان</span>
                  </div>
                </div>
                <div className="amount-block">
                  <div className="amount-range">
                    201 - 300<span className="unit">تومان</span>
                  </div>
                  <span className="d-none d-md-inline-block">نیاز دارد به</span>
                  <div className="amount-range">
                    3,000,000<span className="unit">تومان</span>
                  </div>
                </div>
                <div className="amount-block">
                  <div className="amount-range">
                    301 - 400<span className="unit">تومان</span>
                  </div>
                  <span className="d-none d-md-inline-block">نیاز دارد به</span>
                  <div className="amount-range">
                    4,000,000<span className="unit">تومان</span>
                  </div>
                </div>
                <div className="amount-block">
                  <div className="amount-range">
                    401 - 500<span className="unit">تومان</span>
                  </div>
                  <span className="d-none d-md-inline-block">نیاز دارد به</span>
                  <div className="amount-range">
                    5,000,000<span className="unit">تومان</span>
                  </div>
                </div>
                <div className="amount-block">
                  <div className="amount-range">
                    501 - 600<span className="unit">تومان</span>
                  </div>
                  <span className="d-none d-md-inline-block">نیاز دارد به</span>
                  <div className="amount-range">
                    6,000,000<span className="unit">تومان</span>
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
