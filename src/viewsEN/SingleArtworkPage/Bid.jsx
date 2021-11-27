import React, { useEffect, useState } from 'react';
import axios from "../../utils/request";
import { BASE_URL, WEB_SOCKET_BASE_URL } from "../../utils";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { Button, Form, Spin, message } from "antd";
import { ADD_AUCTION, BID, HOME_AUCITONS, WEB_SOCKET_BID } from "../../utils/constant";


const Bid = ({ artwork }) => {
    let numeral = require('numeral');
    const [loading, setLoading] = useState(false)
    const [auction, setAuction] = useState({})
    const [steps, setSteps] = useState([])
    const [currentValue, setCurrentValue] = useState(0)
    const [currentPrice, setCurrentVPrice] = useState(0)
    const [currentSuggest, setCurrentSuggest] = useState(0)
    const [currentSuggestValue, setCurrentSuggestValue] = useState(0)
    const { is_logged_in } = useSelector((state) => state.authReducer)
    const [form] = Form.useForm();
    useEffect(() => {
        if (artwork?.id && (artwork?.product_status === "on_stage")) {
            let client = new W3CWebSocket(WEB_SOCKET_BASE_URL + WEB_SOCKET_BID(artwork?.latest_auction?.id));
            client.onopen = () => {
                console.log('-->WebSocket Client Connected');
            };
            client.onmessage = (message) => {
                console.log(message);

                if (message?.data?.length >= 1) {
                    // let messageArray = message.data.slice(2, message.data.length - 2).split(',');
                    let artworkData = JSON.parse(message.data).filter(obj => {
                        return obj.product_id === artwork?.id
                    })[0]
                    let priceFinal = Math.floor(artworkData.last_price);
                    setCurrentVPrice(priceFinal);
                    setCurrentValue(priceFinal)
                    setCurrentSuggest(Math.floor(artworkData.bid_count))
                    form.setFieldsValue({ price: 0 })
                }
            };
            client.onclose = (event) => {
                console.log('The connection has been closed successfully.', event);
            };
            return () => client.close(3001, "disconnect");
        }

    }, [artwork])

    useEffect(() => {

        if (artwork?.bidding_details?.max_bid) {
            setCurrentVPrice(artwork?.bidding_details?.max_bid)
            setCurrentValue(artwork?.bidding_details?.max_bid)
        }
        if (artwork?.bidding_details?.total_bids) {
            setCurrentSuggest(artwork?.bidding_details?.total_bids)
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
        form.setFieldsValue({ price: currentValue + value })
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
                    message.success("Your request has been sent successfully")
                }
                setLoading(false)
            })
            .catch(err => {
                if (err.response?.data?.message)
                    message.error(err.response?.data?.message)
                else
                    message.error("An error occurred")
                setLoading(false)
            })
    }
    return (<>
        <Spin spinning={loading}>

            <div className="detail-bid">
                <div className="db-left">
                    <span className="db-title">Estimate</span>
                    <div className="price-block">
                        <span
                            className="price"> {numeral(artwork?.max_price).format('0,0') ? numeral(artwork?.max_price).format('0,0') : 0} - {numeral(artwork?.min_price).format('0,0') ? numeral(artwork?.min_price).format('0,0') : 0}</span>
                        <span className="unit"> {artwork?.latest_auction?.currency !== "dollar" ? artwork?.latest_auction?.currency : "USD" }</span>
                    </div>
                </div>
                <span className="seprator brdrbefor"></span>
                <div className="db-right ">
                    <span className="db-title bluecolor">Current bid</span>
                    <div className="price-block bluecolor">
                        <span className="price">{numeral(currentPrice).format('0,0')}</span>
                        <span className="unit"> {artwork?.latest_auction?.currency !== "dollar" ? artwork?.latest_auction?.currency : "USD" }</span>
                        <span className="bids-num">(<span
                            className="mx-1">{currentSuggest}</span>Order)</span>
                    </div>
                </div>
            </div>
            {is_logged_in ? <div className="detail-placebid general-bid">

                {((artwork?.product_status === "on_stage") && (artwork?.join_auction_request_state)) ? <Form onFinish={onFinish} form={form} className="m-0"
                    wrapperCol={{ span: 24 }}>
                    <div className="general-bid-block">
                        <div className="number-input">

                            <Form.Item
                                className="w-100"
                                name="price"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your price!",
                                    },
                                ]}>
                                <input className="default-inputquantity" min="0" name="quantity" type="number"
                                    readOnly={true}
                                    placeholder="select bid" />
                            </Form.Item>
                            {/*<button*/}
                            {/*    type="button"*/}
                            {/*    onClick={handleDecrease}/>*/}
                            <button onClick={handleIncrease}
                                type="button"
                                className="plus" />
                            <span className="unit">{artwork?.latest_auction?.currency !== "dollar" ? artwork?.latest_auction?.currency : "USD" }</span>
                        </div>
                        <Button htmlType="submit" className="btn-lightpink">Submit bid</Button>
                    </div>
                </Form> : <p className="text-center category-icon">
                    {artwork?.sale_status ? 'product sold' :
                        <p>
                            <p>{(artwork?.product_status === "after_stage") && "Order ended"}
                                {(artwork?.product_status === "pre_stage") && "auction not started"}</p>
                            {(artwork?.product_status !== "after_stage") ? <div>
                                {artwork?.join_auction_request_state === "approved" && <p className="text-success">
                                    Your membership request has been approved
                                </p>}
                                {artwork?.join_auction_request_state === "pending" && <p className="text-warning">
                                    Your membership application is awaiting auction approval
                                </p>}
                                {artwork?.join_auction_request_state === "rejected" && <p>
                                    Your membership request has been denied
                                </p>}
                                <p>{artwork?.join_auction_request_state === null && <p>
                                    <span>to submit a bid You must be   </span>
                                    <Link to={`/en/buyer-register/${artwork?.latest_auction?.id}`}
                                        className="d-inline-block"> an auction member </Link>
                                </p>}</p>
                            </div> :
                               ''
                            }

                        </p>}
                </p>}
            </div> :
                <p className="text-center mt-4 ">
                    For submit order please
                    <Link to="/login" className="d-inline-block px-1 color-link"> Login </Link>
                    
                </p>
            }
        </Spin>
    </>

    );
};

export default Bid;
