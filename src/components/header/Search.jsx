import React from "react";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

import pic11 from "../../images/pic11.jpg";
import pic12 from "../../images/pic12.jpg";
import pic7 from "../../images/pic7.jpg";
import pic5 from "../../images/pic5.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Search() {
  return (
    <>
      <div
        dir="rtl"
        className="inner-nav"
        id="nav-search"
        aria-labelledby="#navsearch"
      >
        <div className="container containercs">
          <div className="row">
            <div className="col-lg-6">
              <div className="main-search">
                <input type="text" placeholder="جستجوی اثر، حراج‌، خانه حراج" />
                <button type="button" className="btn-view text-muted">
                  جستجو پیشرفته
                </button>
              </div>
            </div>
          </div>
          <div className="row mrgt30">
            <div className="col-md-3 col-lg-2 d-none d-md-block">
              <div className="recently-search">
                <h6 className="default">جستجوهای اخیر</h6>
                <ul>
                  <li>
                    <Link to="/">جواهرات</Link>
                    <button type="button" className="btn-remove small"></button>
                  </li>
                  <li>
                    <Link to="/">سهراب سپهری</Link>
                    <button type="button" className="btn-remove small"></button>
                  </li>
                  <li>
                    <Link to="/">گالری آرتیبیشن</Link>
                    <button type="button" className="btn-remove small"></button>
                  </li>
                  <li>
                    <Link to="/">گالری تهران</Link>
                    <button type="button" className="btn-remove small"></button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-9 col-lg-10">
              <div className="category-search">
                <ul
                  className="nav nav-tabs justify-content-star main-tab"
                  id="detail-artwork"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="tab-11"
                      data-bs-toggle="tab"
                      data-bs-target="#catsearch1"
                      type="button"
                      role="tab"
                      aria-controls="catsearch1"
                      aria-selected="true"
                    >
                      همه
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="tab-21"
                      data-bs-toggle="tab"
                      data-bs-target="#catsearch2"
                      type="button"
                      role="tab"
                      aria-controls="tab2"
                      aria-selected="false"
                    >
                      حراج‌ها
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="tab-31"
                      data-bs-toggle="tab"
                      data-bs-target="#catsearch3"
                      type="button"
                      role="tab"
                      aria-controls="tab3"
                      aria-selected="false"
                    >
                      آثار
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <Link to="/house-auctions">
                      <button
                        className="nav-link"
                        id="tab-41"
                        data-bs-toggle="tab"
                        data-bs-target="#catsearch4"
                        type="button"
                        role="tab"
                        aria-controls="tab4"
                        aria-selected="false"
                      >
                        خانه‌های حراج
                      </button>
                    </Link>
                  </li>
                </ul>
                <div
                  className="tab-content main-tab-content"
                  id="detail-artwork-content"
                >
                  <div
                    className="tab-pane fade show active"
                    id="catsearch1"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="owl-carousel row">
                      <Link to="/" className="artwork-block w-25">
                        <div className="artwork-img">
                          <div className="bg-shadow tl-shadow10">
                            <img
                              src={pic5}
                              width="276"
                              height="226"
                              alt=""
                              className="img-fluid"
                            />
                            <div className="artwork-category">
                              <FontAwesomeIcon icon={faBookmark} />
                              {/* <span className="category-save artwork-bookmark"></span> */}
                              <span className="category-icon live-icon">
                                زنده
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="block-body">
                          <h4 className="default">از ژورنال سقاخانه</h4>
                          <h6 className="default">ونکور</h6>
                          <div className="auction-calender">
                            <div className="auction-date">
                              <span className="startdate">19 June</span>
                              <span className="enddate">22 June</span>
                            </div>
                            <div className="auction-time">
                              <span className="start-time">10</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link to="/" className="artwork-block w-25">
                        <div className="artwork-img">
                          <div className="bg-shadow tl-shadow10">
                            <img
                              src={pic12}
                              width="493"
                              height="621"
                              alt=""
                              className="img-fluid"
                            />
                            <div className="artwork-category">
                              <FontAwesomeIcon icon={faBookmark} />
                              {/* <span className="category-save artwork-bookmark"></span> */}
                              <span className="category-icon online-icon">
                                آنلاین
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="block-body">
                          <h4 className="default">از مجموعه قرمز</h4>
                          <h6 className="default">حسین کاظمی</h6>
                          <div
                            className="jumbotron countdown show start"
                            data-Date="2021/06/05 16:09:00"
                          >
                            <div className="running">
                              <timer>
                                <span className="days"></span>:
                                <span className="hours"></span>:
                                <span className="minutes"></span>
                                <span className="show-text"></span>
                              </timer>
                              <div className="break"></div>
                            </div>
                            <div className="ended">
                              <div className="text text-dark">
                                حراج به پایان رسید
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link to="/" className="artwork-block w-25">
                        <div className="artwork-img">
                          <div className="bg-shadow tl-shadow10">
                            <img
                              src={pic7}
                              width="275"
                              height="158"
                              alt=""
                              className="img-fluid"
                            />
                            <div className="artwork-category">
                              <FontAwesomeIcon icon={faBookmark} />
                              {/* <span className="category-save artwork-bookmark"></span> */}
                              <span className="category-icon timed-icon">
                                مدت‌دار
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="block-body">
                          <h4 className="default">آرامش و سکوت در طبیعت بکر</h4>
                          <h6 className="default">همایون سلیمی</h6>
                          <div
                            className="jumbotron countdown show end"
                            data-Date="2021/10/12 23:09:00"
                          >
                            <div className="running">
                              <timer>
                                <span className="days"></span>:
                                <span className="hours"></span>:
                                <span className="minutes"></span>
                                <span className="show-text"></span>
                              </timer>
                              <div className="break"></div>
                            </div>
                            <div className="ended">
                              <div className="text text-dark">
                                حراج به پایان رسید
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link to="/" className="artwork-block w-25">
                        <div className="artwork-img">
                          <div className="bg-shadow tl-shadow10">
                            <img
                              src={pic11}
                              width="998"
                              height="880"
                              alt=""
                              className="img-fluid"
                            />
                            <div className="artwork-category">
                              <FontAwesomeIcon icon={faBookmark} />
                              {/* <span className="category-save artwork-bookmark"></span> */}
                              <span className="category-icon firstoffer-icon">
                                اولین پیشنهاد
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="block-body">
                          <h4 className="default">از مجموعه پنجره قرمز</h4>
                          <h6 className="default">پریوش گنجی</h6>
                          <div className="auction-calender">
                            <div className="auction-date">
                              <span className="startdate">19 June</span>
                              <span className="enddate">22 June</span>
                            </div>
                            <div className="auction-time">
                              <span className="start-time">10</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="catsearch2"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="owl-carousel row">
                      <Link to="/" className="artwork-block w-25">
                        <div className="artwork-img">
                          <div className="bg-shadow tl-shadow10">
                            <img
                              src={pic5}
                              width="276"
                              height="226"
                              alt=""
                              className="img-fluid"
                            />
                            <div className="artwork-category">
                              <FontAwesomeIcon icon={faBookmark} />
                              {/* <span className="category-save artwork-bookmark"></span> */}
                              <span className="category-icon live-icon">
                                زنده
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="block-body">
                          <h4 className="default">از ژورنال سقاخانه</h4>
                          <h6 className="default">ونکور</h6>
                          <div className="auction-calender">
                            <div className="auction-date">
                              <span className="startdate">19 June</span>
                              <span className="enddate">22 June</span>
                            </div>
                            <div className="auction-time">
                              <span className="start-time">10</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link to="/" className="artwork-block w-25">
                        <div className="artwork-img">
                          <div className="bg-shadow tl-shadow10">
                            <img
                              src={pic12}
                              width="493"
                              height="621"
                              alt=""
                              className="img-fluid"
                            />
                            <div className="artwork-category">
                              <span className="category-save artwork-bookmark"></span>
                              <span className="category-icon online-icon">
                                آنلاین
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="block-body">
                          <h4 className="default">از مجموعه قرمز</h4>
                          <h6 className="default">حسین کاظمی</h6>
                          <div
                            className="jumbotron countdown show start"
                            data-Date="2021/06/05 16:09:00"
                          >
                            <div className="running">
                              <timer>
                                <span className="days"></span>:
                                <span className="hours"></span>:
                                <span className="minutes"></span>
                                <span className="show-text"></span>
                              </timer>
                              <div className="break"></div>
                            </div>
                            <div className="ended">
                              <div className="text text-dark">
                                حراج به پایان رسید
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link to="/" className="artwork-block w-25">
                        <div className="artwork-img">
                          <div className="bg-shadow tl-shadow10">
                            <img
                              src={pic7}
                              width="275"
                              height="158"
                              alt=""
                              className="img-fluid"
                            />
                            <div className="artwork-category">
                              <span className="category-save artwork-bookmark"></span>
                              <span className="category-icon timed-icon">
                                مدت‌دار
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="block-body">
                          <h4 className="default">آرامش و سکوت در طبیعت بکر</h4>
                          <h6 className="default">همایون سلیمی</h6>
                          <div
                            className="jumbotron countdown show end"
                            data-Date="2021/10/12 23:09:00"
                          >
                            <div className="running">
                              <timer>
                                <span className="days"></span>:
                                <span className="hours"></span>:
                                <span className="minutes"></span>
                                <span className="show-text"></span>
                              </timer>
                              <div className="break"></div>
                            </div>
                            <div className="ended">
                              <div className="text text-dark">
                                حراج به پایان رسید
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link to="/" className="artwork-block w-25">
                        <div className="artwork-img">
                          <div className="bg-shadow tl-shadow10">
                            <img
                              src={pic11}
                              width="998"
                              height="880"
                              alt=""
                              className="img-fluid"
                            />
                            <div className="artwork-category">
                              <span className="category-save artwork-bookmark"></span>
                              <span className="category-icon firstoffer-icon">
                                اولین پیشنهاد
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="block-body">
                          <h4 className="default">از مجموعه پنجره قرمز</h4>
                          <h6 className="default">پریوش گنجی</h6>
                          <div className="auction-calender">
                            <div className="auction-date">
                              <span className="startdate">19 June</span>
                              <span className="enddate">22 June</span>
                            </div>
                            <div className="auction-time">
                              <span className="start-time">10</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="catsearch3"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div className="owl-carousel row">
                      <Link to="/" className="artwork-block w-25">
                        <div className="artwork-img">
                          <div className="bg-shadow tl-shadow10">
                            <img
                              src={pic5}
                              width="276"
                              height="226"
                              alt=""
                              className="img-fluid"
                            />
                            <div className="artwork-category">
                              <FontAwesomeIcon icon={faBookmark} />
                              {/* <span className="category-save artwork-bookmark"></span> */}
                              <span className="category-icon live-icon">
                                زنده
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="block-body">
                          <h4 className="default">از ژورنال سقاخانه</h4>
                          <h6 className="default">ونکور</h6>
                          <div className="auction-calender">
                            <div className="auction-date">
                              <span className="startdate">19 June</span>
                              <span className="enddate">22 June</span>
                            </div>
                            <div className="auction-time">
                              <span className="start-time">10</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link to="/" className="artwork-block w-25">
                        <div className="artwork-img">
                          <div className="bg-shadow tl-shadow10">
                            <img
                              src={pic12}
                              width="493"
                              height="621"
                              alt=""
                              className="img-fluid"
                            />
                            <div className="artwork-category">
                              <span className="category-save artwork-bookmark"></span>
                              <span className="category-icon online-icon">
                                آنلاین
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="block-body">
                          <h4 className="default">از مجموعه قرمز</h4>
                          <h6 className="default">حسین کاظمی</h6>
                          <div
                            className="jumbotron countdown show start"
                            data-Date="2021/06/05 16:09:00"
                          >
                            <div className="running">
                              <timer>
                                <span className="days"></span>:
                                <span className="hours"></span>:
                                <span className="minutes"></span>
                                <span className="show-text"></span>
                              </timer>
                              <div className="break"></div>
                            </div>
                            <div className="ended">
                              <div className="text text-dark">
                                حراج به پایان رسید
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link to="/" className="artwork-block w-25">
                        <div className="artwork-img">
                          <div className="bg-shadow tl-shadow10">
                            <img
                              src={pic7}
                              width="275"
                              height="158"
                              alt=""
                              className="img-fluid"
                            />
                            <div className="artwork-category">
                              <span className="category-save artwork-bookmark"></span>
                              <span className="category-icon timed-icon">
                                مدت‌دار
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="block-body">
                          <h4 className="default">آرامش و سکوت در طبیعت بکر</h4>
                          <h6 className="default">همایون سلیمی</h6>
                          <div
                            className="jumbotron countdown show end"
                            data-Date="2021/10/12 23:09:00"
                          >
                            <div className="running">
                              <timer>
                                <span className="days"></span>:
                                <span className="hours"></span>:
                                <span className="minutes"></span>
                                <span className="show-text"></span>
                              </timer>
                              <div className="break"></div>
                            </div>
                            <div className="ended">
                              <div className="text text-dark">
                                حراج به پایان رسید
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link to="/" className="artwork-block w-25">
                        <div className="artwork-img">
                          <div className="bg-shadow tl-shadow10">
                            <img
                              src={pic11}
                              width="998"
                              height="880"
                              alt=""
                              className="img-fluid"
                            />
                            <div className="artwork-category">
                              <span className="category-save artwork-bookmark"></span>
                              <span className="category-icon firstoffer-icon">
                                اولین پیشنهاد
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="block-body">
                          <h4 className="default">از مجموعه پنجره قرمز</h4>
                          <h6 className="default">پریوش گنجی</h6>
                          <div className="auction-calender">
                            <div className="auction-date">
                              <span className="startdate">19 June</span>
                              <span className="enddate">22 June</span>
                            </div>
                            <div className="auction-time">
                              <span className="start-time">10</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="catsearch4"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div className="owl-carousel row">
                      <Link to="/" className="artwork-block w-25">
                        <div className="artwork-img">
                          <div className="bg-shadow tl-shadow10">
                            <img
                              src={pic5}
                              width="276"
                              height="226"
                              alt=""
                              className="img-fluid"
                            />
                            <div className="artwork-category">
                              <FontAwesomeIcon icon={faBookmark} />
                              {/* <span className="category-save artwork-bookmark"></span> */}
                              <span className="category-icon live-icon">
                                زنده
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="block-body">
                          <h4 className="default">از ژورنال سقاخانه</h4>
                          <h6 className="default">ونکور</h6>
                          <div className="auction-calender">
                            <div className="auction-date">
                              <span className="startdate">19 June</span>
                              <span className="enddate">22 June</span>
                            </div>
                            <div className="auction-time">
                              <span className="start-time">10</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link to="/" className="artwork-block w-25">
                        <div className="artwork-img">
                          <div className="bg-shadow tl-shadow10">
                            <img
                              src={pic12}
                              width="493"
                              height="621"
                              alt=""
                              className="img-fluid"
                            />
                            <div className="artwork-category">
                              <span className="category-save artwork-bookmark"></span>
                              <span className="category-icon online-icon">
                                آنلاین
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="block-body">
                          <h4 className="default">از مجموعه قرمز</h4>
                          <h6 className="default">حسین کاظمی</h6>
                          <div
                            className="jumbotron countdown show start"
                            data-Date="2021/06/05 16:09:00"
                          >
                            <div className="running">
                              <timer>
                                <span className="days"></span>:
                                <span className="hours"></span>:
                                <span className="minutes"></span>
                                <span className="show-text"></span>
                              </timer>
                              <div className="break"></div>
                            </div>
                            <div className="ended">
                              <div className="text text-dark">
                                حراج به پایان رسید
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link to="/" className="artwork-block w-25">
                        <div className="artwork-img">
                          <div className="bg-shadow tl-shadow10">
                            <img
                              src={pic7}
                              width="275"
                              height="158"
                              alt=""
                              className="img-fluid"
                            />
                            <div className="artwork-category">
                              <span className="category-save artwork-bookmark"></span>
                              <span className="category-icon timed-icon">
                                مدت‌دار
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="block-body">
                          <h4 className="default">آرامش و سکوت در طبیعت بکر</h4>
                          <h6 className="default">همایون سلیمی</h6>
                          <div
                            className="jumbotron countdown show end"
                            data-Date="2021/10/12 23:09:00"
                          >
                            <div className="running">
                              <timer>
                                <span className="days"></span>:
                                <span className="hours"></span>:
                                <span className="minutes"></span>
                                <span className="show-text"></span>
                              </timer>
                              <div className="break"></div>
                            </div>
                            <div className="ended">
                              <div className="text text-dark">
                                حراج به پایان رسید
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link to="/" className="artwork-block w-25">
                        <div className="artwork-img">
                          <div className="bg-shadow tl-shadow10">
                            <img
                              src={pic11}
                              width="998"
                              height="880"
                              alt=""
                              className="img-fluid"
                            />
                            <div className="artwork-category">
                              <span className="category-save artwork-bookmark"></span>
                              <span className="category-icon firstoffer-icon">
                                اولین پیشنهاد
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="block-body">
                          <h4 className="default">از مجموعه پنجره قرمز</h4>
                          <h6 className="default">پریوش گنجی</h6>
                          <div className="auction-calender">
                            <div className="auction-date">
                              <span className="startdate">19 June</span>
                              <span className="enddate">22 June</span>
                            </div>
                            <div className="auction-time">
                              <span className="start-time">10</span>
                            </div>
                          </div>
                        </div>
                      </Link>
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
export default Search;
