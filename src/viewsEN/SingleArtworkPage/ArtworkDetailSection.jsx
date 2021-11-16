import React from 'react'
import AboutArtwork from './AboutArtwork';
import AuctionDetail from './AuctionDetail';
import AuctionTerms from './AuctionTerms';
import NavBarDetailSection from './NavBarDetailSection';

function ArtworkDetailSection() {
    return (
        <div className="row">
            <NavBarDetailSection/>
            <div className="tab-content main-tab-content" id="da-content">
                <AboutArtwork/>
                <AuctionDetail/>
                <AuctionTerms/>
            </div>
    </div>
    )
}


export default ArtworkDetailSection;
