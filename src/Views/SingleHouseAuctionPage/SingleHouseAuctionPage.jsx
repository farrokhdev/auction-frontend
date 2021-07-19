import React , {useState , useEffect} from 'react';
import {Link} from 'react-router-dom';
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

function SingleHouseAuctionPage(props) {

    const [params, setParams] = useState({
        home_auction : props.match.params.id
    })

    const [auctionsList, setAuctionsList] = useState([])
    const [HouseDetails, setHouseDetails] = useState([])

    const getListAuctions = () => {
        const queries = queryString.stringify(params);
        axios.get(`${BASE_URL}${LIST_AUCTIONS}?${queries}`).then(res => {
            setAuctionsList(res.data.data.result);
        }).catch(err => {
            console.error(err)
        })
    }
    useEffect(() => {
        getListAuctions();
    }, [])


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
                    <SiderSectionSingleHouseAuction id={props.match.params.id} setHouseDetails={setHouseDetails}/>
                </div>
                
                <div className="col-lg-9">

                    {auctionsList?.length ? auctionsList?.map(auction => (

                        <Link to={`/auction-details/${auction?.id}`}>
                            <CardAucitonInfo 
                                auction={auction}
                                img={img}
                            />
                        </Link>

                    )) : null}




{/* 
                    <Link to="/auction-details/1">
                        <div className="row-blocks">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="bg-shadow tr-shadow10">
                                        <img src={img} width="500" height="500" alt="" />
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="block-head row">
                                        <div className="col-xl-3 col-sm-4 col-3">
                                            <span className="category-icon live-icon"><span
                                                    className="d-none d-md-inline-block">حراج</span> زنده</span>
                                        </div>
                                        <div className="col-xl-9 col-sm-8 col-9 textalign-left">
                                            <span className="reminder-icon">یادآوری</span>
                                            <button type="button" className="link-source">
                                                <span><span className="d-none d-sm-inline-block">مشاهده </span>آثار
                                                    (<span>25</span>)</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="block-main">
                                        <h5 className="default">فقط بصورت آنلاین زندگی کنید ، کتابهای عتیقه ، هنرهای تزئینی
                                            و تصاویر</h5>
                                        <div className="block-detail">
                                            <h6 className="default">هنر معاصر</h6>
                                            <h6 className="default gray50">گالری آرتیبیشن</h6>
                                        </div>
                                    </div>
                                    <div className="block-footer row">
                                        <div className="col-sm-5">
                                            <div className="jumbotron countdown show end date-show"
                                                data-Date='2021/06/05 16:09:00'>
                                                <div className="running">
                                                    <timer>
                                                        <span className="days"></span>:<span className="hours"></span>:<span
                                                            className="minutes"></span><span className="show-text"></span>
                                                    </timer>
                                                    <div className="break"></div>
                                                </div>
                                                <div className="ended">
                                                    <div className="text">حراج به پایان رسید</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-7 textalign-left">
                                            <button type="button" className="btn btn-gray view">مشاهده زنده</button>
                                            <button type="button" className="btn btn-main join">عضویت در حراج</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link> */}


                </div>
            </div>

            
        </div>
    </main>

    <Footer />
</div>
)
}

export default SingleHouseAuctionPage