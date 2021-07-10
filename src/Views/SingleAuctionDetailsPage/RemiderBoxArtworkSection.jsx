import React from 'react'

function RemiderBoxArtworkSection(props) {
    return (
        <div class="flex-row-reverse d-flex over-cover">
            <div class="col-xl-4 col-lg-5 col-md-6 col-12 ">
                <div class="bg-shadow bl-shadow10">
                    <div class="auction-detail">
                        <div class="block-head row">
                            <div class="col-6">
                                <span class="category-icon online-icon">{props?.auction_type}</span>
                            </div>
                            <div class="col-6 textalign-left">
                                <span class="reminder-icon">یادآوری</span>
                            </div>
                        </div>
                        <div class="auction-calender">
                            <div class="auction-date">
                                <span class="start-date">{props?.start_date}</span>
                                <span class="end-date">{props?.end_date}</span>
                            </div>
                            <div class="auction-time">
                                <span class="start-time">{props?.start_time}</span>
                                <span class="end-time">{props?.end_time}</span>
                            </div>
                        </div>
                        <div class="auction-moreinfo">
                            <a href="#" class="d-info category">
                                <h6 class="default">{props?.auction}</h6>
                            </a>
                            <a href="#" class="d-info gallery">
                                <h6 class="default">{props?.house_auction}</h6>
                            </a>
                        </div>
                        <div class="auction-btns">
                            <button type="button" class="btn btn-gray view">مشاهده زنده</button>
                            <button type="button" class="btn btn-main join">عضویت <span class="">در حراج</span></button>
                        </div>
                        <div class="detail-bid">
                            <div class="db-left">
                                <span class="db-title">آثار</span>
                                <div class="price-block">
                                    <span class="price">{props?.price_artworks}</span>
                                </div>
                            </div>
                            <span class="seprator brdrbefor"></span>
                            <div class="db-center">
                                <span class="db-title">تخمین</span>
                                <div class="price-block">
                                    <span class="price">{props?.price_range}</span>
                                    <span class="unit"> تومان</span>
                                </div>
                            </div>
                            <span class="seprator brdrbefor"></span>
                            <div class="db-right ">
                                <span class="db-title ">هنرمندان</span>
                                <div class="price-block ">
                                    <span class="price">{props?.price_artists}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RemiderBoxArtworkSection