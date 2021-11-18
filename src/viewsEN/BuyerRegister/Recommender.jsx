import React, {useState} from 'react';
import {Button} from "antd";

const Recommender = (props) => {
    const {setSelectComponent, selectComponent, setRecommender} = props
    const [name, setName] = useState("")
    const [family, setFamily] = useState("")
    const [phone, setPhone] = useState("")
    const sendData = () => {
        setRecommender({"first_name": name, "last_name": family, "mobile_number": phone})
        setSelectComponent(selectComponent + 1)
    }
    return (
        <div>
            <p>Enter the desired name and mobile number.</p>

            <div className="row">
                <div className="col-md-4">
                    <div className="input-group">
                        <label className="default-lable">First name</label>
                        <input type="text" className="default-input" placeholder="Enter the first name of the identifier..."
                               onChange={(e) => setName(e.target.value)}/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="input-group">
                        <label className="default-lable">Last name</label>
                        <input type="text" className="default-input" placeholder="Enter the last name of the identifier."
                               onChange={(e) => setFamily(e.target.value)}/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="input-group">
                        <label className="default-lable">Phone number</label>
                        <input type="tel" className="default-input" placeholder="Enter the phone number of the identifier..."
                               onChange={(e) => setPhone(e.target.value)}/>
                    </div>
                </div>
            </div>
            <div>

                <span className="px-2 d-inline-block"/>
                <Button className="btn-gray" onClick={() => {
                    setSelectComponent(selectComponent - 1)
                }}>
                    Back
                </Button>
                <Button className="btn-default " onClick={() => {
                    sendData()
                }}>
                    Continue
                </Button>
            </div>
        </div>
    );
};

export default Recommender;