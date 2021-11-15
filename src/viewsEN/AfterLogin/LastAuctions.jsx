import React, { useState } from 'react'
import pic6 from "../../imgEN/pic6.jpg"
function LastAuctions() {
    const [lastAuctions, setLastAuctions] = useState([1, 2, 3, 4])

    return (
        <React.Fragment>
            <div className="container innercontainer">
                {lastAuctions ? lastAuctions.map((item, key) => {
                    return (
                        <div className={"row " + (key % 2 === 0 ? "" : "flex-row-reverse pull-top100")}>
                            <div className="col-xl-4 col-lg-4 col-sm-5">
                                <div className="bg-shadow tl-shadow20">
                                    <div className="artwork-img">
                                        <img src={pic6} width="570" height="470" alt="" className="img-fluid" />
                                        <div className="auction-category">
                                            <span className="category-save auction-reminder"></span>
                                            <span className="category-icon live-icon">Live</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-sm-7">
                                <div className="auction-info">
                                    <h6 className="auctioninfo location">Twe nts Veilinghuis</h6>
                                    <div className="auction-calender auctioninfo">
                                        <div className="auction-date">
                                            <span className="start-date">19 June</span>
                                            <span className="end-date">22 June</span>
                                        </div>
                                        <div className="auction-time">
                                            <span className="start-time">10 AM</span>
                                            <span className="end-time">10 PM</span>
                                        </div>
                                    </div>
                                    <h3 className="default">Live online only Mid Century Modern, Decorative Arts and Pictures
                                        Antiques,
                                        Books </h3>
                                    <button type="button" className="btn btn-basic">Join this auction</button>
                                </div>
                            </div>
                        </div>
                    )
                }) : ""}
            </div>
        </React.Fragment>
    )
}

export default LastAuctions;