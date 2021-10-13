import React, {useEffect, useState} from 'react'
import HeaderPanel from '../../components/HeaderPanel';
import PanelSidebar from '../../components/PanelSidebar';
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import { ACCOUNT_WITHDRAWAL } from '../../utils/constant';
import { successNotification } from '../../utils/notification';
import ModalIncreaseCharge from './ModalIncreaseCharge';
import ModalWithdrawal from './ModalWithdrawal';

function UserPanelWallet() {
    const [Wallet, setWallet] = useState("");
    let numeral = require('numeral');
    const [isModalWithdrawalVisible, setIsModalWithdrawalVisible] = useState(false);
    const [isModalIncreaseChargeVisible, setIsModalIncreaseChargeVisible] = useState(false);

    const getWallet = () => {
        axios.get(`${BASE_URL}/accounting/wallet/me/`)
            .then(resp => {
                if (resp.data.code === 200) {
                    setWallet(resp.data.data.result)
                }

            })
            .catch(err => {
                console.error(err);
            })
    }

    useEffect(() => {
        getWallet()
    }, [])



    return (
        <>
            <HeaderPanel  titlePage = {" کیف پول"}/>
            <div className="panel-main">
                <PanelSidebar/>
                <div className="panel-body">
                    <div className="panel-container">
                        <div className="col-xxxxl-8">
                            <div className="row row-cols-md-2 row-cols-1 ">
                                <div className="col">
                                    <div className="wallet-block">
                                        <h3 className="default gray50">اعتبار نقدی</h3>
                                        <h2 className="default">{numeral(Wallet?.inventory).format('0,0')} <span className="price-unit">تومان</span></h2>
                                        <div className="btn-group">
                                            <button 
                                                // show modal increase charge wallet
                                                onClick={()=>setIsModalIncreaseChargeVisible(true)}
                                                type="button" 
                                                className="btn-default" 
                                                data-bs-toggle="modal"
                                                data-bs-target="#increasecreadit">
                                                    افزایش اعتبار
                                            </button>
                                            <button 
                                                // show modal withdrawal from inventory 
                                                onClick={()=>setIsModalWithdrawalVisible(true)} 
                                                type="button" 
                                                className="btn-outline-pink" 
                                                data-bs-toggle="modal"
                                                data-bs-target="#withdrawal">برداشت از حساب
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="wallet-block">
                                        <h3 className="default gray50">اعتبار هدیه</h3>
                                        <h2 className="default">{Wallet?.gift_credit}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            {/* modal increase charge wallet */}
            <ModalIncreaseCharge 
                setIsModalIncreaseChargeVisible={setIsModalIncreaseChargeVisible} 
                isModalIncreaseChargeVisible={isModalIncreaseChargeVisible} 
                Wallet={Wallet}
            />
            {/* modal withdrawal thant handle decrease inventory */}
            <ModalWithdrawal 
                setIsModalWithdrawalVisible={setIsModalWithdrawalVisible} 
                isModalWithdrawalVisible={isModalWithdrawalVisible} 
                Wallet={Wallet}
            />

        </>
    )
}

export default UserPanelWallet;