import React from "react";
import { Link } from "react-router-dom";

import img6 from "../../images/img-6.jpg";
import img7 from "../../images/img-7.jpg";

function Workofinterestshow() {
  return (
    <>
      <div class="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 mrgt30 selected-artwork">
        <div class="col">
          <div class="artwork-block">
            <div class="artwork-img">
              <img
                src={img6}
                width="317"
                height="280"
                alt=""
                class="img-fluid"
              />
            </div>
            <div class="ra-row mrgt10">
              <div class="ra-col">
                <h6 class="default gray50 ">سهراب سپهری</h6>
                <h4 class="default">از ژورنال سقاخانه</h4>
              </div>
              <div class="ra-col">
                <h5 class="default lot-num">2</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="artwork-block">
            <div class="artwork-img">
              <img
                src={img6}
                width="317"
                height="280"
                alt=""
                class="img-fluid"
              />
            </div>
            <div class="ra-row mrgt10">
              <div class="ra-col">
                <h6 class="default gray50 ">سهراب سپهری</h6>
                <h4 class="default">از ژورنال سقاخانه</h4>
              </div>
              <div class="ra-col">
                <h5 class="default lot-num">7</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="artwork-block">
            <div class="artwork-img">
              <img
                src={img7}
                width="317"
                height="280"
                alt=""
                class="img-fluid"
              />
            </div>
            <div class="ra-row mrgt10">
              <div class="ra-col">
                <h6 class="default gray50 ">سهراب سپهری</h6>
                <h4 class="default">از ژورنال سقاخانه</h4>
              </div>
              <div class="ra-col">
                <h5 class="default lot-num">8</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="button-group">
        <Link to="/financial-information">
          <button type="button" class="btn-gray">
            بازگشت
          </button>
        </Link>
        <Link to="/wallet">
          <button type="button" class="btn-default">
            ادامه
          </button>
        </Link>
      </div>
    </>
  );
}

export default Workofinterestshow;
