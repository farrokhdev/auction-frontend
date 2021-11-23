import React from 'react'

function ItemCategoryActivity({ index, category, handleSetCategory, params, Tags, setTags }) {

    console.log("category?.title_en : " , category?.title_en);
    return (
        <div className="form-check">
            <input onClick={(e) => {

                if (e.currentTarget.checked) {
                    handleSetCategory([...params.activity_type, category?.title_en])
                    setTags([...Tags, category?.title_en])
                }
                else {
                    handleSetCategory(params.activity_type.filter(item => item !== category?.title_en))
                    setTags(Tags.filter((item) => item !== category?.title_en))

                }
            }}

                className="form-check-input"
                type="checkbox"
                checked={Tags.indexOf(category?.title_en) > -1 ? true : false}
                value=""
                id={`checkbox1${++index}`}
            />
            <label className="form-check-label" htmlFor={`checkbox1${++index}`}>{category?.title_en}</label>
        </div>
    )
}

export default ItemCategoryActivity;