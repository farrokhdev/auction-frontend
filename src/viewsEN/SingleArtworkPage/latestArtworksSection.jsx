import React from "react";
import CardArtworkLatestSection from "./CardArtworkLatestSection";

function latestArtworksSection() {
  return (
    
    <div className="row ">
        <section className="Categorized-artworks related-artworks">
            <div className="container innercontainer">
                <div className="row">
                    <div className="col-md-3 col-sm-12">
                        <div className="main-title">
                            <h2 className="default titr">Latest Artworks</h2>
                            <a href="#" className="btn-view">View all</a>
                        </div>
                    </div>
                </div>
                <div className="owl-carousel" id="relatedArtworks">

                    <div style={{overflow : 'auto'}} className="d-flex justify-content-between">

                        <CardArtworkLatestSection/>
                        <CardArtworkLatestSection/>
                        <CardArtworkLatestSection/>
                        <CardArtworkLatestSection/>
                        <CardArtworkLatestSection/>

                    </div>

                </div>
            </div>
        </section>
    </div>
  );
}

export default latestArtworksSection;
