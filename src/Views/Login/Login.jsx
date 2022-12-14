import React, { useState } from "react";
// import Logo from "../../images/logo.svg";
import Logo from "../../images/smartauction-192.png";
import { Link, useHistory, useLocation } from "react-router-dom";
import axios from "axios";
// import {withRouter} from "react-router-dom"
import { setPhoneNumber, loginSuccess } from '../../redux/reducers/auth/auth.actions'
import { BASE_URL } from "../../utils/index";
import { setToken } from "../../utils/utils";
import { connect } from 'react-redux';
import { Form, Input, message } from "antd";
import GoogleLogin from "react-google-login";


function Login(props) {

  const [userName, setuserName] = useState("");
  const [Password, setPassword] = useState("");
  const [form] = Form.useForm();
  const history = useHistory();
  const location = useLocation();

  function err_msg_resolver(res_body) {
    if (res_body.code == 201 || res_body.code == 200)
      return res_body.data.error_message
    else {
      return res_body.message
    }
  }


  const handleRequestLogin = (e) => {
    e.preventDefault();

    let payload = {
      "id": userName,
      "password": Password,
    }
    axios.post(`${BASE_URL}/account/login/`, payload, { headers: { "Accept-Language": 'fa-IR' } })
      .then(resp => {
        console.log("token =>", resp.data.data.result);
        if (resp.data.code === 200) {
          setToken(resp.data.data.result);
          console.log("Login google==>>", resp.data.data.result)
          props.setPhoneNumber({ username: payload.id })
          props.loginSuccess({ userName: payload.id })
          message.success({
            content: "به اسمارت آکشن خوش آمدید",
            className: 'text-succus',
            style: {
              marginTop: '10vh',
            },
          })
          // window.location.href="#/"
          if (location.search.includes("next")) {
            history.push("/#/")
          } else {
            history.goBack()
          }
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
        console.log("error message", err);
      })
  }

  const responseGoogle = (response) => {

    // console.log("Sign Up", response);

    let payload = {
      // "access_token": response.tokenObj.access_token
      "access_token": response.tokenObj.access_token
    }

    // console.log("Ehsan", payload)

    axios.post(`${BASE_URL}/rest-auth/google/`, payload).then(res => {
      if (res.data.data.statusCode !== 400) {
        setToken(res.data.data.result)
        console.log("res.data.data.result  Login===>>", res.data.data.result)
        props.loginSuccess({})
        message.success("به اسمارت آکشن خوش آمدید")
        setTimeout(() => {
          window.location.href = "#/"
        }, 500);

      }
    })
      .catch(err => {
        console.log(err)
      })

  }

  return (
    <>
      <div
        className="container innercontainer align-items-center"
        id="login-page"
      >
        <Form className="login-container" form={form}>
          <Link to="/" className="logo" className="mb-1">
            <img src={Logo} width="110" height="90" alt="اسمارت آکشن" />
          </Link>
          <div className="login-block" >
            <div className="main-title">
              <h2 className="default titr">ورود</h2>
            </div>
            <p>
              با ثبت نام و ورود به سایت شما
              <Link to="/"> قوانین </Link> و <Link to="/"> شرایط استفاده </Link>
              را پذیرفته‌اید.
            </p>
            <Form.Item
              className="w-100"
              name="user-name"
              rules={[
                {
                  required: true,
                  message: "تکمیل این فیلد ضروری است",
                }
              ]}>
              <Input
                type="text"
                className="default-input"
                onChange={(e) => {
                  setuserName(e.target.value);
                }}
                placeholder="شماره همراه یا ایمیل" />
            </Form.Item>
            <Form.Item
              className="w-100"
              name="password"
              rules={[
                {
                  required: true,
                  message: "تکمیل این فیلد ضروری است",
                },
                {
                  // min: 8,
                  message: "حداقل 8 کارکتر مورد نیاز است",
                }
              ]}>
              <Input className="default-input"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="رمز عبور" />
            </Form.Item>
            <div className="btn-container">
              <button
                type="submit"
                onClick={handleRequestLogin}
                className="btn-default"
              >
                ورود
              </button>
            </div>
            <div class="s-footer-block">
              <div class="or-divider">
                <span> یا </span>
              </div>
              <GoogleLogin
                className="btn-google-login btn-google mt-5"
                clientId="503975669516-jknru5bhfklk6kgd0j4fsuakg5cq00pv.apps.googleusercontent.com"
                buttonText=" ثبت نام با گوگل"
                onSuccess={responseGoogle}
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
                  مرا به خاطر بسپار
                </label>
              </div>
              <Link to="/password-recovery" className="l-forget">
                فراموشی رمز عبور
              </Link>
            </div>
          </div>
          <p className="l-signup">
            هنوز ثبت نام نکرده‌اید؟
            <Link to="/sign-up"> اینجا کلیک کنید.</Link>
          </p>
        </Form>
      </div>
    </>
  );
}

// export default withRouter(Login);

const mapDispatchToProps = (dispatch) => {
  return {
    setPhoneNumber: (data) => dispatch(setPhoneNumber(data)),
    // setProfile : (data) => dispatch(setProfile(data)),
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
