import React, { useState } from 'react'
import HeaderPanel from '../../componentsEN/HeaderPanel';
import PanelSideBar from '../../componentsEN/PanelSideBar';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeAUCTION } from '../../redux/reducers/auction/auction.actions';
import { Spin, Modal ,message } from 'antd';
import { AuctionTypeEN } from '../../utils/converTypePersion';
import moment from 'jalali-moment'
import ShowCheckbox from './ShowCheckbox';
import { ExclamationCircleOutlined } from '@ant-design/icons';

function AuctionsList() {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)
    const { confirm } = Modal;
    const [auctionsList, setAuctionsList] = useState([
        {
            title: 'Collection7',
            type: 'ONLINE',
            product_count: 2,
            bids_count: 3,
            id: 1,
            start_time: '2021-08-27 15:30:00+00:00',
            end_time: '2022-10-05 23:40:00+00:00',
            registrations_count: 1,
            visible_in_site: true,
            status: 'PREPARING'
        }]);

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
    return (
        <>
            <HeaderPanel titlePage={"Made auctions"} />
            <div className="panel-main">
                <PanelSideBar />
                <div className="panel-body">
                    <div className="panel-container">
                        <Link to="/panel-add-auction/new" onClick={() => dispatch(removeAUCTION())}>
                            <button type="button" className="btn btn-default">
                                <i class="fal fa-plus"></i>
                                New auction
                            </button>
                        </Link>
                        <Spin spinning={loading} >
                            <div className="col-xxxxl-8 mrgt30">
                                <div className="table-responsive">
                                    <table className="panel-table create-auctions table ">
                                        <thead>
                                            <tr>
                                                <td>Auction name</td>
                                                <td>Type</td>
                                                <td>Start date</td>
                                                <td>End date</td>
                                                <td>Artworks</td>
                                                <td>Bids</td>
                                                <td>membership request</td>
                                                <td className="text-center">Show on site</td>
                                                <td>operations</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {(auctionsList && auctionsList.length >= 1) ? auctionsList.map((item, key) => {
                                                return (
                                                    <tr key={key}>
                                                        <td>{item.title}</td>
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
                                                                        to={`/panel-add-auction/${item.id}`} type="button" >
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
                            </div>
                        </Spin>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuctionsList;