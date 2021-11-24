import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { openDashboard } from "../../redux/reducers/all/all.actions"
import { Tag } from "antd";
import ItemCategoryActivity from './ItemCategoryActivity';

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

    const [Activitis, setActivitis] = useState([])

    useEffect(() => {
        console.log("categoryActivities  : " , categoryActivities);
    }, [categoryActivities])

    
    return (
        <>
            <div className={`col-sm-3 sidebar ${is_Open_Dashboard && "open"}`} id="left-side">
                <button type="button" className="btn-getclose d-block d-lg-none" onClick={() => dispatch(openDashboard(!is_Open_Dashboard))}></button>
                <div className="left-side">
                    <div className="result-box">
                        <div className="result-title">
                            <h6 className="default">Results:</h6>
                            <button type="button" className="btn-removeall" onClick={handleRemoveFilters}>Remove all</button>
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
                                id="product-search"
                                type="text"
                                className="default-input"
                                placeholder="Search more than 100 auctions..."
                                onChange={(e) => handleSetSearchFilter(document.querySelector('#product-search').value)} />
                            <button type="button" className="btn-search"
                                onClick={(e) => handleSetSearchFilter(document.querySelector('#product-search').value)}></button>
                        </div>
                    </div>
                    <div className="accordion main-accordion" id="leftside">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="True"
                                    aria-controls="collapseThree">
                                    Activity
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse show"
                                aria-labelledby="headingThree">
                                <div className="accordion-body">
                                    <div className="list-box">
                                        {/* <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                id="checkbox11" />
                                            <label className="form-check-label" for="checkbox11">
                                                Painting
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                id="checkbox12" />
                                            <label className="form-check-label" for="checkbox12">
                                                Photography
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                id="checkbox13" />
                                            <label className="form-check-label" for="checkbox13">
                                                Sculpture
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" checked value=""
                                                id="checkbox14" />
                                            <label className="form-check-label" for="checkbox14">
                                                Calligram
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                id="checkbox15" />
                                            <label className="form-check-label" for="checkbox15">
                                                Calligraphy
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                id="checkbox16" />
                                            <label className="form-check-label" for="checkbox16">
                                                Paint
                                            </label>
                                        </div> */}

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
        </>
    )
}

export default SiderHouseAucitons;