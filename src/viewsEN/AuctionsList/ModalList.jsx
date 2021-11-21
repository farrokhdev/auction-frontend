import React,{useState , useEffect} from 'react'
import { Spin, Modal, Row, Col, message, Button } from "antd";
import { Link } from 'react-router-dom';
import pic1 from '../../imgEN/slider1.jpg'

function ModalList({setIsModalVisible , isModalVisible}) {
    const [loading, setLoading] = useState(false);
    const [Details, setDetails] = useState({
        first_name : 'Ehsan' ,
        last_name : 'mashali',
        product :[{
            id: 1, 
            exact_url : pic1,
            artwork_title :'test'

        }],
        mobile : '09223539068',
        email : 'ehsan@gmail.com',
        wallet : 99500,
        exact_url :pic1
    });
    const [params, setParams] = useState({
        page: 1,
        page_size: 10,
        // sale__id: props.match.params.id
    })

    
    const getRequests = () => {
        // setLoading(true);
    }
    
    useEffect(() => {
         getRequests()
    }, [params])

    return (
        
                <Modal
                title="Request details"
                visible={isModalVisible}
                footer={[
                    <Button type="primary" className="btn btn-default" onClick={() => {
                        setIsModalVisible(false)
                    }}>
                        accept
                    </Button>,
                    <Button danger onClick={() => {
                        setIsModalVisible(false)
                    }}>
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
                    <Col span={12}>{Details?.first_name + " " + Details?.last_name}</Col>
                </Row>
                <Row style={{ marginTop: 10 , marginLeft: 10 }}>
                    <Col span={12}>phone number</Col>
                    <Col span={12}>{Details?.mobile}</Col>
                </Row>
                <Row style={{ marginTop: 10 , marginLeft: 10 }}>
                    <Col span={12}>email</Col>
                    <Col span={12}>{Details?.email}</Col>
                </Row>
                <Row style={{ marginTop: 10 , marginLeft: 10 }}>
                    <Col span={12}>Selected artworks</Col>
                    <Col span={12}>{Details?.product ? Details?.product.map((item, key) => {
                        return (
                            <div key={key}>
                                <Link to={`/artworks/${item.id}`}>
                                    <img width={50} src={item?.exact_url} />
                                    {item.artwork_title}
                                </Link>
                            </div>
                        )
                    }) : ""}</Col>
                </Row>

                <Row style={{ marginTop: 10 , marginLeft: 10 }}>
                    <Col span={12}>Wallet balance</Col>
                    <Col span={12}>{Details?.wallet}</Col>
                </Row>

                <Row style={{ marginTop: 10 , marginLeft: 10 }}>
                    <Col span={12}>Introducer specifications</Col>
                    <Col span={12}>{Details?.first_name + " " + Details?.last_name}</Col>
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