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
import { DELETE_ARTWORK_LIST, LIST_PRODUCTS } from "../../utils/constant";
import { message, Spin, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../redux/reducers/profile/profile.actions";
import PaginationComponent from '../../components/PaginationComponent';
import queryString from "query-string";
import { ExclamationCircleOutlined } from '@ant-design/icons';
import {DEFAULT_URL_IMAGE} from '../../utils/defaultImage';

function UserPanelArtworkList() {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [dataCount, setDataCount] = useState(0)
    const { role, id } = useSelector((state) => state.profileReducer)
    const [params, setParams] = useState({
        page: 1,
        page_size: 10,
        auction_houses__id: role !== 'user' ? id : '',
        ordering: '-creation_date',
        
        // owner__id:  role !== 'user' ? id : '',
        // offer_home_auction:'unrequired'


    })
    let numeral = require('numeral');
    const dispatch = useDispatch();
    const { confirm } = Modal;


    function showDeleteConfirm(id) {

        confirm({
            title: 'آیا قصد حذف کردن این حراجی را دارید؟',
            icon: <ExclamationCircleOutlined />,
            content: '',
            okText: 'بله',
            okType: 'danger',
            cancelText: 'خیر',
            onOk() {
                setLoading(true)
                // /api/sale/product/{id}/
                axios.delete(`${BASE_URL}${DELETE_ARTWORK_LIST(id)}`)
                    .then(resp => {
                        setLoading(false)
                        message.success("حذف حراجی با موفقیت انجام شد")
                        getData()
                    })
                    .catch(err => {
                        setLoading(false)
                        console.error(err);
                        if (err?.response?.data?.message)
                            message.error(err.response.data.message)
                        else if (err?.response?.data?.data?.result)
                            message.error(err.response.data.message)
                        else
                            message.error("دوباره تلاش کنید")
                    })
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

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


    const handleShowImage = (item) => {
        return (
            (item?.media?.length && item?.media?.filter(item => item?.is_default === true)[0]?.exact_url) ?  
            item?.media?.filter(item => item?.is_default === true)[0]?.exact_url : 
            DEFAULT_URL_IMAGE
        )
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
                                                {/* <td>شماره لت</td> */}
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
                                                        <div className="image-custom-back" 
                                                        style={{
                                                            // backgroundImage: `url(${item.media?.filter(item => item?.is_default === true)[0]?.exact_url})`,
                                                            backgroundImage: `url(${ item && handleShowImage(item)})`,
                                                            height: "7rem",
                                                            width: "7rem"
                                                        }}
                                                        ></div>

                                                    </td>
                                                    <td>{item?.artwork_title}</td>
                                                    <td> {item?.persian_artist_name}</td>
                                                    {/* <td>{item?.latest_auction?.lot_num}</td> */}
                                                    <td>
                                                        <span>{numeral(item?.min_price).format('0,0')} </span>
                                                        <span> - </span>
                                                        <span>{numeral(item?.max_price).format('0,0')}</span>
                                                        <span className="price-unit">تومان</span>
                                                    </td>
                                                    <td>{item?.bidding_details?.total_bids}</td>
                                                    <td>{numeral(item?.price).format('0,0')}<span className="price-unit">تومان</span></td>
                                                    <td>
                                                        {/* <button type="button" className="operations">
                                                            <i class="fal fa-times"></i>
                                                        </button> */}
                                                        {item?.owner?.id === id ?
                                                            <button type="button" className="operations" onClick={() => showDeleteConfirm(item.id)}>
                                                                <i class="fal fa-times"></i>
                                                            </button> : ''}


                                                        {item?.owner?.id === id && item?.is_approve === "waiting" ?
                                                            <Link to={`/edit-artworks/${item?.id}`} className="operations">
                                                                <button type="button" className="operations">
                                                                    <i class="fal fa-pen"></i>
                                                                </button>
                                                            </Link> : ''}
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
