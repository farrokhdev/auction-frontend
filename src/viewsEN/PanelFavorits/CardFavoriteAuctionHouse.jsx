import React from "react";
import { Link } from 'react-router-dom';
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";


function CardFavoriteAuctionHouse({house , getData}) {

  
  const Follow = (id, action) => {


    if (action){
        axios.delete(`${BASE_URL}/following/${id}`)
            .then(resp => {
                getData()
            })
    } else {
        axios.post(`${BASE_URL}/following/` , {
            "content_type": "product",
            "object_id": id,
            "activity_type": "follow"
        })
            .then(resp => {
                if (resp.data.code === 201) {
                    getData()
                }

            })
            .catch(err => {
                console.error(err);
            })

    }
}

const parser = (data, type) => {
  for (let i in data)
      if (data[i].type === type) {
          return data[i].exact_url
      }
}


  return (

    <div className="col">
    <div className="h-block">
        <div className="d-block d-md-flex">
            <div className="col-12 col-md-4 col-xl-5">
                <div className="h-block-img box-image-house-auction">
                    <Link to={`/en/house-auctions/${house?.id}`}>
                    <img src={house?.media[0]?.exact_url} className="image-house-auction" alt="smart auction"
                        className="img-fluid w-100 h-100" />
                    </Link>
                </div>
            </div>
            <div className="col-12 col-md-8  col-xl-7 ">
                <div className="h-block-header">
                    <div className="h-block-title">
                        <h3 className="default">{house?.home_auction_name_en}</h3>
                        <h6 className="default">{house?.home_auction_type ? house?.home_auction_type : ''}</h6>
                    </div>
                    <button
                            onClick={() =>
                                Follow(
                                    house?.following?.follow?.is_active ?
                                        house?.following?.follow?.id :
                                        house?.id, house?.following?.follow?.is_active)
                            }
                            type="button" className={" btn-follow " + (house?.following?.follow?.is_active ? "following" : "")}>
                            {house?.following?.follow?.is_active ? "Unfollow" : "Follow"}
                        </button>
                </div>
                <div className="h-block-info">

                    <a href={house?.phone ? house?.phone : house?.mobile}
                        className="info-tel all-info">{house?.phone ? house?.phone : house?.mobile}
                    </a>
        
                    <address className="all-info">
                        {house?.home_auction_location?.address_en ? house?.home_auction_location?.address_en : ''}
                    </address>
 
                </div>
            </div>
        </div>

    </div>
</div>

  );
}

export default CardFavoriteAuctionHouse;
