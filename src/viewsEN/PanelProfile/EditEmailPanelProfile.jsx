import React, { useState } from 'react'
import { Button, Form, Input, message, Spin } from 'antd';


function EditEmailPanelProfile() {
    const [form] = Form.useForm();
    const [showEmail, setShowEmail] = useState(true)
    const [loading, setLoading] = useState(false)
    const [createField, setCreateField] = useState(null)

    return (
        <>
            <Spin spinning={loading}>
                {showEmail ? <Form
                    // onFinish={onFinish}
                    form={form}
                    wrapperCol={{ span: 24 }}>
                    <div>
                        <div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <label className="default-lable">Email</label>
                                        <Form.Item
                                            className="w-100"
                                            name="email"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "This field is required",
                                                }
                                            ]}>
                                            <Input className="default-input"
                                                type="email"
                                                placeholder="Enter your email." />
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
                                            Enter your email address, code below.
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
                                        <Button className="btn-gray me-2" onClick={() => setShowEmail(true)}>
                                            Edit email
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

export default EditEmailPanelProfile;