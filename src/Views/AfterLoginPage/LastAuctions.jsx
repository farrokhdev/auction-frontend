import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import moment from "jalali-moment";
import { convertToEn } from "../../utils/converTypePersion";
import queryString from "query-string";
import { Spin } from "antd";

function LastAuctions({ setLoading }) {
  const [lastAuctions, setLastAuctions] = useState(0);
  const [params, setParams] = useState({
    page_size: 8,
    ordering: "-creation_time",
    visible_in_site: true,
  });

  const getLastAuctions = () => {
    setLoading(true);

    const queries = queryString.stringify(params);

    axios
      .get(`${BASE_URL}/sale/auctions/?${queries}`)
      .then((resp) => {
        if (resp.data.code === 200) {
          setLastAuctions(resp.data.data.result);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getLastAuctions();
  }, []);

  return (
    <>
      <div className="container innercontainer">
        {lastAuctions
          ? lastAuctions.map((item, key) => {
            return (
              <div
                className={
                  "row " +
                  (key % 2 === 0 ? "" : "flex-row-reverse pull-top100")
                }
                key={key}
              >
                <div className="col-xl-4 col-lg-4 col-sm-5 mt-4">
                  <div className="bg-shadow tl-shadow20">
                    <div className="artwork-img">
                      {(item?.status === "ACTIVE" &&
                        item?.type === "LIVE") ||
                        item?.type === "ONLINE" ? (
                        <Link to={`/live-auction/${item?.id}`}>
                          <img
                            style={{
                              background: `url(${item?.media?.exact_url})`,
                              height: "280px",
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "center",
                            }}
                            alt=""
                            className="img-fluid"
                          />
                        </Link>
                      ) :
                        <Link to={`/one-auction/${item?.id}`}>
                          <img
                            style={{
                              background: `url(${item?.media?.exact_url})`,
                              height: "280px",
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "center",
                            }}
                            alt=""
                            className="img-fluid"
                          />
                        </Link>}
                      <div className="auction-category">
                        <span className="category-save auction-reminder"></span>
                        {convertToEn(item.type)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-sm-7">
                  <div className="auction-info">
                    <h6 className="auctioninfo location">تهران</h6>
                    <div className="auction-calender auctioninfo">
                      <div className="auction-date">
                        <span className="start-date">
                          {moment(item.start_time, "YYYY/MM/DD")
                            .locale("fa")
                            .format("DD MMMM")}
                        </span>
                        <span className="end-date">
                          {moment(item.end_time, "YYYY/MM/DD")
                            .locale("fa")
                            .format("DD MMMM")}
                        </span>
                      </div>
                      <div className="auction-time">
                        <span className="start-time">
                          {moment(item.start_time, "YYYY/MM/DD")
                            .locale("fa")
                            .format("HH")}
                        </span>
                        <span className="end-time">
                          {moment(item.end_time, "YYYY/MM/DD")
                            .locale("fa")
                            .format("HH")}
                        </span>
                      </div>
                    </div>
                    <h3 className="default">{item.title}</h3>
                    {item.status === "CLOSED" ? (
                      <button type="button" class="btn btn-basic">
                        حراج به پایان رسید
                      </button>
                    ) : (
                      <Link to={`/buyer-register/${item?.id}`}>
                        <button type="button" className="btn btn-basic join">
                          {/* عضویت در حراج  */}
                          {item.status ? "عضویت در حراج" : "ثبت نطر"}
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })
          : ""}
      </div>
    </>
  );
}
export default LastAuctions;
