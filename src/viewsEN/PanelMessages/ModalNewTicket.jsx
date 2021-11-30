import React , {useState} from 'react';
import {Modal , message , Alert} from 'antd'
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";

function ModalNewTicket(props) {

    const {visibleModalNewTicket , setVisibleModalNewTicket} = props;

    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [TicketTitle, setTicketTitle] = useState("");
    const [TicketBody, setTicketBody] = useState("");

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
                    message.success("Your ticket was sent successfully")

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

    return (
        <React.Fragment>

            <Modal
                centered
                className="modal-new-ticket"
                visible={visibleModalNewTicket}
                onOk={() => setVisibleModalNewTicket(false)}
                onCancel={() => setVisibleModalNewTicket(false)}
                width={800}
                footer={[]}
                header={[]}
            >
                    <div class="modal-content">
                        <div class="modal-header">
                            <div class="container g-0 d-flex justify-content-between">
                                <div class="main-title">
                                    {/* <h2 class="default titr">New Ticket</h2> */}
                                    <h2 class="default ">New Ticket</h2>
                                </div>
                                <button onClick={() => setVisibleModalNewTicket(false)} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                        </div>
                        <div class="modal-body">
                            <div class="input-group">
                                <label class="default-lable">Title</label>
                                <input 
                                    onChange={(e) => {
                                        setTicketTitle(e.target.value)
                                    }} 
                                    type="text" 
                                    class="default-input" 
                                    placeholder="Write title"
                                />
                            </div>
                            <div class="input-group">
                                <label class="default-lable">Description</label>
                                <textarea 
                                    onChange={(e) => {
                                        setTicketBody(e.target.value)
                                    }}
                                    rows="4" 
                                    class="default-input" 
                                    placeholder="Write your answer here"
                                />
                            </div>

                            {success ? <Alert message="Your ticket was sent successfully." type="success" showIcon /> : ""}
                            {error ? <Alert message="The title or text of the ticket has not been entered" type="error" showIcon /> : ""}
                            
                        </div>
                        <div class="modal-footer">
                            <button onClick={handleSendTicket} type="button" class="btn btn-default">Send</button>
                        </div>
                    </div>
            </Modal>
        </React.Fragment>
    )
}

export default ModalNewTicket;
