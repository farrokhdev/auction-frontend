import React , {useState , useEffect} from 'react';
import {Modal} from 'antd'
import { handleShowImage } from '../../utils/showImageProduct';
import { ONE_PRODUCT } from '../../utils/constant';
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import numberWithCommas from '../../components/threeNumber';

function ModalPayment(props) {

    const {setVisibleModalPayment , visibleModalPayment  ,   setIs_call_service_detail_product , PRODUCT_ID } = props
    const [loading, setLoading] = useState(false)
    const [artwork, setArtwork] = useState()

        useEffect(() => {
            if(!!PRODUCT_ID){
                getProduct()
            }
        }, [PRODUCT_ID])


    const getProduct = ()=>{
        setLoading(true)
        axios.get(`${BASE_URL}${ONE_PRODUCT(PRODUCT_ID)}`).then(res => {
            setLoading(false)
            setArtwork(res.data.data.result)
        }).catch(err => {
            setLoading(false)
            console.error(err)
        })
    }

    const handleClose = () => {
        setVisibleModalPayment(false)
        setIs_call_service_detail_product(false)
    }



    return (
        <React.Fragment>

            <Modal
                centered
                destroyOnClose={true}
                className="modal-pyment-mypurchase"
                visible={visibleModalPayment}
                onOk={() => setVisibleModalPayment(false)}
                onCancel={() => setVisibleModalPayment(false)}
                width={800}
                footer={[]}
                header={[]}
                >
                    <div class="modal-content border-0">
                        <div class="modal-header">
                            <div class="container g-0 d-flex justify-content-between">
                                <div class="main-title">
                                    {/* <h2 class="default titr">Transfer to Paypal</h2> */}
                                    <h2 class="default ">Transfer to Paypal</h2>
                                </div>
                                <button onClick={handleClose} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                        </div>
                        <div class="modal-body">
                        <div class="transfer-to-pay">
                            <div class="d-flex flex-row">
                                <div class="artwork-img">
                                    <img src={handleShowImage(artwork)} width="317" height="280" alt="" class="img-fluid"/>
                                </div>
                                <div class="artwork-info-left col-md-6">
                                    <div>
                                        <span>{artwork?.english_artist_name}</span>
                                        <h5 class="default">{artwork?.artwork_title_en}</h5>
                                    </div>
                                    <p class="mrgt10">From <span className="mx-1">{artwork?.latest_auction?.house?.home_auction_name_en}</span></p>
                                </div>
                            </div>
                            <div class="d-block justify-content-center">
                                <p class="text-center">Purchaseable price </p>
                                <div className="text-center"><span>{numberWithCommas(artwork?.bidding_details?.max_bid)} {' '}{artwork?.latest_auction?.currency !== "dollar" ? artwork?.latest_auction?.currency : 'USD'}</span></div>
                            </div>
                        </div>
                        </div>
                        <div class="modal-footer">
                            <button onClick={handleClose} type="button" class="btn btn-gray" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-default">Pyment</button>
                        </div>
                    </div>
            </Modal>
        </React.Fragment>
    )
}

export default ModalPayment;
