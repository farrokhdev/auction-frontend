import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Spin } from "antd";
import HeaderPanel from "../../components/HeaderPanel";
import PanelSidebar from "../../components/PanelSidebar";
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";

function LiveDetails(props) {
    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(false);

    const id = props.match.params.id;

    const getDetails = () => {
        setLoading(true)
        axios.get(`${BASE_URL}/sale/auctions/${id}/stream_info/`)
            .then(resp => {
                console.log(resp)
                setLoading(false)
                setDetails(resp.data.data.result)
            })
            .catch(err => {
                console.error(err.response);
                setLoading(false)
            })

    }

    useEffect(() => {
        getDetails()

    }, [])

    return (
        <>
            <HeaderPanel titlePage={"جزئیات پخش زنده"} />
            <Spin spinning={loading}>
                <div className="panel-main">
                    <PanelSidebar />
                    <div className="panel-body">
                        <div className="panel-container">
                            <div className="modal-header">
                                <div className="container g-0 d-flex justify-content-between">
                                    <div className="main-title">
                                        <h2 className="default titr">
                                            جزئیات
                                        </h2>
                                    </div>
                                    <Link to="/auctions-list">
                                        <button type="button" className="btn-outline-gray">
                                            بازگشت به لیست حراجی ها
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            <div className="amount-list" >
                                <table className="table-main hauction-bids">
                                    <tbody>
                                        <tr>
                                            <td>id</td>
                                            <td className="unit">{details?.id}</td>
                                        </tr>
                                        <tr>
                                            <td>input token</td>
                                            <td className="unit">{details?.input_token}</td>

                                        </tr>
                                        <tr>
                                            <td>input url</td>
                                            <td className="unit">{details?.input_url}</td>
                                        </tr>
                                        <tr>
                                            <td>player url</td>
                                            <td className="unit">{details?.player_url}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>



            </Spin>
        </>
    )
}

export default LiveDetails; 