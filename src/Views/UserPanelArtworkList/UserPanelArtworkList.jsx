import React from 'react'
import HeaderPanel from '../../components/HeaderPanel';
import PanelSidebar from '../../components/PanelSidebar';
import img6 from "../../images/img-6.jpg";
import {faPlus,faPen, faTimes} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

function UserPanelArtworkList() {
    return (
        <>
            <HeaderPanel/>
            <div className="panel-main">
            <PanelSidebar/>   
            <div className="panel-body">
            <div className="panel-container">
                <Link to="/add-artworks">
                     <button type="button" className="btn btn-default" data-bs-toggle="modal"
                        data-bs-target="#new-ticket"><FontAwesomeIcon icon={faPlus}/> افزودن اثر
                </button>
                </Link>
               
                <div className="mrgt30">
                    <div className="table-responsive">
                        <table className="panel-table sellrecommand ">
                            <thead>
                            <tr>
                                <td>تصویر</td>
                                <td>نام</td>
                                <td>هنرمند</td>
                                <td>شماره لت</td>
                                <td>تخمین قیمت</td>
                                <td>تعداد بیدها</td>
                                <td>قیمت فروخته شده</td>
                                <td></td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="artwork-img">
                                    <img src={img6} width="317" height="280" alt="" className="img-fluid"/>
                                </td>
                                <td>اثر 1</td>
                                <td>صادق ادهم</td>
                                <td>110</td>
                                <td>
                                    <span>1500 -</span>
                                    <span>3000</span>
                                    <span className="price-unit">تومان</span>
                                </td>
                                <td>26</td>
                                <td>2500<span className="price-unit">تومان</span></td>
                                <td>
                                    <button type="button" ><FontAwesomeIcon icon={faTimes} />
                                    </button>
                                    <button type="button" ><FontAwesomeIcon icon={faPen} /> </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="artwork-img">
                                    <img src={img6} width="317" height="280" alt="" className="img-fluid"/>
                                </td>
                                <td>اثر 1</td>
                                <td>صادق ادهم</td>
                                <td>110</td>
                                <td>
                                    <span>1500 -</span>
                                    <span>3000</span>
                                    <span className="price-unit">تومان</span>
                                </td>
                                <td>26</td>
                                <td>2500<span className="price-unit">تومان</span></td>
                                <td>
                                    <button type="button"><FontAwesomeIcon icon={faTimes}/>
                                    </button>
                                    <button type="button"><FontAwesomeIcon icon={faPen}/></button>
                                </td>
                            </tr>
                            <tr>
                                <td className="artwork-img">
                                    <img src={img6} width="317" height="280" alt="" className="img-fluid"/>
                                </td>
                                <td>اثر 1</td>
                                <td>صادق ادهم</td>
                                <td>110</td>
                                <td>
                                    <span>1500 -</span>
                                    <span>3000</span>
                                    <span className="price-unit">تومان</span>
                                </td>
                                <td>26</td>
                                <td>2500<span className="price-unit">تومان</span></td>
                                <td>
                                    <button type="button"><FontAwesomeIcon icon={faTimes}/>
                                    </button>
                                    <button type="button"><FontAwesomeIcon icon={faPen}/></button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default UserPanelArtworkList;