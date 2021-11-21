import React, {useEffect, useState} from "react";
import HeaderPanel from "../../componentsEN/HeaderPanel";
import PanelSidebar from "../../componentsEN/PanelSideBar";
import {Link} from "react-router-dom";
import {Spin} from "antd";
import PaginationComponent from "../../components/PaginationComponent";

function AuctionsBids(props) {

    const [bidsCount, setBidsCount] = useState(0);

    const [bids, setBids] = useState([{
        first_name : 'Ehsan' ,
        last_name : 'Mashali' ,
        price : 200 ,

    }]);
    const [loading, setLoading] = useState(false);
    const [params, setParams] = useState({
        page : 1 , 
        page_size : 10 , 
        auction : props.match.params.id
    })

    useEffect(() => {

    }, [params])


    const handeSelectPage = (e) => {
        setParams({
            ...params, page: e
        })
    }

    return (
        <>
            <HeaderPanel titlePage={'Bids'}/>
            <Spin spinning={loading}>
                <div className="panel-main">
                    <PanelSidebar/>
                    <div className="panel-body">
                        <div className="panel-container">
                            <div className="modal-header">
                                <div className="container g-0 d-flex justify-content-between">
                                    <div className="main-title">
                                        <h2 className="default titr">
                                        Bids
                                        </h2>
                                    </div>
                                    <Link to="/en/auctions-list">
                                        <button type="button" className="btn-outline-gray">
                                        Return to the auction list
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            {bids? bids.map((item, key) => {
                                return(
                                    <div className="amount-list" key={key}>
                                        <div className="amount-block">
                                            <div className="amount-range">{item.first_name + " " + item.last_name}</div>
                                            <div className="amount-range">
                                                {item.price}<span className="unit">USD</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) : ""}


                                <PaginationComponent count={bidsCount} handeSelectPage={handeSelectPage} />
                        </div>
                    </div>
                </div>
                {/**Main**/}


                
            </Spin>

        </>


    );
}

export default AuctionsBids;
