import React, { useState } from "react";
import { Button, Form, Input, Spin, Select } from "antd";
import { ConfigProvider } from "antd";
import { DatePicker as DatePickerJalali } from "antd-jalali";
import fa_IR from "antd/lib/locale/fa_IR";
import "antd/dist/antd.css";
// import { Link } from "react-router-dom";
// import ReactDOM from "react-dom";
const { Option } = Select;

function BasicInformation(props) {
    const [loading, setLoading] = useState(false)
    const [form] = Form.useForm();
    const [auction, setAuction] = useState("");
    const [next, setNext] = useState(false);
    const { setSelectComponent, selectComponent } = props;



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
            <Spin spinning={loading}>
                <Form onFinish={onFinish}
                    form={form}
                    wrapperCol={{ span: 24 }}>
                    <div class="col-xxxxl-8">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="input-group">
                                    <Form.Item
                                        className="w-100"
                                        name="auction-type"
                                        rules={[
                                            {
                                                required: true,
                                                message: "تکمیل این فیلد ضروری است",
                                            }
                                        ]}>
                                        <label className="default-lable">نوع حراج</label>
                                        <Select
                                            labelInValue
                                            //  style={{ border: "none" }}
                                            className="w-100"
                                            size="large"
                                            dropdownClassName="text-right"
                                            placeholder="نوع  حراجی را انتخاب کنید"
                                            onChange={value => {
                                                setAuction(value)
                                            }}
                                        >
                                            <Option value="مدت دار">
                                                مدت‌دار
                                            </Option>
                                            <Option value="زنده">
                                                زنده
                                            </Option>
                                            <Option value="آنلاین">
                                                آنلاین
                                            </Option>
                                            <Option value="اولین پیشنهاد">
                                                اولین پیشنهاد
                                            </Option> <Option value="دومین پیشنهاد">
                                                دومین پیشنهاد
                                            </Option>
                                        </Select>
                                    </Form.Item>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="input-group">
                                <label className="default-lable">نام حراج</label>
                                <Form.Item
                                    className="w-100"
                                    name="auction-name"
                                    rules={[
                                        {
                                            required: true,
                                            message: "تکمیل این فیلد ضروری است",
                                        }
                                    ]}>
                                    <Input className="default-input"
                                        placeholder="نام حراج را وارد نمایید." />
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <Form.Item
                                            className="w-100"
                                            name="start-date"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "تکمیل این فیلد ضروری است",
                                                }
                                            ]}>

                                            <ConfigProvider locale={fa_IR} direction="rtl">
                                                <label className="default-lable">تاریخ شروع</label>
                                                <DatePickerJalali className="default-input w-75" />
                                            </ConfigProvider>
                                        </Form.Item>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <Form.Item
                                            className="w-100"
                                            name="end-date"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "تکمیل این فیلد ضروری است",
                                                }
                                            ]}>
                                            <ConfigProvider locale={fa_IR} direction="rtl">
                                                <label className="default-lable">تاریخ پایان</label>
                                                <DatePickerJalali className="default-input w-75" />
                                            </ConfigProvider>
                                        </Form.Item>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="button-group">
                                {/* <Button loading={loading} className="btn-default" htmlType="submit">
                                    ثبت
                                </Button> */}
                                {/* {next ?   */}
                                <Button className="btn-gray" loading={loading} onClick={() => {
                                    setSelectComponent(selectComponent - 1)
                                }}>
                                    بازگشت
                                </Button>
                                <Button className="btn-default" loading={loading} onClick={() => {
                                    setSelectComponent(selectComponent + 1)
                                }}>
                                    ادامه
                                </Button>
                                {/* :""
                               } */}
                                {/* {selectProduct && selectProduct.length >= 1 ?
                                <Button loading={loading} className="btn-default" htmlType="submit" onClick={()=>sendData()}>
                                ادامه
                                </Button> 
                                :''}
                                {next ? <Button className="btn-default " loading={loading} onClick={() => {
                                    setSelectComponent(selectComponent + 1)
                                }}>
                                    ادامه
                                </Button> : ""
                                }
                                <span className="px-2 d-inline-block"/>
                                <Button className="btn-gray" loading={loading} onClick={() => {
                                    setSelectComponent(selectComponent - 1)
                                }}>
                                    لغو
                                </Button> */}
                            </div>
                        </div>
                    </div>
                </Form>
            </Spin>
        </>
    )
}

export default BasicInformation;