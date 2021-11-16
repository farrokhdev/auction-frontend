import React from "react";

function AuctionCardDetailInfo() {
  return (
    <div className="auction-detail ">
      <div className="block-head row">
        <div className="col-6">
          <span className="category-icon online-icon">Online</span>
        </div>
        <div className="col-6 textalign-right">
          <span className="reminder-icon">Reminde me</span>
        </div>
      </div>
      <div className="auction-calender">
        <div className="auction-date">
          <span className="start-date">19 June</span>
          <span className="end-date">22 June</span>
        </div>
        <div className="auction-time">
          <span className="start-time">10 AM</span>
          <span className="end-time">10 PM</span>
        </div>
      </div>
      <div className="auction-moreinfo">
        <a href="#" className="d-info category">
          <h6 className="default">Modern and contemporary art</h6>
        </a>
        <a href="#" className="d-info gallery">
          <h6 className="default">Arthibition gallery</h6>
        </a>
      </div>
      <div className="auction-btns">
        <button type="button" className="btn btn-gray view">
          View live
        </button>
        <button type="button" className="btn btn-main join">
          Join <span className="">this auction</span>
        </button>
      </div>
      <div className="detail-bid">
        <div className="db-left">
          <span className="db-title">Artworks</span>
          <div className="price-block">
            <span className="price">100</span>
          </div>
        </div>
        <span className="seprator brdrbefor"></span>
        <div className="db-center">
          <span className="db-title">Estimate</span>
          <div className="price-block">
            <span className="price">500-700</span>
            <span className="unit"> USD</span>
          </div>
        </div>
        <span className="seprator brdrbefor"></span>
        <div className="db-right ">
          <span className="db-title ">Artists</span>
          <div className="price-block ">
            <span className="price">25</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuctionCardDetailInfo;
