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

const Bid = ({
  artwork,
  Product,
  setProduct,
  id,
  queries,
  setCountProducts,
  Auction,
}) => {
  let numeral = require("numeral");
  const [loading, setLoading] = useState(false);
  const [auction, setAuction] = useState({});
  const [steps, setSteps] = useState([]);
  const [firstBid, setfirstBid] = useState(true);
  const [currentValue, setCurrentValue] = useState(0);
  const [currentPrice, setCurrentVPrice] = useState(0);
  const [currentSuggest, setCurrentSuggest] = useState(0);
  const [maxUserBid, setMaxUserBid] = useState(0);
  const [productSelected, setProductSelected] = useState({});
  const [prevProductSelected, setPrevProductSelected] = useState({});
  const [nextProductSelected, setNextProductSelected] = useState({});
  const [lastPrice, setLastPrice] = useState(0);
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

        // if (message?.data?.length >= 1) {
        //     let artworkData = JSON.parse(message.data).products.filter(obj => {
        //         return obj.product_id === artwork?.id
        //     })[0]
        //     let priceFinal = Math.floor(artworkData.last_price);
        //     setCurrentVPrice(priceFinal);
        //     setCurrentValue(priceFinal)
        //     setCurrentSuggest(Math.floor(artworkData.bid_count))
        //     form.setFieldsValue({ price: 0 })
        // }
        if (message?.data != null) {
          let data = JSON?.parse(message.data)?.products?.filter((obj) => {
            return obj?.product_id === artwork?.id;
          })[0];
          let priceFinal = Math?.floor(data?.last_price);
          setCurrentVPrice(priceFinal);
          setCurrentValue(priceFinal);
          setCurrentSuggest(Math?.floor(data?.bid_count));
          form.setFieldsValue({ price: 0 });
          if (data?.stage_updated === true) {
            axios
              .get(`${BASE_URL}/sale/auctions/${id}/`)
              .then((resp) => {
                setLoading(false);
                if (resp.data.code === 200) {
                  setAuction(resp.data.data.result);
                  axios
                    .get(`${BASE_URL}/sale/product/?${queries}`)
                    .then((resp) => {
                      setLoading(false);
                      if (resp.data.code === 200 && resp.data?.data?.result) {
                        const res = resp.data?.data?.result;

                        // setProduct(res);
                        setCountProducts(resp.data?.data?.count);
                      }
                    })
                    .catch((err) => {
                      console.error(err);
                      setLoading(false);
                    });
                }
                // getProducts()
              })
              .catch((err) => {
                console.error(err);
                setLoading(false);
              });
          } else {
            let artworkData = data?.products?.filter((obj) => {
              return obj.product_id === Auction?.id;
            })[0];
            // let priceFinal = Math.floor(artworkData.last_price);
            // setCurrentVPrice(priceFinal);
            // setCurrentValue(priceFinal)
            // setCurrentSuggest(Math.floor(artworkData.bid_count))
            form.setFieldsValue({ price: 0 });
          }
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

  const minusBid = (value) => {
    form.setFieldsValue({ price: currentValue - value });
    setCurrentValue(currentValue - value);
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

  // const changeProduct = (value) => {
  //     let list = [];
  //     // let onStage = [];
  //     let lot = 0;
  //     list = Product.filter((t, i) => {
  //         if (t.id === value)
  //             lot = i;
  //         return t.id === value
  //     })
  //     // onStage = productList.filter((t, i) => (t.product_status === "on_stage"))
  //     if (list.length > 0) {
  //         setProductSelected(list[0])
  //         setLastPrice(list[0]?.bidding_details?.max_bid)
  //         if (lot > 0) {
  //             setPrevProductSelected(Product[lot - 1])
  //         } else {
  //             setPrevProductSelected({})
  //         }
  //         if (lot < Product.length - 1) {
  //             setNextProductSelected(Product[lot + 1])
  //         } else {
  //             setNextProductSelected({})
  //         }
  //     }
  //     // if (onStage.length > 0) {
  //     //     setLastPrice(onStage[0].max_price)
  //     // }
  // };

  // useEffect(() => {

  //     if (productSelected?.id) {
  //         changeProduct(productSelected?.id)
  //     }
  // }, [Product])

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

  const setBid = (value) => {
    form.setFieldsValue({ price: currentValue + value });
    setCurrentValue(currentValue + value);
  };
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

          if (artwork?.bidding_details?.max_user_bid === null) {
            let artBidUser = Product?.map((productBid) => {
              if (productBid?.id === artwork?.id) {

                productBid.bidding_details.max_user_bid = values?.price
              }
              return productBid
            });
            setProduct(artBidUser)
            console.log("artBidUser", artBidUser)
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
        <table className="table-main hauction-bids">
          <tbody>
            <tr>
              <td>??????????</td>
              <td className="bold">
                {numeral(artwork?.max_price).format("0,0")
                  ? numeral(artwork?.max_price).format("0,0")
                  : 0}{" "}
                -{" "}
                {numeral(artwork?.min_price).format("0,0")
                  ? numeral(artwork?.min_price).format("0,0")
                  : 0}
                <span className="unit">
                  {artwork?.latest_auction?.currency.replace("toman", "??????????")}
                </span>
              </td>
            </tr>
            <tr>
              <td>?????????????? ????????</td>
              <td className="bold">
                {numeral(currentPrice).format("0,0")}
                <span className="unit">
                  {artwork?.latest_auction?.currency.replace("toman", "??????????")}
                </span>
              </td>
            </tr>
            <tr>
              <td>?????????????? ????????</td>
              <td className="bold">
                {handleIncrease}
                <span className="unit">
                  {artwork?.latest_auction?.currency.replace("toman", "??????????")}
                </span>
              </td>
            </tr>
          </tbody>
        </table>

        {is_logged_in ? (
          <div className="detail-placebid general-bid">
            {artwork?.product_status === "on_stage" &&
              artwork?.join_auction_request_state ? (
              <Form
                onFinish={onFinish}
                form={form}
                className="m-0"
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
                        {artwork?.join_auction_request_state === "approved" && (
                          <p className="text-success">
                            ?????????????? ?????????? ?????? ?????????? ?????? ??????
                          </p>
                        )}
                        {artwork?.join_auction_request_state === "pending" && (
                          <p className="text-warning">
                            ?????????????? ?????????? ?????? ???? ???????????? ?????????? ?????????? ??????
                          </p>
                        )}
                        {artwork?.join_auction_request_state === "rejected" && (
                          <p>?????????????? ?????????? ?????? ???? ?????? ??????</p>
                        )}
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
            {/* <span className="alert-success text-center">
              ?????????? ???????? ???????????????? ?????? {maxUserBid} ?????????? ????????????
            </span> */}

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
          <p className="text-center mt-4 ">
            ???????? ?????? ??????????????
            <Link to="/login" className="d-inline-block px-1 color-link">
              {" "}
              ????????{" "}
            </Link>
            ????????
          </p>
        )}
      </Spin>
    </>
  );
};

export default Bid;
