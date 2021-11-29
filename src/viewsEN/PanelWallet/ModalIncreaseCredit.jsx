import React , {useState} from 'react';
import {Modal} from 'antd';
import axios from "../../utils/request";
import { BASE_URL } from '../../utils';
import { ACCOUNT_INCREASE_CHARGE } from '../../utils/constant';
import { failNotification, successNotification } from '../../utils/notification';

function ModalIncreaseCredit(props) {

    const {setVisibleModalIncreaseCredit , visibleModalIncreaseCredit  , Wallet , getWallet } = props


    let numeral = require('numeral');
    const [amountCharge, setAmountCharge] = useState()

    const handleOk = () => {
        setVisibleModalIncreaseCredit(false);
    };
  
    const handleCancel = () => {
        setVisibleModalIncreaseCredit(false);
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
                        successNotification("Increase credit" , "Credit successfully increased")
                    }, 700);
                }
            })
            .catch(err => {
                console.error(err);
                // api service failed and then show notification failed
                failNotification("خطا" , "ورودی مبلغ خالی یا نامعتبر است!")
            })

            setTimeout(() => {
                getWallet();
            }, 1200);
    }

    return (

        <React.Fragment>
            <Modal
                // title="لیست محصولات"
                centered
                className="modal-panel-increseCredit"
                visible={visibleModalIncreaseCredit}
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
                                    INCREASE CREDIT
                                </h2>
                            </div>
                            <button onClick={() => setVisibleModalIncreaseCredit(false)} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    </div>
                    <div class="modal-body textalign-center">
                        <h3 class="default">{numeral(Wallet?.inventory).format('0,0')} <span class="price-unit">toman</span></h3>
                        <h6 class="default">Cash credit</h6>
                        <div class="search-input">
                            <label class="default-lable">Enter your want amount</label>
                            <input onChange={(e)=>setAmountCharge(e.target.value)} type="text" class="default-input" placeholder="35,000"/>
                            <span class="unit">toman</span>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button onClick={handleIncreaseCharge}  type="button" class="btn btn-default">Pay now</button>
                    </div>
                </div>
            </Modal>
        </React.Fragment>
    )
}

export default ModalIncreaseCredit;
