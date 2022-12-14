import React, { useEffect, useState } from "react";
import axios from "../../utils/request";
import { BASE_URL, WEB_SOCKET_BASE_URL } from "../../utils";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { Button, Form, Spin, message } from "antd";
import {
  ADD_AUCTION,
  BID,
  HOME_AUCITONS,
  WEB_SOCKET_BID,
} from "../../utils/constant";

const Bid = ({ artwork, setArtwork }) => {
  let numeral = require("numeral");
  const [loading, setLoading] = useState(false);
  const [auction, setAuction] = useState({});
  const [steps, setSteps] = useState([]);
  const [currentValue, setCurrentValue] = useState(0);
  const [currentPrice, setCurrentVPrice] = useState(0);
  const [currentSuggest, setCurrentSuggest] = useState(0);
  const [maxUserBid, setMaxUserBid] = useState(0);
  const [firstBid, setfirstBid] = useState(true);
  const [currentSuggestValue, setCurrentSuggestValue] = useState(0);
  const { is_logged_in } = useSelector((state) => state.authReducer);
  const [form] = Form.useForm();
  useEffect(() => {
    if (artwork?.id && artwork?.product_status === "on_stage") {
      let client = new W3CWebSocket(
        WEB_SOCKET_BASE_URL + WEB_SOCKET_BID(artwork?.latest_auction?.id)
      );
      client.onopen = () => {
        console.log("-->WebSocket Client Connected");
      };
      client.onmessage = (message) => {
        console.log(message);

        if (message?.data?.length >= 1) {
          // let messageArray = message.data.slice(2, message.data.length - 2).split(',');
          let webSocketData = JSON.parse(message.data);
          let artworkData = webSocketData.products.filter((obj) => {
            return obj.product_id === artwork?.id;
          })[0];
          let priceFinal = Math.floor(artworkData.last_price);
          setCurrentVPrice(priceFinal);
          setCurrentValue(priceFinal);
          setCurrentSuggest(Math.floor(artworkData.bid_count));
          form.setFieldsValue({ price: 0 });
        }
      };
      client.onclose = (event) => {
        console.log("The connection has been closed successfully.", event);
      };
      return () => client.close(3001, "disconnect");
    }
  }, [artwork]);

  useEffect(() => {
    if (artwork?.bidding_details?.max_bid) {
      setCurrentVPrice(artwork?.bidding_details?.max_bid);
      setCurrentValue(artwork?.bidding_details?.max_bid);
    }
    if (artwork?.bidding_details?.total_bids) {
      setCurrentSuggest(artwork?.bidding_details?.total_bids);
    }
    if (artwork?.bidding_details?.max_user_bid) {
      setMaxUserBid(artwork?.bidding_details?.max_user_bid);
    }

    if (artwork?.latest_auction?.id) getAuction(artwork?.latest_auction?.id);
  }, [artwork]);
  const getAuction = (id) => {
    setLoading(true);
    axios
      .get(`${BASE_URL}${ADD_AUCTION}${id}/`)
      .then((resp) => {
        if (resp.data.code === 200) {
          setAuction(resp.data.data.result);
          if (resp.data.data.result?.steps) {
            let list = resp.data.data.result.steps.sort(
              (a, b) => a.threshold - b.threshold
            );
            setSteps(list);
          }
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  const handleIncrease = () => {
    if (firstBid) {
      setBid(0)
      setfirstBid(false)
    } else {

      if (steps.length) {
        steps.some((item, i, array) => {
          if (i < array.length - 1) {
            if (
              currentValue >= item.threshold &&
              currentValue < steps[i + 1].threshold
            ) {
              setBid(item.step);
              return true;
            } else if (currentValue < item.threshold && i === 0) {
              setBid(item.step);
              return true;
            } else {
              return false;
            }
          } else {
            setBid(item.step);
          }
        });
      }
    }
  };

  
  const handleIncreaseminus = () => {
    if (firstBid) {
      setBid(0)
      setfirstBid(false)
    } else {

      if (steps.length) {
        steps.some((item, i, array) => {
          if (i < array.length - 1) {
            if (
              currentValue > item.threshold &&
              currentValue <= steps[i + 1].threshold
            ) {
              minusBid(item.step);
              return true;
            } else if (currentValue < item.threshold && i === 0) {
              minusBid(item.step);
              return true;
            } else {
              return false;
            }
          } else {
            minusBid(item.step);
          }
        });
      }
    }
  };
  const setBid = (value) => {
    form.setFieldsValue({ price: currentValue + value });
    setCurrentValue(currentValue + value);
  };

  const minusBid = (value) => {
    form.setFieldsValue({ price: currentValue - value });
    setCurrentValue(currentValue - value);
  };

  const handleDecrease = () => { };
  const onFinish = (values) => {
    console.log(values);
    if (artwork?.id) sendBid(values);
  };
  const sendBid = (values) => {
    setLoading(true);
    let payload = {
      ...values,
      product_id: artwork?.id,
    };
    axios
      .post(`${BASE_URL}${BID}`, payload)
      .then((resp) => {
        if (resp.status === 201) {
          
          setMaxUserBid(values.price);
          
          if(artwork?.bidding_details?.max_user_bid === null ){
            let artBidUser = artwork;
            artBidUser.bidding_details.max_user_bid = values?.price
            setArtwork(artBidUser)
          }
          message.success("?????????????? ?????? ???? ???????????? ?????????? ????");
        }
        setLoading(false);
      })
      .catch((err) => {
        if (err.response?.data?.message)
          message.error(err.response?.data?.message);
        else message.error("???? ?????? ?????????? ????????");
        setLoading(false);
      });
  };
  return (
    <>
      <Spin spinning={loading}>
        <div className="detail-bid">
          <div className="db-left">
            <span className="db-title">??????????</span>
            <div className="price-block">
              <span className="price">
                {" "}
                {numeral(artwork?.max_price).format("0,0")
                  ? numeral(artwork?.max_price).format("0,0")
                  : 0}{" "}
                -{" "}
                {numeral(artwork?.min_price).format("0,0")
                  ? numeral(artwork?.min_price).format("0,0")
                  : 0}
              </span>
              <span className="unit"> ??????????</span>
            </div>
          </div>
          {artwork?.latest_auction?.type !== "LIVE" ? (
            <>
              <span className="seprator brdrbefor"></span>
              <div className="db-right ">
                <span className="db-title bluecolor">???????? ????????</span>
                <div className="price-block bluecolor">
                  <span className="price">
                    {numeral(currentPrice).format("0,0")}
                  </span>
                  <span className="unit"> ??????????</span>
                  <span className="bids-num">
                    (<span className="mx-1">{currentSuggest}</span>??????????????)
                  </span>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
        {
          is_logged_in ? (
            <div className="detail-placebid general-bid">
              {artwork?.product_status === "on_stage" &&
                artwork?.join_auction_request_state === "approved" &&
                artwork?.latest_auction?.type !== "LIVE" ? (
                <Form
                  onFinish={onFinish}
                  form={form}
                  className="m-0"
                  // initialValues={{ inputValue: 0 }}
                  wrapperCol={{ span: 24 }}
                >
                  <div className="general-bid-block">
                    <div className="number-input">
                      <Form.Item
                        className="w-100"
                        name="price"
                        rules={[
                          {
                            required: true,
                            message: "?????????? ?????? ???????? ?????????? ??????",
                          },
                        ]}
                      >
                        <input
                          className="default-inputquantity"
                          min="0"
                          name="quantity"
                          type="number"
                          readOnly={true}
                          placeholder="???????????? ??????????????"
                        />
                      </Form.Item>

                      <button
                        onClick={handleIncreaseminus}
                        type="button"
                        className="minus"
                      />
                      <button
                        onClick={handleIncrease}
                        type="button"
                        className="plus"
                      />
                      <span className="unit">??????????</span>
                    </div>
                    <Button htmlType="submit" className="btn-lightpink">
                      ?????? ??????????????
                    </Button>
                  </div>
                </Form>
              ) : (
                <p className="text-center category-icon">
                  {artwork?.sale_status ? (
                    "?????? ???????????? ????"
                  ) : (
                    <p>
                      <p>
                        {artwork?.product_status === "after_stage" &&
                          "???????? ???? ?????????? ????????"}
                        {artwork?.product_status === "pre_stage" &&
                          "???????? ???????? ???????? ??????"}
                      </p>
                      {artwork?.product_status !== "after_stage" ? (
                        <div>
                          {artwork?.join_auction_request_state ===
                            "approved" && (
                              <p className="text-success">
                                ?????????????? ?????????? ?????? ?????????? ?????? ??????
                              </p>
                            )}
                          {artwork?.join_auction_request_state ===
                            "pending" && (
                              <p className="text-warning">
                                ?????????????? ?????????? ?????? ???? ???????????? ?????????? ?????????? ??????
                              </p>
                            )}
                          {artwork?.join_auction_request_state ===
                            "not_selected" && (
                              <>
                                <h5 className="text-danger">
                                  ???????? ?????? ?????? ?????? ???????????? ?????????????? ????????
                                </h5>
                                <span>???????? ?????? ?????????????? ???????? </span>
                                <Link
                                  to={`/buyer-register/${artwork?.latest_auction?.id}`}
                                  className="d-inline-block"
                                >
                                  {" "}
                                  ?????? ??????????{" "}
                                </Link>
                                <span> ??????????</span>
                              </>
                            )}
                          {artwork?.join_auction_request_state ===
                            "rejected" && <p>?????????????? ?????????? ?????? ???? ?????? ??????</p>}
                          <p>
                            {artwork?.join_auction_request_state === null && (
                              <p>
                                <span>???????? ?????? ?????????????? ???????? </span>
                                <Link
                                  to={`/buyer-register/${artwork?.latest_auction?.id}`}
                                  className="d-inline-block"
                                >
                                  {" "}
                                  ?????? ??????????{" "}
                                </Link>
                                <span> ??????????</span>
                              </p>
                            )}
                          </p>
                        </div>
                      ) : (
                        ""
                      )}
                    </p>
                  )}
                </p>
              )}

              {artwork?.product_status === "on_stage"
                && artwork?.bidding_details?.max_user_bid
                ? (
                  <span className="alert-success text-center">
                    ?????????? ???????? ???????????????? ?????? {maxUserBid} ?????????? ????????????
                    {console.log("maxUserBid", maxUserBid)}
                  </span>
                ) : ""}
            </div>
          ) : (
            <p className="text-center category-icon">
              {artwork?.sale_status ? (
                "?????? ???????????? ????"
              ) : (
                <p>
                  <p>
                    {artwork?.product_status === "after_stage" &&
                      "???????? ???? ?????????? ????????"}
                    {artwork?.product_status === "pre_stage" &&
                      "???????? ???????? ???????? ??????"}
                  </p>
                </p>
              )}
            </p>
          )
          // <p className="text-center mt-4 ">
          //     ???????? ?????? ??????????????
          //     <Link to="/login" className="d-inline-block px-1 color-link"> ???????? </Link>
          //     ????????
          // </p>
        }
      </Spin>
    </>
  );
};

export default Bid;
