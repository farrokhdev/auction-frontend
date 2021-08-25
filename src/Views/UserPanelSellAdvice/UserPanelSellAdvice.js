import React, {useEffect, useState} from 'react'
import HeaderPanel from '../../components/HeaderPanel';
import PanelSidebar from '../../components/PanelSidebar';
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faPen, faTimes, faImages} from "@fortawesome/free-solid-svg-icons";
import moment from "jalali-moment";
import {message, Pagination, Spin} from "antd";
import 'antd/dist/antd.css';
import queryString from "query-string";
import {LoadingOutlined} from "@ant-design/icons";

function UserPanelSellAdvice() {
    const [Products, setProducts] = useState("");
    const [loading, setLoading] = useState(false)
    const [Suggestions, setSuggestions] = useState("");
    const [countProducts, setCountProducts] = useState(0)
    const [params, setParams] = useState({
        page: 1,
        page_size: 10,
        is_approve: ""
    })
    const [Posting, setPosting] = useState(false);


    const queries = queryString.stringify(params);

    const getProducts = () => {
        setLoading(true)
        axios.get(`${BASE_URL}/sale/product/?${queries}`)
            .then(resp => {
                setLoading(false)
                if (resp.data.code === 200) {
                    setProducts(resp.data.data.result)
                    setCountProducts(resp.data.data.count)
                }

            })
            .catch(err => {
                setLoading(false)
                console.error(err);
            })
    }

    const getSuggestion = (id) => {
        setLoading(true)
        axios.get(`${BASE_URL}/auction-house/suggest/?product__id=${id}`)
            .then(resp => {
                setLoading(false)
                console.log(resp)
                if (resp.data.code === 200) {
                    setSuggestions(resp.data.data.result)
                }

            })
            .catch(err => {
                setLoading(false)
                console.error(err);
            })
    }

    let approvedSuggest = (id, type)=>{
        let payload = {
            "is_selected": type
        }
        setPosting(true)

        axios.patch(`${BASE_URL}/auction-house/suggest/${id}/`, payload)
            .then(resp=>{
                setLoading(false)
                console.log(resp)
                if(resp.data.code === 201){
                    message.success('درخواست شما با موفقیت ثبت شد.');
                }
            })
            .catch(err=>{
                message.error(err.response.data.data.error_message);
                setPosting(false)
            })
    }

    useEffect(() => {
        getProducts()
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

    const isApproved = (value) => {
        switch (value) {
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

    const ProducList = () => {
        return (
            Products && Products.length >= 1 ? Products.map((item, key) => {
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
                                        data-bs-target="#viewoffers" onClick={() => {getSuggestion(item.id)}}><span
                                    className="d-none d-xl-inline-block" >مشاهده</span> پیشنهادات
                                </button>
                                : ""}
                        </td>
                        <td>
                            <button type="button" className="operations" style={{margin: 8}}>
                                <FontAwesomeIcon icon={faTimes}/>
                            </button>
                            <button type="button" className="operations" style={{margin: 8}}>
                                <FontAwesomeIcon className={'fal'} icon={faPen}/>
                            </button>
                        </td>
                    </tr>
                )
            }) : ""
        )
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
                                        <table className="panel-table selladvice">
                                            <tbody>

                                                <ProducList/>

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
                                                <ProducList/>
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
                                <div className="tab-pane fade" id="profiletab3" role="tabpanel"
                                     aria-labelledby="profiletab3-tab">
                                    <div className="table-responsive">
                                        <table className="panel-table selladvice">
                                            <tbody>

                                                <ProducList/>
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
                                <div className="tab-pane fade" id="profiletab4" role="tabpanel"
                                     aria-labelledby="profiletab3-tab">
                                    <div className="table-responsive">
                                        <table className="panel-table selladvice">
                                            <tbody>

                                                <ProducList/>
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
                            </div>
                            </Spin>
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
                                        aria-label="Close"/>
                            </div>
                        </div>
                        <div className="modal-body">
                            {Suggestions ? Suggestions.map((item, key) => {
                                return(
                                    <div className="ticket-detail" key={key}>
                                        <div className="ticket-detail-header">
                                            <div className="td-left">
                                                <div className="offer-img">
                                                    <img src="/static/media/login.b2e0944b.svg" width="30" height="30" alt=""
                                                         className="img-fluid" style={{marginRight:2}}/>
                                                </div>
                                                <h6 className="default">{item?.auction_house.first_name + " " + item?.auction_house.last_name}</h6>
                                            </div>
                                            <div className="td-right">
                                                <button
                                                    disabled={Posting}
                                                    type="button"
                                                    className={Posting ? "btn-default" :"btn-gray"}
                                                    onClick={() => approvedSuggest(item.id, false)}
                                                >
                                                    {Posting ? <LoadingOutlined style={{marginLeft: 5}} /> : ""}رد کردن</button>
                                                <button
                                                    disabled={Posting}
                                                    type="button"
                                                    className={Posting ? "btn-gray" :"btn-default"}
                                                    onClick={() => approvedSuggest(item.id, true)}
                                                >{Posting ? <LoadingOutlined style={{marginLeft: 5}} /> : ""}تایید</button>
                                            </div>
                                        </div>
                                        <div className="ticket-detail-body">
                                            <p>{item.suggestion}</p>
                                        </div>
                                    </div>

                                )
                            }): ""}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default UserPanelSellAdvice;
