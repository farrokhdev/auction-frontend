import React from 'react'

function ItemCategoryActivity({index , category , handleSetCategory , params}) {
    return (
        <div className="form-check">
            <input onClick={(e)=>{
                
                if (e.currentTarget.checked)
                    handleSetCategory([...params.activity_type , category?.title])
                else {
                    handleSetCategory( params.activity_type.filter(item => item !== category?.title) )
            }}}

                className="form-check-input" type="checkbox" value=""id={`checkbox1${++index}`}
            />
            <label className="form-check-label" htmlFor={`checkbox1${++index}`}>{category?.title}</label>
        </div>
    )
}

export default ItemCategoryActivity