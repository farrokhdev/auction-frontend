import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import Footer from '../../components/footer';
import img from '../../images/img-1.jpg';
import phone from '../../images/tel-darkgray.svg';
import axios from '../../utils/request';
import { BASE_URL } from '../../utils';
import { LIST_AUCTIONS } from '../../utils/constant';
import queryString from 'query-string';
import SiderSectionSingleHouseAuction from './SiderSectionSingleHouseAuction';
import CardAucitonInfo from './CardAucitonInfo';
import PaginationComponent from '../../components/PaginationComponent';

function SingleHouseAuctionPage(props) {

    const [params, setParams] = useState({
        page: 1,
        page_size: 10,
        home_auction: props.match.params.id,
        ordering: '-creation_time',
        visible_in_site: true,

    })

    const [auctionsList, setAuctionsList] = useState([])
    const [HouseDetails, setHouseDetails] = useState([])
    const [countHouseDetails, setCountHouseDetails] = useState(0)


    const getListAuctions = () => {
        const queries = queryString.stringify(params);
        axios.get(`${BASE_URL}${LIST_AUCTIONS}?${queries}`).then(res => {
            setAuctionsList(res.data.data.result);
            setCountHouseDetails(res.data.data.count)
        }).catch(err => {
            console.error(err)
        })
    }

    const Follow = (data, action) => {
        if (action) {
            axios.delete(`${BASE_URL}/following/${data}`)
                .then(resp => {
                    getListAuctions()
                })
        } else {
            axios.post(`${BASE_URL}/following/`, {
                "content_type": "auction",
                "object_id": data,
                "activity_type": "follow"
            })
                .then(resp => {
                    if (resp.data.code === 201) {
                        getListAuctions()
                    }

                })
                .catch(err => {
                    console.error(err);
                })

        }
    }

    const handeSelectPage = (e) => {
        setParams({
            ...params, page: e
        })
    }

    useEffect(() => {
        getListAuctions();
    }, [params])


    return (
        <div>
            <Header />
            <main className="innercontent" id="all-auctions">
                <div className="container innercontainer">

                    <div className="row sm-mrgb50">
                        <div className="col-6">
                            <div className="main-title d-inline-flex">
                                <h2 className="default titr">{HouseDetails?.home_auction_name}</h2>
                                <ul className="breadcrumb-cs">
                                    <li><Link to="/">صفحه اصلی</Link></li>
                                    <li><Link to="/house-acutions">خانه‌های حراج</Link></li>
                                    <li className="active">{HouseDetails?.home_auction_name}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-lg-3">
                            <SiderSectionSingleHouseAuction id={props.match.params.id} setHouseDetails={setHouseDetails} />
                        </div>

                        <div className="col-lg-9">

                            {auctionsList?.length ? auctionsList?.map(auction => (
                                <CardAucitonInfo
                                    auction={auction}
                                    Follow={Follow}
                                />
                            )) : null}

                        </div>
                        <PaginationComponent count={countHouseDetails} handeSelectPage={handeSelectPage} />

                    </div>


                </div>
            </main>

            <Footer />
        </div>
    )
}

export default SingleHouseAuctionPage