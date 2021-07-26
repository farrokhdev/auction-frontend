import React, {useEffect, useState} from 'react';
import {Button, Form, Input, Select, Spin} from "antd";
import DatePicker from 'react-datepicker2';
import {Link} from "react-router-dom";
import moment from 'moment-jalaali'
import {useDispatch, useSelector} from "react-redux";
import {setAUCTION} from "../../redux/reducers/auction/auction.actions";

const listAuctionType = [
    {name: "SECOND_HIDDEN", value: "دومین قیمت پیشنهاد با حراج (مخفی)"},
    {name: "HIDDEN", value: "قیمت پیشنهاد با حراج (مخفی)"},
    {name: "PERIODIC", value: "حراج زمان دار"},
    {name: "ONLINE", value: "آنلاین"},
    {name: "LIVE", value: "زنده"},
]

const BaseInformation = (props) => {

    const {selectComponent, setSelectComponent} = props
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false)
    // const [data, setData] = useState({})
    const [type, setType] = useState("")

    const {has_gallery} = useSelector((state) => state.auctionReducer)
    const finalData = useSelector((state) => state.auctionReducer)
    const [today, setToday] = useState(finalData?.start_time || moment())
    const [todayGallery, setTodayGallery] = useState(finalData?.gallery_start_date || moment())
    const dispatch = useDispatch();
    useEffect(() => {
        let listDate = {}
        finalData?.start_time && (listDate["start_time"] = moment(finalData?.start_time))
        finalData?.gallery_start_date && (listDate["gallery_start_date"] = moment(finalData?.gallery_start_date || ''))
        finalData?.end_time && (listDate["end_time"] = moment(finalData?.end_time))
        finalData?.gallery_end_date && (listDate["gallery_end_date"] = moment(finalData?.gallery_end_date))
        finalData?.type && (setType(finalData?.type))
        console.log(listDate)
        form.setFieldsValue({
            ...listDate,
            title: finalData?.title,
            type: finalData?.type,
            description: finalData?.description,
            address: finalData?.address,

        })
    }, [finalData])

    const onFinish = (values) => {
        // console.log(values)
        // setFinalData({...finalData, ...values})
        dispatch(setAUCTION({...values}))
        setSelectComponent(selectComponent + 1)
    }
    const handleDateChange = () => {
        // dispatch(setAUCTION({  productsArrayDate: [],
        //     productsDate: {}}))
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
                                        name="description"
                                        rules={[
                                            {
                                                required: true,
                                                message: "تکمیل این فیلد ضروری است",
                                            },
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
                                                    onChange={(value) => {
                                                        if (value) {
                                                            setToday(value)
                                                            // handleDateChange()
                                                        }

                                                    }}
                                                    name="start_time"
                                                    id="start_time"
                                                />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    {type !== 'LIVE' && <div className="col-md-6">
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
                                                            value >= today ? Promise.resolve() : Promise.reject(new Error(` تاریخ بزرگتر از تاریخ شروع وارد کنید `))
                                                    },
                                                ]}>
                                                <DatePicker
                                                    className="default-input pr-2 mt-2"
                                                    // value={this.state.date}
                                                    timePicker={false}
                                                    isGregorian={false}
                                                    // onChange={handleDateChange}
                                                    name="end_time"
                                                    id="end_time"
                                                />
                                            </Form.Item>
                                        </div>
                                    </div>}
                                    {type === 'ONLINE' && <>
                                        <div className="col-md-6">
                                            <div className="input-group">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox"
                                                           checked={has_gallery}
                                                           onChange={e => dispatch(setAUCTION({has_gallery: e.target.checked}))}
                                                           id="checkboxphysicalex"/>
                                                    <label className="form-check-label" htmlFor="checkboxphysicalex">
                                                        نمایش در نمایشگاه فیزیکی
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        {has_gallery && <>
                                            <div className="col-md-6"/>
                                            <div className="col-md-6">
                                                <div className="input-group">
                                                    <label className="default-lable"> تاریخ شروع نمایشگاه</label>
                                                    <Form.Item
                                                        className="w-100"
                                                        name="gallery_start_date"
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
                                                            onChange={(value) => {
                                                                if (value) {
                                                                    setTodayGallery(value)
                                                                }
                                                            }}
                                                            name="gallery_start_date"
                                                            id="gallery_start_date"
                                                        />
                                                    </Form.Item>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="input-group">
                                                    <label className="default-lable">تاریخ پایان نمایشگاه</label>
                                                    <Form.Item
                                                        className="w-100"
                                                        name="gallery_end_date"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: "تکمیل این فیلد ضروری است",
                                                            },
                                                            {
                                                                validator: (_, value) =>
                                                                    value >= todayGallery ? Promise.resolve() : Promise.reject(new Error(` تاریخ بزرگتر از تاریخ شروع وارد کنید `))
                                                            },
                                                        ]}>
                                                        <DatePicker
                                                            className="default-input pr-2 mt-2"
                                                            // value={this.state.date}
                                                            timePicker={false}
                                                            isGregorian={false}
                                                            // onChange={this.handleDateChange}
                                                            // name="gallery_end_date"
                                                            id="gallery_end_date"
                                                        />
                                                    </Form.Item>
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="input-group">
                                                    <label className="default-lable"> آدرس</label>
                                                    <Form.Item
                                                        className="w-100"
                                                        name="address"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: "تکمیل این فیلد ضروری است",
                                                            },
                                                            {
                                                                max: 500,
                                                                message: "حداکثر 500کاراکتر",
                                                            },
                                                        ]}>
                                                    <textarea className="default-input"
                                                              placeholder="آدرس حراج را وارد نمایید."/>
                                                    </Form.Item>
                                                </div>
                                            </div>
                                        </>}
                                    </>}
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

                    </div>
                </div>
            </Form>
        </>
    );
};

export default BaseInformation;