import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.css";

import logowhite from "../../images/logo-white.png";
import loginactive from "../../images/login-active.png";
import { Link } from "react-router-dom";
import HeaderPanel from "../../components/HeaderPanel";
import PanelSidebar from "../../components/PanelSidebar";
import EditPanelProfile from "./EditPanelProfile";
import ChangePasswordPanelProfile from "./ChangePasswordPanelProfile";
import EditPhoneNumberPanelProfile from "./EditPhoneNumberPanelProfile";
import EditEmailPanelProfile from "./EditEmailPanelProfile";

function PanelProfile() {
  return (
    <div dir="rtl">
      <HeaderPanel/>
      <main>
        <div className="panel-main">
          <PanelSidebar/>
          <div className="panel-body">
            <div className="panel-container">
              <div className="alert-container col-md-4">
                <div className="alert alert-success" role="alert">
                  <FontAwesomeIcon icon={faCheckCircle} />
                  رمز عبور با موفقیت تغییر یافت!
                </div>
                <div className="alert alert-danger" role="alert">
                  <FontAwesomeIcon icon={faTimesCircle} />
                  کد ورود اشتباه است!
                </div>
                <div className="alert alert-warning" role="alert">
                  <FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>
                  کد حداقل باید شامل 6 کارکتر باشد.
                </div>
              </div>
              <div className="col-xxl-8">
                <ul
                  className="nav nav-tabs justify-content-star main-tab"
                  id="profile-tab"
                  role="tablist"
                >
                  <li className="nav-item " role="presentation">
                    <button
                      className="nav-link active"
                      id="tab-11"
                      data-bs-toggle="tab"
                      data-bs-target="#profiletab1"
                      type="button"
                      role="tab"
                      aria-controls="profiletab1"
                      aria-selected="true"
                    >
                      ویرایش پروفایل
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="tab-21"
                      data-bs-toggle="tab"
                      data-bs-target="#profiletab2"
                      type="button"
                      role="tab"
                      aria-controls="profiletab2"
                      aria-selected="false"
                    >
                      تغییر رمز عبور
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="tab-31"
                      data-bs-toggle="tab"
                      data-bs-target="#profiletab3"
                      type="button"
                      role="tab"
                      aria-controls="profiletab3"
                      aria-selected="false"
                    >
                      ویرایش شماره همراه
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="tab-41"
                      data-bs-toggle="tab"
                      data-bs-target="#profiletab4"
                      type="button"
                      role="tab"
                      aria-controls="profiletab4"
                      aria-selected="false"
                    >
                      ویرایش ایمیل
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="profile-tab-content">
                  <EditPanelProfile/>
                  <ChangePasswordPanelProfile/>
                  <EditPhoneNumberPanelProfile/>
                  <EditEmailPanelProfile/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PanelProfile;
