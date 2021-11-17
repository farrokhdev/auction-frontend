import React from 'react';
import {Modal} from 'antd'

function ModalReplyTicket(props) {

    const {visibleModalReplyTicket , setVisibleModalReplyTicket} = props

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
                                <h2 class="default ">Up to 30% offer</h2>
                            </div>
                            <button onClick={() => setVisibleModalReplyTicket(false)} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    </div>
                    <div class="modal-body">
                        <div class="ticket-detail">
                            <div class="ticket-detail-header">
                                <div class="td-left">
                                    <h6 class="default">Support</h6>
                                </div>
                                <div class="td-right">
                                    <span class="msg-date">24 Sep 2020</span>
                                    <span class="msg-date">3:00 PM</span>
                                </div>
                            </div>
                            <div class="ticket-detail-body">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                    tincidunt ut
                                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                                    exerci tation
                                    ullamcorper suscipitm, quis nostrud exerci tation ullamcorper suscipit
                                </p>
                            </div>
                        </div>
                        <div class="ticket-detail">
                            <div class="ticket-detail-header">
                                <div class="td-left">
                                    <h6 class="default">Nima Heidari</h6>
                                </div>
                                <div class="td-right">
                                    <span class="msg-date">24 Sep 2020</span>
                                    <span class="msg-date">2:50 PM</span>
                                </div>
                            </div>
                            <div class="ticket-detail-body">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                    tincidunt ut
                                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                                    exerci tation
                                    ullamcorper suscipitm, quis nostrud exerci tation ullamcorper suscipit
                                </p>
                            </div>
                        </div>
                        <div class="ticket-reply-box">
                            <div class="input-group">
                                <textarea rows="4" class="default-input" placeholder="Write your answer here"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-pink">Close ticket</button>
                        <button type="button" class="btn btn-default">Send</button>
                    </div>
                </div>
            </Modal>
        </React.Fragment>
    )
}

export default ModalReplyTicket;