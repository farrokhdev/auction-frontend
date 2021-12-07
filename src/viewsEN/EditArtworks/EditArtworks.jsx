import React, { useState, useEffect } from 'react'
import HeaderPanel from '../../componentsEN/HeaderPanel';
import PanelSideBar from '../../componentsEN/PanelSideBar';
import MultipleUpload from './MultipleUpload';
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
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



    let handleFormSubmit = () => {
        let payload = {
            "artwork_title": formDataArtwork?.artwork_title,

            "artwork_title_en": formDataArtwork?.artwork_title_en,

            "persian_artist_name": formDataArtwork?.persian_artist_name,

            "english_artist_name": formDataArtwork?.english_artist_name,
            
            "artwork_num": parseInt(formDataArtwork?.artwork_num),
            "artwork_length": parseInt(formDataArtwork?.artwork_length),
            "artwork_width": parseInt(formDataArtwork?.artwork_width),
            "artwork_height": parseInt(formDataArtwork?.artwork_height),
            "technique": formDataArtwork?.technique,

            "technique_en": formDataArtwork?.technique_en,
            "category_id": [formDataArtwork?.category_id],
            "persian_description": formDataArtwork?.persian_description,
            
            "english_description": formDataArtwork?.english_description,
            
            "media": formDataArtwork?.media,
            "artwork_link": formDataArtwork?.artwork_link,
            "min_price": formDataArtwork?.min_price,
            "max_price": formDataArtwork?.max_price,
            "offer_home_auction": "unrequired"
        }
        setPosting(true)

        axios.put(`${BASE_URL}/sale/product/${props.match.params.id}/`, payload)
            .then(resp => {
                if (resp.data.data.statusCode !== 400 && resp.data.data.statusCode !== 403) {
                    message.success('The Artwork was successfully edited.');
                    setPosting(false)
                    window.location.href = "#/en/panel-artwork-list"

                    setTimeout(() => {
                        window.location.reload();
                    }, 1200);

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

            artwork_title_en: productInfo?.artwork_title_en,

            persian_artist_name: productInfo?.persian_artist_name,

            english_artist_name: productInfo?.english_artist_name,
            
            artwork_num: parseInt(productInfo?.artwork_num),
            artwork_length: parseInt(productInfo?.artwork_length),
            artwork_width: parseInt(productInfo?.artwork_width),
            artwork_height: parseInt(productInfo?.artwork_height),
            technique: productInfo?.technique,
            technique_en:productInfo?.technique_en,
            category_id: productInfo?.category[0]?.id,
            persian_description: productInfo?.persian_description,
            english_description: "fasdf",
            media: productInfo?.media,
            artwork_link: productInfo?.artwork_link,
            min_price: productInfo?.min_price,
            max_price: productInfo?.max_price,
            offer_home_auction: "unrequired"
        })



    }, [productInfo])


    return (
        <>
            <HeaderPanel titlePage="Edit Artwork List" />
            <div className="panel-main">
                <PanelSideBar />
                <div className="panel-body">
                    <div className="panel-container">
                        <div className="col-xxxxl-8">
                            <MultipleUpload
                                formDataArtwork={formDataArtwork}
                                setFormDataArtwork={setFormDataArtwork}
                            />
                            <div className="row addartwork mt-5">
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <label className="default-lable">category</label>
                                        <select
                                            onChange={(e) => setFormDataArtwork({ ...formDataArtwork, category_id: e.target.value })}
                                            className="form-select" aria-label="Default select example">
                                            <option disabled selected>{productInfo?.category[0]?.title_en}</option>
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
                                            onChange={(e) => setFormDataArtwork({ ...formDataArtwork, artwork_title_en: e.target.value })}
                                            placeholder="Enter the artist name."
                                            defaultValue={productInfo?.artwork_title_en}
                                        />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="input-group">
                                        <label className="default-lable">name artwork</label>
                                        <input
                                            onChange={(e) => setFormDataArtwork({ ...formDataArtwork, english_artist_name: e.target.value })}
                                            type="text" className="default-input" placeholder="Enter the atwork name."
                                            defaultValue={productInfo?.english_artist_name}
                                        />
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
                                            onChange={(e) => setFormDataArtwork({ ...formDataArtwork, artwork_num: e.target.value })}
                                            type="number" className="default-input" placeholder="Enter the artwork lot number."
                                            defaultValue={productInfo?.artwork_num}
                                        />
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="input-group">
                                                <label className="default-lable">artwork length</label>
                                                <input
                                                    onChange={(e) => setFormDataArtwork({ ...formDataArtwork, artwork_length: e.target.value })}
                                                    type="number" className="default-input" placeholder="artwork length"
                                                    defaultValue={productInfo?.artwork_length}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="input-group">
                                                <label className="default-lable">artwork height</label>
                                                <input
                                                    onChange={(e) => setFormDataArtwork({ ...formDataArtwork, artwork_height: e.target.value })}
                                                    type="number" className="default-input" placeholder="artwork height"
                                                    defaultValue={productInfo?.artwork_height}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="input-group">
                                                <label className="default-lable">artwork Width</label>
                                                <input
                                                    onChange={(e) => setFormDataArtwork({ ...formDataArtwork, artwork_width: e.target.value })}
                                                    type="number" className="default-input" placeholder="artwork Width"
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
                                                <label className="default-lable">min price</label>
                                                <input type="text" className="default-input"
                                                    onChange={(e) => setFormDataArtwork({ ...formDataArtwork, min_price: e.target.value })}
                                                    placeholder="Enter the min price."
                                                    defaultValue={productInfo?.min_price}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-group">
                                                <label className="default-lable">max price</label>
                                                <input
                                                    onChange={(e) => setFormDataArtwork({ ...formDataArtwork, max_price: e.target.value })}
                                                    type="text" className="default-input"
                                                    placeholder="Enter the max price."
                                                    defaultValue={productInfo?.max_price} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="input-group">
                                        <label className="default-lable">Technique</label>
                                        <input
                                            onChange={(e) => setFormDataArtwork({ ...formDataArtwork, technique_en: e.target.value })}
                                            // onChange={(e) => setTechnique(e.target.value)}
                                            type="text" className="default-input"
                                            defaultValue={productInfo?.technique_en}
                                            placeholder="Enter the artwork Technique " />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="input-group">
                                        <label className="default-lable">description</label>
                                        <textarea rows="3" className="default-input"
                                            onChange={(e) => setFormDataArtwork({ ...formDataArtwork, english_description: e.target.value })}
                                            placeholder="Entert the description."
                                            defaultValue={productInfo?.english_description}
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
                                        Edit artwork</button>
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