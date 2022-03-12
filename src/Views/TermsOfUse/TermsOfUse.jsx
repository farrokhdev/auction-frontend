import React, { useState, useEffect } from 'react'
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import { Spin } from 'antd';


function TermsOfUse(props) {
    const [content, setContent] = useState({})
    const [loading, setLoading] = useState(false)


    console.log("content" , content)

    const getContent = () => {
        setLoading(true)
        axios.get(`${BASE_URL}/panel/contents/`)
            .then(resp => {
                setLoading(false)

                console.log("resp.data.data.result==>>", resp.data.data.result);
                setContent((resp.data.data.result).filter(item => item?.title == props.match.params.name))


            })
            .catch(err => {
                setLoading(false)
                console.error(err);
            })
    }

    useEffect(() => {
        getContent()
    }, [])

    return (
        <>
            <Spin spinning={loading}>
                <div className="bg-light mx-4 my-3">
                    <div className="text-center pt-4" dangerouslySetInnerHTML={{
                        __html: content[0]?.body
                    }}>
                    </div>
                </div>
            </Spin>
        </>
    )
}

export default TermsOfUse;