import React, { useEffect } from 'react';
import { Router, HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { createHashHistory } from 'history';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Token } from '../utils/utils';
import { getProfile } from '../redux/reducers/profile/profile.actions';
import AfterLogin from '../viewsEN/AfterLogin';
import Auctions from '../viewsEN/Auctions';
import Artworks from '../viewsEN/Artworks';
import HouseAuctions from '../viewsEN/HouseAuctions';

import '../assetsEN/styleEN/Custom.scss';
import '../assetsEN/styleEN/fontawesome-all.min.css';
import '../assetsEN/styleEN/antd.scss'
import SignUp from '../viewsEN/SignUp';
import Login from '../viewsEN/Login';
import VerificationCode from '../viewsEN/VerificationCode';
import Passwordrecovery from '../viewsEN/PasswordRecovery';
import ConfirmMobileNumber from '../viewsEN/ConfirmMobileNumber';
import RegistersetPassword from '../viewsEN/RegisterSetPassword/RegisterSetPassword';


// import "../assetsEN/styleEN/style.scss";
// import "../i18n";
// import "../../node_modules/bootstrap/dist/css/bootstrap.css";



const RouterConfigEN = (props) => {


    const { check_Language } = useSelector((state) => state.allReducer)
    console.log("Login ->> ", props.auth.is_logged_in)
    const token = Token()
    const { role } = useSelector((state) => state.profileReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        if (token && !role)
            dispatch(getProfile())
    }, [])


    return (
        <>

            <HashRouter>
                <Router history={createHashHistory()}>
                    <Switch>
                        {check_Language === 'fa' ?
                            <Redirect to="/" />
                            : ""
                        }
                        <Route exact path="/en/sign-up" component={SignUp} />
                        <Route exact path="/en/login" component={Login} />
                        <Route exact path="/en/verification-code" component={VerificationCode} />
                        <Route exact path="/en/password-recovery" component={Passwordrecovery} />
                        <Route exact path="/en/confirm-mobile-number" component={ConfirmMobileNumber} />
                        <Route exact path="/en/register-set-password" component={RegistersetPassword} />


                        <Route exact path="/en" component={AfterLogin} />
                        <Route exact path="/en/auctions" component={Auctions} />
                        <Route exact path="/en/artworks" component={Artworks} />
                        <Route exact path="/en/house-auctions" component={HouseAuctions} />
                    </Switch>
                </Router>
            </HashRouter>

        </>
    )

}


const mapStateToProps = (store) => {
    return {
        auth: store.authReducer,
    }
}

export default connect(mapStateToProps, null)(RouterConfigEN)