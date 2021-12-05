import React from 'react'
import ItemCategoryActivity from './ItemCategoryActivity'
import { Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { openDashboard } from "../../redux/reducers/all/all.actions"

function SiderHouseAucitons({ params,
    handleRemoveFilters,
    Tags,
    handleClose,
    setTags,
    handleSetCategory,
    categoryActivities,
    handleSetSearchFilter }) {
    
        const { is_Open_Dashboard } = useSelector((state) => state.allReducer)
    const dispatch = useDispatch();

    return (
        <div className={`col-sm-3 sidebar ${is_Open_Dashboard && "open"}`} id="left-side">
            <button type="button" className="btn-getclose d-block d-lg-none" onClick={()=> dispatch(openDashboard(!is_Open_Dashboard))}></button>
            <div className="left-side">
                <div className="result-box">
                    <div className="result-title">
                        <h6 className="default">نتایج :</h6>
                        <button type="button" onClick={handleRemoveFilters} className="btn-removeall">پاک کردن همه</button>
                    </div>
                    <div className="tags-box">
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
                    </div>
                </div>
                <div className="search-box">
                    <div className="search-input">
                        <input
                            id="search-house-auction"
                            type="text" className="default-input"
                            placeholder="جستجو در بیش از 100 اثر"
                            onChange={(e) => handleSetSearchFilter(document.querySelector('#search-house-auction').value)}
                        />
                        <button
                            onClick={(e) => handleSetSearchFilter(document.querySelector('#search-house-auction').value)}
                            type="button"
                            className="btn-search"
                        />
                    </div>
                    {/*<button  type="button" className="btn-lightpink">*/}
                    {/*    <FontAwesomeIcon className="mx-2" icon={faMapMarkedAlt}/>*/}
                    {/*    جستجو بر اساس محل*/}
                    {/*</button>*/}
                </div>
                <div className="accordion main-accordion" id="leftside">

                    {/* <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="True" aria-controls="collapseTwo">
                            شهرها
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse show"
                        aria-labelledby="headingTwo">
                        <div className="accordion-body">
                            <div className="search-input">
                                <input type="text" className="default-input"
                                    placeholder="شهر مورد نظر را وارد نمایید." />
                                <button type="button" className="btn-search"></button>
                            </div>
                            <div className="list-box">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=""
                                        id="checkbox1"/>
                                    <label className="form-check-label" for="checkbox1">
                                        اردبیل
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=""
                                        id="checkbox2"/>
                                    <label className="form-check-label" for="checkbox2">
                                        ایلام
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=""
                                        id="checkbox3"/>
                                    <label className="form-check-label" for="checkbox3">
                                        بوشهر
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" checked value=""
                                        id="checkbox4"/>
                                    <label className="form-check-label" for="checkbox4">
                                        تهران
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=""
                                        id="checkbox5"/>
                                    <label className="form-check-label" for="checkbox5">
                                        سمنان
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=""
                                        id="checkbox6"/>
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
                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="True"
                                aria-controls="collapseThree">
                                فعالیت 
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse show"
                            aria-labelledby="headingThree">
                            <div className="accordion-body">
                                <div className="list-box">

                                    {categoryActivities?.length ? categoryActivities?.map((category, index) => (

                                        <React.Fragment key={category?.id}>
                                            <ItemCategoryActivity
                                                index={index}
                                                category={category}
                                                params={params}
                                                handleSetCategory={handleSetCategory}
                                                Tags={Tags}
                                                setTags={setTags}
                                            />
                                        </React.Fragment>

                                    )) : ''}


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SiderHouseAucitons
