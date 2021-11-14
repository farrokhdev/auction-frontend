import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../imgEN//logo-bw.svg';

function Footer() {
    return (
        <>
            <footer>
                <div className="container containercs">
                    <div className="row">
                        <div className="col-lg-2 d-none d-lg-block">
                            <Link to="/">
                                <img src={logo} width="468" height="234" alt="" className="img-fluid" />
                            </Link>
                        </div>
                        <div className="col-lg-8 col-md-10 col-sm-9">
                            <ul className="simple-menu">
                                <li><Link to="/">Term of us</Link></li>
                                <li><Link to="/">Privacy</Link></li>
                                <li><Link to="/">Work with us</Link></li>
                                <li><Link to="/">FAQ</Link></li>
                                <li><Link to="/">Contact us</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-3">
                            <ul className="social">
                                <li><Link to="/" id="facebook"></Link></li>
                                <li><Link to="/" id="instagram"></Link></li>
                                <li><Link to="/" id="telegram"></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row brdrtop ">
                        <div className="col">
                            <span>@2021, All rights reserved.</span>
                        </div>
                        <div className="col text-end">
                            <span className="footer-call">+98 21 88 85 90 30</span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;