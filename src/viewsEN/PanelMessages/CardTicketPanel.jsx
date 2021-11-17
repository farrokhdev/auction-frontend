import React from 'react'

function CardTicketPanel(props) {

    const {setVisibleModalReplyTicket} = props;

    return (
        <div class="col">
            <div class="msg-block unread " data-bs-toggle="modal"
                data-bs-target="#readticket-view">
                <div class="ticket">
                    <div class="ticket-right order-md-2">
                        <span class="ticket-state replied">Replied</span>
                        <span class="msg-date">24 Sep 2020</span>
                    </div>
                    <div class="ticket-left order-md-1">
                        <h5 class="default">reply to how can I buy a artwork?</h5>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</p>
                <button onClick={()=>setVisibleModalReplyTicket(true)} type="button" class="btn btn-view">Reply</button>
            </div>
        </div>
    )
}

export default CardTicketPanel;
