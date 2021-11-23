import React from "react";
import { convertTypeToEn } from "../../utils/convertTypeEnglish";
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import { Link } from "react-router-dom";
import Timer from 'react-compound-timer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

function CardHouseAuction({auction , getListAuctions}) {

  const Follow = (data, action) => {
    if (action) {
        axios.delete(`${BASE_URL}/following/${data}`)
            .then(resp => {
              getListAuctions()
            })
    } else {
        axios.post(`${BASE_URL}/following/`, {
            "content_type": "auction",
            "object_id": data,
            "activity_type": "follow"
        })
            .then(resp => {
                if (resp.data.code === 201) {
                  getListAuctions()
                }
            })
            .catch(err => {
                console.error(err);
            })

    }
}

  return (
    <React.Fragment>
      <div className="row-blocks">
        <div className="row">
          <div className="col-md-4">
            <div className="bg-shadow tl-shadow10">
              <img src="img/slider1.jpg" width="500" height="500" alt="" />
            </div>
          </div>
          <div className="col-md-8">
            <div className="block-head row">
              <div className="col-xl-3 col-sm-4 col-3">

                  <span className="">{convertTypeToEn(auction?.type)}<span className="d-none d-md-inline-block category-title-auction "></span></span>
  
              </div>
              <div className="col-xl-9 col-sm-8 col-9 textalign-right">

              <button
                  onClick={() =>
                    Follow(
                      auction?.following?.follow?.is_active ?
                      auction?.following?.follow?.id :
                            auction?.id, auction?.following?.follow?.is_active)
                    }
                      type="button" className={" reminder-icon " + (auction?.following?.follow?.is_active ? "active" : "")}>
                        Reminde me
              </button>  
                <button type="button" className="link-source">
                { !!auction?.products_count ?
                    <span>
                        <span className="d-none d-sm-inline-block">View </span>artworks (<span>{auction?.products_count}</span>)
                    </span>
                : null }
     
                </button>
              </div>
            </div>
            <div className="block-main">
                <Link to="/">
                    <h5 className="default">{auction?.title_en}</h5>
                </Link>
                <div className="block-detail">
                    <h6 className="default">{!!auction?.house_type_en ? auction?.house_type_en : ''}</h6>
                    <Link to="/" className="default">
                        <h6 className="default gray50">{auction?.house_en}</h6>
                    </Link>
                </div>
            </div>

            <div className="block-footer row">
                                                    <div className="col-sm-5">


                                                    {auction?.status === "CLOSED" ?

                                                        <div className="ended">
                                                            <div className="text">Offer is ended</div>
                                                        </div>
                                                        : <div>
                                                            {auction?.status === "ACTIVE" &&
                                                                <Timer
                                                                    initialTime={timeExpire(auction?.end_time)}
                                                                    direction="backward"
                                                                >
                                                                    {({ start, resume, pause, stop, reset, timerState }) => (
                                                                        <div style={{
                                                                            direction: 'ltr',
                                                                            textAlign: "right"
                                                                        }}>

                                                                            <span className="d-inline-block ">hour</span>
                                                                            <span className="d-inline-block"><Timer.Hours /> </span>
                                                                            <span className="d-inline-block">:</span>
                                                                            <span className="d-inline-block"><Timer.Minutes /></span>
                                                                            <span className="d-inline-block">:</span>
                                                                            <span className="d-inline-block "><Timer.Seconds /></span>

                                                                            <span className="d-inline-block mx-2">  and  </span>
                                                                            <span className="d-inline-block ">  Day  </span>
                                                                            <span className="d-inline-block "><Timer.Days /></span>
                                                                        </div>
                                                                    )}
                                                                </Timer>
                                                            }
                                                            {
                                                                auction?.status === "PREPARING" && <span>Offer in preparation</span>
                                                            }

                                                        </div>
                                                        }






                                                        {/* <div className="jumbotron countdown show end date-show"
                                                            data-Date='2021/5/13 16:09:00'>
                                                            <div className="running">
                                                                <timer>
                                                                    <span className="days">13</span>:12<span className="hours"></span>:21<span
                                                                        className="minutes"></span><span className="show-text"></span>
                                                                </timer>
                                                                <div className="break"></div>
                                                            </div>
                                                            <div className="ended">
                                                                <div className="text">Offer is ended</div>
                                                            </div>
                                                        </div> */}
                                                    </div>
                                                    <div className="col-sm-7 textalign-right">


                                                    {auction?.status !== "CLOSED" ? <Link to={`/one-auction/${auction?.id}`}>
                                                                <button type="button" className="btn btn-gray mx-2">
                                                                    <FontAwesomeIcon className="mx-1" icon={faEye} />
                                                                    {AuctionType(auction?.type)}
                                                                </button>
                                                            </Link> : null}

                                                            {AuctionStatusTextBtn(auction?.status, auction?.user_is_enrolled, auction.id)}

                                                        {/* <Link to={`/en/one-auction/${item?.id}/`}>
                                                            <button type="button" className="btn btn-gray view me-2">View live</button>
                                                        </Link>

                                                        <Link to={`/en/buyer-register/${item?.id}/`}>
                                                            <button type="button" className="btn btn-main join">Join this auction</button>
                                                        </Link> */}



                                                    </div>
                                                </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CardHouseAuction;
