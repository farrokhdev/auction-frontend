import React from 'react'
import { Link } from 'react-router-dom';

function ArtworksTab({items}) {
    return (
        <div className="tab-content main-tab-content " id="cat-serach-content">
      <div
        className="tab-pane fade show active"
        id="catsearch4"
        role="tabpane4"
        aria-labelledby="home-tab"
      >
        <div className="owl-carousel">
        <div className="row row-cols-xxxxl-3 row-cols-xl-2 row-cols-1">    

                {items?.home_auctions?.length ? items?.home_auctions?.map((house , key) => (
                    <React.Fragment key={key}>
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
                                            {/* <button
                                                    onClick={() =>
                                                      Follow(
                                                        house?.following?.follow?.is_active ?
                                                        house?.following?.follow?.id :
                                                        house?.id, house?.following?.follow?.is_active)
                                                      }
                                                      type="button" className={" btn-follow " + (house?.following?.follow?.is_active ? "following" : "")}>
                                                    {house?.following?.follow?.is_active ? "Unfollow" : "Follow"}
                                                </button> */}
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

                    </React.Fragment>
                )) : ''}

            </div>

        </div>
      </div>
</div>

    )
}

export default ArtworksTab;
