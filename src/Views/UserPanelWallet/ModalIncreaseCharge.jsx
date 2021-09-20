import React, { useState} from 'react'
import axios from "../../utils/request";
import { Modal, notification } from 'antd';
import { ACCOUNT_INCREASE_CHARGE } from '../../utils/constant';
import { BASE_URL } from '../../utils';
import { failNotification, successNotification } from '../../utils/notification';

function ModalWidrawal({setIsModalIncreaseChargeVisible , isModalIncreaseChargeVisible , Wallet}) {

    
    const [amountCharge, setAmountCharge] = useState()

    const handleOk = () => {
        setIsModalIncreaseChargeVisible(false);
    };
  
    const handleCancel = () => {
        setIsModalIncreaseChargeVisible(false);
    };


    // api service call for increase charge wallet
    const handleIncreaseCharge = () => {      
        let payload = {
            "transaction_type": "increase",
            "amount": parseInt(amountCharge)
          }
          
            axios.post(`${BASE_URL}${ACCOUNT_INCREASE_CHARGE}` , payload)
            .then(resp => {
                // check response code equal 201 and show notification success
                if (resp.data.code === 201) {  
                             
                    handleOk()
                    setTimeout(() => {
                        successNotification("افزایش اعتبار" , "اعتبار با موفقیت افزایش یافت")
                    }, 700);
                }
            })
            .catch(err => {
                console.error(err);
                // api service failed and then show notification failed
                failNotification("خطا" , "ورودی مبلغ خالی یا نامعتبر است!")
            })

            setTimeout(() => {
                window.location.reload();
            }, 1200);
    }

    return (
        <Modal 
            visible={isModalIncreaseChargeVisible} 
            onOk={handleOk} 
            onCancel={handleCancel}
            footer={<div></div>}
        >
                
            <div>
                <div className="">
                    <div className="">
                        <div className="modal-header">
                            <div className="container g-0 d-flex justify-content-between">
                                <div className="main-title">
                                    <h2 className="default titr">
                                        افزایش اعتبار
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="modal-body textalign-center">
                            <h3 className="default">{Wallet?.inventory} <span className="price-unit">تومان</span></h3>
                            <h6 className="default">اعتبار نقدی</h6>
                            <div className="search-input">
                                <label className="default-lable mb-2">مبلغ مورد نظر خود را وارد نمایید.</label>
                                <input 
                                    type="number" 
                                    className="default-input" 
                                    placeholder="100,000"
                                    onChange={(e)=>setAmountCharge(e.target.value)}
                                />
                                <span className="unit">تومان</span>
                            </div>
                        </div>


                        <div className="modal-footer">
                            <button 
                                onClick={handleIncreaseCharge} 
                                className="btn btn-default">
                                   پرداخت
                            </button>
                        </div>

                    </div>
                </div>
            </div>

      </Modal>
    )
}

export default ModalWidrawal; 
