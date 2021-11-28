import React, { useEffect, useState } from 'react'
import Header from '../../componentsEN/HeaderPanel';
import PanelSidebar from '../../componentsEN/PanelSideBar';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Spin, Modal, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import PaginationComponent from '../../components/PaginationComponent';
import queryString from "query-string";
import { ExclamationCircleOutlined } from '@ant-design/icons';
import {DEFAULT_URL_IMAGE} from '../../utils/defaultImage';
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import { getProfile } from "../../redux/reducers/profile/profile.actions";
import { DELETE_ARTWORK_LIST, LIST_PRODUCTS } from "../../utils/constant";


function UserPanelArtworkList() {
    const [loading, setLoading] = useState(false)
    const [artworkList, setArtworkList] = useState([])
    const [dataCount, setDataCount] = useState(0)
    const { role, id } = useSelector((state) => state.profileReducer)
    const [params, setParams] = useState({
        page: 1,
        page_size: 10,
        owner__id: role === 'user' ? id : '',
        auction_houses__id: role !== 'user' ? id : '',

    })
    let numeral = require('numeral');
    const dispatch = useDispatch();
    const { confirm } = Modal;


    function showDeleteConfirm(id) {

        confirm({
            title: 'Do you intend to delet this auction?',
            icon: <ExclamationCircleOutlined />,
            content: '',
            okText: 'yes',
            okType: 'danger',
            cancelText: 'no',
            onOk() {
                setLoading(true)
                axios.delete(`${BASE_URL}${DELETE_ARTWORK_LIST(id)}`)
                    .then(resp => {
                        setLoading(false)
                        message.success("Auction removal completed successfully")
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
                            message.error("Try again")
                    })
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    useEffect(() => {
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
                    setArtworkList(res)
                    setDataCount(resp.data?.data?.count)
                }
            })
            .catch(err => {
                setLoading(false)
                console.error(err);
                message.error("Reload the page")
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
            <Header titlePage={"Sell list artwork"} />
            <div className="panel-main">
                <PanelSidebar />
                <div className="panel-body">
                    <div className="panel-container">
                        {role === "home_auction" ?
                            <Link to="/en/add-artworks">
                                <button type="button" className="btn btn-default" data-bs-toggle="modal"
                                    data-bs-target="#new-ticket"><FontAwesomeIcon icon={faPlus} /> Add artwork
                                </button>
                            </Link> : ''}

                        <Spin spinning={loading}>
                            <div className="mrgt30">
                                <div className="table-responsive">
                                    <table className="panel-table sellrecommand ">
                                        <thead>
                                            <tr>
                                                <td>Image</td>
                                                <td>Name</td>
                                                <td>Artist</td>
                                                <td>Lat number</td>
                                                <td>Price estimate</td>
                                                <td>Number of bids</td>
                                                <td>Sold price</td>
                                                <td></td>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                artworkList && artworkList.length ? artworkList.map((item, i) => <tr>
                                                    <td key={i} className="artwork-img">
                                                        <div className="image-custom-back" 
                                                        style={{
                                                            backgroundImage: `url(${ item && handleShowImage(item)})`,
                                                            height: "7rem",
                                                            width: "7rem"
                                                        }}
                                                        ></div>
                                                        {/* <img src={img6} width="317" height="280" alt="" class="img-fluid"></img> */}

                                                    </td>
                                                    <td>{item?.artwork_title_en}</td>
                                                    <td> {item?.english_artist_name}</td>
                                                    <td>{item?.id}</td>
                                                    <td>
                                                        <span>{numeral(item?.min_price).format('0,0')} </span>
                                                        <span> - </span>
                                                        <span>{numeral(item?.max_price).format('0,0')}</span>
                                                        <span className="price-unit"> {item?.latest_auction?.currency}</span>
                                                    </td>
                                                    <td>3</td>
                                                    <td>{numeral(item?.price).format('0,0')}<span className="price-unit"> {item?.latest_auction?.currency}</span></td>
                                                    <td>
                                                        {item?.owner?.id === id ?
                                                            <button type="button" className="operations" 
                                                            onClick={() => showDeleteConfirm(item.id)}
                                                            >
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
