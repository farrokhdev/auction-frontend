import React, { useEffect, useState } from 'react'
import HeaderPanel from '../../components/HeaderPanel';
import PanelSidebar from '../../components/PanelSidebar';
import img6 from "../../images/img-6.jpg";
import { faPlus, faPen, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import axios from "../../utils/request";
import { UrlQuery } from "../../utils/utils";
import { BASE_URL } from "../../utils";
import { LIST_PRODUCTS } from "../../utils/constant";
import { message, Pagination, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../redux/reducers/profile/profile.actions";
import PaginationComponent from '../../components/PaginationComponent';
import queryString from "query-string";

function UserPanelArtworkList() {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [dataCount, setDataCount] = useState(0)
    const { role, id } = useSelector((state) => state.profileReducer)
    let numeral = require('numeral');
    const [params, setParams] = useState({
        page: 1,
        page_size: 10,
        owner__id: role === 'user' ? id : '',
        auction_houses__id: role !== 'user' ? id : '',

    })

    const dispatch = useDispatch();

    useEffect(() => {
        // setSelectProduct([])
        if (id)
            getData()
        if (!id)
            dispatch(getProfile())
    }, [params])


    const getData = (e = "") => {
        setLoading(true)

        const queries = queryString.stringify(params);
        axios.get(`${BASE_URL}${LIST_PRODUCTS}?${queries}`)
            .then(resp => {
                setLoading(false)

                if ((resp.data.code === 200) && resp.data?.data?.result) {
                    const res = resp.data?.data?.result;
                    // form.setFieldsValue(res)
                    // setData(res)
                    setData(res)
                    setDataCount(resp.data?.data?.count)
                    // let check = Object.keys(res).some(t => !res[t]);
                    // console.log(check)
                    // setNext(!check)
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
        <>
            <HeaderPanel titlePage={"لیست آثار"} />
            <div className="panel-main">
                <PanelSidebar />
                <div className="panel-body">
                    <div className="panel-container">
                        {role === "home_auction" ?
                            <Link to="/add-artworks">
                                <button type="button" className="btn btn-default" data-bs-toggle="modal"
                                    data-bs-target="#new-ticket"><FontAwesomeIcon icon={faPlus} /> افزودن اثر
                                </button>
                            </Link> : ''}
                        <Spin spinning={loading}>
                            <div className="mrgt30">
                                <div className="table-responsive">
                                    <table className="panel-table sellrecommand ">
                                        <thead>
                                            <tr>
                                                <td>تصویر</td>
                                                <td>نام</td>
                                                <td>هنرمند</td>
                                                <td>شماره لت</td>
                                                <td>تخمین قیمت</td>
                                                <td>تعداد بیدها</td>
                                                <td>قیمت فروخته شده</td>
                                                <td></td>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                data && data.length ? data.map((item, i) => <tr>
                                                    <td key={i} className="artwork-img">
                                                        <img src={item?.media?.exact_url} width="317" height="280" alt="بدون عکس" className="img-fluid" />
                                                    </td>
                                                    <td>{item?.artwork_title}</td>
                                                    <td> {item?.persian_artist_name}</td>
                                                    <td>{item?.id}</td>
                                                    <td>
                                                        <span>{numeral(item?.min_price).format('0,0')} </span>
                                                        <span> - </span>
                                                        <span>{numeral(item?.max_price).format('0,0')}</span>
                                                        <span className="price-unit">تومان</span>
                                                    </td>
                                                    <td>{item?.bidding_details?.total_bids}</td>
                                                    <td>{numeral(item?.price).format('0,0')}<span className="price-unit">تومان</span></td>
                                                    <td>
                                                        <button type="button"><FontAwesomeIcon icon={faTimes} />
                                                        </button>
                                                        <button type="button"><FontAwesomeIcon icon={faPen} /></button>
                                                    </td>
                                                </tr>) : ''
                                            }




                                        </tbody>

                                    </table>

                                    <div className="d-flex justify-content-center w-100 mt-4">
                                        <PaginationComponent count={dataCount} handeSelectPage={handeSelectPage} />
                                    </div>
                                </div>

                            </div>
                        </Spin>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserPanelArtworkList;
