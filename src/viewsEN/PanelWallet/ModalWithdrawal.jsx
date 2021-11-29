import React , {useState} from 'react';
import axios from "../../utils/request";
import { Modal } from 'antd';
import { ACCOUNT_WITHDRAWAL } from '../../utils/constant';
import { BASE_URL } from '../../utils';
import { failNotification, successNotification } from '../../utils/notification';

function ModalWithdrawal(props) {

    const {setVisibleModalWithdrawal , visibleModalWithdrawal , Wallet , getWallet} = props


    let numeral = require('numeral');
    const [amoutWithdtrawal, setAmountWithdrawal] = useState()
  
    const handleOk = () => {
        setVisibleModalWithdrawal(false);
    };
  
    const handleCancel = () => {
        setVisibleModalWithdrawal(false);
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
                        successNotification("Withdrawal request" , "The request was successfully submitted")
                    }, 700);
                }

            })
            .catch(err => {
                console.error(err);
                // api service failed and show notification failed
                failNotification("Error" , "Input amount is empty or invalid!")
            })

            setTimeout(() => {
                getWallet()
            }, 1200);
    }


    return (

        <React.Fragment>
            <Modal
                // title="لیست محصولات"
                centered
                className="modal-panel-withdrawal"
                visible={visibleModalWithdrawal}
                onOk={handleOk}
                onCancel={handleCancel}
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
                                    WITHDRAWAL
                                </h2>
                            </div>
                            <button onClick={() => setVisibleModalWithdrawal(false)} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    </div>
                    <div class="modal-body textalign-center">
                        <h3 class="default">{numeral(Wallet?.inventory).format('0,0')} <span class="price-unit">toman</span></h3>
                        <h6 class="default">Cash credit</h6>
                        <div class="search-input">
                            <label class="default-lable">Enter your want amount</label>
                            <input onChange={(e)=>handleSetAmount(e.target.value)}  type="text" class="default-input" placeholder="35,000"/>
                            <span class="unit">toman</span>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button onClick={handleWithdrawal}  type="button" class="btn btn-default">Pay now</button>
                    </div>
                </div>
            </Modal>
        </React.Fragment>
    )
}

export default ModalWithdrawal;
