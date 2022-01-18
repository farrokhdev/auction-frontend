import React, { useState } from 'react';
import { CheckCircleTwoTone } from "@ant-design/icons";
import axios from "../../utils/request";
import UploadAxios from "../../utils/uploadRequest";
import { BASE_URL } from "../../utils";
import { Image } from "antd";


function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

const UploadImage = (props) => {
    const { handleResultUpload, initialImage = '' } = props;
    const [Uploaded, setUploaded] = useState(false);
    const [Uploading, setUploading] = useState(false);



  
    const handleUpload = (e) => {
        let payload = { "content_type": "image" }
        axios.post(`${BASE_URL}/core/upload/`, payload)
            .then(resp => {
                if (resp.data.code === 200) {
                    setUploading(true)
                    UploadAxios.put(resp.data.data.result.upload_url, e.target.files[0] )
                        .then(resp1 => {
                            let payload = {
                                "media_path": resp.data.data.result.upload_url,
                                "type": "image",
                                "bucket_name": "image",
                                "file_key": resp.data.data.result.file_key
                            }

                            getBase64(e.target.files[0], imageUrl =>{
                                handleResultUpload({...payload , exact_url : imageUrl})
                      
                            })
                            setUploaded(true)
                            setUploading(false)
                        })
                        .catch(err => {
                            console.error(err);
                            setUploading(false)
                        })
                }
            })
            .catch(err => {
                console.log("Error Message", err.response);
            })
    }
    return (
        <>
            <div className="col-md-6">
                <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <label htmlFor={"file"} className="btn-outline-pink"
                            style={{ fontSize: "13px !important", cursor: "pointer" }}>
                            انتخاب تصویر
                        </label>

                        {Uploading ? <span style={{ marginRight: 5 }}> درحال آپلود... </span> : ""}
                        {Uploaded ? <CheckCircleTwoTone style={{ marginRight: 5 }} twoToneColor="#52c41a" /> : ""}

                        <input onChange={(e) => handleUpload(e)} id={'file'} type="file" accept=".jpg, .jpeg, .png"
                            style={{ display: "none" }} />
                    </div>

                    {
                        initialImage ? <div>
                            <Image src={initialImage.exact_url} width={100} />
                        </div> : ''
                    }
                </div>

            </div>



        </>
    );
};

export default UploadImage;