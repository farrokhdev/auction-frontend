import React, { useState } from "react"
import { Button, Form, Input, Row, Col, message, Spin, Select } from "antd";
import { ConfigProvider } from "antd";
import { DatePicker as DatePickerJalali } from "antd-jalali";
import fa_IR from "antd/lib/locale/fa_IR";
import "antd/dist/antd.css";


function Currency(props) {
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
                    <div className="col-xxxxl-8">
                        <div className="row">
                            <div className="col-12">
                                <div className="form-check sm-mrgt35">
                                    <Input className=" form-check-input"
                                        name="currency-exchange"
                                        type="checkbox"
                                        id="checkbox41"
                                    />
                                    <label className="form-check-label" for="checkbox41">
                                        نرخ تبدیل ارز روزانه
                                    </label>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="input-group">
                                    <label class="default-lable">نرخ تبدیل  از ریال به دلار</label>
                                    <Form.Item
                                        className="w-100"
                                        name="convert-rials-to-dollars"
                                        rules={[
                                            {
                                                required: true,
                                                message: "تکمیل این فیلد ضروری است",
                                            }
                                        ]}>


                                        <Input className=" default-input"
                                            placeholder="نرخ تبدیل را وارد نمایید."
                                        />
                                    </Form.Item>
                                </div>
                            </div>
                        </div>
                    </div>
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

                </Form>
            </Spin>
        </>
    )
}

export default Currency;