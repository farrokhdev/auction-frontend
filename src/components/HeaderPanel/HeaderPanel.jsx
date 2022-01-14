import React from 'react'
import { Link } from "react-router-dom";
// import logowhite from "../../images/logo-white.png";
import logowhite from "../../images/smartauction-168.png";
import loginactive from "../../images/login-active.png";
import { removeToken } from "../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { clearStorageAll, changeLanguage } from "../../redux/reducers/all/all.actions";
import auctionWhite from "../../images/auction-white.svg"
import { openDashboard } from "../../redux/reducers/all/all.actions"
function HeaderPanel(props) {
  const dispatch = useDispatch();
  const { is_Open_Dashboard } = useSelector((state) => state.allReducer)
  return (

    <header>
      <div className="panel-header">
        <div className="panel-brand">
          <Link to="/" className="p-2 pt-0">
            <img src={logowhite} width="110" height="70" alt="اسمارت آکشن" />
          </Link>
        </div>
        <div className="panel-head ">
          <div className="d-block d-lg-none col-2 pt-3 " onClick={() => dispatch(openDashboard(!is_Open_Dashboard))}>
            
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
                <Link className="nav-link" to="/" onClick={() => {
                  setTimeout(() => {
                    dispatch(changeLanguage('en'))
                    window.location.reload()
                  }, 300);
                }}>
                  EN
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={() => {
                  dispatch(clearStorageAll())
                }}>
                  خروج
                </Link>
              </li>

              {/*<li className="nav-item">*/}
              {/*  <Link className="nav-link text-dark" to="/">*/}
              {/*    <img*/}
              {/*      src={loginactive}*/}
              {/*      width="30"*/}
              {/*      height="30"*/}
              {/*      alt="ورود به اسمارت آکشن"*/}
              {/*    />*/}
              {/*    <span className="d-none d-lg-inline-block ">*/}
              {/*      نیما حیدری*/}
              {/*    </span>*/}
              {/*  </Link>*/}
              {/*</li>*/}
            </ul>
          </div>
        </div>
      </div>
    </header>

  )
}

export default HeaderPanel;
// const mapDispatchToProps = (dispatch) => {
//   return {
//       changeTitlePagePanel :(data) => dispatch(changeTitlePagePanel(data))
//   }
// }

// const mapStateToProps = (store) => {
//   return {
//       panel : store.panelReducer,
//   }
// }


// export default connect(mapStateToProps , mapDispatchToProps)(HeaderPanel)
