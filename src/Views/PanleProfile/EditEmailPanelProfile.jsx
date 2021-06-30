import React from 'react'

function EditEmailPanelProfile() {
    return (
        <>
                     <div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-group ">
                          <label className="default-lable">ایمیل</label>
                          <input
                            type="email"
                            className="default-input"
                            placeholder="ایمیل خود را وارد نمایید."
                            value=""
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
                        همکار گرامی، در این قسمت، بعد از اینکه کاربر ایمیل خود
                        را وارد نمود، قسمت بالا حذف شده و قسمت پایین نمایش داده
                        می شود. لطفا کلاس mrgt50 را در این قسمت حذف کنید.
                      </p>
                      <p className="darkgray">
                        ما یک کد به Ni****************@gmail.com ارسال کردیم ،
                        برای تأیید آدرس ایمیل خود کد را در زیر وارد کنید.
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

export default EditEmailPanelProfile; 