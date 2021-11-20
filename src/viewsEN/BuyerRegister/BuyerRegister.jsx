import React, {useEffect, useState} from 'react';
import {Link, Redirect, useHistory} from 'react-router-dom';
import Header from '../../componentsEN/HeaderEN'
import Footer from '../../componentsEN/Footer'
import Content from './Content';


function BuyerRegister(props) {

    const [hasPerm, setHasPerm] = useState(true);
    const [redirectUrl, setRedirectUrl] = useState("");
    const history = useHistory();

    
    if (hasPerm) {
        return (
            <>
                <Header/>
                <Content id={props.match.params.id}/>
               
                <Footer/> 
            </>
        )
    } else {
        return (
        <Redirect
            to={{
                pathname: `${redirectUrl}/${props?.match?.params?.id}`,
                state: { prevPath: `/buyer-register/${props?.match?.params?.id}` }
            }}
        />
        )
    }
}

export default BuyerRegister;
