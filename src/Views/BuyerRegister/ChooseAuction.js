import React, {useEffect, useState} from 'react';
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import {LIST_AUCTIONS} from "../../utils/constant";
import {message, Select} from "antd";

const ChooseAuction = (props) => {
    const {auction, setAuction}=props
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    useEffect(()=>{
        getData()
    },[])
    const getData = (e="") => {
        setLoading(true)
        axios.get(`${BASE_URL}${LIST_AUCTIONS}?search=${e}`)
            .then(resp => {
                setLoading(false)

                if ((resp.data.code === 200) && resp.data?.data?.result) {
                    const res = resp.data?.data?.result;
                    // form.setFieldsValue(res)
                    setData(res)
                    // setDataCount(resp.data?.data?.count)
                    // let check = Object.keys(res).some(t => !res[t]);
                    // console.log(check)
                    // setNext(!check)
                }
            })
            .catch(err => {
                setLoading(false)
                console.error(err);
                message.error("صفحه را دوباره لود کنید")
            })
    }
    return (
        <div>
            <Select
                className="search-input"
                size="large"
                dropdownClassName="text-right"
                placeholder="نوع  حراجی را انتخاب کنید"
                // disabled={(overseerDetail.stateType !== 1) || (activeCityFields > 4)}
                onChange={value => {
                    setAuction(value)
                    // setActiveCityFields(value)
                    // if ((value < 5) && (overseerDetail.assignmentTitleType > 4))
                    //     form.setFieldsValue({assignmentPlaceType: 4})
                }}
            >
                {
                    data.map((item, index) => (
                        <Select.Option value={item.id}
                                       key={index}>{item.title}</Select.Option>
                    ))
                }
            </Select>
        </div>
    );
};

export default ChooseAuction;