import React from "react";

function SerchAndFiltersPanel() {

  return (
    <div class="row">
      <div class="col-lg-3 col-sm-5 col-9">
        <div class="search-input">
          <input
            type="text"
            class="default-input"
            placeholder="Search more than 100 auctions..."
          />
          <button type="button" class="btn-search"></button>
        </div>
      </div>
      <div class="col-lg-9 col-sm-7 col-3">
        <div class="sort-block">
          <span class="btn-sort">
            Sort by<span class="d-none d-md-inline-block">:</span>
          </span>
          <ul class="sort-list">
            <li>Ascending</li>
            <li class="active">Descending</li>
            <li>popular</li>
            <li>Sell</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SerchAndFiltersPanel;
