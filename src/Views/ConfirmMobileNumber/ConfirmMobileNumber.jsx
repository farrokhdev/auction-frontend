import React , {useState} from "react";
import Logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

import axios from "axios";
// import {withRouter} from "react-router-dom"
import { BASE_URL } from "../../utils/index";
import {setToken} from "../../utils/utils";
// import AuthContext from "../../context/AuthContext";
import {connect} from 'react-redux';
import { getOtp } from "../../redux/reducers/auth/auth.actions";

function ConfirmMobileNumber(props) {

  // const TodosContext = useContext(AuthContext);

  // const [mobile, setmobile] = useState("");
  const [verify_code, setverify_code] = useState("");

  const handleRequestConfrimMobile = (value)=>{
    let payload={
      "mobile": props.auth.username,
      "verify_code": verify_code,
    }

    axios.post(`${BASE_URL}/account/approve-mobile/` , payload)
      .then(res=>{
        console.log("Confrim-Mobile" , res);

        if(res.data.code === 200){
          setToken(res.data.data.result);
          props.getOtp({otp : verify_code})
          setTimeout(() => {
            window.location.href = "#/register-set-password"
          }, 1000);
          // history.push("/register-set-password")
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
          <div className="login-block">
            <div className="main-title">
              <h4 className="default titr">تایید شماره تلفن همراه</h4>
            </div>
            <div className="input-group">
              <p className="mb-0">
                <strong>کد تایید</strong>
              </p>
              <input
                onChange={(e)=>setverify_code(e.target.value)
                }
                type="text"
                className="default-input"
                placeholder="کد تایید خود را وارد کنید"
              />
            </div>
            <div className="btn-container pt-5">
                <button
                  onClick={handleRequestConfrimMobile}
                  type="submit"
                  className="btn btn-outline-secondary rounded-pill px-3 "
                >
                  ارسال کد تایید
                </button>
              {/* <Link to="/register-set-password">
              </Link> */}
            </div>
            <div className="text-center pt-3">
              <Link to="/password-recovery" className=" text-dark ">
                تغییر شماره تلفن همراه
              </Link>
            </div>
          </div>
        </div>
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