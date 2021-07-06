import React, { useState } from 'react'
import { Button, Form, Input, Row, Col, message, Spin, Select } from "antd";
import { ConfigProvider } from "antd";
import { DatePicker as DatePickerJalali } from "antd-jalali";
import fa_IR from "antd/lib/locale/fa_IR";
import "antd/dist/antd.css";

function AuctionDate(props) {
    const [loading, setLoading] = useState(false)
    const [form] = Form.useForm();
    const { setSelectComponent, selectComponent } = props;

    const ChangeHandler = () => {

    }

    return (
        <>
            <Spin spinning={loading}>
                <Form onFinish={ChangeHandler}
                    form={form}
                    wrapperCol={{ span: 24 }}>
                    <div class="col-xxxxl-8">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="input-group">
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
                                            <label class="default-lable">تاریخ شروع</label>
                                            <DatePickerJalali className="default-input w-75" />
                                        </ConfigProvider>
                                    </Form.Item>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="input-group">
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
                                            <label class="default-lable">تاریخ شروع</label>
                                            <DatePickerJalali className="default-input w-75" />
                                        </ConfigProvider>
                                    </Form.Item>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Button loading={loading} className="btn-default" htmlType="submit">
                        ثبت
                    </Button> */}
                    {/* {next ?   */}
                    <Button className="btn-gray" loading={loading} onClick={() => {
                        setSelectComponent(selectComponent - 1)
                    }}>
                        بازگشت
                    </Button>
                    <span className="px-2 d-inline-block" />
                    <Button className="btn-default" loading={loading} onClick={() => {
                        setSelectComponent(selectComponent + 1)
                    }}>
                        ادامه
                    </Button>

                    {/* :"" */}
                </Form>
            </Spin>
        </>
    )
}

export default AuctionDate;