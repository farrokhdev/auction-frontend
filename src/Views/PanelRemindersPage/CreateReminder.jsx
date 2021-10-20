import React, { useState } from 'react'
import HeaderPanel from '../../components/HeaderPanel';
import PanelSidebar from '../../components/PanelSidebar';
import { Form, Input, Spin, message, Checkbox } from "antd";
import { Link } from 'react-router-dom';
import "antd/dist/antd.css";
import axios from '../../utils/request';
import { BASE_URL } from '../../utils';
import DatePicker from 'react-datepicker2';
import moment from 'moment-jalaali'


function CreateReminder(props) {

    const [reminders, setReminders] = useState({});
    const [loading, setLoading] = useState(false)
    const [form] = Form.useForm();
    const [Reminder, setReminder] = useState({})

    const onFinish = (values) => {

        let reminderDays = [];

        reminderDays = [
            values?.start_time.format("YYYY-MM-DD"),
            values?.end_time.format("YYYY-MM-DD")
        ]

        let payload = {
            "name": values?.name,
            "keyword": values?.keyword,
            "exact_match": Reminder?.exact_match,
            "min_price": values?.min_price,
            "max_price": values?.max_price,
            "reminder_days": reminderDays,
            "status": Reminder?.status
        }


        axios.post(`${BASE_URL}/notification/auction-reminders/`, payload)
            .then(res => {
                setLoading(true)
                if (res.data.code === 201) {

                    let data = res.data.data.result;
                    setReminder(data)

                    message.success({
                        content: "اطلاعات شما با موفقیت ثبت شد",
                        className: 'text-muted',
                        style: {
                            marginTop: '10vh',
                        },
                    })

                    setTimeout(() => {
                        window.location.href = "#/panel-reminders"
                    }, 900);


                }
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                message.error("دوباره تلاش کنید")
            })
    }


    // function onChange(dates, dateStrings) {
    //     // console.log('From: ', dates, ', to: ', dates);
    //     // console.log("my date", m);
    //     setNewReminder({
    //         ...NewReminder,
    //         ReminderDays:
    //             [moment.from(dateStrings ? dateStrings[0] : "", "fa", "YYYY-MM-DD").locale("en").format("YYYY-MM-DD"), moment.from(dateStrings ? dateStrings[1] : "", "fa", "YYYY-MM-DD").locale("en").format("YYYY-MM-DD")]
    //     })
    // }


    return (
        <>
            <HeaderPanel titlePage={"یادآوری‌ها"} />
            <div className="panel-main">
                <PanelSidebar />
                <div className="panel-body">
                    <Spin spinning={loading}>
                        <Form
                            onFinish={onFinish}
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
                                                name="name"
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
                                                name="keyword"
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
                                            <Form.Item name="exact_match"
                                                className="w-50"
                                                noStyle>
                                                <Checkbox
                                                    checked={!!Reminder?.exact_match}
                                                    onChange={(e) => setReminder({ ...Reminder, exact_match: e.target.checked })}> تطبیق دقیق</Checkbox>
                                            </Form.Item>


                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="input-group">
                                            <label className="default-lable">کمترین قیمت</label>
                                            <Form.Item
                                                className="w-100"
                                                name="min_price"
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
                                                name="max_price"
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

                                            <Form.Item name="status"
                                                noStyle>
                                                <Checkbox
                                                    checked={!!Reminder?.status}
                                                    onChange={(e) => setReminder({ ...Reminder, status: e.target.checked })}
                                                >غیرفعال کردن یادآوری</Checkbox>
                                            </Form.Item>


                                        </div>
                                    </div>
                                    <h5 className="default mrgb20">زمان ارسال</h5>
                                    <div className="col-md-4">
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
                                                    // setTodayOnBlur={false}
                                                    timePicker={false}
                                                    isGregorian={false}
                                                    onChange={(value) => {
                                                        if (value) {
                                                            // setToday(value)
                                                            // handleDateChange()
                                                        }

                                                    }}
                                                    name="start_time"
                                                    id="start_time"
                                                    min={moment().startOf('moment')}
                                                />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
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
                                                ]}>
                                                <DatePicker
                                                    className="default-input pr-2 mt-2"
                                                    // value={this.state.date}
                                                    // setTodayOnBlur={false}

                                                    timePicker={false}
                                                    isGregorian={false}
                                                    onChange={(value) => {
                                                        if (value) {
                                                            // setToday(value)
                                                            // handleDateChange()
                                                        }

                                                    }}
                                                    name="end_time"
                                                    id="end_time"
                                                    min={moment().startOf('moment')}
                                                />
                                            </Form.Item>
                                        </div>
                                    </div>

                                    <div className="panel-button-group">
                                        <Link to="/panel-reminders">
                                            <button type="button" className="btn-gray">بازگشت</button>
                                        </Link>
                                        <span className="px-2 d-inline-block" />
                                        <button htmlType="submit" className="btn-default">ثبت</button>
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