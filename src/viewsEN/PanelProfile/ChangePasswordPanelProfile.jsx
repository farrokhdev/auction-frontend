import React, { useState } from 'react'
import { Button, Form, Input, message, Spin } from 'antd';

function ChangePasswordPanelProfile() {
    const [form] = Form.useForm();

    return (
        <>
            {/* <Spin spinning={loading}> */}
            <Form
                // onFinish={onFinish}
                form={form}
                wrapperCol={{ span: 24 }}>
                <div className="">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="input-group ">
                                <label className="default-lable">Current password</label>
                                <Form.Item
                                    className="w-100"
                                    name="old_password"
                                    rules={[
                                        {
                                            required: true,
                                            message: "This field is required",
                                        },
                                        {
                                            min: 8,
                                            message: "8 characters required",
                                        }
                                    ]}>
                                    <Input className="default-input"
                                        type="password"
                                        placeholder="Enter current password." />

                                </Form.Item>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="input-group ">
                                <label className="default-lable">New password</label>
                                <Form.Item
                                    className="w-100 mb-0"
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: "This field is required",
                                        },
                                        {
                                            min: 8,
                                            message: "8 characters required",
                                        }
                                    ]}>
                                    <Input className="default-input"
                                        type="password"
                                        placeholder="Enter new password" />
                                </Form.Item>
                                <small className="text-muted pr-2 pt-2">Password must include English characters and unordered numbers :example312 </small>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="input-group ">
                                <label className="default-lable">
                                    Repeat new password
                                </label>
                                <Form.Item
                                    className="w-100 mb-0"
                                    name="password_check"
                                    rules={[
                                        {
                                            required: true,
                                            message: "This field is required",
                                        },
                                        {
                                            min: 8,
                                            message: "8 characters required",
                                        }
                                    ]}>
                                    <Input className="default-input"
                                        type="password"
                                        placeholder="Repeat new password" />
                                </Form.Item>
                                <small className="text-muted pr-2 pt-2">Password must include English characters and unordered numbers :example312 </small>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="button-group col-md-6">
                            <Button className="btn-default" htmlType="submit">
                                submit
                            </Button>
                        </div>
                    </div>
                </div>
            </Form>
            {/* </Spin>    */}
        </>
    )
}

export default ChangePasswordPanelProfile;