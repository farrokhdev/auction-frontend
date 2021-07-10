import React from "react";
import Slider1 from "../../images/slider1.jpg";
import Reminder from "../../images/reminder-active.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

function CardSales() {
    return (
        <>
            <div className="row-blocks">

                <div className="row">
                    <div className="col-xxl-2 col-md-3">
                        <div className="bg-shadow tr-shadow10">
                            <img src={Slider1} width="500" height="500" alt="" />
                        </div>
                    </div>
                    <div className="col-xxl-10 col-md-9">
                        <div className="block-head row">
                            <div className="col-xl-3 col-sm-4 col-3">
                                <span className="category-icon live-icon">
                                    <span className="d-none d-md-inline-block">حراج</span>
                                    زنده
                                </span>
                            </div>
                            <div className="col-xl-9 col-sm-8 col-9 textalign-left">
                                <img src={Reminder} alt="" />
                                <span className="reminder-icon" >یادآوری</span>
                                <button type="button" className="link-source">
                                    <span>
                                        <span className="d-none d-sm-inline-block">مشاهده </span>آثار (<span>25</span>)</span>
                                </button>
                            </div>
                        </div>
                        <div className="block-main">
                            <h5 className="default">فقط بصورت آنلاین زندگی کنید ، کتابهای عتیقه ، هنرهای تزئینی و تصاویر</h5>
                            <div className="block-detail">
                                <h6 className="default">هنر معاصر</h6>
                                <h6 className="default gray50">گالری آرتیبیشن</h6>
                            </div>
                        </div>
                        <div className="block-footer row">
                            <div className="col-sm-5">
                                <div className="jumbotron countdown show end date-show"
                                    data-Date='2021/06/05 16:09:00'>
                                    <div className="running">
                                        {/* <timer>
                                                    <span className="days"></span>:<span
                                                    className="hours"></span>:<span
                                                    className="minutes"></span><span
                                                    className="show-text"></span>
                                                </timer> */}
                                        <div className="break"></div>
                                    </div>
                                    <div className="ended">
                                        <div className="text">حراج به پایان رسید</div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-sm-7 textalign-left">
                                <button type="button" className="btn btn-gray ">
                                    <FontAwesomeIcon icon={faEye} />
                                    مشاهده زنده</button>
                                <button type="button" className="btn btn-main join">عضویت در حراج
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardSales;