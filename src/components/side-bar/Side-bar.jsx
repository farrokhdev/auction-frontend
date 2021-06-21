import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div class="col-sm-3 sidebar" id="left-side">
        <button type="button" class="btn-getclose d-block d-lg-none"></button>
        <div class="left-side">
          <div class="result-box">
            <div class="result-title">
              <h6 class="default">نتایج:</h6>
              <button type="button" class="btn-removeall">
                پاک کردن همه
              </button>
            </div>
            <div class="tags-box">
              <Link to="/" class="tag-box date">
                <span>3 اردیبهشت - </span>
                <span>6 اردیبهشت</span>
                <button type="button" class="btn-remove"></button>
              </Link>
              <Link to="/" class="tag-box date">
                <span>تهران</span>
                <button type="button" class="btn-remove"></button>
              </Link>
              <Link to="/" class="tag-box date">
                <span>آرتیبیشن</span>
                <button type="button" class="btn-remove"></button>
              </Link>
            </div>
          </div>
          <div class="search-box">
            <div class="search-input">
              <input
                type="text"
                class="default-input"
                placeholder="جستجو در بیش از 100 اثر"
              />
              <button type="button" class="btn-search"></button>
            </div>
          </div>

          <div class="accordion main-accordion" id="leftside">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  تاریخ
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
              >
                <div class="accordion-body">
                  <div class="calendar">
                    <div class="calendar-header">
                      <button type="button" class="btn-calendar-prev"></button>
                      <div class="calendar-date">
                        <span class="calendar-month">شهریور</span>
                        <span class="calendar-year">1400</span>
                        <button type="button" class="calendar-changetype">
                          (میلادی)
                        </button>
                      </div>
                      <button type="button" class="btn-calendar-next"></button>
                    </div>

                    <div class="calendar-body">
                      <div class="calendar-days">
                        <div class="col">شنبه</div>
                        <div class="col">یک</div>
                        <div class="col">دو</div>
                        <div class="col">سه</div>
                        <div class="col">چهار</div>
                        <div class="col">پنج</div>
                        <div class="col">جمعه</div>
                      </div>
                      <div class="calendar-day">
                        <div class="d-flex justify-content-center">
                          <span class="col">1</span>
                          <span class="col">2</span>
                          <span class="col c-startdate">3</span>
                          <span class="col select-date">4</span>
                          <span class="col select-date">5</span>
                          <span class="col c-enddate">6</span>
                          <span class="col">7</span>
                        </div>
                        <div class="d-flex justify-content-center">
                          <span class="col">8</span>
                          <span class="col">9</span>
                          <span class="col">10</span>
                          <span class="col">11</span>
                          <span class="col">12</span>
                          <span class="col">13</span>
                          <span class="col">14</span>
                        </div>
                        <div class="d-flex justify-content-center">
                          <span class="col">15</span>
                          <span class="col">16</span>
                          <span class="col">17</span>
                          <span class="col">18</span>
                          <span class="col">19</span>
                          <span class="col">20</span>
                          <span class="col">21</span>
                        </div>
                        <div class="d-flex justify-content-center">
                          <span class="col">22</span>
                          <span class="col">23</span>
                          <span class="col">24</span>
                          <span class="col">25</span>
                          <span class="col">26</span>
                          <span class="col">27</span>
                          <span class="col">28</span>
                        </div>
                        <div class="d-flex justify-content-center">
                          <span class="col">29</span>
                          <span class="col">30</span>
                          <span class="col">31</span>
                          <span class="col deactive">1</span>
                          <span class="col deactive">2</span>
                          <span class="col deactive">3</span>
                          <span class="col deactive">4</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingSix">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="True"
                  aria-controls="collapseSix"
                >
                  وضعیت
                </button>
              </h2>
              <div
                id="collapseSix"
                class="accordion-collapse collapse show"
                aria-labelledby="headingSix"
              >
                <div class="accordion-body">
                  <div class="list-box">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkbox41"
                      />
                      <label class="form-check-label" for="checkbox41">
                        فعلی و آینده
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkbox42"
                      />
                      <label class="form-check-label" for="checkbox42">
                        گذشته
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="True"
                  aria-controls="collapseTwo"
                >
                  شهرها
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse show"
                aria-labelledby="headingTwo"
              >
                <div class="accordion-body">
                  <div class="search-input">
                    <input
                      type="text"
                      class="default-input"
                      placeholder="شهر مورد نظر را وارد نمایید."
                    />
                    <button type="button" class="btn-search"></button>
                  </div>
                  <div class="list-box">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkbox1"
                      />
                      <label class="form-check-label" for="checkbox1">
                        اردبیل
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkbox2"
                      />
                      <label class="form-check-label" for="checkbox2">
                        ایلام
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkbox3"
                      />
                      <label class="form-check-label" for="checkbox3">
                        بوشهر
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkbox4"
                      />
                      <label class="form-check-label" for="checkbox4">
                        تهران
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkbox5"
                      />
                      <label class="form-check-label" for="checkbox5">
                        سمنان
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkbox6"
                      />
                      <label class="form-check-label" for="checkbox6">
                        یزد
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="True"
                  aria-controls="collapseThree"
                >
                  حوزه فعالیت
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse show"
                aria-labelledby="headingThree"
              >
                <div class="accordion-body">
                  <div class="list-box">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkbox11"
                      />
                      <label class="form-check-label" for="checkbox11">
                        نقاشی
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkbox12"
                      />
                      <label class="form-check-label" for="checkbox12">
                        عکاسی
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkbox13"
                      />
                      <label class="form-check-label" for="checkbox13">
                        مجسمه سازی
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkbox14"
                      />
                      <label class="form-check-label" for="checkbox14">
                        خطاطی
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkbox15"
                      />
                      <label class="form-check-label" for="checkbox15">
                        خوشنویسی
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkbox16"
                      />
                      <label class="form-check-label" for="checkbox16">
                        نقاشی
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFour">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="True"
                  aria-controls="collapseTwo"
                >
                  خانه‌های حراج
                </button>
              </h2>
              <div
                id="collapseFour"
                class="accordion-collapse collapse show"
                aria-labelledby="headingFour"
              >
                <div class="accordion-body">
                  <div class="search-input">
                    <input
                      type="text"
                      class="default-input"
                      placeholder="نام خانه حراج مورد نظر را وارد نمایید."
                    />
                    <button type="button" class="btn-search"></button>
                  </div>
                  <div class="list-box">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkbox21"
                      />
                      <label class="form-check-label" for="checkbox21">
                        حراج ایران
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkbox22"
                      />
                      <label class="form-check-label" for="checkbox22">
                        گالری آرتیبیشن
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkbox23"
                      />
                      <label class="form-check-label" for="checkbox23">
                        حراج تهران
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkbox24"
                      />
                      <label class="form-check-label" for="checkbox24">
                        هان گالری
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkbox25"
                      />
                      <label class="form-check-label" for="checkbox25">
                        گالری مدرن
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkbox26"
                      />
                      <label class="form-check-label" for="checkbox26">
                        گالری مدرنا
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFive">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="True"
                  aria-controls="collapseThree"
                >
                  نوع
                </button>
              </h2>
              <div
                id="collapseFive"
                class="accordion-collapse collapse show"
                aria-labelledby="headingFive"
              >
                <div class="accordion-body">
                  <div class="list-box">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkbox31"
                      />
                      <label class="form-check-label" for="checkbox31">
                        آنلاین
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkbox32"
                      />
                      <label class="form-check-label" for="checkbox32">
                        زنده
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkbox33"
                      />
                      <label class="form-check-label" for="checkbox33">
                        مدت‌دار
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkbox34"
                      />
                      <label class="form-check-label" for="checkbox34">
                        اولین پیشنهاد
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkbox35"
                      />
                      <label class="form-check-label" for="checkbox35">
                        دومین پیشنهاد
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
