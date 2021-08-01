import React,{useEffect,useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import axios from "../../utils/request";
import { useSelector} from "react-redux";
import {BASE_URL} from "../../utils";
import {message , Spin} from "antd";

function AuctionHouses() {
    const [loading, setLoading] = useState(false)
    const {role,id} = useSelector((state) => state.profileReducer)
    const [data, setData] = useState([])
    const [dataCount, setDataCount] = useState(0)
    

    useEffect(()=>{
        getData()
    },[])

    const getData = () => {
        setLoading(true)
        axios.get(`${BASE_URL}/following/auction_houses?activity_type=follow`)
            .then(resp => {
                setLoading(false)

                if ((resp.data.code === 200) && resp.data?.data?.result) {
                    const res = resp.data?.data?.result;
                    setData(res)
                    // console.log("ehsan",resp.data?.data?.result[0].media[0].exact_url);
                    setDataCount(resp.data?.data?.result)
                }
            })
            .catch(err => {
                setLoading(false)
                console.error(err);
                message.error("صفحه را دوباره لود کنید")
            })
    }

    const Follow = (id, action) => {


        if (action){
            axios.delete(`${BASE_URL}/following/${id}`)
                .then(resp => {
                    getData()
                })
        } else {
            axios.post(`${BASE_URL}/following/` , {
                "content_type": "product",
                "object_id": id,
                "activity_type": "follow"
            })
                .then(resp => {
                    if (resp.data.code === 201) {
                        getData()
                    }

                })
                .catch(err => {
                    console.error(err);
                })

        }
    }

    const parser = (data, type) => {
        for (let i in data)
            if (data[i].type === type) {
                return data[i].exact_url
            }
    }

    return (
        <>
            <Spin spinning={loading}> 
                <div className="tab-content " id="profile-tab-content">
                    <div className="tab-pane fade show active" id="profiletab1" role="tabpanel"
                        aria-labelledby="profiletab1-tab">
                        <div className="row row-cols-xxxxl-3 row-cols-xl-2 row-cols-1">
                            {
                                data  ? data.map((item)=>{
                                    return(
                                        <div className="col">
                                        <div className="h-block">
                                            <div className="row">
                                                <div className="col-lg-4 col-3">
                                                    <div className="h-block-img">
                                                        <img src={parser(item.media, 'profile_image')} width="159" height="159"
                                                            alt="smart auction"
                                                            className="img-fluid" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-8 col-9">
                                                    <div className="h-block-header">
                                                        <div className="h-block-title">
                                                            <h3 className="default">
                                                                {item.home_auction_name}
                                                                </h3>
                                                            <h6 className="default">
                                                                هنرهای تجسمی
                                                                
                                                                </h6>
                                                        </div>
                                                        <span
                                                        onClick={() =>
                                                            Follow(
                                                            item?.following?.follow?.is_active?
                                                            item?.following?.follow?.id :
                                                                item?.id , item?.following?.follow?.is_active)
                                                        }
                                                        className={"btn-follow " + (item?.following?.follow?.is_active ? "following" : "")}
                                                            type="button"
                                                            >عدم دنبال کردن</span>
                                                    </div>
                                                    <div className="h-block-info">
                                                        <Link to="/" className=" all-info">
                                                            <FontAwesomeIcon icon={faPhone} />
                                                            {item.mobile}
                                                        </Link>
                                                        <address className="all-info">
                                                            {item?.home_auction_location?.address ? item?.home_auction_location?.address : '---'}
                                                        </address>
                                                    </div>
                                                </div>
                                            </div>
                        
                                        </div>
                                    </div>   
                                    )                                     
                                }) :""
                            }
                        </div>
                    </div>
                </div> 
            </Spin>            
        </>
    )
}

export default AuctionHouses;