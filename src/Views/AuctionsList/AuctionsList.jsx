import React, {useEffect, useState} from "react";
import Footer from "../../components/footer";
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTimes, faPlus,faStop} from "@fortawesome/free-solid-svg-icons";
import moment from 'jalali-moment'
import HeaderPanel from "../../components/HeaderPanel";
import PanelSidebar from "../../components/PanelSidebar";
import {Link} from "react-router-dom";
import {Modal, Button, Space, Spin, message} from 'antd';
import {ExclamationCircleOutlined} from '@ant-design/icons';
import {useDispatch, useSelector} from "react-redux";
import {removeAUCTION, setAUCTION} from "../../redux/reducers/auction/auction.actions";
import {DELETE_AUCTION,EDIT_AUCTION} from "../../utils/constant";
import {getProfile} from "../../redux/reducers/profile/profile.actions";

function AuctionsList() {

    const [Auctions, setAuctions] = useState("");
    const [pageSize, setPageSize] = useState(30);
    const [bidsCount, setBidsCount] = useState(0);
    const [bids, setBids] = useState("");
    const [loading, setLoading] = useState(false);
    const {confirm} = Modal;
    const dispatch = useDispatch();
    const {role,id} = useSelector((state) => state.profileReducer)
    function showDeleteConfirm(id) {

        confirm({
            title: 'آیا قصد حذف کردن این حراجی را دارید؟',
            icon: <ExclamationCircleOutlined/>,
            content: '',
            okText: 'بله',
            okType: 'danger',
            cancelText: 'خیر',
            onOk() {
                setLoading(true)
                axios.delete(`${BASE_URL}${DELETE_AUCTION(id)}`)
                    .then(resp => {
                        setLoading(false)
                        message.success("حذف حراجی با موفقیت انجام شد")
                        getProducts()
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


    const getProducts = (page_size = pageSize) => {
        setLoading(true)
        axios.get(`${BASE_URL}/sale/auctions/?home_auction=${id}&page_size=${page_size}`)
            .then(resp => {
                setLoading(false)
                if (resp.data.code === 200) {
                    setAuctions(resp.data.data.result)
                }

            })
            .catch(err => {
                setLoading(false)
                console.error(err);
            })
    }
    const getBids = () => {
        axios.get(`${BASE_URL}/bidding/?auction=${id}`)
            .then(resp => {
                if (resp.data.code === 200) {
                    setAuctions(resp.data.data.result)
                }

            })
            .catch(err => {
                console.error(err);
            })
    }

    // useEffect(() => {
    //     getProducts()
    //
    // }, [])
    useEffect(()=>{
        // setSelectProduct([])
        if(id)
            getProducts()
        if (!id)
            dispatch(getProfile())
    },[])

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
                        <Link to="/panel-add-auction/new" onClick={() => dispatch(removeAUCTION())}>
                            <button type="button" className="btn btn-default"><FontAwesomeIcon className="pl-2"
                                                                                               icon={faPlus}/> حراج جدید
                            </button>
                        </Link>
                        {/*<button type="button" className="btn btn-outline-pink" style={{marginRight:5}}>بارگزاری تفاهم‌نامه*/}
                        {/*</button>*/}
                        <Spin spinning={loading} >
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
                                        <td className="text-center">نمایش درسایت </td>
                                        <td>عملیات</td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {(Auctions && Auctions.length >= 1) ? Auctions.map((item, key) => {
                                        return (
                                            <tr key={key}>
                                                <td>{item.title}</td>
                                                <td>{AuctionType(item.type)}</td>
                                                <td>{moment(item.start_time, 'YYYY/MM/DD').locale('fa').format('DD MMMM YYYY')}</td>
                                                <td>{item.end_time !== "None" ? moment(item.end_time, 'YYYY/MM/DD').locale('fa').format('DD MMMM YYYY') : ""}</td>

                                                <td>
                                                    {item.product_count > 0 ?
                                                        <button type="button" className="btn-outline-gray">
                                                            {item.product_count} اثر
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
                                                            {item.bids_count} پیشنهاد
                                                        </button>
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link to={"/auctions-list/requests/" + item.id}>
                                                        <button type="button" className="btn-outline-gray">
                                                            {item.registrations_count} درخواست
                                                        </button>
                                                    </Link>
                                                </td>
                                                <td className="text-center">
                                                    <ShowCheckbox visible_in_site={item?.visible_in_site} auctionId={item?.id}/>

                                                    </td>
                                                    <td>
                                                        {item.status == "CLOSED" && item.status !== "ACTIVE"  ?
                                                        <>
                                                        <Link onClick={() => dispatch(removeAUCTION())}
                                                              to={`/panel-add-auction/${item.id}`} type="button">
                                                            <FontAwesomeIcon icon={faPen}/>
                                                        </Link>
                                                        <button type="button"
                                                                onClick={() => showDeleteConfirm(item.id)}>
                                                            <FontAwesomeIcon icon={faTimes}/>
                                                        </button>
                                                            </> :""}
                                                    </td>
                                                </tr>
                                            )
                                        }) : ""}
                                        </tbody>
                                    </table>
                                {(Auctions && Auctions.length < 1) ? <p className="text-center ">شما تا به حال حراجی ثبت نکرده اید</p>:''}
                                </div>

                            </div>
                        </Spin>
                    </div>
                </div>
            </div>
            {/**Main**/}


        </div>


    );
}

export default AuctionsList;
const ShowCheckbox = (props) => {
    const {auctionId, visible_in_site} = props;
    const [loading, setLoading] = useState(false);
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        setIsShow(visible_in_site)
    }, [visible_in_site])

    const handleShow = (value) => {
        setLoading(true)
        axios.patch(`${BASE_URL}${EDIT_AUCTION(auctionId)}`, {
            visible_in_site:value
        })
            .then(resp => {
                setLoading(false)
                if (resp.data.code === 200) {
                    message.success("اطلاعات نمایش در سایت با موفقیت ویرایش شد")
                    // setNext(true)
                    // dispatch(removeAUCTION())
                    setIsShow(value)
                } else {
                    console.log(resp)
                }
            })
            .catch(err => {
                setLoading(false)
                console.error(err.response);

                if (err.response?.data?.message === "ok")
                    message.error(err.response?.data?.data?.error_message)
                else
                    message.error(err.response?.data?.message)

            })
    }
    return (
        <Spin spinning={loading}>
        <input className="form-check-input" type="checkbox"
               checked={isShow}
               onChange={(e) => {
                   handleShow(e.target.checked);
                   // dispatch(setAUCTION({extendable_deadline:e.target.checked}))
               }}
               id="checkbox413"/>
        </Spin>
    )
}
