import React, { useEffect, useState } from "react";
import axios from "../../utils/request";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../utils";
import { message, Spin } from "antd";
import { Link } from "react-router-dom";
import Timer from 'react-compound-timer'


function Sales() {
    const [loading, setLoading] = useState(false)
    const { role, id } = useSelector((state) => state.profileReducer)
    const [data, setData] = useState([])
    const [dataCount, setDataCount] = useState(0)

    
    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        setLoading(true)
        axios.get(`${BASE_URL}/following/auctions`)
            .then(resp => {
                setLoading(false)

                if ((resp.data.code === 200) && resp.data?.data?.result) {
                    const res = resp.data?.data?.result;

                    setData(res)
                    setDataCount(resp.data?.data?.result)
                }
            })
            .catch(err => {
                setLoading(false)
                console.error(err);
                message.error("صفحه را دوباره لود کنید")
            })
    }
    function timeExpire(time) {
        let expire = new Date(time)
        let now = new Date()
        if (expire > now) {
            return expire - now
        } else {
            return 0

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

    const Follow = (data, action) => {
        if (action) {
            axios.delete(`${BASE_URL}/following/${data}`)
                .then(resp => {
                    getData()
                })
        } else {
            axios.post(`${BASE_URL}/following/`, {
                "content_type": "auction",
                "object_id": data,
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

    return (
        <>
            <Spin spinning={loading}>
                <div className="col-xxxxl-8">
                    {
                        data ? data.map((item) => {
                            return (
                                <div className="row-blocks">

                                    <div className="row">
                                        <div className="col-xxl-2 col-md-3">
                                            <div className="bg-shadow tr-shadow10">
                                                {/*<img src={item.media.exact_url} width="500" height="500" alt="" />*/}
                                                <div className="image-custom-back" style={{ backgroundImage: `url(${item.media.exact_url})`, height: "250px" }} />
                                            </div>
                                        </div>
                                        <div className="col-xxl-10 col-md-9">
                                            <div className="block-head row">
                                                <div className="col-xl-3 col-sm-4 col-3">
                                                    <span>
                                                        {convertToEn(item.type)}
                                                    </span>
                                                </div>
                                                <div className="col-xl-9 col-sm-8 col-9 textalign-left">
                                                    <button
                                                        onClick={() =>
                                                            Follow(
                                                                item?.following?.follow?.is_active ?
                                                                    item?.following?.follow?.id :
                                                                    item?.id, item?.following?.follow?.is_active)
                                                        }
                                                        type="button" className={" reminder-icon " + (item?.following?.follow?.is_active ? "active" : "")}>
                                                        یادآوری
                                                    </button>
                                                    {/* <Link to={`/panel-reminders`}>
                                                        <span className="reminder-icon" >یادآوری</span>
                                                    </Link> */}
                                                    <button type="button" className="link-source">
                                                        <span>
                                                            <Link to={`/one-auction/${item.id}`}>
                                                                <span className="d-none d-sm-inline-block">مشاهده </span>آثار (<span>{item?.products_count ? item.products_count : 0}</span>)
                                                            </Link>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="block-main">
                                                <h5 className="default">{item.description}</h5>
                                                <div className="block-detail">
                                                    <h6 className="default">{item.title}</h6>
                                                    <h6 className="default gray50">{item.house.home_auction_name}</h6>
                                                </div>
                                            </div>
                                            <div className="block-footer row">
                                                <div className="col-sm-5">
                                                    <div className="jumbotron countdown show end date-show" data-Date="2021/06/05 16:09:00">
                                                        {item.status == "CLOSED" ?
                                                            <div className="ended">
                                                                <div className="text">حراج به پایان رسید</div>
                                                            </div>
                                                            :
                                                            <Timer
                                                                initialTime={timeExpire(item.end_time)}
                                                                direction="backward">
                                                                {() => (
                                                                    <div style={{
                                                                        direction: 'ltr',
                                                                        textAlign: "right"
                                                                    }}>
                                                                        <Timer.Days /> :
                                                                        <Timer.Hours /> :
                                                                        <Timer.Minutes /> :
                                                                        <Timer.Seconds />
                                                                    </div>
                                                                )}
                                                            </Timer>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                        }) : ""
                    }
                </div>
            </Spin>
        </>
    )
}

export default Sales;
