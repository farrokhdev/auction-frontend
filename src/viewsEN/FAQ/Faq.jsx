import React, { useState, useEffect } from 'react'
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import { Spin } from 'antd';
import HeaderPanel from '../../components/HeaderPanel';

function Faq() {
    const [questions, setquestions] = useState({})
    const [loading, setLoading] = useState(false)

    // console.log("questions===>>>" ,questions[0].answer_fa);
    const getQuestions = () => {
        // /api/panel/faq/

        setLoading(true)
        axios.get(`${BASE_URL}/panel/faq/`)
            .then(resp => {
                setLoading(false)
                setquestions(resp.data.data.result)
                console.log("resp.data.data.result==>>", resp.data.data.result);

            })
            .catch(err => {
                setLoading(false)
                console.error(err);
            })
    }

    useEffect(() => {
        getQuestions()
    }, [])

    return (
        <>

            {questions?.length && questions?.map((item, i) => (
                <Spin spinning={loading}>
                    <div className="bg-light mx-4 my-3">
                        <div className="w-100 text-center pt-4">
                            <h3>{item?.question_en}</h3>
                            <p className="list-inline-item">{item.answer_en}</p>
                        </div>
                    </div>
                </Spin>
            ))}

        </>
    )
}

export default Faq;