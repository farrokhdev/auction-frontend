import React, { useState } from 'react';
import { Button } from "antd";
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import { CheckCircleTwoTone, LoadingOutlined } from "@ant-design/icons";
import { JOIN_AUCTION } from "../../utils/constant";
import { message } from 'antd';
import { Link, Redirect } from "react-router-dom";

const Contract = (props) => {
    const [CoreUpload, setCoreUpload] = useState("");
    const [Uploaded, setUploaded] = useState(false);
    const [Uploading, setUploading] = useState(false);
    const [posted, setPosted] = useState(false);
    const [loading, setLoading] = useState(false)


    const handleUpload = (e) => {
        let payload = {"content_type":e.target.files[0].name.split('.')[1]}
        axios.post(`${BASE_URL}/core/upload/`, payload)
            .then(resp=>{
                if(resp.data.code === 200){
                    setCoreUpload(resp.data.data.result)
                    setUploading(true)
                    axios.put(resp.data.data.result.upload_url, e.target.files[0])
                        .then(resp1 => {
                            if (resp1.status === 200) {
                                axios.post(`${BASE_URL}/core/media/photos/`, {
                                    "media_path": resp.data.data.result.upload_url,
                                    "type": e.target.files[0].name.split('.')[1],
                                    "bucket_name": e.target.files[0].name.split('.')[1],
                                    "file_key": resp.data.data.result.file_key
                                })
                                    .then(resp2=>{
                                        if(resp2.data.code === 201){
                                            setCoreUpload(resp2.data.data.result)
                                            setUploaded(true)
                                            setUploading(false)
                                        }
                                    })
                                    .catch(err=>{
                                        console.log("Error Message" , err.response);
                                        setUploading(false)
                                    })
                            }
                        })
                        .catch(err => {
                            console.error(err.response);
                            setUploading(false)
                        })
                }
            })
            .catch(err=>{
                console.log("Error Message" , err.response);
            })

    }

    const sendData = () => {
        // setSelectComponent(selectComponent + 1)
        console.log({
            "sale_id": props.id,
            "products_id": props.selectProducts,
            "recommender": props.RecommenderData,
            "medias": [CoreUpload]
        })
        setLoading(true)
        axios.post(`${BASE_URL}${JOIN_AUCTION}`, {
            "sale_id": props.id,
            "products_id": props.selectProducts,
            "recommender": props.RecommenderData,
            "medias": [CoreUpload]
        })
            .then(resp => {
                setLoading(false)
                if ((resp.data.code === 201 ) || (resp.data.code === 200 )) {
                    message.success("Your request has been successfully submitted.")
                    setPosted(true)
                }
            })
            .catch(err => {
                console.error(err);
                message.error("Try again")
                setLoading(false)
            })
    }
    if (posted) {
        return (
            <Redirect to={{ pathname: "/en/auctions/" }} />

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
                            onChange={(e) => {
                                handleUpload(e)
                            }}
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
                         onClick={() => sendData()} 
                        disabled={!Uploaded}>
                        {loading ? <LoadingOutlined style={{ marginLeft: 5 }} /> : ""}
                        Done</button>
                </div>
            </div>
        </div>
    );
};

export default Contract;
