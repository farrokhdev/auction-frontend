import React from 'react'

function ItemCategoryActivity({ index, category, handleSetCategory, params, Tags, setTags }) {
    return (
        <div className="form-check">
            <input onClick={(e) => {

                if (e.currentTarget.checked) {
                    handleSetCategory([...params.activity_type, category])
                    setTags([...Tags, category])
                }
                else {
                    handleSetCategory(params.activity_type.filter(item => item !== category))
                    setTags(Tags.filter((item) => item !== category))

                }
            }}

                className="form-check-input"
                type="checkbox"
                checked={Tags.indexOf(category) > -1 ? true : false}
                value=""
                id={`checkbox1${++index}`}
            />
            <label className="form-check-label" htmlFor={`checkbox1${++index}`}>{category}</label>
        </div>
    )
}

export default ItemCategoryActivity;