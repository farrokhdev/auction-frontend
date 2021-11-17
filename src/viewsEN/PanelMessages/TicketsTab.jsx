import React, { useState } from 'react'
import CardTicketPanel from './CardTicketPanel';
import ModalNewTicket from './ModalNewTicket';
import ModalReplyTicket from './ModalReplyTicket';

function TicketsTab() {

    const [visibleModalReplyTicket, setVisibleModalReplyTicket] = useState(false)
    const [visibleModalNewTicket, setVisibleModalNewTicket] = useState(false)

    return (
        <>
            <button 
                onClick={()=> setVisibleModalNewTicket(true)}
                type="button" 
                class="btn btn-default mt-5" 
                data-bs-toggle="modal"
                data-bs-target="#new-ticket"
            >
                <i class="fal fa-plus"></i>
                New ticket
            </button>
            <div class="row row-cols-1">

                {[1, 2, 3].map((ticket , key) => (

                    <React.Fragment key={key}>
                        <CardTicketPanel
                            setVisibleModalReplyTicket={setVisibleModalReplyTicket}
                        />
                    </React.Fragment>
                ))}

                    <ModalReplyTicket
                        visibleModalReplyTicket={visibleModalReplyTicket}
                        setVisibleModalReplyTicket={setVisibleModalReplyTicket}
                    />

                    <ModalNewTicket
                        visibleModalNewTicket = {visibleModalNewTicket}
                        setVisibleModalNewTicket = {setVisibleModalNewTicket}
                    />
            </div>
        </>
    )
}

export default TicketsTab;
