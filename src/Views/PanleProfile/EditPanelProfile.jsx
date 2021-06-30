import React from 'react'

function EditPanelProfile() {
    return (
        <>
                <div
                    className="tab-pane fade  show active"
                    id="profiletab1"
                    role="tabpanel"
                    aria-labelledby="profiletab1-tab"
                >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-group">
                          <label className="default-lable">نام</label>
                          <input
                            type="text"
                            className="default-input"
                            placeholder="نام خود را وارد نمایید."
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-group">
                          <label className="default-lable">نام خانوادگی</label>
                          <input
                            type="text"
                            className="default-input"
                            placeholder="نام خانوادگی خود را وارد نمایید."
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-group">
                          <label className="default-lable">شماره همراه</label>
                          <input
                            type="tel"
                            className="default-input"
                            placeholder="شماره موبایل مورد نظر را وارد نمایید."
                            value="+98 912 506 3365"
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-group ">
                          <label className="default-lable">ایمیل</label>
                          <input
                            type="email"
                            className="default-input"
                            placeholder="ایمیل خود را وارد نمایید."
                            value="Nima.heirdari@gmail.com"
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-group">
                          <label className="default-lable">کدپستی</label>
                          <input
                            type="text"
                            className="default-input"
                            placeholder="کد پستی خود را وارد نمایید."
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="input-group">
                          <label className="default-lable">آدرس</label>
                          <textarea
                            rows="3"
                            className="default-input"
                            placeholder="آدرس خود را وارد نمایید."
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 button-group">
                        <button type="button" className="btn-default">
                          ثبت
                        </button>
                      </div>
                    </div>
                  </div>   
        </>
    )
}

export default EditPanelProfile; 