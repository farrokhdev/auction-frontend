// import React,{useState,useContext} from "react";
import React,{useState} from "react";
// import Logo from "../../images/logo.svg";
import Logo from "../../images/smartauction-192.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../utils/index";
import {setToken} from "../../utils/utils";
import {connect} from 'react-redux';
import {Form, Input,message} from "antd";

function VerificationCode(props) {
  
  const [verify_code, setverify_code] = useState("");
  const [form] = Form.useForm();


  const handleRequestVerifyCode = (value)=>{
    
    let payload ={
      "user_name" :  props.auth.username,
      "verify_code" : verify_code,
    }
    axios.post(`${BASE_URL}/account/approve/` ,payload)
      .then(res=>{
        console.log("Verification",res);

        if(res.data.data.statusCode === 400){
          message.error("مجددا درخواست کد اعتبارسنجی دهید")
        }else{
          setTimeout(() => {
            message.success("لطفا وارد شوید")
            window.location.href = "#/login?next=/#/"
          }, 500);

        }
      })
      .catch(err=>{
        message.error("کد نامعتبر است")
        console.log("Can not Login" , err);
      })
  }
  return (
    <>
      <div
        dir="rtl"
        className="container innercontainer align-items-center"
        id="login-page"
      >
        <Form className="login-container" form={form}>
          <Link to="/" className="logo">
            <img src={Logo}  width="110" height="90" alt="اسمارت آکشن" />
          </Link>
          <h5 className="default titr text-center">
            لطفا کد تایید ارسال شده به ایمیل یا شماره همراه خود را در کادر زیر
            وارد کنید.
          </h5>
          <div className="login-block">
            <div className="main-title"></div>
            <Form.Item
                className="w-100"
                name="username"
                
                rules={[
                  {
                    required: true,
                    message: "تکمیل این فیلد ضروری است",
                  },
                  {
                    min: 4,
                    message: "حداقل 4 کارکتر مورد نیاز است",
                }
              
            ]}>
                <Input className="default-input"
                    type="number"
                    onChange={(e)=>{setverify_code(e.target.value)}}
                  placeholder="کد تایید را وارد کنید"/>
              </Form.Item>
            {/* <div className="input-group">
              <input
              onChange={(e)=>{setverify_code(e.target.value)}}
                type="password"
                className="default-input"
                placeholder="کد تایید را وارد کنید"
              />
            </div> */}
            <div className="text-center pt-5">
                <button
                onClick={handleRequestVerifyCode} 
                type="submit"
                className="btn-default">
                  تایید
                </button>
              {/* <Link to="/">
              </Link> */}
            </div>
          </div>
        </Form>
      </div>
    </>
  );
}


const mapStateToProps = (store) => {
  return {
      auth : store.authReducer,
  }
}


export default connect(mapStateToProps , null)(VerificationCode)