import React , {useState , useEffect} from "react";
import { Link } from "react-router-dom";
import { Tag } from 'antd';
import ItemCategory from "./ItemCategory";
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import {HOME_AUCITONS , CATEGORIE_ACTIVITY} from "../../utils/constant";
import ItemHomeAuction from "./ItemHomeAuction";
import ItemType from "./ItemType";

import { DatePicker, ConfigProvider } from "antd";
import { DatePicker as DatePickerJalali, Calendar } from "antd-jalali";
import fa_IR from "antd/lib/locale/fa_IR";
import en_US from "antd/lib/locale/en_US";
import "antd/dist/antd.css";

function Sidebar({handleSearchProducts , handleSetCategory , params , handleSetType , handleSetHomeAuction , handleSetHomeAuctionSelect , handleSetDate}) {


  const [filters, setFilters] = useState([
    'tehran' , 'mashad' , 'zabol'
  ])
  const [categories , setCategories] = useState([])
  const [homeAuctions , setHomeAuctions] = useState([])

  useEffect(() => {

    axios.get(`${BASE_URL}${CATEGORIE_ACTIVITY}`).then(res => {
      console.log("C ",res.data.data.result);
      setCategories(res.data.data.result)
    }).catch(err => {
      console.error(err);
    })


    axios.get(`${BASE_URL}${HOME_AUCITONS}`).then(res => {
      console.log("H ",res.data.data.result);
      setHomeAuctions(res.data.data.result)
    }).catch(err => {
      console.error(err);
    })

  }, [])


  function onChange(dates, dateStrings) {
    // console.log('From: ', dates, ', to: ', dates);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
    // console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
    // handleSetDate(dates ? dates[0] : {}, dates ? dates[1] :{} );
    handleSetDate(dateStrings ? dateStrings[0] : {} , dateStrings ? dateStrings[1] :{} );
  }



  return (
    <>
      <div className="col-sm-3 sidebar" id="left-side">
        <button type="button" className="btn-getclose d-block d-lg-none"></button>
        <div className="left-side">
          <div className="result-box">
            {/*<div className="result-title">*/}
            {/*  <h6 className="default">نتایج :</h6>*/}
            {/*  <button onClick={(e)=> window.location.reload()} type="button" className="btn-removeall">*/}
            {/*    پاک کردن همه*/}
            {/*  </button>*/}
            {/*</div>*/}
            <div className="tags-box" >
              
            {/* {filters.length >=1 ? filters.map((filter , index) => (
              <React.Fragment key={index}>
                <Tag closable onClose={(e)=>filters.filter(item => item !== filter )}>
                  <span>{filter}</span>
                </Tag>
              </React.Fragment>
            )) : <div></div>} */}

            {/* <Tag closable onClose={(e)=>alert("delete filter")}>
              <span>تهران</span>
            </Tag>
            <Tag closable onClose={(e)=>alert("delete filter")}>
                <span>3 اردیبهشت - </span>
                <span>6 اردیبهشت</span>
            </Tag>
            <Tag closable onClose={(e)=>alert("delete filter")}>
                <span>آرتیبیشن</span>
            </Tag> */}

              {/* <Link to="/" className="tag-box date">
                <span>3 اردیبهشت - </span>
                <span>6 اردیبهشت</span>
                <button type="button" className="btn-remove"></button>
              </Link>
              <Link to="/" className="tag-box date">
                <span>تهران</span>
                <button type="button" className="btn-remove"></button>
              </Link> */}
              {/* <Link to="/" className="tag-box date">
                <span>آرتیبیشن</span>
                <button type="button" className="btn-remove"></button>
              </Link> */}
            </div>
          </div>


          <div className="search-box">
            <div className="search-input">
              <input
                id="product-search"
                type="text"
                className="default-input"
                placeholder="جستجو در بیش از 100 اثر"
              />
              <button 
                onClick={(e)=> handleSearchProducts(document.querySelector('#product-search').value)} 
                type="button" 
                className="btn-search"
              />
            </div>
          </div>

          <div className="accordion main-accordion" id="leftside">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  تاریخ
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
              >
                <div className="accordion-body">


                
                  <ConfigProvider locale={fa_IR} direction="rtl">
                    <div className="">
                    <DatePickerJalali.RangePicker onChange={onChange}   className="rounded" />
                    </div>
                  </ConfigProvider>
              

                  {/* <div className="calendar">
                    <div className="calendar-header">
                      <button type="button" className="btn-calendar-prev"></button>
                      <div className="calendar-date">
                        <span className="calendar-month">شهریور</span>
                        <span className="calendar-year">1400</span>
                        <button type="button" className="calendar-changetype">
                          (میلادی)
                        </button>
                      </div>
                      <button type="button" className="btn-calendar-next"></button>
                    </div>

                    <div className="calendar-body">
                      <div className="calendar-days">
                        <div className="col">شنبه</div>
                        <div className="col">یک</div>
                        <div className="col">دو</div>
                        <div className="col">سه</div>
                        <div className="col">چهار</div>
                        <div className="col">پنج</div>
                        <div className="col">جمعه</div>
                      </div>
                      <div className="calendar-day">
                        <div className="d-flex justify-content-center">
                          <span className="col">1</span>
                          <span className="col">2</span>
                          <span className="col c-startdate">3</span>
                          <span className="col select-date">4</span>
                          <span className="col select-date">5</span>
                          <span className="col c-enddate">6</span>
                          <span className="col">7</span>
                        </div>
                        <div className="d-flex justify-content-center">
                          <span className="col">8</span>
                          <span className="col">9</span>
                          <span className="col">10</span>
                          <span className="col">11</span>
                          <span className="col">12</span>
                          <span className="col">13</span>
                          <span className="col">14</span>
                        </div>
                        <div className="d-flex justify-content-center">
                          <span className="col">15</span>
                          <span className="col">16</span>
                          <span className="col">17</span>
                          <span className="col">18</span>
                          <span className="col">19</span>
                          <span className="col">20</span>
                          <span className="col">21</span>
                        </div>
                        <div className="d-flex justify-content-center">
                          <span className="col">22</span>
                          <span className="col">23</span>
                          <span className="col">24</span>
                          <span className="col">25</span>
                          <span className="col">26</span>
                          <span className="col">27</span>
                          <span className="col">28</span>
                        </div>
                        <div className="d-flex justify-content-center">
                          <span className="col">29</span>
                          <span className="col">30</span>
                          <span className="col">31</span>
                          <span className="col deactive">1</span>
                          <span className="col deactive">2</span>
                          <span className="col deactive">3</span>
                          <span className="col deactive">4</span>
                        </div>
                      </div>
                    </div>
                  </div> */}


                </div>
              </div>
            </div>


            {/* <div className="accordion-item">
              <h2 className="accordion-header" id="headingSix">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="True"
                  aria-controls="collapseSix"
                >
                  وضعیت
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse show"
                aria-labelledby="headingSix"
              >
                <div className="accordion-body">
                  <div className="list-box">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="false"
                        id="checkbox41"
                      />
                      <label   className="form-check-label" for="checkbox41">
                        فعلی و آینده
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkbox42"
                      />
                      <label className="form-check-label" for="checkbox42">
                        گذشته
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}


            {/* <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="True"
                  aria-controls="collapseTwo"
                >
                  شهرها
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse show"
                aria-labelledby="headingTwo"
              >
                <div className="accordion-body">
                  <div className="search-input">
                    <input
                      type="text"
                      className="default-input"
                      placeholder="شهر مورد نظر را وارد نمایید."
                    />
                    <button type="button" className="btn-search"></button>
                  </div>
                  <div className="list-box">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkbox1"
                      />
                      <label className="form-check-label" for="checkbox1">
                        اردبیل
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkbox2"
                      />
                      <label className="form-check-label" for="checkbox2">
                        ایلام
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkbox3"
                      />
                      <label className="form-check-label" for="checkbox3">
                        بوشهر
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkbox4"
                      />
                      <label className="form-check-label" for="checkbox4">
                        تهران
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkbox5"
                      />
                      <label className="form-check-label" for="checkbox5">
                        سمنان
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkbox6"
                      />
                      <label className="form-check-label" for="checkbox6">
                        یزد
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}


            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="True"
                  aria-controls="collapseThree"
                >
                  حوزه فعالیت
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse show"
                aria-labelledby="headingThree"
              >
                <div className="accordion-body">
                  <div className="list-box">

                  {categories.length >=1 ? categories.map((category , index) => (
                      <React.Fragment key={category?.id}>
                        <ItemCategory title={category?.title} id={`checkbox2${++index}`} params={params}  handleSetCategory={handleSetCategory}/>
                      </React.Fragment>
                    )) : ''}

                    {/* <ItemCategory id={"checkbox11"} title={"نقاشی"} params={params} handleSetCategory={handleSetCategory} filters={filters} setFilters={setFilters}/>
                    <ItemCategory id={"checkbox12"} title={"عکاسی"} params={params} handleSetCategory={handleSetCategory} filters={filters} setFilters={setFilters}/>
                    <ItemCategory id={"checkbox13"} title={"مجسمه سازی"} params={params} handleSetCategory={handleSetCategory} filters={filters} setFilters={setFilters}/>
                    <ItemCategory id={"checkbox14"} title={"خطاطی"} params={params} handleSetCategory={handleSetCategory} filters={filters} setFilters={setFilters}/>
                    <ItemCategory id={"checkbox15"} title={"خوشنویسی"} params={params} handleSetCategory={handleSetCategory} filters={filters} setFilters={setFilters}/> */}
        
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="True"
                  aria-controls="collapseTwo"
                >
                  خانه‌های حراج
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse show"
                aria-labelledby="headingFour"
              >
                <div className="accordion-body">
                  {/* <div className="search-input"> */}
                    {/* <select value="انتخاب خانه حراج" className="default-input w-100 mb-3" id="exampleFormControlSelect1">

                      {homeAuctions.length >= 1 ? homeAuctions.map(home => (
                        <React.Fragment key={home?.id}>
                            <option onClick={(e)=>handleSetHomeAuctionSelect(e.target.value)} 
                            className="defualt-option">{home?.home_auction_name ? home?.home_auction_name : ''}</option>
                        </React.Fragment>
                      )) : ''}
          
                    </select> */}
                    {/* <input
                      type="text"
                      className="default-input"
                      placeholder="نام خانه حراج مورد نظر را وارد نمایید."
                    /> */}
                    {/* <button type="button" className="btn-search"></button> */}
                  {/* </div> */}
                  <div className="list-box">

                    {homeAuctions.length >=1 ? homeAuctions.map((home , index) => (
                      <React.Fragment key={home?.id}>
                        <ItemHomeAuction 
                          title={home?.home_auction_name ? home?.home_auction_name : ''} 
                          id={`checkbox2${++index}`} 
                          params={params} 
                          handleSetHomeAuction={handleSetHomeAuction}
                        />
                      </React.Fragment>
                    )) : ''}

                    {/* <ItemHomeAuction title={"حراج ایران"} id={"checkbox21"}/>
                    <ItemHomeAuction title={"گالری آرتیبیشن"} id={"checkbox22"}/>
                    <ItemHomeAuction title={"حراج تهران"} id={"checkbox23"}/>
                    <ItemHomeAuction title={"هان گالری"} id={"checkbox24"}/>
                    <ItemHomeAuction title={"کالری مدرن"} id={"checkbox25"}/>
\                    <ItemHomeAuction title={"گالری مدرنا"} id={"checkbox26"}/> */}

                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="True"
                  aria-controls="collapseThree"
                >
                  نوع
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse show"
                aria-labelledby="headingFive"
              >
                <div className="accordion-body">
                  <div className="list-box">

                    <ItemType id={"checkbox31"} title={"آنلاین"} params={params} handleSetType={handleSetType}/>
                    <ItemType id={"checkbox32"} title={"زنده"} params={params} handleSetType={handleSetType}/>
                    <ItemType id={"checkbox33"} title={"مدت دار"} params={params} handleSetType={handleSetType}/>
                    <ItemType id={"checkbox34"} title={"اولین پیشنهاد"} params={params} handleSetType={handleSetType}/>
                    <ItemType id={"checkbox35"} title={"دومین پیشنهاد"} params={params} handleSetType={handleSetType}/>

                    {/* <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkbox31"
                      />
                      <label className="form-check-label" for="checkbox31">
                        آنلاین
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkbox32"
                      />
                      <label className="form-check-label" for="checkbox32">
                        زنده
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkbox33"
                      />
                      <label className="form-check-label" for="checkbox33">
                        مدت‌دار
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkbox34"
                      />
                      <label className="form-check-label" for="checkbox34">
                        اولین پیشنهاد
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkbox35"
                      />
                      <label className="form-check-label" for="checkbox35">
                        دومین پیشنهاد
                      </label>
                    </div> */}


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
