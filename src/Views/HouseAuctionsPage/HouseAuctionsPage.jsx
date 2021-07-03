import React , {useState} from 'react'
import PaginationComponent from '../../components/PaginationComponent';
import img from '../../images/logo-1.jpg';

function HouseAuctionsPage() {

    const [countHousAuction, ] = useState(0)

    const handeSelectPage = (e) => {
        console.log("Log Of Pagination", e);
        // setcurrentPage(e)
    }

return (

    <main className="innercontent" id="auction-houses">
        <div className="container innercontainer">
            <div className="row sm-mrgb50">
                <div className="col-6">
                    <div className="main-title d-inline-flex">
                        <h2 className="default titr">خانه‌های حراج</h2>
                        <ul className="breadcrumb-cs">
                            <li><a href="#">صفحه اصلی</a></li>
                            <li className="active">خانه‌های حراج</li>
                        </ul>
                    </div>
                </div>
                <div className="w-100 lg-mrgb50 d-lg-none d-block"></div>
                <div className="col-3 d-lg-none d-block">
                    <button type="button" className="btn-filter btn">فیلتر</button>
                </div>
                <div className="col-lg-6 col-9 ">
                    <div className="sort-block">
                        <span className="btn-sort">مرتب‌سازی با
                    <span className="d-none d-md-inline-block"> : </span>
                        </span>
                        <ul className="sort-list">
                            <li>جدیدترین</li>
                            <li className="active">نزدیک‌ترین</li>
                            <li>محبوب‌ترین</li>
                            <li>پرفروش‌ترین</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3 sidebar" id="left-side">
                    <button type="button" className="btn-getclose d-block d-lg-none"></button>
                    <div className="left-side">
                        <div className="result-box">
                            <div className="result-title">
                                <h6 className="default">نتایج:</h6>
                                <button type="button" className="btn-removeall">پاک کردن همه</button>
                            </div>
                            <div className="tags-box">
                                <a href="#" className="tag-box date">
                                    <span>3 اردیبهشت - </span>
                                    <span>6 اردیبهشت</span>
                                    <button type="button" className="btn-remove"></button>
                                </a>
                                <a href="#" className="tag-box date">
                                    <span>تهران</span>
                                    <button type="button" className="btn-remove"></button>
                                </a>
                                <a href="#" className="tag-box date">
                                    <span>آرتیبیشن</span>
                                    <button type="button" className="btn-remove"></button>
                                </a>
                            </div>
                        </div>
                        <div className="search-box">
                            <div className="search-input">
                                <input type="text" className="default-input"
                                    placeholder="در بیش از 100 حراج جستجو کنید." />
                                <button type="button" className="btn-search"></button>
                            </div>
                            <button type="button" className="btn-lightpink"><i
                                    className="fal fa-map-marker-alt"></i>جستجو بر اساس محل
                            </button>
                        </div>
                        <div className="accordion main-accordion" id="leftside">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="True" aria-controls="collapseTwo">
                                        شهرها
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse show"
                                    aria-labelledby="headingTwo">
                                    <div className="accordion-body">
                                        <div className="search-input">
                                            <input type="text" className="default-input"
                                                placeholder="شهر مورد نظر را وارد نمایید." />
                                            <button type="button" className="btn-search"></button>
                                        </div>
                                        <div className="list-box">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value=""
                                                    id="checkbox1"/>
                                                <label className="form-check-label" for="checkbox1">
                                                    اردبیل
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value=""
                                                    id="checkbox2"/>
                                                <label className="form-check-label" for="checkbox2">
                                                    ایلام
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value=""
                                                    id="checkbox3"/>
                                                <label className="form-check-label" for="checkbox3">
                                                    بوشهر
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" checked value=""
                                                    id="checkbox4"/>
                                                <label className="form-check-label" for="checkbox4">
                                                    تهران
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value=""
                                                    id="checkbox5"/>
                                                <label className="form-check-label" for="checkbox5">
                                                    سمنان
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value=""
                                                    id="checkbox6"/>
                                                <label className="form-check-label" for="checkbox6">
                                                    یزد
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="True"
                                        aria-controls="collapseThree">
                                        حوزه فعالیت
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse show"
                                    aria-labelledby="headingThree">
                                    <div className="accordion-body">
                                        <div className="list-box">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value=""
                                                    id="checkbox11"/>
                                                <label className="form-check-label" for="checkbox11">
                                                    نقاشی
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value=""
                                                    id="checkbox12"/>
                                                <label className="form-check-label" for="checkbox12">
                                                    عکاسی
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value=""
                                                    id="checkbox13"/>
                                                <label className="form-check-label" for="checkbox13">
                                                    مجسمه سازی
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" checked value=""
                                                    id="checkbox14"/>
                                                <label className="form-check-label" for="checkbox14">
                                                    خطاطی
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value=""
                                                    id="checkbox15"/>
                                                <label className="form-check-label" for="checkbox15">
                                                    خوشنویسی
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value=""
                                                    id="checkbox16"/>
                                                <label className="form-check-label" for="checkbox16">
                                                    نقاشی
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="row row-cols-xl-2 row-cols-1">
                        <div className="col">
                            <div className="h-block">
                                <div className="row">
                                    <div className="col-xl-5 col-3">
                                        <div className="h-block-img">
                                            <img src={img} width="159" height="159" alt="smart auction"
                                                className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-9">
                                        <div className="h-block-header">
                                            <div className="h-block-title">
                                                <h3 className="default">گالری ساربان</h3>
                                                <h6 className="default">هنرهای تجسمی, ...</h6>
                                            </div>
                                            <button type="button" className="btn-follow">دنبال کردن</button>
                                        </div>
                                        <div className="h-block-info">
                                            <a href="+982144258856" className="info-tel all-info">+98 21 4425 8856</a>
                                            <address className="all-info"><span className="province">تهران، </span>میدان
                                                هویزه، پلاک 103
                                            </address>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col">
                            <div className="h-block">
                                <div className="row">
                                    <div className="col-xl-5 col-3">
                                        <div className="h-block-img">
                                            <img src={img} width="159" height="159" alt="smart auction"
                                                className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-9">
                                        <div className="h-block-header">
                                            <div className="h-block-title">
                                                <h3 className="default">گالری ساربان</h3>
                                                <h6 className="default">هنرهای تجسمی</h6>
                                            </div>
                                            <button type="button" className="btn-follow">دنبال کردن</button>
                                        </div>
                                        <div className="h-block-info">
                                            <a href="+982144258856" className="info-tel all-info">+98 21 4425 8856</a>
                                            <address className="all-info"><span className="province">تهران، </span>میدان
                                                هویزه، پلاک 103
                                            </address>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col">
                            <div className="h-block">
                                <div className="row">
                                    <div className="col-xl-5 col-3">
                                        <div className="h-block-img">
                                            <img src={img} width="159" height="159" alt="smart auction"
                                                className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-9">
                                        <div className="h-block-header">
                                            <div className="h-block-title">
                                                <h3 className="default">گالری ساربان</h3>
                                                <h6 className="default">هنرهای تجسمی</h6>
                                            </div>
                                            <button type="button" className="btn-follow">دنبال کردن</button>
                                        </div>
                                        <div className="h-block-info">
                                            <a href="+982144258856" className="info-tel all-info">+98 21 4425 8856</a>
                                            <address className="all-info"><span className="province">تهران، </span>میدان
                                                هویزه، پلاک 103
                                            </address>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col">
                            <div className="h-block">
                                <div className="row">
                                    <div className="col-xl-5 col-3">
                                        <div className="h-block-img">
                                            <img src={img} width="159" height="159" alt="smart auction"
                                                className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-9">
                                        <div className="h-block-header">
                                            <div className="h-block-title">
                                                <h3 className="default">گالری ساربان</h3>
                                                <h6 className="default">هنرهای تجسمی, ...</h6>
                                            </div>
                                            <button type="button" className="btn-follow">دنبال کردن</button>
                                        </div>
                                        <div className="h-block-info">
                                            <a href="+982144258856" className="info-tel all-info">+98 21 4425 8856</a>
                                            <address className="all-info"><span className="province">تهران، </span>میدان
                                                هویزه، پلاک 103
                                            </address>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col">
                            <div className="h-block">
                                <div className="row">
                                    <div className="col-xl-5 col-3">
                                        <div className="h-block-img">
                                            <img src={img} width="159" height="159" alt="smart auction"
                                                className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-9">
                                        <div className="h-block-header">
                                            <div className="h-block-title">
                                                <h3 className="default">گالری ساربان</h3>
                                                <h6 className="default">هنرهای تجسمی</h6>
                                            </div>
                                            <button type="button" className="btn-follow">دنبال کردن</button>
                                        </div>
                                        <div className="h-block-info">
                                            <a href="+982144258856" className="info-tel all-info">+98 21 4425 8856</a>
                                            <address className="all-info"><span className="province">تهران، </span>میدان
                                                هویزه، پلاک 103
                                            </address>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col">
                            <div className="h-block">
                                <div className="row">
                                    <div className="col-xl-5 col-3">
                                        <div className="h-block-img">
                                            <img src={img} width="159" height="159" alt="smart auction"
                                                className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-9">
                                        <div className="h-block-header">
                                            <div className="h-block-title">
                                                <h3 className="default">گالری ساربان</h3>
                                                <h6 className="default">هنرهای تجسمی</h6>
                                            </div>
                                            <button type="button" className="btn-follow">دنبال کردن</button>
                                        </div>
                                        <div className="h-block-info">
                                            <a href="+982144258856" className="info-tel all-info">+98 21 4425 8856</a>
                                            <address className="all-info"><span className="province">تهران، </span>میدان
                                                هویزه، پلاک 103
                                            </address>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <PaginationComponent count={countHousAuction} handeSelectPage={handeSelectPage} />
                    {/* <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous"></a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item active" aria-current="page"><a className="page-link" href="#">2</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next"></a>
                            </li>
                        </ul>
                    </nav> */}
                </div>
            </div>
        </div>
    </main>

)
}

export default HouseAuctionsPage;