import React from 'react';
import {Modal} from 'antd'

function ModalIncreaseCredit(props) {

    const {setVisibleModalIncreaseCredit , visibleModalIncreaseCredit } = props


    return (

        <React.Fragment>
            <Modal
                // title="لیست محصولات"
                centered
                className="modal-panel-increseCredit"
                visible={visibleModalIncreaseCredit}
                onOk={() => setVisibleModalIncreaseCredit(false)}
                onCancel={() => setVisibleModalIncreaseCredit(false)}
                width={600}
                footer={[]}
                header={[]}
                >
                    <div class="modal-content border-0">
                    <div class="modal-header">
                        <div class="container g-0 d-flex justify-content-between">
                            <div class="main-title">
                                {/* <h2 class="default titr"> */}
                                <h2 class="default ">
                                    Increase credit
                                </h2>
                            </div>
                            <button onClick={() => setVisibleModalIncreaseCredit(false)} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    </div>
                    <div class="modal-body textalign-center">
                        <h3 class="default">35.000 <span class="price-unit">USD</span></h3>
                        <h6 class="default">Cash credit</h6>
                        <div class="search-input">
                            <label class="default-lable">Enter your want amount</label>
                            <input type="text" class="default-input" placeholder="35,000"/>
                            <span class="unit">USD</span>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default">Pay now</button>
                    </div>
                </div>
            </Modal>
        </React.Fragment>
    )
}

export default ModalIncreaseCredit;
