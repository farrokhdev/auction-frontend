import React, {useEffect, useState} from 'react'
import {Button, Form, Input, Row, Col, message, Spin, Modal} from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import {ACCOUNT_BANK_INFO} from "../../utils/constant"
import {Link} from "react-router-dom";
import slider1 from "../../images/slider1.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell, faEye} from "@fortawesome/free-solid-svg-icons";
import ModalFinantioal from "./ModalFinantioal";

function ListFinancial(props) {
    const {setSelectComponent, selectComponent} = props
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [edit, setEdit] = useState(0)
    const [next, setNext] = useState(false)

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        setLoading(true)
        axios.get(`${BASE_URL}${ACCOUNT_BANK_INFO}`)
            .then(resp => {
                setLoading(false)

                if ((resp.data.code === 200) && resp.data?.data?.result) {
                    const res = resp.data?.data?.result;
                    setData(res)
                }
            })
            .catch(err => {
                setLoading(false)
                console.error(err);
                message.error("صفحه را دوباره لود کنید")
            })
    }

    return (
        <Spin spinning={loading}>
            <div className="text-start mb-3 ">
                <Button className="btn-default" onClick={() => {
                    setEdit(0)
                    setTimeout(() => {
                        setIsModalVisible(true)
                    }, 300)
                }}> افزودن حساب بانکی جدید</Button>
            </div>

            <table className="table table-striped">
                <thead>
                <tr>
                    <th>نام بانک</th>
                    <th> شماره کارت</th>
                    <th>شماره حساب</th>
                    <th>شماره شبا</th>
                    <th> عملیات</th>
                </tr>
                </thead>
                <tbody>
                {data && data.length >= 1 ? data.map((item, key) => {
                    return (
                        <tr>
                            <td>{item?.bank_name}</td>
                            <td>{item?.card_number}</td>
                            <td>{item?.account_number}</td>
                            <td>{item?.sheba_number}</td>
                            <td>
                                <button onClick={() => {
                                    setEdit(item?.id)
                                    setTimeout(() => {
                                        setIsModalVisible(true)
                                    }, 300)
                                }}>ویرایش
                                </button>
                            </td>
                        </tr>
                    )
                }) : ""}

                </tbody>
            </table>

            <Modal centered

                   title={
                       <div className='d-flex align-items-center justify-content-between'>
                           <span>{ edit ? "ویرایش حساب": "افزودن حساب "}</span>
                           <button
                               type="button"
                               className="btn-close"
                               data-bs-dismiss="modal"
                               aria-label="Close"
                               onClick={() => setIsModalVisible(false)}
                           />

                       </div>
                   }
                   className="text-end" width={1000} visible={isModalVisible}
                   onOk={() => setIsModalVisible(false)} onCancel={() => setIsModalVisible(false)} footer={[]}>
                <ModalFinantioal edit={edit} setSelectComponent={setSelectComponent} selectComponent={selectComponent}
                                 setIsModalVisible={setIsModalVisible} refreshTable={getData}
                                 next={next} setNext={setNext}
                                 title={"افزودن حساب بانکی جدید"}/>
            </Modal>
            <div>
                {data && data.length >= 1 ? <Button className="btn-default " loading={loading} onClick={() => {
                    setSelectComponent(selectComponent + 1)
                }}>
                    ادامه
                </Button> : ""
                }
                <span className="px-2 d-inline-block"/>
                <Button className="btn-gray" loading={loading} onClick={() => {
                    setSelectComponent(selectComponent - 1)
                }}>
                    بازگشت
                </Button>
            </div>


        </Spin>
    )
}

export default ListFinancial;

