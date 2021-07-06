import React, { useState } from "react"
import { Button, Form, Input, Row, Col, message, Spin, Select } from "antd";
import { ConfigProvider } from "antd";
import { DatePicker as DatePickerJalali } from "antd-jalali";
import fa_IR from "antd/lib/locale/fa_IR";
import "antd/dist/antd.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const { TextArea } = Input;


function BuyerValidation(props) {
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
                                        name="validation-art gallery"
                                        type="checkbox"
                                        id="checkbox41"
                                    />
                                    <label className="form-check-label" for="checkbox41">
                                        اعتبارسنجی توسط گالری آرتیبیشن
                                        <span className="form-check-txt">اگر می خواهید سایت مسئول مراحل احراز هویت باشد ، این گزینه را فعال کنید</span>
                                    </label>
                                </div>
                            </div>
                            <div class="col-12">
                                <div className="form-check sm-mrgt35">
                                    <Input className=" form-check-input"
                                        name="sending-invitation"
                                        type="checkbox"
                                        id="checkbox42"
                                    />
                                    <label className="form-check-label" for="checkbox42">
                                        ارسال دعوتنامه
                                        <span className="form-check-txt">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد</span>
                                    </label>
                                </div>
                                <button type="button" className="btn-outline-pink">آپلود لیست</button>
                            </div>
                            <div class="col-12">
                                <div className="form-check sm-mrgt35">
                                    <Input className=" form-check-input"
                                        name="increase-credit"
                                        type="checkbox"
                                        id="checkbox43"
                                    />
                                    <label className="form-check-label" for="checkbox43">
                                        افزایش اعتبار
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col">
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


                                                <Input className=" default-input"
                                                    placeholder="کمترین قیمت مورد نظر را وارد نمایید."
                                                />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="col">
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


                                                <Input className=" default-input"
                                                    placeholder="بیشترین قیمت را وارد نمایید."
                                                />
                                            </Form.Item>
                                        </div>
                                    </div>
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


                                        <Input className=" default-input"
                                            placeholder="واحد افزایش را انتخاب نمایید."
                                        />
                                    </Form.Item>
                                    <span className="unit">تومان</span>
                                </div>
                            </div>
                        </div>
                        <button type="button" className="add-row">
                            <FontAwesomeIcon icon={faPlus} /> افزودن رکورد جدید
                        </button>
                        <div className="col-12">
                            <div className="form-check sm-mrgt35">
                                <Input className=" form-check-input"
                                    name="increase-credit"
                                    type="checkbox"
                                    id="checkbox53"
                                />
                                <label className="form-check-label" for="checkbox53">
                                    توصیه‌نامه
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-check sm-mrgt35">
                                <Input className=" form-check-input"
                                    name="increase-credit"
                                    type="checkbox"
                                    id="checkbox63"
                                />
                                <label className="form-check-label" for="checkbox63">
                                    خریداران قبلی
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-check sm-mrgt35">
                                <Input className=" form-check-input"
                                    name="increase-credit"
                                    type="checkbox"
                                    id="checkbox44"
                                />
                                <label className="form-check-label" for="checkbox44">
                                    سایر
                                    <span className="form-check-txt">اگر می خواهید سایت مسئول مراحل احراز هویت باشد ، این گزینه را فعال کنید</span>
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="input-group">
                                <label className="default-lable">توضیحات</label>
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
                                        placeholder="توضیحات را وارد نمایید."></TextArea>
                                </Form.Item>
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

export default BuyerValidation;