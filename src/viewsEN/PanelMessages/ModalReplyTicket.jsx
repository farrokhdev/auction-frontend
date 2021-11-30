import React , {useState , useEffect} from 'react';
import {Modal , message} from 'antd'
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import moment from "jalali-moment";
import { connect } from 'react-redux';

function ModalReplyTicket(props) {

    const {visibleModalReplyTicket , setVisibleModalReplyTicket  , TICKET_ID , getTickets} = props;
    const [TicketDetail, setTicketDetail] = useState();
    


    useEffect(() => {
        if(!!TICKET_ID){
            getTicket()
        }
    }, [TICKET_ID])

    const getTicket = () => {
        axios.get(`${BASE_URL}/ticketing/${TICKET_ID}/`)
            .then(resp => {
                if (resp.data.code === 200) {
                    setTicketDetail(resp.data.data.result)
                }

            })
            .catch(err => {
                console.error(err);
            })
    }

    const closeTicket = (id) => {
        axios.get(`${BASE_URL}/ticketing/${id}/close/`)
            .then(resp => {
                console.log(resp)
                if (resp.data.code === 200) {
                    setTicketDetail(resp.data.data.result)
                    message.success("The ticket was closed")
                    setTimeout(() => {
                        getTicket();
                        getTickets()
                    }, 700);
                }

            })
            .catch(err => {
                console.error(err);
            })
    }


    return (
        <React.Fragment>

            <Modal
                centered
                className="modal-reply-ticket"
                visible={visibleModalReplyTicket}
                onOk={() => setVisibleModalReplyTicket(false)}
                onCancel={() => setVisibleModalReplyTicket(false)}
                width={800}
                footer={[]}
                header={[]}
                >
                <div class="modal-content border-0">
                    <div class="modal-header">
                        <div class="container g-0 d-flex justify-content-between">
                            <div class="main-title">
                                {/* <h2 class="default titr">Up to 30% offer</h2> */}
                                <h2 class="default ">{TicketDetail?.title}</h2>
                            </div>
                            <button onClick={() => setVisibleModalReplyTicket(false)} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    </div>
                    <div class="modal-body">

                            <div className="ticket-detail">
                                <div className="ticket-detail-header">
                                    <div className="td-left">
                                        <h6 className="default">{TicketDetail?.fullname_en} <small>( User ) </small></h6>
                                    </div>
                                    <div className="td-right">
                                        <span
                                            className="msg-date">{TicketDetail?.creation_date ? moment(TicketDetail?.creation_date, 'YYYY/MM/DD').locale('en').format('DD MMMM YYYY') : ""}</span>
                                        <span
                                            className="msg-date">{TicketDetail?.creation_date ? moment(TicketDetail?.creation_date).locale('en').format('hh:mm') : ""}</span>
                                    </div>
                                </div>
                                <div className="ticket-detail-body">
                                    <p>{TicketDetail?.body}</p>
                                </div>
                            </div>


                            {TicketDetail?.reply?.length ? TicketDetail?.reply?.map((item, key) => {
                                return (
                                    <div className="ticket-detail" key={key}>
                                        <div className="ticket-detail-header">
                                            <div className="td-left">
                                                {item?.owner?.username === props.auth.data.userName ?
                                                    <h6 className="default"> {item?.owner.first_name_en + " " + item?.owner.last_name_en} <small>( User ) </small> </h6>
                                                    : <h6 className="default"> {item?.owner.first_name_en + " " + item?.owner.last_name_en} <small>( Admin ) </small> </h6>

                                                }
                                            </div>
         
                                            <div className="td-right">
                                                <span
                                                    className="msg-date">{item?.creation_date ? moment(item?.creation_date, 'YYYY/MM/DD').locale('en').format('DD MMMM YYYY') : ""}</span>
                                                <span
                                                    className="msg-date">{item?.creation_date ? moment(item?.creation_date).locale('en').format('hh:mm') : ""}</span>
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


                        <div class="ticket-reply-box">
                            <div class="input-group">
                                <textarea rows="4" class="default-input" placeholder="Write your answer here"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button onClick={()=>closeTicket(TicketDetail?.id)} type="button" class="btn btn-outline-pink">Close ticket</button>
                        <button type="button" class="btn btn-default">Send</button>
                    </div>
                </div>
            </Modal>
        </React.Fragment>
    )
}



const mapStateToProps = (store) => {
    return {
        auth: store.authReducer,
    }
}

export default connect(mapStateToProps, null)(ModalReplyTicket)