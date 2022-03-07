import React, { useEffect, useState } from 'react'
import HeaderPanel from '../../components/HeaderPanel';
import PanelSidebar from '../../components/PanelSidebar';
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import moment from "jalali-moment";
import { message, Pagination } from "antd";
import { connect } from 'react-redux';
import { Alert } from 'antd';
import 'antd/dist/antd.css';

function UserPanelMessage(props) {
    const [Tickets, setTickets] = useState("");
    const [TicketDetail, setTicketDetail] = useState("");
    const [Messages, setMessages] = useState("");
    const [MessageDetail, setMessageDetail] = useState("");
    const [TicketTitle, setTicketTitle] = useState("");
    const [TicketBody, setTicketBody] = useState("");
    const [ReplyBody, setReplyBody] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [countTickets, setCountTickets] = useState(0)
    const [countMessages, setCountMessages] = useState(0)

    const getTickets = (page = 1) => {
        axios.get(`${BASE_URL}/ticketing/?page=${page}`)
            .then(resp => {
                if (resp.data.code === 200) {
                    setTickets(resp.data.data.result)
                    setCountTickets(resp.data.data.count)
                }

            })
            .catch(err => {
                console.error(err);
            })
    }

    const getMessages = (page = 1) => {
        axios.get(`${BASE_URL}/messaging/inbox/?page=${page}`)
            .then(resp => {
                if (resp.data.code === 200) {
                    setMessages(resp.data.data.result)
                    setCountMessages(resp.data.data.count)
                }

            })
            .catch(err => {
                console.error(err);
            })
    }

    const getMessage = (id) => {
        axios.get(`${BASE_URL}/messaging/inbox/${id}/`)
            .then(resp => {
                if (resp.data.code === 200) {
                    setMessageDetail(resp.data.data.result)
                }

            })
            .catch(err => {
                console.error(err);
            })
    }

    const getTicket = (id) => {
        axios.get(`${BASE_URL}/ticketing/${id}/`)
            .then(resp => {
                if (resp.data.code === 200) {
                    setTicketDetail(resp.data.data.result)
                }

            })
            .catch(err => {
                console.error(err);
            })
    }

    const handeSelectPage = (e, type) => {
        if (type === 't')
            getTickets(e)
        else
            getMessages(e)
    }

    const closeTicket = (id) => {
        axios.get(`${BASE_URL}/ticketing/${id}/close/`)
            .then(resp => {
                console.log(resp)
                if (resp.data.code === 200) {
                    setTicketDetail(resp.data.data.result)
                    message.success("تیکت بسته شد")
                    setTimeout(() => {
                        window.location.reload()
                    }, 700);
                }

            })
            .catch(err => {
                console.error(err);
            })
    }

    const handleSendTicket = () => {
        setError(false)
        setSuccess(false)
        let payload = {
            "title": TicketTitle,
            "body": TicketBody,
            "category": 1
        }
        axios.post(`${BASE_URL}/ticketing/`, payload)
            .then(resp => {
                if (resp.data.code === 201) {
                    setSuccess(true)
                    message.success("تیکت شما با موفقیت ارسال شد")

                    setTimeout(() => {
                        window.location.reload()
                    }, 700);
                }
            })
            .catch(err => {
                setError(true)
                console.log("Error Message", err);
            })
    }

    const handleReply = (id) => {
        let payload = {
            "body": ReplyBody,
        }
        axios.post(`${BASE_URL}/ticketing/${id}/reply/`, payload)
            .then(resp => {
                if (resp.data.code === 201) {
                    setSuccess(true)
                    message.success("تیکت شما با موفقیت ارسال شد")
                    setTimeout(() => {
                        window.location.reload()
                    }, 700);
                }
            })
            .catch(err => {
                setError(true)
                message.error("متن پیام نمیتواند خالی باشد")
                console.log("Error Message", err);
            })
    }

    useEffect(() => {
        getTickets()
        getMessages()
    }, [])

    function stateToFa(state) {
        switch (state) {
            case 'pending':
                return {
                    "title": "در انتظار بررسی",
                    "type": "pending",
                    "block": ""
                }
            case 'unread':
                return {
                    "title": "پاسخ داده نشده",
                    // "type": "replied",
                    "type": "unread",
                    "block": "unread"
                }
            case 'close':
                return {
                    "title": "بسته شده",
                    "type": "closed",
                    "block": ""
                }
            case 'read':
                return {
                    "title": "خوانده شده",
                    "type": "closed",
                    "type": "read",
                    "block": ""
                }
            default:
                return {
                    "title": "",
                    "type": "",
                    "block": ""
                }
        }
    }

    return (
        <>
            <HeaderPanel titlePage={'پیام ها'} />
            <div className="panel-main">
                <PanelSidebar />

                <div className="panel-body">
                    <div className="panel-container">
                        <div className="">
                            <ul className="nav nav-tabs justify-content-star main-tab" id="profile-tab"
                                role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="tab-11" data-bs-toggle="tab"
                                        data-bs-target="#profiletab1"
                                        type="button" role="tab" aria-controls="profiletab1" aria-selected="true">
                                        اعلان‌ها
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link " id="tab-21" data-bs-toggle="tab"
                                        data-bs-target="#profiletab2"
                                        type="button" role="tab" aria-controls="profiletab2"
                                        aria-selected="false">تیکت‌ها
                                    </button>
                                </li>
                            </ul>
                            <div className="tab-content" id="profile-tab-content">
                                <div className="tab-pane fade show active" id="profiletab1" role="tabpanel"
                                    aria-labelledby="profiletab1-tab">
                                    <div className="row row-cols-lg-2 row-cols-1">
                                        {Messages ? Messages.map((item, key) => {
                                            return (
                                                <div className="col" key={key}
                                                    onClick={() => getMessage(item?.id)}>
                                                    <div className={"msg-block " + (item.is_read ? "" : "unread")}
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#readmsg">
                                                        <h5 className="default">{item?.message.title}</h5>
                                                        <p>{item?.message.body}</p>
                                                        <button type="button" className="btn btn-view">بیشتر</button>
                                                    </div>
                                                </div>
                                            )
                                        }) : ""}
                                    </div>

                                    {countMessages > 10 ?

                                        <Pagination
                                            style={{ direction: 'ltr', textAlign: 'center', marginTop: 10 }}
                                            responsive
                                            onChange={(e) => handeSelectPage(e, 'm')}
                                            defaultCurrent={1}
                                            total={countMessages}
                                            defaultPageSize={10}
                                        />
                                        : ""}
                                </div>
                                <div className="tab-pane fade " id="profiletab2" role="tabpanel"
                                    aria-labelledby="profiletab2-tab">
                                    <button type="button" className="btn btn-default" data-bs-toggle="modal"
                                        data-bs-target="#new-ticket"><FontAwesomeIcon icon={faPlus} />تیکت جدید
                                    </button>
                                    <div className="row row-cols-1">
                                        {Tickets?.length ? Tickets?.map((item, key) => {
                                            return (
                                                <div className="col" key={key}>
                                                    <div className={"msg-block " + (stateToFa(item?.state).block)}
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#readticket-view"
                                                        onClick={() => getTicket(item?.id)}>
                                                        <div className="ticket">
                                                            <div className="ticket-right order-md-2">
                                                                <span
                                                                    className={"ticket-state " + (stateToFa(item?.state).type)}>{stateToFa(item?.state).title}</span>
                                                                <span className="msg-date">{item?.date}</span>
                                                            </div>
                                                            <div className="ticket-left order-md-1">
                                                                <h5 className="default">پاسخ به "{item?.title}"</h5>
                                                            </div>
                                                        </div>
                                                        <p>{item?.body}</p>
                                                        <button type="button" className="btn btn-view"> پاسخ</button>
                                                    </div>
                                                </div>
                                            )
                                        }) : ""}

                                    </div>
                                    {countTickets > 10 ?
                                        <Pagination
                                            style={{ direction: 'ltr', textAlign: 'center' }}
                                            responsive
                                            onChange={(e) => handeSelectPage(e, 't')}
                                            defaultCurrent={1}
                                            total={countTickets}
                                            defaultPageSize={10}
                                        />
                                        : ""}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div className="modal fade" id="readmsg" tabIndex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog w-600" style={{paddingTop:'10rem'}}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="container g-0 d-flex justify-content-between">
                                <div className="main-title">
                                    <h2 className="default titr">{MessageDetail ? MessageDetail?.message?.title : ""}</h2>
                                </div>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close" />
                            </div>
                        </div>
                        <div className="modal-body">
                            {/*<span className="msg-date">24 آذر 99</span>*/}
                            <p>{MessageDetail ? MessageDetail?.message?.body : ""}</p>
                        </div>
                    </div>
                </div>
            </div>

{/* details */}

            <div className="modal fade" id="readticket-view" tabIndex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog w-800" style={{ paddingTop: "6rem" }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="container g-0 d-flex justify-content-between">
                                <div className="main-title">
                                    <h2 className="default titr">{TicketDetail?.title}</h2>
                                </div>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close" />
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="ticket-detail">
                                <div className="ticket-detail-header">
                                    <div className="td-left">
                                        <h6 className="default">{TicketDetail?.fullname} <small>( کاربر ) </small></h6>
                                    </div>
                                    <div className="td-right">
                                        <span
                                            className="msg-date">{TicketDetail ? moment(TicketDetail?.creation_date, 'YYYY/MM/DD').locale('fa').format('DD MMMM YYYY') : ""}</span>
                                        <span
                                            className="msg-date">{TicketDetail ? moment(TicketDetail?.creation_date).locale('fa').format('hh:mm') : ""}</span>
                                    </div>
                                </div>
                                <div className="ticket-detail-body">
                                    <p>{TicketDetail?.body}</p>
                                </div>
                            </div>

                            {TicketDetail?.reply?.length ? TicketDetail.reply.map((item, key) => {
                                return (
                                    <div className="ticket-detail" key={key}>
                                        <div className="ticket-detail-header">
                                            <div className="td-left">
                                                {item?.owner?.username === props.auth.data.userName ?
                                                    <h6 className="default"> {item?.owner.first_name + " " + item?.owner.last_name} <small>( کاربر ) </small> </h6>
                                                    : <h6 className="default"> {item?.owner.first_name + " " + item?.owner.last_name} <small>( ادمین ) </small> </h6>

                                                }
                                            </div>
                                            {/* <div className="td-right">
                                                <span className="msg-date"> no time </span>
                                                <span className="msg-date">in api</span>
                                            </div> */}
                                            <div className="td-right">
                                                <span
                                                    className="msg-date">{item?.creation_date ? moment(item?.creation_date, 'YYYY/MM/DD').locale('fa').format('DD MMMM YYYY') : ""}</span>
                                                <span
                                                    className="msg-date">{item?.creation_date ? moment(item?.creation_date).locale('fa').format('hh:mm') : ""}</span>
                                            </div>
                                        </div>
                                        <div className="ticket-detail-body">
                                            <p>
                                                {item?.body}
                                            </p>
                                        </div>
                                    </div>
                                )
                            }) : ""}

                            <div className="ticket-reply-box">
                                {TicketDetail?.state === 'close' ?
                                    <Alert style={{ margin: 5 }}
                                        message="به دلیل بسته بودن تیکت امکان ارسال پیام وجود ندارد." type="info"
                                        showIcon /> :
                                    TicketDetail?.admin_replied ?
                                        <div className="input-group">
                                            <textarea rows="4" className="default-input"
                                                disabled={TicketDetail?.state === 'close'}
                                                onChange={(e) => {
                                                    setReplyBody(e.target.value)
                                                }}
                                                placeholder="متن مورد نظر خود را وارد نمایید." />
                                        </div>

                                        : <Alert style={{ margin: 5 }}
                                            message="منتظر پاسخ ادمین باشید." type="info"
                                            showIcon />
                                }
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-pink"
                                disabled={TicketDetail?.state === 'close'}
                                onClick={() => {
                                    closeTicket(TicketDetail?.id)
                                }}>بستن تیکت
                            </button>
                            {TicketDetail?.admin_replied ?
                                <button type="button" className="btn btn-default" disabled={TicketDetail?.state === 'close'}
                                    onClick={() => {
                                        handleReply(TicketDetail?.id)
                                    }}>ارسال
                                </button>
                                : ""
                            }
                        </div>
                    </div>
                </div>
            </div>


            {/* details */}



            
            <div className="modal fade" id="new-ticket" tabIndex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog w-800">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="container g-0 d-flex justify-content-between">
                                <div className="main-title">
                                    <h2 className="default titr">تیکت جدید</h2>
                                </div>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close" />
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="input-group">
                                <label className="default-lable">عنوان</label>
                                <input type="text" className="default-input" onChange={(e) => {
                                    setTicketTitle(e.target.value)
                                }}
                                    placeholder="عنوان مورد نظر را وارد نمایید." />
                            </div>
                            <div className="input-group">
                                <label className="default-lable">توضیحات</label>
                                <textarea rows="4" className="default-input"
                                    onChange={(e) => {
                                        setTicketBody(e.target.value)
                                    }}
                                    placeholder="متن مورد نظر خود را وارد نمایید." />
                            </div>
                            {success ? <Alert message="تیکت شما با موفقیت ارسال شد." type="success" showIcon /> : ""}
                            {error ? <Alert message="خطا در ارسال تیکت" type="error" showIcon /> : ""}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" onClick={() => {
                                handleSendTicket()
                            }}>ارسال
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

const mapStateToProps = (store) => {
    return {
        auth: store.authReducer,
    }
}

export default connect(mapStateToProps, null)(UserPanelMessage)
// export default UserPanelMessage;