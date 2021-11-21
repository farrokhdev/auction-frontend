import React, {useState } from "react"
import HeaderPanel from "../../componentsEN/HeaderPanel";
import PanelSidebar from "../../componentsEN/PanelSideBar";
import { Link } from "react-router-dom";
import { Spin} from "antd";
import { faTimes, faEdit, faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PaginationComponent from "../../components/PaginationComponent";
import ModalList from "./ModalList";


function AuctionsListRequests(props) {
    const [RequestsCount, setRequestsCount] = useState(0);
    const [Details, setDetails] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [Requests, setRequests] = useState([{
        first_name : 'Ehsan' ,
        last_name : 'masali',
        is_approve :true ,
        id : 2,
    }]);
    const [loading, setLoading] = useState(false);
  
    const [params, setParams] = useState({
        page: 1,
        page_size: 10,
        sale__id: props.match.params.id
    })


   
    const getDetails = (pid) => {
        // setLoading(true)
        setIsModalVisible(true);
    }




    const handeSelectPage = (e) => {
        setParams({
            ...params, page: e
        })
    }

    return (
        <div>
            <HeaderPanel titlePage={'Bids'} />
            <Spin spinning={loading}>
                <div className="panel-main">
                    <PanelSidebar />
                    <div className="panel-body">
                        <div className="panel-container">
                            <div className="modal-header">
                                <div className="container g-0 d-flex justify-content-between">
                                    <div className="main-title">
                                        <h2 className="default titr">
                                            Requests
                                        </h2>
                                    </div>
                                    <Link to="/en/auctions-list">
                                        <button type="button" className="btn-outline-gray">
                                            Return to the auction list
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            {Requests ? Requests.map((item, key) => {
                                return (
                                    <div className="amount-block" key={key}>
                                        <div
                                            className="amount-range">{item?.first_name + " " + item?.last_name}
                                            {item?.is_approve ? <span className="text-success">  <FontAwesomeIcon icon={faCheck} /></span> : <span className="text-danger">  <FontAwesomeIcon icon={faTimes} /></span>}
                                        </div>
                                        <div className="amount-range">
                                            <button type="button" className="btn btn-default" onClick={() => {
                                                // getDetails(item)
                                                console.log(getDetails(item.id))
                                            }}>View Details
                                            </button>
                                        </div>
                                    </div>
                                )
                            }) : ""}

                            <PaginationComponent count={RequestsCount} handeSelectPage={handeSelectPage} />
                        </div>

                    </div>
                </div>
            </Spin>
            <ModalList setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible}/>
        </div>


    );
}

export default AuctionsListRequests;
