import React from "react";
import Logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../utils/index";
import { setToken } from "../../utils/utils";
import { setPhoneNumber } from '../../redux/reducers/auth/auth.actions';
import { connect } from 'react-redux';
import { Form, Input, message } from "antd";

function Passwordrecovery(props) {
    const [form] = Form.useForm();

    function err_msg_resolver(res_body) {
        if (res_body.code == 201 || res_body.code == 200)
          return res_body.data.error_message
        else {
          return res_body.message
        }
      }

    const onFinish = (values)=> {

        let payload = {
            "user_name": values.user_name,
        }

        axios.post(`${BASE_URL}/account/sendotp/`, payload)
            .then(res => {
      
              if (res.data.code === 200) {
                setToken(res.data.data.result);
                props.setPhoneNumber({ username: payload.user_name })
                setTimeout(() => {
                  window.location.href = "#/en/confirm-mobile-number"
                  message.success("Verification code sent")
                }, 1000);
                // history.push("/confirm-mobile-number")
              }else{
                message.error(res.data.data)
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
            <div
                className="container innercontainer align-items-center"
                id="login-page"
            >
                <div className="login-container">
                    <Link to="/" className="logo">
                        <img src={Logo} width="156" height="34" alt="log" />
                    </Link>
                    <Form 
                        onFinish={onFinish}
                        className="login-block" 
                        form={form}
                    >
                        <div className="main-title">
                            <h4 className="default titr">Password recovery</h4>
                        </div>
                        <div className="input-group">
                            <p className="mb-0">
                                <strong> mobile or Email</strong>
                            </p>
                            <Form.Item
                                className="w-100"
                                name="user_name"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your username!",
                                    }

                                ]}>
                                <Input className="default-input"
                                    placeholder="Enter your phone number or email" />
                            </Form.Item>
                        </div>
                        <div className="btn-container pt-5">
                            <button
                                htmlType="submit"
                                className="btn-default"
                            >
                                Get the verification code
                            </button>

                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
}


const mapDispatchToProps = (dispatch) => {
  return {
    setPhoneNumber: (data) => dispatch(setPhoneNumber(data)),

  }
}

const mapStateToProps = (store) => {
  return {
    auth: store.authReducer,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Passwordrecovery)