import React from 'react'

function ItemCategory({ params , id , title ,  handleSetCategory}) {
return (
<div class="form-check">
    <input onClick={(e)=>{ if (e.currentTarget.checked)
            handleSetCategory([...params.category,title])
                else {
            handleSetCategory( params.category.filter(item => item !== title) )
        }}}
        class="form-check-input"
        type="checkbox"
        value=""
        id={id}
    />
    <label class="form-check-label" for={id}>
        {title}
    </label>
</div>
)
}

export default ItemCategory;