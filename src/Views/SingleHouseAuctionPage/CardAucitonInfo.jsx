import React from 'react';
import classnames from 'classnames';
import moment from 'jalali-moment';
import { convertMouthToPersian, convertStatusAuctionToTextPersian, convertStatusShowAuctionPersian, convertTypeAuctionToPersian } from '../../utils/converTypePersion';

function CardAucitonInfo({auction }) {
    
    return (
        <div className="row-blocks">
        <div className="row">
            <div className="col-md-4">
                <div className="bg-shadow tr-shadow10">
                    {/* <img src="img/slider1.jpg" width="500" height="500" alt="" /> */}
                    <img src={auction.media.exact_url} width="500" height="500" alt="" />
                </div>
            </div>
            <div className="col-md-8">
                <div className="block-head row">
                    <div className="col-xl-3 col-sm-4 col-3">
                        <span 
                            className={classnames("category-icon", {
                                "live-icon": auction?.type === 'LIVE',
                                "online-icon": auction?.type === 'ONLINE',
                                "timed-icon": auction?.type === 'PERIODIC',
                                "firstoffer-icon": auction?.type === 'HIDDEN',
                                "secondoffer-icon": auction?.type === 'SECOND_HIDDEN',
                                
                            })} >
                            <span className="d-none d-md-inline-block mx-1"> حراج </span>
                                {auction?.type ? convertTypeAuctionToPersian(auction?.type) : ''}
                        </span>
                    </div>
                    <div className="col-xl-9 col-sm-8 col-9 textalign-left">
                        <span className="reminder-icon">یادآوری</span>
                        <button type="button" className="link-source">
                            <span><span className="d-none d-sm-inline-block">مشاهده </span>آثار
                                (<span>25</span>)</span>
                        </button>
                    </div>
                </div>
                <div className="block-main">
            
                        
                        <h5 className="default">{auction?.title ? auction?.title : ''}</h5>
                    {/* <div className="block-detail"> */}
                    <div className="">
                        {/* <h6 className="default">هنر معاصر</h6> */}
                        {/* <h6 className="default gray50">گالری آرتیبیشن</h6> */}
                    </div>
                </div>
                <div className="block-footer row">

                    <div className="col-sm-5">
                        <div className="auction-calender date-show">

                            <div className={classnames("auction-date" , {
                                "d-none": auction?.status === 'CLOSED' ,
                            })} >
                                <span className="start-date">{auction?.start_time ? convertMouthToPersian(moment(auction?.start_time).format('MM')) : ''}</span>
                                <span className="end-date">{auction?.end_time ? convertMouthToPersian(moment(auction?.end_time).format('MM')) : ''}</span>
                            </div>


                            <div className={classnames("auction-time" , {
                                "d-none": auction?.status === 'CLOSED' ,
                            })} >
                                <span className="start-time">{auction?.start_time ? moment(auction?.start_time).format('DD') : ''}</span>
                                <span className="end-time">{auction?.end_time ? moment(auction?.end_time).format('DD') : ''}</span>
                            </div>


                            {auction?.status === "CLOSED" ? 
                            
                                <div className="ended">
                                    <div className="text">حراج به پایان رسید</div>
                                </div>

                            : ''}

                        </div>
                    </div>

                    <div className="col-sm-7 textalign-left">
                        {/* <button  className={classnames("btn btn-gray view mx-2" , { */}
                        <button  className={classnames("btn btn-gray  mx-2" , {
                                "d-none": auction?.status === 'CLOSED' ,
                            })} type="button"  >
                                {auction?.type ? convertStatusShowAuctionPersian(auction?.type)  : null}
                        </button>

                        <button className={classnames("btn", "btn-main" , "join" , {
                                "d-none": auction?.status === 'ACTIVE',
                                "d-none": auction?.status === 'CLOSED',
                            })} type="button" >عضویت در حراج</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
    )
}

export default CardAucitonInfo
