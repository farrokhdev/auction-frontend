import React, {useEffect, useState} from 'react'
import HeaderPanel from '../../components/HeaderPanel';
import PanelSidebar from '../../components/PanelSidebar';
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faPen, faTimes, faImages} from "@fortawesome/free-solid-svg-icons";
import moment from "jalali-moment";
import {message, Pagination} from "antd";
import 'antd/dist/antd.css';
import queryString from "query-string";

function UserPanelSellAdvice() {
    const [Products, setProducts] = useState("");
    const [countProducts, setCountProducts] = useState(0)
    const [params, setParams] = useState({
        page : 1,
        page_size : 10,
    })

    const queries = queryString.stringify(params);

    const getProducts = () => {
        axios.get(`${BASE_URL}/sale/product/?${queries}`)
            .then(resp => {
                console.log(resp)
                if (resp.data.code === 200) {
                    setProducts(resp.data.data.result)
                    setCountProducts(resp.data.data.count)
                }

            })
            .catch(err => {
                console.error(err);
            })
    }

    useEffect(() => {
        getProducts()
    }, [params])

    const handeSelectPage = (e) => {
        console.log("Log Of Pagination", e);
        setParams({
            ...params , page : e
        })
    }

    const isApproved = (value) => {
        switch (value){
            case "waiting":
                return {
                    title: "در انتظار تایید",
                    css: "pending"
                }
            case "accept":
                return {
                    title: "تایید شده",
                    css: "accepted"
                }
            case "reject":
                return {
                    title: "رد شده",
                    css: "failed"
                }
            default:
                return {
                    title: "",
                    css: ""
                }
        }
    }


    return (
        <>
            <HeaderPanel titlePage={'مشاوره فروش'}/>
            <div className="panel-main">
                <PanelSidebar/>

                <div className="panel-body">
                    <div className="panel-container">
                        <div className="">
                            <a href={'#/add-artworks'} className="btn btn-default">
                                <FontAwesomeIcon style={{marginLeft: 5}} icon={faPlus}/>
                                اثر جدید
                            </a>
                            <ul className="nav nav-tabs justify-content-star main-tab mrgt30" id="profile-tab"
                                role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="tab-11" data-bs-toggle="tab"
                                            data-bs-target="#profiletab1"
                                            type="button" role="tab" aria-controls="profiletab1"
                                            aria-selected="true">همه
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="tab-21" data-bs-toggle="tab"
                                            data-bs-target="#profiletab2"
                                            type="button" role="tab" aria-controls="profiletab2"
                                            aria-selected="false">در انتظار بررسی
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="tab-31" data-bs-toggle="tab"
                                            data-bs-target="#profiletab3"
                                            type="button" role="tab" aria-controls="profiletab3"
                                            aria-selected="false">تایید شده
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="tab-41" data-bs-toggle="tab"
                                            data-bs-target="#profiletab4"
                                            type="button" role="tab" aria-controls="profiletab4"
                                            aria-selected="false">رد شده
                                    </button>
                                </li>
                            </ul>
                            <div className="tab-content" id="profile-tab-content">
                                <div className="tab-pane fade show active" id="profiletab1" role="tabpanel"
                                     aria-labelledby="profiletab1-tab">
                                    <div className="table-responsive">
                                        <table className="panel-table selladvice">
                                            <tbody>
                                            {Products && Products.length >= 1 ? Products.map((item, key) => {
                                                return (
                                                    <tr>
                                                        <td className="artwork-img">
                                                            <img src={item.media.exact_url} width="317" height="280" alt=""
                                                                 className="img-fluid"/>
                                                        </td>
                                                        <td className="textalign-left">
                                                            <span>{item.persian_artist_name}</span>
                                                            <h5 className="default">{item.artwork_title}</h5>
                                                        </td>
                                                        <td>
                                                            <p className="">پیشنهاد شما: <span
                                                                className="bid-style">{item.price} <span
                                                                className="price-unit">تومان</span></span></p>
                                                        </td>
                                                        <td>
                                                            <button type="button" className={"sell-state " + (isApproved(item.is_approve).css)}>
                                                                {isApproved(item.is_approve).title}
                                                            </button>
                                                        </td>
                                                        <td>
                                                            {item.is_approve ?
                                                            <button type="button" className="btn-default" data-bs-toggle="modal"
                                                                    data-bs-target="#viewoffers"><span
                                                                className="d-none d-xl-inline-block">مشاهده</span> پیشنهادات
                                                            </button>
                                                                : "" }
                                                        </td>
                                                        <td>
                                                            <button type="button" className="operations" style={{margin:8}}>
                                                                <FontAwesomeIcon icon={faTimes}/>
                                                            </button>
                                                            <button type="button" className="operations" style={{margin:8}}>
                                                                <FontAwesomeIcon className={'fal'} icon={faPen}/>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            }) : ""}
                                            </tbody>
                                        </table>
                                    </div>
                                    <Pagination
                                        style={{direction: 'ltr', textAlign: 'center', marginTop: 5}}
                                        responsive
                                        onChange={(e) => handeSelectPage(e)}
                                        defaultCurrent={1}
                                        total={countProducts}
                                        defaultPageSize={10}
                                    />
                                </div>
                                <div className="tab-pane fade" id="profiletab2" role="tabpanel"
                                     aria-labelledby="profiletab2-tab">
                                    <div className="table-responsive">
                                        <table className="panel-table selladvice">
                                            <tbody>
                                            <tr>
                                                <td className="artwork-img">
                                                    <img src="img/img-6.jpg" width="317" height="280" alt=""
                                                         className="img-fluid"/>
                                                </td>
                                                <td className="textalign-left">
                                                    <span>صادق ادهم</span>
                                                    <h5 className="default">از سری سقاخانه</h5>
                                                </td>
                                                <td>
                                                    <p className="">پیشنهاد شما: <span className="bid-style">3000 <span
                                                        className="price-unit">تومان</span></span></p>
                                                </td>
                                                <td>
                                                    <button type="button" className="sell-state pending">در انتظار
                                                        بررسی
                                                    </button>
                                                </td>
                                                <td>

                                                </td>
                                                <td>
                                                    <button type="button" className="operations"><i
                                                        className="fal fa-times"/>
                                                    </button>
                                                    <button type="button" className="operations"><i
                                                        className="fal fa-pen"/></button>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="profiletab3" role="tabpanel"
                                     aria-labelledby="profiletab3-tab">
                                    <div className="table-responsive">
                                        <table className="panel-table selladvice">
                                            <tbody>
                                            <tr>
                                                <td className="artwork-img">
                                                    <img src="img/img-6.jpg" width="317" height="280" alt=""
                                                         className="img-fluid"/>
                                                </td>
                                                <td className="textalign-left">
                                                    <span>صادق ادهم</span>
                                                    <h5 className="default">از سری سقاخانه</h5>
                                                </td>
                                                <td>
                                                    <p className="">پیشنهاد شما: <span className="bid-style">3000 <span
                                                        className="price-unit">تومان</span></span></p>
                                                </td>
                                                <td>
                                                    <button type="button" className="sell-state accepted">تایید شده
                                                    </button>
                                                </td>
                                                <td>
                                                    <button type="button" className="btn-default" data-bs-toggle="modal"
                                                            data-bs-target="#viewoffers"><span
                                                        className="d-none d-xl-inline-block">مشاهده</span> پیشنهادات
                                                    </button>
                                                </td>
                                                <td>
                                                    <button type="button" className="operations"><i
                                                        className="fal fa-times"/>
                                                    </button>
                                                    <button type="button" className="operations"><i
                                                        className="fal fa-pen"/></button>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="profiletab4" role="tabpanel"
                                     aria-labelledby="profiletab3-tab">
                                    <div className="table-responsive">
                                        <table className="panel-table selladvice">
                                            <tbody>
                                            <tr>
                                                <td className="artwork-img">
                                                    <img src="img/img-6.jpg" width="317" height="280" alt=""
                                                         className="img-fluid"/>
                                                </td>
                                                <td className="textalign-left">
                                                    <span>صادق ادهم</span>
                                                    <h5 className="default">از سری سقاخانه</h5>
                                                </td>
                                                <td>
                                                    <p className="">پیشنهاد شما: <span className="bid-style">3000 <span
                                                        className="price-unit">تومان</span></span></p>
                                                </td>
                                                <td>
                                                    <button type="button" className="sell-state failed">رد شده</button>
                                                </td>
                                                <td>
                                                    <button type="button" className="btn-default" data-bs-toggle="modal"
                                                            data-bs-target="#viewoffers"><span
                                                        className="d-none d-xl-inline-block">مشاهده</span> پیشنهادات
                                                    </button>
                                                </td>
                                                <td>
                                                    <button type="button" className="operations"><i
                                                        className="fal fa-times"></i>
                                                    </button>

                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="modal fade" id="viewoffers" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog w-800">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="container g-0 d-flex justify-content-between">
                                <div className="main-title">
                                    <h2 className="default titr">
                                        پیشنهادات
                                    </h2>
                                </div>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="ticket-detail">
                                <div className="ticket-detail-header">
                                    <div className="td-left">
                                        <div className="offer-img">
                                            <img src="img/logo-3.png" width="159" height="159" alt=""
                                                 className="img-fluid"/>
                                        </div>
                                        <h6 className="default">گالری آرتیبیشن</h6>
                                    </div>
                                    <div className="td-right">
                                        <button type="button" className="btn-gray">رد کردن</button>
                                        <button type="button" className="btn-default">تایید</button>
                                    </div>
                                </div>
                                <div className="ticket-detail-body">
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                        گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                                        برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                                        کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
                                        جامعه و متخصصان را می طلبد</p>
                                </div>
                            </div>
                            <div className="ticket-detail">
                                <div className="ticket-detail-header">
                                    <div className="td-left">
                                        <div className="offer-img">
                                            <img src="img/logo-1.jpg" width="159" height="159" alt=""
                                                 className="img-fluid"/>
                                        </div>
                                        <h6 className="default">نگاه گالری</h6>
                                    </div>
                                    <div className="td-right">
                                        <button type="button" className="btn-gray">رد کردن</button>
                                        <button type="button" className="btn-default">تایید</button>
                                    </div>
                                </div>
                                <div className="ticket-detail-body">
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                        گرافیک است.
                                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط
                                        فعلی
                                        تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                        کتابهای زیادی در
                                        شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default UserPanelSellAdvice;