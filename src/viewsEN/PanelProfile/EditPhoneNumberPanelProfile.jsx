import React, { useState } from 'react'
import { Button, Form, Input, Row, Col, message, Spin } from "antd";


function EditPhoneNumberPanelProfile() {
    const [form] = Form.useForm();
    const [showNumber, setShowNumber] = useState(true)
    const [loading, setLoading] = useState(false)
    const [createField, setCreateField] = useState(null)


    return (
        <>
            <Spin spinning={loading}>
                {showNumber ? <Form
                    // onFinish={onFinish}
                    form={form}
                    wrapperCol={{ span: 24 }}>
                    <div>
                        <div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <label className="default-lable">Phone number</label>
                                        <Form.Item
                                            className="w-100"
                                            name="mobile"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "This field is required",
                                                },
                                                {
                                                    min: 11,
                                                    message: "11 characters required",
                                                }
                                            ]}>
                                            <Input className="default-input"
                                                type="tel"
                                                placeholder="Enter your mobile." />
                                        </Form.Item>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 button-group">
                                    <Button className="btn-default" htmlType="submit">
                                        Get code
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
                    :
                    <Form
                        // onFinish={onSub}
                        form={form}
                        wrapperCol={{ span: 24 }}>
                        <div>
                            <div>
                                <div className="row">
                                    <div className="row ">

                                        <p className="darkgray">
                                            We have a code to
                                            <span className="px-2">{createField}</span>
                                            We sent, for confirmation
                                            Enter your phone number, code below.
                                        </p>
                                        <div className="col-md-6">
                                            <div className="input-group ">
                                                <label className="default-lable">Verification code</label>
                                                <Form.Item
                                                    className="w-100"
                                                    name="verify_code"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: "This field is required",
                                                        }
                                                    ]}>
                                                    <Input className="default-input"
                                                        type="text"
                                                        placeholder="Enter Verification code here..." />
                                                </Form.Item>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 button-group">
                                        <Button className="btn-default" htmlType="submit">
                                            Submit
                                        </Button>
                                        <Button className="btn-gray me-2" onClick={() => setShowNumber(true)}>
                                            Edit mobile
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                }
            </Spin>
        </>
    )
}

export default EditPhoneNumberPanelProfile;