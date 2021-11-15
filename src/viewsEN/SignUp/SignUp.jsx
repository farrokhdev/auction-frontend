import React from 'react'
import HeaderEN from '../../componentsEN/HeaderEN';
import { Link } from 'react-router-dom';


function SignUp() {
    return (
        <>
            <HeaderEN boxShadow={{ boxShadow: " none" }}/>   
            <div className="container containercs align-items-center" id="signup-page">
    <div className="inner-cover signup">
        <div className="signup-container">
            <div className="login-block">
                <div className="main-title">
                    <h2 className="default titr">Sign up</h2>
                </div>
                <p>By registering and logging in to the site, you agree to our <Link to="/">Policy</Link> and <Link to="/">terms
                    of use</Link>.</p>
                <div className="input-group">
                    <input type="text" className="default-input" placeholder="Enter Email or phone number"/>
                </div>
                <div className="input-group">
                    <input type="text" className="default-input" placeholder="Enter password"/>
                </div>
                <div className="btn-container">
                    <button type="button" className="btn-default">Sign up</button>
                </div>
                <div className="s-footer-block">
                    <div className="or-divider"><span>or</span></div>
                    <Link to="/" className="btn-google">Sign up with Google</Link>
                </div>
            </div>
            <p className="l-signup">Already have account?<Link to="/"> Login</Link></p>
        </div>
    </div>
</div>
        </>
    )
}

export default SignUp; 