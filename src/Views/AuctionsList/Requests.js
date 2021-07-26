import React, {useEffect, useState} from "react"
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import HeaderPanel from "../../components/HeaderPanel";
import PanelSidebar from "../../components/PanelSidebar";
import {Link} from "react-router-dom";
import {Spin, Modal, Row, Col} from "antd";

function AuctionsRequests(props) {
    const [RequestsCount, setRequestsCount] = useState(0);
    const [Requests, setRequests] = useState("");
    const [Details, setDetails] = useState("");
    const [loading, setLoading] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const getBids = () => {
        setLoading(true)
        axios.get(`${BASE_URL}/sale/join-auction?sale__id=${props.match.params.id}`)
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
        getBids()

    }, [])


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
                                            className="amount-range">{item?.applicant?.first_name + " " + item?.applicant?.last_name}</div>
                                        <div className="amount-range">
                                            <button type="button" className="btn btn-default" onClick={() => {
                                                getDetails(item?.id)
                                            }}>مشاهده جزئیات
                                            </button>
                                        </div>
                                    </div>
                                )
                            }) : ""}
                        </div>
                    </div>
                </div>
                {/**Main**/}
            </Spin>

            <Modal
                title="جزئیات درخواست"
                visible={isModalVisible} onOk={() => {
                setIsModalVisible(false);
            }}
                onCancel={() => {
                    setIsModalVisible(false);
                }}
                okText="تایید"
                cancelText="رد"
                okButtonProps={{className: "btn btn-default"}}
                cancelButtonProps={{className: "btn-outline-gray"}}
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
