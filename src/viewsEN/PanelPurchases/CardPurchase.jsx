import React from "react";
import { Link } from "react-router-dom";
import moment from 'jalali-moment';
import { handleShowImage } from "../../utils/showImageProduct";

function CardPurchase(props) {

    const {setVisibleModalPayment  , purchase , setIs_call_service_detail_product , setPRODUCT_ID} = props

    const handleShowModal = (id) => {
      setIs_call_service_detail_product(true)
      setPRODUCT_ID(id)

      setTimeout(() => {
          setVisibleModalPayment(true)
        }, 500);
    }

  return (
    <div class="col">
      <div class="col-flex">
        <div class="artwork-img">
          <img
            src={handleShowImage(purchase)}
            width="317"
            height="280"
            alt=""
            class="img-fluid"
          />
        </div>
        <div class="artwork-info">
          <div class="artwork-info-left col-md-6">
            <div>
              <span>{purchase?.english_artist_name}</span>
              <h5 class="default">{purchase?.artwork_title_en}</h5>
            </div>
            <p class="mrgt10">
              From <span className="mx-1">{purchase?.latest_auction?.house?.home_auction_name_en}</span>
            </p>
          </div>
          
          <div class="artwork-info-right col-md-6">


          <p className={props.paymentMethod === "OFFLINE" && "d-none"} >
              After paying the amount, they will contact you from{" "}
              <Link to="/">{props.Link} </Link> to send the artwork.
          </p>

          <p className={props.paymentMethod === "ONLINE" && "d-none"}>
               <Link to="/">{purchase?.latest_auction?.house?.home_auction_name_en} </Link>
              To send and payment method, they will contact you.
          </p>

          <p className="showdate mr-2">
               <span className="ml-2">Purchase date :</span>
              <span className="mx-2">
                {purchase?.bidding_details?.max_bid_date ?
                  `${moment(purchase?.bidding_details?.max_bid_date , 'YYYY/MM/DD').locale('en').format(`YYYY`)} 
                  ${moment(purchase?.bidding_details?.max_bid_date , 'YYYY-MM-DD').locale('en').format('MMMM DD')}   
                  ` : ''}</span>
          </p>


            <div class="d-flex justify-content-between flex-row align-items-baseline mrgt10">

            <p className="">
                <span className="mx-2">Your bid :</span>
                <span className="bid-style ">{purchase?.bidding_details?.max_bid.price}
                {purchase?.bidding_details?.max_bid.price ?  
                  <span className="price-unit mx-2">{purchase?.latest_auction?.currency !== "dollar" ? purchase?.latest_auction?.currency : 'USD'}</span>
                : ''}
                </span>
            </p>

              <button
                type="button"
                class="btn-default mrgl20"
                data-bs-toggle="modal"
                data-bs-target="#transfertopay"
                onClick={()=>handleShowModal(purchase?.id)}
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
