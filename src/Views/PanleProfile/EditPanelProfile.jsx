import React, {useEffect, useState} from 'react'
import {Button, Form, Input, Row, Col, message, Spin} from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import {EDIT_PROFILE} from "../../utils/constant";
import {Link, useHistory, useParams} from "react-router-dom";
import {connect} from 'react-redux';
import {setProfileID} from '../../redux/reducers/profile/profile.actions';

function EditPanelProfile(props) {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false)
    const {data} = props;
    const {setActiveKey} = props;
    const history = useHistory();
    const params = useParams();
    const onFinish = (values) => {
        sendData(values)
    }

    function err_msg_resolver(res_body) {
        if (res_body.code == 201 || res_body.code == 200)
            return res_body.data.error_message
        else {
            return res_body.message
        }
    }

    useEffect(() => {
        form.setFieldsValue(data)
    }, [data])


    console.log("props.profile==>> " ,params?.id)

    const sendData = (values) => {
        setLoading(true)
        axios.put(`${BASE_URL}${EDIT_PROFILE}`, {
            ...values, "home_auction_location": {
                "address_en": values?.address ,
                "address": values?.address 
            }
        })
            .then(resp => {
                setLoading(false)
                if (resp.data.code === 200) {
                    props.setProfileID({...props.state, id: resp.data.data.result.id})
                    message.success("پروفایل شما با موفقیت ویرایش شد");
                    if (params?.id && params?.id!=="check" && resp.data.data.result.complete_profile) {
                        history.push(`/buyer-register/${params?.id}`)
                    }
                }
            })
            .catch(err => {
                setLoading(false)
                console.error(err);
                // message.error("دوباره تلاش کنید")
                message.error({
                    content: err_msg_resolver(err.response.data),
                    className: 'text-danger',
                    style: {
                        marginTop: '10vh',
                    },
                })
            })
    }

    return (
        <Spin spinning={loading}>
            <Form onFinish={onFinish}
                  form={form}
                  wrapperCol={{span: 24}}>

                <div className="">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="input-group w-100">
                                <label className="default-lable">نام</label>
                                <Form.Item
                                    className="w-100"
                                    name="first_name"
                                    rules={[
                                        {
                                            required: true,
                                            message: "تکمیل این فیلد ضروری است",
                                        }
                                    ]}>
                                    <Input className="default-input"
                                           placeholder="نام خود را وارد نمایید."/>
                                </Form.Item>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="input-group">
                                <label className="default-lable">نام خانوادگی</label>
                                <Form.Item
                                    className="w-100"
                                    name="last_name"
                                    rules={[
                                        {
                                            required: true,
                                            message: "تکمیل این فیلد ضروری است",
                                        }
                                    ]}>
                                    <Input className="default-input"
                                           placeholder="نام خانوادگی خود را وارد نمایید."/>
                                </Form.Item>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="input-group notapproved">
                                <label className="default-lable">شماره همراه</label>
                                {data?.mobile && data?.mobile.length ?
                                    <>
                                        <Form.Item
                                            className="w-100"

                                            name="mobile">
                                            <Input className="default-input"
                                                   placeholder="شماره موبایل مورد نظر را وارد نمایید."
                                                   disabled/>

                                        </Form.Item>
                                        <span className="approved input-state">تایید شده</span>
                                    </>
                                    :
                                    <button onClick={() => setActiveKey("3")} className="input-note text-muted">
                                        برای تغییر و تایید شماره موبایل خود اینجا کلیک کنید.
                                    </button>
                                }
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="input-group notapproved">
                                <label className="default-lable">ایمیل</label>
                                {data?.email && data?.email?.length ?
                                    <>
                                        <Form.Item
                                            className="w-100"
                                            name="email">
                                            <Input className="default-input"
                                                   placeholder="ایمیل خود را وارد نمایید."
                                                   disabled/>
                                        </Form.Item>
                                        <span className="approved input-state">تایید شده</span>
                                    </>
                                    :
                                    <button onClick={() => setActiveKey("4")} className="input-note text-muted">
                                        برای تغییر و تایید ایمیل خود اینجا کلیک کنید.
                                    </button>
                                }


                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="input-group">
                                <label className="default-lable">کدپستی</label>
                                <Form.Item
                                    className="w-100"
                                    name="postal_code"
                                    rules={[
                                        {
                                            pattern: /\b(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}\b/,
                                            message: " کدپستی صحیح وارد کنید",
                                        },
                                    ]}
                                >
                                    <Input type="number" className="default-input"
                                           placeholder="کد پستی خود را وارد نمایید."/>
                                </Form.Item>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="input-group">
                                <label className="default-lable">کدملی</label>
                                <Form.Item
                                    className="w-100"
                                    name="national_code"
                                    rules={[
                                        {
                                            min: 10,
                                            message: "حداقل 10 رقم وارد کنید ",
                                        },
                                        {
                                            max: 11,
                                            message: "حداکثر 11 رقم وارد کنید ",
                                        },
                                    ]}
                                >
                                    <Input className="default-input"
                                           placeholder="کد ملی خود را وارد نمایید."/>
                                </Form.Item>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="input-group">
                                <label className="default-lable">آدرس</label>
                                <Form.Item
                                    className="w-100"
                                    name="address">
                                    <TextArea className="default-input"
                                              placeholder="آدرس خود را وارد نمایید."/>
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 button-group">
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

const mapDispatchToProps = (dispatch) => {
    return {
        setProfileID: (data) => dispatch(setProfileID(data)),
    }
}

const mapStateToProps = (store) => {
    return {
        profile: store.profileReducer,
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditPanelProfile)
