import React from "react";

function CardArtworkOfAuction() {
  return (
    <div class="artwork-block">
      <div class="artwork-img">
        <img
          src="img/img-6.jpg"
          width="317"
          height="280"
          alt=""
          class="img-fluid w-100"
        />
        <div class="artwork-category">
          <span class="category-save artwork-bookmark"></span>
        </div>
      </div>
      <div class="block-body">
        <div class="ra-row">
          <div class="ra-col">
            <h6 class="default gray50 ">Sohrab Sepehri</h6>
            <h4 class="default">From the Saqakhaneh series</h4>
          </div>
          <div class="ra-col">
            <h5 class="default lot-num">1</h5>
          </div>
        </div>
        <div class="detail-bid">
          <div class="db-left">
            <span class="db-title">Estimate</span>
            <div class="price-block">
              <span class="price">500-700</span>
              <span class="unit"> USD</span>
            </div>
          </div>
          <span class="seprator brdrbefor"></span>
          <div class="db-right ">
            <span class="db-title">Start bid</span>
            <div class="price-block">
              <span class="price">100</span>
              <span class="unit"> USD</span>
            </div>
          </div>
        </div>
        <button type="button" class="btn-lightpink">
          Place bid
        </button>
      </div>
    </div>
  );
}

export default CardArtworkOfAuction;
