import React from 'react'

function EditPhoneNumberPanelProfile() {
    return (
        <>
                       <div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-group">
                          <label className="default-lable">شماره همراه</label>
                          <input
                            type="tel"
                            className="default-input"
                            placeholder="شماره موبایل خود را وارد نمایید."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 button-group">
                        <button type="button" className="btn-default">
                          ثبت
                        </button>
                      </div>
                    </div>
                    <div className="row mrgt50">
                      <p className="darkgray dir-rtl">
                        همکار گرامی، در این قسمت، بعد از اینکه کاربر شماره تماس
                        خود را وارد نمود، قسمت بالا حذف شده و قسمت پایین نمایش
                        داده می شود. لطفا کلاس mrgt50 را در این قسمت حذف کنید.
                      </p>
                      <p className="darkgray">
                        ما یک کد به +98 912 ***** 9 ارسال کردیم ، برای تأیید
                        شماره تلفن خود ، کد را در زیر وارد کنید.
                      </p>
                      <div className="col-md-6">
                        <div className="input-group ">
                          <label className="default-lable">کد تایید</label>
                          <input
                            type="text"
                            className="default-input"
                            placeholder="کد تایید را اینجا وارد نمایید."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 button-group">
                        <button type="button" className="btn-default">
                          تایید
                        </button>
                      </div>
                    </div>
                  </div>
        </>
    )
}

export default EditPhoneNumberPanelProfile;