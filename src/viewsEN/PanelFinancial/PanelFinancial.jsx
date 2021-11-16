import React , {useState , useEffect} from 'react';
import HeaderPanel from '../../componentsEN/HeaderPanel.jsx';
import PanelSideBar from '../../componentsEN/PanelSideBar/PanelSideBar.jsx';
import { Spin } from "antd";
import {bankList} from './banks';
import {useHistory, useParams} from "react-router-dom";

function PanelFinancial() {
    const [infoBank, setInfoBank] = useState({})
    const [loading , setLoading ] = useState(true)
    const history = useHistory();
    const params = useParams();


    const handleSetBankName = (value)=> {
        setInfoBank({
            ...infoBank , bank_name : value
        })
    }
    
    const handleSetCartNumber = (value)=> {
        setInfoBank({
            ...infoBank , card_number : value
        })
    }  
    
    const handleSetAccountNumber = (value)=> {
        setInfoBank({
            ...infoBank , account_number : value
        })
    }  
    
    const handleSetShebaNumber = (value)=> {
        setInfoBank({
            ...infoBank , sheba_number : value
        })
    }

    return (
        <>
        {/* <Spin loading={loading}> */}
        <HeaderPanel titlePage = {"Financial information"} />
        <main>
            <div className="panel-main">
                <PanelSideBar />
                <div className="panel-body">
                    <div className="panel-container">
                        <div className="col-xxxxl-8">
                            <div className="row row-cols-md-2 row-cols-1">
                                <div className="col">
                                    <div className="input-group">
                                        <label className="default-lable">Bank name</label>
                                
                                            <select 
                                                onChange={(e)=>handleSetBankName(e.target.value)} 
                                                defaultValue={infoBank?.bank_name} 
                                                className="form-select" 
                                                aria-label="Default select example" 
                                                required={true}
                                            >
    
                                               {bankList.length ? bankList?.map((bank) => (
                                                    <>
                                                        <option value="none" selected disabled hidden>{infoBank?.bank_name}</option>
                                                        <React.Fragment key={bank?.id}>
                                                            <option >{bank?.name}</option>
                                                        </React.Fragment>
                                                    </>
    
                                               )) : ''}
                                               
                                            </select>
    
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="input-group">
                                        <label  className="default-lable">Card number</label>
                                        <input maxlength ={16} onChange={(e)=>handleSetCartNumber(e.target.value)} type="text" required className="default-input" placeholder="Enter card number"
                                            defaultValue={infoBank?.card_number} />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="input-group">
                                        <label className="default-lable">Account number</label>
                                        <input  maxlength ={26} onChange={(e)=>handleSetAccountNumber(e.target.value)}  type="text" required className="default-input" placeholder="Enter Account number."
                                            defaultValue={infoBank?.account_number} />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="input-group">
                                        <label className="default-lable">SHEBA number</label>
                                        <input maxlength ={26} onChange={(e)=>handleSetShebaNumber(e.target.value)} type="text" required className="default-input" placeholder="IR530700052400114950030001"
                                            defaultValue={infoBank?.sheba_number} />
                                    </div>
                                </div>
    
    
                            </div>
                            <div className="row">
                                <div className="panel-button-group">
                                    <button 
                                    // onClick={updateBankInfo} 
                                    className="btn-default">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        {/* </Spin> */}
    </>
    )
}

export default PanelFinancial;