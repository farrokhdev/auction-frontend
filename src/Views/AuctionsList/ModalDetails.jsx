import React from 'react'
import { Link } from 'react-router-dom';

function ModalDetails({ id, selectedBid }) {
    return (

        <div class="modal fade" id="allbids" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog w-800">
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="container g-0 d-flex justify-content-between">
                            <div class="main-title">
                                <h2 class="default titr">
                                    همه پیشنهادات
                                </h2>
                            </div>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    </div>

                    <div class="modal-body">
                        <div class="d-flex flex-row">
                            <div class="artwork-img">
                                <img src={selectedBid?.product_auction?.product?.media[0]?.exact_url} width="317" height="280" alt="" class="img-fluid" />
                            </div>
                            <div class="artwork-info-left col-md-6">
                                <div>
                                    <span>{selectedBid?.product_auction?.product?.artwork_title}</span>
                                    <h5 class="default">از{selectedBid?.auction_house_name}</h5>
                                </div>
                                <p class="mrgt10">از
                                    {/* <Link to={`/one-auction/${selectedBid?.product_auction?.auction_id}`}> */}
                                        {selectedBid?.product_auction?.auction_name}
                                    {/* </Link> */}
                                </p>
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table class="panel-table bid-table">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>{selectedBid?.price}<span class="price-unit">تومان</span></td>
                                        {/* <td>AgtY58#</td> */}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalDetails;