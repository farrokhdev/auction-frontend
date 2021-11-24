import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus, faTimes} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {Button, Form, Select} from "antd";
import {setAUCTION} from "../../redux/reducers/auction/auction.actions";
import {useDispatch, useSelector} from "react-redux";


function BidAddSuggest(props) {
    const {
        selectComponent,
        setSelectComponent,
        finalData,
        setFinalData,
        products,
        id,
        payment_method,
        setPayment_method
    } = props
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false)
    // const [data, setData] = useState({})
    const [listRecord, setListRecord] = useState([])
    const [range, setRange] = useState(0)
    const dispatch = useDispatch();
    const {steps,currency} = useSelector((state) => state.auctionReducer)
    useEffect(() => {
        form.setFieldsValue({currency})
        if (!steps.length) {
            form.setFieldsValue({minimum: 0})
        } else {
            form.setFieldsValue({minimum: steps[steps.length - 1].threshold})
            setRange(steps[steps.length - 1].threshold)
        }
    }, [])
    const onFinish = (values) => {
        if (!steps.length) {
            dispatch(setAUCTION({steps: [values]}))
        } else {
            dispatch(setAUCTION({steps: [...steps, values]}))
        }
        form.setFieldsValue({minimum: values.threshold, threshold: '', step: ''})
        setRange(values.threshold)
    }
    return (
        <>
            <Form onFinish={onFinish}
                  form={form}
                  wrapperCol={{span: 24}}>
                <div className="row">
                    <div className="col-xxxxl-8">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="input-group">
                                    <label className="default-lable">currency</label>
                                    <Form.Item
                                        className="w-100 mb-0"
                                        name="currency">
                                    <Select
                                        className="search-input w-100 fs-6"
                                        size="large"
                                        dropdownClassName="text-right"
                                        placeholder="Select the currency"
                                        onChange={value => {
                                            dispatch(setAUCTION({currency:value}))
                                        }}
                                    >
                                        {
                                            [{name_fa:"toman",name_en:"toman"},{name_fa:"dollar",name_en:"dollar"}].map((item, index) => (
                                                <Select.Option value={item.name_en}
                                                               key={index}>{item.name_fa} </Select.Option>
                                            ))
                                        }
                                    </Select>
                                    </Form.Item>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col">
                                        <div className="input-group">
                                            <label className="default-lable">Minimum price</label>
                                            <Form.Item
                                                className="w-100 mb-0"
                                                name="minimum"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: "This field is required",
                                                    },
                                                ]}>
                                                <input type="number" disabled={true} className="default-input"
                                                       style={{cursor: "not-allowed"}}
                                                       placeholder="Enter the minimum price you want."/>
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="input-group">
                                            <label className="default-lable">Maximum price</label>
                                            <Form.Item
                                                className="w-100 mb-0"
                                                name="threshold"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: "This field is required",
                                                    },
                                                    {
                                                        validator: (_, value) =>
                                                            Number(value) > Number(range) ? Promise.resolve() : Promise.reject(new Error(`enter ${range }  A number greater than `)),
                                                    },
                                                ]}>
                                                <input type="number" className="default-input"
                                                       placeholder="Enter the maximum price you want."/>
                                            </Form.Item>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group">
                                    <label className="default-lable">Increase step</label>
                                    <Form.Item
                                        className="w-100 mb-0"
                                        name="step"
                                        rules={[
                                            {
                                                required: true,
                                                message: "This field is required",
                                            },
                                        ]}>
                                        <input type="number" className="default-input"
                                               placeholder="Enter increase step."/>
                                    </Form.Item>
                                    <span className="unit">USD</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-start">
                            <Button className="add-row-danger" onClick={() => {
                                dispatch(setAUCTION({steps: []}))
                                setRange(0)
                                form.setFieldsValue({minimum: 0})
                            }}><FontAwesomeIcon className="ms-1"
                                                icon={faMinus}/> Delete all
                            </Button>
                            <Button className="add-row" htmlType="submit"><FontAwesomeIcon className="ms-1"icon={faPlus}/>
                             Add
                            </Button>
                        </div>


                    </div>
                </div>
            </Form>
            <div>
                <div className="table-responsive">
                {(steps && steps.length) ? <table className="panel-table create-auctions table">
                    <thead>
                    <tr>
                        <th>Number</th>
                        <th>Minimum price</th>
                        <th>Maximum price</th>
                        <th>Increase step</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        steps.map((item, i) => <tr>
                            <td>{i + 1}</td>
                            <td>{item.minimum}</td>
                            <td>{item.threshold}</td>
                            <td>{item.step}</td>
                        </tr>)
                    }
                    </tbody>
                </table> : ''}
                </div>
            </div>
        </>
    );
};

export default BidAddSuggest;