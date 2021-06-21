import axios from "axios";
import React,{useState} from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header";
import { BASE_URL } from "../../utils";
import {withRouter} from "react-router-dom";
import {setToken} from "../../utils/utils";
import {setProfile} from '../../redux/reducers/auth/auth.actions'
import {connect} from 'react-redux';


function Signup(props) {

  const [userName, setuserName] = useState("");
  const [Password, setPassword] = useState("");
  const [confirmedPassword, setconfirmedPassword] = useState("")

  const handleRequestSignUp = (value)=>{

    let payload = {

      "username" : userName,
      "password" : Password,
      "confirmed_password": confirmedPassword
    }
    console.log(payload)
    axios.post(`${BASE_URL}/account/register/`, payload)
      .then(resp=>{
        console.log("Sign Up" , resp);
        if(resp.data.code === 201){
          setToken(resp.data.data.result);
          props.setProfile({username : payload.username})

          setTimeout(() => {
            window.location.href = "#/verification-code"
          }, 700);
      }
      })
      .catch(err=>{
        console.log("Error Message" , err);
      })
  }

  return (
    <div dir="rtl">
      <Header newStyle={{ boxShadow: " none" }} />
      <div class="container containercs align-items-center" id="signup-page">
        <div class="inner-cover signup">
          <form class="signup-container">
            <div class="login-block">
              <div class="main-title">
                <h2 class="default titr">ثبت نام</h2>
              </div>
              <p>
                با ثبت نام و ورود به سایت شما<Link to="/"> قوانین </Link> و
                <Link to="/"> شرایط استفاده </Link>را پذیرفته‌اید.
              </p>
              <div class="input-group">
                <input
                  onChange={(e)=>{
                    setuserName(e.target.value);
                  }}
                  type="text"
                  class="default-input"
                  placeholder="شماره همراه یا ایمیل"
                />
              </div>
              <div class="input-group">
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  class="default-input"
                  placeholder="رمز عبور"
                />
                  <input
                  onChange={(e)=>{
                    setconfirmedPassword(e.target.value);
                  }}
                  type="password"
                  class="default-input mt-3"
                  placeholder="تکرار رمز عبور"
                />
              </div>
              <div class="btn-container">
                   <button
                      onClick={handleRequestSignUp}
                      type="submit"
                      class="btn-default"
                      >
                    ثبت نام
             </button>
                {/* <Link to="/verification-code">
                </Link> */}
              </div>
              <div class="s-footer-block">
                <div class="or-divider">
                  <span>یا</span>
                </div>
                <Link to="/" class="btn-google">
                  ثبت نام با گوگل
                </Link>
              </div>
            </div>
            <p class="l-signup">
              قبلا ثبت نام کرده‌اید؟<Link to="/login"> ورود</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}


const mapDispatchToProps = (dispatch) => {
  return {
      setProfile : (data) => dispatch(setProfile(data)),
  }
}

const mapStateToProps = (store) => {
  return {
      auth : store.authReducer,
  }
}


export default connect(mapStateToProps , mapDispatchToProps)(Signup)