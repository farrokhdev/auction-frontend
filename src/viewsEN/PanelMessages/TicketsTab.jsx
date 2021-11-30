import React, { useState , useEffect } from 'react';
import CardTicketPanel from './CardTicketPanel';
import ModalNewTicket from './ModalNewTicket';
import ModalReplyTicket from './ModalReplyTicket';
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import queryString from "query-string";
import PaginationComponent from '../../componentsEN/PaginationComponent';

function TicketsTab() {

    const [visibleModalReplyTicket, setVisibleModalReplyTicket] = useState(false);
    const [visibleModalNewTicket, setVisibleModalNewTicket] = useState(false);
    const [Tickets, setTickets] = useState([]);
    const [countTickets, setCountTickets] = useState(0);
    const [TICKET_ID, setTICKET_ID] = useState(null)
    const [params, setParams] = useState({
        page : 1 , 
        page_size : 10
    })

    useEffect(() => {
        getTickets()
    }, [params])


    const getTickets = () => {
        const queries = queryString.stringify(params);
        axios.get(`${BASE_URL}/ticketing/?${queries}`)
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


    const handeSelectPage = (e) => {
        setParams({
          ...params,
          page: e,
        });
      };

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

                {Tickets?.length ? Tickets?.map((ticket , key) => (

                    <React.Fragment key={key}>
                        <CardTicketPanel
                            setVisibleModalReplyTicket={setVisibleModalReplyTicket}
                            setTICKET_ID={setTICKET_ID}
                            ticket={ticket}
                        />
                    </React.Fragment>
                )) : ''}

                    <ModalReplyTicket
                        visibleModalReplyTicket={visibleModalReplyTicket}
                        setVisibleModalReplyTicket={setVisibleModalReplyTicket}
                        TICKET_ID={TICKET_ID}
                        getTickets={getTickets}
                    />

                    <ModalNewTicket
                        visibleModalNewTicket = {visibleModalNewTicket}
                        setVisibleModalNewTicket = {setVisibleModalNewTicket}
                    />
            </div>

            <PaginationComponent
                count={countTickets}
                handeSelectPage={handeSelectPage}
            /> 
        </>
    )
}

export default TicketsTab;
