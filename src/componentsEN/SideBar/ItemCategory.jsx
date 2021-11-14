import React from 'react'

function ItemCategory({ params, id, title, handleSetCategory, Tags, setTags }) {
    return (
        <div class="form-check">
            <input onClick={(e) => {
                if (e.currentTarget.checked) {
                    handleSetCategory([...params.category, title])
                    setTags([...Tags, title])
                } else {
                    handleSetCategory(params.category.filter(item => item !== title))
                    setTags(Tags.filter((item) => item !== title))

                }
            }}
                class="form-check-input"
                type="checkbox"
                value=""
                id={id}
                checked={Tags.indexOf(title) > -1 ? true : false}
            />
            <label class="form-check-label" for={id}>
                {title}
            </label>
        </div>
    )
}

export default ItemCategory;