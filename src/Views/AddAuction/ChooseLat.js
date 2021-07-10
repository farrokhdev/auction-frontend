import React, {useEffect, useState} from 'react';
import {Button, Form, Input, Select, Spin} from "antd";
import DatePicker from 'react-datepicker2';
import {Link} from "react-router-dom";
import moment from 'moment-jalaali'
import {setAUCTION} from "../../redux/reducers/auction/auction.actions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";



const ChooseLat = (props) => {

    const {selectComponent, setSelectComponent, finalData, setFinalData} = props
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
              wrapperCol={{span: 24}}>
            <div className="row">
                <div className="col-md-4">
                    <div className="input-group">
                        <label className="default-lable">تاریخ حراج<span className="auction-num">#1</span></label>
                        <input type="date" className="default-input" placeholder="تاریخ شروع را وارد نمایید."/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="input-group">
                        <label className="default-lable">شروع از شماره لت</label>
                        <input type="text" className="default-input" placeholder="شماره لت را وارد نمایید." value="101"/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="input-group">
                        <label className="default-lable">تا شماره لت</label>
                        <input type="text" className="default-input" placeholder="شماره لت را وارد نمایید." value="200"/>
                    </div>
                </div>
            </div>
            <div className="text-start">
                <Button className="add-row-danger" onClick={() => {
                    dispatch(setAUCTION({bid_steps: []}))
                    // setRange(0)
                    form.setFieldsValue({minimum: 0})
                }}><FontAwesomeIcon className="ms-1"
                                    icon={faMinus}/> حذف کل
                </Button>
                <Button className="add-row" htmlType="submit"><FontAwesomeIcon className="ms-1"
                                                                               icon={faPlus}/> افزودن
                </Button>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="button-group">
                        <Button type="button" className="btn-gray" onClick={() => {
                            setSelectComponent(selectComponent - 1)
                        }}>بازگشت
                        </Button>
                        <Button className="btn-default" htmlType="submit">ادامه</Button>
                    </div>
                </div>
            </div>
        </Form>
    );
};

export default ChooseLat;
