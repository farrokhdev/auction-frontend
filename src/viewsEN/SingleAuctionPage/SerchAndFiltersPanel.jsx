import React from "react";

function SerchAndFiltersPanel({setParams , params}) {

  return (
    <div className="row">
      <div className="col-lg-3 col-sm-5 col-9">
        <div className="search-input">
          <input
            onChange={(e) => {
              setParams({
                  ...params, search: e.target.value
              })
            }}
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
            <li
                onClick={() => {
                    setParams({
                        ...params, ordering: "id"
                    })
                }}
                className={params.ordering === "id" ? "active" : ""}
            >Ascending</li>
            <li onClick={() => {
                  setParams({
                      ...params, ordering: "-id"
                  })
              }}
              className={params.ordering === "-id" ? "active" : ""}>Descending</li>
   
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SerchAndFiltersPanel;
