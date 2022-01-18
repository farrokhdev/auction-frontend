import React from 'react'
import { Link } from 'react-router-dom'
import pic1 from '../../images/pic1.jpg'

function ModalAuctionList({ id , Product}) {
    return (
        <div className="modal fade" id="auction-links" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog w-600">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="container g-0 d-flex justify-content-between">
                            <div className="main-title">
                                <h2 className="default titr">
                                    لینک‌های مرتبط
                                </h2>
                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    </div>
                    <div className="modal-body">
                        <div className="row row-cols-1">
                            <div className="col">
                                {Product?.length && Product?.map((productList) => {
                                    return (
                                    productList?.artwork_link ? 
                                    
                                        <a href={productList?.artwork_link} className="ra-row">
                                            <img src={productList?.media[0]?.exact_url} width="998" height="880" alt="" className="img-fluid" />
                                            <div className="ra-col">
                                                <h6 className="default gray50 ">{productList?.artwork_title}</h6>
                                                <h4 className="default">{productList?.latest_auction?.description}</h4>
                                            </div>
                                            <div className="ra-col">
                                                <h5 className="default lot-num">{productList?.latest_auction?.lot_num}</h5>
                                            </div>
                                        </a>
                                        : ""
                                     )
                                })} 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalAuctionList