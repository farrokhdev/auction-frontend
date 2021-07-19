import React , {useState , useEffect} from "react";
import axios from "../../utils/request";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";
import img from '../../images/img-1.jpg'
import DetailAboutArtworkInfo from "./DetailAboutArtworkInfo";
import LastAuctionsSection from "./LastAuctionsSection";
import MainInfoArtwork from "./MainInfoArtwork";
import { BASE_URL } from "../../utils";
import { ONE_PRODUCT } from "../../utils/constant";


function SigningContract(props) {

    const [artwork, setArtwork] = useState()
    const [params, setParams] = useState({})
    console.log("Art --->>>> ",artwork);

    useEffect(() => {
        getProduct();
    }, [params])

    const getProduct = ()=>{
        axios.get(`${BASE_URL}${ONE_PRODUCT(props.match.params.id)}`).then(res => {
            setArtwork(res.data.data.result)
        }).catch(err => {
            console.error(err)
        })
    }


  return (
    <div >
      <Header />
        <main className="innercontent" id="oneartwork">
            <div className="container innercontainer">

                <div className="row sm-mrgb50">
                    <div className="col-12">
                        <div className="d-inline-flex main-title">
                            <h2 className="default titr">{artwork?.artwork_title}</h2>
                            <div className="d-block">
                                <ul className="breadcrumb-cs ">
                                    <li><Link to="/">صفحه اصلی</Link></li>
                                    <li><Link to="/house-acutions" >خانه‌های حراج</Link></li>
                                    <li><Link to={`/house-acutions/${artwork?.latest_auction?.house?.id}`}>{artwork?.latest_auction?.house?.home_auction_name ? artwork?.latest_auction?.house?.home_auction_name : ''}</Link></li>
                                    <li><Link to={`/one-auction/${artwork?.latest_auction?.id}`} > {artwork?.latest_auction?.title} </Link></li>
                                    <li className="active">{artwork?.artwork_title}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            <MainInfoArtwork artwork={artwork}/>
            <DetailAboutArtworkInfo artwork={artwork}/>
            <LastAuctionsSection id={artwork?.latest_auction?.id}/>

            </div>
        </main>

      <Footer />
    </div>
  );
}

export default SigningContract;
