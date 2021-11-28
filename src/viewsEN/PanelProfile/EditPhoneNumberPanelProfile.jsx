import React, { useState , useEffect } from 'react'
import { Button, Form, Input, Row, Col, message, Spin } from "antd";
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import {ACCOUNT_APPROVE, EDIT_PROFILE} from "../../utils/constant";


function EditPhoneNumberPanelProfile(props) {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false)
    const [showNumber, setShowNumber] = useState(true)
    const [createField, setCreateField] = useState(null)
    const [number, setNumber] = useState("")
    const {data,getProfile} = props;

    useEffect(()=>{
        if(data.mobile){
            setNumber(data.mobile)
            form.setFieldsValue({mobile:data.mobile})
        }else{
            setNumber(data.email)
        }

    },[data])
    const onFinish = (values) => {

        if (values?.mobile)
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
                    setCreateField(values?.mobile)
                    setShowNumber(false)
                    message.success(" Verification code sent to your mobile")
                }
            })
            .catch(err => {
                setLoading(false)
                console.error(err);
                // message.error("Try again")
            })
    }
    const sendCode = (values) => {
        setLoading(true)
        axios.post(`${BASE_URL}${ACCOUNT_APPROVE}`, {...values, user_name: number, tmp_user_name: createField})
            .then(resp => {
                setLoading(false)
                if (resp.data.data.statusCode === 400) {
                    message.error("Request a validation code again")
                }else{
                    setShowNumber(true)
                    message.success(" Your mobile has been successfully verified")
                    getProfile()

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
                {showNumber ? <Form

                    onFinish={onFinish}
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
                        onFinish={onSub}
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