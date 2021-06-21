import React from "react";

function Chooseartwork() {
  return (
    <>
      <div
        dir="rtl"
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
                                src="img/img-1.jpg"
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
                          checked
                          value=""
                          id="checkbox2"
                        />
                        <label class="form-check-label" for="checkbox2">
                          <div class="artwork-block">
                            <div class="artwork-img">
                              <img
                                src="img/img-6.jpg"
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
                                src="img/img-7.jpg"
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
                                src="img/img-8.jpg"
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
                                src="img/img-9.jpg"
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
                                src="img/img-1.jpg"
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
                          checked
                          value=""
                          id="checkbox7"
                        />
                        <label class="form-check-label" for="checkbox7">
                          <div class="artwork-block">
                            <div class="artwork-img">
                              <img
                                src="img/img-6.jpg"
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
                          checked
                          value=""
                          id="checkbox8"
                        />
                        <label class="form-check-label" for="checkbox8">
                          <div class="artwork-block">
                            <div class="artwork-img">
                              <img
                                src="img/img-7.jpg"
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
                                src="img/img-8.jpg"
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
                                src="img/img-9.jpg"
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
    </>
  );
}

export default Chooseartwork;
