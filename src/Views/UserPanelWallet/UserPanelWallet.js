import React, {useEffect, useState} from 'react'
import HeaderPanel from '../../components/HeaderPanel';
import PanelSidebar from '../../components/PanelSidebar';
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";

function UserPanelArtworkList() {
    const [Wallet, setWallet] = useState("");

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
            <HeaderPanel/>
            <div className="panel-main">
                <PanelSidebar/>
                <div className="panel-body">
                    <div className="panel-container">
                        <div className="col-xxxxl-8">
                            <div className="row row-cols-md-2 row-cols-1 ">
                                <div className="col">
                                    <div className="wallet-block">
                                        <h3 className="default gray50">اعتبار نقدی</h3>
                                        <h2 className="default">{Wallet.inventory} <span className="price-unit">تومان</span></h2>
                                        <div className="btn-group">
                                            <button type="button" className="btn-default" data-bs-toggle="modal"
                                                    data-bs-target="#increasecreadit">افزایش اعتبار
                                            </button>
                                            <button type="button" className="btn-outline-pink" data-bs-toggle="modal"
                                                    data-bs-target="#withdrawal">برداشت از حساب
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="wallet-block">
                                        <h3 className="default gray50">اعتبار هدیه</h3>
                                        <h2 className="default">{Wallet.gift_credit}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div className="modal fade" id="increasecreadit" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog w-600">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="container g-0 d-flex justify-content-between">
                                <div className="main-title">
                                    <h2 className="default titr">
                                        افزایش اعتبار
                                    </h2>
                                </div>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                        </div>
                        <div className="modal-body textalign-center">
                            <h3 className="default">{Wallet.inventory} <span className="price-unit">تومان</span></h3>
                            <h6 className="default">اعتبار نقدی</h6>
                            <div className="search-input">
                                <label className="default-lable">مبلغ مورد نظر خود را وارد نمایید.</label>
                                <input type="text" className="default-input" placeholder="100,000"/>
                                <span className="unit">تومان</span>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default">پرداخت</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="withdrawal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog w-600">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="container g-0 d-flex justify-content-between">
                                <div className="main-title">
                                    <h2 className="default titr">
                                        برداشت از حساب
                                    </h2>
                                </div>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                        </div>
                        <div className="modal-body textalign-center">
                            <h3 className="default">{Wallet.inventory} <span className="price-unit">تومان</span></h3>
                            <h6 className="default">اعتبار نقدی</h6>
                            <div className="search-input">
                                <label className="default-lable">مبلغ مورد نظر خود را وارد نمایید.</label>
                                <input type="text" className="default-input" placeholder="100,000"/>
                                <span className="unit">تومان</span>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default">برداشت از حساب</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserPanelArtworkList;