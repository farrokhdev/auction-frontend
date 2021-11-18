import React, { useState } from 'react';
import { Button } from "antd";
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import { CheckCircleTwoTone, LoadingOutlined } from "@ant-design/icons";
import { JOIN_AUCTION } from "../../utils/constant";
import { message } from 'antd';
import { Link, Redirect } from "react-router-dom";

const Contract = (props) => {
    const { setSelectComponent, selectComponent } = props
    const [CoreUpload, setCoreUpload] = useState("");
    const [Uploaded, setUploaded] = useState(false);
    const [Uploading, setUploading] = useState(false);
    const [posted, setPosted] = useState(false);
    const [loading, setLoading] = useState(false)

    if (posted) {
        return (
            <Redirect to={{ pathname: "/auctions/" }} />
        )
    }
    return (
        <div>
            <div className="container container-form">
                <h5 className="default mrgt50">Agreement</h5>
                <p><Link
                    to="/">Click here to download a sample contract..</Link></p>
                <div className="row">
                    <div className="col-md-6">
                        <div className="input-group">
                            <label className="default-lable">Agreement</label>
                            <input
                                type="file"
                                className="default-input"
                                placeholder="IR"
                                accept=".pdf, .rar"
                                onClick={(e) => e.target.value = ""}
                            // onChange={(e) => {
                            //     handleUpload(e)
                            // }}
                            />
                            <div className="input-file">
                                <span className="input-placeholder">Select Agreement</span>
                                {Uploading ? <span style={{ marginRight: 5 }}> Uploading </span> : ""}
                                {Uploaded ? <CheckCircleTwoTone style={{ marginRight: 5 }} twoToneColor="#52c41a" /> : ""}
                                <span className="btn-file" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="button-group">
                    <button type="button" className="btn-gray">Back</button>
                    <button type="button" className="btn-default"
                        //  onClick={() => sendData()} 
                        disabled={!Uploaded}>
                        {loading ? <LoadingOutlined style={{ marginLeft: 5 }} /> : ""}
                        Done</button>
                </div>
            </div>
        </div>
    );
};

export default Contract;
