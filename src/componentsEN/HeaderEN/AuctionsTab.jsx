import React from 'react'

function AuctionsTab() {
    return (
        <div className="tab-content main-tab-content " id="cat-serach-content">
      <div
        className="tab-pane fade show active"
        id="catsearch2"
        role="tabpane2"
        aria-labelledby="home-tab"
      >
        <div className="owl-carousel">


            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((auction , key) => (
                <React.Fragment>
                    <div className="row-blocks ">
                        <div className="row ">
                            <div className="col-xxl-2 col-md-3">
                                <div className="bg-shadow tl-shadow10">
                                <img
                                    src="https://picsum.photos/seed/picsum/500/500"
                                    width="500"
                                    height="500"
                                    alt=""
                                />
                                </div>
                            </div>
                            <div className="col-xxl-10 col-md-9">
                                <div className="block-head row">
                                <div className="col-xl-3 col-sm-4 col-3">
                                    <span className="category-icon live-icon">
                                    Live<span className="d-none d-md-inline-block">Auction</span>
                                    </span>
                                </div>
                                <div className="col-xl-9 col-sm-8 col-9 textalign-right">
                                    <span className="reminder-icon">Reminde me</span>
                                    <button type="button" className="link-source">
                                    <span>
                                        <span className="d-none d-sm-inline-block">View </span>artworks
                                        (<span>25</span>)
                                    </span>
                                    </button>
                                </div>
                                </div>
                                <div className="block-main">
                                <h5 className="default">
                                    Live online only Mid Century Modern, Decorative Arts and
                                    Pictures Antiques, Books{" "}
                                </h5>
                                <div className="block-detail">
                                    <h6 className="default">Contemprory art</h6>
                                    <h6 className="default gray50">Arthibition gallery</h6>
                                </div>
                                </div>
                                <div className="block-footer row">
                                <div className="col-sm-5">
                                    <div
                                    className="jumbotron countdown show end date-show"
                                    data-Date="2021/5/13 16:09:00"
                                    >
                                    <div className="running">
                                        <timer>
                                        <span className="days"></span>:<span className="hours"></span>:
                                        <span className="minutes"></span>
                                        <span className="show-text"></span>
                                        </timer>
                                        <div className="break"></div>
                                    </div>
                                    <div className="ended">
                                        <div className="text">Offer is ended</div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-sm-7 textalign-right">
                                    <button type="button" className="btn btn-gray view">
                                    View live
                                    </button>
                                    <button type="button" className="btn btn-main join">
                                    Join this auction
                                    </button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div> 

                </React.Fragment>
            ))}

            </div>

        </div>
      </div>


    )
}

export default AuctionsTab;



