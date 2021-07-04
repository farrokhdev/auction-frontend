import React, {useState} from 'react';
import {Button, Form, Input, message, Select, Spin} from "antd";
import DatePicker from 'react-datepicker2';
import {Link} from "react-router-dom";
import moment from 'moment-jalaali'
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import {ADD_AUCTION} from "../../utils/constant";
const listAuctionType = [
    {name: "SECOND_HIDDEN", value: "دومین قیمت پیشنهاد با حراج (مخفی)"},
    {name: "HIDDEN ", value: "قیمت پیشنهاد با حراج (مخفی)"},
    {name: "PERIODIC ", value: "حراج زمان دار"},
    {name: "ONLINE  ", value: "آنلاین"},
    {name: "LIVE  ", value: "زنده"},

]

const Conditions = (props) => {

    const {selectComponent, setSelectComponent,finalData, setFinalData,products,id} = props
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})
    const [payment_method, setPayment_method] = useState(false)

    const onFinish = (values) => {
        setFinalData({...finalData,...values})
        console.log(values,finalData,products)
        sendData(values)
    }
    const sendData = (values) => {

        setLoading(true)
        let start_time=moment(finalData.start_time).format("YYYY-MM-DD hh:mm:ss")
        let end_time=moment(finalData.end_time).format("YYYY-MM-DD hh:mm:ss")
        let list_products=products.map(t=>({base_price:(t?.base_price || 0),product_id:t?.id}))
        // console.log(start_time,end_time)
        axios.post(`${BASE_URL}${ADD_AUCTION}`, {...values,...finalData,start_time:start_time,end_time:end_time,products_id:list_products, "is_live_streaming": false,
            "bidding_interval": null,
            "extendable_deadline": false,
            "payment_method": payment_method ? "ONLINE" : "OFFLINE",
            "is_bidding_banned": false,})
            .then(resp => {
                setLoading(false)
                if (resp.data.code === 201 ) {
                    // const res = resp.data?.data?.result;
                    message.success("اطلاعات حساب شما با موفقیت ثبت شد")
                    // let check = Object.keys(res).some(t => !res[t]);
                    // setNext(true)
                    // refreshTable()
                    setSelectComponent(selectComponent + 1)
                    // setIsModalVisible(false)
                }
            })
            .catch(err => {
                setLoading(false)
                console.error(err);
                message.error("دوباره تلاش کنید")
            })
    }
    return (
        <Form onFinish={onFinish}
              form={form}
            // initialValues={{start_time:moment("1398-02-02","jYYYY-jMM-jDD")}}
              wrapperCol={{span: 24}}>
           <div className="row">
               <div className="col-xxxxl-8">
                   <div className="row">
                       <div className="col-12">
                           <div className="form-check sm-mrgt35">
                               <input className="form-check-input" type="checkbox" checked={payment_method} onChange={e=> {
                                   if(e.target.checked)
                                       setPayment_method(true)
                                   else
                                       setPayment_method(false)
                               }}/>
                               <label className="form-check-label" htmlFor="checkbox41">
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
                                   name="payment_method_conditions"
                                   rules={[
                                       {
                                           required: true,
                                           message: "تکمیل این فیلد ضروری است",
                                       },
                                   ]}>
                               <textarea rows="3" className="default-input"
                                         placeholder="شرایط پرداخت را وارد نمایید."/>
                               </Form.Item>
                           </div>
                       </div>
                       <div className="col-12">
                           <div className="input-group">
                               <label className="default-lable">قوانین بازگشت</label>
                               <Form.Item
                                   className="w-100"
                                   name="return_rules"
                                   rules={[
                                       {
                                           required: true,
                                           message: "تکمیل این فیلد ضروری است",
                                       },
                                   ]}>
                               <textarea rows="3" className="default-input"
                                         placeholder="قوانین بازگشت را وارد نمایید."/>
                               </Form.Item>
                           </div>
                       </div>
                       <div className="col-12">
                           <div className="input-group">
                               <label className="default-lable">حمل ونقل</label>
                               <Form.Item
                                   className="w-100"
                                   name="transportation"
                                   rules={[
                                       {
                                           required: true,
                                           message: "تکمیل این فیلد ضروری است",
                                       },
                                   ]}>
                               <textarea rows="3" className="default-input"
                                         placeholder="نحوه‌ی انتقال اثر را وارد نمایید."/>
                               </Form.Item>
                           </div>
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-12">
                           <div className="button-group">

                                   <button type="button" className="btn-gray" onClick={()=>{
                                       setSelectComponent(selectComponent-1)
                                   }}>بازگشت</button>


                               <button className="btn-default" htmlType="submit">ثبت نهایی</button>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        </Form>
    );
};

export default Conditions;
