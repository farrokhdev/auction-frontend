import React from 'react'
import HeaderPanel from "../../components/HeaderPanel";
import PanelSidebar from "../../components/PanelSidebar";
import img9 from "../../images/img-9.jpg";
import { Link } from "react-router-dom";

function UserPanelCreateAuctionsBids() {
    return (
        <>
            <HeaderPanel titlePage={"لیست پیشنهادات حراج"} />
            <div className="panel-main">
                <PanelSidebar />
                <div className="panel-body">
                    <div className="panel-container">
                        <div className="tab-content" id="profile-tab-content">
                            <div className="tab-pane fade show active" id="profiletab1" role="tabpanel"
                                aria-labelledby="profiletab1-tab">
                                <div className="table-responsive">
                                    <table className="panel-table bids-table">
                                        <thead>
                                            <tr>
                                                <td>#</td>
                                                <td>نام کاربری</td>
                                                <td></td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[1,2,3].map((item,index)=><tr key={index}>
                                                <td>{index}</td>
                                                <td>{item}</td>
                                                <td>
                                                </td>
                                                <td>
                                                    <button type="button" className="btn-outline-gray" data-bs-toggle="modal"
                                                        data-bs-target="#allbids">مشاهده
                                                    </button>
                                                </td>
                                            </tr>)}
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>


                        <div className="modal fade" id="allbids" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog w-800">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <div className="container g-0 d-flex justify-content-between">
                                            <div className="main-title">
                                                <h2 className="default titr">
                                                    همه پیشنهادات
                                                </h2>
                                            </div>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                    </div>
                                    <div className="modal-body">
                                        <div className="d-flex flex-row">
                                            <div className="artwork-img">
                                                <img src={img9} width="317" height="280" alt="" className="img-fluid" />
                                            </div>
                                            <div className="artwork-info-left col-md-6">
                                                <div>
                                                    <span>صادق ادهم</span>
                                                    <h5 className="default">از سری سقاخانه</h5>
                                                </div>
                                                <p className="mrgt10">از<Link to="/">کالکشن 7</Link></p>
                                            </div>
                                        </div>
                                        <div className="table-responsive">
                                            <table className="panel-table bid-table">
                                                <tbody>
                                                    {[1,2,3,4].map((item , index)=><tr key={index}>
                                                        <td>#{index}</td>
                                                        <td>1.500<span className="price-unit">تومان</span></td>
                                                        <td>Pfrlb8Vt</td>
                                                    </tr>)}
                                                    
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserPanelCreateAuctionsBids;