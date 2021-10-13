import React, { useState} from 'react'
import axios from "../../utils/request";
import { Modal } from 'antd';
import { ACCOUNT_WITHDRAWAL } from '../../utils/constant';
import { BASE_URL } from '../../utils';
import { failNotification, successNotification } from '../../utils/notification';

function ModalWithdrawal({setIsModalWithdrawalVisible , isModalWithdrawalVisible , Wallet}) {

    let numeral = require('numeral');
    const [amoutWithdtrawal, setAmountWithdrawal] = useState()
  
    const handleOk = () => {
        setIsModalWithdrawalVisible(false);
    };
  
    const handleCancel = () => {
        setIsModalWithdrawalVisible(false);
    };


    const handleSetAmount = (val) => {
        setAmountWithdrawal(val)
    }

    // api service call function for submit withdrawal from inventory
    const handleWithdrawal = () => {
        let payload = {
            "transaction_type": "decrease",
            "amount": parseInt(amoutWithdtrawal)
          }

            axios.post(`${BASE_URL}${ACCOUNT_WITHDRAWAL}` , payload)
            .then(resp => {
                // check response data code that equal 201 then close modal and show notification success
                if (resp.data.code === 201) {
                                        
                    handleOk()
                    setTimeout(() => {
                        successNotification("درخواست برداشت" , "درخواست با موفقیت ثبت شد")
                    }, 700);
                }

            })
            .catch(err => {
                console.error(err);
                // api service failed and show notification failed
                failNotification("خطا" , "ورودی مبلغ خالی یا نامعتبر است!")
            })

            setTimeout(() => {
                window.location.reload();
            }, 1200);
    }


    return (
        <Modal 
            visible={isModalWithdrawalVisible} 
            onOk={handleOk} 
            onCancel={handleCancel}
            footer={<div></div>}
            >
                
            <div aria-hidden="true">
                <div className="">
                    <div className="modal-content border-0">
                        <div className="modal-header">
                            <div className="container g-0 d-flex justify-content-between">
                                <div className="main-title">
                                    <h2 className="default titr">
                                        برداشت از حساب
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="modal-body textalign-center">
                            <h3 className="default">{numeral(Wallet?.inventory).format('0,0')} <span className="price-unit">تومان</span></h3>
                            <h6 className="default">اعتبار نقدی</h6>
                            <div className="search-input">
                                <label className="default-lable mb-2">مبلغ مورد نظر خود را وارد نمایید.</label>
                                <input 
                                    onChange={(e)=>handleSetAmount(e.target.value)} 
                                    type="number" 
                                    className="default-input" 
                                    placeholder="100,000"
                                />
                                <span className="unit">تومان</span>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button 
                                onClick={handleWithdrawal} 
                                className="btn btn-default">
                                    برداشت از حساب
                            </button>
                        </div>
                    </div>
                </div>
            </div>
      </Modal>
    )
}

export default ModalWithdrawal; 
