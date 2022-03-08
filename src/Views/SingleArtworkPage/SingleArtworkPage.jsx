import React, { useState, useEffect } from "react";
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
import { Spin } from "antd";
import queryString from "query-string";


function SigningContract(props) {

    const [artwork, setArtwork] = useState()
    const [params, setParams] = useState({})
    const [Rate, setRate] = useState({})
    const [loading, setLoading] = useState(false)
    // const [params, setParams] = useState({
    //     search: props.match.params.id,
    // })

    useEffect(() => {
        getProduct();
        getRate();
    }, [params, props.match.params.id])

    const getProduct = () => {
        setLoading(true)
        axios.get(`${BASE_URL}${ONE_PRODUCT(props.match.params.id)}`).then(res => {
            setLoading(false)
            setArtwork(res.data.data.result)
        }).catch(err => {
            setLoading(false)
            console.error(err)
        })
    }

    const getRate = () => {
        axios.get(`${BASE_URL}${ONE_PRODUCT(props.match.params.id)}rate/`)
            .then(res => {
                setRate(res.data.data.result)
            }).catch(err => {
                console.log(err)
            })
    }
    const updateRate = (value) => {
        let payload = {
            "rate": value
        }
        axios.put(`${BASE_URL}${ONE_PRODUCT(props.match.params.id)}rate/`, payload)
            .then(res => {
                getRate()
            }).catch(err => {

            })
    }

    const addBookmark = (data, action) => {
        if (action) {
            axios.delete(`${BASE_URL}/following/${data}`)
                .then(resp => {
                    getProduct()
                })
        } else {
            axios.post(`${BASE_URL}/following/`, {
                "content_type": "product",
                "object_id": data,
                "activity_type": "mark"
            })
                .then(resp => {
                    if (resp.data.code === 201) {
                        getProduct()
                    }

                })
                .catch(err => {
                    console.error(err);
                })

        }
    }

    const Follow = (data, action) => {
        if (action) {
            axios.delete(`${BASE_URL}/following/${data}`)
                .then(resp => {
                    getProduct()
                })
        } else {
            axios.post(`${BASE_URL}/following/`, {
                "content_type": "auction_house",
                "object_id": data,
                "activity_type": "follow"
            })
                .then(resp => {
                    if (resp.data.code === 201) {
                        getProduct()
                    }

                })
                .catch(err => {
                    console.error(err);
                })

        }
    }


    return (
        <div >
            <Header />
            <main className="innercontent" id="oneartwork">
                <Spin spinning={loading}>
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

                        <MainInfoArtwork artwork={artwork} rate={Rate} updateRate={updateRate} addBookmark={addBookmark} Follow={Follow} />
                        <DetailAboutArtworkInfo artwork={artwork} />
                        <LastAuctionsSection id={artwork?.latest_auction?.id} artwork_id={artwork?.id} />

                    </div>
                </Spin>
            </main>

            <Footer />
        </div>
    );
}

export default SigningContract;
