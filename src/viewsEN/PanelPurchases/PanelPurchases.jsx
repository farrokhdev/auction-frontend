import React , {useState} from "react";
import HeaderPanel from "../../components/HeaderPanel";
import PanelSideBar from "../../componentsEN/PanelSideBar/PanelSideBar";
import CardPurchase from "./CardPurchase";

function PanelPurchases() {

    const [visibleModalPayment, setVisibleModalPayment] = useState(false)

  return (
    <>
      <HeaderPanel titlePage={"My purchases"} />
      <main>
        <div class="panel-main">
          <PanelSideBar />
          <div className="panel-body">
            <div className="panel-container" style={{ paddingLeft: "1.7rem" }}>

              <div class="purchase-block">
                <div class="row row-cols-1">

                    {[1, 2 , 3].map((item , key) => (
                        
                        <React.Fragment key={key}>
                             <CardPurchase 
                                setVisibleModalPayment={setVisibleModalPayment}
                                visibleModalPayment={visibleModalPayment}
                            />
                        </React.Fragment>
                        
                    ))}

 

                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default PanelPurchases;
