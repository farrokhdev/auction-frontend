import React from 'react'

function CardDetailInfoArtwork() {
    return (
        <div className="col-lg-6 ">
        <div className="detail-block">
            <div className="detail-block-header">
                <a href="#" className="btn-lot prev"><span className="d-none d-md-block">Prev Lot</span></a>
                <div className="search-input">
                    <input type="text" className="default-input" placeholder="Enter Lot number..."/>
                    <button type="button" className="btn-search"></button>
                </div>
                <a href="#" className="btn-lot next"><span className="d-none d-md-block">Next Lot</span></a>
            </div>
            <div className="detail-block-body">
                <div className="bg-shadow br-shadow20">
                    <div className="detail-info">
                        <div className="detail-head">
                            <span className="category-icon live-icon">Live<span className="d-none d-md-inline-block">Auction</span></span>
                            <button type="button" className="btn-bookmark">Bookmark</button>
                        </div>
                        <div className="detail-artwork">
                            <div className="d-artwork-left">
                                <a href="#" className="d-info artist"><h6 className="default">Sadeq Adhaam</h6></a>
                                <a href="#" className="d-info category"><h6 className="default">Modern and contemporary
                                    art</h6></a>
                                <a href="#" className="d-info gallery"><h6 className="default">Arthibition gallery</h6>
                                </a>
                            </div>
                            <div className="d-artwork-right">
                                <h5 className="default lot-num">1</h5>
                            </div>
                        </div>
                        <div className="detail-bid">
                            <div className="db-left">
                                <span className="db-title">Estimate</span>
                                <div className="price-block">
                                    <span className="price">500-700</span>
                                    <span className="unit"> USD</span>
                                </div>
                            </div>
                            <span className="seprator brdrbefor"></span>
                            <div className="db-right ">
                                <span className="db-title bluecolor">Current bid</span>
                                <div className="price-block bluecolor">
                                    <span className="price">2000</span>
                                    <span className="unit"> USD</span><span
                                        className="bids-num">(<span>12</span>bid)</span>
                                </div>
                            </div>
                        </div>

                        <div className="detail-placebid general-bid">
                            <div className="general-bid-block">
                                <div className="search-input">
                                    <input type="text" className="default-input"
                                           placeholder="Enter your maximum bid"/>
                                    <span className="unit">USD</span>
                                </div>
                                <button type="button" className="btn-lightpink">Submit</button>
                            </div>
                            <div className="general-bid-block">
                                <div className="number-input">
                                    <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"></button>
                                    <input className="default-inputquantity" min="0" name="quantity" type="number"
                                           max="100" step="10" placeholder="Select your bid"/>
                                    <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                            className="plus"></button>
                                    <span className="unit">USD</span>
                                </div>
                                <button type="button" className="btn-lightpink">Place bid</button>
                            </div>

                        </div>
                        <div className="detail-ah">
                            <div className="ah-left">
                                <div className="h-block-img">
                                    <img src="img/logo-3.png" width="159" height="159"
                                         alt="arthibition gallery" className="img-fluid w-100"/>
                                </div>
                                <div className="detail-ahm">
                                    <a href="#" className="ah-link"><h3 className="default">Arthibition gallery</h3></a>
                                    <button type="button" className="btn-follow">Follow</button>
                                </div>
                            </div>
                            <div className="ah-right">
                                <ul className="star-rate">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CardDetailInfoArtwork;
