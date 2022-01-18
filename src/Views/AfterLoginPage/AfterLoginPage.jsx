import React, { useState } from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";
import slider1 from '../../images/slider1.jpg';
import slider2 from '../../images/slider2.jpg';
import slider3 from '../../images/slider3.jpg';
import { Link } from 'react-router-dom';
import { Spin } from "antd";
import LastProductsAuctionSlider from './LastProductsAuctionSlider';
import LastProducts from './LastProducts';
import LastAuctions from './LastAuctions';
import { connect } from 'react-redux';


function AfterLoginPage(props) {
    console.log("After Login", props.auth.is_logged_in)
    const [loading, setLoading] = useState(false)

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
                                    <Link to="/artworks/" className="btn-view">مشاهده همه</Link>
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
                                        <Link to={"/auctions/"} className="btn-view">مشاهده همه</Link>
                                    </div>
                                </div>
                            </div>
                            <LastAuctions setLoading={setLoading} />
                        </section>
                    </div>

                    <div className="container containercs ">
                        {/* <section className="latest-articles">
                            <div className="container innercontainer">
                                <div className="row">
                                    <div className="col">
                                        <div className="main-title">
                                            <h2 className="default titr">آخرین اخبار و مقالات</h2>
                                            <Link to="/" className="btn-view">مشاهده همه</Link>
                                        </div>
                                    </div>
                                </div>
                                <div id="latest-articles" className="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="carousel-inner">
                                                <div className="carousel-item active" data-bs-interval="10000">
                                                    <div className="bg-shadow tl-shadow20">
                                                        <img src={slider1} className="d-block w-100" alt="..." />
                                                    </div>
                                                    <div className="carousel-caption ">
                                                        <span className="showdate">7 اردیبهشت 99</span>
                                                        <h5 className="default">سیزدهمین دوره حراج تهران تحت تاثیر کرونا به
                                                            شیوه متفاوتی برگزار شد</h5>
                                                        <p className="d-sm-none d-lg-block">لورم ایپسوم متن ساختگی با تولید
                                                            سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                                                            است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                                                            هدف بهبود ابزارهای کاربردی می باشد.</p>
                                                    </div>
                                                </div>
                                                <div className="carousel-item" data-bs-interval="2000">
                                                    <div className="bg-shadow tl-shadow20">
                                                        <img src={slider2} className="d-block w-100" alt="..." />
                                                    </div>
                                                    <div className="carousel-caption ">
                                                        <span className="showdate">7 اردیبهشت 99</span>
                                                        <h5 className="default">Consectetuer adipiscing elit, sed diam
                                                            nonummy nibh </h5>
                                                        <p className="d-sm-none d-lg-block">that perfect piece is just
                                                            waiting for you,
                                                            Delve
                                                            into our world of unique and
                                                            amazing finds from the comfort of your sofa.</p>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <div className="bg-shadow tl-shadow20">
                                                        <img src={slider3} className="d-block w-100" alt="..." />
                                                    </div>
                                                    <div className="carousel-caption ">
                                                        <span className="showdate">7 اردیبهشت 99</span>
                                                        <h5 className="default">Sed diam nonummy nibh </h5>
                                                        <p className="d-sm-none d-lg-block">Unique and amazing finds from
                                                            the comfort of
                                                            your
                                                            sofa -
                                                            that perfect piece is just waiting for you.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-5 ">
                                            <div className="carousel-controls">
                                                <button className="carousel-control-prev" type="button"
                                                    data-bs-target="#latest-articles" data-bs-slide="prev">
                                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span className="visually-hidden">قبلی</span>
                                                </button>
                                                <div className="carousel-number-indicator">
                                                    <span className="now-slide">00</span>
                                                    <span className="all-slide">05</span>
                                                </div>
                                                <button className="carousel-control-next" type="button"
                                                    data-bs-target="#latest-articles" data-bs-slide="next">
                                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span className="visually-hidden">بعدی</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row flex-row-reverse ">
                                        <div className="col-lg-6">
                                            <div className="carousel-indicators">
                                                <div className="row position-relative">
                                                    <div className="col-4">
                                                        <img src={slider1} alt="" data-bs-target="#latest-articles"
                                                            data-bs-slide-to="0" className="active max-width-180"
                                                            aria-current="true" aria-label="Slide 1" />
                                                    </div>
                                                    <div className="col-4">
                                                        <img src={slider2} alt="" width="500" height="390"
                                                            data-bs-target="#latest-articles" data-bs-slide-to="1"
                                                            className="max-width-180"
                                                            aria-label="Slide 2" />
                                                    </div>
                                                    <div className="col-4">
                                                        <img src={slider3} alt="" width="500" height="390"
                                                            data-bs-target="#latest-articles" data-bs-slide-to="2"
                                                            className="max-width-180"
                                                            aria-label="Slide 3" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section> */}
                        <section className="about">
                            <div className="container innercontainer">
                                <div className="row">
                                    <div className="col">
                                        <div className="main-title small">
                                            <h2 className="default titr">درباره ما</h2>
                                            <Link to="/" className="btn-view">بیشتر</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="content-box">
                                            <div className="row">
                                                <div className="col-sm-8 ">
                                                    <h4 className="default">آرتیبیشن از هنر دوستان حمایت می‌کند</h4>
                                                    <p className="">برگزاری مزایده‌ها در دنیا فعالیتی نو محسوب نمی‌شود و برخی از خانه‌های حراج قدمتی چند صدساله در دنیا دارند. با ابن حال برگزاری مزایده در ایران نسبت به دنیا قدمت چندانی ندارد.
                                                        مزایده معمولا زمانی تعریف می‌شود که در بازار عرضه نسبت به بازار فاصله جدی دارد و با محدود شدن عرضه بین درخواست کنندگان مسابقه‌ای تحت عنوان مزایده شکل می‌گیرد.
                                                        با افزایش تعداد افرادی که علاقه‌مند به آثار محدود هستند رونق مزایده‌ها افزایش می‌یابد.
                                                        با توجه به محدودیت‌های رایج در توسعه بازار جهانی در ایران، بر آن شدیم در تسهیل خرید و فروش آثار هنری و کالاهای محدود بستری حرفه‌ای ایجاد نمائیم.
                                                        حال با ایجاد پلتفورمی اسمارت آکشن برآنیم در توسعه و ورونق بازار هنر با تعریف 5 نوع حراج آنلاین در ابتدا موفق شویم.
                                                        از سال 1395 در تحقیق و بررسی ایجاد پلتفورم مزایده آنلاین بودیم که از آبان 99 نسخه آزمایشی مزایده آنلاین ایجاد شد و با بررسی رفتار کاربری از زمستان 1400 نسخه اولیه اسمارت آکشن رونمائی گردید.</p>
                                                </div>
                                                <div className="col-sm-4 d-none d-sm-block">
                                                    <ul className="vertical-menu">
                                                        <li><Link to="/">شرایط استفاده</Link></li>
                                                        <li><Link to="/">حریم خصوصی</Link></li>
                                                        <li><Link to="/">همکاری با ما</Link></li>
                                                        <li><Link to="/">سوالات متداول</Link></li>
                                                        <li><Link to="/">تماس با ما</Link></li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    {/* <div className="col-lg-6">
                                        <div className="content-box newsletter">
                                            <div className="main-title">
                                                <h2 className="default titr">همین الان مشترک ما شوید!!</h2>
                                                <span className="btn-view">برای اطلاع از آخرین حراج‌ها</span>
                                                <div className="input-group-cs">
                                                    <input className="white" placeholder="Enter your Email ..." />
                                                    <button type="button" className="btn-input">ثبت</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div> */}
                                </div>
                            </div>
                        </section>
                    </div>
                </Spin>
            </main>
            <Footer />
        </React.Fragment>
    )
}


const mapStateToProps = (store) => {
    return {
        auth: store.authReducer,
    }
}

export default connect(mapStateToProps, null)(AfterLoginPage)

// export default AfterLoginPage;
