import React, {useEffect, useState} from 'react';
import {Button, Card, Checkbox, message, Modal} from "antd";
import Meta from "antd/es/card/Meta";
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import {LIST_PRODUCTS} from "../../utils/constant";
import Chooseartwork from "./ChooseArtwork";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import AddProduct from "./AddProduct";

const Products = (props) => {
    const {selectComponent, setSelectComponent, products, setProducts,id} = props;
    const [loading, setLoading] = useState(false)
    // const [data, setData] = useState({})
    const [isModalVisible, setIsModalVisible] = useState(false)
    const {data} = useSelector((state) => state.auctionReducer)
    // useEffect(()=>{
    //     getData()
    // },[])

    // const getData = (e = "") => {
    //     setLoading(true)
    //     axios.get(`${BASE_URL}${LIST_PRODUCTS}`)
    //         .then(resp => {
    //             setLoading(false)
    //
    //             if ((resp.data.code === 200) && resp.data?.data?.result) {
    //                 const res = resp.data?.data?.result;
    //                 // form.setFieldsValue(res)
    //                 setData(res)
    //                 // setDataCount(resp.data?.data?.count)
    //                 // let check = Object.keys(res).some(t => !res[t]);
    //                 // console.log(check)
    //                 // setNext(!check)
    //             }
    //         })
    //         .catch(err => {
    //             setLoading(false)
    //             console.error(err);
    //             message.error("صفحه را دوباره لود کنید")
    //         })
    // }
    return (
        <div>



            <AddProduct products={products} setProducts={setProducts} id={id}/>
            <div className="row">
                <div className="col-12">
                    <div className="button-group">

                        <button type="button" className="btn-gray" onClick={() => {
                            setSelectComponent(selectComponent - 1)
                        }}>بازگشت
                        </button>


                        {products.length ? <button type="button" className="btn-default" onClick={() => {
                            if(data.type ==="ONLINE" || data.type ==="PERIODIC")
                            setSelectComponent(selectComponent + 1)
                            else
                                setSelectComponent(selectComponent + 2)
                        }}> ثبت و ادامه</button> : ''}
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Products;