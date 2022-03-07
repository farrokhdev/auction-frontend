import React from 'react'
import { Link } from "react-router-dom";
import logowhite from "../../images/logo-white.png";
import loginactive from "../../images/login-active.png";
import { removeToken } from "../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { clearStorageAll ,changeLanguage } from "../../redux/reducers/all/all.actions";
import auctionWhite from "../../images/auction-white.svg"
import { openDashboard } from "../../redux/reducers/all/all.actions"

function HeaderPanel(props) {
    const dispatch = useDispatch();
    const { is_Open_Dashboard } = useSelector((state) => state.allReducer)

    return (

        <header>
            <div className="panel-header">
                <div className="panel-brand">
                    <Link to="/" className="pb-3">
                        <img src={logowhite} width="139" height="30" alt="Auction" />
                    </Link>
                </div>
                <div className="panel-head ">
                    <div className="d-block d-lg-none col-2 " onClick={() => dispatch(openDashboard(!is_Open_Dashboard))}>
                        <img
                            src={auctionWhite}
                            width="16"
                            height="16"
                            alt=""
                            className="panel-menu"
                        />
                    </div>
                    <div className="panel-title col-8">
                        <h4 className="default">{props?.titlePage}</h4>
                    </div>
                    <div className="panel-info col-lg-4 col-2">
                        <ul className="navbar-nav flex-row-reverse">
                            <li className="nav-item">
                                <Link className="nav-link" to={window.location.href.split("#")[1].replace('/en','')} onClick={() => {
                                    setTimeout(() => {
                                        dispatch(changeLanguage('fa'))
                                        window.location.reload()
                                    }, 300);
                                }}>
                                    FA
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/" onClick={() => {
                                    dispatch(clearStorageAll())
                                }}>
                                    Exit
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default HeaderPanel;

