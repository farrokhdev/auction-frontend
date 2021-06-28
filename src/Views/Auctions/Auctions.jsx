import React, {useEffect, useState} from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";

import slider1 from "../../images/slider1.jpg";
import pic7 from "../../images/pic7.jpg";
import pic2 from "../../images/pic2.jpg";
import pic6 from "../../images/pic6.jpg";

import {
  faBell,
  faMapMarkedAlt,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Maintitle from "../../components/main title for all";
import Sidebar from "../../components/side-bar";
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";

function Auctions() {

  const [Auctions, setAuctions] = useState("");
  const [pageSize, setPageSize] = useState(9);

  const getProducts = (page_size=pageSize) => {
    axios.get(`${BASE_URL}/sale/auctions/`)
        .then(resp => {
          if (resp.data.code === 200) {
            setAuctions(resp.data.data.result)
          }

        })
        .catch(err => {
          console.error(err);
        })
  }

  useEffect(() => {
    getProducts()

  }, [])

  return (
    <div dir="rtl">
      <Header />
      <main class="innercontent" id="all-auctions">
        <div class="container innercontainer">
          <Maintitle title={'حراجی'} />
          <div class="row">
            <Sidebar />
            <div class="col-lg-9">
              {Auctions && Auctions.length >= 1 ? Auctions.map((item, key) => {
                    return (
                        <div key={key} class="row-blocks">
                          <div class="row">
                            <div class="col-md-4">
                              <Link to="/" class="bg-shadow tr-shadow10">
                                <img src={slider1} width="500" height="500" alt=""/>
                              </Link>
                            </div>
                            <div class="col-md-8">
                              <div class="block-head row">
                                <div class="col-xl-3 col-sm-4 col-3">
                        <span class="category-icon live-icon">
                          <span class="d-none d-md-inline-block">حراج</span>{item.is_live_streaming ? "زنده" : ""}

                        </span>
                                </div>
                                <div class="col-xl-9 col-sm-8 col-9 textalign-left">
                                  <FontAwesomeIcon icon={faBell}/>
                                  <span class="reminder-icon ">یادآوری</span>
                                  <button type="button" class="link-source">
                          <span>
                            <span class="d-none d-sm-inline-block">
                              مشاهده{" "}
                            </span>
                            آثار (<span>25</span>)
                          </span>
                                  </button>
                                </div>
                              </div>
                              <div class="block-main">
                                <Link to="/">
                                  <h5 class="default">
                                    {item.text}
                                  </h5>
                                </Link>
                                <div class="block-detail">
                                  <h6 class="default">{item.title}</h6>
                                  <Link to="/" class="default">
                                    <h6 class="default gray50">گالری آرتیبیشن</h6>
                                  </Link>
                                </div>
                              </div>
                              <div class="block-footer row">
                                <div class="col-sm-5">
                                  <div
                                      class="jumbotron countdown show end date-show"
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
                                </div>
                                <div class="col-sm-7 textalign-left">
                                  <button type="button" class="btn btn-gray ms-2">
                                    <FontAwesomeIcon icon={faEye}/>
                                    مشاهده زنده
                                  </button>
                                  <button type="button" class="btn btn-main join">
                                    عضویت در حراج
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    )
                  }) : ""}
              <div class="row-blocks">
                <div class="row">
                  <div class="col-md-4">
                    <Link to="/" class="bg-shadow tr-shadow10">
                      <img src={pic7} width="493" height="621" alt="" />
                    </Link>
                  </div>
                  <div class="col-md-8">
                    <div class="block-head row">
                      <div class="col-xl-3 col-sm-4 col-3">
                        <span class="category-icon online-icon">
                          <span class="d-none d-md-inline-block">حراج</span>{" "}
                          آنلاین
                        </span>
                      </div>
                      <div class="col-xl-9 col-sm-8 col-9 textalign-left">
                        <FontAwesomeIcon icon={faBell} />
                        <span class="reminder-icon">یادآوری</span>
                        <button type="button" class="link-source">
                          <span>
                            <span class="d-none d-sm-inline-block">
                              مشاهده{" "}
                            </span>
                            آثار (<span>10</span>)
                          </span>
                        </button>
                      </div>
                    </div>
                    <div class="block-main">
                      <Link to="/">
                        <h5 class="default">
                          هنرهای تزئینی و تصاویر عتیقه ، کتاب
                        </h5>
                      </Link>
                      <div class="block-detail">
                        <h6 class="default">هنرهای تجسمی</h6>
                        <Link to="/" class="default">
                          <h6 class="default gray50">هان گالری</h6>
                        </Link>
                      </div>
                    </div>
                    <div class="block-footer row">
                      <div class="col-sm-5">
                        <div
                          class="jumbotron countdown show start date-show"
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
                      </div>
                      <div class="col-sm-7 textalign-left">
                        <button type="button" class="btn btn-gray ms-2">
                          <FontAwesomeIcon icon={faEye} />
                          مشاهده زنده
                        </button>
                        <button type="button" class="btn btn-lightpink">
                          ثبت پیشنهاد
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row-blocks">
                <div class="row">
                  <div class="col-md-4">
                    <Link to="/" class="bg-shadow tr-shadow10">
                      <img src={pic2} width="998" height="880" alt="" />
                    </Link>
                  </div>
                  <div class="col-md-8">
                    <div class="block-head row">
                      <div class="col-xl-3 col-sm-4 col-3">
                        <span class="category-icon timed-icon">
                          <span class="d-none d-md-inline-block">حراج</span>
                          مدت‌دار{" "}
                        </span>
                      </div>
                      <div class="col-xl-9 col-sm-8 col-9 textalign-left">
                        <FontAwesomeIcon icon={faBell} />
                        <span class="reminder-icon">یادآوری</span>
                        <button type="button" class="link-source">
                          <span>
                            <span class="d-none d-sm-inline-block">
                              مشاهده{" "}
                            </span>
                            آثار (<span>24</span>)
                          </span>
                        </button>
                      </div>
                    </div>
                    <div class="block-main">
                      <Link to="/">
                        <h5 class="default">
                          Tranquility and Deep Silence in Pure Nature
                        </h5>
                      </Link>
                      <div class="block-detail">
                        <h6 class="default">Modern art</h6>
                        <Link to="/" class="default">
                          <h6 class="default gray50">گالری آرتیبیشن</h6>
                        </Link>
                      </div>
                    </div>
                    <div class="block-footer row">
                      <div class="col-sm-5">
                        <div class="auction-calender date-show">
                          <div class="auction-date">
                            <span class="start-date">7خرداد</span>
                            <span class="end-date">9 خرداد</span>
                          </div>
                          <div class="auction-time">
                            <span class="start-time">10</span>
                            <span class="end-time">22</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-7 textalign-left">
                        <button type="button" class="btn btn-gray ms-2">
                          <FontAwesomeIcon icon={faEye} />
                          View auction
                        </button>
                        <button type="button" class="btn btn-main join">
                          عضویت در حراج
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row-blocks">
                <div class="row">
                  <div class="col-md-4">
                    <Link to="/" class="bg-shadow tr-shadow10">
                      <img src={pic6} width="570" height="470" alt="" />
                    </Link>
                  </div>
                  <div class="col-md-8">
                    <div class="block-head row">
                      <div class="col-xl-3 col-sm-4 col-3">
                        <span class="category-icon live-icon">
                          <span class="d-none d-md-inline-block">حراج</span>{" "}
                          زنده
                        </span>
                      </div>
                      <div class="col-xl-9 col-sm-8 col-9 textalign-left">
                        <FontAwesomeIcon icon={faBell} />
                        <span class="reminder-icon">یادآوری</span>
                        <button type="button" class="link-source">
                          <span>
                            <span class="d-none d-sm-inline-block">
                              مشاهده{" "}
                            </span>
                            آثار (<span>25</span>)
                          </span>
                        </button>
                      </div>
                    </div>
                    <div class="block-main">
                      <Link to="/">
                        <h5 class="default">
                          فقط بصورت آنلاین زندگی کنید ، کتابهای عتیقه ، هنرهای
                          تزئینی و تصاویر
                        </h5>
                      </Link>
                      <div class="block-detail">
                        <h6 class="default">هنر معاصر</h6>
                        <Link to="/" class="default">
                          <h6 class="default gray50">گالری آرتیبیشن</h6>
                        </Link>
                      </div>
                    </div>
                    <div class="block-footer row">
                      <div class="col-sm-5">
                        <div
                          class="jumbotron countdown show end date-show"
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
                      </div>
                      <div class="col-sm-7 textalign-left">
                        <button type="button" class="btn btn-gray ms-2">
                          <FontAwesomeIcon icon={faEye} />
                          مشاهده زنده
                        </button>
                        <button type="button" class="btn btn-main join">
                          عضویت در حراج
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row-blocks">
                <div class="row">
                  <div class="col-md-4">
                    <Link to="/" class="bg-shadow tr-shadow10">
                      <img src={pic7} width="493" height="621" alt="" />
                    </Link>
                  </div>
                  <div class="col-md-8">
                    <div class="block-head row">
                      <div class="col-xl-3 col-sm-4 col-3">
                        <span class="category-icon online-icon">
                          <span class="d-none d-md-inline-block">حراج</span>{" "}
                          آنلاین
                        </span>
                      </div>
                      <div class="col-xl-9 col-sm-8 col-9 textalign-left">
                        <FontAwesomeIcon icon={faBell} />
                        <span class="reminder-icon">یادآوری</span>
                        <button type="button" class="link-source">
                          <span>
                            <span class="d-none d-sm-inline-block">
                              مشاهده{" "}
                            </span>
                            آثار (<span>10</span>)
                          </span>
                        </button>
                      </div>
                    </div>
                    <div class="block-main">
                      <Link to="/">
                        <h5 class="default">
                          هنرهای تزئینی و تصاویر عتیقه ، کتاب
                        </h5>
                      </Link>
                      <div class="block-detail">
                        <h6 class="default">هنرهای تجسمی</h6>
                        <Link to="/" class="default">
                          <h6 class="default gray50">هان گالری</h6>
                        </Link>
                      </div>
                    </div>
                    <div class="block-footer row">
                      <div class="col-sm-5">
                        <div
                          class="jumbotron countdown show start date-show"
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
                      </div>
                      <div class="col-sm-7 textalign-left">
                        <button type="button" class="btn btn-gray ms-2">
                          <FontAwesomeIcon icon={faEye} />
                          مشاهده زنده
                        </button>
                        <button type="button" class="btn btn-main join">
                          عضویت در حراج
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <nav aria-label="Page navigation">
                <ul class="pagination">
                  <li class="page-item">
                    <Link class="page-link" to="/" aria-label="Previous"></Link>
                  </li>
                  <li class="page-item">
                    <Link class="page-link" to="/">
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

export default Auctions;
