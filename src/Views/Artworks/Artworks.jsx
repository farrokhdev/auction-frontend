import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

import pic2 from "../../images/pic2.jpg";
import pic3 from "../../images/pic3.jpg";
import pic4 from "../../images/pic4.jpg";
import pic1 from "../../images/pic1.jpg";
import pic5 from "../../images/pic5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Maintitle from "../../components/main title for all";
import Sidebar from "../../components/side-bar";

function Artworks() {
  return (
    <div dir="rtl">
      <Header />
      <main class="innercontent" id="all-artworks">
        <div class="container innercontainer">
          <Maintitle />
          <div class="row">
            <Sidebar />
            <div class="col-lg-9">
              <div class="row row-cols-md-3 row-cols-2">
                <div class="col">
                  <Link to="/" class="artwork-block">
                    <div class="artwork-img">
                      <img
                        src={pic2}
                        width="998"
                        height="880"
                        alt=""
                        class="img-fluid"
                      />
                      <div class="artwork-category">
                        <span class="category-save">
                          <FontAwesomeIcon icon={faBookmark} />
                        </span>
                        <span class="category-icon live-icon">زنده</span>
                      </div>
                    </div>
                    <div class="block-body text-center">
                      <h6 class="default gray50 ">سهراب سپهری</h6>
                      <h4 class="default">از ژورنال سقاخانه</h4>
                      <div class="auction-calender">
                        <div class="auction-date">
                          <span class="start-date">7 خرداد</span>
                          <span class="end-date">9 خرداد</span>
                        </div>
                        <div class="auction-time">
                          <span class="start-time">10</span>
                        </div>
                      </div>
                      <div class="price-block">
                        <span>قیمت پایه:</span>
                        <span class="price">
                          100,000,000<span class="price-unit">تومان</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div class="col">
                  <Link to="/" class="artwork-block">
                    <div class="artwork-img">
                      <img
                        src={pic3}
                        width="998"
                        height="880"
                        alt=""
                        class="img-fluid"
                      />
                      <div class="artwork-category">
                        <span class="category-save ">
                          <FontAwesomeIcon icon={faBookmark} />
                        </span>
                        <span class="category-icon online-icon">آنلاین</span>
                      </div>
                    </div>
                    <div class="block-body text-center">
                      <h6 class="default gray50 ">حسین کاظمی</h6>
                      <h4 class="default">از مجموعه قرمز</h4>
                      <div
                        class="jumbotron countdown show start"
                        data-Date="2021/06/05 16:09:00"
                      >
                        <div class="running">
                          <timer>
                            <span class="days"></span>:
                            <span class="hours"></span>:
                            <span class="minutes"></span>
                            <span class="show-text"></span>
                          </timer>
                          <div class="break"></div>
                        </div>
                        <div class="ended">
                          <div class="text">حراج به پایان رسید</div>
                        </div>
                      </div>
                      <div class="price-block">
                        <span>قیمت فروخته شده:</span>
                        <span class="price">
                          30,000,000<span class="price-unit">تومان</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div class="col">
                  <Link to="/" class="artwork-block">
                    <div class="artwork-img">
                      <img
                        src={pic4}
                        width="998"
                        height="880"
                        alt=""
                        class="img-fluid"
                      />
                      <div class="artwork-category">
                        <span class="category-save">
                          <FontAwesomeIcon icon={faBookmark} />
                        </span>
                        <span class="category-icon timed-icon">مدت‌دار</span>
                      </div>
                    </div>
                    <div class="block-body text-center">
                      <h6 class="default gray50 ">همایون سلیمی</h6>
                      <h4 class="default">آرامش و سکوت در طبیعت بکر</h4>
                      <div
                        class="jumbotron countdown show end"
                        data-Date="2021/10/12 23:09:00"
                      >
                        <div class="running">
                          <timer>
                            <span class="days"></span>:
                            <span class="hours"></span>:
                            <span class="minutes"></span>
                            <span class="show-text"></span>
                          </timer>
                          <div class="break"></div>
                        </div>
                        <div class="ended">
                          <div class="text">حراج به پایان رسید</div>
                        </div>
                      </div>
                      <div class="price-block">
                        <span>قیمت فعلی:</span>
                        <span class="price">
                          9,500,000<span class="price-unit">تومان</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div class="col">
                  <Link to="/" class="artwork-block">
                    <div class="artwork-img">
                      <img
                        src={pic1}
                        width="998"
                        height="880"
                        alt=""
                        class="img-fluid"
                      />
                      <div class="artwork-category">
                        <span class="category-save">
                          <FontAwesomeIcon icon={faBookmark} />
                        </span>
                        <span class="category-icon firstoffer-icon">
                          اولین پیشنهاد
                        </span>
                      </div>
                    </div>
                    <div class="block-body text-center">
                      <h6 class="default gray50 ">پریوش گنجی</h6>
                      <h4 class="default">از مجموعه پنجره قرمز</h4>
                      <div class="auction-calender">
                        <div class="auction-date">
                          <span class="start-date">7 خرداد</span>
                          <span class="end-date">9 خرداد</span>
                        </div>
                        <div class="auction-time">
                          <span class="start-time">10</span>
                        </div>
                      </div>
                      <div class="price-block">
                        <span>قیمت پایه:</span>
                        <span class="price">
                          5,000,000<span class="price-unit">تومان</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div class="col">
                  <Link to="/" class="artwork-block">
                    <div class="artwork-img">
                      <img
                        src={pic5}
                        width="998"
                        height="880"
                        alt=""
                        class="img-fluid"
                      />
                      <div class="artwork-category">
                        <span class="category-save">
                          <FontAwesomeIcon icon={faBookmark} />
                        </span>
                        <span class="category-icon secondoffer-icon">
                          دومین پیشنهاد
                        </span>
                      </div>
                    </div>
                    <div class="block-body text-center">
                      <h6 class="default gray50 ">پریوش گنجی</h6>
                      <h4 class="default">از مجموعه پنجره قرمز</h4>
                      <div class="auction-calender">
                        <div class="auction-date">
                          <span class="start-date">7 خرداد</span>
                          <span class="end-date">9 خرداد</span>
                        </div>
                        <div class="auction-time">
                          <span class="start-time">10</span>
                        </div>
                      </div>
                      <div class="price-block">
                        <span>قیمت پایه:</span>
                        <span class="price">
                          5,000,000<span class="price-unit">تومان</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div class="col">
                  <Link to="/" class="artwork-block">
                    <div class="artwork-img">
                      <img
                        src={pic2}
                        width="998"
                        height="880"
                        alt=""
                        class="img-fluid"
                      />
                      <div class="artwork-category">
                        <span class="category-sav ">
                          <FontAwesomeIcon icon={faBookmark} />
                        </span>
                        <span class="category-icon live-icon">زنده</span>
                      </div>
                    </div>
                    <div class="block-body text-center">
                      <h6 class="default gray50 ">سهراب سپهری</h6>
                      <h4 class="default">از ژورنال سقاخانه</h4>
                      <div class="auction-calender">
                        <div class="auction-date">
                          <span class="start-date">7 خرداد</span>
                          <span class="end-date">9 خرداد</span>
                        </div>
                        <div class="auction-time">
                          <span class="start-time">10</span>
                        </div>
                      </div>
                      <div class="price-block">
                        <span>قیمت پایه:</span>
                        <span class="price">
                          100,000,000<span class="price-unit">تومان</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div class="col">
                  <Link to="/" class="artwork-block">
                    <div class="artwork-img">
                      <img
                        src={pic3}
                        width="998"
                        height="880"
                        alt=""
                        class="img-fluid"
                      />
                      <div class="artwork-category">
                        <span class="category-save">
                          <FontAwesomeIcon icon={faBookmark} />
                        </span>
                        <span class="category-icon online-icon">آنلاین</span>
                      </div>
                    </div>
                    <div class="block-body text-center">
                      <h6 class="default gray50 ">حسین کاظمی</h6>
                      <h4 class="default">از مجموعه قرمز</h4>
                      <div
                        class="jumbotron countdown show start"
                        data-Date="2021/06/05 16:09:00"
                      >
                        <div class="running">
                          <timer>
                            <span class="days"></span>:
                            <span class="hours"></span>:
                            <span class="minutes"></span>
                            <span class="show-text"></span>
                          </timer>
                          <div class="break"></div>
                        </div>
                        <div class="ended">
                          <div class="text">حراج به پایان رسید</div>
                        </div>
                      </div>
                      <div class="price-block">
                        <span>قیمت فروخته شده:</span>
                        <span class="price">
                          30,000,000<span class="price-unit">تومان</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div class="col">
                  <Link to="/" class="artwork-block">
                    <div class="artwork-img">
                      <img
                        src={pic4}
                        width="998"
                        height="880"
                        alt=""
                        class="img-fluid"
                      />
                      <div class="artwork-category">
                        <span class="category-save">
                          <FontAwesomeIcon icon={faBookmark} />
                        </span>
                        <span class="category-icon timed-icon">مدت‌دار</span>
                      </div>
                    </div>
                    <div class="block-body text-center">
                      <h6 class="default gray50 ">همایون سلیمی</h6>
                      <h4 class="default">آرامش و سکوت در طبیعت بکر</h4>
                      <div
                        class="jumbotron countdown show end"
                        data-Date="2021/10/12 23:09:00"
                      >
                        <div class="running">
                          <timer>
                            <span class="days"></span>:
                            <span class="hours"></span>:
                            <span class="minutes"></span>
                            <span class="show-text"></span>
                          </timer>
                          <div class="break"></div>
                        </div>
                        <div class="ended">
                          <div class="text">حراج به پایان رسید</div>
                        </div>
                      </div>
                      <div class="price-block">
                        <span>قیمت فعلی:</span>
                        <span class="price">
                          9,500,000<span class="price-unit">تومان</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div class="col">
                  <Link to="/" class="artwork-block">
                    <div class="artwork-img">
                      <img
                        src={pic1}
                        width="998"
                        height="880"
                        alt=""
                        class="img-fluid"
                      />
                      <div class="artwork-category">
                        <span class="category-save">
                          <FontAwesomeIcon icon={faBookmark} />
                        </span>
                        <span class="category-icon firstoffer-icon">
                          اولین پیشنهاد
                        </span>
                      </div>
                    </div>
                    <div class="block-body text-center">
                      <h6 class="default gray50 ">پریوش گنجی</h6>
                      <h4 class="default">از مجموعه پنجره قرمز</h4>
                      <div class="auction-calender">
                        <div class="auction-date">
                          <span class="start-date">7 خرداد</span>
                          <span class="end-date">9 خرداد</span>
                        </div>
                        <div class="auction-time">
                          <span class="start-time">10</span>
                        </div>
                      </div>
                      <div class="price-block">
                        <span>قیمت پایه:</span>
                        <span class="price">
                          5,000,000<span class="price-unit">تومان</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item">
                    <Link class="page-link" to="/" aria-label="Previous"></Link>
                  </li>
                  <li class="page-item">
                    <Link to="/" class="page-link">
                      1
                    </Link>
                  </li>
                  <li class="page-item active" aria-current="page">
                    <Link class="page-link" to="/">
                      2
                    </Link>
                  </li>
                  <li class="page-item">
                    <Link class="page-link" to="/">
                      3
                    </Link>
                  </li>
                  <li class="page-item">
                    <Link class="page-link" to="/">
                      4
                    </Link>
                  </li>
                  <li class="page-item">
                    <Link class="page-link" to="/" aria-label="Next"></Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Artworks;
