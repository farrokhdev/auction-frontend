import React, { useState } from "react";
// import Logo from "../../images/logo.svg";
import Logo from "../../images/smartauction-192.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { setPhoneNumber, loginSuccess } from '../../redux/reducers/auth/auth.actions'
import { BASE_URL } from "../../utils/index";
import { setToken } from "../../utils/utils";
import { connect } from 'react-redux';
import { Form, Input, message } from "antd";
import GoogleLogin from "react-google-login";

function Login(props) {
    const [form] = Form.useForm();

    
  function err_msg_resolver(res_body) {
    if (res_body.code == 201 || res_body.code == 200)
      return res_body.data.error_message
    else {
      return res_body.message
    }
  }

    const onFinish = (values) => {
        console.log("values : " , values);

    let payload = {
        "id": values.id,
        "password": values.password,
    }

      axios.post(`${BASE_URL}/account/login/`, payload)
        .then(resp => {
          if (resp.data.data.statusCode !== 400) {

            setToken(resp.data.data.result);
            props.setPhoneNumber({ username: payload.id })
            props.loginSuccess({ userName: payload.id })

            message.success({
              content: "Welcome to Smart auction",
              className: 'text-succus',
              style: {
                marginTop: '10vh',
              },
            })

            window.location.href = "/"
            
          }else{
              console.log("resp.data.data.message : " , resp.data.data.message);
                message.error({
                    content: err_msg_resolver(resp),
                    className: 'text-danger',
                    style: {
                    marginTop: '10vh',
                    },
                })
          }
        })
        .catch(err => {
          message.error({
            content: err_msg_resolver(err.response.data),
            className: 'text-danger',
            style: {
              marginTop: '10vh',
            },
          })
        })
    }

    return (
        <>
            <div className="container innercontainer align-items-center" id="login-page">
                <div className="login-container">
                    <Link to="/" className="logo">
                        {/* <img src={logo} width="156" height="34" alt="Smart auction" /> */}
                    </Link>

                            <Form 
                                className="login-container" 
                                form={form}
                                onFinish={onFinish}
                            >
                                <Link to="/" className="logo">
                                    <img src={Logo} width="110" height="90" alt="logo" />
                                </Link>
                            <div className="login-block" >
                                <div className="main-title">
                                    <h2 className="default titr">Login</h2>
                                </div>
                                <p>By registering and logging in to the site, you agree to our <a>Policy</a> and <a >termsof use</a>.</p>

                                <Form.Item
                                    className="w-100"
                                    name="id"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please input your username!",
                                        }
                                    ]}>

                                    <Input
                                        type="text"
                                        className="default-input"
                                        placeholder="Enter email or phone" 
                                    />

                                </Form.Item>
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

                                    <Input className="default-input"
                                        type="password"
                                        placeholder="Enter password" 
                                    />

                                </Form.Item>
                                <div className="btn-container">
                                <button
                                    htmlType="submit"
                                    className="btn-default"
                                >
                                    Login
                                </button>
                                </div>
                                <div class="s-footer-block">
                                <div class="or-divider">
                                    <span> Or </span>
                                </div>
                                <GoogleLogin
                                    className="btn-google-login btn-google mt-5"
                                    clientId="204714783619-coki1sldsv5iev552dcmtcpfj1sn77sg.apps.googleusercontent.com"
                                    buttonText="Login with google"
                                    // onSuccess={responseGoogle}
                                    // onFailure={responseGoogle}
                                    cookiePolicy={'single_host_origin'}

                                />
                                </div>
                                <div className="l-footer-block">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="checkboxremember"
                                    />
                                    <label className="form-check-label" for="checkboxremember">
                                        Remember me.
                                    </label>
                                </div>
                                <Link to="/en/password-recovery" className="l-forget">
                                    Forget password?
                                </Link>
                                </div>
                            </div>
                            <p className="l-signup">Not registered yet?<Link to="/en/sign-up"> Click here.</Link></p>
                        </Form>
                </div>
            </div>
        </>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
      setPhoneNumber: (data) => dispatch(setPhoneNumber(data)),
      loginSuccess: (data) => dispatch(loginSuccess(data)),
    }
  }
  
  const mapStateToProps = (store) => {
    return {
      auth: store.authReducer,
      panelReducer: store.panelReducer
    }
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login)