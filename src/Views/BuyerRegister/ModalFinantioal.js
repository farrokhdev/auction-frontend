import React, {useEffect, useState} from 'react'
import {Button, Form, Input, Row, Col, message, Spin} from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import {ACCOUNT_BANK_INFO, ACCOUNT_BANK_Edit} from "../../utils/constant"
import {Link} from "react-router-dom";

function ModalFinantioal(props) {
    const {setSelectComponent, selectComponent, edit = 0,setIsModalVisible,refreshTable,next, setNext} = props
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})

    const onFinish = (values) => {
        if(edit)
            editData(values)
            else
        sendData(values)
    }
    useEffect(() => {
        console.log(edit)
        if (edit)
            getData()
        else
            form.resetFields()
        return () => {
            form.resetFields()
        }
    }, [edit])
    const sendData = (values) => {
        setLoading(true)
        axios.post(`${BASE_URL}${ACCOUNT_BANK_INFO}`, values)
            .then(resp => {
                setLoading(false)
                if (resp.data.code === 200 && resp.data?.data?.result) {
                    const res = resp.data?.data?.result;
                    message.success("اطلاعات حساب شما با موفقیت ثبت شد")
                    // let check = Object.keys(res).some(t => !res[t]);
                    // setNext(!check)
                    refreshTable()
                    setIsModalVisible(false)
                }
            })
            .catch(err => {
                setLoading(false)
                console.error(err);
                message.error("دوباره تلاش کنید")
            })
    }
    const editData = (values) => {
        setLoading(true)
        axios.put(`${BASE_URL}${ACCOUNT_BANK_Edit(edit)}`, values)
            .then(resp => {
                setLoading(false)
                if (resp.data.code === 200 && resp.data?.data?.result) {
                    const res = resp.data?.data?.result;
                    message.success("اطلاعات حساب شما با موفقیت ویرایش شد")
                    // let check = Object.keys(res).some(t => !res[t]);
                    // setNext(!check)
                    refreshTable()
                    setIsModalVisible(false)
                }
            })
            .catch(err => {
                setLoading(false)
                console.error(err);
                message.error("دوباره تلاش کنید")
            })
    }
    const getData = () => {
        setLoading(true)
        axios.get(`${BASE_URL}${ACCOUNT_BANK_Edit(edit)}`)
            .then(resp => {
                setLoading(false)

                if ((resp.data.code === 200) && resp.data?.data?.result) {
                    const res = resp.data?.data?.result;
                    form.setFieldsValue(res)
                    setData(res)
                    // let check = Object.keys(res).some(t => !res[t]);
                    // console.log(check)
                    // setNext(!check)
                }
            })
            .catch(err => {
                setLoading(false)
                console.error(err);
                message.error("صفحه را دوباره لود کنید")
            })
    }

    return (
        <Spin spinning={loading}>

            <Form onFinish={onFinish}
                  form={form}
                  wrapperCol={{span: 24}}>

                <div className="">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="input-group w-100">
                                <label className="default-lable">نام بانک</label>
                                <Form.Item
                                    className="w-100"
                                    name="bank_name"
                                    rules={[
                                        {
                                            required: true,
                                            message: "تکمیل این فیلد ضروری است",
                                        }
                                    ]}>
                                    <Input className="default-input"
                                           type="text"
                                           placeholder="نام بانک مورد نظر خود را وارد نمایید."/>
                                </Form.Item>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="input-group">
                                <label className="default-lable">شماره کارت</label>
                                <Form.Item
                                    className="w-100"
                                    name="card_number"
                                    rules={[
                                        {
                                            required: true,
                                            message: "تکمیل این فیلد ضروری است",
                                        },
                                        {
                                            min: 16,
                                            message: "16کاراکتر وارد کنید",
                                        },
                                        {
                                            max: 18,
                                            message: "تعداد کاراکتر بیش از حد مجاز است",
                                        }
                                    ]}>
                                    <Input className="default-input"
                                           type="number"
                                           placeholder="شماره کارت را وارد نمایید"/>
                                </Form.Item>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="input-group">
                                <label className="default-lable">شماره حساب</label>
                                <Form.Item
                                    className="w-100 mb-0"
                                    name="account_number"
                                    rules={[
                                        {
                                            required: true,
                                            message: "تکمیل این فیلد ضروری است",
                                        }
                                        ,
                                        {
                                            min: 10,
                                            message: "10کاراکتر وارد کنید",
                                        },
                                        {
                                            max: 16,
                                            message: "تعداد کاراکتر بیش از حد مجاز است",
                                        }
                                    ]}>
                                    <Input className="default-input"
                                           type="number"
                                           placeholder="شماره حساب را وارد نمایید."/>
                                </Form.Item>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <div className="input-group ">
                                <label className="default-lable">شماره شبا</label>
                                <Form.Item
                                    className="w-100 mb-0"
                                    name="sheba_number"
                                    rules={[
                                        {
                                            required: true,
                                            message: "تکمیل این فیلد ضروری است",
                                        },
                                        {
                                            min: 26,
                                            message: "26کاراکتر وارد کنید",
                                        },
                                        {
                                            max: 28,
                                            message: "تعداد کاراکتر بیش از حد مجاز است",
                                        }
                                    ]}>
                                    <Input className="default-input"
                                           type="text"
                                           placeholder="IR"/>
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 button-group">
                            <Button loading={loading} className="btn-default" htmlType="submit">
                                ثبت
                            </Button>
                            <Button loading={loading} className="btn-default" onClick={()=>form.resetFields()}>
                                حذف اطلاعات
                            </Button>

                        </div>
                    </div>
                </div>
            </Form>

        </Spin>
    )
}

export default ModalFinantioal;
