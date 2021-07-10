import React from 'react'

import CardAuctionHouses from './CardAuctionHouses'

function AuctionHouses() {
    return (
        <>
            <div className="tab-content " id="profile-tab-content">
                <div className="tab-pane fade show active" id="profiletab1" role="tabpanel"
                    aria-labelledby="profiletab1-tab">
                    <div className="row row-cols-xxxxl-3 row-cols-xl-2 row-cols-1">

                        {/* <div className="row row-cols-xxxxl-3 row-cols-xl-2 row-cols-1"> */}
                        {[1, 2, 3, 4, 5].map((item) =>
                            <CardAuctionHouses
                                TitleHeadeGallery ="گالری ساربان"
                                TitleHeadeArt = "هنرهای تجسمی"
                                PhoneNumber = "+98 21 4425 8856"
                            />)}

                        {/* </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuctionHouses;