import React, {useState} from 'react';
import {Button} from "antd";

const Contract = (props) => {
    const {setSelectComponent, selectComponent} = props
    const sendData = () => {
        // setSelectComponent(selectComponent + 1)
        console.log({
            "sale_id": props.id,
            "products_id": props.selectProducts,
            "recommender": props.RecommenderData,
            "medias": [{
                "media_path": "https://box.amnmoj.ir/image/d30da840-dd21-443e-9a21-8b973a2ebdbb?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=XAS8PG1BHSATZE09C25C%2F20210502%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210502T145642Z&X-Amz-Expires=18000&X-Amz-SignedHeaders=host&X-Amz-Signature=4e7b975ef0a594e18ad0589bd7947cd8569206ce72db22ffb8c6b5b4347b81d8",
                "type": "image",
                "bucket_name": "image",
                "file_key": "d30da840-dd21-443e-9a21-8b973a2ebdbb"
            }]
        })
    }
    return (
        <div>
            <div className="container container-form">
                <p></p>
                {!true ?
                    <>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="input-group">
                                <label className="default-lable">مدرک شماره1</label>
                                <input type="file" className="default-input" placeholder="IR"/>
                                <div className="input-file">
                                    <span className="input-placeholder">انتخاب فایل</span>
                                    <span className="btn-file"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="input-group">
                                <label className="default-lable">مدرک شماره2</label>
                                <input type="file" className="default-input" placeholder="IR"/>
                                <div className="input-file">
                                    <span className="input-placeholder">انتخاب فایل</span>
                                    <span className="btn-file"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    </>
                    : ""
                }
                <h5 className="default mrgt50">قرارداد</h5>
                <p><a
                    href="#">برای دانلود نمونه قرارداد اینجا کلیک کنید.</a></p>
                <div className="row">
                    <div className="col-md-6">
                        <div className="input-group">
                            <label className="default-lable">قرارداد</label>
                            <input type="file" className="default-input" placeholder="IR"/>
                                <div className="input-file">
                                    <span className="input-placeholder">انتخاب فایل قرارداد</span>
                                    <span className="btn-file"/>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="button-group">
                    <button type="button" className="btn-gray">بازگشت</button>
                    <button type="button" className="btn-default" onClick={() => sendData()}>ثبت نهایی</button>
                </div>
            </div>
        </div>
    );
};

export default Contract;