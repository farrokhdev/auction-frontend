import React, { useState } from 'react'
import HeaderPanel from '../../components/HeaderPanel';
import PanelSidebar from '../../components/PanelSidebar';
import { Button, Form, Input, Spin, Select } from "antd";

// import { ConfigProvider } from "antd";
// import { DatePicker as DatePickerJalali } from "antd-jalali";
// import fa_IR from "antd/lib/locale/fa_IR";
import "antd/dist/antd.css";

function CreateReminder() {
    const [loading, setLoading] = useState(false)
    const [form] = Form.useForm();
    // const { setSelectComponent, selectComponent } = props;

    const onFinish = (values) => {
        sendData(values)
    }
    // useEffect(()=>{
    // getData()

    // },[])

    const sendData = () => {
        setLoading(true)
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
                                <h5 className="default mrgb50">ایجاد یادآوری جدید</h5>
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
                                        <button type="button" className="btn-gray">بازگشت</button>
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

export default CreateReminder;