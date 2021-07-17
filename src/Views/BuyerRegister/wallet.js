import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import {ACCOUNT_WALLET} from "../../utils/constant";
import {message, Modal, Spin} from "antd";
import ModalFinantioal from "./ModalFinantioal";
import ModalWallet from "./ModalWallet";
import {Redirect} from "react-router-dom";

const Wallet = (props) => {
    const {setSelectComponent, selectComponent} = props
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [next, setNext] = useState(false)
    useEffect(()=>{
        getData()
    },[])

    const getData = () => {
        setLoading(true)
        axios.get(`${BASE_URL}${ACCOUNT_WALLET}`)
            .then(resp => {
                setLoading(false)
                if ((resp.data.code === 200)) {

                    const res = resp.data?.data?.result;
                    // form.setFieldsValue(res)
                    setData(res)
                    // setDataCount(resp.data?.data?.count)
                    // let check = Object.keys(res).some(t => !res[t]);
                    // console.log(check)
                    // setNext(!check)
                }
            })
            .catch(err => {
                setLoading(false)
                console.error(err);
                message.error("صفحه را دوباره لود کنید")
            })
    }
    return (
        <div>
            <div className="container container-form">
                <div className="wallet-container">
                    <div className="price-block textalign-center">
                <span className="price">
                    {
                        data?.total_inventory ?? 0
                    }
                    <span className="price-unit">تومان</span>
                </span>
                        <span className="price-lable">مانده حساب شما</span>
                    </div>
                    <Link data-bs-toggle="modal" data-bs-target="#charge-modal">
                        چقدر باید شارژ کنم؟
                    </Link>
                    <button type="button" className="btn-outline-pink"        onClick={() => setIsModalVisible(true)}>
                        افزایش اعتبار
                    </button>
                </div>
                <div className="button-group">
                        <button type="button" className="btn-gray" onClick={() => {
                            setSelectComponent(selectComponent - 1)
                        }}>
                            بازگشت
                        </button>
                        <button type="button" className="btn-default" onClick={() => {
                            setSelectComponent(selectComponent + 1)
                        }}>
                            ادامه
                        </button>
                </div>
            </div>
            <Modal centered

                   title={
                       <div className='d-flex align-items-center justify-content-between'>
                           <span>افزایش موجودی</span>
                           <button
                               type="button"
                               className="btn-close"
                               data-bs-dismiss="modal"
                               aria-label="Close"
                               onClick={() => setIsModalVisible(false)}
                           />

                       </div>
                   }
                   className="text-end" width={1000} visible={isModalVisible}
                   onOk={() => setIsModalVisible(false)} onCancel={() => setIsModalVisible(false)} footer={[]}>
                <ModalWallet  setSelectComponent={setSelectComponent} selectComponent={selectComponent}
                                 setIsModalVisible={setIsModalVisible} refreshTable={getData}
                                 title={"افزودن حساب بانکی جدید"}/>
            </Modal>

        </div>
    );
};

export default Wallet;