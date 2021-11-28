import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Row, Col, message, Spin } from "antd";
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import {TRANSACTION, ACCOUNT_BANK_Edit} from "../../utils/constant"

function ModalWallet(props) {
    const {setIsModalVisible,refreshTable} = props
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})


    const onFinish = (values) => {
            sendData(values)
    }
    useEffect(() => {
            form.resetFields()
    }, [])

    const sendData = (values) => {
        setLoading(true)
        axios.post(`${BASE_URL}${TRANSACTION}`, {amount:Number(values.amount),"transaction_type":"increase"})
            .then(resp => {
                setLoading(false)
                if (resp.data.code === 201 && resp.data?.data?.result) {
                    message.success("Inventory increase was successful")
                    refreshTable()
                    setIsModalVisible(false)
                }
            })
            .catch(err => {
                setLoading(false)
                console.error(err);
                message.error("Try again")
            })
    }




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

