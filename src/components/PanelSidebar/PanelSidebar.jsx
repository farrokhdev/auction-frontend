import React from 'react'
import {NavLink as NavLinkRouter} from "react-router-dom";
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

function PanelSidebar() {
    return (
        <>
        <div className="panel-sidebar">
            <NavLinkRouter activeClassName="active-style-menu" to="/" className="d-md-none d-block">
              <img
                src="img/logo-white.png"
                width="139"
                height="30"
                alt="اسمارت آکشن"
              />
            </NavLinkRouter>
            <ul className="panel-list">
              <li  >
                <NavLinkRouter activeClassName="active-style-menu"   to="/panel-profile">
                  <FontAwesomeIcon icon={faPen} /> پروفایل
                </NavLinkRouter>
              </li>
              {/*<li>*/}
              {/*  <NavLinkRouter activeClassName="active-style-menu" to="/">*/}
              {/*    <FontAwesomeIcon icon={faGavel} /> حراج‌های من*/}
              {/*  </NavLinkRouter>*/}
              {/*</li>*/}
              <li>
                <NavLinkRouter activeClassName="active-style-menu" to="/auctions-list">
                  <FontAwesomeIcon icon={faPlusCircle} /> حراج‌های ساخته‌شده
                </NavLinkRouter>
              </li>
              <li>
                <NavLinkRouter activeClassName="active-style-menu" to="/buyer-register">
                  <FontAwesomeIcon icon={faPlusCircle} /> عضویت در حراج
                </NavLinkRouter>
              </li>
              {/*<li>*/}
              {/*  <NavLinkRouter activeClassName="active-style-menu" to="/">*/}
              {/*    <FontAwesomeIcon icon={faDollarSign} /> پیشنهادهای من*/}
              {/*  </NavLinkRouter>*/}
              {/*</li>*/}
              {/*<li>*/}
              {/*  <NavLinkRouter activeClassName="active-style-menu" to="/">*/}
              {/*    <FontAwesomeIcon icon={faHeart} /> علاقه‌مندی‌ها*/}
              {/*  </NavLinkRouter>*/}
              {/*</li>*/}
              {/*<li>*/}
              {/*  <NavLinkRouter activeClassName="active-style-menu" to="/">*/}
              {/*    <FontAwesomeIcon icon={faBell} /> یادآوری‌ها*/}
              {/*  </NavLinkRouter>*/}
              {/*</li>*/}
              {/*<li>*/}
              {/*  <NavLinkRouter activeClassName="active-style-menu" to="/">*/}
              {/*    <FontAwesomeIcon icon={faShoppingCart} /> خریدهای من*/}
              {/*  </NavLinkRouter>*/}
              {/*</li>*/}
              <li>
                <NavLinkRouter activeClassName="active-style-menu" to="/panel-wallet">
                  <FontAwesomeIcon icon={faWallet} /> کیف پول
                </NavLinkRouter>
              </li>
              {/*<li>*/}
              {/*  <NavLinkRouter activeClassName="active-style-menu" to="/">*/}
              {/*    <FontAwesomeIcon icon={faWallet} /> مشاوره فروش*/}
              {/*  </NavLinkRouter>*/}
              {/*</li>*/}
              <li>
                <NavLinkRouter activeClassName="active-style-menu" to="/panel-artwork-list" >
                  <FontAwesomeIcon icon={faWallet} /> لیست آثار
                </NavLinkRouter>
              </li>
              {/*<li>*/}
              {/*  <NavLinkRouter activeClassName="active-style-menu" to="/">*/}
              {/*    <FontAwesomeIcon icon={faCommentAlt} /> پیشنهاد فروش*/}
              {/*  </NavLinkRouter>*/}
              {/*</li>*/}
              <li>
                <NavLinkRouter activeClassName="active-style-menu" to="/panel-message">
                  <FontAwesomeIcon icon={faEnvelope} /> پیام‌ها
                </NavLinkRouter>
              </li>
              {/*<li>*/}
              {/*  <NavLinkRouter activeClassName="active-style-menu" to="/">*/}
              {/*    <FontAwesomeIcon icon={faCreditCard} /> اطلاعات مالی*/}
              {/*  </NavLinkRouter>*/}
              {/*</li>*/}
              <li>
                <NavLinkRouter to="/">
                  <FontAwesomeIcon icon={faSignOutAlt} /> خروج از پروفایل
                </NavLinkRouter>
              </li>
            </ul>
          </div>    
        </>
    )
}

export default PanelSidebar; 