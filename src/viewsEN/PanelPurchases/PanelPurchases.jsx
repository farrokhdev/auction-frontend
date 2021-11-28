import React , {useState , useEffect} from "react";
import HeaderPanel from "../../componentsEN/HeaderPanel";
import PanelSideBar from "../../componentsEN/PanelSideBar/PanelSideBar";
import CardPurchase from "./CardPurchase";
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import { LIST_MY_WON_PERCHACE } from "../../utils/constant";
import PaginationComponent from "../../componentsEN/PaginationComponent";
import ModalPayment from "./ModalPayment";

function PanelPurchases() {

  
  
  const [loading, setLoading] = useState(true);
  const [listWonPurchasse, setListWonPurchasse] = useState([]);
  const [countPurchase, setCountPurchase] = useState(0)
  const [visibleModalPayment, setVisibleModalPayment] = useState(false)
  const [is_call_service_detail_product, setIs_call_service_detail_product] = useState(false)
  const [PRODUCT_ID, setPRODUCT_ID] = useState(null)
  const [params, setParams] = useState({
    page: 1,
    page_size: 9,
  })

    useEffect(() => {
        getMyWonPurchase()
    }, [])

    // Get list of Won purchase user
    const getMyWonPurchase = () => {
        axios.get(`${BASE_URL}${LIST_MY_WON_PERCHACE}`)
            .then(resp => {
                setLoading(false)
                if (resp.data.code === 200) {
                    setListWonPurchasse(resp.data.data.result)
                    setCountPurchase(resp.data.total)
                }

            })
            .catch(err => {
                setLoading(false)
                console.error(err);
            })
    }
    // Handle select page when user click in pages on pagination
    const handeSelectPage = (e) => {
        setParams({
            ...params, page: e
        })
    }

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

                    {listWonPurchasse?.length ? listWonPurchasse?.map((purchase , index) => (
                        
                        <React.Fragment key={purchase?.id}>

                          <CardPurchase
                            purchase={purchase} 
                            setVisibleModalPayment={setVisibleModalPayment}
                            visibleModalPayment={visibleModalPayment}
                            setIs_call_service_detail_product={setIs_call_service_detail_product}
                            setPRODUCT_ID={setPRODUCT_ID}
                          />

                        </React.Fragment>
                        
                    )) : ''}

                          <ModalPayment 
                              setVisibleModalPayment={setVisibleModalPayment}
                              visibleModalPayment={visibleModalPayment}
                              setIs_call_service_detail_product={setIs_call_service_detail_product}
                              PRODUCT_ID={PRODUCT_ID}
                              is_call_service_detail_product={is_call_service_detail_product}
                          />

                </div>
              </div>

              <PaginationComponent count={countPurchase} handeSelectPage={handeSelectPage} />

            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default PanelPurchases;
