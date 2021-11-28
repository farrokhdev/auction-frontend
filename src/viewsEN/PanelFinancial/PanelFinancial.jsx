import React, { useState, useEffect } from 'react';
import HeaderPanel from '../../componentsEN/HeaderPanel/index.js';
import PanelSideBar from '../../componentsEN/PanelSideBar/PanelSideBar.jsx';
import { Spin } from "antd";
import { bankList } from './banks';
import { useHistory, useParams } from "react-router-dom";
import axios from '../../utils/request';
import { BASE_URL } from '../../utils';
import { ACCOUNT_BANK_INFO } from '../../utils/constant';
import Spinners from '../../components/Spinners';
import { successNotification, failNotification } from '../../utils/notification';


function PanelFinancial() {

    const [infoBank, setInfoBank] = useState({})
    const [loading, setLoading] = useState(true)
    const history = useHistory();
    const params = useParams();

    const getInfoBankAccount = () => {
        axios.get(`${BASE_URL}${ACCOUNT_BANK_INFO}`).then(res => {
            console.log(res.data);
            setInfoBank(res.data.data.result[0])
            setLoading(false)
        }).catch(err => {
            console.error(err)
            setLoading(false)
        })
    }
    console.log("props.profile==>> ", history)
    useEffect(() => {
        getInfoBankAccount();
    }, [])


    const updateBankInfo = () => {
        setLoading(true)
        let payload = {
            "bank_name": infoBank.bank_name,
            "card_number": infoBank.card_number,
            "account_number": infoBank.account_number,
            "sheba_number": infoBank.sheba_number
        }

        const pattern_Num = /^[\d]{0,26}$/;
        // const pattern_En_Num = /^[a-zA-Z0-9/)/(\\÷×'":;|}{=`~,<>/\-$@$!%*?&#^_. +]+$/ ;

        if (infoBank?.id) {



            if (
                payload.bank_name.length &&
                payload.card_number &&
                pattern_Num.test(payload.card_number) &&
                payload.account_number.length &&
                pattern_Num.test(payload.account_number) &&
                payload.sheba_number.length == 26 &&
                infoBank.sheba_number.slice(0, 2) === "IR"
            ) {

                axios.put(`${BASE_URL}${ACCOUNT_BANK_INFO}${infoBank?.id}/`, payload).then(res => {
                    setLoading(false)
                    successNotification("Update banking information", "Information successfully updated");
                    if (params?.id && params?.id !== "check") {
                        history.push(`/en/buyer-register/${params?.id}`)
                    }
                    setTimeout(() => {
                        window.location.reload();
                    }, 1500);

                }).catch(err => {
                    console.error(err)
                    setLoading(false)
                    failNotification("Error registering information!", "Input values ​​are invalid")
                })
            } else {
                setLoading(false)
                failNotification("Error recording information!", "Input values ​​are invalid!")
            }
        } else {
            if (
                payload.bank_name.length &&
                payload.card_number &&
                pattern_Num.test(payload.card_number) &&
                payload.account_number.length &&
                pattern_Num.test(payload.account_number) &&
                payload.sheba_number.length == 26 &&
                infoBank.sheba_number.slice(0, 2) === "IR"
            ) {

                axios.post(`${BASE_URL}${ACCOUNT_BANK_INFO}`, payload).then(res => {
                    setLoading(false)
                    successNotification("Update banking information", "Information successfully updated");
                    if (params?.id && params?.id !== "check") {
                        history.push(`/en/buyer-register/${params?.id}`);
                    }
                    setTimeout(() => {
                        window.location.reload();
                    }, 1500);

                }).catch(err => {
                    console.error(err)
                    setLoading(false)
                    failNotification("Error registering information!", "Input values ​​are invalid")
                })
            } else {
                setLoading(false)
                failNotification("Error registering information!", "Input values ​​are invalid")
            }
        }
    }

    const handleSetBankName = (value) => {
        setInfoBank({
            ...infoBank, bank_name: value
        })
    }

    const handleSetCartNumber = (value) => {
        setInfoBank({
            ...infoBank, card_number: value
        })
    }

    const handleSetAccountNumber = (value) => {
        setInfoBank({
            ...infoBank, account_number: value
        })
    }

    const handleSetShebaNumber = (value) => {
        setInfoBank({
            ...infoBank, sheba_number: value
        })
    }

    return (

        <div>
            <Spinners loading={loading} />
            <HeaderPanel titlePage={"Financial information"} />
            <main>
                <div className="panel-main">
                    <PanelSideBar />
                    <div className="panel-body">
                        <div className="panel-container">
                            <div className="col-xxxxl-8">
                                <div className="row row-cols-md-2 row-cols-1">
                                    <div className="col">
                                        <div className="input-group">
                                            <label className="default-lable">Bank name</label>

                                            <select
                                                onChange={(e) => handleSetBankName(e.target.value)}
                                                defaultValue={infoBank?.bank_name}
                                                className="form-select"
                                                aria-label="Default select example"
                                                required={true}
                                            >

                                                {bankList.length ? bankList?.map((bank) => (
                                                    <>
                                                        <option value="none" selected disabled hidden>{infoBank?.bank_name}</option>
                                                        <React.Fragment key={bank?.id}>
                                                            <option >{bank?.name}</option>
                                                        </React.Fragment>
                                                    </>

                                                )) : ''}

                                            </select>

                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="input-group">
                                            <label className="default-lable">Card number</label>
                                            <input maxlength={16} onChange={(e) => handleSetCartNumber(e.target.value)} type="text" required className="default-input" placeholder="Enter card number"
                                                defaultValue={infoBank?.card_number} />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="input-group">
                                            <label className="default-lable">Account number</label>
                                            <input maxlength={26} onChange={(e) => handleSetAccountNumber(e.target.value)} type="text" required className="default-input" placeholder="Enter Account number."
                                                defaultValue={infoBank?.account_number} />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="input-group">
                                            <label className="default-lable">SHEBA number</label>
                                            <input maxlength={26} onChange={(e) => handleSetShebaNumber(e.target.value)} type="text" required className="default-input" placeholder="IR530700052400114950030001"
                                                defaultValue={infoBank?.sheba_number} />
                                        </div>
                                    </div>


                                </div>
                                <div className="row">
                                    <div className="panel-button-group">
                                        <button
                                            onClick={updateBankInfo} 
                                            className="btn-default">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default PanelFinancial;
