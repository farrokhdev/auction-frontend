import React, {useEffect, useState} from 'react';
import {Button, Form, Input, Select, Spin} from "antd";
import DatePicker from 'react-datepicker2';
import {Link} from "react-router-dom";
import moment from 'moment-jalaali'

const listAuctionType = [
    {name: "SECOND_HIDDEN", value: "دومین قیمت پیشنهاد با حراج (مخفی)"},
    {name: "HIDDEN", value: "قیمت پیشنهاد با حراج (مخفی)"},
    {name: "PERIODIC", value: "حراج زمان دار"},
    {name: "ONLINE", value: "آنلاین"},
    {name: "LIVE", value: "زنده"},

]

const BaseInformation = (props) => {

    const {selectComponent, setSelectComponent, finalData, setFinalData} = props
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})
    const [type, setType] = useState("")
    const [today, setToday] = useState(data?.start_time || moment())

    useEffect(() => {
        let listDate={}
        finalData?.start_time && (listDate["start_time"]=moment(finalData?.start_time))
        finalData?.end_time && (listDate["end_time"]=moment(finalData?.end_time))
        finalData?.type && (setType(finalData?.type))
        form.setFieldsValue({...finalData,...listDate})
    }, [finalData])

    const onFinish = (values) => {
        console.log(values)
        setFinalData({...finalData, ...values})
        setSelectComponent(selectComponent + 1)
    }

    return (
        <>
        <Form onFinish={onFinish}
              form={form}
              wrapperCol={{span: 24}}>
            <div className="row">
                <div className="col-xxxxl-8">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="input-group">
                                <label className="default-lable">نوع حراج</label>
                                <Form.Item
                                    className="w-100"
                                    name="type"
                                    rules={[
                                        {
                                            required: true,
                                            message: "تکمیل این فیلد ضروری است",
                                        },
                                    ]}>
                                    <Select
                                        className="search-input w-100 fs-6"
                                        size="large"
                                        dropdownClassName="text-right"
                                        placeholder="نوع  حراجی را انتخاب کنید"
                                        onChange={value => {
                                            setType(value)
                                        }}
                                    >
                                        {
                                            listAuctionType.map((item, index) => (
                                                <Select.Option value={item.name}
                                                               key={index}>{item.value}</Select.Option>
                                            ))
                                        }
                                    </Select>
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="input-group">
                                <label className="default-lable">نام حراج</label>
                                <Form.Item
                                    className="w-100"
                                    name="title"
                                    rules={[
                                        {
                                            required: true,
                                            message: "تکمیل این فیلد ضروری است",
                                        },
                                    ]}>
                                    <input type="text" className="default-input"
                                           placeholder="نام حراج را وارد نمایید."/>
                                </Form.Item>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="input-group">
                                <label className="default-lable"> متن جزییات</label>
                                <Form.Item
                                    className="w-100"
                                    name="details"
                                    rules={[
                                        {
                                            max: 500,
                                            message: "حداکثر 500کاراکتر",
                                        },
                                    ]}>
                                    <textarea className="default-input" placeholder="جزییات حراج را وارد نمایید."/>
                                </Form.Item>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="input-group">
                                <label className="default-lable"> آدرس</label>
                                <Form.Item
                                    className="w-100"
                                    name="address"
                                    rules={[
                                        {
                                            max: 500,
                                            message: "حداکثر 500کاراکتر",
                                        },
                                    ]}>
                                    <textarea className="default-input" placeholder="آدرس حراج را وارد نمایید."/>
                                </Form.Item>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <label className="default-lable">تاریخ شروع</label>
                                        <Form.Item
                                            className="w-100"
                                            name="start_time"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "تکمیل این فیلد ضروری است",
                                                },
                                            ]}>
                                            <DatePicker
                                                className="default-input pr-2 mt-2"
                                                // value={this.state.date}
                                                timePicker={false}
                                                isGregorian={false}
                                                onChange={(value)=>{
                                                    if(value){
                                                        setToday(value)
                                                    }
                                                }}
                                                name="start_time"
                                                id="start_time"
                                            />
                                        </Form.Item>
                                    </div>
                                </div>
                                {type!=='LIVE' && <div className="col-md-6">
                                    <div className="input-group">
                                        <label className="default-lable">تاریخ پایان</label>
                                        <Form.Item
                                            className="w-100"
                                            name="end_time"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "تکمیل این فیلد ضروری است",
                                                },
                                                {
                                                    validator: (_, value) =>
                                                    value > today ? Promise.resolve() : Promise.reject(new Error(` تاریخ بزرگتر از تاریخ شروع وارد کنید `))
                                                },
                                            ]}>
                                            <DatePicker
                                                className="default-input pr-2 mt-2"
                                                // value={this.state.date}
                                                timePicker={false}
                                                isGregorian={false}
                                                // onChange={this.handleDateChange}
                                                name="end_time"
                                                id="end_time"
                                            />
                                        </Form.Item>
                                    </div>
                                </div>}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="button-group">
                                {/*<button type="button" className="btn-gray">لغو</button>*/}
                                <Button type="button" className="btn-default" htmlType="submit">ثبت و ادامه</Button>

                            </div>
                        </div>
                    </div>
                    {/*<div className="row">*/}
                    {/*    <div className="col-sm-6">*/}
                    {/*        <div className="form-check">*/}
                    {/*            <input className="form-check-input" type="checkbox" value=""*/}
                    {/*                   id="checkboxphysicalex"/>*/}
                    {/*            <label className="form-check-label" htmlFor="checkboxphysicalex">*/}
                    {/*                نمایش در نمایشگاه فیزیکی*/}
                    {/*            </label>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="row" id="physical-ex" style={{display: "block"}}>*/}
                    {/*    <div className="col-md-6">*/}
                    {/*        <div className="row">*/}
                    {/*            <div className="col-md-6">*/}
                    {/*                <div className="input-group">*/}
                    {/*                    <label className="default-lable">تاریخ شروع نمایشگاه</label>*/}
                    {/*                    <input type="date" className="default-input"*/}
                    {/*                           placeholder="تاریخ شروع را وارد نمایید."/>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className="col-md-6">*/}
                    {/*                <div className="input-group">*/}
                    {/*                    <label className="default-lable">تاریخ پایان نمایشگاه</label>*/}
                    {/*                    <input type="date" className="default-input"*/}
                    {/*                           placeholder="تاریخ و زمان پایان را وارد نمایید."/>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className="col-md-12">*/}
                    {/*                <div className="input-group">*/}
                    {/*                    <label className="default-lable">آدرس</label>*/}
                    {/*                    <textarea rows="3" className="default-input"*/}
                    {/*                              placeholder="آدرس را وارد نمایید."></textarea>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </Form>
            </>
    );
};

export default BaseInformation;