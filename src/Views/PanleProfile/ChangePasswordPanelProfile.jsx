import React, {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {Button, Form, Input, message, Spin} from "antd";
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import {CHANGE_PASSWORD} from "../../utils/constant";

const ChangePasswordPanelProfile=()=> {
  const [form] = Form.useForm();
  const [loading,setLoading]=useState(false)
  const onFinish = (values) => {
    console.log(values)
    sendData(values)
  }
  const sendData = (values) => {
    setLoading(true)
    axios.post(`${BASE_URL}${CHANGE_PASSWORD}`,values)
        .then(resp => {
          setLoading(false)
          if (resp.data.code === 200) {
            message.success("پروفایل شما با موفقیت ویرایش شد")
          }
        })
        .catch(err => {
          setLoading(false)
          console.error(err);
          message.error("دوباره تلاش کنید")
        })
  }
    return (
        <Spin spinning={loading}>
          <Form onFinish={onFinish}
                form={form}
                wrapperCol={{span: 24}}>
                <div
                    className=""
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-group ">
                          <label className="default-lable">رمز عبور فعلی</label>
                          <Form.Item
                              className="w-100"
                              name="old_password"
                              rules={[
                                {
                                  required: true,
                                    message: "تکمیل این فیلد ضروری است",
                                }
                              ]}>
                            <Input className="default-input"
                                   type="password"
                                   placeholder="رمز عبور فعلی خود را وارد نمایید."/>
                          {/*  <span className="password-visibility ">*/}
                          {/*  <FontAwesomeIcon icon={faEyeSlash} />*/}
                          {/*</span>*/}
                          </Form.Item>
                          {/*<input*/}
                          {/*  type="password"*/}
                          {/*  className="default-input is-valid"*/}
                          {/*  placeholder="رمز عبور فعلی خود را وارد نمایید."*/}
                          {/*/>*/}

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
                          <Form.Item
                              className="w-100"
                              name="password"
                              rules={[
                                {
                                  required: true,
                                    message: "تکمیل این فیلد ضروری است",
                                }
                              ]}>
                            <Input className="default-input"
                                   type="password"
                                   placeholder="رمز عبور جدید را وارد نمایید"/>
                          {/*  <span className="password-visibility ">*/}
                          {/*  <FontAwesomeIcon icon={faEyeSlash} />*/}
                          {/*</span>*/}
                          </Form.Item>
                          {/*<input*/}
                          {/*  type="password"*/}
                          {/*  className="default-input is-invalid"*/}
                          {/*  placeholder="رمز عبور جدید را وارد نمایید."*/}
                          {/*/>*/}
                          {/*<span className="password-visibility ">*/}
                          {/*  <FontAwesomeIcon icon={faEyeSlash} />*/}
                          {/*</span>*/}
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
                          <Form.Item
                              className="w-100"
                              name="password_check"
                              rules={[
                                {
                                  required: true,
                                    message: "تکمیل این فیلد ضروری است",
                                }
                              ]}>
                            <Input className="default-input"
                                   type="password"
                                   placeholder="رمز عبور جدید خود را دوباره وارد نمایید"/>
                          {/*  <span className="password-visibility ">*/}
                          {/*  <FontAwesomeIcon icon={faEyeSlash} />*/}
                          {/*</span>*/}
                          </Form.Item>
                          {/*<input*/}
                          {/*  type="password"*/}
                          {/*  className="default-input"*/}
                          {/*  placeholder="رمز عبور جدید خود را دوباره وارد نمایید."*/}
                          {/*/>*/}
                          {/*<span className="password-visibility ">*/}
                          {/*  <FontAwesomeIcon icon={faEyeSlash} />*/}
                          {/*</span>*/}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="button-group col-md-6">
                        <Button className="btn-default" htmlType="submit">
                          ثبت
                        </Button>
                      </div>
                    </div>
                  </div>
          </Form>
        </Spin>
    )
}

export default ChangePasswordPanelProfile;