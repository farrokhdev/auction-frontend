import React, { useState, useEffect } from 'react'
import { Button, Form, Input, message, Modal, Select, Spin, TimePicker } from 'antd';
import UploadImage from './uploadImage';
import { setAUCTION } from '../../redux/reducers/auction/auction.actions';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker, { Calendar } from 'react-datepicker2';
import moment from 'moment-jalaali'
import momentJalaali from "moment-jalaali"
import locale from "antd/es/date-picker/locale/de_DE";

function BaseInformation(props) {

    const listAuctionType = [
        { name: "SECOND_HIDDEN", value: "The second bid price by auction (secret)" },
        { name: "HIDDEN", value: "Bid price by auction (secret)" },
        { name: "PERIODIC", value: "Timely auction" },
        { name: "ONLINE", value: "Online" },
        { name: "LIVE", value: "Live" },
    ]
    const { selectComponent, setSelectComponent } = props
    const [form] = Form.useForm();
    const [type, setType] = useState("")
    const finalData = useSelector((state) => state.auctionReducer)
    const [media, setMedia] = useState(null)
    const [has_gallery_state, setHas_gallery_state] = useState(false)
    const [today, setToday] = useState(finalData?.start_time || moment())
    const [todayGallery, setTodayGallery] = useState(finalData?.gallery_start_date || moment())
    const dispatch = useDispatch();
    useEffect(() => {
        let listDate = {}
        finalData?.start_time && (listDate["start_time"] = moment(finalData?.start_time))
        finalData?.gallery_start_date && (listDate["gallery_start_date"] = moment(finalData?.gallery_start_date || ''))
        finalData?.end_time && (listDate["end_time"] = moment(finalData?.end_time))
        finalData?.gallery_end_date && (listDate["gallery_end_date"] = moment(finalData?.gallery_end_date))
        finalData?.start_clock && (listDate["start_clock"] = moment(finalData?.start_clock))
        finalData?.end_clock && (listDate["end_clock"] = moment(finalData?.end_clock))
        finalData?.gallery_start_clock && (listDate["gallery_start_clock"] = moment(finalData?.gallery_start_clock))
        finalData?.gallery_end_clock && (listDate["gallery_end_clock"] = moment(finalData?.gallery_end_clock))
        finalData?.type && (setType(finalData?.type))
        setMedia(finalData?.media || null)
        setHas_gallery_state(finalData?.has_gallery || false)
        form.setFieldsValue({
            ...listDate,
            title_en: finalData?.title,
            title: finalData?.title,
            type: finalData?.type,
            description: finalData?.description,
            address: finalData?.address,
        })
    }, [finalData])

    const onFinish = (values) => {
        if (media) {
            dispatch(setAUCTION({ ...values, media, has_gallery: has_gallery_state }))
            setSelectComponent(selectComponent + 1)
        } else {
            message.error("Uploading an action image is mandatory")
        }

    }
    const handleResultUpload = (value) => {
        if (value?.media_path)
            setMedia(value)
    }


    return (
        <>
            <Form onFinish={onFinish}
                form={form}
                wrapperCol={{ span: 24 }}>
                <div className="row">
                    <div className="col-xxxxl-8">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="input-group">
                                    <label className="default-lable">Auction type</label>
                                    <Form.Item
                                        className="w-100"
                                        name="type"
                                        rules={[
                                            {
                                                required: true,
                                                message: "This field is required",
                                            },
                                        ]}>
                                        <Select
                                            className="search-input w-100 fs-6"
                                            size="large"
                                            dropdownClassName="text-right"
                                            placeholder="Select the type of auction"
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
                                    <label className="default-lable">Auction name</label>
                                    <Form.Item
                                        className="w-100"
                                        name="title"
                                        rules={[
                                            {
                                                required: true,
                                                message: "This field is required",
                                            },
                                        ]}>
                                        <input type="text" className="default-input"
                                            placeholder="Enter auction name" />
                                    </Form.Item>

                                </div>
                            </div>
                        </div>

                        <div className="row mb-5">
                        <UploadImage handleResultUpload={handleResultUpload} initialImage={media} />
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="input-group">
                                    <label className="default-lable">Details text</label>
                                    <Form.Item
                                        className="w-100"
                                        name="description"
                                        rules={[
                                            {
                                                required: true,
                                                message: "This field is required",
                                            },
                                            {
                                                max: 500,
                                                message: "Maximum 500 characters",
                                            },
                                        ]}>
                                        <textarea className="default-input" placeholder="Enter auction details." />
                                    </Form.Item>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="input-group">
                                            <label className="default-lable">Start date</label>
                                            <Form.Item
                                                className="w-100"
                                                name="start_time"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: "This field is required",
                                                    },
                                                ]}>
                                                <DatePicker
                                                    className="default-input pr-2 mt-2"
                                                    timePicker={false}
                                                    // isGregorian={false}
                                                    onChange={(value) => {
                                                        if (value) {
                                                            setToday(value)
                                                        }

                                                    }}
                                                    name="start_time"
                                                    id="start_time"
                                                // min={momentJalaali().startOf('moment')}
                                                />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-group">
                                            <label className="default-lable">Start time</label>
                                            <Form.Item
                                                className="w-100"
                                                name="start_clock"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: "This field is required",
                                                    },
                                                ]}>
                                                <TimePicker locale={{
                                                    ...locale,
                                                    lang: {
                                                        ...locale.lang,
                                                        ok: "submit",
                                                    }
                                                }}
                                                    placeholder="00:00"
                                                    format={"HH:mm"} showNow={false} className="default-input custom-timePicker mt-2" />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    {type !== 'LIVE' && <div className="col-md-6">
                                        <div className="input-group">
                                            <label className="default-lable">End date</label>
                                            <Form.Item
                                                className="w-100"
                                                name="end_time"

                                                rules={[
                                                    {
                                                        required: true,
                                                        message: "This field is required",
                                                    },
                                                    {
                                                        validator: (_, value) =>
                                                            value >= today ? Promise.resolve() : Promise.reject(new Error(` Enter a date larger than the start date`))
                                                    },
                                                ]}>
                                                <DatePicker
                                                    className="default-input pr-2 mt-2"
                                                    timePicker={false}
                                                    // isGregorian={false}
                                                    name="end_time"
                                                    id="end_time"
                                                    min={momentJalaali().startOf('moment')}
                                                />
                                            </Form.Item>
                                        </div>
                                    </div>}

                                    <div className="col-md-6">
                                        <div className="input-group">
                                            <label className="default-lable">End time</label>
                                            <Form.Item
                                                className="w-100"
                                                name="end_clock"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: "This field is required",
                                                    },
                                                ]}>
                                                <TimePicker locale={{
                                                    ...locale,
                                                    lang: {
                                                        ...locale.lang,
                                                        ok: "submit",
                                                    }
                                                }}
                                                    placeholder="00:00"
                                                    format={"HH:mm"} showNow={false} className="default-input custom-timePicker mt-2" />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    {type === 'ONLINE' && <>
                                        <div className="col-md-6">
                                            <div className="input-group">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox"
                                                        checked={has_gallery_state}
                                                        onChange={e => setHas_gallery_state(e.target.checked)}
                                                        id="checkboxphysicalex" />
                                                    <label className="form-check-label" htmlFor="checkboxphysicalex">
                                                        Show at the physical exhibition
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        {has_gallery_state && <>
                                            <div className="col-md-6" />
                                            <div className="col-md-6">
                                                <div className="input-group">
                                                    <label className="default-lable">Exhibition start date</label>
                                                    <Form.Item
                                                        className="w-100"
                                                        name="gallery_start_date"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: "This field is required",
                                                            },
                                                        ]}>
                                                        <DatePicker
                                                            className="default-input pr-2 mt-2"
                                                            timePicker={false}
                                                            // isGregorian={false}
                                                            onChange={(value) => {
                                                                if (value) {
                                                                    setTodayGallery(value)
                                                                }
                                                            }}
                                                            name="gallery_start_date"
                                                            id="gallery_start_date"
                                                            min={momentJalaali().startOf('moment')}
                                                        />
                                                    </Form.Item>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="input-group">
                                                    <label className="default-lable">Exhibition start time </label>
                                                    <Form.Item
                                                        className="w-100"
                                                        name="gallery_start_clock"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: "This field is required",
                                                            },
                                                        ]}>
                                                        <TimePicker locale={{
                                                            ...locale,
                                                            lang: {
                                                                ...locale.lang,
                                                                ok: "submit",
                                                            }
                                                        }}
                                                            placeholder="00:00"
                                                            format={"HH:mm"} showNow={false} className="default-input custom-timePicker mt-2" />
                                                    </Form.Item>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="input-group">
                                                    <label className="default-lable">Exhibition end date</label>
                                                    <Form.Item
                                                        className="w-100"
                                                        name="gallery_end_date"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: "This field is required",
                                                            },
                                                            {
                                                                validator: (_, value) =>
                                                                    value >= todayGallery ? Promise.resolve() : Promise.reject(new Error(` Enter a date larger than the start date `))
                                                            },
                                                        ]}>
                                                        <DatePicker
                                                            className="default-input pr-2 mt-2"
                                                            timePicker={false}
                                                            // isGregorian={false}
                                                            id="gallery_end_date"
                                                            min={momentJalaali().startOf('moment')}
                                                        />
                                                    </Form.Item>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="input-group">
                                                    <label className="default-lable">Exhibition end time </label>
                                                    <Form.Item
                                                        className="w-100"
                                                        name="gallery_end_clock"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: "This field is required",
                                                            },
                                                        ]}>
                                                        <TimePicker locale={{
                                                            ...locale,
                                                            lang: {
                                                                ...locale.lang,
                                                                ok: "submit",
                                                            }
                                                        }}
                                                            placeholder="00:00"
                                                            format={"HH:mm"} showNow={false} className="default-input custom-timePicker mt-2" />
                                                    </Form.Item>
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="input-group">
                                                    <label className="default-lable"> Address</label>
                                                    <Form.Item
                                                        className="w-100"
                                                        name="address"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: "This field is required",
                                                            },
                                                            {
                                                                max: 500,
                                                                message: "Maximum 500 characters",
                                                            },
                                                        ]}>
                                                        <textarea className="default-input"
                                                            placeholder="Enter the auction address." />
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
                                    <Button type="button" className="btn-default" htmlType="submit">Submit and Continue</Button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        </>
    )
}

export default BaseInformation;