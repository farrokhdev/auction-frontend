import React, { useState } from 'react'
import HeaderPanel from '../../components/HeaderPanel';
import PanelSidebar from '../../components/PanelSidebar';
import { Button, Form, Input, Spin, Select,message } from "antd";
import { Link } from 'react-router-dom';
import {setToken} from "../../utils/utils";


import { ConfigProvider ,DatePicker } from "antd";
import { DatePicker as DatePickerJalali } from "antd-jalali";
import fa_IR from "antd/lib/locale/fa_IR";
import "antd/dist/antd.css";
import axios from '../../utils/request';
import { BASE_URL } from '../../utils';
// import moment from "moment-jalaali";
import moment from "jalali-moment"

function CreateReminder(props) {
    const [reminders, setReminders] = useState({});
    const [loading, setLoading] = useState(false)
    const [form] = Form.useForm();
    // const [params, setParams] = useState({
    //     date_after: '',
    //     date_before: '',
    // })

    const [NewReminder, setNewReminder] = useState(
        {
            Name : "",
            Keyword : "",
            ExactMatch : false,
            MinPrice : "",
            MaxPice : "",
            ReminderDays :[],
            Status :  false

        }
    )

    
    const reminderHandler = ()=>{
        
        let payload ={
            "name": NewReminder?.Name,
            "keyword": NewReminder?.Keyword,
            "exact_match": NewReminder?.ExactMatch,
            "min_price": NewReminder?.MinPrice,
            "max_price": NewReminder?.MaxPice,
            "reminder_days":NewReminder?.ReminderDays,
            "status": NewReminder?.Status
        }

        axios.post(`${BASE_URL}/notification/auction-reminders/`,payload)
        .then(res=> {
            setLoading(true)
            if(res.data.code === 201){
                message.success("اطلاعات شما با موفقیت ثبت شد")
                // console.log(setReminders(res.data.data.result));
                setReminders(res.data.data.result)
                window.location.href="#/panel-reminders"
            
            
            }
                  setLoading(false);
        })
        .catch(err=>{
            console.log(err);
            message.error("دوباره تلاش کنید")
        })
    }




    function onChange(dates, dateStrings) {
        // console.log('From: ', dates, ', to: ', dates);
        // console.log("my date", m);
        setNewReminder({
            ...NewReminder,
            ReminderDays : 
            [ moment.from(dateStrings ?  dateStrings[0] : "" , "fa", "YYYY-MM-DD").locale("en").format("YYYY-MM-DD") , moment.from(dateStrings ?  dateStrings[1] : "", "fa", "YYYY-MM-DD" ).locale("en").format("YYYY-MM-DD")  ]
        })
      }
    return (
        <>
            <HeaderPanel titlePage={"یادآوری‌ها"} />
            <div className="panel-main">
                <PanelSidebar />
                <div className="panel-body">
                    <Spin spinning={loading}>
                        <Form 
                        // onFinish={onFinish}
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
                                                name="reminder-name"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: "تکمیل این فیلد ضروری است",
                                                    }
                                                ]}>
                                                <Input className="default-input"
                                                         onChange={(e)=>{
                                                            setNewReminder({...NewReminder , Name : e.target.value});
                                                          }}
                                                    placeholder="نام مورد نظر خود را وارد نمایید." />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="input-group">
                                            <label className="default-lable">کلمه کلیدی</label>
                                            <Form.Item
                                                className="w-100"
                                                name="key-word"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: "تکمیل این فیلد ضروری است",
                                                    }
                                                ]}>
                                                <Input className="default-input"
                                                        onChange={(e)=>{
                                                            setNewReminder({...NewReminder , Keyword : e.target.value});
                                                        }}
                                                    placeholder="کلمه کلیدی مورد نظر خود را وارد نمایید." />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div className="form-check sm-mrgt35">
                                            <Input 
                                                onChange={(e)=>{
                                                    setNewReminder({...NewReminder , ExactMatch : e.target.checked });
                                                }}
                                                // onChange ={(e)=>console.log((e.target.checked))}
                                                className=" form-check-input"
                                                name="accurate-matching"
                                                type="checkbox"
                                                id="checkbox41"
                                            />
                                            <label className="form-check-label" for="checkbox41">
                                                تطبیق دقیق
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="input-group">
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
                                                        onChange={(e)=>{
                                                            setNewReminder({...NewReminder , MinPrice : e.target.value});
                                                        }}
                                                    placeholder="کمترین قیمت مورد نظر را وارد نمایید." />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="input-group">
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
                                                         onChange={(e)=>{
                                                            setNewReminder({...NewReminder , MaxPice : e.target.value});
                                                        }}
                                                    placeholder="بیشترین قیمت مورد نظر را وارد نمایید." />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div className="form-check sm-mrgt35">
                                            <Input className=" form-check-input"
                                                 onChange={(e)=>{
                                                    setNewReminder({...NewReminder , Status : e.target.checked});
                                                 }}
                                                // onChange={(e)=>console.log(e.target.checked)}
                                                name="off-reminder"
                                                type="checkbox"
                                                id="checkbox42"
                                            />
                                            <label className="form-check-label" for="checkbox42">
                                                غیرفعال کردن یادآوری
                                            </label>
                                        </div>
                                    </div>
                                    <h5 className="default mrgb20">زمان ارسال</h5>
                                    <div className="col-xxl-8">
                                    <ConfigProvider locale={fa_IR} direction="rtl">
                                        <div className="">
                                            <DatePickerJalali.RangePicker 
                                            onChange={onChange}
                                            // onChange={(e)=>{
                                            //     setNewReminder({...NewReminder , ReminderDays:[onChange]})}}   
                                            className="rounded" />
                                        </div>
                                    </ConfigProvider>
                                        {/* <div className="row row-cols-2">
                                            {["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه"].map((item) =>
                                                <div div className="col" >
                                                    <div className="form-check ">
                                                        <Input 
                                                           
                                                            onChange={(e)=>{
                                                                setNewReminder({...NewReminder , ReminderDays:[ moment(Date.now()).format("YYYY-MM-DD") ] });
                                                            }}
                                                            className="form-check-input" type="checkbox" value=""
                                                            id="checkbox44" />
                                                        <label className="form-check-label" for="" >
                                                            {item}
                                                        </label>
                                                    </div>
                                                </div>
                                            )}
                                        </div> */}
                                    </div>
                                    <div className="panel-button-group">
                                        <Link to="/panel-reminders">
                                            <button type="button" className="btn-gray">بازگشت</button>
                                        </Link>
                                        <span className="px-2 d-inline-block" />
                                        <button type="submit" className="btn-default" onClick={reminderHandler}>ثبت</button>
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