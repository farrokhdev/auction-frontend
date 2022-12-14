import React, { useState, useEffect } from "react";
import Header from "../../components/header";
import axios from "../../utils/request";
import { useSelector } from "react-redux";
import queryString from "query-string";
import moment from "jalali-moment";
import { Form, Spin } from "antd";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import {
  ADD_AUCTION,
  BID,
  HOME_AUCITONS,
  WEB_SOCKET_BID,
} from "../../utils/constant";
import { BASE_URL, WEB_SOCKET_BASE_URL } from "../../utils";
import { Link } from "react-router-dom";
import {
  AuctionStatusTextBtn,
  convertToEn,
} from "../../utils/converTypePersion";
import Bid from "./bid";
import Footer from "../../components/footer";
import { handleShowImage } from "../../utils/showImageProduct";

function LiveAuction(props) {
  const { is_logged_in } = useSelector((state) => state.authReducer);
  const [Auction, setAuction] = useState([]);
  const [Product, setProduct] = useState("");
  const [countProducts, setCountProducts] = useState(0);
  const [currentPrice, setCurrentVPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [slug, setslug] = useState("");
  const [isReady, setIsReady] = useState(false);

  const id = props.match.params.id;
  const [params, setParams] = useState({
    page: 1,
    page_size: 10,
    auctions__id: id,
    search: "",
    ordering: "product_auction__lot_num",
  });
  const queries = queryString.stringify(params);
  const [form] = Form.useForm();

  console.log("product" , Product)
  const getProducts = () => {
    setLoading(true);
    axios
      .get(`${BASE_URL}/sale/product/?${queries}`)
      .then((resp) => {
        setLoading(false);
        if (resp.data.code === 200 && resp.data?.data?.result) {
          const res = resp.data?.data?.result;
          setProduct(res);
          setCountProducts(resp.data?.data?.count);
        }
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  const getAuction = () => {
    setLoading(true);
    axios
      .get(`${BASE_URL}/sale/auctions/${id}/`)
      .then((resp) => {
        setLoading(false);
        if (resp.data.code === 200) {
          setAuction(resp.data.data.result);
          // console.log("testttttttttt",resp.data.data.result.stream_info.player_url.split("=")[0])
          setslug(
            `https://player.arvancloud.com/index.html?config=https://smartauctionhouse.arvanlive.com/${resp.data.data.result.stream_info.slug}/origin_config.json`
          );
        }
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (Auction?.id) {
      let client = new W3CWebSocket(
        WEB_SOCKET_BASE_URL + WEB_SOCKET_BID(Auction?.id)
      );
      client.onopen = () => {
        console.log("-->WebSocket Client Connected");
      };
      client.onmessage = (message) => {
        if (message?.data != null) {
          let data = JSON.parse(message.data);
          if (data.stage_updated === true) {
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

                        setProduct(res);
                        setCountProducts(resp.data?.data?.count);
                      }
                    })
                    .catch((err) => {
                      console.error(err);
                      setLoading(false);
                    });
                }
              })
              .catch((err) => {
                console.error(err);
                setLoading(false);
              });
          }
        }
      };
      client.onclose = (event) => {
        console.log("The connection has been closed successfully.", event);
      };
      return () => client.close(3001, "disconnect");
    }
  }, [Auction]);

  useEffect(() => {
    getAuction();
    getProducts();
  }, []);

  useEffect(() => {
    if (slug) {
    }
  }, [slug]);

  return (
    <>
      <Header Auction={Auction} />
      <main className="holding-auction">
        <Spin spinning={loading}>
          <div className="container">
            <div className="main-title d-inline-flex">
              <h2 className="default titr">{Auction?.title}</h2>
              <span className="category-icon">
                {convertToEn(Auction?.type)}
              </span>
              <ul className="breadcrumb-cs">
                <li className="active">
                  {" "}
                  {Auction?.start_time
                    ? moment(Auction?.start_time, "YYYY/MM/DD")
                        .locale("fa")
                        .format(" DD MMMM YYYY")
                    : ""}
                </li>
              </ul>
            </div>
            <div className="row row-cols-1 row-cols-md-2 live-auction-sec">
              <div className="col">
                {Product?.length &&
                  Product?.map((item) => {
                    return (
                      <div className="hauction-info">
                        {item?.product_status === "on_stage" ? (
                          <>
                            <div className="hauction-gallery">
                              <img
                                // style={{ backgroundImage: `url(${item && handleShowImage(item)})`, height: "250px" ,backgroundRepeat : "round" }}
                                // src={item?.media[0]?.exact_url} width="470"
                                src={item && handleShowImage(item)}
                                width="470"
                                height="587"
                                alt=""
                              />
                            </div>

                            <div className="d-flex">
                              <h5 className="default lot-num">
                                <span>Lot </span>
                                <span>{item?.latest_auction?.lot_num}</span>
                              </h5>
                              <div className="hauction-detail">
                                <h6 className="default gray50 ">
                                  {item?.artwork_title}
                                </h6>
                                <h4 className="default">
                                  ???? {item?.latest_auction?.description}
                                </h4>
                              </div>
                            </div>

                            <div className="hauction-placebid">
                              {Auction?.user_is_enrolled ? (
                                <Bid
                                  artwork={item}
                                  setProduct={setProduct}
                                  Product={Product}
                                  id={id}
                                  queries={queries}
                                  setCountProducts={setCountProducts}
                                  Auction={Auction}
                                />
                              ) : (
                                AuctionStatusTextBtn(
                                  Auction?.status,
                                  Auction?.user_is_enrolled,
                                  Auction.id
                                )
                              )}
                            </div>
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                    );
                  })}
                {Auction?.status === "CLOSED" ||
                Auction?.status === "PREPARING" ? (
                  <div className="hauction-gallery">
                    <img
                      src={Auction?.media?.exact_url}
                      width="470"
                      height="587"
                      alt=""
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div className="col">
                <div className="hauction-video">
                  {Auction?.status === "ACTIVE" ? (
                    <div class="r1_iframe_embed">
                      <iframe
                        src={slug}
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen="true"
                        webkitallowfullscreen="true"
                        mozallowfullscreen="true"
                      ></iframe>
                    </div>
                  ) : (
                    <>
                      <video width="100%" height="280" controls>
                        <source src="" type="video/mp4" />
                        ???????????? ?????? ???? ?????????? ???? ???????????????? ????????????.
                      </video>
                    </>
                  )}

                  <div className="hauction-list mt-4">
                    <ul
                      className="nav nav-tabs justify-content-star main-tab"
                      id="artwork-list"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="tab-11"
                          data-bs-toggle="tab"
                          data-bs-target="#artworklist1"
                          type="button"
                          role="tab"
                          aria-controls="artworklist1"
                          aria-selected="true"
                        >
                          ????????
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="tab-21"
                          data-bs-toggle="tab"
                          data-bs-target="#artworklist2"
                          type="button"
                          role="tab"
                          aria-controls="artworklist2"
                          aria-selected="false"
                        >
                          ?????????????? ????????????
                        </button>
                      </li>
                    </ul>
                    <div
                      className="tab-content main-tab-content"
                      id="artwork-list-content"
                    >
                      <div
                        className="tab-pane fade show active"
                        id="artworklist1"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        <div className="d-flex flex-column col-bids">
                          {Product?.length &&
                            Product?.map((item) => {
                              return (
                                <div className="row-bids">
                                  <img
                                    src={item?.media[0]?.exact_url}
                                    width="998"
                                    height="880"
                                    alt=""
                                    className="max-60"
                                  />
                                  <div className="row-bids-r">
                                    <div className="d-flex flex-row-reverse">
                                      <h5 className="default">
                                        ???? {item?.latest_auction?.lot_num}
                                      </h5>

                                      {is_logged_in ? (
                                        <div>
                                          {item?.sale_status ? (
                                            <Link
                                              // to={`/artworks/${item?.id}`}
                                              type="button"
                                              className="text-center btn-sold mx-3 "
                                            >
                                              ???????????? ????
                                              <span class="fontnormal rows-bid">
                                                {item?.bidding_details?.max_bid}{" "}
                                              </span>
                                            </Link>
                                          ) : (
                                            <div>
                                              {item?.product_status ===
                                              "after_stage" ? (
                                                <Link
                                                  // to={`/artworks/${item?.id}`}
                                                  type="button"
                                                  className="text-center btn-passed mx-3"
                                                >
                                                  ???????????? ??????
                                                </Link>
                                              ) : (
                                                <>
                                                  {item?.product_status ===
                                                  "on_stage" ? (
                                                    item?.type === "LIVE" ? (
                                                      <button className="text-center btn-defaults mx-3">
                                                        {" "}
                                                        ????????{" "}
                                                      </button>
                                                    ) : (
                                                      <button className="text-center btn-defaults mx-3">
                                                        {" "}
                                                        ????????????{" "}
                                                      </button>
                                                    )
                                                  ) : (
                                                    ""
                                                  )}
                                                </>
                                              )}
                                            </div>
                                          )}
                                        </div>
                                      ) : (
                                        ""
                                      )}
                                    </div>
                                    <div className="row-bids-r-detail">
                                      <h6 className="default">
                                        {item?.artwork_title} ????{" "}
                                        {item?.latest_auction?.description}
                                      </h6>
                                      <h6 className="default">
                                        {item?.persian_artist_name}
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="artworklist2"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                {Product?.length &&
                  Product?.map((item) => {
                    return (
                      <table className="table-main mb-4" id="about-artwork">
                        {item?.product_status === "on_stage" ? (
                          <tbody>
                            <tr>
                              <td>????????</td>
                              <td>{item?.persian_artist_name}</td>
                            </tr>
                            <tr>
                              <td>???????????????????</td>
                              <td>
                                {item?.category?.length &&
                                  item?.category?.map((category) => {
                                    return (
                                      <span className="mx-1">
                                        {category?.title}
                                      </span>
                                    );
                                  })}
                              </td>
                            </tr>
                            <tr>
                              <td>??????????</td>
                              <td>
                                {`${
                                  item?.artwork_height
                                    ? item?.artwork_height + " * "
                                    : ""
                                }  ${
                                  item?.artwork_width ? item?.artwork_width : ""
                                } * ${
                                  item?.artwork_length
                                    ? item?.artwork_length
                                    : ""
                                }`}{" "}
                              </td>
                            </tr>
                            <tr>
                              <td>??????????</td>
                              <td>
                                {item?.creation_date
                                  ? moment(item?.creation_date).format(
                                      `jYYYY/jMM/jDD`
                                    )
                                  : ""}
                              </td>
                            </tr>
                          </tbody>
                        ) : (
                          ""
                        )}
                      </table>
                    );
                  })}
              </div>
            </div>
          </div>
        </Spin>
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default LiveAuction;
