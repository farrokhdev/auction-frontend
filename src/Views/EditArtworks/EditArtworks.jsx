import React, { useState, useEffect } from 'react'
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import HeaderPanel from '../../components/HeaderPanel';
import PanelSidebar from '../../components/PanelSidebar';
import { message } from "antd";
import { CheckCircleTwoTone, LoadingOutlined } from '@ant-design/icons';


function EditArtworks(props) {

    const [productInfo, setProductInfo] = useState();
    const [loading, setLoading] = useState(false)
    const [formDataArtwork, setFormDataArtwork] = useState({})
    const [CoreUpload, setCoreUpload] = useState("");
    const [ChildCategories, setChildCategories] = useState("");
    const [Uploaded, setUploaded] = useState(false);
    const [Uploading, setUploading] = useState(false);
    const [Posting, setPosting] = useState(false);

    const getproduct = () => {
        setLoading(true)
        axios.get(`${BASE_URL}/sale/product/${props.match.params.id}/`)
            .then(resp => {
                setProductInfo(resp.data.data.result)

            })
            .catch(err => {
                console.error(err);
            })
    }

    const handleMainCategories = () => {
        axios.get(`${BASE_URL}/sale/category/?title=آثار`)
            .then(resp => {
                setChildCategories(resp.data.data.result[0].children)
            })
            .catch(err => {
                console.error(err);
            })
    }


    const handleUpload = (e) => {
        let payload = { "content_type": "image" }
        axios.post(`${BASE_URL}/core/upload/`, payload)
            .then(resp => {
                if (resp.data.code === 200) {
                    setCoreUpload(resp.data.data.result)
                    setUploading(true)
                    axios.put(resp.data.data.result.upload_url, e.target.files[0])
                        .then(resp1 => {
                            if (resp1.status === 200) {
                                axios.post(`${BASE_URL}/core/media/photos/`, {
                                    "media_path": resp.data.data.result.upload_url,
                                    "type": "image",
                                    "bucket_name": "image",
                                    "file_key": resp.data.data.result.file_key
                                })
                                    .then(resp2 => {
                                        if (resp2.data.code === 201) {
                                            setCoreUpload(resp2.data.data.result)
                                            setUploaded(true)
                                            setUploading(false)
                                            console.log(resp2.data.data.result)
                                        }
                                    })
                                    .catch(err => {
                                        console.log("Error Message", err.response);
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
            .catch(err => {
                console.log("Error Message", err.response);
            })

    }

    console.log("formDataArtwork==><><", formDataArtwork)

    let handleFormSubmit = () => {
        console.log("formDataArtwork?.persian_description", formDataArtwork?.persian_description)
        let payload = {
            "artwork_title": formDataArtwork?.artwork_title,
            "persian_artist_name": formDataArtwork?.persian_artist_name,
            "english_artist_name": "adf",
            "artwork_num": parseInt(formDataArtwork?.artwork_num),
            "artwork_length": parseInt(formDataArtwork?.artwork_length),
            "artwork_width": parseInt(formDataArtwork?.artwork_width),
            "artwork_height": parseInt(formDataArtwork?.artwork_height),
            "technique": formDataArtwork?.technique,
            "category_id": [formDataArtwork?.category_id],
            "persian_description": formDataArtwork?.persian_description,
            "english_description": "fasdf",
            "media": {
                "media_path": Uploaded ? CoreUpload.upload_url : "",
                "type": "image",
                "bucket_name": "image",
                "file_key": Uploaded ? CoreUpload.file_key : ""
            },
            "artwork_link": formDataArtwork?.artwork_link,
            "min_price": formDataArtwork?.min_price,
            "max_price": formDataArtwork?.max_price,
            "offer_home_auction": "unrequired"
            //    صاحب اثر هم هست
        }
        setPosting(true)

        axios.put(`${BASE_URL}/sale/product/${props.match.params.id}/`, payload)
            .then(resp => {
                if (resp.data.data.statusCode !== 400 && resp.data.data.statusCode !== 403) {
                    message.success('اثر با موفقیت ویرایش شد.');
                    setPosting(false)
                    window.location.href = "#/panel-artwork-list"
                } else {
                    message.error(resp.data.data.error_message);
                }
            })
            .catch(err => {
                message.error(err.response.data.data.error_message);
                setPosting(false)
            })
    }

    useEffect(() => {
        getproduct()
        handleMainCategories()
    }, [])




    useEffect(() => {
        if (productInfo?.media?.exact_url) {
            setCoreUpload(productInfo?.media)
            setUploaded(true)
        }

        setFormDataArtwork({
            artwork_title: productInfo?.artwork_title,
            persian_artist_name: productInfo?.persian_artist_name,
            english_artist_name: "adf",
            artwork_num: parseInt(productInfo?.artwork_num),
            artwork_length: parseInt(productInfo?.artwork_length),
            artwork_width: parseInt(productInfo?.artwork_width),
            artwork_height: parseInt(productInfo?.artwork_height),
            technique: productInfo?.technique,
            category_id: productInfo?.category[0]?.id,
            persian_description: productInfo?.persian_description,
            english_description: "fasdf",

            artwork_link: productInfo?.artwork_link,
            min_price: productInfo?.min_price,
            max_price: productInfo?.max_price,
            offer_home_auction: "unrequired"
        })


    }, [productInfo])
    return (
        <>
            <HeaderPanel titlePage={'ویرایش اثر'} />
            <div className="panel-main">
                <PanelSidebar />
                {/**Main**/}
                <div className="panel-body">
                    <div className="panel-container">

                        <div className="col-xxxxl-8">
                            <div className="d-flex mb-3">
                                <label htmlFor={"file"} className="btn-outline-pink">
                                    انتخاب تصویر
                                </label>

                                {Uploading ? <span style={{ marginRight: 5 }}> درحال آپلود </span> : ""}
                                {Uploaded ?

                                    // <img className="image-custom-back" style={{ backgroundImage: `url(${productInfo?.media?.exact_url})`, height: "3rem", width: "7rem" }} />
                                    <CheckCircleTwoTone style={{ marginRight: 5 }} twoToneColor="#52c41a" />
                                    : ""}

                                <input
                                    onChange={(e) => handleUpload(e)}
                                    id={'file'} type="file" accept=".jpg, .jpeg, .png" style={{ display: "none" }}
                                    defaultValue={productInfo?.media?.exact_url}
                                />

                            </div>
                            <img className="image-custom-back" style={{ backgroundImage: `url(${productInfo?.media?.exact_url})`, height: "5rem", width: "7rem" }} />

                            <div className="row addartwork">
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <label className="default-lable">دسته‌بندی</label>
                                        <select
                                            onChange={(e) => setFormDataArtwork({ ...formDataArtwork, category_id: e.target.value })}
                                            className="form-select" aria-label="Default select example">
                                            <option disabled selected>{productInfo?.category[0]?.title}</option>
                                            {ChildCategories?.length >= 1 ? ChildCategories?.map((item, key) => {
                                                return (
                                                    <option
                                                        key={key}
                                                        value={item?.id}>
                                                        {item?.title}
                                                    </option>
                                                )
                                            }) :
                                                <option disabled>هیچ</option>
                                            }
                                        </select>

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <label className="default-lable">هنرمند</label>
                                        <input type="text" className="default-input"
                                            onChange={(e) => setFormDataArtwork({ ...formDataArtwork, artwork_title: e.target.value })}
                                            placeholder="نام هنرمند را وارد نمایید."
                                            defaultValue={productInfo?.artwork_title}
                                        />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="input-group">
                                        <label className="default-lable">نام اثر</label>
                                        <input
                                            onChange={(e) => setFormDataArtwork({ ...formDataArtwork, persian_artist_name: e.target.value })}
                                            type="text" className="default-input" placeholder="نام اثر را وارد نمایید."
                                            defaultValue={productInfo?.persian_artist_name}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <label className="default-lable">صاحب اثر</label>
                                        <input type="text" className="default-input"
                                            placeholder="نام صاحب اثر را وارد نمایید."
                                            value="گالری آرتیبیشن" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <label className="default-lable">شماره اثر</label>
                                        <input
                                            onChange={(e) => setFormDataArtwork({ ...formDataArtwork, artwork_num: e.target.value })}
                                            type="number" className="default-input" placeholder="شماره اثر را وارد نمایید."
                                            defaultValue={productInfo?.artwork_num}
                                        />
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="input-group">
                                                <label className="default-lable">طول اثر</label>
                                                <input
                                                    onChange={(e) => setFormDataArtwork({ ...formDataArtwork, artwork_length: e.target.value })}
                                                    type="number" className="default-input" placeholder="طول اثر"
                                                    defaultValue={productInfo?.artwork_length}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="input-group">
                                                <label className="default-lable">ارتفاع اثر</label>
                                                <input
                                                    onChange={(e) => setFormDataArtwork({ ...formDataArtwork, artwork_height: e.target.value })}
                                                    type="number" className="default-input" placeholder="ارتفاع اثر"
                                                    defaultValue={productInfo?.artwork_height}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="input-group">
                                                <label className="default-lable">عرض اثر</label>
                                                <input
                                                    onChange={(e) => setFormDataArtwork({ ...formDataArtwork, artwork_width: e.target.value })}
                                                    type="number" className="default-input" placeholder="عرض اثر"
                                                    defaultValue={productInfo?.artwork_width}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="input-group">
                                                <label className="default-lable">کمترین قیمت</label>
                                                <input type="text" className="default-input"
                                                    onChange={(e) => setFormDataArtwork({ ...formDataArtwork, min_price: e.target.value })}
                                                    placeholder="کمترین قیمت مورد نظر را وارد نمایید."
                                                    defaultValue={productInfo?.min_price}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-group">
                                                <label className="default-lable">بیشترین قیمت</label>
                                                <input
                                                    onChange={(e) => setFormDataArtwork({ ...formDataArtwork, max_price: e.target.value })}
                                                    type="text" className="default-input"
                                                    placeholder="بیشترین قیمت را وارد نمایید."
                                                    defaultValue={productInfo?.max_price} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="input-group">
                                        <label className="default-lable">تکنیک</label>
                                        <input
                                            onChange={(e) => setFormDataArtwork({ ...formDataArtwork, technique: e.target.value })}
                                            // onChange={(e) => setTechnique(e.target.value)}
                                            type="text" className="default-input"
                                            defaultValue={productInfo?.technique}
                                            placeholder="تکنیک اثر را وارد نمایید." />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="input-group">
                                        <label className="default-lable">توضیحات</label>
                                        <textarea rows="3" className="default-input"
                                            onChange={(e) => setFormDataArtwork({ ...formDataArtwork, persian_description: e.target.value })}
                                            placeholder="توضیحات را وارد نمایید."
                                            defaultValue={productInfo?.persian_description}
                                        />
                                    </div>
                                </div>
                                <div className="col-12">
                                    {/* <p className="mrgt30">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                        استفاده از
                                        طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                                        است</p> */}
                                </div>
                                <div className="col-xl-3">
                                    <div className="input-group">
                                        <label className="default-lable">عنوان لینک</label>
                                        <input type="text" className="default-input"
                                            placeholder="عنوان لینک را وارد نمایید." />
                                    </div>
                                </div>
                                <div className="col-xl-9">
                                    <div className="input-group">
                                        <label className="default-lable">لینک</label>
                                        <input
                                            onChange={(e) => setFormDataArtwork({ ...formDataArtwork, artwork_link: e.target.value })}
                                            type="text" className="default-input" placeholder="http://auction.ir"
                                            defaultValue={productInfo?.artwork_link}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 button-group">
                                    <button
                                        disabled={Posting}
                                        onClick={handleFormSubmit}
                                        type="button" className={Posting ? "btn-outline-pink" : "btn-default"}>
                                        {Posting ? <LoadingOutlined style={{ marginLeft: 5 }} /> : ""}
                                        ویرایش اثر</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditArtworks;