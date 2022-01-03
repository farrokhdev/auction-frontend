import React, { useState, useEffect } from "react";
import HeaderPanel from "../../components/HeaderPanel";
import PanelSidebar from "../../components/PanelSidebar";
import CardItem from "./CardItem";
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import { LIST_MY_WON_PERCHACE } from "../../utils/constant";
import { Pagination, Spin } from "antd";
import momentJalaali from 'moment-jalaali'
import { convertMouthToPersian } from "../../utils/converTypePersion";
import PaginationComponent from "../../components/PaginationComponent";
import queryString from "query-string";

function MyPurchases() {

    const [loading, setLoading] = useState(true);
    const [listWonPurchasse, setListWonPurchasse] = useState([]);
    const [countPurchase, setCountPurchase] = useState(0)
    const [params, setParams] = useState({
        page: 1,
        page_size: 10,
        ordering : '-creation_date'
    })

    // Get list of Won purchase user
    const getMyWonPurchase = () => {
        setLoading(true)
        const queries = queryString.stringify(params);
        axios.get(`${BASE_URL}${LIST_MY_WON_PERCHACE}?${queries}`)
            .then(resp => {
                setLoading(false)
                if (resp.data.code === 200) {
                    setListWonPurchasse(resp.data.data.result)
                    setCountPurchase(resp.data.data.count)
                    console.log("resp.data.count==>>", resp.data.data.count)
                }

            })
            .catch(err => {
                setLoading(false)
                console.error(err);
            })
    }


    useEffect(() => {
        getMyWonPurchase()
    }, [params])

    // Handle select page when user click in pages on pagination
    const handeSelectPage = (e) => {
        setParams({

            ...params, page: e
        })
    }

    return (
        <>
            <Spin spinning={loading}>
                <HeaderPanel titlePage={"خریدهای من"} />
                <div className="panel-main">
                    <PanelSidebar />
                    <div className="panel-body">
                        <div className="panel-container">
                            <div className="purchase-block">
                                <div className="row row-cols-1 mb-5">
                                    {!loading && !!listWonPurchasse?.length ? listWonPurchasse?.map(item =>

                                        <CardItem
                                            artist={item?.persian_artist_name}
                                            artworkTitle={item?.artwork_title}
                                            Link={item?.latest_auction?.house?.home_auction_name}
                                            ArtworkLink=" گالری آرتیبیشن"
                                            exactUrl={item?.media[0]?.exact_url}
                                            date={item?.bidding_details?.max_bid_date ?
                                                `${momentJalaali(item?.bidding_details?.max_bid_date).format(`jDD`)}  
                                        ${convertMouthToPersian(momentJalaali(item?.bidding_details?.max_bid_date).format(`jMM`))}   
                                        ${momentJalaali(item?.bidding_details?.max_bid_date).format(`jYYYY`)}` : ''}

                                            currency={item?.latest_auction?.currency}


                                            price={item?.bidding_details?.max_bid ? item?.bidding_details?.max_bid : ''}
                                            paymentMethod={item?.payment_method}
                                            media={item?.media}
                                        />) : <p className="text-center">
                                        شما تا به حال در هیچ حراجی برنده نشده اید
                                    </p>}

                                </div>
                                <PaginationComponent count={countPurchase} handeSelectPage={handeSelectPage} />
                            </div>
                        </div>
                    </div>
                </div>
            </Spin>
        </>
    )
}

export default MyPurchases;
