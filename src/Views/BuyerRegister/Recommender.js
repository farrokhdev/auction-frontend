import React, {useState} from 'react';
import {Button} from "antd";

const Recommender = (props) => {
    const {setSelectComponent, selectComponent, setRecommender} = props
    const [name, setName] = useState(false)
    const [family, setFamily] = useState(false)
    const [phone, setPhone] = useState(false)
    const sendData = () => {
        setRecommender({"first_name": name, "last_name": family, "mobile_number": phone})
        setSelectComponent(selectComponent + 1)
    }
    return (
        <div>
            <p>نام و شماره همراه مورد نظر را وارد نمایید.</p>

            <div className="row">
                <div className="col-md-4">
                    <div className="input-group">
                        <label className="default-lable">نام</label>
                        <input type="text" className="default-input" placeholder="نام معرف را وارد نمایید."
                               onChange={(e) => setName(e.target.value)}/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="input-group">
                        <label className="default-lable">نام خانوادگی</label>
                        <input type="text" className="default-input" placeholder="نام خانوادگی معرف را وارد نمایید."
                               onChange={(e) => setFamily(e.target.value)}/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="input-group">
                        <label className="default-lable">شماره همراه</label>
                        <input type="tel" className="default-input" placeholder="شماره موبایل خود را وارد نمایید."
                               onChange={(e) => setPhone(e.target.value)}/>
                    </div>
                </div>
            </div>
            <div>

                <span className="px-2 d-inline-block"/>
                <Button className="btn-gray" onClick={() => {
                    setSelectComponent(selectComponent - 1)
                }}>
                    بازگشت
                </Button>
                <Button className="btn-default " onClick={() => {
                    sendData()
                }}>
                    ادامه
                </Button>
            </div>
        </div>
    );
};

export default Recommender;