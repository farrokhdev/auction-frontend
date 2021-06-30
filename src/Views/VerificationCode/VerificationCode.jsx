// import React,{useState,useContext} from "react";
import React,{useState} from "react";
import Logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../utils/index";
import {setToken} from "../../utils/utils";
import {connect} from 'react-redux';

function VerificationCode(props) {
  
  const [verify_code, setverify_code] = useState("")

  const handleRequestVerifyCode = (value)=>{
    
    let payload ={
      "user_name" :  props.auth.username,
      "verify_code" : verify_code,
    }
    axios.post(`${BASE_URL}/account/approve/` ,payload)
      .then(res=>{
        console.log("Verification",res);

        if(res.data.code === 200){
          setToken(res.data.data.result);
          window.location.href = "#/login"
          
          // setTimeout(() => {
          //   window.location.href = "#/register-set-password";
          // }, 1000);
          // history.push("/register-set-password")
        }
      })
      .catch(err=>{
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
        <form className="login-container">
          <Link to="/" className="logo">
            <img src={Logo} width="156" height="34" alt="اسمارت آکشن" />
          </Link>
          <h5 className="default titr text-center">
            لطفا کد تایید ارسال شده به ایمیل یا شماره همراه خود را در کادر زیر
            وارد کنید.
          </h5>
          <div className="login-block">
            <div className="main-title"></div>
            <div className="input-group">
              <input
              onChange={(e)=>{setverify_code(e.target.value)}}
                type="password"
                className="default-input"
                placeholder="کد تایید را وارد کنید"
              />
            </div>
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
        </form>
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