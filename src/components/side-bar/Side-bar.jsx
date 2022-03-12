import React, { useState, useEffect } from "react";
import ItemCategory from "./ItemCategory";
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import { HOME_AUCITONS, CATEGORIE_ACTIVITY } from "../../utils/constant";
import ItemHomeAuction from "./ItemHomeAuction";
import ItemType from "./ItemType";
import { ConfigProvider, DatePicker, Tag } from "antd";
import { DatePicker as DatePickerJalali } from "antd-jalali";
import fa_IR from "antd/lib/locale/fa_IR";
import "antd/dist/antd.css";
import en_US from "antd/lib/locale/en_US";
import ItemStatus from "./ItemStatus";
import { useDispatch, useSelector } from "react-redux";


import { openDashboard } from "../../redux/reducers/all/all.actions"


function Sidebar({ handleSearchProducts, handleRemoveFilters,
  Tags,
  handleClose,
  setTags,
  handleSetCategory,
  params,
  handleSetType,
  handleSetHomeAuction,
  handleAuctionStatus,
  handleSetDate,
  handleSetDateEN,
  typeCategory,
}) {
  const { is_Open_Dashboard } = useSelector((state) => state.allReducer);

  const dispatch = useDispatch();
  const { RangePicker } = DatePicker;

  const [categories, setCategories] = useState([]);
  const [homeAuctions, setHomeAuctions] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}${CATEGORIE_ACTIVITY}?${typeCategory}`)
      .then((res) => {
        setCategories(
          res.data.data.result[setNumbCategory(typeCategory)].children
        );
      })
      .catch((err) => {
        console.error(err);
      });

    // this function set index of categories result for set categories children
    const setNumbCategory = (typeCategory) => {
      switch (typeCategory) {
        case "خانه های حراج":
          return 0;
        case "آثار":
          return 1;
        case "حراج ها":
          return 2;

        default:
          break;
      }

    }


    axios.get(`${BASE_URL}${HOME_AUCITONS}`).then(res => {
      console.log("H ", res.data.data.result);
      setHomeAuctions(res.data.data.result)
    }).catch(err => {
      console.error(err);
    })

  }, [])


  function onChange(dates, dateStrings) {
    // console.log('From: ', dates, ', to: ', dates);
    console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
    // console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
    // handleSetDate(dates ? dates[0] : {}, dates ? dates[1] :{} );
    handleSetDate(
      dateStrings ? dateStrings[0] : {},
      dateStrings ? dateStrings[1] : {}
    );
  }

  function onChangeEN(dates, dateStrings) {
    console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
    handleSetDateEN(
      dateStrings ? dateStrings[0] : {},
      dateStrings ? dateStrings[1] : {}
    );
  }

  return (
    <>

      <div
        className={`col-sm-3 sidebar ${is_Open_Dashboard && "open"}`}
        id="left-side"
      >
        <button
          type="button"
          className="btn-getclose d-block d-lg-none"
          onClick={() => dispatch(openDashboard(!is_Open_Dashboard))}
        ></button>

        <div className="left-side">
          <div className="result-box">
            <div className="result-title">
              <h6 className="default">نتایج:</h6>
              <button onClick={handleRemoveFilters} type="button" className="btn-removeall">پاک کردن همه</button>
            </div>
            {
              Tags?.length ? Tags?.map(item => (
                <Tag
                  closable
                  onClose={e => {
                    e.preventDefault();
                    handleClose(item);

                  }}

                >{item} </Tag>
              )) : ""
            }
            <div className="tags-box" >
            </div>
          </div>

          <div className="search-box">
            <div className="search-input">
              <input
                id="product-search"
                type="text"
                className="default-input"
                placeholder="جستجو آثار"
                onChange={(e) => handleSearchProducts(document.querySelector('#product-search').value)}
              />
              <button
                onClick={(e) => { handleSearchProducts(document.querySelector('#product-search').value); dispatch(openDashboard(!is_Open_Dashboard)) }}

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
                      <DatePickerJalali.RangePicker
                        onChange={onChange}
                        className="rounded"
                      />
                    </div>
                  </ConfigProvider>
                  <ConfigProvider direction="rtl" locale={en_US}>
                    <RangePicker
                      className="rounded mt-3"
                      onChange={onChangeEN}
                    />
                  </ConfigProvider>
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
                  وضعیت
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse show"
                aria-labelledby="headingFive"
              >
                <div className="accordion-body">
                  <div className="list-box">
                    <ItemStatus
                      id={"checkbox36"}
                      title={"آینده"}
                      value="PREPARING"
                      params={params}
                      handleAuctionStatus={handleAuctionStatus}
                      Tags={Tags}
                      setTags={setTags}
                    />

                    <ItemStatus
                      id={"checkbox37"}
                      title={"فعلی"}
                      value="ACTIVE"
                      params={params}
                      handleAuctionStatus={handleAuctionStatus}
                      Tags={Tags}
                      setTags={setTags}
                    />

                    <ItemStatus
                      id={"checkbox38"}
                      title={"گذشته"}
                      value="CLOSED"
                      params={params}
                      handleAuctionStatus={handleAuctionStatus}
                      Tags={Tags}
                      setTags={setTags}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="True"
                  aria-controls="collapseThree"
                >
                  حوزه فعالیت خانه های حراج
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse show"
                aria-labelledby="headingThree"
              >
                <div className="accordion-body">
                  <div className="list-box">
                    {categories?.length >= 1
                      ? categories?.map((category, index) => (
                          <React.Fragment key={category?.id}>
                            <ItemCategory
                              Tags={Tags}
                              setTags={setTags}
                              title={category?.title}
                              id={`checkbox2${++index}`}
                              params={params}
                              handleSetCategory={handleSetCategory}
                            />
                          </React.Fragment>
                        ))
                      : ""}
                  </div>
                </div>
              </div>
            </div> */}

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
                  <div className="list-box">
                    {homeAuctions.length >= 1
                      ? homeAuctions.map((home, index) => (
                          <React.Fragment key={home?.id}>
                            <ItemHomeAuction
                              Tags={Tags}
                              setTags={setTags}
                              title={
                                home?.home_auction_name
                                  ? home?.home_auction_name
                                  : ""
                              }
                              id={`checkbox2${++index}`}
                              params={params}
                              handleSetHomeAuction={handleSetHomeAuction}
                            />
                          </React.Fragment>
                        ))
                      : ""}
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
                  data-bs-target="#collapseTwo"
                  aria-expanded="True"
                  aria-controls="collapseThree"
                >
                  نوع
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse show"
                aria-labelledby="headingFive"
              >
                <div className="accordion-body">
                  <div className="list-box">
                    <ItemType
                      id={"checkbox31"}
                      title={"آنلاین"}
                      params={params}
                      handleSetType={handleSetType}
                      Tags={Tags}
                      setTags={setTags}
                    />

                    <ItemType
                      id={"checkbox32"}
                      title={"زنده"}
                      params={params}
                      handleSetType={handleSetType}
                      Tags={Tags}
                      setTags={setTags}
                    />

                    <ItemType
                      id={"checkbox33"}
                      title={"مدت دار"}
                      params={params}
                      handleSetType={handleSetType}
                      Tags={Tags}
                      setTags={setTags}
                    />

                    <ItemType
                      id={"checkbox34"}
                      title={"اولین پیشنهاد"}
                      params={params}
                      handleSetType={handleSetType}
                      Tags={Tags}
                      setTags={setTags}
                    />

                    <ItemType
                      id={"checkbox35"}
                      title={"دومین پیشنهاد"}
                      params={params}
                      handleSetType={handleSetType}
                      Tags={Tags}
                      setTags={setTags}
                    />
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
