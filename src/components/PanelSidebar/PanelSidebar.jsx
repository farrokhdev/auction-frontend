import React, { useState, useEffect } from 'react'
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
import logoWhite from "../../images/logo-white.png";
import { clearStorageAll, openDashboard } from "../../redux/reducers/all/all.actions";
import { Badge } from 'antd';

import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
// import { openDashboard } from "../../redux/reducers/all/all.actions"


function PanelSidebar(props) {
  const dispatch = useDispatch();
  const { role } = useSelector((state) => state.profileReducer)
  const { is_Open_Dashboard } = useSelector((state) => state.allReducer)
  const [show, setShow] = useState(true);
  const [readCount, setReadCount] = useState("")

  
  const unReadCount = ()=>{
    axios.get(`${BASE_URL}/messaging/inbox/unread_count/`)
    .then(resp=>{
      setReadCount(resp.data.data.result.count)
      console.log("resp==>" , resp.data.data.result.count)
    })
  }

  useEffect(()=>{
    unReadCount()
  },[])
  useEffect(() => {
    if (!role)
      dispatch(getProfile())
  }, [])
  return (
    <>
      <div className={`panel-sidebar ${is_Open_Dashboard && "active"} `}>
        <NavLinkRouter activeClassName="active-style-menu" to="/" className="d-md-none d-block">
          <img
            src={logoWhite}
            width="139"
            height="30"
            alt="اسمارت آکشن"
          />
        </NavLinkRouter>
        <ul className="panel-list">
          <li  >
            <NavLinkRouter activeClassName="active-style-menu" to="/panel-profile/check" onClick={() => dispatch(openDashboard(false))}>
              <i class="fal fa-pen"></i>
              پروفایل
            </NavLinkRouter>
          </li>
          <li>
            <NavLinkRouter activeClassName="active-style-menu" to="/panel-auctions" onClick={() => dispatch(openDashboard(false))}>
              <i class="fal fa-gavel"></i>
              حراج‌های من
            </NavLinkRouter>
          </li>
          {role === "home_auction" || role === "admin" ? <li>
            <NavLinkRouter activeClassName="active-style-menu" to="/auctions-list" onClick={() => dispatch(openDashboard(false))}>
              <i class="fal fa-plus-circle"></i>
              حراج‌های ساخته‌شده
            </NavLinkRouter>
          </li> : ''}
          {role !== "home_auction" ? <li>
            <NavLinkRouter activeClassName="active-style-menu" to="/panel-request-houseAuction" onClick={() => dispatch(openDashboard(false))}>
              <i class="fal fa-plus-circle"></i>
              درخواست خانه حراج
            </NavLinkRouter>
          </li> : ""}
          {/*<li>*/}
          {/*  <NavLinkRouter activeClassName="active-style-menu" to="/buyer-register">*/}
          {/*    <FontAwesomeIcon icon={faPlusCircle} /> عضویت در حراج*/}
          {/*  </NavLinkRouter>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <NavLinkRouter activeClassName="active-style-menu" to="/">*/}
          {/*    <FontAwesomeIcon icon={faDollarSign} /> پیشنهادهای من*/}
          {/*  </NavLinkRouter>*/}
          {/*</li>*/}
          <li>
            <NavLinkRouter activeClassName="active-style-menu" to="/favorite" onClick={() => dispatch(openDashboard(false))}>
              <i class="fal fa-heart"></i>
              علاقه‌مندی‌ها
            </NavLinkRouter>
          </li>
          {/*<li>*/}
          {/*  <NavLinkRouter activeClassName="active-style-menu" to="/">*/}
          {/*    <FontAwesomeIcon icon={faBell} /> یادآوری‌ها*/}
          {/*  </NavLinkRouter>*/}
          {/*</li>*/}
          <li>
            <NavLinkRouter activeClassName="active-style-menu" to="/my-purchases" onClick={() => dispatch(openDashboard(false))}>
              <i class="fal fa-shopping-cart"></i>
              خریدهای من
            </NavLinkRouter>
          </li>
          <li>
            <NavLinkRouter activeClassName="active-style-menu" to="/panel-wallet" onClick={() => dispatch(openDashboard(false))}>
              <i class="fal fa-wallet"></i>
              کیف پول
            </NavLinkRouter>
          </li>
          <li>
            <NavLinkRouter activeClassName="active-style-menu" to="/panel-sell-advice" onClick={() => dispatch(openDashboard(false))}>
              <i class="fal fa-wallet"></i>
              مشاوره فروش
            </NavLinkRouter>
          </li>
          <li>
            <NavLinkRouter activeClassName="active-style-menu" to="/panel-artwork-list" onClick={() => dispatch(openDashboard(false))} >
              <i class="fal fa-wallet"></i>
              لیست آثار
            </NavLinkRouter>
          </li>

          <li>
            <NavLinkRouter activeClassName="active-style-menu" to="/panel-reminders" onClick={() => dispatch(openDashboard(false))} >
              <i class="fal fa-bell"></i>
              یادآوری‌ها
            </NavLinkRouter>
          </li>
          {role === "home_auction" || role === "admin" ? <li>
            <NavLinkRouter activeClassName="active-style-menu" to="/panel-sell-recommendation" onClick={() => dispatch(openDashboard(false))}>
              <i class="fal fa-comment-alt-smile"></i>
              پیشنهاد فروش
            </NavLinkRouter>
          </li> : ''}
          <li>
            <NavLinkRouter activeClassName="active-style-menu" to="/panel-message" onClick={() => dispatch(openDashboard(false))}>
              <i class="fal fa-envelope"></i>
              پیام‌ها
              <Badge
                className="site-badge-count-109"
                count={show ? readCount : 0}
                style={{ backgroundColor: '#e6007e' , marginRight: '9rem'}}
              />
            </NavLinkRouter>
          </li>

          <li>
            <NavLinkRouter activeClassName="active-style-menu" to="/panel-financial/check" onClick={() => dispatch(openDashboard(false))}>
              <i class="fal fa-credit-card"></i>
              اطلاعات مالی
            </NavLinkRouter>
          </li>
          <li>
            <NavLinkRouter to="/" onClick={() => {
              dispatch(clearStorageAll())
            }}>
              <i class="fal fa-sign-out"></i>
              خروج از پروفایل
            </NavLinkRouter>
          </li>
        </ul>
      </div>
    </>
  )
}

export default PanelSidebar;
