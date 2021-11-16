import React from "react";

function CardHouseAuction() {
  return (
    <React.Fragment>
      <div class="row-blocks">
        <div class="row">
          <div class="col-md-4">
            <div class="bg-shadow tl-shadow10">
              <img src="img/slider1.jpg" width="500" height="500" alt="" />
            </div>
          </div>
          <div class="col-md-8">
            <div class="block-head row">
              <div class="col-xl-3 col-sm-4 col-3">
                <span class="category-icon live-icon">
                  Live<span class="d-none d-md-inline-block">Auction</span>
                </span>
              </div>
              <div class="col-xl-9 col-sm-8 col-9 textalign-right">
                <span class="reminder-icon">Reminde me</span>
                <button type="button" class="link-source">
                  <span>
                    <span class="d-none d-sm-inline-block">View </span>artworks
                    (<span>25</span>)
                  </span>
                </button>
              </div>
            </div>
            <div class="block-main">
              <h5 class="default">
                Live online only Mid Century Modern, Decorative Arts and
                Pictures Antiques, Books{" "}
              </h5>
              <div class="block-detail">
                <h6 class="default">Contemprory art</h6>
                <h6 class="default gray50">Arthibition gallery</h6>
              </div>
            </div>
            <div class="block-footer row">
              <div class="col-sm-5">
                <div
                  class="jumbotron countdown show end date-show"
                  data-Date="2021/5/13 16:09:00"
                >
                  <div class="running">
                    <timer>
                      <span class="days"></span>:<span class="hours"></span>:
                      <span class="minutes"></span>
                      <span class="show-text"></span>
                    </timer>
                    <div class="break"></div>
                  </div>
                  <div class="ended">
                    <div class="text">Offer is ended</div>
                  </div>
                </div>
              </div>
              <div class="col-sm-7 textalign-right">
                <button type="button" class="btn btn-gray view">
                  View live
                </button>
                <button type="button" class="btn btn-main join">
                  Join this auction
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CardHouseAuction;
