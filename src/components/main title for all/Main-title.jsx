import React from "react";
import { Link } from "react-router-dom";

function Maintitle({handleSetOrdering  , title}) {
  return (
    <>
      <div className="row sm-mrgb50">
        <div className="col-6">
          <div className="main-title d-inline-flex">
            <h2 className="default titr">{title}</h2>
            <ul className="breadcrumb-cs">
              <li>
                <Link to="/">صفحه اصلی</Link>
              </li>
              <li className="active">{title}</li>
            </ul>
          </div>
        </div>
        <div className="w-100 lg-mrgb50 d-lg-none d-block"></div>
        <div className="col-3 d-lg-none d-block">
          <button type="button" className="btn-filter btn">
            فیلتر
          </button>
        </div>
        <div className="col-lg-6 col-9 ">
          <div className="sort-block">
            <span className="btn-sort">
              مرتب‌سازی با<span className="d-none d-md-inline-block">:</span>
            </span>
            <ul className="sort-list">
              <li onClick={(e)=>handleSetOrdering("creation_date")} className="active">جدیدترین</li>
              <li disabled>نزدیک‌ترین</li>
              <li disabled>محبوب‌ترین</li>
              <li disabled>پرفروش‌ترین</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Maintitle;
