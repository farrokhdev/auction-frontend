import React from "react";
import Logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../utils/index";
import { setToken } from "../../utils/utils";
import { connect } from 'react-redux';
import { getOtp } from "../../redux/reducers/auth/auth.actions";
import { Form, Input, message } from "antd";


function ConfirmMobileNumber(props) {
    //   const [verify_code, setverify_code] = useState("");
    const [form] = Form.useForm();


    function err_msg_resolver(res_body) {
        if (res_body.code == 201 || res_body.code == 200)
          return res_body.data.error_message
        else {
          return res_body.message
        }
      }

    const onFinish = (values) => {

        let payload={
            "user_name": props.auth.username,
            "verify_code": values.verify_code,
          }
      
          axios.post(`${BASE_URL}/account/approve/` , payload)
            .then(res=>{
              if (res.data.data.statusCode === 400) {

                message.error("Please request a validation code again")

              } else {

                setToken(res.data.data.result);
                props.getOtp({ otp: values.verify_code })

                setTimeout(() => {
                  window.location.href = "#/en/register-set-password"
                  message.success("Please enter a new password")
                }, 500);

              }
            })
            .catch(err=>{

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
                <Form 
                    className="login-container" 
                    form={form}
                    onFinish={onFinish}
                >
                    <Link to="/" className="logo">
                        <img src={Logo} width="156" height="34" alt="اسمارت آکشن" />
                    </Link>
                    <div className="login-block">
                        <div className="main-title">
                            <h4 className="default titr">Confirm mobile number</h4>
                        </div>
                        <div className="input-group">
                            <p className="mb-0">
                                <strong>Verification code</strong>
                            </p>
                            <Form.Item
                                className="w-100"
                                name="verify_code"
                                rules={[
                                    {
                                        required: true,
                                        message: "تکمیل این فیلد ضروری است",
                                    }
                                ]}>
                                <Input 
                                    className="default-input"
                                    placeholder="Enter your verification code" 
                                />
                            </Form.Item>
                        </div>
                        <div className="btn-container pt-5">
                            <button
                                htmlType="submit"
                                className="btn btn-outline-secondary rounded-pill px-3 "
                            >
                               Send verification code
                            </button>
                            {/* <Link to="/register-set-password"></Link> */}
                        </div>
                        <div className="text-center pt-3">
                            <Link to="/password-recovery" className=" text-dark ">
                                Change mobile number
                            </Link>
                        </div>
                    </div>
                </Form>
            </div>
        </>
    );
}

const mapDispatchToProps = (dispatch) => {
  return {
      getOtp : (data) => dispatch(getOtp(data)),
  }
}

const mapStateToProps = (store) => {
  return {
      auth : store.authReducer,
  }
}


export default connect(mapStateToProps , mapDispatchToProps)(ConfirmMobileNumber)