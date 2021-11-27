// import React from "react";
// import CardArtworkLatestSection from "./CardArtworkLatestSection";

// function latestArtworksSection() {
//   return (
    
//     <div className="row ">
//         <section className="Categorized-artworks related-artworks">
//             <div className="container innercontainer">
//                 <div className="row">
//                     <div className="col-md-3 col-sm-12">
//                         <div className="main-title">
//                             <h2 className="default titr">Latest Artworks</h2>
//                             <a href="#" className="btn-view">View all</a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="owl-carousel" id="relatedArtworks">

//                     <div style={{overflow : 'auto'}} className="d-flex justify-content-between">

//                         <CardArtworkLatestSection/>
//                         <CardArtworkLatestSection/>
//                         <CardArtworkLatestSection/>
//                         <CardArtworkLatestSection/>
//                         <CardArtworkLatestSection/>

//                     </div>

//                 </div>
//             </div>
//         </section>
//     </div>
//   );
// }

// export default latestArtworksSection;



import React, {useEffect, useState} from 'react';
import Slider from "react-slick";
import img from '../../images/img-1.jpg';
import bookmark_icon from '../../images/bookmark.svg';
import bookmark_active_icon from '../../images/bookmark-active.svg';
// import CardArtwork from './CardArtwork';
import axios from "../../utils/request";
import {BASE_URL} from '../../utils';
import {Link} from "react-router-dom";
import { DEFAULT_URL_IMAGE } from '../../utils/defaultImage';
import CardArtworkLatestSection from './CardArtworkLatestSection';

function LastAuctionsSection(props) {
    
    const {id , artwork_id , getProduct} =props;

    const [is_saved, setIs_saved] = useState(false)
    const [products, setProducts] = useState([])

    const handleToggleBookmark = () => {
        setIs_saved(!is_saved)
    }

    const getOtherProducts = () => {
        axios.get(`${BASE_URL}/sale/product/?auctions__id=${id}&page_size=8`)
            .then(resp => {
                console.log(resp)
                if (resp.data.code === 200) {
                    const res = resp.data?.data?.result;
                    setProducts(res.filter(item => item?.id  !== artwork_id ))
                }
            })
            .catch(err => {
                console.error(err);
            })
    }

    useEffect(() => {
        if(id)
        getOtherProducts()
    }, [id , artwork_id])

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };



    return (<>
        {id &&
    <div className="row">
        <section className="Categorized-artworks related-artworks">
            <div className="container innercontainer">
                <div className="row">
                    <div className="col-md-3 col-sm-12">
                        <div className="main-title">
                            <h2 className="default titr">LATEST ARTWORKS</h2>
                            <Link to={`/en/auctions/${props.id}/`} className="btn-view">View all</Link>
                        </div>
                    </div>
                </div>

                <div className="owl-carousel" id="relatedArtworks">

                    <Slider className="mt-5" {...settings}>
                        {products?.length ? products?.map((item, key) => {
                            return (
                                <div className="px-3" key={item?.id}>
                                    <CardArtworkLatestSection item={item} getOtherProducts={getOtherProducts}/>
                                </div>
                            )
                        }) : ""}

                    </Slider>

                </div>
            </div>
        </section>
    </div>
}
        </>
    )
}

export default LastAuctionsSection;
