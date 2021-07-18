import React, { useState,useEffect } from 'react'
import HeaderPanel from '../../components/HeaderPanel';
import PanelSidebar from '../../components/PanelSidebar';
import { Button, Form, Input, Spin, Select,message } from "antd";
import { Link } from 'react-router-dom';
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";


import "antd/dist/antd.css";
function EditReminder() {
    const [loading, setLoading] = useState(false)
    const [form] = Form.useForm();
    const [data,setData]=useState({})
    const [next,setNext]=useState(false)


    const onFinish = (values) => {
        sendData(values)
    }


    useEffect(()=>{
    getData()

    },[])

    const sendData = () => {
        setLoading(true)
        // axios.put(`${BASE_URL}${EDIT_PROFILE}`,values)
        // .then(resp => {
        //     setLoading(false)
        //     if (resp.data.code === 200 && resp.data?.data?.result) {
        //         const res= resp.data?.data?.result;
        //         message.success("پروفایل شما با موفقیت تکمیل شد")
        //         let check= Object.keys(res).some(t=>!res[t]);
        //         setNext(!check)
        //     }
        // })
        // .catch(err => {
        //     setLoading(false)
        //     console.error(err);
        //     message.error("دوباره تلاش کنید")
        // })
    }

    const getData = () => {
        setLoading(true)
        axios.get(`${BASE_URL}/notification/auction-reminders/`)
            .then(resp => {
                setLoading(false)

                if ((resp.data.code === 200) && resp.data?.data?.result) {
                    const res= resp.data?.data?.result;
                    console.log(res);
                    form.setFieldsValue(res)
                    setData(res)
                    // let check= Object.keys(res).some(t=>!res[t]);
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
        <>
            <HeaderPanel titlePage={"یادآوری‌ها"} />
            <div className="panel-main">
                <PanelSidebar />
                <div className="panel-body">
                    <Spin spinning={loading}>
                        <Form onFinish={onFinish}
                            form={form}
                            wrapperCol={{ span: 24 }}>
                            <div className="panel-container" id="reminder-page">
                                <h5 className="default mrgb50">ویرایش یادآوری </h5>
                                <div className="row">
                                    <div class="col-md-4">
                                        <div class="input-group">
                                            <label className="default-lable">نام یادآوری</label>
                                            <Form.Item
                                                className="w-100"
                                                name="reminder-name"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: "تکمیل این فیلد ضروری است",
                                                    }
                                                ]}>
                                                <Input className="default-input"
                                                    placeholder="نام مورد نظر خود را وارد نمایید." />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="input-group">
                                            <label className="default-lable">کلمه کلیدی</label>
                                            <Form.Item
                                                className="w-100"
                                                name="key-word"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: "تکمیل این فیلد ضروری است",
                                                    }
                                                ]}>
                                                <Input className="default-input"
                                                    placeholder="کلمه کلیدی مورد نظر خود را وارد نمایید." />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div className="form-check sm-mrgt35">
                                            <Input className=" form-check-input"
                                                name="accurate-matching"
                                                type="checkbox"
                                                id="checkbox41"
                                            />
                                            <label className="form-check-label" for="checkbox41">
                                                تطبیق دقیق
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="input-group">
                                            <label className="default-lable">کمترین قیمت</label>
                                            <Form.Item
                                                className="w-100"
                                                name="lowest-price"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: "تکمیل این فیلد ضروری است",
                                                    }
                                                ]}>
                                                <Input className="default-input"
                                                    placeholder="کمترین قیمت مورد نظر را وارد نمایید." />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="input-group">
                                            <label className="default-lable">بیشترین قیمت</label>
                                            <Form.Item
                                                className="w-100"
                                                name="highest-price"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: "تکمیل این فیلد ضروری است",
                                                    }
                                                ]}>
                                                <Input className="default-input"
                                                    placeholder="بیشترین قیمت مورد نظر را وارد نمایید." />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div className="form-check sm-mrgt35">
                                            <Input className=" form-check-input"
                                                name="off-reminder"
                                                type="checkbox"
                                                id="checkbox42"
                                            />
                                            <label className="form-check-label" for="checkbox42">
                                                غیرفعال کردن یادآوری
                                            </label>
                                        </div>
                                    </div>
                                    <h5 className="default mrgb20">زمان ارسال</h5>
                                    <div className="col-xxl-8">
                                        <div className="row row-cols-2">
                                            {["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه"].map((item) =>
                                                <div div className="col" >
                                                    <div className="form-check ">
                                                        <Input className="form-check-input" type="checkbox" value=""
                                                            id="checkbox44" />
                                                        <label className="form-check-label" for="" >
                                                            {item}
                                                        </label>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="panel-button-group">
                                        <Link to="/panel-reminders">
                                            <button type="button" className="btn-gray">بازگشت</button>
                                        </Link>
                                        <span className="px-2 d-inline-block" />
                                        <button type="button" className="btn-default">ثبت</button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </Spin>
                </div>
            </div>
        </>
    )
}

export default EditReminder;