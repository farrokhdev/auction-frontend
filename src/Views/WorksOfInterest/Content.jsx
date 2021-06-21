import React from "react";
import { Link } from "react-router-dom";

import img1 from "../../images/img-1.jpg";

import img6 from "../../images/img-6.jpg";
import img7 from "../../images/img-7.jpg";
import img8 from "../../images/img-8.jpg";
import img9 from "../../images/img-9.jpg";
import Workofinterestshow from "./WorkOfIntrestShow";

function Content() {
  return (
    <div dir="rtl">
      {/* <main class="innercontent" id="buyer-registration">
        <div class="container innercontainer">
          <div class="row sm-mrgb50">
            <div class="col-12">
              <div class="main-title d-inline-flex">
                <h2 class="default titr">ثبت نام خریداران</h2>
                <ul class="breadcrumb-cs">
                  <li>
                    <a href="#">صفحه اصلی</a>
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
                <li class="current">
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
              <div class="col textalign-center">
                <p>
                  قبل از شرکت در حراج محصولات مورد علاقه خود را انتخاب کنید.
                </p>
                <button type="button" class="btn-outline-pink">
                  انتخاب اثر
                </button>
              </div>
              <div class="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 mrgt30 selected-artwork">
                <div class="col">
                  <div class="artwork-block">
                    <div class="artwork-img">
                      <img
                        src={img6}
                        width="317"
                        height="280"
                        alt=""
                        class="img-fluid"
                      />
                    </div>
                    <div class="ra-row mrgt10">
                      <div class="ra-col">
                        <h6 class="default gray50 ">سهراب سپهری</h6>
                        <h4 class="default">از ژورنال سقاخانه</h4>
                      </div>
                      <div class="ra-col">
                        <h5 class="default lot-num">2</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="artwork-block">
                    <div class="artwork-img">
                      <img
                        src={img6}
                        width="317"
                        height="280"
                        alt=""
                        class="img-fluid"
                      />
                    </div>
                    <div class="ra-row mrgt10">
                      <div class="ra-col">
                        <h6 class="default gray50 ">سهراب سپهری</h6>
                        <h4 class="default">از ژورنال سقاخانه</h4>
                      </div>
                      <div class="ra-col">
                        <h5 class="default lot-num">7</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="artwork-block">
                    <div class="artwork-img">
                      <img
                        src={img7}
                        width="317"
                        height="280"
                        alt=""
                        class="img-fluid"
                      />
                    </div>
                    <div class="ra-row mrgt10">
                      <div class="ra-col">
                        <h6 class="default gray50 ">سهراب سپهری</h6>
                        <h4 class="default">از ژورنال سقاخانه</h4>
                      </div>
                      <div class="ra-col">
                        <h5 class="default lot-num">8</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="button-group">
                <Link to="/financial-information">
                  <button type="button" class="btn-gray">
                    بازگشت
                  </button>
                </Link>
                <Link to="/">
                  <button type="button" class="btn-default">
                    ادامه
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main> */}
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
                <li class="current">
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
              <div class="col textalign-center">
                <p>
                  قبل از شرکت در حراج محصولات مورد علاقه خود را انتخاب کنید.
                </p>

                <button
                  type="button"
                  class="btn-outline-pink"
                  data-bs-toggle="modal"
                  data-bs-target="#choose-artwork"
                >
                  انتخاب اثر
                </button>

                {/* ***** */}
                <Workofinterestshow />
                {/* false ? any  
                true: 
                */}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ************* */}
      <div
        class="modal fade"
        id="choose-artwork"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog fullwidth">
          <div class="modal-content">
            <div class="modal-header">
              <div class="container g-0 d-flex justify-content-between">
                <div class="main-title">
                  <h2 class="default titr">آثار</h2>
                </div>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
            </div>
            <div class="modal-body">
              <div class="container">
                <div class="row">
                  <div class="col-md-9">
                    <div class="search-input">
                      <input
                        type="text"
                        class="default-input"
                        placeholder="در بیش از 100 حراج جستجو کنید."
                      />
                      <button type="button" class="btn-search"></button>
                    </div>
                  </div>
                  <div class="col-md-3 num-artwork">
                    <span class="font12">آثار انتخاب شده: </span>
                    <span class="num-artwork-item pinkcolor">3</span>
                    <span class="num-artwork-item">از</span>
                    <span class="num-artwork-item">120</span>
                  </div>
                </div>
                <div class="chooseartwork">
                  <div class="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1">
                    <div class="col">
                      <div class="form-check img-checkbox">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="checkbox1"
                        />
                        <label class="form-check-label" for="checkbox1">
                          <div class="artwork-block">
                            <div class="artwork-img">
                              <img
                                src={img1}
                                width="547"
                                height="547"
                                alt=""
                                class="img-fluid"
                              />
                            </div>
                            <div class="ra-row mrgt10">
                              <div class="ra-col">
                                <h6 class="default gray50 ">سهراب سپهری</h6>
                                <h4 class="default">از ژورنال سقاخانه</h4>
                              </div>
                              <div class="ra-col">
                                <h5 class="default lot-num">1</h5>
                              </div>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-check img-checkbox">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="checkbox2"
                        />
                        <label class="form-check-label" for="checkbox2">
                          <div class="artwork-block">
                            <div class="artwork-img">
                              <img
                                src={img6}
                                width="317"
                                height="280"
                                alt=""
                                class="img-fluid"
                              />
                            </div>
                            <div class="ra-row mrgt10">
                              <div class="ra-col">
                                <h6 class="default gray50 ">سهراب سپهری</h6>
                                <h4 class="default">از ژورنال سقاخانه</h4>
                              </div>
                              <div class="ra-col">
                                <h5 class="default lot-num">2</h5>
                              </div>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-check img-checkbox">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="checkbox3"
                        />
                        <label class="form-check-label" for="checkbox3">
                          <div class="artwork-block">
                            <div class="artwork-img">
                              <img
                                src={img7}
                                width="317"
                                height="280"
                                alt=""
                                class="img-fluid"
                              />
                            </div>
                            <div class="ra-row mrgt10">
                              <div class="ra-col">
                                <h6 class="default gray50 ">سهراب سپهری</h6>
                                <h4 class="default">از ژورنال سقاخانه</h4>
                              </div>
                              <div class="ra-col">
                                <h5 class="default lot-num">3</h5>
                              </div>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-check img-checkbox">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="checkbox4"
                        />
                        <label class="form-check-label" for="checkbox4">
                          <div class="artwork-block">
                            <div class="artwork-img">
                              <img
                                src={img8}
                                width="317"
                                height="280"
                                alt=""
                                class="img-fluid"
                              />
                            </div>
                            <div class="ra-row mrgt10">
                              <div class="ra-col">
                                <h6 class="default gray50 ">سهراب سپهری</h6>
                                <h4 class="default">از ژورنال سقاخانه</h4>
                              </div>
                              <div class="ra-col">
                                <h5 class="default lot-num">4</h5>
                              </div>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-check img-checkbox">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="checkbox5"
                        />
                        <label class="form-check-label" for="checkbox5">
                          <div class="artwork-block">
                            <div class="artwork-img">
                              <img
                                src={img9}
                                width="317"
                                height="280"
                                alt=""
                                class="img-fluid"
                              />
                            </div>
                            <div class="ra-row mrgt10">
                              <div class="ra-col">
                                <h6 class="default gray50 ">سهراب سپهری</h6>
                                <h4 class="default">از ژورنال سقاخانه</h4>
                              </div>
                              <div class="ra-col">
                                <h5 class="default lot-num">5</h5>
                              </div>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-check img-checkbox">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="checkbox6"
                        />
                        <label class="form-check-label" for="checkbox6">
                          <div class="artwork-block">
                            <div class="artwork-img">
                              <img
                                src={img1}
                                width="547"
                                height="547"
                                alt=""
                                class="img-fluid"
                              />
                            </div>
                            <div class="ra-row mrgt10">
                              <div class="ra-col">
                                <h6 class="default gray50 ">سهراب سپهری</h6>
                                <h4 class="default">از ژورنال سقاخانه</h4>
                              </div>
                              <div class="ra-col">
                                <h5 class="default lot-num">6</h5>
                              </div>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-check img-checkbox">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="checkbox7"
                        />
                        <label class="form-check-label" for="checkbox7">
                          <div class="artwork-block">
                            <div class="artwork-img">
                              <img
                                src={img6}
                                width="317"
                                height="280"
                                alt=""
                                class="img-fluid"
                              />
                            </div>
                            <div class="ra-row mrgt10">
                              <div class="ra-col">
                                <h6 class="default gray50 ">سهراب سپهری</h6>
                                <h4 class="default">از ژورنال سقاخانه</h4>
                              </div>
                              <div class="ra-col">
                                <h5 class="default lot-num">7</h5>
                              </div>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-check img-checkbox">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="checkbox8"
                        />
                        <label class="form-check-label" for="checkbox8">
                          <div class="artwork-block">
                            <div class="artwork-img">
                              <img
                                src={img7}
                                width="317"
                                height="280"
                                alt=""
                                class="img-fluid"
                              />
                            </div>
                            <div class="ra-row mrgt10">
                              <div class="ra-col">
                                <h6 class="default gray50 ">سهراب سپهری</h6>
                                <h4 class="default">از ژورنال سقاخانه</h4>
                              </div>
                              <div class="ra-col">
                                <h5 class="default lot-num">8</h5>
                              </div>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-check img-checkbox">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="checkbox9"
                        />
                        <label class="form-check-label" for="checkbox9">
                          <div class="artwork-block">
                            <div class="artwork-img">
                              <img
                                src={img8}
                                width="317"
                                height="280"
                                alt=""
                                class="img-fluid"
                              />
                            </div>
                            <div class="ra-row mrgt10">
                              <div class="ra-col">
                                <h6 class="default gray50 ">سهراب سپهری</h6>
                                <h4 class="default">از ژورنال سقاخانه</h4>
                              </div>
                              <div class="ra-col">
                                <h5 class="default lot-num">9</h5>
                              </div>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-check img-checkbox">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="checkbox10"
                        />
                        <label class="form-check-label" for="checkbox10">
                          <div class="artwork-block">
                            <div class="artwork-img">
                              <img
                                src={img9}
                                width="317"
                                height="280"
                                alt=""
                                class="img-fluid"
                              />
                            </div>
                            <div class="ra-row mrgt10">
                              <div class="ra-col">
                                <h6 class="default gray50 ">سهراب سپهری</h6>
                                <h4 class="default">از ژورنال سقاخانه</h4>
                              </div>
                              <div class="ra-col">
                                <h5 class="default lot-num">10</h5>
                              </div>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-default"
                data-bs-dismiss="modal"
              >
                ثبت
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
