import React , {useState} from "react";
import HeaderPanel from "../../componentsEN/HeaderPanel";
import PanelSideBar from "../../componentsEN/PanelSideBar/PanelSideBar";
import ModalIncreaseCredit from "./ModalIncreaseCredit";
import ModalWithdrawal from "./ModalWithdrawal";


function PanelWallet() {

    const [visibleModalIncreaseCredit, setVisibleModalIncreaseCredit] = useState(false)
    const [visibleModalWithdrawal, setVisibleModalWithdrawal] = useState(false)

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
                                    <h2 class="default">35.000 USD</h2>
                                    <div class="btn-group">
                                        <button onClick={()=>setVisibleModalIncreaseCredit(true)} type="button" class="btn-default" data-bs-toggle="modal"
                                                data-bs-target="#increasecreadit">Increase credit
                                        </button>
                                        <button onClick={()=>setVisibleModalWithdrawal(true)} type="button" class="btn-outline-pink" data-bs-toggle="modal"
                                                data-bs-target="#withdrawal">Withdrawal
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="wallet-block">
                                    <h3 class="default gray50">Gift credit</h3>
                                    <h2 class="default">0</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                <ModalIncreaseCredit
                    setVisibleModalIncreaseCredit={setVisibleModalIncreaseCredit}
                    visibleModalIncreaseCredit={visibleModalIncreaseCredit}
                />    
                
                <ModalWithdrawal
                    setVisibleModalWithdrawal={setVisibleModalWithdrawal}
                    visibleModalWithdrawal={visibleModalWithdrawal}
                />



                </div>
          </div>
        </div>
      </main>
    </>
    )
}

export default PanelWallet;
