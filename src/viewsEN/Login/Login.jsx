import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../imgEN/logo.svg'

function Login() {
    return (
        <>
            <div className="container innercontainer align-items-center" id="login-page">
                <div className="login-container">
                    <Link to="/" className="logo">
                        <img src={logo} width="156" height="34" alt="Smart auction" />
                    </Link>
                    <div className="login-block">
                        <div className="main-title">
                            <h2 className="default titr">Login</h2>
                        </div>
                        <p>By registering and logging in to the site, you agree to our <Link to="/">Policy</Link> and <Link to="/">terms
                            of use</Link>.</p>
                        <div className="input-group">
                            <input type="text" className="default-input" placeholder="User name" />
                        </div>
                        <div className="input-group">
                            <input type="text" className="default-input" placeholder="Password" />
                        </div>
                        <div className="btn-container">
                            <button type="button" className="btn-default">Login</button>
                        </div>
                        <div className="l-footer-block">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value=""
                                    id="checkboxremember"/>
                                <label className ="form-check-label" for="checkboxremember">
                                Remember me.
                                </label>
                            </div>
                            <Link to="/" className="l-forget">Forget password?</Link>
                        </div>
                    </div>
                    <p className="l-signup">Not registered yet?<Link to="/"> Click here.</Link></p>
                </div>
            </div>
        </>
    )
}

export default Login;