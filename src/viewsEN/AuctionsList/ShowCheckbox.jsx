import React, { useState, useEffect } from 'react';
import { Spin, message } from 'antd';
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import queryString from "query-string";
import { getProfile } from "../../redux/reducers/profile/profile.actions";
import PaginationComponent from '../../components/PaginationComponent';
import { EDIT_AUCTION } from "../../utils/constant";


function ShowCheckbox({ auctionsListId, visible_in_site }) {
    const [loading, setLoading] = useState(false);
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        setIsShow(visible_in_site)
    }, [visible_in_site])

    const handleShow = (value) => {
        setLoading(true)
        axios.patch(`${BASE_URL}${EDIT_AUCTION(auctionsListId)}`, {
            visible_in_site: value
        })
            .then(resp => {
                setLoading(false)
                if (resp.data.code === 200) {
                    message.success("The display information on the site was successfully edited")
                    setIsShow(value)
                } else {
                    console.log(resp)
                }
            })
            .catch(err => {
                setLoading(false)
                console.error(err.response);

                if (err.response?.data?.message === "ok")
                    message.error(err.response?.data?.data?.error_message)
                else
                    message.error(err.response?.data?.message)

            })
    }

    return (
        <>
            <Spin spinning={loading}>
                <input className="form-check-input" type="checkbox"
                    checked={isShow}
                    onChange={(e) => {
                        handleShow(e.target.checked);
                    }}
                    id="checkbox413" />
            </Spin>
        </>
    )
}

export default ShowCheckbox;
