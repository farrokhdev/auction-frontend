import React from "react";
import { Link } from "react-router-dom";

function Maintitle() {
  return (
    <>
      <div class="row sm-mrgb50">
        <div class="col-6">
          <div class="main-title d-inline-flex">
            <h2 class="default titr">حراج‌ها</h2>
            <ul class="breadcrumb-cs">
              <li>
                <Link to="/">صفحه اصلی</Link>
              </li>
              <li class="active">حراج‌ها</li>
            </ul>
          </div>
        </div>
        <div class="w-100 lg-mrgb50 d-lg-none d-block"></div>
        <div class="col-3 d-lg-none d-block">
          <button type="button" class="btn-filter btn">
            فیلتر
          </button>
        </div>
        <div class="col-lg-6 col-9 ">
          <div class="sort-block">
            <span class="btn-sort">
              مرتب‌سازی با<span class="d-none d-md-inline-block">:</span>
            </span>
            <ul class="sort-list">
              <li>جدیدترین</li>
              <li class="active">نزدیک‌ترین</li>
              <li>محبوب‌ترین</li>
              <li>پرفروش‌ترین</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Maintitle;
