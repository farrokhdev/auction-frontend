import React from "react";
import ModalPayment from "./ModalPayment";

function CardPurchase(props) {

    const {setVisibleModalPayment , visibleModalPayment} = props

    const handleShowModal = () => {
        setVisibleModalPayment(true)
    }

  return (
    <div class="col">
      <div class="col-flex">
        <div class="artwork-img">
          <img
            src="https://picsum.photos/seed/picsum/317/280"
            width="317"
            height="280"
            alt=""
            class="img-fluid"
          />
        </div>
        <div class="artwork-info">
          <div class="artwork-info-left col-md-6">
            <div>
              <span>Sadeq Adhaam</span>
              <h5 class="default">From the Saqakhaneh series</h5>
            </div>
            <p class="mrgt10">
              From<a href="#">Collection7</a>
            </p>
          </div>
          <div class="artwork-info-right col-md-6">
            <p class="d-block">
              After paying the amount, they will contact you from{" "}
              <a href="#">Artibition Gallery </a> to send the artwork.
            </p>
            <p class="showdate">
              Purchase date: <span>2021 May 12</span>
            </p>
            <div class="d-flex justify-content-between flex-row align-items-baseline mrgt10">
              <p class="">
                Your bid :
                <span class="bid-style">
                  3000 <span class="price-unit">USD</span>
                </span>
              </p>
              <button
                type="button"
                class="btn-default mrgl20"
                data-bs-toggle="modal"
                data-bs-target="#transfertopay"
                onClick={handleShowModal}
              >
                Pay now
              </button>

          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPurchase;
