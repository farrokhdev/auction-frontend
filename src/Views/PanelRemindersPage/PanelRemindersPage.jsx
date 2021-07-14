import React , {useEffect , useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderPanel from '../../components/HeaderPanel';
import PanelSidebar from '../../components/PanelSidebar';
import { faTimes , faEdit  , faPlus} from "@fortawesome/free-solid-svg-icons";
import axios from '../../utils/request';
import { BASE_URL } from '../../utils';
import { DELETE_REMINDER, LIST_REMINDERS } from '../../utils/constant';
import { convertStatus } from '../../utils/converTypePersion';
import { Modal, Button, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import ModalShowResultsReminder from './ModalShowResultsReminder';


const { confirm } = Modal;

function RemindersPage() {

    const [reminders, setReminders] = useState({})
    const [user_id, setUser_id] = useState()

    useEffect(() => {
        getReminders();
    }, [])


    const getReminders = () => {
        axios.get(`${BASE_URL}${LIST_REMINDERS}`).then(res => {
            setReminders(res.data.data.result);
        }).catch(err => {
            console.error(err)
        })
        
    }
    
    const handleDeleteReminder = (e , id) => {
        e.preventDefault();

        axios.delete(`${BASE_URL}${DELETE_REMINDER(id)}`).then(res => {
            window.location.reload();
        }).catch(err => {
            console.error(err)
        })
    }


    function showConfirm( e , id) {
        confirm({
          title: 'از حذف یادآوری اطمینان دارید؟',
          icon: <ExclamationCircleOutlined />,
          content: 'پس از حذف دسترسی به یادآوری نخواهید داشت!',
          okText : "حذف یادآوری",
          cancelText : "انصراف",
          onOk() {
            handleDeleteReminder(e , id)

          },
          onCancel() {
            console.log('Cancel');
          },
        });
      }
      

    return (
        <main>
            <HeaderPanel titlePage={"یادآوری‌ها"}/>
        <div className="panel-main">
            <PanelSidebar />
        <div className="panel-body">
            <div className="panel-container">
                <button type="button" className="btn btn-default mrgt30">
                    <FontAwesomeIcon icon={faPlus} /> یادآوری جدید
                </button>
                <div className="row">
                    <div className=" col-xxl-6">

                        <div collapse className="table-responsive ">
                            <table className="panel-table reminder mrgt50">
                                <tbody>

                                    {reminders?.length ? reminders?.map(reminder => (
                                        <React.Fragment key={reminder?.id}>
                                            <tr >
                                                <td style={{minWidth : '150px'}} >{reminder?.name ? reminder?.name : ''}</td>
                                                <td style={{minWidth : '150px'}} className="reminder-state active">{reminder?.status ? convertStatus(reminder?.status) : ''}</td>
                                                <td style={{minWidth : '150px'}} >
                                                    <ModalShowResultsReminder
                                                        reminder={reminder}
                                                    />
                                                </td>
                                                <td style = {{minWidth : '100px'}}>
                                                    <div className="row">
                                                        <div className="col">
                                                            <div className="d-flex justify-content-end">
                                                                <button onClick={(e)=>showConfirm(e, reminder?.id)} type="button" className="operations">
                                                                    <FontAwesomeIcon icon={faTimes}/>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="d-flex justify-content-start">
                                                                <button  type="button" className="operations">
                                                                    <FontAwesomeIcon icon={faEdit}/>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>

                                        </React.Fragment>


                                    )) : ''}

                                    



                                    {/* <tr>
                                        <td style={{minWidth : '150px'}} >سهراب سپهری</td>
                                        <td style={{minWidth : '150px'}} className="reminder-state active">فعال</td>
                                        <td style={{minWidth : '150px'}} >
                                            <button type="button" className="btn-outline-gray">نتایج</button>
                                        </td>
                                        <td style = {{minWidth : '100px'}}>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="d-flex justify-content-end">
                                                        <button type="button" className="operations">
                                                            <FontAwesomeIcon icon={faTimes}/>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="d-flex justify-content-start">
                                                        <button type="button" className="operations">
                                                            <FontAwesomeIcon icon={faEdit}/>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td style={{minWidth : '150px'}} >سهراب سپهری</td>
                                        <td style={{minWidth : '150px'}} className="reminder-state active">فعال</td>
                                        <td style={{minWidth : '150px'}} >
                                            <button type="button" className="btn-outline-gray">نتایج</button>
                                        </td>
                                        <td style = {{minWidth : '100px'}}>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="d-flex justify-content-end">
                                                        <button type="button" className="operations">
                                                            <FontAwesomeIcon icon={faTimes}/>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="d-flex justify-content-start">
                                                        <button type="button" className="operations">
                                                            <FontAwesomeIcon icon={faEdit}/>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td style={{minWidth : '150px'}} >سهراب سپهری</td>
                                        <td style={{minWidth : '150px'}} className="reminder-state active">فعال</td>
                                        <td style={{minWidth : '150px'}} >
                                            <button type="button" className="btn-outline-gray">نتایج</button>
                                        </td>
                                        <td style = {{minWidth : '100px'}}>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="d-flex justify-content-end">
                                                        <button type="button" className="operations">
                                                            <FontAwesomeIcon icon={faTimes}/>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="d-flex justify-content-start">
                                                        <button type="button" className="operations">
                                                            <FontAwesomeIcon icon={faEdit}/>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td style={{minWidth : '150px'}} >سهراب سپهری</td>
                                        <td style={{minWidth : '150px'}} className="reminder-state active">فعال</td>
                                        <td style={{minWidth : '150px'}} >
                                            <button type="button" className="btn-outline-gray ">نتایج</button>
                                        </td>
                                        <td style = {{minWidth : '100px'}}>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="d-flex justify-content-end">
                                                        <button type="button" className="operations">
                                                            <FontAwesomeIcon icon={faTimes}/>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="d-flex justify-content-start">
                                                        <button type="button" className="operations">
                                                            <FontAwesomeIcon icon={faEdit}/>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr> */}


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
