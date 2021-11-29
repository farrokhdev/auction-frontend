import React , {useState , useEffect} from "react";
import HeaderPanel from "../../componentsEN/HeaderPanel";
import PanelSideBar from "../../componentsEN/PanelSideBar/PanelSideBar";
import ModalIncreaseCredit from "./ModalIncreaseCredit";
import ModalWithdrawal from "./ModalWithdrawal";
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";

function PanelWallet() {

    const [visibleModalIncreaseCredit, setVisibleModalIncreaseCredit] = useState(false)
    const [visibleModalWithdrawal, setVisibleModalWithdrawal] = useState(false)
    const [Wallet, setWallet] = useState("");
    let numeral = require('numeral');

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
      <HeaderPanel titlePage={"Wallet"} />
      <main>
        <div class="panel-main">
          <PanelSideBar />
          <div className="panel-body">
                <div className="panel-container" style={{ paddingLeft: "1.7rem" }}>

                    <div class="col-xxxxl-8">
                        <div class="row row-cols-md-2 row-cols-1 ">
                            <div class="col">
                                <div class="wallet-block">
                                    <h3 class="default gray50">Cash credit</h3>
                                    <h2 class="default">{numeral(Wallet?.inventory).format('0,0')} USD</h2>
                                    <div class="btn-group d-block d-sm-flex justify-content-around">
                                        <button onClick={()=>setVisibleModalIncreaseCredit(true)} type="button" class="btn-default m-0 mx-sm-3" data-bs-toggle="modal"
                                                data-bs-target="#increasecreadit">Increase credit
                                        </button>
                                        <button  onClick={()=>setVisibleModalWithdrawal(true)} type="button" class="btn-outline-pink mt-3 mt-sm-0" data-bs-toggle="modal"
                                                data-bs-target="#withdrawal">Withdrawal
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="wallet-block">
                                    <h3 class="default gray50">Gift credit</h3>
                                    <h2 class="default">{Wallet?.gift_credit}</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                <ModalIncreaseCredit
                    setVisibleModalIncreaseCredit={setVisibleModalIncreaseCredit}
                    visibleModalIncreaseCredit={visibleModalIncreaseCredit}
                     Wallet={Wallet}
                    getWallet={getWallet}
                />    
                
                <ModalWithdrawal
                    setVisibleModalWithdrawal={setVisibleModalWithdrawal}
                    visibleModalWithdrawal={visibleModalWithdrawal}
                    Wallet={Wallet}
                    getWallet={getWallet}
                />



                </div>
          </div>
        </div>
      </main>
    </>
    )
}

export default PanelWallet;
