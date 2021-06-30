import React from 'react'
import { Link } from "react-router-dom";
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
            <Link to="/" className="d-md-none d-block">
              <img
                src="img/logo-white.png"
                width="139"
                height="30"
                alt="اسمارت آکشن"
              />
            </Link>
            <ul className="panel-list">
              <li className="active" >
                <Link to="/panel-profile">
                  <FontAwesomeIcon icon={faPen} /> پروفایل
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faGavel} /> حراج‌های من
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faPlusCircle} /> حراج‌های ساخته‌شده
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faDollarSign} /> پیشنهادهای من
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faHeart} /> علاقه‌مندی‌ها
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faBell} /> یادآوری‌ها
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faShoppingCart} /> خریدهای من
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faWallet} /> کیف پول
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faWallet} /> مشاوره فروش
                </Link>
              </li>
              <li>
                <Link to="/panel-artwork-list" >
                  <FontAwesomeIcon icon={faWallet} /> لیست آثار
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faCommentAlt} /> پیشنهاد فروش
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faEnvelope} /> پیام‌ها
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faCreditCard} /> اطلاعات مالی
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faSignOutAlt} /> خروج
                </Link>
              </li>
            </ul>
          </div>    
        </>
    )
}

export default PanelSidebar; 