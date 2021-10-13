import React, {useEffect} from 'react'
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
import {useDispatch, useSelector} from "react-redux";
import {getProfile} from "../../redux/reducers/profile/profile.actions";
import logoWhite from "../../images/logo-white.png";
import {clearStorageAll} from "../../redux/reducers/all/all.actions";

function PanelSidebar(props) {
  const dispatch = useDispatch();
  const {role} = useSelector((state) => state.profileReducer)
  const {is_Open_Dashboard} = useSelector((state) => state.allReducer)
  useEffect(() => {
    if (!role)
      dispatch(getProfile())
  }, [])
    return (
        <>
        <div className={`panel-sidebar ${is_Open_Dashboard && "active"} my-1`}>
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
                <NavLinkRouter activeClassName="active-style-menu"   to="/panel-profile">
                  <FontAwesomeIcon icon={faPen} /> پروفایل
                </NavLinkRouter>
              </li>
              <li>
               <NavLinkRouter activeClassName="active-style-menu" to="/panel-auctions">
                 <FontAwesomeIcon icon={faGavel} /> حراج‌های من
               </NavLinkRouter>
              </li>
              {role=== "home_auction" ?<li>
                <NavLinkRouter activeClassName="active-style-menu" to="/auctions-list">
                  <FontAwesomeIcon icon={faPlusCircle}/> حراج‌های ساخته‌شده
                </NavLinkRouter>
              </li>:''}
              <li>
                <NavLinkRouter activeClassName="active-style-menu" to="/panel-request-houseAuction">
                  <FontAwesomeIcon icon={faPlusCircle} /> درخواست خانه حراج 
                </NavLinkRouter>
              </li>
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
               <NavLinkRouter activeClassName="active-style-menu" to="/favorite">
                 <FontAwesomeIcon icon={faHeart} /> علاقه‌مندی‌ها
               </NavLinkRouter>
              </li>
              {/*<li>*/}
              {/*  <NavLinkRouter activeClassName="active-style-menu" to="/">*/}
              {/*    <FontAwesomeIcon icon={faBell} /> یادآوری‌ها*/}
              {/*  </NavLinkRouter>*/}
              {/*</li>*/}
              <li>
               <NavLinkRouter activeClassName="active-style-menu" to="/my-purchases">
                 <FontAwesomeIcon icon={faShoppingCart} /> خریدهای من
               </NavLinkRouter>
              </li>
              <li>
                <NavLinkRouter activeClassName="active-style-menu" to="/panel-wallet">
                  <FontAwesomeIcon icon={faWallet} /> کیف پول
                </NavLinkRouter>
              </li>
              <li>
                <NavLinkRouter activeClassName="active-style-menu" to="/panel-sell-advice">
                  <FontAwesomeIcon icon={faWallet} /> مشاوره فروش
                </NavLinkRouter>
              </li>
              <li>
                <NavLinkRouter activeClassName="active-style-menu" to="/panel-artwork-list" >
                  <FontAwesomeIcon icon={faWallet} /> لیست آثار
                </NavLinkRouter>
              </li>   

              <li>
                <NavLinkRouter activeClassName="active-style-menu" to="/panel-reminders" >
                  <FontAwesomeIcon icon={faWallet} /> یادآوری‌ها
                </NavLinkRouter>
              </li>
              {role=== "home_auction" ?<li>
                <NavLinkRouter activeClassName="active-style-menu" to="/panel-sell-recommendation">
                  <FontAwesomeIcon icon={faCommentAlt} /> پیشنهاد فروش
                </NavLinkRouter>
              </li>:''}
              <li>
                <NavLinkRouter activeClassName="active-style-menu" to="/panel-message">
                  <FontAwesomeIcon icon={faEnvelope} /> پیام‌ها
                </NavLinkRouter>
              </li>

              <li>
               <NavLinkRouter activeClassName="active-style-menu" to="/panel-financial">
                 <FontAwesomeIcon icon={faCreditCard} /> اطلاعات مالی
               </NavLinkRouter>
              </li>
              <li>
                <NavLinkRouter to="/"  onClick={()=>{
                    dispatch(clearStorageAll())
                  }}>
                  <FontAwesomeIcon icon={faSignOutAlt} /> خروج از پروفایل
                </NavLinkRouter>
              </li>
            </ul>
          </div>    
        </>
    )
}

export default PanelSidebar; 