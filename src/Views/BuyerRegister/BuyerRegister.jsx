import React, {useEffect, useState} from "react";
import Content from "./Content";
import Footer from "../../components/footer";
import Header from "../../components/header";
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import {Link, Redirect, useHistory} from "react-router-dom";

function BuyerRegister(props) {
    const [hasPerm, setHasPerm] = useState(true);
    const [redirectUrl, setRedirectUrl] = useState("");
    const history = useHistory();
    const getProfile = () => {
        axios.get(`${BASE_URL}/account/profile/`)
            .then(resp => {
                if (resp.data.code === 200) {
                    if (!resp.data.data.result.complete_profile) {
                        setRedirectUrl("/panel-profile")
                        setHasPerm(false)
                    }
                    else if (!resp.data.data.result.complete_bank_info) {
                        setRedirectUrl("/panel-financial")
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
            <div dir="rtl">
                <Header/>
                <Content id={props.match.params.id}/>
                <Footer/>
            </div>
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
