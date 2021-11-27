import React, {useEffect, useState} from "react"
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import HeaderPanel from "../../components/HeaderPanel";
import PanelSidebar from "../../components/PanelSidebar";
import {Link} from "react-router-dom";
import {Spin, Modal, Row, Col, message, Button} from "antd";
import {faTimes, faEdit, faPlus, faCheck} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PaginationComponent from "../../components/PaginationComponent";
import queryString from "query-string";

function AuctionsRequests(props) {
    const [RequestsCount, setRequestsCount] = useState(0);
    const [Requests, setRequests] = useState("");
    const [Details, setDetails] = useState("");
    const [loading, setLoading] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [params, setParams] = useState({
        page : 1 , 
        page_size : 10 , 
        sale__id : props?.match?.params?.id
    })

// console.log("params=" , params)
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
        axios.get(`${BASE_URL}/sale/join-auction/${pid}`)
            .then(resp => {
                // console.log(resp)
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
            <HeaderPanel titlePage={"پیشنهادات"}/>
            <Spin spinning={loading}>
                <div className="panel-main">
                    <PanelSidebar/>
                    {/**Main**/}
                    <div className="panel-body">
                        <div className="panel-container">
                            <div className="modal-header">
                                <div className="container g-0 d-flex justify-content-between">
                                    <div className="main-title">
                                        <h2 className="default titr">
                                            درخواست‌های
                                        </h2>
                                    </div>
                                    <Link to="/auctions-list">
                                        <button type="button" className="btn-outline-gray">
                                            بازگشت به لیست حراجی ها
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            {Requests ? Requests.map((item, key) => {
                                return (
                                    <div className="amount-block" key={key}>
                                        <div
                                            className="amount-range">{item?.applicant?.first_name + " " + item?.applicant?.last_name }
                                            {item?.is_approve  ? <span className="text-success">  <FontAwesomeIcon icon={faCheck}/></span> : <span className="text-danger">  <FontAwesomeIcon icon={faTimes}/></span>}
                                        </div>
                                        <div className="amount-range">
                                            <button type="button" className="btn btn-default" onClick={() => {
                                                getDetails(item?.id)
                                            }}>مشاهده جزئیات
                                            </button>
                                        </div>
                                    </div>
                                )
                            }) : ""}

                            <PaginationComponent count={RequestsCount} handeSelectPage={handeSelectPage} />
                        </div>

                    </div>
                </div>
                {/**Main**/}

            </Spin>
            <Modal
                title="جزئیات درخواست"
                visible={isModalVisible}
            //     onOk={() => {
            //     setLoading(true)
            //     let payload = {
            //         "is_approve": true
            //     }
            //     axios.patch(`${BASE_URL}/sale/join-auction/${Details.id}/`, payload).then(res => {
            //         console.log(res.data);
            //         setLoading(false)
            //         getRequests()
            //         setIsModalVisible(false);
            //         message.success("کاربر تایید شد")
            //
            //     }).catch(err => {
            //         setLoading(false)
            //         setIsModalVisible(false);
            //         message.error("با خطا مواجه شدید")
            //         console.log(err);
            //     })
            //
            // }}
            //     onCancel={() => {
            //         setLoading(true)
            //         let payload = {
            //             "is_approve": false
            //         }
            //         axios.patch(`${BASE_URL}/sale/join-auction/${Details.id}/`, payload).then(res => {
            //             console.log(res.data);
            //             setLoading(false)
            //             message.success("کاربر رد شد")
            //             getRequests()
            //             setIsModalVisible(false);
            //
            //         }).catch(err => {
            //             console.log(err);
            //             setLoading(false)
            //             setIsModalVisible(false);
            //             message.error("با خطا مواجه شدید")
            //
            //         })
            //
            //     }}
                footer={[
                    <Button type="primary" className="btn btn-default" onClick={()=>{
                        setLoading(true)
                        let payload = {
                            "is_approve": true
                        }
                        axios.patch(`${BASE_URL}/sale/join-auction/${Details?.id}/`, payload).then(res => {
                            // console.log(res.data);
                            setLoading(false)
                            getRequests()
                            setIsModalVisible(false);
                            message.success("کاربر تایید شد")

                        }).catch(err => {
                            setLoading(false)
                            setIsModalVisible(false);
                            message.error("با خطا مواجه شدید")
                            console.log(err);
                        })
                    }}>
                        تایید
                    </Button> ,
                    <Button danger  onClick={()=>{
                        setLoading(true)
                        let payload = {
                            "is_approve": false
                        }
                        axios.patch(`${BASE_URL}/sale/join-auction/${Details?.id}/`, payload).then(res => {
                            // console.log(res.data);
                            setLoading(false)
                            message.success("کاربر رد شد")
                            getRequests()
                            setIsModalVisible(false);

                        }).catch(err => {
                            console.log(err);
                            setLoading(false)
                            setIsModalVisible(false);
                            message.error("با خطا مواجه شدید")

                        })
                    }}>
                        رد
                    </Button>
                    ,
                    <Button type="button" onClick={()=> setIsModalVisible(false)}>
                        بستن
                    </Button>
                ]}
                okText="تایید"
                cancelText="رد"
                okButtonProps={{className: "btn btn-default",loading:loading}}
                cancelButtonProps={{className: "btn-outline-gray",loading:loading}}

            >

                <Row style={{marginTop: 10}}>
                    <Col span={12}>نام و نام خانوادگی</Col>
                    <Col span={12}>{Details?.applicant?.first_name + " " + Details?.applicant?.last_name}</Col>
                </Row>
                <Row style={{marginTop: 10}}>
                    <Col span={12}>تلفن همراه</Col>
                    <Col span={12}>{Details?.applicant?.mobile}</Col>
                </Row>
                <Row style={{marginTop: 10}}>
                    <Col span={12}>ایمیل</Col>
                    <Col span={12}>{Details?.applicant?.email}</Col>
                </Row>
                <Row style={{marginTop: 10}}>
                    <Col span={12}>آثار انتخاب شده</Col>
                    <Col span={12}>{Details?.product ? Details?.product.map((item, key) => {
                        return (
                            <div key={key}>
                                <Link to={`/artworks/${item.id}`}>
                                    <img width={50} src={item?.media?.exact_url}/>
                                    {item.artwork_title}
                                </Link>
                            </div>
                        )
                    }) : ""}</Col>
                </Row>

                <Row style={{marginTop: 10}}>
                    <Col span={12}>موجودی کیف پول</Col>
                    <Col span={12}>{Details?.wallet?.inventory}</Col>
                </Row>

                <Row style={{marginTop: 10}}>
                    <Col span={12}>مشخصات معرف</Col>
                    <Col span={12}>{Details?.recommender?.first_name + " " + Details?.recommender?.last_name}</Col>
                </Row>
                {Details?.medias ?
                    <Row style={{marginTop: 10}}>
                        <Col span={12}>فایل قرارداد</Col>
                        <Col span={12}>
                            <a href={Details?.medias ? Details?.medias[0]?.exact_url : ""}>
                                دانلود
                            </a>

                        </Col>
                    </Row>
                    : ""}
            </Modal>

        </div>


    );
}

export default AuctionsRequests;
