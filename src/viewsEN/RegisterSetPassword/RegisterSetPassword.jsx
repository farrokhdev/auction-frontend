import React from "react";
import Logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../utils/index";
import {setToken} from "../../utils/utils";
import {connect} from 'react-redux';
import {Form, Input,message} from "antd";


function RegistersetPassword(props) {


  const [form] = Form.useForm();

  const onFinish = (values) => {

    let payload ={
      "user_name": props.auth.username,
      "verify_code": props.auth.otp,
      "password" : values.password,
      "password_check" : values.password_check,
    }

    axios.post(`${BASE_URL}/account/recover-password/`, payload)
    .then(res=>{

      if(res.data.code === 200){
        setToken(res.data.data.result);
        setTimeout(() => {
          window.location.href = "#/en/login"
          message.success("Password changed successfully")
        }, 1000);
        // history.push("/login")
      }
    })
    .catch(err=>{
      message.error("Input values are not the same")
    })

  }

  return (
    <>
      <div
        className="container innercontainer align-items-center"
        id="login-page"
      >
        <Form 
          className="login-container"
          onFinish={onFinish}
          >
          <Link to="/" className="logo">
            <img src={Logo} width="156" height="34" alt="logo" />
          </Link>
          <div className="login-block">
            <div className="main-title">
              <h3 className="default titr">Password</h3>
            </div>
            <div className="input-group">
              <p className="mb-0"> 
                <strong>Password</strong>
              </p>
              <Form.Item
                className="w-100"
                name="password"
                
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                  {
                    min: 8,
                    message: "At least 8 characters must be entered!",
                }
            ]}>
                <Input 
                    className="default-input"
                    type="password"
                    placeholder="Enter your password"
                  />
              </Form.Item>
              <p className="mb-0">
                <strong>Repeat Password</strong>
              </p>
              <Form.Item
                className="w-100"
                name="password_check"
                rules={[
                  {
                    required: true,
                    message: "Please input your password check!",
                  },
                  {
                    min: 8,
                    message: "At least 8 characters must be entered!",
                }
            ]}>
                <Input 
                  className="default-input"
                  type="password"
                  placeholder="Repeat Password"
                />
              </Form.Item>
           
            </div>
            <div className="btn-container pt-5">
                <button
                  htmlType="submit"
                  className="btn-default"
                  >
                  Register
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
      panelReducer : store.panelReducer
  }
}

export default connect(mapStateToProps , null)(RegistersetPassword)