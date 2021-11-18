import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Row, Col, message, Spin } from "antd";

function ModalWallet(props) {
    const { setIsModalVisible, refreshTable } = props
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})


    const onFinish = (values) => {

    }
    useEffect(() => {
        form.resetFields()
    }, [])


    return (
        <Spin spinning={loading}>

            <Form onFinish={onFinish}
                form={form}
                wrapperCol={{ span: 24 }}>

                <div className="">
                    <div className="row">

                        <div className="col-md-6">
                            <div className="input-group">
                                <label className="default-lable w-25 ms-0 pe-5"> Amount</label>
                                <Form.Item
                                    className="w-100"
                                    name="amount"
                                    rules={[
                                        {
                                            required: true,
                                            message: "This field is required",
                                        },
                                        {
                                            min: 3,
                                            message: "Enter 16 characters",
                                        },
                                        {
                                            max: 11,
                                            message: "Too many characters allowed",
                                        }
                                    ]}>
                                    <Input className="default-input"
                                        type="number"
                                        placeholder=" Enter the amount" />
                                </Form.Item>

                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-12 button-group">
                            <Button loading={loading} className="btn-default" htmlType="submit">
                                Confirmation
                            </Button>
                            <Button loading={loading} className="btn-default" onClick={() => form.resetFields()}>
                                Delete information
                            </Button>

                        </div>
                    </div>
                </div>
            </Form>

        </Spin>
    )
}

export default ModalWallet;

