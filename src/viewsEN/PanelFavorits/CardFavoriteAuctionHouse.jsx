import React from "react";

function CardFavoriteAuctionHouse() {
  return (
    <div class="col">
      <div class="h-block">
        <div class="row">
          <div class="col-lg-4 col-3">
            <div class="h-block-img">
              <img
                src="https://picsum.photos/seed/picsum/159/159"
                width="159"
                height="159"
                alt="smart auction"
                class="img-fluid w-100"
              />
            </div>
          </div>
          <div class="col-lg-8 col-9">
            <div class="h-block-header">
              <div class="h-block-title">
                <h3 class="default">Sareban gallery</h3>
                <h6 class="default">Visual art</h6>
              </div>
              <button type="button" class="btn-follow following">
                Follow
              </button>
            </div>
            <div class="h-block-info">
              <a href="+982144258856" class="info-tel all-info">
                +98 21 4425 8856
              </a>
              <address class="all-info">
                <span class="province">Tehran Province,</span>Tehran, Hoveyzeh
                St, No.130
              </address>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardFavoriteAuctionHouse;
