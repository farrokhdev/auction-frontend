import React from 'react';
import {Modal} from 'antd'

function ModalNewTicket(props) {

    const {visibleModalNewTicket , setVisibleModalNewTicket} = props

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
                                <input type="text" class="default-input" placeholder="Write title"/>
                            </div>
                            <div class="input-group">
                                <label class="default-lable">Description</label>
                                <textarea rows="4" class="default-input" placeholder="Write your answer here"></textarea>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default">Send</button>
                        </div>
                    </div>
            </Modal>
        </React.Fragment>
    )
}

export default ModalNewTicket;
