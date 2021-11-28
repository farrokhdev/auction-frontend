import React, {useEffect, useState} from 'react';
import {Redirect, useHistory} from 'react-router-dom';
import Header from '../../componentsEN/HeaderEN'
import Footer from '../../componentsEN/Footer'
import Content from './Content';
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";

function BuyerRegister(props) {

    const [hasPerm, setHasPerm] = useState(true);
    const [redirectUrl, setRedirectUrl] = useState("");
    const history = useHistory();

    const getProfile = () => {
        axios.get(`${BASE_URL}/account/profile/`)
            .then(resp => {
                if (resp.data.code === 200) {
                    if (!resp.data.data.result.complete_profile) {
                        setRedirectUrl("/en/panel-profile")
                        setHasPerm(false)
                    }
                    else if (!resp.data.data.result.complete_bank_info) {
                        setRedirectUrl("/en/panel-financial")
                        setHasPerm(false)
                    }
                    else {
                        setHasPerm(true)
                    }
                }
            })
            .catch(err => {
                console.error(err);
            })
    }

    useEffect(() => {
        getProfile()
    }, [])

    
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
                state: { prevPath: `/en/buyer-register/${props?.match?.params?.id}` }
            }}
        />
        )
    }
}

export default BuyerRegister;
