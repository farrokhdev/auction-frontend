import React from "react";
// Redirect
import { Router, HashRouter, Route, Switch ,Redirect} from "react-router-dom";
import { createHashHistory } from "history";
import {connect} from 'react-redux';
import Home from "./Views/Home";
import Login from "./Views/Login";
import UserPanelProfile from "./components/userpanel";
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
import AddArtWorks from "./Views/AddArtWorks";
import SingleArtworkPage from './Views/SingleArtworkPage'
import PanelProfile from "./Views/PanleProfile";
import BuyerRegister from "./Views/BuyerRegister";
import "bootstrap/dist/css/bootstrap.css";

function App(props) {

  return (


    <>
      <HashRouter>
        <Router history={createHashHistory()}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/verification-code" component={VerificationCode}/>
            <Route exact path="/reset-password" component={Resetpassword} />
            <Route exact path="/register-set-password" component={RegistersetPassword}/>
            <Route exact path="/password-recovery" component={Passwordrecovery} />
            <Route exact path="/sign-up" component={Signup} />
            <Route exact path="/confirm-mobile-number" component={ConfirmMobileNumber}/>
            <Route exact path="/artworks" component={Artworks} />
            <Route exact path="/artworks/:id" component={SingleArtworkPage} />
            {props.auth.is_logged_in ? 
            
            <>
              <Route exact path="/panel-profile" component={PanelProfile} />
              <Route exact path="/buyer-register" component={BuyerRegister} />
              <Route exact path="/financial-information/:id" component={Financialinformation}/>
              <Route exact path="/works-of-interest" component={WorksOfInterest}/>
              <Route exact path="/signing-contract" component={SigningContract} />
              <Route exact path="/wallet" component={Wallet} />
              <Route exact path="/reagent" component={Reagent} />
              <Route exact path="/auctions" component={Auctions} />
              <Route exact path="/auctions-list" component={AuctionsList} />
              <Route exact path="/add-artworks" component={AddArtWorks} />

            </>:  
            
              <Redirect to = {{pathname : "/login"}} />} 

          </Switch>
        </Router>
      </HashRouter>
    </>
  );
}


const mapStateToProps = (store) => {
  return {
      auth : store.authReducer,
  }
}

export default connect(mapStateToProps , null)(App)