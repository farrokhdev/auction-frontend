import React from "react";
// import Logo from "../../images/logo.svg";
import Logo from "../../images/smartauction-192.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../utils/index";
import {connect} from 'react-redux';
import {Form, Input,message} from "antd";

function VerificationCode(props) {
  
    const [form] = Form.useForm();

    const onFinish = (values)=>{

    let payload ={
      "user_name" :  props.auth.username,
      "verify_code" : values.verify_code,
    }

    axios.post(`${BASE_URL}/account/approve/` ,payload)
      .then(res=>{

        if(res.data.data.statusCode === 400){
          message.error("Please request a validation code again")
        }else{
          setTimeout(() => {
            window.location.href = "#/en/login"
          }, 700);

        }
      })
      .catch(err=>{
        message.error("Invalid verify code")
      })
  }
  return (
    <>
      <div
        className="container innercontainer align-items-center"
        id="login-page"
      >
        <Form 
            onFinish={onFinish}
            className="login-container" 
            form={form}>
          <Link to="/" className="logo">
            <img src={Logo}  width="110" height="90" alt="اسمارت آکشن" />
          </Link>
          <h5 className="default titr text-center">
          Please enter the verification code sent to your email or mobile number in the box below.
          </h5>
          <div className="login-block">
            <div className="main-title"></div>
            <Form.Item
                className="w-100"
                name="verify_code"
                
                rules={[
                  {
                    required: true,
                    message: "Please input your verify code!",
                  },
            ]}>
                <Input className="default-input"
                    type="number"
                  placeholder="Confirm the code"/>
              </Form.Item>
            <div className="text-center pt-5">
                <button
                 htmlType="submit"
                className="btn-default">
                  verification
                </button>
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