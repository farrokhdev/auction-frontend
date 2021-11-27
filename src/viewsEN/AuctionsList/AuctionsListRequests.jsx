import React, {useState , useEffect } from "react"
import HeaderPanel from "../../componentsEN/HeaderPanel";
import PanelSidebar from "../../componentsEN/PanelSideBar";
import { Link } from "react-router-dom";
import { Spin} from "antd";
import { faTimes, faEdit, faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PaginationComponent from "../../components/PaginationComponent";
import ModalList from "./ModalList";
import queryString from "query-string";
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";


function AuctionsListRequests(props) {
    const [RequestsCount, setRequestsCount] = useState(0);
    const [Details, setDetails] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [Requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const [params, setParams] = useState({
        page: 1,
        page_size: 10,
        sale__id: props.match.params.id
    })


    const getRequests = () => {
        setLoading(true);
        const queries = queryString.stringify(params);
        axios.get(`${BASE_URL}/sale/join-auction/?${queries}`)
            .then(resp => {
                if (resp.data.code === 200) {
                    setLoading(false)
                    setRequests(resp.data.data.result)
                    setRequestsCount(resp.data.data.count)
                }

            })
            .catch(err => {
                setLoading(false)
                console.error(err);
            })
    }

    const getDetails = (pid) => {
        setLoading(true)
        axios.get(`${BASE_URL}/sale/join-auction/${pid}/`)
            .then(resp => {
                console.log(resp)
                if (resp.data.code === 200) {
                    setLoading(false)
                    setDetails(resp.data.data.result)
                    setIsModalVisible(true);
                }

            })
            .catch(err => {
                setLoading(false)
                console.error(err);
            })
    }

    useEffect(() => {
        getRequests()
    }, [params])


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
                            {Requests?.length ? Requests?.map((item, key) => {
                                // console.log("Requests===>>" ,item?.is_approve)
                                return (
                                    <div className="amount-block" key={key}>
                                        <div
                                            className="amount-range">{item?.applicant?.first_name_en + " " + item?.applicant?.last_name_en}
                                            {item?.is_approve ? 
                                            <span className="text-success">  <FontAwesomeIcon icon={faCheck} /></span> : 
                                            <span className="text-danger">  <FontAwesomeIcon icon={faTimes} /></span>}
                                        </div>
                                        <div className="amount-range">
                                            <button type="button" className="btn btn-default" onClick={() => {
                                                getDetails(item?.id)
                                                // console.log(getDetails(item?.id))
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
            <ModalList setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible} Details={Details} getRequests={getRequests}/>
        </div>


    );
}

export default AuctionsListRequests;
