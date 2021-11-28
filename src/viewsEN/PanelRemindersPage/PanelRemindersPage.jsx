import React, { useEffect, useState } from 'react';
import HeaderPanel from '../../componentsEN/HeaderPanel';
import PanelSidebar from '../../componentsEN/PanelSideBar';
import axios from '../../utils/request';
import { BASE_URL } from '../../utils';
import { DELETE_REMINDER, LIST_REMINDERS } from '../../utils/constant';
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import ModalShowResultsReminder from './ModalShowResultsReminder';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";


const { confirm } = Modal;

function RemindersPage() {

    const [reminders, setReminders] = useState({})
    const [user_id, setUser_id] = useState()
    const dispatch = useDispatch();
    const { role, id } = useSelector((state) => state.profileReducer)


    useEffect(() => {
        // setSelectProduct([])
        if (id)
            getReminders();
        if (!id)
            dispatch(getReminders())
    }, [])


    const getReminders = () => {
        axios.get(`${BASE_URL}${LIST_REMINDERS}?page=1`).then(res => {
            setReminders(res.data.data.result);
        }).catch(err => {
            console.error(err)
        })

    }

    const handleDeleteReminder = (e, id) => {
        e.preventDefault();

        axios.delete(`${BASE_URL}${DELETE_REMINDER(id)}`).then(res => {
            window.location.reload();
        }).catch(err => {
            console.error(err)
        })
    }


    function showConfirm(e, id) {
        confirm({
            title: 'از حذف یادآوری اطمینان دارید؟',
            icon: <ExclamationCircleOutlined />,
            content: 'پس از حذف دسترسی به یادآوری نخواهید داشت!',
            okText: "حذف یادآوری",
            cancelText: "انصراف",
            onOk() {
                handleDeleteReminder(e, id)

            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }




    return (
        <main>
            <HeaderPanel titlePage={"Reminders"} />
            <div className="panel-main">
                <PanelSidebar />
                <div className="panel-body">
                    <div className="panel-container">
                        <Link to="/en/create-reminder" >
                            <button type="button" className="btn btn-default mrgt30">
                            <i class="fal fa-plus"></i> New ticket
                            </button>
                        </Link>
                        <div className="row">
                            <div className=" col-xxl-8">

                                <div collapse className="table-responsive ">
                                    <table className="panel-table reminder mrgt50">
                                        <tbody>

                                            {reminders?.length ? reminders?.map(reminder => (
                                                <React.Fragment key={reminder?.id}>
                                                    <tr >
                                                        <td style={{ minWidth: '150px' }} >Sohrab Sepehri</td>
                                                        <td style={{ minWidth: '150px' }} className="reminder-state active">{reminder?.status ? "Active" : "Inactive"}</td>
                                                        <td style={{ minWidth: '150px' }} >
                                                            <ModalShowResultsReminder
                                                                reminder={reminder}
                                                            />
                                                        </td>
                                                        <td style={{ minWidth: '100px' }}>
                                                            <div className="row">
                                                                <div className="col">
                                                                    <div className="d-flex justify-content-end">
                                                                        <button 
                                                                        // onClick={(e) => showConfirm(e, reminder?.id)}
                                                                         type="button" className="operations">
                                                                            <i class="fal fa-times"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="d-flex justify-content-start">

                                                                        <Link to={`/en/edit-reminder/${reminder?.id}`}>
                                                                            <button type="button" className="operations">
                                                                                <i class="fal fa-pen"></i>
                                                                            </button>
                                                                        </Link>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                </React.Fragment>


                                            )) : ''}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default RemindersPage;
