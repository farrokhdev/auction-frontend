import React from "react";
import { Link } from "react-router-dom";
import { AuctionStatusTextBtn, convertTypeToEn } from "../../utils/convertTypeEnglish";
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import moment from "jalali-moment";
import numberWithCommas from "../../components/threeNumber";

function AuctionCardDetailInfo({auction ,getAuction}) {

  const Follow = (data, action) => {
    if (action) {
        axios.delete(`${BASE_URL}/following/${data}`)
            .then(resp => {
                getAuction()
            })
    } else {
        axios.post(`${BASE_URL}/following/`, {
            "content_type": "auction",
            "object_id": data,
            "activity_type": "follow"
        })
            .then(resp => {
                if (resp.data.code === 201) {
                    getAuction()
                }

            })
            .catch(err => {
                console.error(err);
            })

    }
}

  return (
    <div className="auction-detail ">
      <div className="block-head row">
        <div className="col-6 px-0">
          <span className="category-icon px-0">{convertTypeToEn(auction?.type)}</span>
        </div>
              <div className="col-6 textalign-left">
              <button
                  onClick={() =>
                      Follow(
                        auction?.following?.follow?.is_active ?
                        auction?.following?.follow?.id :
                        auction?.id, auction?.following?.follow?.is_active)
                    }
                  type="button" className={" reminder-icon " + (auction?.following?.follow?.is_active ? "active" : "")}>
                  {auction?.following?.follow?.is_active ? "Reminding" : "Reminde me"}
              </button>
              </div>
      </div>
      <div className="auction-calender">


      {auction?.status !== "CLOSED" ?
          <>
            <div className="auction-date">
                  <span className="start-date ps-2">
                      {auction && !!auction?.end_time && auction?.start_time !== 'None' ? moment(auction?.start_time, 'YYYY-MM-DD').locale('en').format('D MMMM') : ""}
                  </span>
                  <span className="end-date pe-2">
                      {auction && !!auction?.end_time && auction?.end_time !== 'None' ? moment(auction?.end_time, 'YYYY-MM-DD').locale('en').format('D MMMM') : ""}
                  </span>
              </div>
               <div className="auction-time">
                  <span
                      className="start-time ps-1"> {moment(auction?.start_time, 'YYYY-MM-DD HH:mm').locale('en').format('HH')}</span>

                  <span className="end-time pe-2">
                      {!!auction?.end_time && auction?.end_time !== 'None' ? moment(auction?.end_time, 'YYYY-MM-DD HH:mm').locale('en').format('HH') : ""}
                  </span>
              </div>
          </>
          :
          <div className="ended" style={{ display: "flex" }}>
              <div className="text"></div>
          </div>
      }

      </div>
      <div className="auction-moreinfo">
        <a href="#" className="d-info category">
          <h6 className="default">{auction?.category ? auction?.category[0]?.title_en : ""}</h6>
        </a>
        <a href="#" className="d-info gallery">
          <h6 className="default">{auction?.house?.home_auction_name_en}</h6>
        </a>
      </div>
      <div className="auction-btns">
      {auction?.status !== "CLOSED" ?
              <>
                  {auction?.is_live_streaming ?
                      <button type="button" className="btn btn-gray view">
                          View live
                      </button> : ""}

                  {AuctionStatusTextBtn(auction?.status, auction?.user_is_enrolled, auction?.id)}
              </>
              :

              <>
                  <div className="auction-closed">Auction closed</div>
                  <div className="auction-total-price">
                      <span>Total Proceeds :  </span>
                      <span>{numberWithCommas(auction?.products_total_price)} {auction?.currency !== "dollar" ? auction?.currency : "USD"}</span>
                  </div>
              </>
      }
                   
      </div>
          <div className="detail-bid">
            <div className="db-left">
              <span className="db-title">Artworks</span>
              <div className="price-block">
                <span className="price">{auction?.products_count}</span>
              </div>
            </div>
            <span className="seprator brdrbefor"></span>
            <div className="db-right ">
                <span className="db-title ">Artists</span>
                <div className="price-block ">
                    <span className="price">{auction?.artists_count}</span>
                </div>
            </div>
            </div>
          </div>
  );
}

export default AuctionCardDetailInfo;
