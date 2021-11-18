import React, { useEffect, useState } from 'react'
import Header from '../../componentsEN/HeaderPanel';
import PanelSidebar from '../../componentsEN/PanelSideBar';
import img6 from "../../imgEN/img-6.jpg";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { Spin, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";

import PaginationComponent from '../../components/PaginationComponent';



function UserPanelArtworkList() {
    const [loading, setLoading] = useState(false)
    const [artworkList, setArtworkList] = useState([1,2,3,4])
    const [dataCount, setDataCount] = useState(0)
    const { role, id } = useSelector((state) => state.profileReducer)
    const [params, setParams] = useState({
        page: 1,
        page_size: 10,
        owner__id: role === 'user' ? id : '',
        auction_houses__id: role !== 'user' ? id : '',

    })
    let numeral = require('numeral');
    const dispatch = useDispatch();
    const { confirm } = Modal;



    useEffect(() => {
    }, [params])


    
    const handeSelectPage = (e) => {
        setParams({
            ...params, page: e
        })
    }


    return (
        <>
            <Header titlePage={"Sell list artwork"} />
            <div className="panel-main">
                <PanelSidebar />
                <div className="panel-body">
                    <div className="panel-container">
                        {/* {role === "home_auction" ?
                            <Link to="/add-artworks">
                                <button type="button" className="btn btn-default" data-bs-toggle="modal"
                                    data-bs-target="#new-ticket"><FontAwesomeIcon icon={faPlus} /> Add artwork
                                </button>
                            </Link> : ''} */}

                        <Spin spinning={loading}>
                            <div className="mrgt30">
                                <div className="table-responsive">
                                    <table className="panel-table sellrecommand ">
                                        <thead>
                                            <tr>
                                                <td>Image</td>
                                                <td>Name</td>
                                                <td>Artist</td>
                                                <td>Lat number</td>
                                                <td>Price estimate</td>
                                                <td>Number of bids</td>
                                                <td>Sold price</td>
                                                <td></td>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                artworkList && artworkList.length ? artworkList.map((item, i) => <tr>
                                                    <td key={i} className="artwork-img">
                                                        {/* <div className="image-custom-back" 
                                                        style={{
                                                            // backgroundImage: `url(${item.media?.filter(item => item?.is_default === true)[0]?.exact_url})`,
                                                            // backgroundImage: `url(${item.media[0]?.exact_url})`,
                                                            backgroundImage: `url(${img6})`,
                                                            height: "7rem",
                                                            width: "2rem"
                                                        }}
                                                        ></div> */}
                                                        <img src={img6} width="317" height="280" alt="" class="img-fluid"></img>

                                                    </td>
                                                    <td>Artwork1</td>
                                                    <td>Sadeq Adham	</td>
                                                    <td>2</td>
                                                    <td>
                                                        <span>{numeral(item?.min_price).format('0,0')} </span>
                                                        <span> - </span>
                                                        <span>{numeral(item?.max_price).format('0,0')}</span>
                                                        <span className="price-unit"> USD</span>
                                                    </td>
                                                    <td>3</td>
                                                    <td>{numeral(item?.price).format('0,0')}<span className="price-unit"> USD</span></td>
                                                    <td>
                                                        {/* {item?.owner?.id === id ?
                                                            <button type="button" className="operations" 
                                                            // onClick={() => showDeleteConfirm(item.id)}
                                                            >
                                                                <i class="fal fa-times"></i>
                                                            </button> : ''}


                                                        {item?.owner?.id === id && item?.is_approve === "waiting" ?
                                                            <Link to={`/edit-artworks/${item?.id}`} className="operations">
                                                                <button type="button" className="operations">
                                                                    <i class="fal fa-pen"></i>
                                                                </button>
                                                            </Link> : ''} */}
                                                    </td>
                                                </tr>) : ''
                                            }




                                        </tbody>

                                    </table>

                                    <div className="d-flex justify-content-center w-100 mt-4">
                                        <PaginationComponent count={dataCount} handeSelectPage={handeSelectPage} />
                                    </div>
                                </div>

                            </div>
                        </Spin>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserPanelArtworkList;
