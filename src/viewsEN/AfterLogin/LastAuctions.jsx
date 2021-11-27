import React, { useState, useEffect } from 'react'
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import { Link } from 'react-router-dom';
import { convertToEnForEnglish } from '../../utils/converTypePersion';
import moment from "jalali-moment";

function LastAuctions({ setLoading }) {

    const [lastAuctions, setLastAuctions] = useState([])
    const getLastAuctions = () => {
        setLoading(true)

        axios.get(`${BASE_URL}/sale/auctions/?page_size=8`)
            .then(resp => {
                if (resp.data.code === 200) {
                    setLastAuctions(resp.data.data.result)
                    setLoading(false)
                }
            })
            .catch(err => {
                console.error(err);
                setLoading(false)
            })
    }

    useEffect(() => {
        getLastAuctions()
    }, [])



    return (
        <React.Fragment>
            <div className="container innercontainer">
                {lastAuctions ? lastAuctions.map((item, key) => {
                    return (
                        <div className={"row " + (key % 2 === 0 ? "" : "flex-row-reverse pull-top100")}>
                            <div className="col-xl-4 col-lg-4 col-sm-5">
                                <div className="bg-shadow tl-shadow20">
                                    <div className="artwork-img">
                                        <Link to={`/en/auctions/${item?.id}`}>
                                            <img  style={{ background: `url(${item?.media?.exact_url})`  , height: "280px" ,backgroundSize : 'cover' ,backgroundRepeat : 'no-repeat' }}  alt="" className="img-fluid" />
                                        </Link>
                                        <div className="auction-category">
                                            <span className="category-save auction-reminder"></span>
                                            <span className="category-icon">{convertToEnForEnglish(item?.type)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-sm-7">
                                <div className="auction-info">
                                    <h6 className="auctioninfo location">Twe nts Veilinghuis</h6>
                                    <div className="auction-calender auctioninfo">
                                        <div className="auction-date">
                                            <span className="start-date">{moment(item.start_time, 'YYYY/MM/DD').locale('en').format('DD MMMM')}</span>
                                            <span className="end-date">{moment(item.end_time, 'YYYY/MM/DD').locale('en').format('DD MMMM')}</span>
                                        </div>
                                        <div className="auction-time">
                                            <span className="start-time">{moment(item.start_time, 'YYYY/MM/DD HH:mm').locale('en').format('HH:mm')}</span>
                                            <span className="end-time">{moment(item.end_time, 'YYYY/MM/DD HH:mm').locale('en').format('HH:mm')}</span>
                                        </div>
                                    </div>
                                    <h3 className="default">{item.title_en}</h3>

                                    {item.status === "CLOSED" ?
                                        <button type="button" class="btn btn-basic">The auction is over</button>
                                        :

                                        <Link to={`/en/buyer-register/${item?.id}`}>
                                            <button type="button" className="btn btn-basic join">
                                                {item.status ? "Join this auction" : "Submit a comment"}

                                            </button>
                                        </Link>


                                    }
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