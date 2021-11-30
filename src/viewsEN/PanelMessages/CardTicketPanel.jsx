import React from 'react';
import moment from 'jalali-moment';

function CardTicketPanel(props) {

    const {setVisibleModalReplyTicket , ticket , setTICKET_ID} = props;

    console.log("ticket -->>>" , ticket);


    function stateTicket(state) {
        switch (state) {
            case 'pending':
                return {
                    "title": "Pending",
                    "type": "pending",
                    "block": "",
                    "color" : 'state-pending'
                }
            case 'unread':
                return {
                    "title": "Replied",
                    "type": "replied",
                    "block": "unread",
                    "color" : ''
                }
            case 'close':
                return {
                    "title": "Closed",
                    "type": "closed",
                    "block": "",
                    "color" : ''
                }
            case 'read':
                return {
                    "title": "Read",
                    "type": "read",
                    "block": "",
                    "color" : 'state-success'
                }
            default:
                return {
                    "title": "",
                    "type": "",
                    "block": ""
                }
        }
    }


    const handleShowDetailTicket = (e , id) => {
        setTICKET_ID(id);

        setTimeout(() => {
            setVisibleModalReplyTicket(true)
        }, 300);
    }

    return (
        <div className="col">
            <div  className={`msg-block ${ticket?.state === "unread" ? "unread" : '' }`} data-bs-toggle="modal"
                data-bs-target="#readticket-view">
                <div className="ticket">
                    <div className="ticket-right order-md-2">
                        {/* <span class="ticket-state replied">Replied</span> */}
                        <span className={`ticket-state ${stateTicket(ticket?.state).type} ${stateTicket(ticket?.state).color}`}>{stateTicket(ticket?.state).title}</span>
                        <span className="msg-date">{ticket?.creation_date ? moment(ticket?.creation_date, 'YYYY/MM/DD').locale('en').format('DD MMMM YYYY') : ''}</span>
                    </div>
                    <div className="ticket-left order-md-1">
                        <h5 className="default">{ticket?.title}</h5>
                    </div>
                </div>
                <p>{ticket?.body}</p>
                <button onClick={(e)=>handleShowDetailTicket(e , ticket?.id)} type="button" className="btn btn-view">Reply</button>
            </div>
        </div>
    )
}

export default CardTicketPanel;
