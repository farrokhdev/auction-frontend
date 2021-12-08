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
import SignUp from '../viewsEN/SignUp';
import Login from '../viewsEN/Login';
import VerificationCode from '../viewsEN/VerificationCode';
import Passwordrecovery from '../viewsEN/PasswordRecovery';
import ConfirmMobileNumber from '../viewsEN/ConfirmMobileNumber';
import RegistersetPassword from '../viewsEN/RegisterSetPassword/RegisterSetPassword';
import PanelProfile from '../viewsEN/PanelProfile';
import SingleHouseAuctionPage from '../viewsEN/SingleHouseAuctionPage';
import SingleAuctionPage from '../viewsEN/SingleAuctionPage';
import SingleArtworkPage from '../viewsEN/SingleArtworkPage';
import PanelFinancial from '../viewsEN/PanelFinancial'
import PanelFavorits from '../viewsEN/PanelFavorits';
import PanelPurchases from '../viewsEN/PanelPurchases';
import PanelWallet from '../viewsEN/PanelWallet';
import BuyerRegister from '../viewsEN/BuyerRegister';
import PanelRemindersPage from '../viewsEN/PanelRemindersPage'
import EditReminder from '../viewsEN/PanelRemindersPage/EditReminder';
import UserPanelArtworkList from '../viewsEN/UserPanelArtworkList/UserPanelArtworkList';
import CreateReminder from '../viewsEN/PanelRemindersPage/CreateReminder';
import PanelMessages from '../viewsEN/PanelMessages';
import UserPanelSellRecommendation from '../viewsEN/UserPanelSellRecommendation';
import UserPanelSellAdvice from '../viewsEN/UserPanelSellAdvice';
import AddArtWorks from '../viewsEN/AddArtWorks';
import UserPanelMyAuctions from '../viewsEN/UserPanelMyAuctions';
import AuctionsList from '../viewsEN/AuctionsList';
import AuctionsListBids from '../viewsEN/AuctionsList/Bids';
import AuctionsListRequests from '../viewsEN/AuctionsList/AuctionsListRequests'
import AddAuction from '../viewsEN/AddAuction/AddAuction'
import TermsOfUse from '../viewsEN/TermsOfUse'
import '../assetsEN/styleEN/Custom.scss';
import '../assetsEN/styleEN/fontawesome-all.min.css';
import '../assetsEN/styleEN/antd.scss'
import '../assetsEN/styleEN/Main.scss'
import RequestHouseAuction from '../viewsEN/RequestHouseAuction';
import EditArtworks from '../viewsEN/EditArtworks';
import Faq from '../viewsEN/FAQ';
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

                        <Route exact path="/en/sign-up" component={SignUp} />
                        <Route exact path="/en/login" component={Login} />
                        <Route exact path="/en/verification-code" component={VerificationCode} />
                        <Route exact path="/en/password-recovery" component={Passwordrecovery} />
                        <Route exact path="/en/confirm-mobile-number" component={ConfirmMobileNumber} />
                        <Route exact path="/en/register-set-password" component={RegistersetPassword} />
                        <Route exact path="/en/auctions" component={Auctions} />
                        <Route exact path="/en/auctions/:id" component={SingleAuctionPage} />
                        <Route exact path="/en/artworks" component={Artworks} />
                        <Route exact path="/en/artworks/:id" component={SingleArtworkPage} />
                        <Route exact path="/en/house-auctions" component={HouseAuctions} />
                        <Route exact path="/en/house-auctions/:id" component={SingleHouseAuctionPage} />
                        <Route exact path="/" component={AfterLogin} />


                        {props.auth.is_logged_in ?
                            <>

                                <Route exact path="/en/panel-profile/:id" component={PanelProfile} />
                                <Route exact path="/en/panel-favorites" component={PanelFavorits} />
                                <Route exact path="/en/panel-myPurchases" component={PanelPurchases} />
                                <Route exact path="/en/panel-wallet" component={PanelWallet} />
                                <Route exact path="/en/panel-messages" component={PanelMessages} />
                                <Route exact path="/en/panel-financial/:id" component={PanelFinancial} />
                                <Route exact path="/en/buyer-register/:id" component={BuyerRegister} />
                                <Route exact path="/en/panel-artwork-list" component={UserPanelArtworkList} />
                                <Route exact path="/en/panel-reminders" component={PanelRemindersPage} />
                                <Route exact path="/en/create-reminder" component={CreateReminder} />
                                <Route exact path="/en/edit-reminder/:id" component={EditReminder} />
                                {role === "home_auction" || role === "admin" ?
                                <Route exact path="/en/panel-sell-recommendation" component={UserPanelSellRecommendation} /> : '' }
                                <Route exact path="/en/panel-sell-advice" component={UserPanelSellAdvice} />
                                <Route exact path="/en/add-artworks" component={AddArtWorks} />

                                <Route exact path="/en/edit-artworks/:id" component={EditArtworks} />

                                <Route exact path="/en/panel-auctions" component={UserPanelMyAuctions} />
                                {role !== "home_auction" ? 
                                <Route exact path="/en/panel-request-houseAuction" component={RequestHouseAuction} /> : '' }
                                  {role === "home_auction" || role === "admin" ?
                                <Route exact path="/en/auctions-list" component={AuctionsList} /> : '' }
                                <Route exact path="/en/auctions-list/bids/:id" component={AuctionsListBids} />
                                <Route exact path="/en/auctions-list/requests/:id" component={AuctionsListRequests} />
                                {role === "home_auction" || role === "admin" ?
                                <Route exact path="/en/panel-add-auction/:auctionId" component={AddAuction} /> : ''}
                                <Route exact path="/en/terms-of-use/:name" component={TermsOfUse} />
                                <Route exact path="/en/faq" component={Faq} />
                                <Route exact path="/" component={AfterLogin} />

                            </> :

                            <Redirect to={{ pathname: "/en/login" }} />}

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
