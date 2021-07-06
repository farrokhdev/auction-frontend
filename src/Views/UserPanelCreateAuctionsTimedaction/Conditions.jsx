import React, { useState } from "react"
import { Button, Form, Input, Row, Col, message, Spin, Select } from "antd";
import { ConfigProvider } from "antd";
import { DatePicker as DatePickerJalali } from "antd-jalali";
import fa_IR from "antd/lib/locale/fa_IR";
import "antd/dist/antd.css";
const { TextArea } = Input;


function Conditions(props) {
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
                                        name="online-payment"
                                        type="checkbox"
                                        id="checkbox41"
                                    />
                                    <label className="form-check-label" for="checkbox41">
                                        پرداخت آنلاین
                                        <span className="form-check-txt">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</span>
                                    </label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="input-group">
                                    <label className="default-lable">نحوه‌ی پرداخت</label>
                                    <Form.Item
                                        className="w-100"
                                        name="description"
                                        rules={[
                                            {
                                                required: true,
                                                message: "تکمیل این فیلد ضروری است",
                                            }
                                        ]}>


                                        <TextArea rows="3" className="default-input"
                                            placeholder="شرایط پرداخت را وارد نمایید."></TextArea>
                                    </Form.Item>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="input-group">
                                    <label className="default-lable">قوانین بازگشت</label>
                                    <Form.Item
                                        className="w-100"
                                        name="description"
                                        rules={[
                                            {
                                                required: true,
                                                message: "تکمیل این فیلد ضروری است",
                                            }
                                        ]}>


                                        <TextArea rows="3" className="default-input"
                                            placeholder="قوانین بازگشت را وارد نمایید."></TextArea>
                                    </Form.Item>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="input-group">
                                    <label className="default-lable">حمل ونقل</label>
                                    <Form.Item
                                        className="w-100"
                                        name="description"
                                        rules={[
                                            {
                                                required: true,
                                                message: "تکمیل این فیلد ضروری است",
                                            }
                                        ]}>


                                        <TextArea rows="3" className="default-input"
                                            placeholder="نحوه‌ی انتقال اثر را وارد نمایید."></TextArea>
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
                        ثبت نهایی
                    </Button>

                </Form>
            </Spin>
        </>
    )
}

export default Conditions;