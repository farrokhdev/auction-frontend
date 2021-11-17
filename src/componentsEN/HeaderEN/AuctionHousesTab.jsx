import React from 'react'

function ArtworksTab() {
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

                {[1, 2, 3, 4, 5, 6, 7].map((auctionHouse , key) => (
                    <React.Fragment key={key}>
                        <div className="col">
                            <div className="h-block">
                                <div className="row">
                                <div className="col-lg-4 col-3">
                                    <div className="h-block-img">
                                    <img
                                        src="https://picsum.photos/seed/picsum/159/159"
                                        width="159"
                                        height="159"
                                        alt="smart auction"
                                        className="img-fluid w-100"
                                    />
                                    </div>
                                </div>
                                <div className="col-lg-8 col-9">
                                    <div className="h-block-header">
                                    <div className="h-block-title">
                                        <h3 className="default">Sareban gallery</h3>
                                        <h6 className="default">Visual art</h6>
                                    </div>
                                    <button type="button" className="btn-follow following">
                                        Follow
                                    </button>
                                    </div>
                                    <div className="h-block-info">
                                    <a href="+982144258856" className="info-tel all-info">
                                        +98 21 4425 8856
                                    </a>
                                    <address className="all-info">
                                        <span className="province">Tehran Province,</span>Tehran, Hoveyzeh
                                        St, No.130
                                    </address>
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
</div>

    )
}

export default ArtworksTab;
