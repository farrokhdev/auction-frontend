import React from 'react';
import { DEFAULT_URL_IMAGE } from '../../utils/defaultImage';
import { convertTypeToEn } from '../../utils/convertTypeEnglish';
import classnames from 'classnames';
import momentJalaali from 'moment';

function AuctionDetail({artwork}) {
    return (
        <div className="tab-pane fade" id="detail-artwork2" role="tabpanel"
        aria-labelledby="profile-tab">
       <div className="row-blocks">
           <div className="row">
               <div className="col-md-3">
                    <div className="bg-shadow tl-shadow10">
                        <img src={artwork?.latest_auction?.media?.exact_url ? artwork?.latest_auction?.media?.exact_url : DEFAULT_URL_IMAGE }  alt="auction-pic"/>
                    </div>
               </div>
               <div className="col-md-9">
                   <div className="block-head row">
                       <div className="col-xl-3 col-sm-4 col-3">
                            <span>
                                {artwork?.latest_auction?.type ?  convertTypeToEn(artwork?.latest_auction?.type) : ''}
                            </span>
                       </div>

                        <div className="col-xl-9 col-sm-8 col-9 textalign-right">
                            <span className="reminder-icon">Reminde me</span>
                            <button type="button" className="link-source">
                            <span><span
                                    className="d-none d-sm-inline-block">View </span>artworks (<span>25</span>)</span>
                            </button>
                        </div>


                   </div>

                   <div className="block-main">
                        <h5 className="default">{artwork?.latest_auction?.title_en ? artwork?.latest_auction?.title_en : ''}</h5>
                        <div className="block-detail">
                            {/* <h6 className="default">Contemprory art</h6> */}
                            <h6 className="default gray50">{artwork?.latest_auction?.house?.home_auction_name_en ? artwork?.latest_auction?.house?.home_auction_name_en : ''}</h6>
                        </div>
                    </div>

                    <div className="block-footer row">

                        <div className="col-sm-5">
                            <div className="auction-calender date-show">

                                <div className={classnames("auction-date" , {
                                    "d-none": artwork?.latest_auction?.status === 'CLOSED' ,
                                })} >
                                    <span className="start-date">{artwork?.latest_auction?.start_time ? (momentJalaali(artwork?.latest_auction?.start_time).format('MM')) : ''}</span>
                                    <span className="end-date">{artwork?.latest_auction?.end_time ? (momentJalaali(artwork?.latest_auction?.end_time).format('MM')) : ''}</span>
                                </div>


                                <div className={classnames("auction-time" , {
                                    "d-none": artwork?.latest_auction?.status === 'CLOSED' ,
                                })} >
                                    <span className="start-time">{artwork?.latest_auction?.start_time ? momentJalaali(artwork?.latest_auction?.start_time).format('DD') : ''}</span>
                                    <span className="end-time">{artwork?.latest_auction?.end_time ? momentJalaali(artwork?.latest_auction?.end_time).format('DD') : ''}</span>
                                </div>


                                {artwork?.latest_auction?.status === "CLOSED" ? 
                                
                                    <div className="ended">
                                        <div className="text">Order ended</div>
                                    </div>

                                : ''}

                            </div>
                        </div>

                        <div className="col-sm-7 textalign-left">
                            {/* <button  className={classnames("btn btn-gray view mx-2" , { */}
                            <button  className={classnames("btn btn-gray  mx-2" , {
                                    "d-none": artwork?.latest_auction?.status === 'CLOSED' ,
                                })} type="button"  >
                                    {/* {artwork?.latest_auction?.type ? convertStatusShowAuctionPersian(artwork?.latest_auction?.type)  : null} */}
                                    View live
                            </button>

                            <button className={classnames("btn", "btn-main" , "join" , {
                                    "d-none": artwork?.latest_auction?.status === 'ACTIVE',
                                    "d-none": artwork?.latest_auction?.status === 'CLOSED',
                                })} type="button" >Join this auction</button>
                        </div>

                    </div>

               </div>
           </div>
       </div>
   </div>
    )
}

export default AuctionDetail;
