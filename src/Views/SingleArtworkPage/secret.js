import React, {useEffect, useState} from 'react';
import axios from "../../utils/request";
import {BASE_URL, WEB_SOCKET_BASE_URL} from "../../utils";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {w3cwebsocket as W3CWebSocket} from "websocket";
import {Button, Form, Spin,message} from "antd";
import {ADD_AUCTION, BID, HOME_AUCITONS, WEB_SOCKET_BID} from "../../utils/constant";


const Secret = ({artwork}) => {
    const [loading, setLoading] = useState(false)
    const [auction, setAuction] = useState({})
    const [steps, setSteps] = useState([])
    const [currentValue, setCurrentValue] = useState(0)
    const [currentPrice, setCurrentVPrice] = useState(0)
    const [currentSuggestValue, setCurrentSuggestValue] = useState(0)
    const {is_logged_in} = useSelector((state) => state.authReducer)
    const [form] = Form.useForm();


    useEffect(() => {

        if (artwork?.bidding_details?.max_bid) {
            setCurrentVPrice(artwork?.bidding_details?.max_bid)
            setCurrentValue(artwork?.bidding_details?.max_bid)
        }


        if (artwork?.latest_auction?.id)
            getAuction(artwork?.latest_auction?.id)
    }, [artwork])
    const getAuction = (id) => {
        setLoading(true)
        axios.get(`${BASE_URL}${ADD_AUCTION}${id}/`)
            .then(resp => {
                if (resp.data.code === 200) {
                    setAuction(resp.data.data.result)
                    if (resp.data.data.result?.steps) {
                        let list = resp.data.data.result.steps.sort((a, b) => (a.threshold - b.threshold))
                        setSteps(list)
                    }
                }
                setLoading(false)

            })
            .catch(err => {
                console.error(err);
                setLoading(false)
            })
    }
    const handleIncrease = () => {
        // console.log("[[26, 100.0, 300.0]]".splice(']' || '[' , ''));
        if (steps.length) {
            steps.some((item, i, array) => {
                if (i !== (array.length - 1)) {
                    // if (i > 0) {
                    if ((currentValue >= item.threshold) && (currentValue < steps[i + 1].threshold)) {
                        setBid(item.step)
                        return true;
                    } else if (i === 0) {
                        console.log("It is an error")
                        setBid(item.step)
                        return true;
                    }
                    // } else {
                    //     if ((currentValue < item.threshold)) {
                    //         setBid(item.step)
                    //         return true;
                    //     }
                    // }
                } else {
                    setBid(item.step)
                }
            })
        }
    }
    const setBid = (value) => {
        form.setFieldsValue({price: currentValue + value})
        setCurrentValue(currentValue + value)
    }
    const handleDecrease = () => {
    }
    const onFinish = (values) => {
        console.log(values)
        if (artwork?.id)
            sendBid(values)
    }
    const sendBid = (values) => {
        setLoading(true)
        let payload = {
            ...values,
            "product_id": artwork?.id
        }
        axios.post(`${BASE_URL}${BID}`, payload)
            .then(resp => {
                if (resp.status === 201) {
                    message.success("درخواست شما با موفقیت ارسال شد")
                    // setAuction(resp.data.price)
                }
                setLoading(false)
            })
            .catch(err => {
                if(err.response?.data?.message)
                    message.error(err.response?.data?.message)
                else
                    message.error("با خطا مواجه شدید")
                setLoading(false)
            })
    }
    return (<>
            <Spin spinning={loading}>

                <div className="detail-bid">
                    <div className="db-left">
                        <span className="db-title">تخمین</span>
                        <div className="price-block">
                        <span
                            className="price"> {artwork?.max_price ? artwork?.max_price : 0} - {artwork?.min_price ? artwork?.min_price : 0}</span>
                            <span className="unit"> تومان</span>
                        </div>
                    </div>
                    <span className="seprator brdrbefor"></span>
                    <div className="db-right ">
                        <span className="db-title bluecolor">قیمت فعلی</span>
                        <div className="price-block bluecolor">
                            <span className="price">{currentPrice}</span>
                            <span className="unit"> تومان</span>
                            <span className="bids-num">(<span
                                className="mx-1">{artwork?.bidding_details ? artwork?.bidding_details?.total_bids : ''}</span>پیشنهاد)</span>
                        </div>
                    </div>
                </div>
                {is_logged_in ? <div className="detail-placebid general-bid">
                        {/*<div className="general-bid-block">*/}
                        {/*    <div className="search-input">*/}
                        {/*        <input type="text" className="default-input"*/}
                        {/*               placeholder="حداکثر پیشنهاد خود را وارد نمایید."/>*/}
                        {/*        <span className="unit">تومان</span>*/}
                        {/*    </div>*/}
                        {/*    <button type="button" className="btn-lightpink">ثبت</button>*/}
                        {/*</div>*/}
                        {((artwork?.product_status==="on_stage") && (artwork?.join_auction_request_state)) ? <Form onFinish={onFinish} form={form} className="m-0"
                            // initialValues={{ inputValue: 0 }}
                                                                      wrapperCol={{span: 24}}>
                            <div className="general-bid-block">
                                <div className="number-input">

                                    <Form.Item
                                        className="w-100"
                                        name="price"
                                        rules={[
                                            {
                                                required: true,
                                                message: "تکمیل این فیلد ضروری است",
                                            },
                                        ]}>
                                        <input className="default-inputquantity" min="0" name="quantity" type="number"
                                               placeholder="انتخاب پیشنهاد"/>
                                    </Form.Item>
                                    <span className="unit">تومان</span>
                                </div>
                                 <Button htmlType="submit" className="btn-lightpink">ثبت پیشنهاد</Button>
                            </div>
                        </Form> : <p className="text-center category-icon">
                            {artwork?.sale_status ? 'محصول فروخته شد':
                                <p>
                                    <p>{(artwork?.product_status === "after_stage") && "حراج به پایان رسید"}
                                        {(artwork?.product_status === "pre_stage") && "حراج آغاز نشده است"}</p>
                                    { (artwork?.product_status !== "after_stage") ?<div>
                                        {artwork?.join_auction_request_state ?? <p>
                                            <span>برای ثبت پیشنهاد باید   </span>
                                            <Link to={`/buyer-register/${artwork?.latest_auction?.id}`}
                                                  className="d-inline-block"> عضو حراجی </Link>
                                            <span>   باشید</span>
                                        </p>}
                                        {artwork?.join_auction_request_state === false && <p>
                                            درخواست عضویت شما در انتظار تایید حراجی است
                                        </p>}
                                    </div> :''}

                                </p>}
                        </p>}
                    </div> :
                    <p className="text-center mt-4 ">
                        برای ثبت پیشنهاد
                        <Link to="/login" className="d-inline-block px-1 color-link"> وارد </Link>
                        شوید
                    </p>
                }
            </Spin>
        </>

    );
};

export default Secret;
