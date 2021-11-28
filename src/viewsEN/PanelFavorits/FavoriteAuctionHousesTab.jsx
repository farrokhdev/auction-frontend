import React,{useEffect,useState} from 'react'
import CardFavoriteAuctionHouse from './CardFavoriteAuctionHouse';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import {message , Spin} from "antd";
import PaginationComponent from '../../componentsEN/PaginationComponent';
function FavoriteAuctionHousesTab() {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [dataCount, setDataCount] = useState(0)
    const [params, setParams] = useState({
        page : 1 , 
        page_size : 10
    })

    useEffect(()=>{
        getData()
    },[params])

    const getData = () => {
        setLoading(true)
        axios.get(`${BASE_URL}/following/auction_houses?activity_type=follow`)
            .then(resp => {
                setLoading(false)

                if ((resp.data.code === 200) && resp.data?.data?.result) {
                    const res = resp.data?.data?.result;
                    setData(res)
                    setDataCount(resp.data.data.count)
                }
            })
            .catch(err => {
                setLoading(false)
                console.error(err);
                message.error("صفحه را دوباره لود کنید")
            })
    }


    const handeSelectPage = (e) => {
        setParams({
            ...params, page: e
        })
    }


    return (

        <React.Fragment>
            <Spin  spinning={loading}>
            <div class="row row-cols-xxxxl-3 row-cols-xl-2 row-cols-1">

                {data  ? data.map((item)=> (
                    <CardFavoriteAuctionHouse getData={getData} house={item}/>
                    ) ): ''}
            </div>

            <PaginationComponent count={dataCount} handeSelectPage={handeSelectPage}/>
            </Spin>
        </React.Fragment>
    )
}

export default FavoriteAuctionHousesTab;
