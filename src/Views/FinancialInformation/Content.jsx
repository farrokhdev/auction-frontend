import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import {setToken} from "../../utils/utils";
import {setProfile} from "../../redux/reducers/auth/auth.actions";
import {connect} from "react-redux";


function Content(props) {
  const [BankName, setBankName] = useState("");
  const [CardNumber, setCardNumber] = useState("");
  const [AccountNumber, setAccountNumber] = useState("");
  const [ShebaNumber, setShebaNumber] = useState("");
  const [Data, setData] = useState({})

  useEffect(()=>{
    // console.log( "Params",props.match.params.id);
    axios.get(`${BASE_URL}/accounting/bankprofile/`)
    .then(resp=>{
      console.log("Financial Information" , resp.data.data.result.results);
      if(resp.data.code===200){
        setData(resp.data.data.result)

      }

    })
    .catch(err=>{
      console.log("Error Financial Information" , err);
    })
  },[])


  let handleRequestFinancialInformation = (id)=>{
    console.log("send Financial Information");
    let payload = {

      "bank_name":BankName ,
      "card_number": CardNumber,
      "account_number": AccountNumber,
      "sheba_number": ShebaNumber,
    }
    console.log(payload)
    axios.put(`${BASE_URL}/accounting/bankprofile/`, payload)
      .then(resp=>{
        // console.log("financial information" , resp);
        if(resp.data.code === 201){
          // setToken(resp.data.data.result);
          props.setProfile(resp.data.data.result.results);

          setTimeout(() => {
            window.location.href = "#/works-of-interest"
          }, 700);
      }
      })
      .catch(err=>{
        console.log("Error Message" , err);
      })
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
                    defaultValue={Data?.bank_name}
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-group">
                  <label class="default-lable">شماره کارت</label>
                  <input
                    onChange={(e)=>setCardNumber(e.target.value)}
                    type="text"
                    class="default-input"
                    placeholder="شماره کارت را وارد نمایید"
                    defaultValue={Data?.card_number}
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-group">
                  <label class="default-lable">شماره حساب</label>
                  <input
                    onChange={(e)=> setAccountNumber(e.target.value)}
                    type="text"
                    class="default-input"
                    placeholder="شماره حساب را وارد نمایید."
                    defaultValue={Data?.account_number}
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
                    defaultValue={Data?.sheba_number}
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
              <Link to="/register">
                <button type="button" class="btn-gray">
                  بازگشت
                </button>
              </Link>
                <button
                  onClick={handleRequestFinancialInformation}
                  type="button" class="btn-default">
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
//       auth : store.authReducer,
//   }
// }


// export default connect(mapStateToProps , mapDispatchToProps)(Content)