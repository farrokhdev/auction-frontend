import React, {useEffect, useState} from 'react'
import HeaderPanel from '../../components/HeaderPanel';
import PanelSidebar from '../../components/PanelSidebar';
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import moment from "jalali-moment";
import {message, Pagination, Spin} from "antd";
import 'antd/dist/antd.css';
import queryString from "query-string";
import {Link} from "react-router-dom";
import { isApproved } from '../../utils/converTypePersion';

function UserPanelSellAdvice() {
    const [Suggestions, setSuggestions] = useState("");
    const [SuggestionsCount, setSuggestionsCount] = useState("");
    const [SuggestDetail, setSuggestDetail] = useState("");
    const [SuggestsList, setSuggestsList] = useState("");
    const [SuggestDescription, setSuggestDescription] = useState("");
    const [loading, setLoading] = useState(false)
    const [params, setParams] = useState({
        page: 1,
        page_size: 10,
        is_approve: ""
    })
    const [Posting, setPosting] = useState(false);


    const queries = queryString.stringify(params);

    const getSuggestsList = () => {
        setLoading(true)
        axios.get(`${BASE_URL}/sale/auctions/?${queries}`)
            .then(resp => {
                setLoading(false)
                if (resp.data.code === 200) {
                    setSuggestsList(resp.data.data.result)
                }

            })
            .catch(err => {
                setLoading(false)
                console.error(err);
            })
    }

    const getSuggestions = () => {
        setLoading(true)
        axios.get(`${BASE_URL}/auction-house/suggest/?${queries}`)
            .then(resp => {
                setLoading(false)
                if (resp.data.code === 200) {
                    setSuggestions(resp.data.data.result)
                    setSuggestionsCount(resp.data.data.count)
                }

            })
            .catch(err => {
                setLoading(false)
                console.error(err);
            })
    }

    const getSuggest = (id) => {
        setLoading(true)
        axios.get(`${BASE_URL}/auction-house/suggest/${id}/`)
            .then(resp => {
                setLoading(false)
                if (resp.data.code === 200) {
                    setSuggestDetail(resp.data.data.result)
                }

            })
            .catch(err => {
                setLoading(false)
                console.error(err);
            })
    }

    let approvedSuggest = (id, type) => {
        let payload = {
            "homeauction_sugesstion_status": type ? "accept" : "reject",
            "suggestion": SuggestDescription
        }
        setPosting(true)
        if (SuggestDescription) {
            axios.patch(`${BASE_URL}/auction-house/suggest/${id}/`, payload)
                .then(resp => {
                    console.log(resp)
                    if ((resp.data.code === 200) || (resp.data.code === 201)) {
                        message.success('درخواست شما با موفقیت ثبت شد.');
                        setPosting(false)
                        getSuggestions()
                    }
                })
                .catch(err => {
                    message.error(err?.response?.data?.data);
                    setPosting(false)
                })
        } else {
            message.error("توضیحی وارد کنید");
            setPosting(false)
        }
    }

    useEffect(() => {
        getSuggestions()
    }, [params])

    const handeSelectPage = (e) => {
        setParams({
            ...params, page: e
        })
    }

    const handleApproved = (e) => {
        setParams({
            ...params, is_approve: e
        })
    }

    const SuggestList = () => {
        return (
            Suggestions && Suggestions.length >= 1 ? Suggestions.map((item, key) => {
                return (
                    <tr key={key}>
                        <td className="artwork-img">
                            <img src={item.product.media.exact_url} width="317" height="280" alt=""
                                 className="img-fluid"/>
                        </td>
                        <td>{item.product.artwork_title}</td>
                        <td>{item.product.persian_artist_name}</td>
                        <td>
                            <button type="button" className={"sell-state " + (isApproved(item.product.is_approve).css)}>
                                {isApproved(item.product.is_approve).title}
                            </button>
                        </td>
                        <td>
                            <span>{item.product.price}</span>
                            <span className="price-unit">تومان</span>
                        </td>
                        <td>
                            <button type="button" className="btn-outline-gray"
                                    data-bs-toggle="modal"
                                    onClick={() => getSuggest(item?.id)}
                                    data-bs-target="#recommend-detail">جزئیات
                            </button>
                        </td>
                        <td>
                            {item.product.is_approve === "accept" ?
                                <button
                                    type="button"
                                    onClick={() => getSuggestsList()}
                                    className="btn-outline-pink"
                                    data-bs-toggle="modal"
                                    data-bs-target="#uploadinauction">آپلود <span
                                    className="d-lg-inline-block d-none">در حراج</span></button>
                                : ""
                            }
                        </td>
                    </tr>
                )
            }) : ""
        )
    }


    return (
        <>
            <HeaderPanel titlePage={'یشنهاد فروش'}/>
            <div className="panel-main">
                <PanelSidebar/>


                <div className="panel-body">
                    <div className="panel-container">
                        <div className="">
                            <ul className="nav nav-tabs justify-content-star main-tab" id="profile-tab"
                                role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="tab-11" data-bs-toggle="tab"
                                            data-bs-target="#profiletab1"
                                            type="button" role="tab" aria-controls="profiletab1"
                                            onClick={() => handleApproved("")}
                                            aria-selected="true">همه
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="tab-21" data-bs-toggle="tab"
                                            data-bs-target="#profiletab2"
                                            type="button" role="tab" aria-controls="profiletab2"
                                            onClick={() => handleApproved("waiting")}
                                            aria-selected="false">در انتظار بررسی
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="tab-31" data-bs-toggle="tab"
                                            data-bs-target="#profiletab3"
                                            type="button" role="tab" aria-controls="profiletab3"
                                            onClick={() => handleApproved("accept")}
                                            aria-selected="false">تایید شده
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="tab-41" data-bs-toggle="tab"
                                            data-bs-target="#profiletab4"
                                            type="button" role="tab" aria-controls="profiletab4"
                                            onClick={() => handleApproved("reject")}
                                            aria-selected="false">رد شده
                                    </button>
                                </li>
                            </ul>
                            <Spin spinning={loading}>
                                <div className="tab-content" id="profile-tab-content">
                                    <div className="tab-pane fade show active" id="profiletab1" role="tabpanel"
                                         aria-labelledby="profiletab1-tab">
                                        <div className="table-responsive">
                                            <table className="panel-table sellrecommand ">
                                                <thead>
                                                <tr>
                                                    <td>تصویر</td>
                                                    <td>نام</td>
                                                    <td>هنرمند</td>
                                                    <td>وضعیت</td>
                                                    <td>تخمین قیمت</td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                </thead>
                                                <tbody>

                                                <SuggestList/>

                                                </tbody>
                                            </table>
                                        </div>

                                        <Pagination
                                            style={{direction: 'ltr', textAlign: 'center', marginTop: 5}}
                                            responsive
                                            onChange={(e) => handeSelectPage(e)}
                                            defaultCurrent={1}
                                            total={SuggestionsCount}
                                            defaultPageSize={10}
                                        />
                                    </div>
                                    <div className="tab-pane fade" id="profiletab2" role="tabpanel"
                                         aria-labelledby="profiletab2-tab">
                                        <table className="panel-table sellrecommand ">
                                            <thead>
                                            <tr>
                                                <td>تصویر</td>
                                                <td>نام</td>
                                                <td>هنرمند</td>
                                                <td>وضعیت</td>
                                                <td>تخمین قیمت</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <SuggestList/>
                                            </tbody>
                                        </table>

                                        <Pagination
                                            style={{direction: 'ltr', textAlign: 'center', marginTop: 5}}
                                            responsive
                                            onChange={(e) => handeSelectPage(e)}
                                            defaultCurrent={1}
                                            total={SuggestionsCount}
                                            defaultPageSize={10}
                                        />
                                    </div>
                                    <div className="tab-pane fade" id="profiletab3" role="tabpanel"
                                         aria-labelledby="profiletab3-tab">
                                        <table className="panel-table sellrecommand ">
                                            <thead>
                                            <tr>
                                                <td>تصویر</td>
                                                <td>نام</td>
                                                <td>هنرمند</td>
                                                <td>وضعیت</td>
                                                <td>تخمین قیمت</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <SuggestList/>
                                            </tbody>
                                        </table>

                                        <Pagination
                                            style={{direction: 'ltr', textAlign: 'center', marginTop: 5}}
                                            responsive
                                            onChange={(e) => handeSelectPage(e)}
                                            defaultCurrent={1}
                                            total={SuggestionsCount}
                                            defaultPageSize={10}
                                        />
                                    </div>
                                    <div className="tab-pane fade" id="profiletab4" role="tabpanel"
                                         aria-labelledby="profiletab3-tab">
                                        <table className="panel-table sellrecommand ">
                                            <thead>
                                            <tr>
                                                <td>تصویر</td>
                                                <td>نام</td>
                                                <td>هنرمند</td>
                                                <td>وضعیت</td>
                                                <td>تخمین قیمت</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <SuggestList/>
                                            </tbody>
                                        </table>

                                        <Pagination
                                            style={{direction: 'ltr', textAlign: 'center', marginTop: 5}}
                                            responsive
                                            onChange={(e) => handeSelectPage(e)}
                                            defaultCurrent={1}
                                            total={SuggestionsCount}
                                            defaultPageSize={10}
                                        />
                                    </div>
                                </div>
                            </Spin>
                        </div>
                    </div>
                </div>

            </div>

            <div className="modal fade" id="recommend-detail" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog w-800">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="container g-0 d-flex justify-content-between">
                                <div className="main-title">
                                    <h2 className="default titr">
                                        جزئیات
                                    </h2>
                                </div>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"/>
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="d-flex flex-row row">
                                <div className="artwork-img col-3">
                                    <img src={SuggestDetail?.product?.media?.exact_url} width="317" height="280" alt=""
                                         className="img-fluid"/>
                                </div>
                                <div className="artwork-info-left col-lg-6 col-9">
                                    <div>
                                        <span>{SuggestDetail?.product?.persian_artist_name}</span>
                                        <h5 className="default">{SuggestDetail?.product?.latest_auction?.title}</h5>
                                    </div>
                                    <div className="mrgt10 estimate">تخمین قیمت:
                                        <span>{SuggestDetail?.product?.price}</span>
                                        <span className="price-unit">تومان</span>
                                    </div>
                                </div>
                                <div className="seller-phone col-12 col-lg-3">
                                    شماره فروشنده
                                    <a href={SuggestDetail?.product?.owner?.username} type="tel">
                                        <span
                                            className="seller-phone-name">{SuggestDetail?.product?.owner?.first_name} {SuggestDetail?.product?.owner?.last_name}</span>
                                        <span
                                            className="seller-phone-number">{SuggestDetail?.product?.owner?.username}</span>
                                    </a>
                                </div>
                            </div>
                            <div className="d-flex flex-row">
                                <p className="mrgt10 gray50">
                                    {SuggestDetail?.product?.persian_description}
                                </p>
                            </div>
                            <div className="input-group mrgt50">
                                <label className="default-lable">توضیحات</label>
                                <textarea rows="4" className="default-input"
                                          onChange={(e) => {
                                              setSuggestDescription(e.target.value)
                                          }}
                                          placeholder="توضیحات را وارد نمایید."/>
                            </div>
                        </div>
                        {((SuggestDetail?.homeauction_sugesstion_status !== "accept") && (SuggestDetail?.homeauction_sugesstion_status !== "reject")) &&
                        <div className="modal-footer">
                            <button
                                disabled={Posting}
                                type="button" className="btn btn-gray "
                                data-bs-dismiss="modal"
                                onClick={() => approvedSuggest(SuggestDetail?.id, false)}
                            >رد کردن
                            </button>
                            <button
                                disabled={Posting}
                                data-bs-dismiss="modal"
                                onClick={() => approvedSuggest(SuggestDetail?.id, true)}
                                type="button" className="btn btn-default">تایید
                            </button>

                        </div>}
                        {
                            (SuggestDetail?.homeauction_sugesstion_status === "accept") &&
                            <p className="text-success text-center mb-4">این پیشنهاد توسط شما تایید شد</p>
                        }
                        {
                            (SuggestDetail?.homeauction_sugesstion_status === "reject") &&
                            <p className="text-danger text-cente mb-4">این پیشنهاد توسط شما رد شد</p>
                        }
                    </div>
                </div>
            </div>

            <div className="modal fade" id="uploadinauction" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog w-600">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="container g-0 d-flex justify-content-between">
                                <div className="main-title">
                                    <h2 className="default titr">
                                        آپلود در حراج
                                    </h2>
                                </div>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"/>
                            </div>
                        </div>
                        <div className="modal-body">
                            <Link to="/panel-add-auction" onClick={() => {
                                const modal = document.getElementsByClassName('modal show')[0];
                                const fade = document.getElementsByClassName('modal-backdrop show')[0];
                                modal.className = modal.className.replace('show', '');
                                fade.className = fade.className.replace('show', '');
                                fade.className = fade.className.replace('fade', '');
                                fade.className = fade.className.replace('modal-backdrop', '');
                            }
                            }>
                                <button type="button" className="btn btn-default">ایجاد حراج جدید</button>
                            </Link>
                            <span> یا یک حراج انتخاب کنید:</span>
                            <div className="table-responsive mrgt30">
                                <table className="panel-table">
                                    <tbody>
                                    {SuggestsList ? SuggestsList.map((item, key) => {
                                        return (
                                            <tr key={key}>
                                                <td><a href="#" className="default-link">{item.title}</a></td>
                                                <td>{moment(item.start_time, 'YYYY/MM/DD').locale('fa').format('DD MMMM YYYY')}</td>
                                                <td>
                                                    <button type="button" className="btn-outline-pink">عضویت</button>
                                                </td>
                                            </tr>
                                        )
                                    }) : ""}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default UserPanelSellAdvice;
