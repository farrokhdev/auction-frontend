import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import HeaderPanel from '../../components/HeaderPanel';
import PanelSidebar from '../../components/PanelSidebar';
import { faTimes , faEdit  , faPlus} from "@fortawesome/free-solid-svg-icons";


function RemindersPage() {



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
                                    </tr>


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
