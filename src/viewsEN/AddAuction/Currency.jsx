import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Select, Spin, Checkbox } from "antd";
import DatePicker from 'react-datepicker2';
import { Link } from "react-router-dom";
import moment from 'moment-jalaali'
import { setAUCTION } from "../../redux/reducers/auction/auction.actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";



function Currency(props) {

    const { selectComponent, setSelectComponent, finalData, setFinalData } = props
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})
    const [type, setType] = useState("")
    const dispatch = useDispatch();
    useEffect(() => {
    }, [])

    const onFinish = (values) => {
        // console.log(values)
        // setFinalData({...finalData, ...values})
        setSelectComponent(selectComponent + 1)
    }

    return (
        <Form onFinish={onFinish}
            form={form}
            wrapperCol={{ span: 24 }}>
            <div className="row">
                <div className="col-12">
                    <div className="form-check sm-mrgt35">
                        <Checkbox value=""
                            style={{ paddingRight: '10px' }}
                            id="checkbox41" />
                        <label className="form-check-label" htmlFor="checkbox41">
                            Daily dollar rate
                        </label>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="input-group">
                        <label className="default-lable">Conversion rate from IRR to USD</label>
                        <input type="text" className="default-input" placeholder="Enter conversion rate." />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="button-group">
                        <Button type="button" className="btn-gray" onClick={() => {
                            setSelectComponent(selectComponent - 1)
                        }}>Back
                        </Button>
                        <Button className="btn-default" htmlType="submit">Continue</Button>
                    </div>
                </div>
            </div>
        </Form>
    );
};

export default Currency;

