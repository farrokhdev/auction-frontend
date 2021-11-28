import React from 'react';
import AboutArtwork from './AboutArtwork';
import AuctionDetail from './AuctionDetail';
import AuctionTerms from './AuctionTerms';
import NavBarDetailSection from './NavBarDetailSection';

function ArtworkDetailSection({artwork}) {
    return (
        <div className="row">
            <NavBarDetailSection/>
            <div className="tab-content main-tab-content" id="da-content">
                <AboutArtwork artwork={artwork}/>
                <AuctionDetail artwork={artwork}/>
                <AuctionTerms artwork={artwork}/>
            </div>
    </div>
    )
}


export default ArtworkDetailSection;
