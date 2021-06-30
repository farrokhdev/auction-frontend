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
      <main className="innercontent" id="all-auctions">
        <div className="container innercontainer">
          <Maintitle title={'حراجی'} />
          <div className="row">
            <Sidebar />
            <div className="col-lg-9">
              {Auctions && Auctions.length >= 1 ? Auctions.map((item, key) => {
                    return (
                        <div key={key} className="row-blocks">
                          <div className="row">
                            <div className="col-md-4">
                              <Link to="/" className="bg-shadow tr-shadow10">
                                <img src={slider1} width="500" height="500" alt=""/>
                              </Link>
                            </div>
                            <div className="col-md-8">
                              <div className="block-head row">
                                <div className="col-xl-3 col-sm-4 col-3">
                        <span className="category-icon live-icon">
                          <span className="d-none d-md-inline-block">حراج</span>{item.is_live_streaming ? "زنده" : ""}

                        </span>
                                </div>
                                <div className="col-xl-9 col-sm-8 col-9 textalign-left">
                                  <FontAwesomeIcon icon={faBell}/>
                                  <span className="reminder-icon ">یادآوری</span>
                                  <button type="button" className="link-source">
                          <span>
                            <span className="d-none d-sm-inline-block">
                              مشاهده{" "}
                            </span>
                            آثار (<span>25</span>)
                          </span>
                                  </button>
                                </div>
                              </div>
                              <div className="block-main">
                                <Link to="/">
                                  <h5 className="default">
                                    {item.text}
                                  </h5>
                                </Link>
                                <div className="block-detail">
                                  <h6 className="default">{item.title}</h6>
                                  <Link to="/" className="default">
                                    <h6 className="default gray50">گالری آرتیبیشن</h6>
                                  </Link>
                                </div>
                              </div>
                              <div className="block-footer row">
                                <div className="col-sm-5">
                                  <div
                                      className="jumbotron countdown show end date-show"
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
                                      <div className="text">حراج به پایان رسید</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-7 textalign-left">
                                  <button type="button" className="btn btn-gray ms-2">
                                    <FontAwesomeIcon icon={faEye}/>
                                    مشاهده زنده
                                  </button>
                                  <button type="button" className="btn btn-main join">
                                    عضویت در حراج
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    )
                  }) : ""}
              <div className="row-blocks">
                <div className="row">
                  <div className="col-md-4">
                    <Link to="/" className="bg-shadow tr-shadow10">
                      <img src={pic7} width="493" height="621" alt="" />
                    </Link>
                  </div>
                  <div className="col-md-8">
                    <div className="block-head row">
                      <div className="col-xl-3 col-sm-4 col-3">
                        <span className="category-icon online-icon">
                          <span className="d-none d-md-inline-block">حراج</span>{" "}
                          آنلاین
                        </span>
                      </div>
                      <div className="col-xl-9 col-sm-8 col-9 textalign-left">
                        <FontAwesomeIcon icon={faBell} />
                        <span className="reminder-icon">یادآوری</span>
                        <button type="button" className="link-source">
                          <span>
                            <span className="d-none d-sm-inline-block">
                              مشاهده{" "}
                            </span>
                            آثار (<span>10</span>)
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="block-main">
                      <Link to="/">
                        <h5 className="default">
                          هنرهای تزئینی و تصاویر عتیقه ، کتاب
                        </h5>
                      </Link>
                      <div className="block-detail">
                        <h6 className="default">هنرهای تجسمی</h6>
                        <Link to="/" className="default">
                          <h6 className="default gray50">هان گالری</h6>
                        </Link>
                      </div>
                    </div>
                    <div className="block-footer row">
                      <div className="col-sm-5">
                        <div
                          className="jumbotron countdown show start date-show"
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
                            <div className="text">حراج به پایان رسید</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-7 textalign-left">
                        <button type="button" className="btn btn-gray ms-2">
                          <FontAwesomeIcon icon={faEye} />
                          مشاهده زنده
                        </button>
                        <button type="button" className="btn btn-lightpink">
                          ثبت پیشنهاد
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row-blocks">
                <div className="row">
                  <div className="col-md-4">
                    <Link to="/" className="bg-shadow tr-shadow10">
                      <img src={pic2} width="998" height="880" alt="" />
                    </Link>
                  </div>
                  <div className="col-md-8">
                    <div className="block-head row">
                      <div className="col-xl-3 col-sm-4 col-3">
                        <span className="category-icon timed-icon">
                          <span className="d-none d-md-inline-block">حراج</span>
                          مدت‌دار{" "}
                        </span>
                      </div>
                      <div className="col-xl-9 col-sm-8 col-9 textalign-left">
                        <FontAwesomeIcon icon={faBell} />
                        <span className="reminder-icon">یادآوری</span>
                        <button type="button" className="link-source">
                          <span>
                            <span className="d-none d-sm-inline-block">
                              مشاهده{" "}
                            </span>
                            آثار (<span>24</span>)
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="block-main">
                      <Link to="/">
                        <h5 className="default">
                          Tranquility and Deep Silence in Pure Nature
                        </h5>
                      </Link>
                      <div className="block-detail">
                        <h6 className="default">Modern art</h6>
                        <Link to="/" className="default">
                          <h6 className="default gray50">گالری آرتیبیشن</h6>
                        </Link>
                      </div>
                    </div>
                    <div className="block-footer row">
                      <div className="col-sm-5">
                        <div className="auction-calender date-show">
                          <div className="auction-date">
                            <span className="start-date">7خرداد</span>
                            <span className="end-date">9 خرداد</span>
                          </div>
                          <div className="auction-time">
                            <span className="start-time">10</span>
                            <span className="end-time">22</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-7 textalign-left">
                        <button type="button" className="btn btn-gray ms-2">
                          <FontAwesomeIcon icon={faEye} />
                          View auction
                        </button>
                        <button type="button" className="btn btn-main join">
                          عضویت در حراج
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row-blocks">
                <div className="row">
                  <div className="col-md-4">
                    <Link to="/" className="bg-shadow tr-shadow10">
                      <img src={pic6} width="570" height="470" alt="" />
                    </Link>
                  </div>
                  <div className="col-md-8">
                    <div className="block-head row">
                      <div className="col-xl-3 col-sm-4 col-3">
                        <span className="category-icon live-icon">
                          <span className="d-none d-md-inline-block">حراج</span>{" "}
                          زنده
                        </span>
                      </div>
                      <div className="col-xl-9 col-sm-8 col-9 textalign-left">
                        <FontAwesomeIcon icon={faBell} />
                        <span className="reminder-icon">یادآوری</span>
                        <button type="button" className="link-source">
                          <span>
                            <span className="d-none d-sm-inline-block">
                              مشاهده{" "}
                            </span>
                            آثار (<span>25</span>)
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="block-main">
                      <Link to="/">
                        <h5 className="default">
                          فقط بصورت آنلاین زندگی کنید ، کتابهای عتیقه ، هنرهای
                          تزئینی و تصاویر
                        </h5>
                      </Link>
                      <div className="block-detail">
                        <h6 className="default">هنر معاصر</h6>
                        <Link to="/" className="default">
                          <h6 className="default gray50">گالری آرتیبیشن</h6>
                        </Link>
                      </div>
                    </div>
                    <div className="block-footer row">
                      <div className="col-sm-5">
                        <div
                          className="jumbotron countdown show end date-show"
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
                            <div className="text">حراج به پایان رسید</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-7 textalign-left">
                        <button type="button" className="btn btn-gray ms-2">
                          <FontAwesomeIcon icon={faEye} />
                          مشاهده زنده
                        </button>
                        <button type="button" className="btn btn-main join">
                          عضویت در حراج
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row-blocks">
                <div className="row">
                  <div className="col-md-4">
                    <Link to="/" className="bg-shadow tr-shadow10">
                      <img src={pic7} width="493" height="621" alt="" />
                    </Link>
                  </div>
                  <div className="col-md-8">
                    <div className="block-head row">
                      <div className="col-xl-3 col-sm-4 col-3">
                        <span className="category-icon online-icon">
                          <span className="d-none d-md-inline-block">حراج</span>{" "}
                          آنلاین
                        </span>
                      </div>
                      <div className="col-xl-9 col-sm-8 col-9 textalign-left">
                        <FontAwesomeIcon icon={faBell} />
                        <span className="reminder-icon">یادآوری</span>
                        <button type="button" className="link-source">
                          <span>
                            <span className="d-none d-sm-inline-block">
                              مشاهده{" "}
                            </span>
                            آثار (<span>10</span>)
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="block-main">
                      <Link to="/">
                        <h5 className="default">
                          هنرهای تزئینی و تصاویر عتیقه ، کتاب
                        </h5>
                      </Link>
                      <div className="block-detail">
                        <h6 className="default">هنرهای تجسمی</h6>
                        <Link to="/" className="default">
                          <h6 className="default gray50">هان گالری</h6>
                        </Link>
                      </div>
                    </div>
                    <div className="block-footer row">
                      <div className="col-sm-5">
                        <div
                          className="jumbotron countdown show start date-show"
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
                            <div className="text">حراج به پایان رسید</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-7 textalign-left">
                        <button type="button" className="btn btn-gray ms-2">
                          <FontAwesomeIcon icon={faEye} />
                          مشاهده زنده
                        </button>
                        <button type="button" className="btn btn-main join">
                          عضویت در حراج
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <nav aria-label="Page navigation">
                <ul className="pagination">
                  <li className="page-item">
                    <Link className="page-link" to="/" aria-label="Previous"></Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="/">
                      1
                    </Link>
                  </li>
                  <li className="page-item active" aria-current="page">
                    <Link className="page-link" to="/">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="/">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="/">
                      4
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="/" aria-label="Next"></Link>
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
