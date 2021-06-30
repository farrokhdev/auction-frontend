import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEyeSlash} from "@fortawesome/free-solid-svg-icons";

function ChangePasswordPanelProfile() {
    return (
        <>
                <div
                    className="tab-pane fade"
                    id="profiletab2"
                    role="tabpanel"
                    aria-labelledby="profiletab2-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-group ">
                          <label className="default-lable">رمز عبور فعلی</label>
                          <input
                            type="password"
                            className="default-input is-valid"
                            placeholder="رمز عبور فعلی خود را وارد نمایید."
                          />
                          <span className="password-visibility ">
                            <FontAwesomeIcon icon={faEyeSlash} />
                          </span>
                          <div className="input-feedback valid-feedback">
                            رمز عبور می‌بایست شامل حداقل 8 کاراکتر باشد.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-group ">
                          <label className="default-lable">رمز عبور جدید</label>
                          <input
                            type="password"
                            className="default-input is-invalid"
                            placeholder="رمز عبور جدید را وارد نمایید."
                          />
                          <span className="password-visibility ">
                            <FontAwesomeIcon icon={faEyeSlash} />
                          </span>
                          <div className="input-feedback invalid-feedback">
                            رمز عبور می‌بایست شامل حداقل 8 کاراکتر باشد.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-group ">
                          <label className="default-lable">
                            تکرار رمز عبور جدید
                          </label>
                          <input
                            type="password"
                            className="default-input"
                            placeholder="رمز عبور جدید خود را دوباره وارد نمایید."
                          />
                          <span className="password-visibility ">
                            <FontAwesomeIcon icon={faEyeSlash} />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="button-group col-md-6">
                        <button type="button" className="btn-default">
                          ثبت
                        </button>
                      </div>
                    </div>
                  </div>  
        </>
    )
}

export default ChangePasswordPanelProfile;