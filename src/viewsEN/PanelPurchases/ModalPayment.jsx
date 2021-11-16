import React from 'react';
import {Modal} from 'antd'

function ModalPayment(props) {

    const {setVisibleModalPayment , visibleModalPayment} = props

    return (
        <React.Fragment>

            <Modal
                // title="لیست محصولات"
                centered
                className="modal-pyment-mypurchase"
                visible={visibleModalPayment}
                onOk={() => setVisibleModalPayment(false)}
                onCancel={() => setVisibleModalPayment(false)}
                width={800}
                footer={[]}
                header={[]}
                >
                    <div class="modal-content border-0">
                        <div class="modal-header">
                            <div class="container g-0 d-flex justify-content-between">
                                <div class="main-title">
                                    {/* <h2 class="default titr">Transfer to Paypal</h2> */}
                                    <h2 class="default ">Transfer to Paypal</h2>
                                </div>
                                <button onClick={() => setVisibleModalPayment(false)} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                        </div>
                        <div class="modal-body">
                        <div class="transfer-to-pay">
                            <div class="d-flex flex-row">
                                <div class="artwork-img">
                                    <img src="https://picsum.photos/317/280?grayscale" width="317" height="280" alt="" class="img-fluid"/>
                                </div>
                                <div class="artwork-info-left col-md-6">
                                    <div>
                                        <span>Sadeq Adhaam</span>
                                        <h5 class="default">From the Saqakhaneh series</h5>
                                    </div>
                                    <p class="mrgt10">From<a href="#">Collection7</a></p>
                                </div>
                            </div>
                            <div class="pay-info">
                                <div class="payinfo-price">
                                    <span>270 <span class="price-unit">USD</span></span>
                                    <span class="price-title">Your last bid</span>
                                </div>
                                <span class="sep"></span>
                                <div class="payinfo-price">
                                    <span>300 <span class="price-unit">USD</span></span>
                                    <span class="price-title">Current bid</span>
                                </div>
                                <span class="sep"></span>
                                <div class="payinfo-price">
                                    <span>350 <span class="price-unit">USD</span></span>
                                    <span class="price-title">Your maximum auto bid</span>
                                </div>
                            </div>
                            <div class="input-group">
                                <label class="default-lable textalign-center">Enter your new maximum auto bid</label>
                                <input type="text" class="default-input" placeholder="maximum auto bid..."/>
                            </div>
                        </div>
                        </div>
                        <div class="modal-footer">
                            <button onClick={()=>setVisibleModalPayment(false)} type="button" class="btn btn-gray" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-default">Done</button>
                        </div>
                    </div>
            </Modal>
        </React.Fragment>
    )
}

export default ModalPayment;
