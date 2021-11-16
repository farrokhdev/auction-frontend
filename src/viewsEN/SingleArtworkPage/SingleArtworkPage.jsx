import React, { useState , useEffect} from 'react';
import HeaderEN from '../../componentsEN/HeaderEN';
import Footer from '../../componentsEN/Footer';
import MainTitle from '../../componentsEN/MainTitle/MainTitle';
import logo from "../../imgEN/logo-1.jpg"

import queryString from 'query-string';
import axios from '../../utils/request';
import { BASE_URL } from '../../utils';
import { LIST_AUCTIONS, ONE_PRODUCT } from '../../utils/constant';
import {  Spin } from "antd";
import SliderMediaImage from './SliderMediaImage';
import CardDetailInfoArtwork from './CardDetailInfoArtwork';
import ArtworkDetailSection from './ArtworkDetailSection';
import LatestArtworksSection from './latestArtworksSection';


function SingleArtworkPage(props) {

    const [loading, setLoading] = useState(false);


    const [params, setParams] = useState({
        home_auction : props.match.params.id ,
        page : 1 , 
        page_size : 10 
    })




    const [artwork, setArtwork] = useState()
    const [Rate, setRate] = useState({})
    // const [params, setParams] = useState({
    //     search: props.match.params.id,
    // })

    useEffect(() => {
        getProduct();
        getRate();
    }, [params , props.match.params.id])

    console.log("artwork==>>" , artwork)
    const getProduct = ()=>{
        setLoading(true)
        axios.get(`${BASE_URL}${ONE_PRODUCT(props.match.params.id)}`).then(res => {
            setLoading(false)
            setArtwork(res.data.data.result)
        }).catch(err => {
            setLoading(false)
            console.error(err)
        })
    }

    const getRate = ()=>{
        axios.get(`${BASE_URL}${ONE_PRODUCT(props.match.params.id)}rate/`)
            .then(res =>{
                setRate(res.data.data.result)
        }).catch(err =>{
            console.log(err)
        })
    }
    const updateRate = (value)=>{
        let payload = {
            "rate": value
        }
        axios.put(`${BASE_URL}${ONE_PRODUCT(props.match.params.id)}rate/`, payload)
        .then(res=>{
            getRate()
        }).catch(err =>{

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

                    <div className="row">
                        <SliderMediaImage/>
                        <CardDetailInfoArtwork/>
                    </div>

                    <ArtworkDetailSection/>
                    <LatestArtworksSection/>

                </div>

            </main>
    <Footer />
    </Spin>
    </>
    )
}

export default SingleArtworkPage;
