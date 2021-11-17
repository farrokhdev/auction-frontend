import React from "react";

function AllTab() {
  return (
    <div className="tab-content main-tab-content " id="cat-serach-content">
      <div
        className="tab-pane fade show active"
        id="catsearch1"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        <div className="owl-carousel">

        <div className="row row-cols-xxxxl-6 row-cols-xxl-5 row-cols-xl-4 row-cols-md-3 row-cols-2">    

                {[1, 2, 3, 4, 5, 6, 7].map((artwork , key) => (
                    <React.Fragment key={key}>
                        <div className="col-12 col-md-6 col-lg-4">
                            <a href="#" className="artwork-block">
                            <div className="artwork-img">
                                <img
                                src="https://picsum.photos/seed/picsum/998/880"
                                width="998"
                                height="880"
                                alt=""
                                className="img-fluid w-100"
                                />
                                <div className="artwork-category">
                                <span className="category-save artwork-bookmark active"></span>
                                <span className="category-icon live-icon">Live</span>
                                </div>
                            </div>
                            <div className="block-body text-center">
                                <h6 className="default gray50 ">Sohrab Sepehri</h6>
                                <h4 className="default">From the Saqakhaneh series</h4>
                                <div className="auction-calender">
                                <div className="auction-date">
                                    <span className="start-date">19 June</span>
                                    <span className="end-date">22 June</span>
                                </div>
                                <div className="auction-time">
                                    <span className="start-time">10 AM</span>
                                </div>
                                </div>
                                <div className="price-block">
                                <span>Start bid:</span>
                                <span className="price">
                                    100<span className="price-unit">$</span>
                                </span>
                                </div>
                            </div>
                            </a>
                        </div>

                    </React.Fragment>
                ))}

            </div>

        </div>
      </div>
    </div>
  );
}

export default AllTab;
