import React, { useState, useEffect } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Link } from "react-router-dom";
import { message, Spin } from "antd";
import LastProductsAuctionSlider from "./LastProductsAuctionSlider";
import LastProducts from "./LastProducts";
import LastAuctions from "./LastAuctions";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
// import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";

function AfterLoginPage(props) {
  //   console.log("After Login", props.auth.is_logged_in);
  const { i18n } = useTranslation();

  console.log(i18n);
  const blogsUrl = "https://artchart.net/api/v1/articles/recent";

  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);

  const [memberEmail, setMemberEmail] = useState();

  // GET BLOGS
  const getBlogs = async () => {
    setLoading(true);

    await axios
      .get(blogsUrl, {
        headers: {
          "Accept-Language": "fa",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      })
      .then((res) => {
        console.log(res.status);
        setBlogs(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getBlogs();
  }, []);

  console.log(BASE_URL);
  //  JOIN MEMERSHIP
  const sendProfile = () => {
    axios
      .post(`${BASE_URL}/account/membership/`, {
        email: memberEmail,
      })
      .then((res) => {
        if (res?.data) {
          message.success("ایمیل با موفقیت ارسال شد");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <React.Fragment>
      <Header newStyle={{ boxShadow: " none" }} />
      <main>
        <Spin spinning={loading}>
          <div className="container containercs ">
            <LastProductsAuctionSlider setLoading={setLoading} />
            <div className="row">
              <div className="col-md-3 col-sm-12">
                <div className="main-title">
                  <h2 className="default titr">آخرین آثار حراج</h2>
                  <Link to="/artworks/" className="btn-view">
                    مشاهده همه
                  </Link>
                </div>
              </div>
              <LastProducts />
            </div>
          </div>
          <div className="container-fluid">
            <section className="latest-auction">
              <div className="row">
                <div className="col">
                  <div className="main-title">
                    <h2 className="default titr">آخرین حراج‌ها</h2>
                    <Link to={"/auctions/"} className="btn-view">
                      مشاهده همه
                    </Link>
                  </div>
                </div>
              </div>
              <LastAuctions setLoading={setLoading} />
            </section>
          </div>

          <div className="container containercs ">
            <section className="latest-articles">
              <div className="container innercontainer">
                <div className="row">
                  <div className="col">
                    <div className="main-title">
                      <h2 className="default titr">آخرین اخبار و مقالات</h2>
                      <Link to="/" className="btn-view">
                        مشاهده همه
                      </Link>
                    </div>
                  </div>
                </div>

                <div
                  id="latest-articles"
                  className="carousel slide carousel-fade"
                  data-bs-ride="carousel"
                >
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="carousel-inner">
                        {blogs?.data?.map((blog, k) => {
                          return (
                            <div
                              className={`carousel-item ${
                                blog.title ===
                                  "موانع سرمایه‌گذاری و جذب سرمایه در برپایی اکسپوها و فعالیت گالری‌ها در ایران" &&
                                "active"
                              }`}
                              data-bs-interval="2000"
                              key={k}
                            >
                              <div className="bg-shadow tl-shadow20">
                                <img
                                  src={blog?.introImageUrl}
                                  className="d-block w-100"
                                  alt={blog?.introImageAlt}
                                />
                              </div>
                              <div className="carousel-caption ">
                                <span className="showdate">
                                  {blog?.publishedAt}
                                </span>
                                <h5 className="default">{blog?.title}</h5>
                                <p
                                  className="d-sm-none d-lg-block"
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      blog?.introDescription.slice(0, 120) +
                                      "...",
                                  }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-5 ">
                      <div className="carousel-controls">
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#latest-articles"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">قبلی</span>
                        </button>
                        <div className="carousel-number-indicator">
                          <span className="now-slide">00</span>
                          <span className="all-slide">05</span>
                        </div>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#latest-articles"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">بعدی</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row flex-row-reverse ">
                    <div className="col-lg-6">
                      <div className="carousel-indicators">
                        <div className="row position-relative">
                          {blogs?.data?.map((blog, k) => {
                            console.log(k);
                            return (
                              <div className="col-4" key={k}>
                                <img
                                  src={blog?.introImageUrl}
                                  alt=""
                                  data-bs-target="#latest-articles"
                                  data-bs-slide-to={k}
                                  className="active max-width-180"
                                  aria-current={k == 1 && "true"}
                                  aria-label={`Slide${k + 1}`}
                                />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="about">
              <div className="container innercontainer">
                <div className="row">
                  <div className="col">
                    <div className="main-title small">
                      <h2 className="default titr">درباره ما</h2>
                      <Link to="/" className="btn-view">
                        بیشتر
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="content-box">
                      <div className="row">
                        <div className="col-sm-8 ">
                          <h4 className="default">
                            آرتیبیشن از هنر دوستان حمایت می‌کند
                          </h4>
                          <p className="">
                            برگزاری مزایده‌ها در دنیا فعالیتی نو محسوب نمی‌شود و
                            برخی از خانه‌های حراج قدمتی چند صدساله در دنیا
                            دارند. با ابن حال برگزاری مزایده در ایران نسبت به
                            دنیا قدمت چندانی ندارد. مزایده معمولا زمانی تعریف
                            می‌شود که در بازار عرضه نسبت به بازار فاصله جدی دارد
                            و با محدود شدن عرضه بین درخواست کنندگان مسابقه‌ای
                            تحت عنوان مزایده شکل می‌گیرد. با افزایش تعداد افرادی
                            که علاقه‌مند به آثار محدود هستند رونق مزایده‌ها
                            افزایش می‌یابد. با توجه به محدودیت‌های رایج در توسعه
                            بازار جهانی در ایران، بر آن شدیم در تسهیل خرید و
                            فروش آثار هنری و کالاهای محدود بستری حرفه‌ای ایجاد
                            نمائیم. حال با ایجاد پلتفورمی اسمارت آکشن برآنیم در
                            توسعه و ورونق بازار هنر با تعریف 5 نوع حراج آنلاین
                            در ابتدا موفق شویم. از سال 1395 در تحقیق و بررسی
                            ایجاد پلتفورم مزایده آنلاین بودیم که از آبان 99 نسخه
                            آزمایشی مزایده آنلاین ایجاد شد و با بررسی رفتار
                            کاربری از زمستان 1400 نسخه اولیه اسمارت آکشن رونمائی
                            گردید.
                          </p>
                        </div>
                        <div className="col-sm-4 d-none d-sm-block">
                          <ul className="vertical-menu">
                            <li>
                              <Link to="/">شرایط استفاده</Link>
                            </li>
                            <li>
                              <Link to="/">حریم خصوصی</Link>
                            </li>
                            <li>
                              <Link to="/">همکاری با ما</Link>
                            </li>
                            <li>
                              <Link to="/">سوالات متداول</Link>
                            </li>
                            <li>
                              <Link to="/">تماس با ما</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="content-box newsletter">
                      <div className="main-title">
                        <h2 className="default titr">
                          همین الان مشترک ما شوید!!
                        </h2>
                        <span className="btn-view">
                          برای اطلاع از آخرین حراج‌ها
                        </span>
                        <div className="input-group-cs">
                          <input
                            className="white"
                            placeholder="Enter your Email ..."
                            value={memberEmail}
                            onChange={(e) => setMemberEmail(e.target.value)}
                          />
                          <button
                            onClick={sendProfile}
                            type="button"
                            className="btn-input"
                          >
                            ثبت
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Spin>
      </main>
      <Footer />
    </React.Fragment>
  );
}

const mapStateToProps = (store) => {
  return {
    auth: store.authReducer,
  };
};

export default connect(mapStateToProps, null)(AfterLoginPage);

// export default AfterLoginPage;
