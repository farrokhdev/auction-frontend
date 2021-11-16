import React from "react";

function AuctionCardDetailInfo() {
  return (
    <div class="auction-detail ">
      <div class="block-head row">
        <div class="col-6">
          <span class="category-icon online-icon">Online</span>
        </div>
        <div class="col-6 textalign-right">
          <span class="reminder-icon">Reminde me</span>
        </div>
      </div>
      <div class="auction-calender">
        <div class="auction-date">
          <span class="start-date">19 June</span>
          <span class="end-date">22 June</span>
        </div>
        <div class="auction-time">
          <span class="start-time">10 AM</span>
          <span class="end-time">10 PM</span>
        </div>
      </div>
      <div class="auction-moreinfo">
        <a href="#" class="d-info category">
          <h6 class="default">Modern and contemporary art</h6>
        </a>
        <a href="#" class="d-info gallery">
          <h6 class="default">Arthibition gallery</h6>
        </a>
      </div>
      <div class="auction-btns">
        <button type="button" class="btn btn-gray view">
          View live
        </button>
        <button type="button" class="btn btn-main join">
          Join <span class="">this auction</span>
        </button>
      </div>
      <div class="detail-bid">
        <div class="db-left">
          <span class="db-title">Artworks</span>
          <div class="price-block">
            <span class="price">100</span>
          </div>
        </div>
        <span class="seprator brdrbefor"></span>
        <div class="db-center">
          <span class="db-title">Estimate</span>
          <div class="price-block">
            <span class="price">500-700</span>
            <span class="unit"> USD</span>
          </div>
        </div>
        <span class="seprator brdrbefor"></span>
        <div class="db-right ">
          <span class="db-title ">Artists</span>
          <div class="price-block ">
            <span class="price">25</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuctionCardDetailInfo;
