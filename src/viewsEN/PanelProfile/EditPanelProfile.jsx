import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Row, Col, message, Spin } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import {EDIT_PROFILE} from "../../utils/constant";
import {connect} from 'react-redux';
import {setProfileID} from '../../redux/reducers/profile/profile.actions';


function EditPanelProfile(props) {

    const [loading, setLoading] = useState(false)
    const [form] = Form.useForm();
    const history = useHistory();
    const params = useParams();
    const {data} = props;
    const {setActiveKey} = props;

  function err_msg_resolver(res_body) {
        if (res_body.code == 201 || res_body.code == 200)
            return res_body.data.error_message
        else {
            return res_body.message
        }
    }

    

    const onFinish = (values) => {
        handleSendProfileData(values)
    }
    const handleSendProfileData = (values) => {
        setLoading(true)
        axios.put(`${BASE_URL}${EDIT_PROFILE}`, {
            ...values, "home_auction_location": {
                "address" : values?.address_en,
                "address_en": values?.address_en 
            }
        })
        .then(resp => {
            setLoading(false)
            if (resp.data.code === 200) {
                props.setProfileID({ ...props.state, id: resp.data.data.result.id })
                message.success("Your profile has been successfully edited");
                if (params?.id && params?.id !== "check" && resp.data.data.result.complete_profile) {
                    history.push(`/en/buyer-register/${params?.id}`)
                }
            }
        })
        .catch(err => {
            setLoading(false)
            console.error(err);
            // message.error("دوباره تلاش کنید")
            message.error({
                content: err_msg_resolver(err?.response?.data),
                className: 'text-danger',
                style: {
                    marginTop: '10vh',
                },
            })
        })
    }
    
    
    useEffect(() => {
        form.setFieldsValue(data)
    }, [data])
    
    
    return (
        <>
            <Spin spinning={loading}>
                <Form
                    onFinish={onFinish}
                    form={form}
                    wrapperCol={{ span: 24 }}>
                    <div className="">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="input-group w-100">
                                    <label className="default-lable">First name</label>
                                    <Form.Item
                                        className="w-100"
                                        name="first_name_en"
                                        rules={[
                                            {
                                                required: true,
                                                message: "This field is required",
                                            }
                                        ]}>
                                        <Input className="default-input"
                                            placeholder="Enter your first name." />
                                    </Form.Item>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group">
                                    <label className="default-lable">Last name</label>
                                    <Form.Item
                                        className="w-100"
                                        name="last_name_en"
                                        rules={[
                                            {
                                                required: true,
                                                message: "This field is required",
                                            }
                                        ]}>
                                        <Input className="default-input"
                                            placeholder="Enter your last name." />
                                    </Form.Item>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group notapproved">
                                    <label className="default-lable">Phone number</label>
                                    {data?.mobile && data?.mobile.length ?
                                    <>
                                        <Form.Item
                                            className="w-100"

                                            name="mobile">
                                            <Input className="default-input"
                                                placeholder="Enter the desired mobile number."
                                                disabled />

                                        </Form.Item>
                                        <span className="approved input-state">Accepted</span>
                                    </>
                                     : 
                                     <button onClick={() => setActiveKey("3")} className="input-note text-muted">
                                            Click here to change and confirm your mobile number.
                                        </button>
                                    } 
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group notapproved">
                                    <label className="default-lable">Email</label>
                                   {data?.email && data?.email?.length ? 
                                    <>
                                        <Form.Item
                                            className="w-100"
                                            name="email">
                                            <Input className="default-input"
                                                placeholder="Enter your email."
                                                disabled />
                                        </Form.Item>
                                        <span className="approved input-state">Accepted</span>
                                    </>
                                     :
                                        <button onClick={() => setActiveKey("4")} className="input-note text-muted">
                                           Click here to change and confirm your Email.
                                        </button>
                                    } 


                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group">
                                    <label className="default-lable">Postal code</label>
                                    <Form.Item
                                        className="w-100"
                                        name="postal_code"
                                        rules={[
                                            {
                                                pattern: /\b(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}\b/,
                                                message: " Enter the correct postcode",
                                            },
                                        ]}
                                    >
                                        <Input type="number" className="default-input"
                                            placeholder="Enter your Postal code." />
                                    </Form.Item>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group">
                                    <label className="default-lable">National code</label>
                                    <Form.Item
                                        className="w-100"
                                        name="national_code"
                                        rules={[
                                            {
                                                min: 10,
                                                message: "Enter at minimum 10 digits ",
                                            },
                                            {
                                                max: 11,
                                                message: "Enter a maximum of 11 digits ",
                                            },
                                        ]}
                                    >
                                        <Input className="default-input"
                                            placeholder="Enter your national code" />
                                    </Form.Item>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="input-group">
                                    <label className="default-lable">Address</label>
                                    <Form.Item
                                        className="w-100"
                                        name="address_en">
                                        <TextArea className="default-input"
                                            placeholder="Enter your address." />
                                    </Form.Item>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 button-group">
                                <Button className="btn-default" htmlType="submit">
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </div>
                </Form>
            </Spin>
        </>
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