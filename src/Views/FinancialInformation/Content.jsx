import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
// import {setToken} from "../../utils/utils";
// import {setProfile} from "../../redux/reducers/auth/auth.actions";
// import {connect} from "react-redux";


function Content(props) {
  const [BankName, setBankName] = useState("");
  const [CardNumber, setCardNumber] = useState("");
  const [AccountNumber, setAccountNumber] = useState("");
  const [ShebaNumber, setShebaNumber] = useState("");
  const [Id, setId] = useState("")
  const [ProfileInfo, setProfileInfo] = useState({})
  const [HasNew, setHasNew] = useState(true)


  useEffect(()=>{
    // console.log( "Params",id);
    axios.get(`${BASE_URL}/accounting/bankprofile/`)
    .then(resp=>{

      console.log("Financial Informationnnn" , resp.data.data.result.bank_name);
      if(resp.data.code===200){
        let response = resp.data.data.result[0];
        // console.log("Get Data ", Object.keys(response).length);
        if(Object.keys(response).length > 0 ){
          setHasNew(false)
        }

        setProfileInfo(response)
        setBankName(response.bank_name)
        setCardNumber(response.card_number)
        setAccountNumber(response.account_number)
        setShebaNumber(response.sheba_number)
        setId(response.id)
      }

    })
    .catch(err=>{
      console.log("Error Financial Information" , err);
    })
  },[])


  let handleRequestFinancialInformation = (e)=>{
    e.preventDefault();
    
    let payload = {
      "bank_name":BankName ,
      "card_number": CardNumber,
      "account_number": AccountNumber,
      "sheba_number": ShebaNumber,
      "Id" : Id,
    
    }
    console.log(payload)

    if(HasNew){

     
       axios.post(`${BASE_URL}/accounting/bankprofile/`, payload)
         .then(resp=>{
           // console.log("financial information" , resp);
 
               if(resp.data.code === 201){
                 setProfileInfo(resp.data.data.result)
                 setTimeout(() => {
                   window.location.href = "#/works-of-interest"
                 }, 700);
             }
          
         })
       
         .catch(err=>{
           console.log("Error Message" , err);
         })
      
    }else{
      if(payload.bank_name && payload.card_number && payload.sheba_number && payload.account_number){
        axios.put(`${BASE_URL}/accounting/bankprofile/${Id}/`,payload)
        .then(resp=>{
            if(resp.data.code === 200){
              setProfileInfo(resp.data.data.result)
              setTimeout(() => {
                window.location.href = "#/works-of-interest"
              }, 700);
            }
        })
      }
    }
  }
  return (
    <div dir="rtl">
      <main class="innercontent" id="buyer-registration">
        <div class="container innercontainer">
          <div class="row sm-mrgb50">
            <div class="col-12">
              <div class="main-title d-inline-flex">
                <h2 class="default titr">ثبت نام خریداران</h2>
                <ul class="breadcrumb-cs">
                  <li>
                    <Link to="/">صفحه اصلی</Link>
                  </li>
                  <li class="active">ثبت نام خریداران</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="wizard">
              <ul class="wizard-list">
                <li class="done">
                  <span class="d-none d-md-inline-block">اطلاعات شخصی</span>
                  <span class="wizard-mobile d-md-none">1</span>
                </li>
                <li class="current">
                  <span class="d-none d-md-inline-block">اطلاعات مالی</span>
                  <span class="wizard-mobile d-md-none">2</span>
                </li>
                <li>
                  <span class="d-none d-md-inline-block">آثارمورد علاقه</span>
                  <span class="wizard-mobile d-md-none">3</span>
                </li>
                <li>
                  <span class="d-none d-md-inline-block">کیف پول</span>
                  <span class="wizard-mobile d-md-none">4</span>
                </li>
                <li>
                  <span class="d-none d-md-inline-block">معرف</span>
                  <span class="wizard-mobile d-md-none">5</span>
                </li>
                <li>
                  <span class="d-none d-md-inline-block">قرارداد</span>
                  <span class="wizard-mobile d-md-none">6</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="container container-form">
            <div class="row">
              <div class="col-md-6">
                <div class="input-group">
                  <label class="default-lable">نام بانک</label>
                  <input
                    onChange={(e)=>setBankName(e.target.value)}
                    type="text"
                    class="default-input"
                    placeholder="نام بانک مورد نظر خود را وارد نمایید."
                    // defaultValue={ProfileInfo?.bank_name}
                    Value={ProfileInfo?.bank_name}
                    


                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-group">
                  <label class="default-lable">شماره کارت</label>
                  <input
                    onChange={(e)=>setCardNumber(e.target.value)}
                    type="number"
                    class="default-input"
                    placeholder="شماره کارت را وارد نمایید"
                    Value={ProfileInfo?.card_number}
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-group">
                  <label class="default-lable">شماره حساب</label>
                  <input
                    onChange={(e)=> setAccountNumber(e.target.value)}
                    type="number"
                    class="default-input"
                    placeholder="شماره حساب را وارد نمایید."
                    Value={ProfileInfo?.account_number}
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-group">
                  <label class="default-lable">شماره شبا</label>
                  <input
                    onChange={(e)=> setShebaNumber(e.target.value)}
                    type="text"
                    class="default-input" 
                    placeholder="IR" 
                    Value={ProfileInfo?.sheba_number}
                  
                    />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-group">
                  <label class="default-lable">گواهی انطباق مالی</label>
                  <input type="file" class="default-input" placeholder="IR" />
                  <div class="input-file">
                    <span class="input-placeholder">انتخاب فایل</span>
                    <span class="btn-file"></span>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <p class="moreinfo">
                  گواهی انطباق مالی الزامی است،
                  <Link
                    to="/"
                    data-bs-toggle="modal"
                    data-bs-target="#document-required"
                  >
                    برای راهنمایی بیشتر اینجا کلیک کنید.
                  </Link>
                </p>
              </div>
            </div>
            <div class="button-group">
              <Link to="/buyer-register">
                <button type="button" class="btn-gray">
                  بازگشت
                </button>
              </Link>
                <button
                  onClick={handleRequestFinancialInformation}
                  type="submit" class="btn-default">
                  ادامه
                </button>
              <Link to="/works-of-interest">
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Content;

// const mapDispatchToProps = (dispatch) => {
//   return {
//       // setPhoneNumber : (data) => dispatch(setPhoneNumber(data)),
//       setProfile : (data) => dispatch(setProfile(data)),
//   }
// }

// const mapStateToProps = (store) => {
//   return {
//       auth : store.auctionReducer,
//   }
// }


// export default connect(mapStateToProps , mapDispatchToProps)(Content)