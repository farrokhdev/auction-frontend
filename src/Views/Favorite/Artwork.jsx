import React,{useState,useEffect} from 'react'
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import {message , Spin} from "antd";
import moment from "jalali-moment";



function Artwork() {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    

    useEffect(()=>{
        getData()
    },[])
    const getData = () => {
        setLoading(true)
        axios.get(`${BASE_URL}/following/products?activity_type=mark`)
            .then(resp => {
                setLoading(false)

                if ((resp.data.code === 200) && resp.data?.data?.result) {
                    const res = resp.data?.data?.result;

                    setData(res)
                }
            })
            .catch(err => {
                setLoading(false)
                console.error(err);
                message.error("صفحه را دوباره لود کنید")
            })
    }

    const addBookmark = (data, action) => {
        if (action){
            axios.delete(`${BASE_URL}/following/${data}`)
                .then(resp => {
                    getData()
                })
        } else {
            axios.post(`${BASE_URL}/following/` , {
                "content_type": "product",
                "object_id": data,
                "activity_type": "mark"
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

    const convertToEn = (value) => {

        switch (value) {

            case "ONLINE":
                return <span className="category-icon online-icon">آنلاین</span>
            case "LIVE":
                return <span className="category-icon live-icon">زنده</span>

            case "PERIODIC":
                return <span className="category-icon timed-icon">مدت دار</span>

            case "HIDDEN":
                return <span className="category-icon firstoffer-icon">اولین پیشنهاد</span>

            case "SECOND_HIDDEN":
                return <span className="category-icon secondoffer-icon">دومین پیشنهاد</span>

        }
    }
    return (
        <>
            <Spin spinning={loading}> 
                <div className="tab-content " id="profile-tab-content">
                    <div className="tab-pane fade show active" id="profiletab1" role="tabpanel"
                        aria-labelledby="profiletab1-tab">
                        <div className="row row-cols-xxxxl-6 row-cols-xxl-5 row-cols-xl-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
                        
                            {
                                data  ? data.map((item)=>{
                                    return(
                                        <div className="col">
                                                
                                                    <div className="artwork-img">
                                                        <img src={item.media.exact_url} width="998" height="880" alt="" className="img-fluid" />
                                                        <div className="artwork-category">

                                                        <span 
                                                            onClick={() =>
                                                            addBookmark(
                                                                item?.following?.bookmark?.is_active?
                                                                    item?.following?.bookmark?.id :
                                                                    item?.id, item?.following?.bookmark?.is_active)
                                                            }
                                                            className={"category-save artwork-bookmark " + (item?.following?.bookmark?.is_active ? "active" : "")}/>
                                                            {convertToEn(item.latest_auction.type)}
                                                        </div>
                                                    </div>
                                                    <div className="block-body text-center">
                                                        <h6 className="default gray50 ">
                                                            {item.artwork_title}
                                                        </h6>
                                                        <h4 className="default">از {item.latest_auction.title}</h4>
                                                        <div className="auction-calender">
                                                            <div className="auction-date">
                                                                <span className="start-date">
                                                                {item?.latest_auction?.start_time ? moment(item?.latest_auction?.start_time, 'YYYY/MM/DD').locale('fa').format('DD MMMM') : ""}
                                                                    </span>
                                                                <span className="end-date">
                                                                {item?.latest_auction?.end_time ? moment(item?.latest_auction?.end_time, 'YYYY/MM/DD').locale('fa').format('DD MMMM') : ""}
                                                                    </span>
                                                            </div>
                                                            <div className="auction-time">
                                                                <span className="start-time">
                                                                    {item?.latest_auction?.start_time ? moment(item?.latest_auction?.start_time, 'YYYY/MM/DD').locale('fa').format('HH') : ""}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="price-block">
                                                            <span>قیمت پایه : </span>
                                                            <span className="price">
                                                                {item.price}
                                                                <span className="price-unit">تومان</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                
                                            </div>  ) 
                                }):""
                            }
                        </div>
                    </div>
                </div>
            </Spin>
        </>
    )
}

export default Artwork;