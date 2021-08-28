import React, { useState } from 'react'
import { Modal, Button } from "antd";
import { Link } from 'react-router-dom';
import { convertCurrencyType } from '../../utils/converTypePersion';


function TransferToPay({paymentMethod , price , currency , artist , artworkTitle , homAuction , url}) {
    const [loading, setloading] = useState(false);
    const [visible, setvisible] = useState(false);



    const showModal = () => {
        setvisible(true)
    };

    const handleOk = () => {
        setloading(true)
        setTimeout(() => {
            setloading(false);
            setvisible(false);
        }, 3000);
    };

    const handleCancel = () => {
        setvisible(false);
    };


    return (
        <>
            <Button 
                className={paymentMethod === "OFFLINE" ? "d-none" : "btn-default mrgl20"} 
                type="primary"  
                onClick={showModal}>
                مشاهده و پرداخت
            </Button>
            <Modal
                
                centered title={
                    <div className="d-flex align-items-center justify-content-between">
                        <h2 className="default titr">ارسال به درگاه</h2>

                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={() => setvisible(false)}
                        />
                    </div>

                }
                visible={visible}
                // title="ارسال به درگاه"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <div class="modal-footer">

                        <Button key="back" className="btn btn-gray align-items-center" onClick={handleCancel}>
                            بستن
                        </Button>
                        <Button   key="submit" type="btn btn-default" loading={loading} onClick={handleOk}>
                            پرداخت
                        </Button>

                    </div>
                ]}
            >
                <div className="modal-body">
                    <div className="transfer-to-pay">
                        <div className="d-flex flex-row">
                            <div className="artwork-img">
                                <img src={url} width="317" height="280" alt="" className="img-fluid" />
                            </div>
                            <div className="artwork-info-left col-md-6">
                                <div>
                                    <span>{artist ? artist : ''}</span>
                                    <h5 className="default">{artworkTitle ? artworkTitle : ''}</h5>
                                </div>
                                <p className="mrgt10">از<Link to="/">{homAuction}</Link></p>
                            </div>
                        </div>
                        <div className="pay-info">
                            {/* <div className="payinfo-price">
                                <span>270 <span className="price-unit">تومان</span></span>
                                <span className="price-title">آخرین پیشنهاد شما</span>
                            </div>
                            <span className="sep"></span> */}
                            <div className="payinfo-price">
                                <span>{price ? price : ''} <span className="price-unit">{price ? convertCurrencyType(currency) : ''}</span></span>
                                <span className="price-title">قیمت قابل پرداخت</span>
                            </div>
                            {/* <span className="sep"></span>
                            <div className="payinfo-price">
                                <span>350 <span className="price-unit">تومان</span></span>
                                <span className="price-title">بیشترین پیشنهاد خودکار شما</span>
                            </div> */}
                        </div>
                        {/* <div className="input-group">
                            <label className="default-lable textalign-center">بیشترین پیشنهاد خودکار خود را وارد نمایید.</label>
                            <input type="text" className="default-input" placeholder="بیشترین پیشنهاد خودکار" />
                        </div> */}
                    </div>
                </div>
            </Modal>


        </>
    )
}

export default TransferToPay;