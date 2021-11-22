import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { openDashboard } from "../../redux/reducers/all/all.actions"
import { ConfigProvider, DatePicker, Tag } from "antd";
import { DatePicker as DatePickerJalali } from "antd-jalali";
import fa_IR from "antd/lib/locale/fa_IR";
import "antd/dist/antd.css";
import en_US from "antd/lib/locale/en_US";
import ItemStatus from './ItemStatus';
import ItemCategory from './ItemCategory';
import ItemHomeAuction from './ItemHomeAuction';
import ItemType from './ItemType';
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import { CATEGORIE_ACTIVITY, HOME_AUCITONS } from '../../utils/constant';

function SideBar({
    handleSearchProducts, handleRemoveFilters,
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
    typeCategory
}) {

    const { is_Open_Dashboard } = useSelector((state) => state.allReducer)
    const dispatch = useDispatch();
    const { RangePicker } = DatePicker;
    const [categories, setCategories] = useState([])
    const [homeAuctions, setHomeAuctions] = useState([])

    function onChange(dates, dateStrings) {
        handleSetDate(dateStrings ? dateStrings[0] : {}, dateStrings ? dateStrings[1] : {});
    }

    function onChangeEN(dates, dateStrings) {
        handleSetDateEN(dateStrings ? dateStrings[0] : {}, dateStrings ? dateStrings[1] : {});
    }


    const getCategories = () => {
        axios.get(`${BASE_URL}${CATEGORIE_ACTIVITY}?${typeCategory}`).then(res => {
            console.log("category **** : " , res.data.data.result[setNumbCategory(typeCategory)].children);
          setCategories(res.data.data.result[setNumbCategory(typeCategory)].children)
        }).catch(err => {
          console.error(err);
        })
    }

          // this function set index of categories result for set categories children
          const setNumbCategory = (typeCategory) => {
            switch (typeCategory) {
              case 'auction houses':
                return 0
              case 'products':
                return 1
              case 'auctions':
                return 2
      
              default:
                break;
            }
          }

    const getHouseAuctions = () => {
        axios.get(`${BASE_URL}${HOME_AUCITONS}`).then(res => {
              setHomeAuctions(res.data.data.result)
            }).catch(err => {
              console.error(err);
        })
    }

    useEffect(() => {
        getCategories()
        getHouseAuctions()
    }, [])


    return (
        <>
            <div className={`col-sm-3 sidebar ${is_Open_Dashboard && "open"}`} id="left-side">
                <button type="button" className="btn-getclose d-block d-lg-none" onClick={() => dispatch(openDashboard(!is_Open_Dashboard))}></button>
                <div className="left-side">
                    <div className="result-box">
                        <div className="result-title">
                            <h6 className="default">Results:</h6>
                            <button type="button" className="btn-removeall" onClick={handleRemoveFilters} >Remove all</button>
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
                        <div className="tags-box">
                        </div>
                    </div>
                    <div className="search-box">
                        <div className="search-input">
                            <input
                                id="product-search"
                                type="text"
                                className="default-input"
                                placeholder="Search more than 100 auctions..."
                                onChange={(e) => handleSearchProducts(document.querySelector('#product-search').value)} />
                            <button type="button" className="btn-search"
                                onClick={(e) => handleSearchProducts(document.querySelector('#product-search').value)}></button>
                        </div>
                    </div>
                    <div className="accordion main-accordion" id="leftside">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Date
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne">
                                <div className="accordion-body">

                                    <ConfigProvider locale={fa_IR} direction="rtl">
                                        <div className="">
                                            <DatePickerJalali.RangePicker onChange={onChange} className="rounded" />
                                        </div>
                                    </ConfigProvider>
                                    <ConfigProvider direction="rtl" locale={en_US}>
                                        <RangePicker className="rounded mt-3" onChange={onChangeEN} />
                                    </ConfigProvider>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="True"
                                    aria-controls="collapseThree">
                                    Status
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse show"
                                aria-labelledby="headingThree">
                                <div className="accordion-body">
                                    <ItemStatus
                                        id={"checkbox36"}
                                        title={"Future"}
                                        value="PREPARING"
                                        params={params}
                                        handleAuctionStatus={handleAuctionStatus}
                                        Tags={Tags}
                                        setTags={setTags}
                                    />

                                    <ItemStatus
                                        id={"checkbox37"}
                                        title={"Current"}
                                        value="ACTIVE"
                                        params={params}
                                        handleAuctionStatus={handleAuctionStatus}
                                        Tags={Tags}
                                        setTags={setTags}
                                    />

                                    <ItemStatus
                                        id={"checkbox38"}
                                        title={"Old"}
                                        value="CLOSED"
                                        params={params}
                                        handleAuctionStatus={handleAuctionStatus}
                                        Tags={Tags}
                                        setTags={setTags}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour" aria-expanded="True" aria-controls="collapseTwo">
                                    Scope of auction houses
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse show"
                                aria-labelledby="headingFour"
                            >
                                <div className="accordion-body">
                                    <div className="list-box">

                                        {categories?.length >= 1 ? categories?.map((category, index) => (
                                            <React.Fragment key={category?.id}>
                                                <ItemCategory
                                                    Tags={Tags}
                                                    setTags={setTags}
                                                    title={category?.title_en}
                                                    id={`checkbox2${++index}`}
                                                    params={params}
                                                    handleSetCategory={handleSetCategory} />
                                            </React.Fragment>
                                        )) : ''}
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
                                    Auction houses
                                </button>
                            </h2>
                            <div
                                id="collapseFour"
                                className="accordion-collapse collapse show"
                                aria-labelledby="headingFour"
                            >
                                <div className="accordion-body">
                                    <div className="list-box">

                                        {homeAuctions.length >= 1 ? homeAuctions.map((home, index) => (
                                            <React.Fragment key={home?.id}>
                                                <ItemHomeAuction
                                                    Tags={Tags}
                                                    setTags={setTags}
                                                    title={home?.home_auction_name_en ? home?.home_auction_name_en : ''}
                                                    id={`checkbox2${++index}`}
                                                    params={params}
                                                    handleSetHomeAuction={handleSetHomeAuction}
                                                />
                                            </React.Fragment>
                                        )) : ''}

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFive">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFive" aria-expanded="True"
                                    aria-controls="collapseThree">
                                    Type
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse show"
                                aria-labelledby="headingFive">
                                <div className="accordion-body">
                                    <div className="list-box">
                                        <ItemType
                                            id={"checkbox31"}
                                            title={"Online"}
                                            params={params}
                                            handleSetType={handleSetType}
                                            Tags={Tags}
                                            setTags={setTags} />

                                        <ItemType
                                            id={"checkbox32"}
                                            title={"Live"}
                                            params={params}
                                            handleSetType={handleSetType}
                                            Tags={Tags}
                                            setTags={setTags} />

                                        <ItemType
                                            id={"checkbox33"}
                                            title={"Timed"}
                                            params={params}
                                            handleSetType={handleSetType}
                                            Tags={Tags}
                                            setTags={setTags} />

                                        <ItemType
                                            id={"checkbox34"}
                                            title={"First offer"}
                                            params={params}
                                            handleSetType={handleSetType}
                                            Tags={Tags}
                                            setTags={setTags} />

                                        <ItemType
                                            id={"checkbox35"}
                                            title={"Second offer"}
                                            params={params}
                                            handleSetType={handleSetType}
                                            Tags={Tags}
                                            setTags={setTags} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar;