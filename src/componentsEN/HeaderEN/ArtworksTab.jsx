import React from "react";
import { Link } from "react-router-dom";
import { handleShowImage } from "../../utils/showImageProduct";

function ArtworksTab({ items }) {
  return (
    <div className="tab-content main-tab-content " id="cat-serach-content">
      <div
        className="tab-pane fade show active"
        id="catsearch3"
        role="tabpane3"
        aria-labelledby="home-tab"
      >
        <div className="owl-carousel">
          <div className="row row-cols-xxxxl-6 row-cols-xxl-5 row-cols-xl-4 row-cols-md-3 row-cols-2">
            {items?.products?.length ? items?.products?.map((artwork, key) => (

                  <React.Fragment key={key}>

                    <div className="col-12 col-md-6 col-lg-4">
                      <Link
                        to={`/en/artworks/${artwork?.id}`}
                        className="artwork-block w-25"
                      >
                        <div className="artwork-img">
                          <div className="bg-shadow tl-shadow10">
                            <img
                              src={handleShowImage(artwork)}
                              style={{ width: "276px", height: "226px" }}
                              width="276"
                              height="226"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>
                        <div className="block-body">
                          <h4 className="default">
                            {artwork?.artwork_title_en}
                          </h4>
                          <h6 className="default">{artwork?.artist_name_en}</h6>
                        </div>
                      </Link>
                    </div>
                    
                  </React.Fragment>
                ))
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtworksTab;
