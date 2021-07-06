import axios from '../../utils/request';
import React , {useState , useEffect} from 'react'
import PaginationComponent from '../../components/PaginationComponent';
import img from '../../images/logo-1.jpg';
import { BASE_URL } from '../../utils';
import { CATEGORIE_ACTIVITY, HOME_AUCITONS } from '../../utils/constant';
import SiderHouseAucitons from './SiderHouseAucitons';
import queryString from 'query-string';

function HouseAuctionsPage() {

    const [houseAuctionList , setHouseAuctionList ] = useState([])
    const [categoryActivities, setCategoryActivities] = useState([])
    const [countHousAuction, setCountHousAuction] = useState(0)
    const [params, setParams] = useState({
        page : 1,
        page_size : 10 , 
        activity_type : [], 
        search : '' , 
        ordering : ''
    })

    console.log("params ->>> ", params);
    
    const queries = queryString.stringify(params);

    const getHouseAuction = () => {
        axios.get(`${BASE_URL}${HOME_AUCITONS}?${queries}`).then(res => {
            console.log(res.data.data.result)
            setHouseAuctionList(res.data.data.result)
            setCountHousAuction(res.data.data.count)
        }).catch(err => {
            console.error(err);
        })
    }
    const getCategoryActivity = () => {
        axios.get(`${BASE_URL}${CATEGORIE_ACTIVITY}`).then(res => {
            console.log(res.data.data.result)
            setCategoryActivities(res.data.data.result)
        }).catch(err => {
            console.error(err);
        })
    }

    const handleSetCategory = (value) => {

        console.log("House-Auction -> ", value);
        // setParams({
        //   ...params , activity_type : value
        // })
    }

    const handleSetSearchFilter = (value) => {
        setParams({
          ...params , search : value
        })
    }   
    
    const handleSetOrdering = (value) => {
        setParams({
          ...params , ordering : value
        })
    }


    useEffect(() => {
        getHouseAuction();
        getCategoryActivity();
    }, [params])

    const handeSelectPage = (e) => {
        console.log("Log Of Pagination", e);
        // setcurrentPage(e)
    }



return (

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
                <div className="w-100 lg-mrgb50 d-lg-none d-block"></div>
                <div className="col-3 d-lg-none d-block">
                    <button type="button" className="btn-filter btn">فیلتر</button>
                </div>
                <div className="col-lg-6 col-9 ">
                    <div className="sort-block">
                        <span className="btn-sort">مرتب‌سازی با
                    <span className="d-none d-md-inline-block"> : </span>
                        </span>
                        <ul className="sort-list">
                            <li onClick={(e)=>handleSetOrdering(e.target.value)}>جدیدترین</li>
                            <li className="active">نزدیک‌ترین</li>
                            <li>محبوب‌ترین</li>
                            <li>پرفروش‌ترین</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">


     
            <SiderHouseAucitons 
                params={params}
                handleSetCategory={handleSetCategory}
                categoryActivities={categoryActivities}
                handleSetSearchFilter={handleSetSearchFilter}
            />


                <div className="col-lg-9 ">
                    <div className="row row-cols-xl-2 row-cols-1">



                        {houseAuctionList.length ? houseAuctionList?.map(house => (
                                 <React.Fragment key={house?.id}>
                                    <div className="col">
                                        <div className="h-block">
                                            <div className="row">
                                                <div className="col-xl-5 col-3">
                                                    <div className="h-block-img">
                                                        <img src={img} width="159" height="159" alt="smart auction"
                                                            className="img-fluid" />
                                                    </div>
                                                </div>
                                                <div className="col-xl-7 col-9">
                                                    <div className="h-block-header">
                                                        <div className="h-block-title">
                                                            {/* <h3 className="default">گالری ساربان</h3> */}
                                                            <h3 className="default">{house?.home_auction_name ? house?.home_auction_name : 'گالری ساربان'}</h3>
                                                            {/* <h6 className="default">هنرهای تجسمی, ...</h6> */}
                                                            <h6 className="default">{house?.home_auction_type ? house?.home_auction_type : '---'}</h6>
                                                        </div>
                                                        <button type="button" className="btn-follow">دنبال کردن</button>
                                                    </div>
                                                    <div className="h-block-info">
                                                        <a href="+982144258856" className="info-tel all-info">{house?.mobile ? house?.mobile : "---"}</a>
                                                        {/* <address className="all-info"><span className="province">تهران، </span>میدان
                                                            هویزه، پلاک 103
                                                        </address> */}
                                                        <address className="all-info">
                                                              {house?.address ? house?.address : '---'}
                                                        </address>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </React.Fragment>
                        )) : ''}


                        {/* <div className="col">
                            <div className="h-block">
                                <div className="row">
                                    <div className="col-xl-5 col-3">
                                        <div className="h-block-img">
                                            <img src={img} width="159" height="159" alt="smart auction"
                                                className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-9">
                                        <div className="h-block-header">
                                            <div className="h-block-title">
                                                <h3 className="default">گالری ساربان</h3>
                                                <h6 className="default">هنرهای تجسمی, ...</h6>
                                            </div>
                                            <button type="button" className="btn-follow">دنبال کردن</button>
                                        </div>
                                        <div className="h-block-info">
                                            <a href="+982144258856" className="info-tel all-info">+98 21 4425 8856</a>
                                            <address className="all-info"><span className="province">تهران، </span>میدان
                                                هویزه، پلاک 103
                                            </address>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className="col">
                            <div className="h-block">
                                <div className="row">
                                    <div className="col-xl-5 col-3">
                                        <div className="h-block-img">
                                            <img src={img} width="159" height="159" alt="smart auction"
                                                className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-9">
                                        <div className="h-block-header">
                                            <div className="h-block-title">
                                                <h3 className="default">گالری ساربان</h3>
                                                <h6 className="default">هنرهای تجسمی</h6>
                                            </div>
                                            <button type="button" className="btn-follow">دنبال کردن</button>
                                        </div>
                                        <div className="h-block-info">
                                            <a href="+982144258856" className="info-tel all-info">+98 21 4425 8856</a>
                                            <address className="all-info"><span className="province">تهران، </span>میدان
                                                هویزه، پلاک 103
                                            </address>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col">
                            <div className="h-block">
                                <div className="row">
                                    <div className="col-xl-5 col-3">
                                        <div className="h-block-img">
                                            <img src={img} width="159" height="159" alt="smart auction"
                                                className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-9">
                                        <div className="h-block-header">
                                            <div className="h-block-title">
                                                <h3 className="default">گالری ساربان</h3>
                                                <h6 className="default">هنرهای تجسمی</h6>
                                            </div>
                                            <button type="button" className="btn-follow">دنبال کردن</button>
                                        </div>
                                        <div className="h-block-info">
                                            <a href="+982144258856" className="info-tel all-info">+98 21 4425 8856</a>
                                            <address className="all-info"><span className="province">تهران، </span>میدان
                                                هویزه، پلاک 103
                                            </address>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col">
                            <div className="h-block">
                                <div className="row">
                                    <div className="col-xl-5 col-3">
                                        <div className="h-block-img">
                                            <img src={img} width="159" height="159" alt="smart auction"
                                                className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-9">
                                        <div className="h-block-header">
                                            <div className="h-block-title">
                                                <h3 className="default">گالری ساربان</h3>
                                                <h6 className="default">هنرهای تجسمی, ...</h6>
                                            </div>
                                            <button type="button" className="btn-follow">دنبال کردن</button>
                                        </div>
                                        <div className="h-block-info">
                                            <a href="+982144258856" className="info-tel all-info">+98 21 4425 8856</a>
                                            <address className="all-info"><span className="province">تهران، </span>میدان
                                                هویزه، پلاک 103
                                            </address>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col">
                            <div className="h-block">
                                <div className="row">
                                    <div className="col-xl-5 col-3">
                                        <div className="h-block-img">
                                            <img src={img} width="159" height="159" alt="smart auction"
                                                className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-9">
                                        <div className="h-block-header">
                                            <div className="h-block-title">
                                                <h3 className="default">گالری ساربان</h3>
                                                <h6 className="default">هنرهای تجسمی</h6>
                                            </div>
                                            <button type="button" className="btn-follow">دنبال کردن</button>
                                        </div>
                                        <div className="h-block-info">
                                            <a href="+982144258856" className="info-tel all-info">+98 21 4425 8856</a>
                                            <address className="all-info"><span className="province">تهران، </span>میدان
                                                هویزه، پلاک 103
                                            </address>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col">
                            <div className="h-block">
                                <div className="row">
                                    <div className="col-xl-5 col-3">
                                        <div className="h-block-img">
                                            <img src={img} width="159" height="159" alt="smart auction"
                                                className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-9">
                                        <div className="h-block-header">
                                            <div className="h-block-title">
                                                <h3 className="default">گالری ساربان</h3>
                                                <h6 className="default">هنرهای تجسمی</h6>
                                            </div>
                                            <button type="button" className="btn-follow">دنبال کردن</button>
                                        </div>
                                        <div className="h-block-info">
                                            <a href="+982144258856" className="info-tel all-info">+98 21 4425 8856</a>
                                            <address className="all-info"><span className="province">تهران، </span>میدان
                                                هویزه، پلاک 103
                                            </address>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div> */}


                    </div>

                    <PaginationComponent count={countHousAuction} handeSelectPage={handeSelectPage} />
                    {/* <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous"></a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item active" aria-current="page"><a className="page-link" href="#">2</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next"></a>
                            </li>
                        </ul>
                    </nav> */}
                </div>
            </div>
        </div>
    </main>

)
}

export default HouseAuctionsPage;