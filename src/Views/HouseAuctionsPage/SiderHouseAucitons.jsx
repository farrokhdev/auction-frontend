import React from 'react'
import ItemCategoryActivity from './ItemCategoryActivity'

function SiderHouseAucitons({params , handleSetCategory , categoryActivities , handleSetSearchFilter}) {


    return (
        <div className="col-sm-3 sidebar" id="left-side">
        <button type="button" className="btn-getclose d-block d-lg-none"></button>
        <div className="left-side">
            {/*<div className="result-box">*/}
            {/*    <div className="result-title">*/}
            {/*        <h6 className="default">نتایج:</h6>*/}
            {/*        <button type="button" className="btn-removeall">پاک کردن همه</button>*/}
            {/*    </div>*/}
            {/*    <div className="tags-box">*/}
            {/*        <a href="#" className="tag-box date">*/}
            {/*            <span>3 اردیبهشت - </span>*/}
            {/*            <span>6 اردیبهشت</span>*/}
            {/*            <button type="button" className="btn-remove"></button>*/}
            {/*        </a>*/}
            {/*        <a href="#" className="tag-box date">*/}
            {/*            <span>تهران</span>*/}
            {/*            <button type="button" className="btn-remove"></button>*/}
            {/*        </a>*/}
            {/*        <a href="#" className="tag-box date">*/}
            {/*            <span>آرتیبیشن</span>*/}
            {/*            <button type="button" className="btn-remove"></button>*/}
            {/*        </a>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="search-box">
                <div className="search-input">
                    <input  
                        id="search-house-auction"
                        type="text" className="default-input"
                        placeholder="جستجو..."
                        onChange={(e)=>handleSetSearchFilter(document.querySelector('#search-house-auction').value)} 
                        />
                    <button 
                        onClick={(e)=>handleSetSearchFilter(document.querySelector('#search-house-auction').value)} 
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
                            حوزه فعالیت
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse show"
                        aria-labelledby="headingThree">
                        <div className="accordion-body">
                            <div className="list-box">

                                {categoryActivities?.length ? categoryActivities?.map((category , index )=> (

                                    <React.Fragment key={category?.id}>
                                        <ItemCategoryActivity 
                                            index={index} 
                                            category={category} 
                                            params={params} 
                                            handleSetCategory={handleSetCategory}
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
