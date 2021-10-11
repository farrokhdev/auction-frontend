import React, { useEffect } from "react";
// Redirect
import { Router, HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { createHashHistory } from "history";
import { connect, useDispatch, useSelector } from 'react-redux';
import { getProfile } from "./redux/reducers/profile/profile.actions";
import AfterLoginPage from "./Views/AfterLoginPage";
import Login from "./Views/Login";
import Financialinformation from "./Views/FinancialInformation";
import WorksOfInterest from "./Views/WorksOfInterest";
import Signup from "./Views/Signup";
import Wallet from "./Views/Wallet";
import Reagent from "./Views/Reagent";
import SigningContract from "./Views/SigningContract";
import Resetpassword from "./Views/ResetPasswoed";
import Passwordrecovery from "./Views/PasswordRecovery";
import ConfirmMobileNumber from "./Views/ConfirmMobileNumber";
import RegistersetPassword from "./Views/RegisterSetPassword";
import VerificationCode from "./Views/VerificationCode";
import Artworks from "./Views/Artworks";
import Auctions from "./Views/Auctions";
import AuctionsList from "./Views/AuctionsList";
import AuctionsListBids from "./Views/AuctionsList/Bids";
import AuctionsListRequests from "./Views/AuctionsList/Requests";
import AddArtWorks from "./Views/AddArtWorks";
import SingleArtworkPage from './Views/SingleArtworkPage'
import PanelProfile from "./Views/PanleProfile";
import BuyerRegister from "./Views/BuyerRegister";
import "bootstrap/dist/css/bootstrap.css";
import AddAuction from "./Views/AddAuction";
import UserPanelArtworkList from "./Views/UserPanelArtworkList";
import HouseAuctionsPage from "./Views/HouseAuctionsPage";
import PanelFinancial from "./Views/PanelFinancial";
import UserPanelWallet from "./Views/UserPanelWallet";
import RequestHouseAuction from "./Views/RequestHouseAuction";
import UserPanelMessage from "./Views/UserPanelMessage";
import UserPanelSellAdvice from "./Views/UserPanelSellAdvice";
import UserPanelSellRecommendation from "./Views/UserPanelSellRecommendation";
import MyPurchases from "./Views/MyPurchases";
import PanelRemindersPage from "./Views/PanelRemindersPage";
import Favorite from "./Views/Favorite/Favorite";
import SingleHouseAuctionPage from "./Views/SingleHouseAuctionPage";
import SingleAuctionDetailsPage from "./Views/SingleAuctionDetailsPage";
import UserPanelCreateAuctionsBids from "./Views/UserPanelCreateAuctionsBids";
import CreateReminder from "./Views/PanelRemindersPage/CreateReminder";

import EditReminder from "./Views/PanelRemindersPage/EditReminder";
import NotFound from "./Views/404";
import OneAuction from "./Views/OneAuction";
import { Token } from "./utils/utils";
import UserPanelMyAuctions from "./Views/UserPanelMyAuctions";


function App(props) {
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
                        {/*{!props.auth.is_logged_in && <Route exact path="/" component={Login}/>}*/}
                        {/*{!props.auth.is_logged_in && <Route exact path="/" component={AfterLoginPage}/>}*/}
                        <Route exact path="/" component={AfterLoginPage} />
                        <Route exact path="/login" component={Login} />

                        <Route exact path="/verification-code" component={VerificationCode} />
                        <Route exact path="/reset-password" component={Resetpassword} />
                        <Route exact path="/register-set-password" component={RegistersetPassword} />
                        <Route exact path="/password-recovery" component={Passwordrecovery} />
                        <Route exact path="/sign-up" component={Signup} />
                        <Route exact path="/confirm-mobile-number" component={ConfirmMobileNumber} />
                        <Route exact path="/artworks" component={Artworks} />
                        <Route exact path="/artworks/:id" component={SingleArtworkPage} />
                        <Route exact path="/auctions" component={Auctions} />
                        <Route exact path="/one-auction/:id" component={OneAuction} />
                        <Route exact path="/house-acutions" component={HouseAuctionsPage} />
                        <Route exact path="/house-acutions/:id" component={SingleHouseAuctionPage} />
                        <Route exact path="/auction-details/:id" component={SingleAuctionDetailsPage} />
                        {props.auth.is_logged_in ?
                            <>

                                <Route exact path="/" component={AfterLoginPage} />

                                <Route exact path="/panel-profile" component={PanelProfile} />
                                <Route exact path="/panel-financial" component={PanelFinancial} />
                                <Route exact path="/panel-request-houseAuction" component={RequestHouseAuction} />
                                {/*<Route exact path="/panel-add-auction" component={AddAuction}/>*/}
                                <Route exact path="/panel-reminders" component={PanelRemindersPage} />
                                <Route exact path="/buyer-register/:id" component={BuyerRegister} />
                                <Route exact path="/financial-information/:id" component={Financialinformation} />
                                <Route exact path="/works-of-interest" component={WorksOfInterest} />
                                <Route exact path="/signing-contract" component={SigningContract} />
                                <Route exact path="/wallet" component={Wallet} />
                                <Route exact path="/reagent" component={Reagent} />
                                <Route exact path="/auctions-list/bids/:id" component={AuctionsListBids} />
                                <Route exact path="/auctions-list/requests/:id" component={AuctionsListRequests} />
                                {role === "home_auction" ?
                                    <Route exact path="/panel-add-auction/:auctionId" component={AddAuction} /> : ''}
                                {role === "home_auction" ?
                                    <Route exact path="/auctions-list" component={AuctionsList} /> : ''}
                                <Route exact path="/add-artworks" component={AddArtWorks} />
                                {/*<Route exact path="/create-auctions-timed" component={UserPanelCreateAuctionsTimedaction}/>*/}
                                <Route exact path="/panel-wallet" component={UserPanelWallet} />
                                <Route exact path="/panel-message" component={UserPanelMessage} />
                                <Route exact path="/panel-sell-advice" component={UserPanelSellAdvice} />
                                <Route exact path="/panel-auctions" component={UserPanelMyAuctions} />
                                {role === "home_auction" ? <Route exact path="/panel-sell-recommendation"
                                    component={UserPanelSellRecommendation} /> : ''}
                                <Route exact path="/my-purchases" component={MyPurchases} />
                                <Route exact path="/favorite" component={Favorite} />
                                <Route exact path="/panel-Bids" component={UserPanelCreateAuctionsBids} />
                                <Route exact path="/create-reminder" component={CreateReminder} />
                                <Route exact path="/edit-reminder" component={EditReminder} />

                                <Route exact path="/panel-artwork-list" component={UserPanelArtworkList} />
                                {/*<Route path="/*" exact component={NotFound}/>*/}


                            </> :

                            <Redirect to={{ pathname: "/login" }} />}


                    </Switch>
                </Router>
            </HashRouter>
        </>
    );
}


const mapStateToProps = (store) => {
    return {
        auth: store.authReducer,
    }
}

export default connect(mapStateToProps, null)(App)
