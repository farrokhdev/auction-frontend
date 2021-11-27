import React, { useState, useEffect } from "react";
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import { message, Spin } from "antd";
import moment from "jalali-moment";
import { convertTypeToEn } from "../../utils/convertTypeEnglish";
import { handleShowImage } from "../../utils/showImageProduct";
import PaginationComponent from "../../componentsEN/PaginationComponent";

function FavoriteAuctionTab() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [FavoriteArtworkCount, setFavoriteArtworkCount] = useState([]);
  const [params, setParams] = useState({
    page: 1,
    page_size: 10,
  });

  useEffect(() => {
    getData();
  }, [params]);

  const getData = () => {
    setLoading(true);
    axios
      .get(`${BASE_URL}/following/products?activity_type=mark`)
      .then((resp) => {
        if (resp.data.code === 200 && resp.data?.data?.result) {
          const res = resp.data?.data?.result;
          setData(res);
          setFavoriteArtworkCount(resp.data.data.count);
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        message.error("صفحه را دوباره لود کنید");
      });
  };

  const addBookmark = (data, action) => {
    if (action) {
      axios.delete(`${BASE_URL}/following/${data}`).then((resp) => {
        getData();
      });
    } else {
      axios
        .post(`${BASE_URL}/following/`, {
          content_type: "product",
          object_id: data,
          activity_type: "mark",
        })
        .then((resp) => {
          if (resp.data.code === 201) {
            getData();
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const handeSelectPage = (e) => {
    setParams({
      ...params,
      page: e,
    });
  };

  return (
    <Spin spinning={loading}>
      <div class="row row-cols-xxxxl-6 row-cols-xxl-5 row-cols-xl-4 row-cols-md-3 row-cols-2">
        {data
          ? data.map((item) => {
              return (
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="artwork-img">
                    <div
                      className="image-custom-back"
                      style={{
                        backgroundImage: `url(${
                          item && handleShowImage(item)
                        })`,
                        height: "200px",
                      }}
                    />
                    <div className="artwork-category">
                      <span
                        onClick={() =>
                          addBookmark(
                            item?.following?.bookmark?.is_active
                              ? item?.following?.bookmark?.id
                              : item?.id,
                            item?.following?.bookmark?.is_active
                          )
                        }
                        className={
                          "category-save artwork-bookmark " +
                          (item?.following?.bookmark?.is_active ? "active" : "")
                        }
                      />
                      <span className="">
                        {item?.latest_auction?.type ? (
                          convertTypeToEn(item?.latest_auction?.type)
                        ) : (
                          <span className="category-icon text-secondary px-3">
                            Without auction
                          </span>
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="block-body text-center">
                    <h6 className="default gray50 ">
                      {item?.artwork_title_en}
                    </h6>
                    <h4 className="default">
                      {" "}
                      {item?.latest_auction.title_en}
                    </h4>
                    <div className="auction-calender">
                      <div className="auction-date">
                        <span className="start-date">
                          {item?.latest_auction?.start_time
                            ? moment(
                                item?.latest_auction?.start_time,
                                "YYYY/MM/DD"
                              )
                                .locale("en")
                                .format("DD MMMM")
                            : ""}
                        </span>
                        <span className="end-date">
                          {item?.latest_auction?.end_time
                            ? moment(
                                item?.latest_auction?.end_time,
                                "YYYY/MM/DD"
                              )
                                .locale("en")
                                .format("DD MMMM")
                            : ""}
                        </span>
                      </div>
                      <div className="auction-time">
                        <span className="start-time">
                          {item?.latest_auction?.start_time
                            ? moment(
                                item?.latest_auction?.start_time,
                                "YYYY/MM/DD"
                              )
                                .locale("en")
                                .format("HH")
                            : ""}
                        </span>
                      </div>
                    </div>
                    <div className="price-block">
                      <span>Base price : </span>
                      <span className="price">
                        {item?.price}
                        <span className="price-unit mx-1">
                          {item?.latest_auction?.currency !== "dollar"
                            ? item?.latest_auction?.currency
                            : "USD"}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
      <PaginationComponent
        count={FavoriteArtworkCount}
        handeSelectPage={handeSelectPage}
      />
    </Spin>
  );
}

export default FavoriteAuctionTab;
