import React, { useEffect, useState } from 'react'
import HeaderPanel from '../../components/HeaderPanel';
import PanelSidebar from '../../components/PanelSidebar';
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { message, Pagination, Spin, Modal } from "antd";
import { ExclamationCircleOutlined, LoadingOutlined } from '@ant-design/icons';
import queryString from "query-string";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../redux/reducers/profile/profile.actions";
import ModalAddNewArtwork from './ModalAddNewArtwork';
import ModalEditArtwork from './ModalEditArtwork';
import { isApproved } from '../../utils/converTypePersion';
import PaginationComponent from '../../components/PaginationComponent';
import { DEFAULT_URL_IMAGE } from '../../utils/defaultImage';
import { ONE_PRODUCT } from '../../utils/constant';
import 'antd/dist/antd.css';


const { confirm } = Modal;

function UserPanelSellAdvice() {

    const [Products, setProducts] = useState("");
    const [loading, setLoading] = useState(false)
    const [Suggestions, setSuggestions] = useState("");
    const [countProducts, setCountProducts] = useState(0)
    const [visibleAddNewArtwork, setVisibleAddNewArtwork] = useState(false)
    const [visibleEditArtwork, setVisibleEditArtwork] = useState(false)
    const [ARTWORK_ID, setARTWORK_ID] = useState(null)
    const dispatch = useDispatch();
    const { role, id } = useSelector((state) => state.profileReducer)
    const [params, setParams] = useState({
        page: 1,
        page_size: 10,
        // owner__id: role !== 'user' ? id : '',
        is_approve: "",
        ordering: '-creation_date',
        offer_home_auction:'required'

    })
    const [Posting, setPosting] = useState(false);
    let numeral = require('numeral');


    const queries = queryString.stringify(params);

    useEffect(() => {
        if (!id)
            dispatch(getProfile())
    }, [])

    const getProducts = () => {
        setLoading(true)
        if (id)
            axios.get(`${BASE_URL}/sale/product/?owner__id=${id}&${queries}`)
                .then(resp => {
                    setLoading(false)
                    if (resp.data.code === 200) {
                        setProducts(resp.data.data.result)
                        setCountProducts(resp.data.data.count)
                    }

                })
                .catch(err => {
                    setLoading(false)
                    console.error(err);
                })
    }

    const getSuggestion = (id) => {
        setLoading(true)
        axios.get(`${BASE_URL}/auction-house/suggest/?product__id=${id}`)
            .then(resp => {
                setLoading(false)
                console.log(resp)
                if (resp.data.code === 200) {
                    setSuggestions(resp.data.data.result)
                }

            })
            .catch(err => {
                setLoading(false)
                console.error(err);
            })
    }

    let approvedSuggest = (id, type) => {
        let payload = {
            "is_selected": type
        }
        setPosting(true)

        axios.patch(`${BASE_URL}/auction-house/suggest/${id}/`, payload)
            .then(resp => {
                setPosting(false)
                console.log(resp)
                if ((resp.data.code === 201) || (resp.data.code === 200)) {
                    message.success('?????????????? ?????? ???? ???????????? ?????? ????.');
                }
            })
            .catch(err => {
                message.error(err.response.data.data.error_message);
                setPosting(false)
            })
    }

    useEffect(() => {
        getProducts()
    }, [params])

    const handeSelectPage = (e) => {
        setParams({
            ...params, page: e
        })
    }

    const handleApproved = (e) => {
        setParams({
            ...params, page: 1, is_approve: e
        })
    }

    const handleShowImage = (item) => {
        return (
            (item?.media?.length && item?.media?.filter(item => item?.is_default === true)[0]?.exact_url) ?
                item?.media?.filter(item => item?.is_default === true)[0]?.exact_url :
                DEFAULT_URL_IMAGE
        )
    }


    const handleDeleteProduct = (e, id) => {
        e.preventDefault();

        axios.delete(`${BASE_URL}${ONE_PRODUCT(id)}`).then(res => {
            getProducts()
        }).catch(err => {
            console.error(err)
        })
    }


    function showConfirm(e, id) {
        confirm({
            // className='confirm-remove-reminder',
            title: '???? ?????? ?????????? ?????????????? ????????????',
            icon: <ExclamationCircleOutlined />,
            content: '?????? ???? ???????? ???? ?????????? ???????????? ?????????????? ????????!',
            okText: "?????? ??????????",
            cancelText: "????????????",
            onOk() {
                handleDeleteProduct(e, id)
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    const handleEditProduct = (id) => {
        setARTWORK_ID(id)
        setTimeout(() => {
            setVisibleEditArtwork(true)
        }, 500);
    }

    const ProducList = () => {
        return (
            Products && Products.length >= 1 ? Products.map((item, key) => {
                return (
                    <tr>
                        <td style={{ minWidth: '10rem' }} className="artwork-img">

                            <div className="image-custom-back" style={{
                                backgroundImage: `url(${item && handleShowImage(item)})`,
                                height: "7rem",
                                width: "7rem"
                            }}>
                            </div>
                        </td>
                        <td style={{ minWidth: '15rem' }} className="textalign-right">
                            <span>{item.persian_artist_name}</span>
                            <h5 className="default">{item.artwork_title}</h5>
                        </td>
                        <td style={{ minWidth: '17rem' }}>
                            <p className="">?????????????? ??????: <span
                                className="bid-style">{numeral(item.price).format('0,0')} <span
                                    className="price-unit">??????????</span></span></p>
                        </td>
                        <td style={{ minWidth: '10rem' }}>
                            <button type="button" className={"sell-state " + (isApproved(item.is_approve).css)}>
                                {isApproved(item.is_approve).title}
                            </button>
                        </td>
                        <td style={{ minWidth: '12rem' }}>
                            {item.is_approve ?
                                <button type="button" className="btn-default" data-bs-toggle="modal"
                                    data-bs-target="#viewoffers" onClick={() => { getSuggestion(item.id) }}><span
                                        className="d-none d-xl-inline-block" >????????????</span> ??????????????????
                                </button>
                                : ""}
                        </td>

                        <td style={{ minWidth: '6rem' }}>

                            {item?.owner?.id === id ?
                                <button onClick={(e) => showConfirm(e, item?.id)} type="button" className="operations">
                                    <i class="fal fa-times"></i>
                                </button> : ''}


                            {item?.owner?.id === id && item?.is_approve === "waiting" ?

                                <button onClick={() => handleEditProduct(item?.id)} type="button" className="operations">
                                    <i class="fal fa-pen"></i>
                                </button>
                                : ''}


                            {/* {item?.is_approve !== "accept" ?  
                                <>
                                    <button onClick={(e) => showConfirm(e, item?.id)} type="button" className="operations">
                                        <i class="fal fa-times"></i>
                                    </button>
                                    <button onClick={()=>handleEditProduct(item?.id)} type="button" className="operations">
                                        <i class="fal fa-pen"></i>
                                    </button> 
                                </>
                            : ''} */}

                        </td>
                    </tr>
                )
            }) : ""
        )
    }


    return (
        <>
            <HeaderPanel titlePage={'???????????? ????????'} />
            <div className="panel-main">
                <PanelSidebar />

                <div className="panel-body">
                    <div className="panel-container">
                        <div className="">
                            <span
                                // href={'#/add-artworks'} 
                                onClick={() => setVisibleAddNewArtwork(true)}
                                className="btn btn-default">
                                <FontAwesomeIcon style={{ marginLeft: 5 }} icon={faPlus} />
                                ?????? ????????
                            </span>

                            {/* ----- modal for create new artwork ------ */}
                            <ModalAddNewArtwork
                                setVisibleAddNewArtwork={setVisibleAddNewArtwork}
                                visibleAddNewArtwork={visibleAddNewArtwork}

                            />

                            <ul className="nav nav-tabs justify-content-star main-tab mrgt30" id="profile-tab"
                                role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="tab-11" data-bs-toggle="tab"
                                        data-bs-target="#profiletab1"
                                        type="button" role="tab" aria-controls="profiletab1"
                                        onClick={() => handleApproved("")}
                                        aria-selected="true">??????
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="tab-21" data-bs-toggle="tab"
                                        data-bs-target="#profiletab2"
                                        type="button" role="tab" aria-controls="profiletab2"
                                        onClick={() => handleApproved("waiting")}
                                        aria-selected="false">???? ???????????? ??????????
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="tab-31" data-bs-toggle="tab"
                                        data-bs-target="#profiletab3"
                                        type="button" role="tab" aria-controls="profiletab3"
                                        onClick={() => handleApproved("accept")}
                                        aria-selected="false">?????????? ??????
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="tab-41" data-bs-toggle="tab"
                                        data-bs-target="#profiletab4"
                                        type="button" role="tab" aria-controls="profiletab4"
                                        onClick={() => handleApproved("reject")}
                                        aria-selected="false">???? ??????
                                    </button>
                                </li>
                            </ul>
                            <Spin spinning={loading}>
                                <div className="tab-content" id="profile-tab-content">
                                    <div className="tab-pane fade show active" id="profiletab1" role="tabpanel"
                                        aria-labelledby="profiletab1-tab">
                                        <div style={{ overflow: 'auto' }} className="table-responsive">
                                            <table className="panel-table selladvice">
                                                <tbody>

                                                    <ProducList />

                                                </tbody>
                                            </table>
                                        </div>
                                        <Pagination
                                            style={{ direction: 'ltr', textAlign: 'center', marginTop: 5 }}
                                            responsive
                                            onChange={(e) => handeSelectPage(e)}
                                            defaultCurrent={1}
                                            total={countProducts}
                                            defaultPageSize={10}
                                        />
                                    </div>
                                    <div className="tab-pane fade" id="profiletab2" role="tabpanel"
                                        aria-labelledby="profiletab2-tab">
                                        <div className="table-responsive">
                                            <table className="panel-table selladvice">
                                                <tbody>
                                                    <ProducList />
                                                </tbody>
                                            </table>
                                        </div>
                                        <Pagination
                                            style={{ direction: 'ltr', textAlign: 'center', marginTop: 5 }}
                                            responsive
                                            onChange={(e) => handeSelectPage(e)}
                                            defaultCurrent={1}
                                            total={countProducts}
                                            defaultPageSize={10}
                                        />
                                    </div>
                                    <div className="tab-pane fade" id="profiletab3" role="tabpanel"
                                        aria-labelledby="profiletab3-tab">
                                        <div className="table-responsive">
                                            <table className="panel-table selladvice">
                                                <tbody>

                                                    <ProducList />
                                                </tbody>
                                            </table>
                                        </div>
                                        <Pagination
                                            style={{ direction: 'ltr', textAlign: 'center', marginTop: 5 }}
                                            responsive
                                            onChange={(e) => handeSelectPage(e)}
                                            defaultCurrent={1}
                                            total={countProducts}
                                            defaultPageSize={10}
                                        />
                                    </div>
                                    <div className="tab-pane fade" id="profiletab4" role="tabpanel"
                                        aria-labelledby="profiletab3-tab">
                                        <div className="table-responsive">
                                            <table className="panel-table selladvice">
                                                <tbody>

                                                    <ProducList />
                                                </tbody>
                                            </table>
                                        </div>
                                        <PaginationComponent count={countProducts} handeSelectPage={handeSelectPage} />
                                    </div>
                                </div>
                            </Spin>
                        </div>
                    </div>
                </div>

            </div>

            <div className="modal fade" id="viewoffers" tabIndex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog w-800">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="container g-0 d-flex justify-content-between">
                                <div className="main-title">
                                    <h2 className="default titr">
                                        ??????????????????
                                    </h2>
                                </div>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close" />
                            </div>
                        </div>
                        <div className="modal-body">
                            {Suggestions?.length ? Suggestions?.map((item, key) => {
                                return (
                                    <div className="ticket-detail" key={key}>
                                        <div className="ticket-detail-header">
                                            <div className="td-left">
                                                <div className="offer-img">
                                                    <img src="/static/media/login.b2e0944b.svg" width="30" height="30" alt=""
                                                        className="img-fluid" style={{ marginRight: 2 }} />
                                                </div>
                                                <h6 className="default">{item?.auction_house.first_name + " " + item?.auction_house.last_name}</h6>
                                            </div>
                                            {item?.is_selected ?
                                                <p className="text-success">?????? ?????????????? ???????? ?????? ?????????? ????</p>
                                                : <div className="td-right">
                                                    <button
                                                        disabled={Posting}
                                                        type="button"
                                                        data-bs-dismiss="modal"
                                                        className={Posting ? "btn-default" : "btn-gray"}
                                                        onClick={() => approvedSuggest(item?.id, false)}
                                                    >
                                                        {Posting ? <LoadingOutlined style={{ marginLeft: 5 }} /> : ""}???? ????????
                                                    </button>
                                                    <button
                                                        disabled={Posting}
                                                        type="button"
                                                        data-bs-dismiss="modal"
                                                        className={Posting ? "btn-gray" : "btn-default"}
                                                        onClick={() => approvedSuggest(item?.id, true)}
                                                    >{Posting ? <LoadingOutlined style={{ marginLeft: 5 }} /> : ""}??????????
                                                    </button>
                                                </div>}
                                        </div>
                                        <div className="ticket-detail-body">
                                            <p>{item.suggestion}</p>
                                        </div>
                                    </div>

                                )
                            }) : ""}


                            <ModalEditArtwork
                                setVisibleEditArtwork={setVisibleEditArtwork}
                                visibleEditArtwork={visibleEditArtwork}
                                setARTWORK_ID={setARTWORK_ID}
                                ARTWORK_ID={ARTWORK_ID}
                            />

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default UserPanelSellAdvice;
