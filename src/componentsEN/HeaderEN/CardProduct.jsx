import React from 'react'
import { Link } from 'react-router-dom'

function CardProduct({item}) {
    return (
        <div className="col-12 col-md-6 col-lg-4">

                            <Link to={`/en/artworks/${item?.id}`} className="artwork-block w-25">


                                <div className="artwork-img">
                                <div className="bg-shadow tl-shadow10">
                                    <img
                                        src={item?.media[0]?.exact_url }
                                        style={{width : '276px' , height : '226px'}}
                                        width="276"
                                        height="226"
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                                </div>
                                <div className="block-body">
                                    <h4 className="default">{item?.artwork_title_en}</h4>
                                    <h6 className="default">{item?.artist_name_en}</h6>
                                </div>

                            </Link>

                            </div>
    )
}

export default CardProduct
