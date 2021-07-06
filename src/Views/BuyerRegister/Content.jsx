import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import EditPanelProfile from "./profile";
import ModalFinantioal from "./ModalFinantioal";
import ListFinancial from "./listFinancial";
import Favourite from "./favourite";
import Wallet from "./wallet";
// import {setToken} from "../../utils/utils";
// import {setPhoneNumber} from "../../redux/reducers/auth/auth.actions";
// import {connect} from "react-redux";



const listComponent=[
  {name:"اطلاعات شخصی",value:1},
  {name:"اطلاعات مالی",value:2},
  {name:"آثارمورد علاقه",value:3},
  {name:"کیف پول",value:4},
]
function Content(props) {

  const [selectComponent, setSelectComponent] = useState(1);


  return (
    <>
      <main className="innercontent" id="buyer-registration">
        <div className="container innercontainer">
          <div className="row sm-mrgb50">
            <div className="col-12">
              <div className="main-title d-inline-flex">
                <h2 className="default titr">ثبت نام خریداران</h2>
                <ul className="breadcrumb-cs">
                  <li>
                    <Link to="/">صفحه اصلی</Link>
                  </li>
                  <li className="active">ثبت نام خریداران</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="wizard">
              <ul className="wizard-list">
                {
                  listComponent.map((item,i)=><li key={i} className={selectComponent===item?.value && "current"}>
                    <span className="d-none d-md-inline-block"> {item?.name}</span>
                    <span className="wizard-mobile d-md-none">1</span>
                  </li>)
                }
              </ul>
            </div>
          </div>
          {selectComponent===1 && <EditPanelProfile setSelectComponent={setSelectComponent} selectComponent={selectComponent}/>}
          {selectComponent===2 && <ListFinancial setSelectComponent={setSelectComponent} selectComponent={selectComponent}/>}
          {selectComponent===3 && <Favourite setSelectComponent={setSelectComponent} selectComponent={selectComponent}/>}
          {selectComponent===4 && <Wallet setSelectComponent={setSelectComponent} selectComponent={selectComponent}/>}
       
        </div>
      </main>
    </>
  );
}

export default Content;