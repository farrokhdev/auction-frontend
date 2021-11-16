import React from "react";

function NavBarDetailSection() {
  return (
    <ul
      className="nav nav-tabs justify-content-star main-tab"
      id="da-tab"
      role="tablist"
    >
      <li className="nav-item" role="presentation">
        <button
          className="nav-link active"
          data-bs-toggle="tab"
          data-bs-target="#detail-artwork1"
          type="button"
          role="tab"
          aria-controls="catsearch1"
          aria-selected="true"
        >
          About artwork
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#detail-artwork2"
          type="button"
          role="tab"
          aria-controls="tab2"
          aria-selected="false"
        >
          Auction details
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#detail-artwork3"
          type="button"
          role="tab"
          aria-controls="tab3"
          aria-selected="false"
        >
          Auction terms
        </button>
      </li>
    </ul>
  );
}

export default NavBarDetailSection;
