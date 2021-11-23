import React, { useState , useEffect} from 'react';
import HeaderEN from '../../componentsEN/HeaderEN';
import Footer from '../../componentsEN/Footer';
import MainTitle from '../../componentsEN/MainTitle/MainTitle';
import logo3 from "../../imgEN/logo-3.png"
import PaginationComponent from '../../componentsEN/PaginationComponent';
import CardHouseAuction from './CardHouseAuction';
import queryString from 'query-string';
import axios from '../../utils/request';
import { BASE_URL } from '../../utils';
import { LIST_AUCTIONS } from '../../utils/constant';
import {  Spin } from "antd";
import SiderSectionSingleHouseAuctionPage from './SiderSectionSingleHouseAuctionPage';

function SingleHouseAuctionPage(props) {

    const [countAuctionsOfHouseAuction, setCountAuctionsOfHouseAuction] = useState(0)
    const [auctionsOfHouseAuction, setAuctionsOfHouseAuction] = useState([])
    const [HouseDetails, setHouseDetails] = useState([])
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


                        <SiderSectionSingleHouseAuctionPage id={props.match.params.id} setHouseDetails={setHouseDetails}/>

            <div className="col-lg-9 ">

                {auctionsOfHouseAuction?.length ? auctionsOfHouseAuction?.map(auction => 

                    <React.Fragment>
                        <CardHouseAuction auction={auction} getListAuctions={getListAuctions}/>
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
