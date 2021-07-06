import React, { useState } from 'react'
import { Button, Form, Input, Spin, Select } from "antd";
const { Option } = Select;

function OfferRange(props) {
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
                            <div className="col-md-6">
                                <div className="input-group">
                                    <Form.Item
                                        className="w-100"
                                        name="currency"
                                        rules={[
                                            {
                                                required: true,
                                                message: "تکمیل این فیلد ضروری است",
                                            }
                                        ]}>

                                        <label className="default-lable">واحد پول</label>
                                        <Select
                                            labelInValue
                                            //  style={{ border: "none" }}
                                            className="w-100"
                                            size="large"
                                            dropdownClassName="text-right"
                                            size="large"
                                            dropdownClassName="text-right"
                                            placeholder="واحد پول را انتخاب کنید"
                                            onChange={value => {
                                                setAuction(value)
                                            }}
                                        >
                                            <Option value="تومان">
                                                تومان
                                            </Option>
                                            <Option value="تومان">
                                                تومان
                                            </Option>
                                            <Option value="تومان">
                                                تومان
                                            </Option>
                                            <Option value="تومان">
                                                تومان
                                            </Option> <Option value="تومان">
                                                تومان
                                            </Option>
                                        </Select>
                                    </Form.Item>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div class="col-md-12">
                                <div class="row">
                                    <div className="col-md-3">
                                        <div className="input-group">
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
                                                    placeholder="
                                                    کمترین قیمت را وارد نمایید." />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="input-group">
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
                                                    placeholder="
                                                بیشترین قیمت را وارد نمایید." />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-group">
                                            <label className="default-lable">واحد افزایش</label>
                                            <Form.Item
                                                className="w-100"
                                                name="unit-increase"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: "تکمیل این فیلد ضروری است",
                                                    }
                                                ]}>
                                                <Input className="default-input "
                                                    placeholder="
                                                    واحد افزایش را انتخاب نمایید." />
                                            </Form.Item>
                                            <span className="unit">تومان</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-check sm-mrgt35">
                                            <Input className="form-check-input" type="checkbox" value=""
                                                id="checkbox41" />
                                            <label className="form-check-label text-muted" for="checkbox41">
                                                تمدید حراج
                                                <span className="form-check-txt">اگر می خواهید سایت مسئول مراحل احراز هویت باشد ، این گزینه را فعال کنید</span>
                                            </label>
                                        </div>
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

                    </div>
                </Form>
            </Spin>
        </>
    )
}

export default OfferRange;