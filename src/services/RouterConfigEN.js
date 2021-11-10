import React, { useEffect } from 'react';
import { Router, HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { createHashHistory } from 'history';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Token } from '../utils/utils';
import { getProfile } from '../redux/reducers/profile/profile.actions';
import AfterLogin from '../viewsEN/AfterLogin';
import Auctions from '../viewsEN/Auctions';
import Artworks from '../viewsEN/Artworks';

import '../assetsEN/styleEN/Custom.scss';
import '../assetsEN/styleEN/fontawesome-all.min.css';
import '../assetsEN/styleEN/antd.scss'



// import "../assetsEN/styleEN/style.scss";
// import "../i18n";
// import "../../node_modules/bootstrap/dist/css/bootstrap.css";



const RouterConfigEN = (props) => {


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
                        <Route exact path="/en" component={AfterLogin} />
                        <Route exact path="/en/auctions" component={Auctions} />
                        <Route exact path="/en/artworks" component={Artworks} />
                    
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