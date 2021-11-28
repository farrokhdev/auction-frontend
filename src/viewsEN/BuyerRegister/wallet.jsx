import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { message, Modal, Spin } from "antd";
import ModalWallet from './ModalWallet';
import { Redirect } from "react-router-dom";
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import { ACCOUNT_WALLET } from "../../utils/constant";

function Wallet(props) {
    const { setSelectComponent, selectComponent, selectProducts , id} = props
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [msg, setMsg] = useState(false)
    const [thresholdList, setThresholdList] = useState([])

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
                        .then(resp => {
                            if (resp.data.code === 200) {
                                setMsg(resp.data.data.result)
                            }
                        })
                        .catch(err => {
                            message.error(err?.response?.data?.data?.error_message);
                        })
                }
            })
            .catch(err => {
                setLoading(false)
                console.error(err);
                message.error("صفحه را دوباره لود کنید")
            })
    }

    const getTresholdsData = () => {
        axios.get(`${BASE_URL}/sale/auctions/${id}/thresholds/`)
            .then(resp => {
                if (resp.data.code === 200) {
                    setThresholdList(resp.data.data.result)
                }
            })
            .catch(err => {
                message.error(err?.response?.data?.data?.error_message);
            })
    }

    useEffect(() => {
        getData()

    }, [])

console.log("thresholdList==>>" , thresholdList)
    return (
        <div>
            <div className="container container-form">
                <div className="wallet-container">
                    <div className="price-block textalign-center">
                        <span className="price">
                            {
                                data?.total_inventory ?? 0
                            }
                            <span className="price-unit">USD</span>
                        </span>
                        <span className="price-lable">Your account balance</span>

                        <div className="price-block">{msg}</div>
                    </div>
                    <Link
                        onClick={() => getTresholdsData(props?.id)}
                        data-bs-toggle="modal" data-bs-target="#charge-modal">
                        How much should I charge?
                    </Link>
                    <button type="button" className="btn-outline-pink" onClick={() => setIsModalVisible(true)}>
                        Increase credit
                    </button>
                </div>
                <div className="button-group">
                    <button type="button" className="btn-gray" onClick={() => {
                        setSelectComponent(selectComponent - 1)
                    }}>
                        Back
                    </button>
                    <button type="button" className="btn-default" onClick={() => {
                        setSelectComponent(selectComponent + 1)
                    }}>
                        Continue
                    </button>
                </div>
            </div>
            <Modal centered

                title={
                    <div className='d-flex align-items-center justify-content-between'>
                        <span>Increase inventory</span>
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
                <ModalWallet setSelectComponent={setSelectComponent} selectComponent={selectComponent}
                    setIsModalVisible={setIsModalVisible} refreshTable={getData}
                    title={"Add a new bank account"} />
            </Modal>

            <div className="modal fade" id="charge-modal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog w-600">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="container g-0 d-flex justify-content-between">
                                <div className="main-title">
                                    <h2 className="default titr">
                                        How much should I charge?
                                    </h2>
                                </div>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                        </div>
                        <div className="modal-body textalign-center">
                            <div className="recharge-txt">
                                <p>Lorem ipsum dolor sit amet,
                                    consectetuer adipiscing elit,
                                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis.</p>
                            </div>


                            <div className="amount-list">

                                {thresholdList?.length ? thresholdList?.map((item, key, index) => (
                                    <React.Fragment key={key}>
                                        <div className="amount-block">
                                            <div className="amount-range">
                                                0 - {item?.threshold}<span className="unit">{item.currency}</span>
                                            </div>
                                            <span className="d-none d-md-inline-block">need to</span>
                                            <div className="amount-range">
                                                {item?.sufficient_inventory}<span className="unit">{item.currency}</span>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                )) : ''}

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Wallet;