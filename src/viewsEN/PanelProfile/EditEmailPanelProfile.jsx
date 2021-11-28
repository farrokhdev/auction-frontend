import React, { useState, useEffect } from 'react'
import { Button, Form, Input, message, Spin } from 'antd';
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import { ACCOUNT_APPROVE, EDIT_PROFILE } from "../../utils/constant";


function EditEmailPanelProfile(props) {

    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false)
    const [showEmail, setShowEmail] = useState(true)
    const [number, setNumber] = useState("")
    const [newField, setNewField] = useState(null);


    const { data, getProfile } = props;
    useEffect(() => {
        if (data.email) {
            setNumber(data.email)
            form.setFieldsValue({ email: data.email })
        } else {
            setNumber(data.mobile)
        }
    }, [data])

    const onFinish = (values) => {
        if (values?.email)
            sendData(values)
    }

    const onSub = (values) => {
        sendCode(values)
    }

    const sendData = (values) => {
        setLoading(true)
        axios.put(`${BASE_URL}${EDIT_PROFILE}`, values)
            .then(resp => {
                setLoading(false)
                if (resp.data.data.statusCode === 400) {
                    message.error("Try again")
                } else {
                    setNewField(values?.email)
                    setShowEmail(false)
                    message.success("A verification code was sent to your email")
                    form.resetFields()
                }
            })
            .catch(err => {
                setLoading(false)
                console.error(err);
                message.error("A user has been registered with this email")
            })
    }

    const sendCode = (values) => {
        setLoading(true)
        if (newField)
            axios.post(`${BASE_URL}${ACCOUNT_APPROVE}`, { ...values, user_name: number, tmp_user_name: newField })
                .then(resp => {
                    setLoading(false)
                    if (resp.data.data.statusCode === 400) {
                        message.error("Request a validation code again")
                    } else {
                        setShowEmail(true)
                        message.success("Your email was successfully verified")
                        getProfile()

                        // } else {
                        //     message.error(resp.data.result)
                    }
                })
                .catch(err => {
                    setLoading(false)
                    console.error(err);
                    // message.error("Try again")
                })
    }

    return (
        <>
            <Spin spinning={loading}>
                {showEmail ?
                    <Form
                        onFinish={onFinish}
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
                        onFinish={onSub}
                        form={form}
                        wrapperCol={{ span: 24 }}>
                        <div>
                            <div>
                                <div className="row">
                                    <div className="row ">
                                        <p className="darkgray">
                                            We have a code to
                                            <span className="px-2">{newField}</span>
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