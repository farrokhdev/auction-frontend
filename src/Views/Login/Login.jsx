import React, { useState } from "react";
import Logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import axios from "axios";
// import {withRouter} from "react-router-dom"
import {setPhoneNumber , loginSuccess} from '../../redux/reducers/auth/auth.actions'
import { BASE_URL } from "../../utils/index";
import {setToken} from "../../utils/utils";
import {connect} from 'react-redux';

function Login(props) {

  const [userName, setuserName] = useState("");
  const [Password, setPassword] = useState("");




  const handleRequestLogin = (e)=>{
    e.preventDefault();

    let payload = {
      "id" : userName,
      "password" : Password,
    }
    axios.post(`${BASE_URL}/account/login/`,payload)
      .then(resp=>{
        console.log("token =>",resp.data.data.result);
        if(resp.data.code === 200){
          setToken(resp.data.data.result);
          props.setPhoneNumber({username : payload.id})
          props.loginSuccess({userName : payload.id})
          window.location.href = "#/artworks"
      }
      })
      .catch(err=>{
        console.log("error message",err);
      })
  }


  return (
    <>
      <div
        dir="rtl"
        className="container innercontainer align-items-center"
        id="login-page"
      >
        <form className="login-container">
          <Link to="/" className="logo">
            <img src={Logo} width="156" height="34" alt="اسمارت آکشن" />
          </Link>
          <div className="login-block">
            <div className="main-title">
              <h2 className="default titr">ورود</h2>
            </div>
            <p>
              با ثبت نام و ورود به سایت شما
              <Link to="/"> قوانین </Link> و <Link to="/"> شرایط استفاده </Link>
              را پذیرفته‌اید.
            </p>
            <div className="input-group">
              <input
                 onChange={(e) => {
                  setuserName(e.target.value);
                }}
                type="text"
                className="default-input"
                placeholder="شماره همراه یا ایمیل"
              />
            </div>
            <div className="input-group">
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                className="default-input"
                placeholder="رمز عبور"
              />
            </div>
            <div className="btn-container">
              <button
                type="submit"
                onClick={handleRequestLogin}
                className="btn-default"
              >
                ورود
              </button>
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
        </form>
      </div>
    </>
  );
}

// export default withRouter(Login);

const mapDispatchToProps = (dispatch) => {
  return {
      setPhoneNumber : (data) => dispatch(setPhoneNumber(data)),
      // setProfile : (data) => dispatch(setProfile(data)),
      loginSuccess : (data) => dispatch(loginSuccess(data)),
  }
}

const mapStateToProps = (store) => {
  return {
      auth : store.authReducer,
      panelReducer : store.panelReducer
  }
}


export default connect(mapStateToProps , mapDispatchToProps)(Login)
