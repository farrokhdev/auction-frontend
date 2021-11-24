import React, {useEffect, useState} from 'react';
import {Button, Card, Checkbox, message, Modal, Spin} from "antd";
import Meta from "antd/es/card/Meta";
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import {LIST_PRODUCTS} from "../../utils/constant";
import Chooseartwork from "./ChooseArtwork";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setAUCTION} from "../../redux/reducers/auction/auction.actions";
import {DeleteColumnOutlined, DeleteFilled} from '@ant-design/icons';
import Productinput from "./Productinput"

const Products = (props) => {
    const {id} = props;
    const [loading, setLoading] = useState(false)
    const [productsList, setProductsList] = useState([])
    // const [data, setData] = useState({})
    const [isModalVisible, setIsModalVisible] = useState(false)
    const {type, products} = useSelector((state) => state.auctionReducer)
    const dispatch = useDispatch();
    const [Check, setCheck] = useState(true);
    return (
        <div>
            <div className="text-center">
                <div className="default-box-choose mt-3 w-auto d-inline-block" onClick={() => {
                    setIsModalVisible(true)
                }}>Product selection
                </div>
            </div>


            <Modal centered title={
                <div className='d-flex align-items-center justify-content-between'>
                    <span className="default titr">Artworks</span>

                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        onClick={() => setIsModalVisible(false)}
                    />

                </div>
            } className="text-end" width={1000} visible={isModalVisible}
                   onOk={() => setIsModalVisible(false)} onCancel={() => setIsModalVisible(false)}
                   footer={[<div className="text-center">
                       <Button key={2} type="" onClick={() => {
                           let list = {}
                           productsList.map(t => list[t?.id] = t)
                           dispatch(setAUCTION({
                               products: {...products, ...list},
                           }))
                           setIsModalVisible(false)
                       }}
                               className="btn-default">
                           submit
                       </Button></div>]}>
                <Chooseartwork selectProduct={productsList} setSelectProduct={setProductsList} id={id} listCheck={[]}/></Modal>
            {
                Check ?
                    <div className="row mt-3">
                        {
                            !isModalVisible && products && Object.keys(products).length ? Object.keys(products).map((item, i) =>
                                    <Productinput item={item} key={i} setCheck={setCheck}/>
                            ) : ''
                        }
                    </div>
                    :
                  <div className='text-center mt-4'>
                      <Spin spinning={!Check}/>
                  </div>
            }



        </div>
    );
};

export default Products;
