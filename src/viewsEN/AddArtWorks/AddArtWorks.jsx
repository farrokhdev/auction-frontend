import React, { useEffect, useState } from "react";
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import { CheckCircleTwoTone, LoadingOutlined } from '@ant-design/icons';
import { message } from 'antd';
import 'antd/dist/antd.css';
import HeaderPanel from "../../componentsEN/HeaderPanel";
import PanelSidebar from "../../componentsEN/PanelSideBar";
import MultipleUpload from "../../componentsEN/MultiUpload";


function
    AddArtWorks(props) {
    const [Categories, setCategories] = useState("");
    const [ChildCategories, setChildCategories] = useState("");
    const [CoreUpload, setCoreUpload] = useState("");
    const [Uploaded, setUploaded] = useState(false);
    const [Uploading, setUploading] = useState(false);
    const [Posting, setPosting] = useState(false);

    //form
    
    const [Title, setTitle] = useState("");
    const [Category, setCategory] = useState("");
    // const [ArtistFa, setArtistFa] = useState("");
    const [ArtistEn, setArtistEn] = useState("");
    const [Number, setNumber] = useState("");
    const [Length, setLength] = useState("");
    const [Width, setWidth] = useState("");
    const [Height, setHeight] = useState("");
    const [MinPrice, setMinPrice] = useState("");
    const [MaxPrice, setMaxPrice] = useState("");
    const [Technique, setTechnique] = useState("");
    const [DescriptionEn, setDescriptionEn] = useState("");
    const [Link, setLink] = useState("");
    const [uploadList, setUploadList] = useState([])

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

        handleMainCategories()

    }, [])

    const handleMainCategories = () => {
        setCategory("")
        // axios.get(`${BASE_URL}/sale/category/${e.target.value}`)
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

    let handleFormSubmit = () => {
        let payload = {
            "artwork_title": Title,
            "persian_artist_name": ArtistEn,
            "english_artist_name": ArtistEn,
            "artwork_num": parseInt(Number),
            "artwork_length": parseInt(Length),
            "artwork_width": parseInt(Width),
            "artwork_height": parseInt(Height),
            "technique": Technique,
            "technique_en": Technique,
            "category_id": [Category],
            "persion_description": DescriptionEn,
            "english_description": DescriptionEn,
            "media": uploadList,
            "artwork_link": Link,
            "min_price": MinPrice,
            "max_price": MaxPrice,
            "offer_home_auction": "unrequired"
        }
        setPosting(true)

        axios.post(`${BASE_URL}/sale/product/`, payload)
            .then(resp => {
                if (resp.data.code === 201) {
                    message.success('The work was successfully registered.');
                    setPosting(false)
                    window.location.href = "#/en/panel-artwork-list"
                }
            })
            .catch(err => {
                message.error(err.response.data?.data?.error_message);
                setPosting(false)
            })
    }



    return (
        <div>
            <HeaderPanel titlePage={'Add artwork'} />
            <div className="panel-main">
                <PanelSidebar />
                {/**Main**/}
                <div className="panel-body">
                    <div className="panel-container">

                        <div className="col-xxxxl-8">

                            <MultipleUpload
                                uploadList={uploadList}
                                setUploadList={setUploadList}
                            />

                            <div className="row addartwork mt-5">
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <label className="default-lable">category</label>
                                        <select
                                            onChange={(e) => setCategory(e.target.value)}
                                            className="form-select" aria-label="Default select example">
                                            <option disabled selected>select</option>
                                            {ChildCategories?.length >= 1 ? ChildCategories?.map((item, key) => {
                                                return (
                                                    <option
                                                        key={key}
                                                        value={item?.id}>
                                                        {item?.title_en}
                                                    </option>
                                                )
                                            }) :
                                                <option disabled>none</option>
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <label className="default-lable">artist</label>
                                        <input type="text" className="default-input"
                                            onChange={(e) => setArtistEn(e.target.value)}
                                            placeholder="Enter the artist name."
                                            value={ArtistEn} />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="input-group">
                                        <label className="default-lable">name artwork</label>
                                        <input
                                            onChange={(e) => setTitle(e.target.value)}
                                            type="text" className="default-input" placeholder="Enter the atwork name." value={Title} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <label className="default-lable">owner artwork</label>
                                        <input type="text" className="default-input"
                                            placeholder="Enter the owner artwork."
                                            value="Artibation gallery" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <label className="default-lable">artwork lot number</label>
                                        <input
                                            onChange={(e) => setNumber(e.target.value)}
                                            type="number" className="default-input" placeholder="Enter the artwork number."
                                            value={Number} />
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="input-group">
                                                <label className="default-lable">artwork length</label>
                                                <input
                                                    onChange={(e) => setLength(e.target.value)}
                                                    type="number" className="default-input" placeholder="artwork length" value={Length} />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="input-group">
                                                <label className="default-lable">artwork height</label>
                                                <input
                                                    onChange={(e) => setHeight(e.target.value)}
                                                    type="number" className="default-input" placeholder="artwork height" value={Height} />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="input-group">
                                                <label className="default-lable">artwork Width</label>
                                                <input
                                                    onChange={(e) => setWidth(e.target.value)}
                                                    type="number" className="default-input" placeholder="artwork Width" value={Width} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="input-group">
                                                <label className="default-lable">min price</label>
                                                <input type="text" className="default-input"
                                                    onChange={(e) => setMinPrice(e.target.value)}
                                                    placeholder="Enter the min price." />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-group">
                                                <label className="default-lable">max price</label>
                                                <input
                                                    onChange={(e) => setMaxPrice(e.target.value)}
                                                    type="text" className="default-input"
                                                    placeholder="Enter the max price." />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="input-group">
                                        <label className="default-lable">Technique</label>
                                        <input
                                            onChange={(e) => setTechnique(e.target.value)}
                                            type="text" className="default-input"
                                            value={Technique}
                                            placeholder="Enter the artwork Technique " />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="input-group">
                                        <label className="default-lable">description</label>
                                        <textarea rows="3" className="default-input"
                                            onChange={(e) => setDescriptionEn(e.target.value)}
                                            placeholder="Entert the description." />
                                    </div>
                                </div>
                                <div className="col-12">
                                    {/* <p className="mrgt30">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Consequuntur illum molestiae quod eaque culpa minima, totam,
                                        enim vero modi sequi magni facere libero blanditiis temporibus quos incidunt minus deserunt commodi.
                                    </p> */}
                                </div>
                                <div className="col-xl-3">
                                    <div className="input-group">
                                        <label className="default-lable">
                                            link title</label>
                                        <input type="text" className="default-input"
                                            placeholder="Enter the link title" />
                                    </div>
                                </div>
                                <div className="col-xl-9">
                                    <div className="input-group">
                                        <label className="default-lable">link</label>
                                        <input
                                            onChange={(e) => setLink(e.target.value)}
                                            type="text" className="default-input" placeholder="http://auction.ir" value={Link} />
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
                                        add artwork</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/**Main**/}

        </div>
    );
}

export default AddArtWorks;
