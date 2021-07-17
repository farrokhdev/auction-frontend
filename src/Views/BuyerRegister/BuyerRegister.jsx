import React, {useEffect, useState} from "react";
import Content from "./Content";
import Footer from "../../components/footer";
import Header from "../../components/header";
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import {Redirect} from "react-router-dom";

function BuyerRegister(props) {
    const [hasPerm, setHasPerm] = useState(false);
    const getProfile = () => {
        axios.get(`${BASE_URL}/account/profile/`)
            .then(resp => {
                if (resp.data.code === 200) {
                    setHasPerm(true)
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
            <Redirect to="/panel-profile"/>
        )
    }
}

export default BuyerRegister;
