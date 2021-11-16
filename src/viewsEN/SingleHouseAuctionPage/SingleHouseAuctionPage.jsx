import React, { useState , useEffect} from 'react';
import HeaderEN from '../../componentsEN/HeaderEN';
import Footer from '../../componentsEN/Footer';
import MainTitle from '../../componentsEN/MainTitle/MainTitle';
import logo from "../../imgEN/logo-1.jpg"
import PaginationComponent from '../../componentsEN/PaginationComponent';
import CardHouseAuction from './CardHouseAuction';
import queryString from 'query-string';
import axios from '../../utils/request';
import { BASE_URL } from '../../utils';
import { LIST_AUCTIONS } from '../../utils/constant';
import {  Spin } from "antd";

function SingleHouseAuctionPage(props) {

    const [countAuctionsOfHouseAuction, setCountAuctionsOfHouseAuction] = useState(0)
    const [auctionsOfHouseAuction, setAuctionsOfHouseAuction] = useState([])
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
                    <MainTitle title={'Auction Houses'} handleSetOrdering={handleSetOrdering} handleSetOrderingOld={handleSetOrderingOld} />
                    <div className="row">


                        <div className="col-lg-3 ">
                            <div className="ah-block">
                                <div className="ah-block-info logo">
                                    <div className="bg-shadow tl-shadow10">
                                        <img src="img/logo-3.png" width="159" height="159" alt="arthibition gallery"/>
                                    </div>
                                </div>
                                <div className="ah-block-info ">
                                    <div className="ah-block-title">
                                        <h5 className="default">Visual art</h5>
                                        <button type="button" className="btn-follow">Follow</button>
                                    </div>
                                    <div className="d-sm-flex d-lg-block justify-content-sm-between">
                                        <div className="ah-block-all-info">
                                            <a href="#" className="link-info all-info">www.sarebangallery.com</a>
                                            <a href="mailto: Info@sarebangallery.com"
                                            className="all-info mail-info">Info@sarebangallery.com</a>
                                            <a href="+982144258856" className="info-tel all-info">+98 21 4425 8856</a>
                                            <address className="all-info"><span className="province">Tehran Province,</span>Tehran,
                                                Hoveyzeh St, No.130
                                            </address>
                                        </div>
                                        <div className="info-location bg-shadow tl-shadow10">
                                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12951.668025778226!2d51.4458866!3d35.7528446!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x42e7c301666fc308!2sArtibition%20Art%20Gallery!5e0!3m2!1sen!2s!4v1619847195968!5m2!1sen!2s"
                                                    width="100%" height="165" style="border:0;" allowfullscreen=""
                                                    loading="lazy"></iframe> */}
                                        </div>
                                    </div>
                                    <ul className="social">
                                        <li><a href="#" id="facebook"></a></li>
                                        <li><a href="#" id="instagram"></a></li>
                                        <li><a href="#" id="telegram"></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>



            <div className="col-lg-9 ">

                {auctionsOfHouseAuction?.length ? auctionsOfHouseAuction?.map(auction => 

                    <React.Fragment>
                        <CardHouseAuction/>
                    </React.Fragment>

                ) :  ''}

                <PaginationComponent count={countAuctionsOfHouseAuction} handeSelectPage={handeSelectPage} />

            </div>
        </div>
                </div>
            </main>
            <Footer />
            </Spin>
        </>
    )
}

export default SingleHouseAuctionPage
