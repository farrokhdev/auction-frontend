import React from 'react'

function ItemHomeAuction({id , title , params , handleSetHomeAuction}) {
    return (
        <div class="form-check">
            <input 
                onClick={(e)=>{ 

                        if(e.currentTarget.checked){
                            handleSetHomeAuction([...params.home_auction_name , title])
                        }else {
                            handleSetHomeAuction( params.home_auction_name.filter(item => item !== title) )
                        }}
                }
                class="form-check-input" type="checkbox" value="" id={id} />
            <label class="form-check-label" for={id}>
                {title} 
            </label>
        </div>
    )
}

export default ItemHomeAuction ;