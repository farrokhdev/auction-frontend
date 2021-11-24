import React, { useState, useEffect } from 'react'
import HeaderPanel from '../../componentsEN/HeaderPanel';
import PanelSideBar from '../../componentsEN/PanelSideBar';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeAUCTION } from '../../redux/reducers/auction/auction.actions';
import { Spin, Modal, message } from 'antd';
import { AuctionTypeEN } from '../../utils/converTypePersion';
import moment from 'jalali-moment'
import ShowCheckbox from './ShowCheckbox';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import queryString from "query-string";
import { getProfile } from "../../redux/reducers/profile/profile.actions";
import PaginationComponent from '../../components/PaginationComponent';



function AuctionsList() {

    const { role, id } = useSelector((state) => state.profileReducer)
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)
    const [productsCount, setProductsCount] = useState(0);
    const { confirm } = Modal;
    const [params, setParams] = useState({
        page: 1,
        page_size: 10,
        home_auction: id,
    })

    const [auctionsList, setAuctionsList] = useState([
    ]);

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
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    const getProducts = () => {
        setLoading(true)
        const queries = queryString.stringify(params);
        // axios.get(`${BASE_URL}/sale/auctions/?home_auction=${id}&page_size=${page_size}`)
        axios.get(`${BASE_URL}/sale/auctions/?${queries}`)
            .then(resp => {
                setLoading(false)
                if (resp.data.code === 200) {
                    setAuctionsList(resp.data.data.result)
                    setProductsCount(resp.data.data.count)
                }

            })
            .catch(err => {
                setLoading(false)
                console.error(err);
            })
    }
    // const getBids = () => {
    //     axios.get(`${BASE_URL}/bidding/?auction=${id}`)
    //         .then(resp => {
    //             if (resp.data.code === 200) {
    //                 setAuctions(resp.data.data.result)
    //             }

    //         })
    //         .catch(err => {
    //             console.error(err);
    //         })
    // }


    const handeSelectPage = (e) => {
        setParams({
            ...params, page: e
        })
    }

    useEffect(() => {
        if (id)
            getProducts()
        if (!id)
            dispatch(getProfile())
    }, [params])
    return (
        <>
            <HeaderPanel titlePage={"Made auctions"} />
            <div className="panel-main">
                <PanelSideBar />
                <div className="panel-body">
                    <div className="panel-container">
                        <Link to="/en/panel-add-auction/new" onClick={() => dispatch(removeAUCTION())}>
                            <button type="button" className="btn btn-default">
                                <i class="fal fa-plus"></i>
                                New auction
                            </button>
                        </Link>
                        <Spin spinning={loading} >
                            <div className=" col-xxxxl-8 mrgt30">
                                <div className="table-responsive" style={{overflowX: 'auto'}}>
                                    <table className="panel-table create-auctions ">
                                        <thead>
                                            <tr>
                                                <td>Auction name</td>
                                                <td>Type</td>
                                                <td>Start date</td>
                                                <td>End date</td>
                                                <td>Artworks</td>
                                                <td>Bids</td>
                                                <td>membership request</td>
                                                <td>Show on site</td>
                                                <td>operations</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {(auctionsList && auctionsList.length >= 1) ? auctionsList.map((item, key) => {
                                                return (
                                                    <tr key={key}>
                                                        <td>{item.title_en}</td>
                                                        <td>{AuctionTypeEN(item.type)}</td>
                                                        <td>{moment(item.start_time, 'YYYY/MM/DD').locale('en').format('DD MMMM YYYY')}</td>
                                                        <td>{moment(item.end_time, 'YYYY/MM/DD').locale('en').format('DD MMMM YYYY')}</td>
                                                        <td>
                                                            {item.product_count > 0 ?
                                                                <button type="button" className="btn-outline-gray">
                                                                    {item.product_count} Artworks
                                                                </button> :
                                                                <Link to="/en/add-artworks">
                                                                    <button type="button" className="btn-outline-gray">
                                                                        Add artwork
                                                                    </button>
                                                                </Link>
                                                            }
                                                        </td>
                                                        <td>
                                                            <Link to={"/en/auctions-list/bids/" + item.id}>
                                                                <button type="button" className="btn-outline-gray">
                                                                    {item.bids_count} Bids
                                                                </button>
                                                            </Link>
                                                        </td>
                                                        <td>
                                                            <Link to={"/en/auctions-list/requests/" + item.id}>
                                                                <button type="button" className="btn-outline-gray">
                                                                    {item.registrations_count} Request
                                                                </button>
                                                            </Link>
                                                        </td>
                                                        <td className="text-center">
                                                            <ShowCheckbox visible_in_site={item?.visible_in_site} auctionsListId={item?.id} />

                                                        </td>
                                                        <td>
                                                            {item.status !== "CLOSED" && item.status !== "ACTIVE" ?
                                                                <>
                                                                    <Link onClick={() => dispatch(removeAUCTION())}
                                                                        to={`/en/panel-add-auction/${item.id}`} type="button" >
                                                                        <i class="fal fa-pen"></i>
                                                                    </Link>
                                                                    <button type="button"
                                                                        onClick={() => showDeleteConfirm(item.id)}>
                                                                        <i class="fal fa-times"></i>
                                                                    </button>
                                                                </> : ""}
                                                        </td>
                                                    </tr>
                                                )
                                            }) : ""}
                                        </tbody>
                                    </table>
                                </div>
                                <PaginationComponent count={productsCount} handeSelectPage={handeSelectPage} />

                            </div>
                        </Spin>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuctionsList;