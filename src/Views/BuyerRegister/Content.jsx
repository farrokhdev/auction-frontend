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


  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Mobile, setMobile] = useState("");
  const [IsConfrimMobile, setIsConfrimMobile] = useState(false);
  const [Email, setEmail] = useState("");
  const [ISConfrimEmail, setISConfrimEmail] = useState(false);
  const [NationalCode, setNationalCode] = useState("");
  const [PostalCode, setPostalCode] = useState("");
  const [Address, setAddress] = useState("");
  const [ProfileInfo, setProfileInfo] = useState({});



  // const handleConfrimMobile = ()=>{
  //   setTimeout(() => {
  //     setIsConfrimMobile(true)
  //   }, 500);
  // }
  //
  // const handleConfrimEmail = ()=>{
  //   setTimeout(() => {
  //     setISConfrimEmail(true)
  //   }, 500);
  // }


  // useEffect(()=>{
  //   axios.get(`${BASE_URL}/account/profile/`)
  //   .then(resp=>{
  //     console.log("personal Information" , resp);
  //     if(resp.data.code===200){
  //       let res=resp.data.data.result
  //       setProfileInfo(resp.data.data.result)
  //       // setFirstName(res.first_name)
  //       // setLastName(res.last_name)
  //       // setMobile(res.mobile)
  //       // setISConfrimEmail(res.email)
  //       // setNationalCode(res.national_code)
  //       // setPostalCode(res.postal_code)
  //       // setAddress(res.address)
  //     }
  //
  //   })
  //   .catch(err=>{
  //     console.log("Error Message" , err);
  //   })
  // },[])

  // let handleRequestInformation = ()=>{
  //   console.log(FirstName)
  //   let payload = {
  //
  //     "first_name": FirstName,
  //     "last_name": LastName,
  //     // "email" : Email,
  //     "postal_code": PostalCode,
  //     "national_code" : NationalCode,
  //     "address": Address,
  //   }
  //
  //   console.log(payload)
  //
  //
  //   axios.put(`${BASE_URL}/account/profile/`, payload)
  //   .then(resp=>{
  //     console.log("personal Information" , resp);
  //     console.log("Mobile" , resp.data.data.result.username);
  //     if(resp.data.code === 200){
  //       if(payload.first_name && payload.last_name && payload.address && payload.postal_code && payload.national_code){
  //           // setToken(resp.data.data.result);
  //           // setProfileInfo(resp.data.data.result)
  //           // setFirstName(res.first_name)
  //           setTimeout(() => {
  //             window.location.href = "#/financial-information/"
  //           }, 700);
  //           }
  //       }
  //       })
  //       .catch(err=>{
  //         console.log("Error Message" , err);
  //       })
  // }
  
 

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
          {/*<form className="container container-form">*/}
          {/*  <div className="row">*/}
          {/*    <div className="col-md-6">*/}
          {/*      <div className="input-group">*/}
          {/*        <label className="default-lable">نام</label>*/}
          {/*        <input*/}
          {/*        */}
          {/*          onChange={(e)=>{setFirstName(e.target.value)   }}                 */}
          {/*          type="text"*/}
          {/*          className="default-input"*/}
          {/*          placeholder="نام خود را وارد نمایید."*/}
          {/*          defaultValue={ProfileInfo?.first_name}*/}
          {/*          // required*/}
          {/*        />*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div className="col-md-6">*/}
          {/*      <div className="input-group">*/}
          {/*        <label className="default-lable">نام خانوادگی</label>*/}
          {/*        <input*/}
          {/*        onChange={(e)=>setLastName(e.target.value)}*/}
          {/*          type="text"*/}
          {/*          className="default-input"*/}
          {/*          placeholder="نام خانوادگی خود را وارد نمایید."*/}
          {/*          defaultValue={ProfileInfo?.last_name}*/}
          {/*          // required*/}
          {/*        />*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div className="col-md-6">*/}
          {/*      <div className="input-group approved">*/}
          {/*        <label className="default-lable">شماره همراه</label>*/}
          {/*        <input*/}
          {/*          onChange={(e)=>setMobile(e.target.value)}*/}
          {/*          type="tel"*/}
          {/*          className="default-input"*/}
          {/*          value={ProfileInfo?.mobile}*/}
          {/*          // required*/}
          {/*          // placeholder="شماره موبایل مورد نظر را وارد نمایید."*/}
          {/*          // disabled={true}*/}
          {/*        />*/}
          {/*        <button hidden={IsConfrimMobile} onClick={handleConfrimMobile}>*/}
          {/*        <span  className="approved input-state">تایید</span>*/}
          {/*        </button>*/}
          {/*        <button hidden={ISConfrimEmail}>*/}
          {/*          {! ProfileInfo?.mobile ?*/}
          {/*           <span className="input-note">*/}
          {/*          برای تایید شماره همراه خود اینجا کلیک کنید.*/}
          {/*        </span> : null*/}
          {/*        }*/}
          {/*        </button>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div className="col-md-6">*/}
          {/*      <div className="input-group notapproved">*/}
          {/*        <label className="default-lable">ایمیل</label>*/}
          {/*        <input*/}
          {/*          onChange={(e)=>setEmail(e.target.value)}*/}
          {/*          type="email"*/}
          {/*          className="default-input"*/}
          {/*          placeholder="ایمیل خود را وارد نمایید."*/}
          {/*          value={ProfileInfo?.email}*/}
          {/*          // required*/}
          {/*        />*/}
          {/*        <button hidden={ISConfrimEmail}>*/}
          {/*          {! ProfileInfo?.email ?*/}
          {/*           <span className="input-note">*/}
          {/*          برای تایید ایمیل خود اینجا کلیک کنید.*/}
          {/*        </span> : null*/}
          {/*        }*/}
          {/*       */}
          {/*        </button>*/}
          {/*        <button hidden={ISConfrimEmail} onClick={handleConfrimEmail}>*/}
          {/*        <span className="notapproved input-state">تایید نشده</span>*/}
          {/*        </button >*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div className="col-md-6">*/}
          {/*      <div className="input-group">*/}
          {/*        <label className="default-lable">کد ملی</label>*/}
          {/*        <input*/}
          {/*          onChange={(e)=>setNationalCode(e.target.value)}*/}
          {/*          type="number"*/}
          {/*          className="default-input"*/}
          {/*          placeholder="کد ملی خود را وارد نمایید."*/}
          {/*          defaultValue={ProfileInfo?.national_code}*/}
          {/*          // required*/}
          {/*        />*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div className="col-md-6">*/}
          {/*      <div className="input-group">*/}
          {/*        <label className="default-lable">کدپستی</label>*/}
          {/*        <input*/}
          {/*          onChange={(e)=>setPostalCode(e.target.value)}*/}
          {/*          type="number"*/}
          {/*          className="default-input"*/}
          {/*          placeholder="کد پستی خود را وارد نمایید."*/}
          {/*          defaultValue={ProfileInfo?.postal_code}*/}
          {/*          // required*/}
          {/*        />*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div className="col-12">*/}
          {/*      <div className="input-group">*/}
          {/*        <label className="default-lable">آدرس</label>*/}
          {/*        <input*/}
          {/*          onChange={(e)=>setAddress(e.target.value)}*/}
          {/*          // required*/}
          {/*          // rows="3"*/}
          {/*          className="default-input"*/}
          {/*          placeholder="آدرس خود را وارد نمایید."*/}
          {/*          defaultValue={ProfileInfo?.address}*/}
          {/*        ></input>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className="button-group">*/}
          {/*      <button*/}
          {/*        onClick={handleRequestInformation}*/}
          {/*        type="submit"*/}
          {/*        className="btn-default">*/}
          {/*        ادامه*/}
          {/*      </button>*/}
          {/*    <Link to="/financial-information">*/}
          {/*    </Link>*/}
          {/*  </div>*/}
          {/*</form>*/}
        </div>
      </main>
    </>
  );
}

export default Content;


// const mapDispatchToProps = (dispatch) => {
//   return {
//       setPhoneNumber : (data) => dispatch(setPhoneNumber(data)),

//   }
// }

// const mapStateToProps = (store) => {
//   return {
//       auth : store.auctionReducer,
//       panelReducer : store.panelReducer
//   }
// }


// export default connect(mapStateToProps , mapDispatchToProps)(Content)