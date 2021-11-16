import React, { useState , useEffect} from 'react';
import HeaderEN from '../../componentsEN/HeaderEN';
import Footer from '../../componentsEN/Footer';
import MainTitle from '../../componentsEN/MainTitle/MainTitle';
import logo from "../../imgEN/logo-1.jpg"

import queryString from 'query-string';
import axios from '../../utils/request';
import { BASE_URL } from '../../utils';
import { LIST_AUCTIONS } from '../../utils/constant';
import {  Spin } from "antd";
import CardArtworkOfAuction from './CardArtworkOfAuction';
import PaginationComponent from '../../componentsEN/PaginationComponent';
import AuctionDetailInfo from './AuctionDetailInfo';
import NavbarTabsInfoAuction from './NavbarTabsInfoAuction';
import SerchAndFiltersPanel from './SerchAndFiltersPanel';
import AuctionCardDetailInfo from './AuctionCardDetailInfo';

function SingleAuctionPage(props) {

    const [countAuctionsOfHouseAuction, setCountAuctionsOfHouseAuction] = useState(0)
    const [auctionsOfHouseAuction, setAuctionsOfHouseAuction] = useState([])
    const [countArtworksOfAuction, setCountArtworksOfAuction] = useState(0)
    const [loading, setLoading] = useState(false);


    const [params, setParams] = useState({
        home_auction : props.match.params.id ,
        page : 1 , 
        page_size : 10 
    })

    const getListAuctions = () => {
        setLoading(true)
        const queries = queryString.stringify(params);
        axios.get(`${BASE_URL}${LIST_AUCTIONS}?${queries}`).then(res => {
            setAuctionsOfHouseAuction(res.data.data.result);
            setCountAuctionsOfHouseAuction(res.data.data.count)
            setLoading(false)
        }).catch(err => {
            console.error(err)
            setLoading(false)
        })
    }
    useEffect(() => {
        getListAuctions();
    }, [params])



    const handleSetOrderingOld = () => {
        setParams({
            // since the ordering field on the product is different from auctions we have to
            // set this explicitly
            ...params, ordering: '-creation_time'
        })
    }

    const handleSetOrdering = () => {
        setParams({
            // since the ordering field on the product is different from auctions we have to
            // set this explicitly
            ...params, ordering: 'creation_time'
        })
    }

    

    const handeSelectPage = (e) => {
        setParams({
            ...params, page: e
        })
    }


    return (
        <>
        <Spin spinning={loading}>
            <HeaderEN />
            <main className="innercontent" id="all-auctions">
                <div className="container innercontainer">
                    <MainTitle title={'Collection7'} handleSetOrdering={handleSetOrdering} handleSetOrderingOld={handleSetOrderingOld} />

            <div className="w-100 lg-mrgb50 d-lg-none d-block"></div>
            <div className="col-lg-6 ">
                <p className="auction-link">More information about this auction, <a href="#">Click here.</a></p>
            </div>
       
        <div className="inner-cover"></div>
        <div className="flex-row-reverse d-flex over-cover ">
            <div className="col-xl-4 col-lg-5 col-md-6 col-12">
                <div className="bg-shadow br-shadow10">


                    <AuctionCardDetailInfo/>

                </div>
            </div>
        </div>

        <div className="" >

            <NavbarTabsInfoAuction/>

            <div className="tab-content main-tab-content " id="auction-content">


                <div 
                    className="tab-pane fade show active" 
                    id="auction1" 
                    role="tabpanel"
                    aria-labelledby="home-tab">

                    
                    <SerchAndFiltersPanel/>



                    <div className="row mrgt30 all-artwork "  >

                        <div className="col-12 col-md-6 col-lg-4">
                            <CardArtworkOfAuction/>
                        </div> 



                        <div className="col-12 col-md-6 col-lg-4">
                            <CardArtworkOfAuction/>
                        </div>  
                        <div className="col-12 col-md-6 col-lg-4">
                            <CardArtworkOfAuction/>
                        </div>  
                        <div className="col-12 col-md-6 col-lg-4">
                            <CardArtworkOfAuction/>
                        </div>  
                        <div className="col-12 col-md-6 col-lg-4">
                            <CardArtworkOfAuction/>
                        </div>  
                        <div className="col-12 col-md-6 col-lg-4">
                            <CardArtworkOfAuction/>
                        </div>  
                        <div className="col-12 col-md-6 col-lg-4">
                            <CardArtworkOfAuction/>
                        </div>  
                        <div className="col-12 col-md-6 col-lg-4">
                            <CardArtworkOfAuction/>
                        </div>  
                        <div className="col-12 col-md-6 col-lg-4">
                            <CardArtworkOfAuction/>
                        </div>      
        

                    </div>

                    <PaginationComponent count={countArtworksOfAuction} handeSelectPage={handeSelectPage} />

                </div>


                <div 
                    className="tab-pane fade " 
                    id="auction2" 
                    role="tabpanel"
                    aria-labelledby="profile-tab">
                    <AuctionDetailInfo/>
                </div>



            </div>
        </div>
    </div>
</main>
            <Footer />
            </Spin>
        </>
    )
}

export default SingleAuctionPage;
