import React, {useEffect, useState} from "react";
import Footer from "../../components/footer";
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTimes, faPlus} from "@fortawesome/free-solid-svg-icons";
import moment from 'jalali-moment'
import HeaderPanel from "../../components/HeaderPanel";
import PanelSidebar from "../../components/PanelSidebar";
import {Link} from "react-router-dom";
import { Modal, Button, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import {useSelector} from "react-redux";

function AuctionsList() {

    const [Auctions, setAuctions] = useState("");
    const [pageSize, setPageSize] = useState(30);
    const [bidsCount, setBidsCount] = useState(0);
    const [bids, setBids] = useState("");
    const { confirm } = Modal;

    function showDeleteConfirm() {
        confirm({
            title: 'آیا قصد حذف کردن این حراجی را دارید؟',
            icon: <ExclamationCircleOutlined />,
            content: '',
            okText: 'بله',
            okType: 'danger',
            cancelText: 'خیر',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }


    const getProducts = (page_size = pageSize) => {
        axios.get(`${BASE_URL}/sale/auctions/?page_size=${page_size}`)
            .then(resp => {
                if (resp.data.code === 200) {
                    setAuctions(resp.data.data.result)
                }

            })
            .catch(err => {
                console.error(err);
            })
    }
    const getBids = () => {
        axios.get(`${BASE_URL}/bidding/?auction=1`)
            .then(resp => {
                if (resp.data.code === 200) {
                    setAuctions(resp.data.data.result)
                }

            })
            .catch(err => {
                console.error(err);
            })
    }

    useEffect(() => {
        getProducts()

    }, [])

    function AuctionType(type) {

        switch (type) {
            case "SECOND_HIDDEN":
                return "دومین پیشنهاد"
            case "HIDDEN":
                return "اولین پیشنهاد"
            case "PERIODIC":
                return "مدت دار"
            case "ONLINE":
                return "آنلاین"
            case "LIVE":

                return "زنده"
            default:
                return ""
        }
    }


    return (
        <div>
            <HeaderPanel titlePage={"حراج‌های ساخته‌شده"}/>
            <div className="panel-main">
                <PanelSidebar/>
                {/**Main**/}
                <div className="panel-body">
                    <div className="panel-container">
                        <Link to="/panel-add-auction">
                            <button type="button" className="btn btn-default"><FontAwesomeIcon className="pl-2"
                                                                                               icon={faPlus}/> حراج جدید
                            </button>
                        </Link>
                        {/*<button type="button" className="btn btn-outline-pink" style={{marginRight:5}}>بارگزاری تفاهم‌نامه*/}
                        {/*</button>*/}
                        <div className="col-xxxxl-8 mrgt30">
                            <div className="table-responsive">
                                <table className="panel-table create-auctions table ">
                                    <thead>
                                    <tr>
                                        <td>نام حراج</td>
                                        <td>نوع</td>
                                        <td>تاریخ شروع</td>
                                        <td>تاریخ پایان</td>
                                        <td>آثار</td>
                                        <td>پیشنهادات</td>
                                        <td>درخواست عضویت</td>
                                        <td></td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {Auctions && Auctions.length >= 1 ? Auctions.map((item, key) => {
                                        return (
                                            <tr key={key}>
                                                <td>{item.title}</td>
                                                <td>{AuctionType(item.type)}</td>
                                                <td>{moment(item.start_time, 'YYYY/MM/DD').locale('fa').format('DD MMMM YYYY')}</td>
                                                <td>{item.end_time !== "None" ? moment(item.end_time, 'YYYY/MM/DD').locale('fa').format('DD MMMM YYYY') : ""}</td>

                                                <td>
                                                    {item.product.length > 0 ?
                                                        <button type="button" className="btn-outline-gray">
                                                            {item.product.length} اثر
                                                        </button> :
                                                        <Link to="/add-artworks">
                                                            <button type="button" className="btn-outline-gray">
                                                                افزودن اثر
                                                            </button>
                                                        </Link>
                                                    }
                                                </td>
                                                <td>
                                                    <Link to={"/auctions-list/bids/" + item.id}>
                                                        <button type="button" className="btn-outline-gray">
                                                            3 پیشنهاد
                                                        </button>
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link to={"/auctions-list/requests/" + item.id}>
                                                        <button type="button" className="btn-outline-gray">
                                                            8 درخواست
                                                        </button>
                                                    </Link>
                                                </td>
                                                <td>
                                                    <button type="button">
                                                        <FontAwesomeIcon icon={faPen}/>
                                                    </button>
                                                    <button type="button" onClick={showDeleteConfirm}>
                                                        <FontAwesomeIcon icon={faTimes}/>
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    }) : ""}
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/**Main**/}


        </div>


    );
}

export default AuctionsList;
