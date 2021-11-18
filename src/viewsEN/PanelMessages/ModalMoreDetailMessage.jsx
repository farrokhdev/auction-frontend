import React from 'react';
import {Modal} from 'antd'

function ModalMoreDetailMessage(props) {

    const {visibleModalMoreDetailsMessage , setVisibleModalMoreDetailsMessage} = props
    return (
        <React.Fragment>

            <Modal
                centered
                className="modal-more-details-message"
                visible={visibleModalMoreDetailsMessage}
                onOk={() => setVisibleModalMoreDetailsMessage(false)}
                onCancel={() => setVisibleModalMoreDetailsMessage(false)}
                width={600}
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
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    </div>
                    <div class="modal-body">
                        <span class="msg-date">24 Sep 2020</span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                            ullamcorper suscipitm, quis nostrud exerci tation ullamcorper suscipit
                        </p>
                    </div>
                </div>
            </Modal>
        </React.Fragment>
    )
}

export default ModalMoreDetailMessage;
