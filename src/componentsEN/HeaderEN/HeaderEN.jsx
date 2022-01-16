import React from 'react'
// import logo from "../../imgEN/logo.svg";
import logo from "../../images/smartauction-192.png";
import search from "../../imgEN/search.svg";
import auction from "../../imgEN/auction.svg";
import help from "../../imgEN/help.svg";
import login from "../../imgEN/login.svg";
import Search from "./Search";
import house from "../../imgEN/location-icon.svg";
import artwork from "../../imgEN/artist-icon.svg";


import { changeLanguage, clearStorageAll } from '../../redux/reducers/all/all.actions'
import { Link } from "react-router-dom";
import { connect, useDispatch, useSelector } from 'react-redux';


function HeaderEN(props) {

    const dispatch = useDispatch()
    const { is_logged_in } = useSelector((state) => state.authReducer)

    const handleRedirect = () => {
        if(is_logged_in){
            window.location.href = "#/en/panel-profile/check"
        }else{
            window.location.href = "#/en/login"
        }
    }

    return (
        <>

            <header className="mainnav boxshadow-cs" style={props.boxShadow}>
                <div className=" container containercs">
                    <nav className="navbar navbar-expand-lg">
                        <Link to="/" className="navbar-brand">
                            <img src={logo} width="110" height="80"  alt="auction logo" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="col col-lg-8">
                                <ul className="navbar-nav mb-2 mb-lg-0" id="mainnav">
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link active" aria-current="page" data-target="nav-search"
                                            id="navsearch">
                                            <img src={search} width="16" height="16" alt="Search in auction" />
                                            Search
                                        </Link>
                                        <Search />
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/en/auctions" className="nav-link">
                                            <img src={auction} width="16" height="16" alt="auctions" />
                                            Auctions
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="/en/artworks" className="nav-link">
                                            <img src={artwork} width="16" height="16" alt="auctions" />
                                            Artworks
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/en/house-auctions" className="nav-link">
                                            <img src={house} width="16" height="16" alt="auctions" />
                                            House Auctions
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="/" className="nav-link" data-target="nav-help">
                                            <img src={help} width="16" height="16" alt="auctions" />
                                            Help
                                        </Link>
                                        <div className="inner-nav" id="nav-help">
                                            <div className="row">
                                                <div className="col nav-container-left">
                                                    <div className="nav-container">
                                                        <ul className="nav-firstlevel">
                                                            <li><span>General</span>
                                                                <ul className="nav-secondlevel">
                                                                    <li><Link to="/">Register</Link></li>
                                                                    <li><Link to="/">Login</Link></li>
                                                                    <li><Link to="/">Join the auction</Link></li>
                                                                    <li><Link to="/">Send bid</Link></li>
                                                                </ul>
                                                            </li>
                                                            <li><span>Payment</span>
                                                                <ul className="nav-secondlevel">
                                                                    <li><Link to="/">General guide</Link></li>
                                                                    <li><Link to="/">Charge wallet </Link></li>
                                                                </ul>
                                                            </li>
                                                            <li><span>Advice</span>
                                                                <ul className="nav-secondlevel">
                                                                    <li><Link to="/">Sales consuler</Link></li>
                                                                    <li><Link to="/">Sales advisor</Link></li>
                                                                </ul>
                                                            </li>
                                                            <li></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col nav-container-right d-none d-lg-block">
                                                    <div className="nav-container">
                                                        <div className="main-titleEN faq ">
                                                            <h2 className="default titr">FAQ</h2>
                                                            <Link to="/" className="btn-view">View all</Link>
                                                        </div>

                                                        <ul className="nav-firstlevel">
                                                            <li>
                                                                <ul className="nav-secondlevel">
                                                                    <li><Link to="/">How to Set Price for Your Artwork?</Link></li>
                                                                    <li><Link to="/">What is Certificate of Authenticity ?</Link></li>
                                                                    <li><Link to="/">What Are The Image File Requirements?</Link></li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <ul className="nav-secondlevel">
                                                                    <li><Link to="/">How to Set Price for Your Artwork?</Link></li>
                                                                    <li><Link to="/">What is Certificate of Authenticity ?</Link></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col col-lg-4">
                                <ul className="navbar-nav flex-row-reverse rightnav justify-content-center justify-content-lg-start">
                                    <li className="nav-item ">
                                        <Link className="nav-link" to="/" onClick={() => {
                                            setTimeout(() => {
                                                dispatch(changeLanguage('fa'))
                                                window.location.reload()
                                            }, 300);
                                        }}>
                                            FA
                                        </Link>
                                        
                                    </li>
                                    <li className="nav-item ">
                                        {/* <Link className="nav-link" to="/en/panel-profile"> */}
                                            <div className="nav-link">
                                                <img
                                                    src={login}
                                                    alt="Login in auction"
                                                    onClick={handleRedirect}
                                                />
                                            </div>
                                        {/* </Link> */}
                                    </li>
                                    {is_logged_in ? <li className="nav-item">
                                        <Link className="nav-link" to="/" onClick={() => {
                                            dispatch(clearStorageAll())
                                        }}>
                                            Exit
                                        </Link>
                                    </li> : ''}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

        </>
    )
}

export default HeaderEN;