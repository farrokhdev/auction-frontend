import React from "react";

function CardArtworkOfAuction() {
  return (
    <div className="artwork-block">
      <div className="artwork-img">
        <img
          src="img/img-6.jpg"
          width="317"
          height="280"
          alt=""
          className="img-fluid w-100"
        />
        <div className="artwork-category">
          <span className="category-save artwork-bookmark"></span>
        </div>
      </div>
      <div className="block-body">
        <div className="ra-row">
          <div className="ra-col">
            <h6 className="default gray50 ">Sohrab Sepehri</h6>
            <h4 className="default">From the Saqakhaneh series</h4>
          </div>
          <div className="ra-col">
            <h5 className="default lot-num">1</h5>
          </div>
        </div>
        <div className="detail-bid">
          <div className="db-left">
            <span className="db-title">Estimate</span>
            <div className="price-block">
              <span className="price">500-700</span>
              <span className="unit"> USD</span>
            </div>
          </div>
          <span className="seprator brdrbefor"></span>
          <div className="db-right ">
            <span className="db-title">Start bid</span>
            <div className="price-block">
              <span className="price">100</span>
              <span className="unit"> USD</span>
            </div>
          </div>
        </div>
        <button type="button" className="btn-lightpink">
          Place bid
        </button>
      </div>
    </div>
  );
}

export default CardArtworkOfAuction;
