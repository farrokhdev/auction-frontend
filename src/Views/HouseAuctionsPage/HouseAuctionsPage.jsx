import axios from '../../utils/request';
import React, { useState, useEffect } from 'react'
import PaginationComponent from '../../components/PaginationComponent';
import { BASE_URL } from '../../utils';
import { CATEGORIE_ACTIVITY, HOME_AUCITONS } from '../../utils/constant';
import SiderHouseAucitons from './SiderHouseAucitons';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import { Spin } from "antd";
import Header from "../../components/header/Header";
import Footer from "../../components/footer";
import {useDispatch,useSelector} from "react-redux";
import {openDashboard} from "../../redux/reducers/all/all.actions"
import { homeAuctionType } from '../../utils/converTypePersion';

function HouseAuctionsPage() {
    const {is_Open_Dashboard} = useSelector((state) => state.allReducer)
    const dispatch=useDispatch();

    const [Tags, setTags] = useState([])
    const [houseAuctionList, setHouseAuctionList] = useState([])
    const [categoryActivities, setCategoryActivities] = useState([])
    const [countHousAuction, setCountHousAuction] = useState(0)
    const [loading, setLoading] = useState(false)
    const [params, setParams] = useState({
        page: 1,
        page_size: 10,
        activity_type: [],
        search: '',
        ordering: '-date_joined',
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
        axios.get(`${BASE_URL}${CATEGORIE_ACTIVITY}?title=خانه های حراج`).then(res => {
            setCategoryActivities(res.data.data.result[0].children)
        }).catch(err => {
            console.error(err);
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
            ...params, ordering: '-date_joined'
        })
    }


    useEffect(() => {
        getCategoryActivity();
    }, [])

    useEffect(() => {
        getHouseAuction();
    }, [params])

    const handeSelectPage = (e) => {
        setParams({
            ...params, page: e
        })
    }

    const parser = (data, type) => {
        for (let i in data)
            if (data[i].type === type) {
                return data[i].exact_url
            }
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
            <Header />
            <Spin spinning={loading}>
                <main className="innercontent" id="auction-houses">
                    <div className="container innercontainer">
                        <div className="row sm-mrgb50">
                            <div className="col-6">
                                <div className="main-title d-inline-flex">
                                    <h2 className="default titr">خانه‌های حراج</h2>
                                    <ul className="breadcrumb-cs">
                                        <li><a href="#">صفحه اصلی</a></li>
                                        <li className="active">خانه‌های حراج</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-100 lg-mrgb50 d-lg-none d-block" />
                            <div className="col-3 d-lg-none d-block">
                                <button type="button" className="btn-filter btn"  onClick={()=> dispatch(openDashboard(!is_Open_Dashboard))}>فیلتر</button>
                            </div>
                            <div className="col-lg-6 col-9 ">
                                <div className="sort-block">
                                    <span className="btn-sort">مرتب‌سازی با
                                        <span className="d-none d-md-inline-block"> : </span>
                                    </span>
                                    <ul className="sort-list">
                                        <li onClick={(e) => handleSetOrdering()}>جدیدترین</li>
                                        {/* <li className="active">نزدیک‌ترین</li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">


                            <SiderHouseAucitons
                                getHouseAuction={getHouseAuction}
                                handleClose={handleClose}
                                Tags={Tags}
                                setTags={setTags}
                                handleRemoveFilters={handleRemoveFilters}
                                params={params}
                                handleSetCategory={handleSetCategory}
                                categoryActivities={categoryActivities}
                                handleSetSearchFilter={handleSetSearchFilter}
                            />


                            <div className="col-lg-9 ">
                                <div className="row row-cols-xl-2 row-cols-1">


                                    {houseAuctionList?.length ? houseAuctionList?.map(house => (
                                        <React.Fragment key={house?.id}>
                                            <div className="col">
                                                <div className="h-block">

                                                    <div className="row">
                                                        <div className="col-xl-5 col-3">
                                                            <div className="h-block-img box-image-house-auction">
                                                                <Link to={`/house-acutions/${house?.id}`}>
                                                                    <img
                                                                        src={house?.media.filter(pic => pic?.type === "profile_image")[0]?.exact_url}
                                                                        width="159" height="159"
                                                                        alt="smart auction"
                                                                        className="img-fluid w-100 h-100"
                                                                        className="image-house-auction"
                                                                    />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-7 col-9">
                                                            <div className="h-block-header">
                                                                <div className="h-block-title">
                                                                    <h3 className="default">{house?.home_auction_name ? house?.home_auction_name : '---'}</h3>
                                                                    <h6 className="default">{homeAuctionType(house?.home_auction_type) ? homeAuctionType(house?.home_auction_type) : '---'}</h6>
                                                                </div>
                                                                <button
                                                                    onClick={() =>
                                                                        Follow(
                                                                            house?.following?.follow?.is_active ?
                                                                                house?.following?.follow?.id :
                                                                                house?.id, house?.following?.follow?.is_active)
                                                                    }
                                                                    type="button" className={" btn-follow " + (house?.following?.follow?.is_active ? "following" : "")}>
                                                                    {house?.following?.follow?.is_active ? "عدم دنبال کردن " : "دنبال کردن"}
                                                                </button>
                                                            </div>
                                                            <div className="h-block-info">
                                                                <a href={house?.phone ? house?.phone : house?.mobile}
                                                                    className="info-tel all-info">{house?.phone ? house?.phone : house?.mobile}</a>
                                                                {/* <address className="all-info"><span className="province">تهران، </span>میدان
                                                                هویزه، پلاک 103
                                                            </address> */}
                                                                <address className="all-info">
                                                                    {house?.home_auction_location?.address ? house?.home_auction_location?.address : '---'}
                                                                </address>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </React.Fragment>
                                    )) : ''}

                                </div>
                                {countHousAuction > 10 ?
                                    <PaginationComponent count={countHousAuction} handeSelectPage={handeSelectPage} />
                                    : ""
                                }
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </Spin>
        </>
    )
}

export default HouseAuctionsPage;