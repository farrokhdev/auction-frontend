import React from "react";
// import logo from "../../images/logo1.png";
import logo from "../../images/smartauction-192.png";
import search from "../../images/search.svg";
import auction from "../../images/auction.svg";
import house from "../../images/location-icon.svg";
import help from "../../images/help.svg";
import login from "../../images/login.svg";
import artwork from "../../images/artist-icon.svg";
import Search from "./Search";
import { connect, useDispatch, useSelector } from "react-redux";
import { clearStorage } from "../../redux/reducers/auth/auth.actions";
import {
  changeLanguage,
  clearStorageAll,
} from "../../redux/reducers/all/all.actions";
import { Link } from "react-router-dom";
import TehranLogo from "../../images/Tehran-Auction-Logo.png";
import { removeToken } from "../../utils/utils";

function Header(props) {

  const dispatch = useDispatch();
  const { is_logged_in } = useSelector((state) => state.authReducer);

  const handleRedirect = () => {
    if (props.auth.is_logged_in) {
      props.clearStorage();
      setTimeout(() => {
        window.location.href = "#/login";
      }, 1000);
    } else {
      window.location.href = "#/sign-up";
    }
  };

  console.log(props.Auction);

  return (
    <>
      <header className="mainnav boxshadow-cs" style={props.newStyle}>
        <div className=" container containercs">
          <nav className="navbar navbar-expand-lg">
            {props?.Auction?.type !== "LIVE" ? (
              <Link className="navbar-brand" to="/">
                <img
                  src={logo && logo}
                  width="100"
                  height="80"
                  alt="auction logo"
                />
              </Link>
            ) : (
              <Link className="navbar-brand" to="/">
                <img
                  src={props.Auction && props.Auction?.house?.media[0]?.exact_url}
                  width="54"
                  height="50"
                  alt="auction logo"
                />
              </Link>
            )}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {props?.Auction?.type !== "LIVE" ? (
                <div className="col col-lg-8">
                  <ul className="navbar-nav mb-2 mb-lg-0" id="mainnav">
                    <li className="nav-items ps-5 ">
                      <div
                        className="nav-link active "
                        aria-current="page"
                        // to="/"
                        data-target="nav-search"
                        id="navsearch"
                      >
                        <img
                          src={search}
                          width="16"
                          height="16"
                          alt="?????????? ???? ???????????? ????????"
                          className=""
                        />
                        ??????????
                      </div>
                      <Search />
                    </li>
                    <li className="nav-item ps-2">
                      <Link className="nav-link" to="/auctions/">
                        <img
                          src={auction}
                          width="16"
                          height="16"
                          alt="auctions"
                        />
                        ???????????????
                      </Link>
                    </li>
                    <li className="nav-item ps-2">
                      <Link className="nav-link" to="/artworks/">
                        <img
                          src={artwork}
                          width="16"
                          height="16"
                          alt="auctions"
                        />
                        ????????
                      </Link>
                    </li>
                    <li className="nav-item ps-2">
                      <Link className="nav-link" to="/house-acutions/">
                        <img
                          src={house}
                          width="16"
                          height="16"
                          alt="auctions"
                        />
                        ????????????????? ????????
                      </Link>
                    </li>
                    <li className="nav-item ps-2">
                      {/* <Link className="nav-link" to="/" data-target="nav-help">
                        <img src={help} width="16" height="16" alt="auctions" />
                        ????????????
                      </Link> */}
                      {/* <div className="inner-nav" id="nav-help">
                        <div className="row">
                          <div className="col nav-container-left">
                            <div className="nav-container">
                              <ul className="nav-firstlevel">
                                <li>
                                  <span>??????????</span>
                                  <ul className="nav-secondlevel">
                                    <li>

                                      <div onClick={handleRegisterRedirect}>{props.auth.is_logged_in ? "????????" : "???????????????"}</div>

                                    </li>
                                    <li>
                                      <div onClick={handleLoginRedirect}>{props.auth.is_logged_in ? "????????" : "????????"}</div>
                                    </li>
                                    <li>
                                      <Link to="/">?????????? ???? ????????</Link>
                                    </li>
                                    <li>
                                      <Link to="/">?????? ??????????????</Link>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <span>????????????</span>
                                  <ul className="nav-secondlevel">
                                    <li>
                                      <Link to="/">?????????????? ??????????</Link>
                                    </li>
                                    <li>
                                      <Link to="/">???????? ?????? ??????</Link>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <span>????????????</span>
                                  <ul className="nav-secondlevel">
                                    <li>
                                      <Link to="/">???????????? ????????</Link>
                                    </li>
                                    <li>
                                      <Link to="/">???????????? ????????</Link>
                                    </li>
                                  </ul>
                                </li>
                                <li></li>
                              </ul>
                            </div>
                          </div>
                          <div className="col nav-container-right d-none d-lg-block">
                            <div className="nav-container">
                              <div className="main-title faq ">
                                <h2 className="default titr">???????????? ????????????</h2>
                                <Link to="/" className="btn-view">
                                  ???????????? ??????
                                </Link>
                              </div>

                              <ul className="nav-firstlevel">
                                <li>
                                  <ul className="nav-secondlevel">
                                    <li>
                                      <Link to="/">
                                        ?????????? ?????? ?????? ???? ????????????????????? ??????????
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/">?????????? ?????????? ??????????</Link>
                                    </li>
                                    <li>
                                      <Link to="/">
                                        ???????? ???????????? ???? ???? ???????????? ?????????????? ????????????
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <ul className="nav-secondlevel">
                                    <li>
                                      <Link to="/">
                                        ?????????? ?????? ?????? ???? ????????????????????? ??????????
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/">?????????? ?????????? ??????????</Link>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="col col-lg-8"></div>
              )}
              <div className="col col-lg-4">
                <ul className="navbar-nav flex-row-reverse rightnav justify-content-center justify-content-lg-start">
                  <li className="nav-item ">
                    {/* window.location.reload();  */}


                    <Link className="nav-link" to={window.location.href.split("#")[1] === '/' ? window.location.href.split("#")[1] : '/en' + window.location.href.split("#")[1]} onClick={() => {
                      setTimeout(() => {
                        dispatch(changeLanguage('en'))
                        window.location.reload()
                      }, 700);
                    }}>

                      EN
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link" to="/panel-profile/check">
                      <img
                        src={login}
                        width="13"
                        height="13"
                        alt="???????? ???? ???????????? ????????"
                      />
                    </Link>
                  </li>
                  {is_logged_in ? (
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/"
                        onClick={() => {
                          dispatch(clearStorageAll());
                        }}
                      >
                        ????????
                      </Link>
                    </li>
                  ) : (
                    ""
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

// export default Header;

const mapDispatchToProps = (dispatch) => {
  return {
    clearStorage: () => dispatch(clearStorage()),
    // setProfile : (data) => dispatch(setProfile(data)),
    // loginSuccess : (data) => dispatch(loginSuccess(data)),
  };
};

const mapStateToProps = (store) => {
  return {
    auth: store.authReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
