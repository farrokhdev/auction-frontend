import React, {useEffect, useState} from 'react'
import {Button, Form, Input, message, Spin} from "antd";
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import {ACCOUNT_APPROVE, EDIT_PROFILE} from "../../utils/constant";

function EditEmailPanelProfile(props) {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false)
    const [showNumber, setShowNumber] = useState(true)
    const [number, setNumber] = useState("")
    const [newField, setNewField] = useState(null)
    const {data, getProfile} = props;
    useEffect(() => {
        if (data.email) {
            setNumber(data.email)
            form.setFieldsValue({email: data.email})
        } else {
            setNumber(data.mobile)
        }
    }, [data])

    const onFinish = (values) => {
        if (values?.email)
            // setNumber(values?.email)
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
                if (resp.data.code === 200) {
                    setNewField(values?.email)
                    setShowNumber(false)
                    message.success("کد تایید به ایمیل شما ارسال شد")
                    // console.log(resp.data.data.result.mobile)
                    // setNumber()
                    form.resetFields()
                }
            })
            .catch(err => {
                setLoading(false)
                console.error(err);
                message.error("دوباره تلاش کنید")
            })
    }

    const sendCode = (values) => {
        setLoading(true)
        if (newField)
            axios.post(`${BASE_URL}${ACCOUNT_APPROVE}`, {...values, user_name: number, tmp_user_name: newField})
                .then(resp => {
                    setLoading(false)
                    if (resp.data.code === 200) {
                        setShowNumber(true)
                        message.success(" ایمیل شما با موفقیت تایید شد")
                        getProfile()

                    } else {
                        message.error(resp.data.result)
                    }
                })
                .catch(err => {
                    setLoading(false)
                    message.error("دوباره تلاش کنید")
                })
    }

    return (
        <>
            <Spin spinning={loading}>
                {showNumber ? <Form onFinish={onFinish}
                                    form={form}
                                    wrapperCol={{span: 24}}>
                        <div>
                            <div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="input-group">
                                            <label className="default-lable">ایمیل</label>
                                            <Form.Item
                                                className="w-100"
                                                name="email"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: "تکمیل این فیلد ضروری است",
                                                    }
                                                ]}>
                                                <Input className="default-input"
                                                       type="email"
                                                       placeholder="ایمیل خود را وارد نمایید."/>
                                            </Form.Item>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 button-group">
                                        <Button className="btn-default" htmlType="submit">
                                            دریافت کد
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                    :
                    <Form onFinish={onSub}
                          form={form}
                          wrapperCol={{span: 24}}>
                        <div>
                            <div>
                                <div className="row">
                                    <div className="row ">
                                        <p className="darkgray">


                                            ما یک کد به
                                            <span className="px-2">{newField}</span>
                                            ارسال کردیم ،
                                            برای تأیید آدرس ایمیل خود کد را در زیر وارد کنید.
                                        </p>
                                        <div className="col-md-6">
                                            <div className="input-group ">
                                                <label className="default-lable">کد تایید</label>
                                                <Form.Item
                                                    className="w-100"
                                                    name="verify_code"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: "تکمیل این فیلد ضروری است",
                                                        }
                                                    ]}>
                                                    <Input className="default-input"
                                                           type="text"
                                                           placeholder="کد تایید را اینجا وارد نمایید."/>
                                                </Form.Item>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 button-group">
                                        <Button className="btn-default" htmlType="submit">
                                            تایید
                                        </Button>
                                        <Button className="btn-gray me-2" onClick={() => setShowNumber(true)}>
                                            ویرایش ایمیل
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