import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg";

function Resetpassword() {
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
              <h2 className="default titr">تنظیم مجدد رمز عبور</h2>
            </div>
            <div className="input-group">
              <input
                type="text"
                className="default-input"
                placeholder="رمز عبور"
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                className="default-input"
                placeholder="تکرار رمز عبور"
              />
            </div>
            <div className="btn-container">
              <button type="button" className="btn-default">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resetpassword;
