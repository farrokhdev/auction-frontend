import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Button, Form, Select } from "antd";
import { setAUCTION } from "../../redux/reducers/auction/auction.actions";
import { useDispatch, useSelector } from "react-redux";


const PriceAddValidate = (props) => {
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
    const [data, setData] = useState({})
    const [listRecord, setListRecord] = useState([])
    const [range, setRange] = useState(0)
    const dispatch = useDispatch();
    const { validations_auction } = useSelector((state) => state.auctionReducer)
    useEffect(() => {
        if (!validations_auction.length) {
            form.setFieldsValue({ minimum: 0 })
        } else {
            form.setFieldsValue({ minimum: validations_auction[validations_auction.length - 1].threshold })
            setRange(validations_auction[validations_auction.length - 1].threshold)
        }
    }, [])
    const onFinish = (values) => {

        if (!validations_auction.length) {
            dispatch(setAUCTION({ validations_auction: [values] }))
        } else {
            dispatch(setAUCTION({ validations_auction: [...validations_auction, values] }))
        }
        form.setFieldsValue({ minimum: values.threshold, threshold: '', sufficient_inventory: '' })
        setRange(values.threshold)
    }
    return (
        <>
            <Form onFinish={onFinish}
                form={form}
                // initialValues={{start_time:moment("1398-02-02","jYYYY-jMM-jDD")}}
                wrapperCol={{ span: 24 }}>
                <div className="row">
                    <div className="col-xxxxl-8">
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
                                                    style={{ cursor: "not-allowed" }}
                                                    placeholder="Enter minimum price." />
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
                                                            Number(value) > Number(range) ? Promise.resolve() : Promise.reject(new Error(`
                                                            enter the ${range} number greater than`)),
                                                    },
                                                ]}>
                                                <input type="number" className="default-input"
                                                    placeholder="Enter maximum price." />
                                            </Form.Item>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group">
                                    <label className="default-lable"> Increase step</label>
                                    <Form.Item
                                        className="w-100 mb-0"
                                        name="sufficient_inventory"
                                        rules={[
                                            {
                                                required: true,
                                                message: "This field is required",
                                            },
                                        ]}>
                                        <input type="number" className="default-input"
                                            placeholder="Enter increase step." />
                                    </Form.Item>
                                    <span className="unit">USD</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-start">
                            <Button className="add-row-danger" onClick={() => {
                                dispatch(setAUCTION({ validations_auction: [] }))
                                setRange(0)
                                form.setFieldsValue({ minimum: 0 })
                            }}>
                                <FontAwesomeIcon className="ms-1" icon={faMinus} />
                                Delete all
                            </Button>
                            <Button className="add-row" htmlType="submit" >
                                <FontAwesomeIcon className="ms-1" icon={faPlus} /> Add
                            </Button>
                        </div>


                    </div>
                </div>
            </Form>
            <div className="col-12">
                <div className="table-responsive">
                    {(validations_auction && validations_auction.length) ? <table className="panel-table create-auctions table">
                        <thead>
                            <tr>
                                <th>شماره</th>
                                <th>کمترین قیمت</th>
                                <th> بیشترین قیمت</th>
                                <th> واحد افزایش</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                validations_auction.map((item, i) => <tr>
                                    <td>{i + 1}</td>
                                    <td>{item.minimum}</td>
                                    <td>{item.threshold}</td>
                                    <td>{item.sufficient_inventory}</td>
                                </tr>)
                            }
                        </tbody>
                    </table> : ''}
                </div>
            </div>
        </>
    );
};

export default PriceAddValidate;


