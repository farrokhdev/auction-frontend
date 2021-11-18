import React, { useEffect } from 'react'
import { NavLink as NavLinkRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPen,
    faGavel,
    faPlusCircle,
    faHeart,
    faBell,
    faShoppingCart,
    faWallet,
    faDollarSign,
    faCommentAlt,
    faEnvelope,
    faCreditCard,
    faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../redux/reducers/profile/profile.actions";
import logoWhite from "../../imgEN/logo-white.png";
import { clearStorageAll } from "../../redux/reducers/all/all.actions";

function PanelSideBar(props) {
    const dispatch = useDispatch();
    const { role } = useSelector((state) => state.profileReducer)

    const { is_Open_Dashboard } = useSelector((state) => state.allReducer)

    useEffect(() => {
        if (!role)
            dispatch(getProfile())
    }, [])
    return (
        <>
            <div className={`panel-sidebar ${is_Open_Dashboard && "active"} `}>
                <NavLinkRouter activeClassName="active-style-menu" to="/en" className="d-md-none d-block">
                    <img
                        src={logoWhite}
                        width="139"
                        height="30"
                        alt="Auction"
                    />
                </NavLinkRouter>
                <ul className="panel-list">
                    <li  >
                        <NavLinkRouter activeClassName="active-style-menu" to="/en/panel-profile">
                            <i class="fal fa-pen"></i>
                            Edit profile
                        </NavLinkRouter>
                    </li>
                    <li>
                        <NavLinkRouter activeClassName="active-style-menu" to="/panel-auctions">
                            <i class="fal fa-gavel"></i>
                            My auctions
                        </NavLinkRouter>
                    </li>
                    {role === "home_auction" || role === "admin" ? <li>
                        <NavLinkRouter activeClassName="active-style-menu" to="/auctions-list">
                            <i class="fal fa-plus-circle"></i>
                            Made auctions
                        </NavLinkRouter>
                    </li> : ''}
                    {role !== "home_auction" ? <li>
                        <NavLinkRouter activeClassName="active-style-menu" to="/panel-request-houseAuction">
                            <i class="fal fa-plus-circle"></i>
                            Request an auction house
                        </NavLinkRouter>
                    </li> : ""}
                    <li>
                        <NavLinkRouter activeClassName="active-style-menu" to="/en/panel-favorites">
                            <i class="fal fa-heart"></i>
                            Favorites
                        </NavLinkRouter>
                    </li>
                    <li>
                        <NavLinkRouter activeClassName="active-style-menu" to="/en/panel-myPurchases">
                            <i class="fal fa-shopping-cart"></i>
                            My purchases
                        </NavLinkRouter>
                    </li>
                    <li>
                        <NavLinkRouter activeClassName="active-style-menu" to="/en/panel-wallet">
                            <i class="fal fa-wallet"></i>
                            Wallet
                        </NavLinkRouter>
                    </li>
                    <li>
                        <NavLinkRouter activeClassName="active-style-menu" to="/panel-sell-advice">
                            <i class="fal fa-wallet"></i>
                            Sell advice
                        </NavLinkRouter>
                    </li>
                    <li>
                        <NavLinkRouter activeClassName="active-style-menu" to="/en/panel-artwork-list" >
                            <i class="fal fa-wallet"></i>
                            Sell list artwork
                        </NavLinkRouter>
                    </li>

                    <li>
                        <NavLinkRouter activeClassName="active-style-menu" to="/en/panel-reminders" >
                            <i class="fal fa-bell"></i>
                            Reminders
                        </NavLinkRouter>
                    </li>
                    {role === "home_auction" || role === "admin" ? <li>
                        <NavLinkRouter activeClassName="active-style-menu" to="/panel-sell-recommendation">
                            <i class="fal fa-comment-alt-smile"></i>
                            Sell reommendation
                        </NavLinkRouter>
                    </li> : ''}
                    <li>
                        <NavLinkRouter activeClassName="active-style-menu" to="/en/panel-messages">
                            <i class="fal fa-envelope"></i>
                            Messages
                        </NavLinkRouter>
                    </li>

                    <li>
                        <NavLinkRouter activeClassName="active-style-menu" to="/en/panel-financial">
                            <i class="fal fa-credit-card"></i>
                            Financial Information
                        </NavLinkRouter>
                    </li>
                    <li>
                        <NavLinkRouter to="/" onClick={() => {
                            dispatch(clearStorageAll())
                        }}>
                            <i class="fal fa-sign-out"></i>
                            Exit
                        </NavLinkRouter>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default PanelSideBar;
