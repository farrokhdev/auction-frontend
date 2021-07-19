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
    const {setSelectComponent, selectComponent, selectProducts} = props
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [msg, setMsg] = useState(false)
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
                    setData(res)
                    axios.post(`${BASE_URL}/accounting/wallet/check-inventory/products/`, {
                        "product_ids": selectProducts
                    })
                        .then(resp=>{
                            if(resp.data.code === 200){
                                setMsg(resp.data.data.result)
                            }
                        })
                        .catch(err=>{
                            message.error(err.response.data.data.error_message);
                        })
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

                        <div className="price-block">{msg}</div>
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


            <div className="modal fade" id="charge-modal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog w-600">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="container g-0 d-flex justify-content-between">
                                <div className="main-title">
                                    <h2 className="default titr">
                                        چقدر باید شارژ کنم؟
                                    </h2>
                                </div>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                        </div>
                        <div className="modal-body textalign-center">
                            <div className="recharge-txt">
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم<strong> 1000 تومان</strong> از صنعت چاپ
                                    و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                    سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                                    بهبود ابزارهای کاربردی می باشد</p>
                            </div>
                            <div className="amount-list">
                                <div className="amount-block">
                                    <div className="amount-range">
                                        0 - 100<span className="unit">تومان</span>
                                    </div>
                                    <span className="d-none d-md-inline-block">نیاز دارد به</span>
                                    <div className="amount-range">
                                        1,000,000<span className="unit">تومان</span>
                                    </div>
                                </div>
                                <div className="amount-block">
                                    <div className="amount-range">
                                        101 - 200<span className="unit">تومان</span>
                                    </div>
                                    <span className="d-none d-md-inline-block">نیاز دارد به</span>
                                    <div className="amount-range">
                                        2,000,000<span className="unit">تومان</span>
                                    </div>
                                </div>
                                <div className="amount-block">
                                    <div className="amount-range">
                                        201 - 300<span className="unit">تومان</span>
                                    </div>
                                    <span className="d-none d-md-inline-block">نیاز دارد به</span>
                                    <div className="amount-range">
                                        3,000,000<span className="unit">تومان</span>
                                    </div>
                                </div>
                                <div className="amount-block">
                                    <div className="amount-range">
                                        301 - 400<span className="unit">تومان</span>
                                    </div>
                                    <span className="d-none d-md-inline-block">نیاز دارد به</span>
                                    <div className="amount-range">
                                        4,000,000<span className="unit">تومان</span>
                                    </div>
                                </div>
                                <div className="amount-block">
                                    <div className="amount-range">
                                        401 - 500<span className="unit">تومان</span>
                                    </div>
                                    <span className="d-none d-md-inline-block">نیاز دارد به</span>
                                    <div className="amount-range">
                                        5,000,000<span className="unit">تومان</span>
                                    </div>
                                </div>
                                <div className="amount-block">
                                    <div className="amount-range">
                                        501 - 600<span className="unit">تومان</span>
                                    </div>
                                    <span className="d-none d-md-inline-block">نیاز دارد به</span>
                                    <div className="amount-range">
                                        6,000,000<span className="unit">تومان</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Wallet;