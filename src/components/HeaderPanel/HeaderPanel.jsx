import React from 'react'
import { Link } from "react-router-dom";
import logowhite from "../../images/logo-white.png";
import loginactive from "../../images/login-active.png";

function HeaderPanel() {
    return (
        
             <header>
        <div className="panel-header">
          <div className="panel-brand">
            <Link href="/">
              <img src={logowhite} width="139" height="30" alt="اسمارت آکشن" />
            </Link>
          </div>
          <div className="panel-head">
            <div className="d-block d-lg-none col-2 ">
              <img
                src="img/auction-white.svg"
                width="16"
                height="16"
                alt=""
                className="panel-menu"
              />
            </div>
            <div className="panel-title col-8">
              <h4 className="default">پروفایل</h4>
            </div>
            <div className="panel-info col-lg-4 col-2">
              <ul className="navbar-nav flex-row-reverse">
                <li className="nav-item">
                  <Link className="nav-link text-dark" to="/">
                    EN
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark" to="/">
                    <img
                      src={loginactive}
                      width="30"
                      height="30"
                      alt="ورود به اسمارت آکشن"
                    />
                    <span className="d-none d-lg-inline-block ">
                      نیما حیدری
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>   
        
    )
}

export default HeaderPanel; 