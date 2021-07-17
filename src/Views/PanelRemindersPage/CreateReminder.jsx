import React, { useState } from 'react'
import HeaderPanel from '../../components/HeaderPanel';
import PanelSidebar from '../../components/PanelSidebar';
import { Button, Form, Input, Spin, Select,message } from "antd";
import { Link } from 'react-router-dom';
import {setToken} from "../../utils/utils";


// import { ConfigProvider } from "antd";
// import { DatePicker as DatePickerJalali } from "antd-jalali";
// import fa_IR from "antd/lib/locale/fa_IR";
import "antd/dist/antd.css";
import axios from '../../utils/request';
import { BASE_URL } from '../../utils';
import moment from "moment-jalaali";


function CreateReminder(props) {
    const [reminders, setReminders] = useState({});
    const [loading, setLoading] = useState(false)
    const [form] = Form.useForm();
    // const [Name, setName] = useState("");
    // const [Keyword, setKeyword] = useState("");
    // const [ExactMatch, setExactMatch] = useState(true);
    // const [MinPrice, setMinPrice] = useState("");
    // const [MaxPice, setMaxPice] = useState("");
    // const [ReminderDays, setReminderDays] = useState("");
    // const [Status, setStatus] = useState("")

    const [state, setstate] = useState(
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

    // const onFinish = (values) => {
    //     // sendData(values)
    //     axios.post(`${BASE_URL}/notification/auction-reminders/`)
    //         setLoading(true)
    //         .then(res=> {
                
    //             setLoading(false);
    //             console.log(res.data.data.result);
    //         })
    //         .catch(err=>console.log(err))

    // }

    
    const reminderHandler = ()=>{
        
        let payload ={
            "name": state?.Name,
            "keyword": state?.Keyword,
            "exact_match": state?.ExactMatch,
            "min_price": state?.MinPrice,
            "max_price": state?.MaxPice,
            "reminder_days":state?.ReminderDays,
            "status": state?.Status
        }

        axios.post(`${BASE_URL}/notification/auction-reminders/`,payload)
        .then(res=> {
            setLoading(true)
            if(res.data.code === 201){
                message.success("اطلاعات شما با موفقیت ثبت شد")
                // console.log(setReminders(res.data.data.result));
                setReminders(res.data.data.result)
                // setToken(res.data.data.result)
                window.location.href="#/panel-reminders"
            
            
            }
                  // setLoading(false);
        })
        .catch(err=>{
            console.log(err);
            message.error("دوباره تلاش کنید")
        })
    }
    // useEffect(()=>{
    // getData()

    // },[])

    // const sendData = () => {
    //     setLoading(true)
    // }
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
                                                            setstate({...state , Name : e.target.value});
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
                                                            setstate({...state , Keyword : e.target.value});
                                                        }}
                                                    placeholder="کلمه کلیدی مورد نظر خود را وارد نمایید." />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div className="form-check sm-mrgt35">
                                            <Input 
                                                onChange={(e)=>{
                                                    setstate({...state , ExactMatch : e.target.checked });
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
                                                            setstate({...state , MinPrice : e.target.value});
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
                                                            setstate({...state , MaxPice : e.target.value});
                                                        }}
                                                    placeholder="بیشترین قیمت مورد نظر را وارد نمایید." />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div className="form-check sm-mrgt35">
                                            <Input className=" form-check-input"
                                                 onChange={(e)=>{
                                                    setstate({...state , Status : e.target.checked});
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
                                        <div className="row row-cols-2">
                                            {["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه"].map((item) =>
                                                <div div className="col" >
                                                    <div className="form-check ">
                                                        <Input 
                                                           
                                                            onChange={(e)=>{
                                                                setstate({...state , ReminderDays:[ moment(Date.now()).format("YYYY-MM-DD") ] });
                                                            }}
                                                            className="form-check-input" type="checkbox" value=""
                                                            id="checkbox44" />
                                                        <label className="form-check-label" for="" >
                                                            {item}
                                                        </label>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
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