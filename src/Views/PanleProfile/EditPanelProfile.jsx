import React, {useEffect, useState} from 'react'
import {Button, Form, Input, Row, Col, message, Spin} from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import {EDIT_PROFILE} from "../../utils/constant"
function EditPanelProfile(props) {
    const [form] = Form.useForm();
    const [loading,setLoading]=useState(false)
    const {data} = props;
    const onFinish = (values) => {
        sendData(values)
    }
    useEffect(()=>{
        form.setFieldsValue(data)
    },[data])



  const sendData = (values) => {
      setLoading(true)
    axios.put(`${BASE_URL}${EDIT_PROFILE}`,values)
        .then(resp => {
            setLoading(false)
          if (resp.data.code === 200) {

              message.success("پروفایل شما با موفقیت ویرایش شد")
          }
        })
        .catch(err => {
            setLoading(false)
          console.error(err);
            message.error("دوباره تلاش کنید")
        })
  }

    // const getData = () => {
    //     setLoading(true)
    //     axios.get(`${BASE_URL}${EDIT_PROFILE}`)
    //         .then(resp => {
    //             setLoading(false)
    //             if ((resp.data.code === 200) && resp.data?.data?.result) {
    //
    //             }
    //         })
    //         .catch(err => {
    //             setLoading(false)
    //             console.error(err);
    //             message.error("صفحه را دوباره لود کنید")
    //         })
    // }
    return (
        <Spin spinning={loading}>
        <Form onFinish={onFinish}
              form={form}
              wrapperCol={{span: 24}}>

            <div className="">
                <div className="row">
                    <div className="col-md-6">
                        <div className="input-group w-100">
                            <label className="default-lable">نام</label>
                            <Form.Item
                                className="w-100"
                                name="first_name"
                                rules={[
                                    {
                                        required: true,
                                        message: "تکمیل این فیلد ضروری است",
                                    }
                                ]}>
                                <Input className="default-input"
                                       placeholder="نام خود را وارد نمایید."/>
                            </Form.Item>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="input-group">
                            <label className="default-lable">نام خانوادگی</label>
                            <Form.Item
                                className="w-100"
                                name="last_name"
                                rules={[
                                    {
                                        required: true,
                                        message: "تکمیل این فیلد ضروری است",
                                    }
                                ]}>
                                <Input className="default-input"
                                       placeholder="نام خانوادگی خود را وارد نمایید."/>
                            </Form.Item>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="input-group">
                            <label className="default-lable">شماره همراه</label>
                            <Form.Item
                                className="w-100"
                                name="mobile">
                                <Input className="default-input"
                                       placeholder="شماره موبایل مورد نظر را وارد نمایید."
                                       disabled/>
                            </Form.Item>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="input-group ">
                            <label className="default-lable">ایمیل</label>
                            <Form.Item
                                className="w-100"
                                name="email">
                                <Input className="default-input"
                                       placeholder="ایمیل خود را وارد نمایید."
                                       disabled/>
                            </Form.Item>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="input-group">
                            <label className="default-lable">کدپستی</label>
                            <Form.Item
                                className="w-100"
                                name="postal_code">
                                <Input className="default-input"
                                       placeholder="کد پستی خود را وارد نمایید."/>
                            </Form.Item>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="input-group">
                            <label className="default-lable">آدرس</label>
                            <Form.Item
                                className="w-100"
                                name="address">
                                <TextArea className="default-input"
                                          placeholder="آدرس خود را وارد نمایید."/>
                            </Form.Item>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 button-group">
                        <Button className="btn-default" htmlType="submit">
                            ثبت
                        </Button>
                    </div>
                </div>
            </div>
        </Form>
        </Spin>
    )
}

export default EditPanelProfile; 