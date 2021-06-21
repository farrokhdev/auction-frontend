import React,{useState} from "react";
// import React,{useState,useContext} from "react";
import Logo from "../../images/logo.svg";
import { Link } from "react-router-dom";


import axios from "axios";
import {withRouter} from "react-router-dom"
import { BASE_URL } from "../../utils/index";
import {setToken ,Token} from "../../utils/utils";
// import AuthContext from "../../context/AuthContext";
import {connect} from 'react-redux';


function RegistersetPassword(props) {

  // const TodosContext = useContext(AuthContext);


  const [Password, setPassword] = useState("");
  const [PasswordCheck, setPasswordCheck] = useState("");
  const handleRequestSetPassword = (value)=>{
    let payload ={
      "mobile": props.auth.username,
      "verify_code": props.auth.otp,
      "password" : Password,
      "password_check" : PasswordCheck,
    }

    console.log("payload" ,payload);
    axios.post(`${BASE_URL}/account/recover-password/`, payload)
    .then(res=>{
      console.log("Confrim-Mobile" , res);

      if(res.data.code === 200){
        setToken(res.data.data.result);
        setTimeout(() => {
          window.location.href = "#/login"
        }, 1000);
        // history.push("/login")
      }
    })
    .catch(err=>{
      console.log("Error Message as Confrim-Mobile" , err);
    })

  }
  return (
    <>
      <div
        dir="rtl"
        className="container innercontainer align-items-center"
        id="login-page"
      >
        <div className="login-container">
          <Link to="/" className="logo">
            <img src={Logo} width="156" height="34" alt="اسمارت آکشن" />
          </Link>
          <form className="login-block">
            <div className="main-title">
              <h3 className="default titr">گذرواژه</h3>
            </div>
            <div className="input-group">
              <p className="mb-0"> 
                <strong>گذرواژه</strong>
              </p>
              <input
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
                type="password"
                className="default-input"
                placeholder="گذرواژه خود را وارد کنید"
              />
            </div>
            <div className="input-group">
              <p className="mb-0">
                <strong>تکرار گذرواژه</strong>
              </p>
              <input
                onChange={(e)=>{
                  setPasswordCheck(e.target.value)
                }}
                type="password"
                className="default-input"
                placeholder="گذرواژه خود را تکرار کنید"
              />
            </div>
            <div className="btn-container pt-5">
                <button
                  onClick={handleRequestSetPassword} 
                  type="button"
                  className="btn-default">
                  ثبت نام
                </button>
              {/* <Link to="/">
              </Link> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//       setPhoneNumber : (data) => dispatch(setPhoneNumber(data)),
//       loginSuccess : (data) => dispatch(loginSuccess(data)),
//   }
// }

const mapStateToProps = (store) => {
  return {
      auth : store.authReducer,
      panelReducer : store.panelReducer
  }
}


export default connect(mapStateToProps , null)(RegistersetPassword)