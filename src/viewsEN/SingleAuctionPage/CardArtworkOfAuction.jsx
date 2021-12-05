import React , {useEffect} from "react";
import { Link } from "react-router-dom";
import numberWithCommas from "../../components/threeNumber";
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import { useSelector } from "react-redux";

function CardArtworkOfAuction({product , key , setBookmark , bookmark , getProducts , auction}) {

  const { is_logged_in } = useSelector((state) => state.authReducer)
  useEffect(() => {
    console.log("key" , key);
  }, [product])


  const addBookmark = (data, action) => {
    if (action) {
        axios.delete(`${BASE_URL}/following/${data}`)
            .then(resp => {
                getProducts()
            })
    } else {
        axios.post(`${BASE_URL}/following/`, {
            "content_type": "product",
            "object_id": data,
            "activity_type": "mark"
        })
            .then(resp => {
                if (resp.data.code === 201) {
                    getProducts()
                }

            })
            .catch(err => {
                console.error(err);
            })

    }
}


  return (
    <div className="artwork-block">
      <div className="artwork-img">
      <Link to={`/en/artworks/${product?.id}`}>
          <div className="image-custom-back" style={{
              backgroundImage: `url(${product?.media[0]?.exact_url})`,
              height: "250px",
              width : 'auto'
              
          }} />
      </Link>


      <div className="artwork-category"
          onClick={() => setBookmark(!bookmark)}>
          <span onClick={() =>
              addBookmark(
                  product?.following?.bookmark?.is_active ?
                      product?.following?.bookmark?.id :
                      product?.id, product?.following?.bookmark?.is_active)
          }
              className={"category-save artwork-bookmark " + (product?.following?.bookmark?.is_active ? "active" : "")} />
      </div>
      </div>
      <div className="block-body">
        <div className="ra-row">
          <div className="ra-col">
            <h6 className="default gray50 ">{product?.english_artist_name}</h6>
            <h4 className="default">{product?.artwork_title_en}</h4>
          </div>
          <div className="ra-col">
            {/* <h5 className="default lot-num">1</h5> */}
          </div>
        </div>
        <div className="detail-bid">
          <div className="db-left">
            <span className="db-title">Estimate</span>
            <div className="price-block">
            <span
                className="price">{numberWithCommas(product?.min_price)} - {numberWithCommas(product?.max_price)}</span>
                <span className="unit"> {product?.latest_auction?.currency !== "dollar" ? product?.latest_auction?.currency : "USD" }</span>
            </div>
          </div>
          <span className="seprator brdrbefor"></span>
          {
                auction?.status === "CLOSED" ?
                    <div>
                        {
                            product?.sale_status ?
                                <div className="db-right text-success">
                                    <span className="db-title"> Final offer</span>
                                    <div className="price-block">
                                        <span
                                            className="price text-success">{numberWithCommas(product?.bidding_details?.max_bid) || 0}</span>
                                        <span
                                            className="unit text-success"> {product?.latest_auction?.currency}</span>
                                        <span className="text-success"
                                            style={{ fontSize: '.7rem' }}> ({product?.bidding_details?.total_bids}) offer</span>

                                    </div>
                                </div>
                                :
                                <div className="db-right ">
                                    <span className="db-title">Current price</span>
                                    <div className="price-block">
                                        <span className="price">{numberWithCommas(product?.bidding_details?.max_bid) || 0}</span>
                                        <span className="unit"> {product?.latest_auction?.currency !== "dollar" ? product?.latest_auction?.currency : "USD" }</span>
                                        <span className="unit" style={{ fontSize: '.7rem' }}> ({product?.bidding_details?.total_bids}) Bids</span>
                                    </div>
                                </div>
                        }
                    </div>

                    :
                    <div className="db-right ">
                        <span className="db-title">Base price  </span>
                        <div className="price-block">
                            <span className="price">{numberWithCommas(product?.price)}</span>
                            <span className="unit"> {product?.latest_auction?.currency !== "dollar" ? product?.latest_auction?.currency : "USD" }</span>

                        </div>
                    </div>
            }


        </div>
          {is_logged_in ? <div>
            {product?.sale_status ?
                  <Link to={`/artworks/${product?.id}`} type="button"
                      className="text-center btn-lightgreenbg">
                      Order sold
                  </Link> :
                <div>
                {auction?.status === "CLOSED" ?
                <Link to={`/artworks/${product?.id}`} type="button"
                    className="text-center btn-lightpink">
                    Order not sold
                </Link>
                :
                 <Link to={`/artworks/${product?.id}`} type="button"
                    className="text-center btn-lightpink">
                    {product?.product_status === "on_stage" ? 'Submit order' : 'View artwork'}
                </Link>
              }
          </div>}
      </div>
    : ''}
        
      </div>
    </div>
  );
}

export default CardArtworkOfAuction;
