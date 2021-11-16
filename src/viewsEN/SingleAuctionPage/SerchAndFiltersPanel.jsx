import React from "react";

function SerchAndFiltersPanel() {

  return (
    <div className="row">
      <div className="col-lg-3 col-sm-5 col-9">
        <div className="search-input">
          <input
            type="text"
            className="default-input"
            placeholder="Search more than 100 auctions..."
          />
          <button type="button" className="btn-search"></button>
        </div>
      </div>
      <div className="col-lg-9 col-sm-7 col-3">
        <div className="sort-block">
          <span className="btn-sort">
            Sort by<span className="d-none d-md-inline-block">:</span>
          </span>
          <ul className="sort-list">
            <li>Ascending</li>
            <li className="active">Descending</li>
            <li>popular</li>
            <li>Sell</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SerchAndFiltersPanel;
