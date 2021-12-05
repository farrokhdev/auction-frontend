import React from "react";

function NavbarTabsInfoAuction({auction}) {
  return (
    <ul
      className="nav nav-tabs justify-content-star main-tab"
      id="auction-tab"
      role="tablist"
    >
      <li className="nav-item" role="presentation">
        <button
          className="nav-link active"
          data-bs-toggle="tab"
          data-bs-target="#auction1"
          type="button"
          role="tab"
          aria-controls="catsearch1"
          aria-selected="true"
        >
          Artworks ({auction?.products_count})
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#auction2"
          type="button"
          role="tab"
          aria-controls="tab2"
          aria-selected="false"
        >
          Auction details
        </button>
      </li>
    </ul>
  );
}

export default NavbarTabsInfoAuction;
