import React, { useState , useEffect} from 'react';
import HeaderEN from '../../componentsEN/HeaderEN';
import Footer from '../../componentsEN/Footer';
import MainTitle from '../../componentsEN/MainTitle/MainTitle';
import SiderHouseAucitons from './SiderHouseAucitons';
import logo from "../../imgEN/logo-1.jpg"
import PaginationComponent from '../../componentsEN/PaginationComponent';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import { BASE_URL } from '../../utils';
import axios from '../../utils/request';
import { CATEGORIE_ACTIVITY, HOME_AUCITONS } from '../../utils/constant';

function HouseAuctions() {

    const [Tags, setTags] = useState([])
    const [houseAuctionList, setHouseAuctionList] = useState([])
    const [categoryActivities, setCategoryActivities] = useState()
    const [countProducts, setCountProducts] = useState(1)
    const [countHousAuction, setCountHousAuction] = useState(1)
    const [loading, setLoading] = useState(false)
    const [params, setParams] = useState({
        page: 1,
        page_size: 10,
        activity_type: [],
        search: '',
        ordering: '',
    })


    const queries = queryString.stringify(params);

    const getHouseAuction = () => {
        setLoading(true)
        axios.get(`${BASE_URL}${HOME_AUCITONS}?${queries}`).then(res => {
            setHouseAuctionList(res.data.data.result)
            setCountHousAuction(res.data.data.count)
            setLoading(false)
        }).catch(err => {
            console.error(err);
            setLoading(false)
        })
    }

    const getCategoryActivity = () => {
        axios.get(`${BASE_URL}${CATEGORIE_ACTIVITY}`).then(res => {
            setCategoryActivities(res.data.data.result[0].children)
        }).catch(err => {
            console.error(err);
        })
    }

    useEffect(() => {
        getHouseAuction();
        getCategoryActivity()
    }, [params])

    const handleSetCategory = (value) => {
        setParams({
            ...params, activity_type: value
        })
    }

    const handleSetSearchFilter = (value) => {
        setParams({
            ...params, search: value
        })
    }

    const handleSetOrdering = () => {
        setParams({
            // since the ordering field on the product is different from auctions we have to
            // set this explicitly
            ...params, ordering: 'date_joined'
        })
    }

    const handleSetOrderingOld = () => {
        setParams({
            // since the ordering field on the product is different from auctions we have to
            // set this explicitly
            ...params, ordering: '-date_joined'
        })
    }
    const handleClose = (value) => {
        if (params?.activity_type.indexOf(value) > -1) {
            handleSetCategory(params?.activity_type?.filter(item => item !== value))
        }
        setTags(Tags?.filter((item) => item !== value))
    };

    const handleRemoveFilters = () => {
        setTags([])
        setParams({
            page: 1,
            page_size: 10,
            activity_type: [],
            search: '',
            ordering: '',
        })

    }


    const handeSelectPage = (e) => {
        setParams({
            ...params, page: e
        })
    }

    const Follow = (data, action) => {
        if (action) {
            axios.delete(`${BASE_URL}/following/${data}`)
                .then(resp => {
                    getHouseAuction()
                })
        } else {
            axios.post(`${BASE_URL}/following/`, {
                "content_type": "auction_house",
                "object_id": data,
                "activity_type": "follow"
            })
                .then(resp => {
                    if (resp.data.code === 201) {
                        getHouseAuction()
                    }

                })
                .catch(err => {
                    console.error(err);
                })

        }
    }

    return (
        <>
            <HeaderEN />
            <main className="innercontent" id="all-auctions">
                <div className="container innercontainer">
                    <MainTitle title={'Auction Houses'} handleSetOrdering={handleSetOrdering} handleSetOrderingOld={handleSetOrderingOld} />
                    <div className="row">
                        <SiderHouseAucitons
                            handleClose={handleClose}
                            Tags={Tags}
                            setTags={setTags}
                            handleRemoveFilters={handleRemoveFilters}
                            params={params}
                            handleSetCategory={handleSetCategory}
                            categoryActivities={categoryActivities}
                            handleSetSearchFilter={handleSetSearchFilter}
                        />

                        <div className="col-lg-9">
                            <div className="row row-cols-xl-2 row-cols-1">
                                {houseAuctionList?.length ? houseAuctionList?.map(house => (
                                    <React.Fragment key={house?.id}>
                                        <div className="col">
                                            <div className="h-block">
                                                <div className="row">
                                                    <div className="col-xl-5 col-3">
                                                        <div className="h-block-img box-image-house-auction">
                                                            <Link to={`/en/house-auctions/${house.id}`}>
                                                            <img src={house?.media[0]?.exact_url} className="image-house-auction" alt="smart auction"
                                                                className="img-fluid w-100 h-100" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-7 col-9">
                                                        <div className="h-block-header">
                                                            <div className="h-block-title">
                                                                <h3 className="default">{house?.home_auction_name_en}</h3>
                                                                <h6 className="default">{house?.home_auction_type ? house?.home_auction_type : ''}</h6>
                                                            </div>
                                                            <button
                                                                    onClick={() =>
                                                                        Follow(
                                                                            house?.following?.follow?.is_active ?
                                                                                house?.following?.follow?.id :
                                                                                house?.id, house?.following?.follow?.is_active)
                                                                    }
                                                                    type="button" className={" btn-follow " + (house?.following?.follow?.is_active ? "following" : "")}>
                                                                    {house?.following?.follow?.is_active ? "Unfollow" : "Follow"}
                                                                </button>
                                                        </div>
                                                        <div className="h-block-info">

                                                            <a href={house?.phone ? house?.phone : house?.mobile}
                                                                className="info-tel all-info">{house?.phone ? house?.phone : house?.mobile}
                                                            </a>
                                                
                                                            <address className="all-info">
                                                                {house?.home_auction_location?.address_en ? house?.home_auction_location?.address_en : ''}
                                                            </address>


                                                            {/* <a href="+982144258856" className="info-tel all-info">+98 21 4425 8856</a>
                                                            <address className="all-info"><span className="province">Tehran Province,</span>Tehran,
                                                                Hoveyzeh St, No.130
                                                            </address> */}
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </React.Fragment>
                                )) : ''}
                            </div>
                        </div>
                        <PaginationComponent count={countHousAuction} handeSelectPage={handeSelectPage} />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default HouseAuctions