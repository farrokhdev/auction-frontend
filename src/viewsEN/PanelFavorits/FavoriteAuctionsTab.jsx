import React, { useEffect, useState } from "react";
import CardFavoriteAuction from "./CardFavoriteAuction";
import axios from "../../utils/request";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../utils";
import { message, Spin } from "antd";
import { Link } from "react-router-dom";
import Timer from 'react-compound-timer';
import PaginationComponent from "../../componentsEN/PaginationComponent";


function FavoriteAuctionsTab() {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [dataCount, setDataCount] = useState(0)
    const [params, setParams] = useState({
      page : 1 , 
      page_size : 10
  })
    
    useEffect(() => {
        getData()
    }, [params])

    const getData = () => {
        setLoading(true)
        axios.get(`${BASE_URL}/following/auctions` , {headers : { "Accept-Language" : 'en-US'  }})
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
      <div class="col-xxxxl-8 ">

        {data ? data?.map(item => (
          <CardFavoriteAuction item={item} getData={getData}/>
          )) : ''}

          <PaginationComponent count={dataCount} handeSelectPage={handeSelectPage}/>
      </div>
      </Spin>
    </React.Fragment>
  );
}

export default FavoriteAuctionsTab;
