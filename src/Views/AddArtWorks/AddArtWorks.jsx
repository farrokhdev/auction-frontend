import React, {useEffect, useState} from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import { CheckCircleTwoTone, LoadingOutlined } from '@ant-design/icons';
import { message } from 'antd';
import 'antd/dist/antd.css';

function AddArtWorks(props) {
    const [Categories, setCategories] = useState("");
    const [ChildCategories, setChildCategories] = useState("");
    const [CoreUpload, setCoreUpload] = useState("");
    const [Uploaded, setUploaded] = useState(false);
    const [Uploading, setUploading] = useState(false);
    const [Posting, setPosting] = useState(false);

    //form
    const [Title, setTitle] = useState("");
    const [Category, setCategory] = useState("");
    const [ArtistFa, setArtistFa] = useState("");
    const [ArtistEn, setArtistEn] = useState("");
    const [Number, setNumber] = useState("");
    const [Length, setLength] = useState("");
    const [Width, setWidth] = useState("");
    const [Height, setHeight] = useState("");
    const [MinPrice, setMinPrice] = useState("");
    const [MaxPrice, setMaxPrice] = useState("");
    const [Technique, setTechnique] = useState("");
    const [DescriptionFa, setDescriptionFa] = useState("");
    const [Link, setLink] = useState("");

    useEffect(() => {
        axios.get(`${BASE_URL}/sale/category/`)
            .then(resp => {
                if (resp.data.code === 200) {
                    setCategories(resp.data.data.result)
                }

            })
            .catch(err => {
                console.error(err);
            })

    }, [])

    const handleMainCategories = (e) =>{
        setCategory("")
        axios.get(`${BASE_URL}/sale/category/${e.target.value}`)
            .then(resp => {
                if (resp.data.code === 200) {
                    setChildCategories(resp.data.data.result.children)
                }

            })
            .catch(err => {
                console.error(err);
            })
    }

    const handleUpload = (e) => {
        let payload = {"content_type":"image"}
        axios.post(`${BASE_URL}/core/upload/`, payload)
            .then(resp=>{
                if(resp.data.code === 200){
                    setCoreUpload(resp.data.data.result)
                    setUploading(true)
                    axios.put(resp.data.data.result.upload_url, e.target.files[0])
                        .then(resp => {
                            if (resp.status === 200) {
                                setUploaded(true)
                                setUploading(false)
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

    let handleFormSubmit = ()=>{
        let payload = {
            "artwork_title": Title,
            "persian_artist_name": ArtistFa,
            "english_artist_name": "adf",
            "artwork_num": parseInt(Number),
            "artwork_length": parseInt(Length),
            "artwork_width": parseInt(Width),
            "artwork_height": parseInt(Height),
            "technique": Technique,
            "category_id": [Category],
            "persion_description": DescriptionFa,
            "english_description": "fasdf",
            "media": {
                "media_path": Uploaded ? CoreUpload.upload_url : "",
                "type": "image",
                "bucket_name": "image",
                "file_key": Uploaded ? CoreUpload.file_key : ""
            },
            "price": MinPrice,
            "artwork_link" : Link,
        //    صاحب اثر هم هست
        }
        setPosting(true)

        axios.post(`${BASE_URL}/sale/product/`, payload)
            .then(resp=>{
                if(resp.data.code === 201){
                    message.success('اثر با موفقیت ثبت شد.');
                    setPosting(false)
                }
            })
            .catch(err=>{
                message.error(err.response.data.data.error_message);
                setPosting(false)
            })
    }

    return (
        <div dir="rtl">
            <Header/>

            {/**Main**/}
            <div className="panel-body">
                <div className="panel-container">

                    <div className="col-xxxxl-8">
                        <div className="row addartwork">
                            <div className="col-md-6">
                                <div className="input-group">
                                    <label className="default-lable">دسته‌بندی عمومی</label>
                                    <select className="form-select" aria-label="Default select example"
                                            onChange={handleMainCategories} required={true}>
                                        <option disabled selected>انتخاب کنید</option>
                                        { Categories && Categories.length >= 1  ? Categories.map((item, key) => {
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
                                <label htmlFor={"file"} className="btn-outline-pink">
                                    انتخاب تصویر
                                </label>

                                { Uploading ? <span style={{marginRight: 5}}> درحال آپلود </span> : "" }
                                { Uploaded ? <CheckCircleTwoTone style={{marginRight: 5}} twoToneColor="#52c41a" /> : "" }

                                <input onChange={(e) => handleUpload(e)} id={'file'} type="file" accept=".jpg, .jpeg, .png" style={{display: "none"}}/>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group">
                                    <label className="default-lable">دسته‌بندی</label>
                                    <select
                                        onChange={(e)=>setCategory(e.target.value)}
                                        className="form-select" aria-label="Default select example">
                                        <option disabled selected>انتخاب کنید</option>
                                        { ChildCategories.length >= 1  ? ChildCategories.map((item, key) => {
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
                                           onChange={(e)=>setArtistFa(e.target.value)}
                                           placeholder="نام هنرمند را وارد نمایید."
                                           value={ArtistFa}/>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="input-group">
                                    <label className="default-lable">نام اثر</label>
                                    <input
                                        onChange={(e)=>setTitle(e.target.value)}
                                        type="text" className="default-input" placeholder="نام اثر را وارد نمایید." value={Title}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group">
                                    <label className="default-lable">صاحب اثر</label>
                                    <input type="text" className="default-input"
                                           placeholder="نام صاحب اثر را وارد نمایید."
                                           value="گالری آرتیبیشن"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group">
                                    <label className="default-lable">شماره اثر</label>
                                    <input
                                        onChange={(e)=>setNumber(e.target.value)}
                                        type="number" className="default-input" placeholder="شماره اثر را وارد نمایید."
                                           value={Number}/>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="input-group">
                                            <label className="default-lable">طول اثر</label>
                                            <input
                                                onChange={(e)=>setLength(e.target.value)}
                                                type="number" className="default-input" placeholder="طول اثر" value={Length}/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="input-group">
                                            <label className="default-lable">ارتفاع اثر</label>
                                            <input
                                                onChange={(e)=>setHeight(e.target.value)}
                                                type="number" className="default-input" placeholder="ارتفاع اثر" value={Height}/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="input-group">
                                            <label className="default-lable">عرض اثر</label>
                                            <input
                                                onChange={(e)=>setWidth(e.target.value)}
                                                type="number" className="default-input" placeholder="عرض اثر" value={Width}/>
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
                                                   onChange={(e)=>setMinPrice(e.target.value)}
                                                   placeholder="کمترین قیمت مورد نظر را وارد نمایید."/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-group">
                                            <label className="default-lable">بیشترین قیمت</label>
                                            <input
                                                onChange={(e)=>setMaxPrice(e.target.value)}
                                                type="text" className="default-input"
                                                placeholder="بیشترین قیمت را وارد نمایید."/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="input-group">
                                    <label className="default-lable">تکنیک</label>
                                    <input
                                        onChange={(e)=>setTechnique(e.target.value)}
                                        type="text" className="default-input"
                                        value={Technique}
                                        placeholder="تکنیک اثر را وارد نمایید."/>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="input-group">
                                    <label className="default-lable">توضیحات</label>
                                    <textarea rows="3" className="default-input"
                                              onChange={(e)=>setDescriptionFa(e.target.value)}
                                              placeholder="توضیحات را وارد نمایید."/>
                                </div>
                            </div>
                            <div className="col-12">
                                <p className="mrgt30">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                    استفاده از
                                    طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                                    است</p>
                            </div>
                            <div className="col-xl-3">
                                <div className="input-group">
                                    <label className="default-lable">عنوان لینک</label>
                                    <input type="text" className="default-input"
                                           placeholder="عنوان لینک را وارد نمایید."/>
                                </div>
                            </div>
                            <div className="col-xl-9">
                                <div className="input-group">
                                    <label className="default-lable">لینک</label>
                                    <input
                                        onChange={(e)=>setLink(e.target.value)}
                                        type="text" className="default-input" placeholder="http://auction.ir" value={Link}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 button-group">
                                <button
                                    disabled={Posting}
                                    onClick={handleFormSubmit}
                                    type="button" className={Posting ? "btn-outline-pink" :"btn-default"}>
                                    {Posting ? <LoadingOutlined style={{marginLeft: 5}} /> : ""}
                                    افزودن اثر</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/**Main**/}

            <Footer/>
        </div>
    );
}

export default AddArtWorks;