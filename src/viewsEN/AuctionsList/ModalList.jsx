import React,{useState , useEffect} from 'react'
import { Spin, Modal, Row, Col, message, Button } from "antd";
import { Link } from 'react-router-dom';
import queryString from "query-string";
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";

import pic1 from '../../imgEN/slider1.jpg'

function ModalList({setIsModalVisible , isModalVisible , Details ,getRequests}) {
    const [loading, setLoading] = useState(false);
  

    const handleAcceptRequest = ()=>{
        setIsModalVisible(false)
        let payload = {
            "is_approve": true
        }
        axios.patch(`${BASE_URL}/sale/join-auction/${Details?.id}/`, payload).then(res => {
            console.log(res.data);
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
    }

    const handleRejectRequest = ()=>{
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
    }
    useEffect(() => {
        getRequests()
    }, [])
    console.log("is_approve==>" , Details?.is_approve)

    return (
        
                <Modal
                title="Request details"
                visible={isModalVisible}
                footer={[
                    <Button type="primary" className="btn btn-default" onClick={handleAcceptRequest}>
                        accept
                    </Button>,
                    <Button danger onClick={handleRejectRequest}>
                        reject
                    </Button>
                    ,
                    <Button type="button" onClick={() => setIsModalVisible(false)}>
                        close
                    </Button>
                ]}
                okText="تایید"
                cancelText="رد"
                okButtonProps={{ className: "btn btn-default", loading: loading }}
                cancelButtonProps={{ className: "btn-outline-gray", loading: loading }}

            >

                <Row style={{ marginTop: 10 , marginLeft: 10 }}>
                    <Col span={12}>first name and last name</Col>
                    <Col span={12}>{Details?.applicant?.first_name_en + " " + Details?.applicant?.last_name_en}</Col>
                </Row>
                <Row style={{ marginTop: 10 , marginLeft: 10 }}>
                    <Col span={12}>phone number</Col>
                    <Col span={12}>{Details?.applicant?.mobile}</Col>
                </Row>
                 <Row style={{ marginTop: 10 , marginLeft: 10 }}>
                    <Col span={12}>email</Col>
                    <Col span={12}>{Details?.applicant?.email}</Col>
                </Row>
                <Row style={{ marginTop: 10 , marginLeft: 10 }}>
                    <Col span={12}>Selected artworks</Col>
                    <Col span={12}>{Details?.product ? Details?.product?.map((item, key) => {
                        return (
                            <div key={key}>
                                <Link to={`/artworks/${item.id}`}>
                                    <img width={50} src={item?.exact_url} />
                                    {item.artwork_title_en}
                                </Link>
                            </div>
                        )
                    }) : ""}</Col>
                </Row>

                <Row style={{ marginTop: 10 , marginLeft: 10 }}>
                    <Col span={12}>Wallet balance</Col>
                    <Col span={12}>{Details?.wallet?.inventory}</Col>
                </Row>

                <Row style={{ marginTop: 10 , marginLeft: 10 }}>
                    <Col span={12}>Introducer specifications</Col>
                    <Col span={12}>{Details?.applicant?.first_name_en + " " + Details?.applicant?.last_name_en}</Col>
                </Row>
                {Details?.exact_url ?
                    <Row style={{ marginTop: 10 , marginLeft: 10 }}>
                        <Col span={12}>Contract file</Col>
                        <Col span={12}>
                            <Link to={Details ? Details?.exact_url : ""}>
                                download
                            </Link>

                        </Col>
                    </Row>
                    : ""} 
            </Modal>
    )
}

export default ModalList;