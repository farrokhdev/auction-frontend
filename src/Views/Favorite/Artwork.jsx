import React from 'react'
import pic2 from "../../images/pic2.jpg"
import CardArtwork from './CardArtwork'

function Artwork() {
    return (
        <>
            <div className="tab-content " id="profile-tab-content">
                <div className="tab-pane fade show active" id="profiletab1" role="tabpanel"
                    aria-labelledby="profiletab1-tab">
                    <div className="row row-cols-xxxxl-6 row-cols-xxl-5 row-cols-xl-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
                        {[1,2,3,4,5,6,7,8].map((item)=>
                      <CardArtwork 
                            Artworks="سهراب سپهری"
                            Journal="از ژورنال سقاخانه"
                            StartDate="7 خرداد"
                            EndDate="9 خرداد"
                            Price="100,000,000"
                      />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Artwork;