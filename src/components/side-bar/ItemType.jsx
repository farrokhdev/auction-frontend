import React from 'react'



function ItemType({id , title  , handleSetType  , params}) {

    const convertToEn = (value)=>{

        switch (value) {
    
          case "آنلاین":
            return "ONLINE"
    
          case "زنده":
            return "LIVE"
    
          case "مدت دار":
              return "PERIODIC"
    
          case "اولین پیشنهاد":
              return "HIDDEN"
    
          case "دومین پیشنهاد":
              return "SECOND_HIDDEN"
        
      
        }
    }
    
    return (
        <div class="form-check">
            <input 
                onClick={(e)=>{ 

                    if(e.currentTarget.checked){
                        handleSetType([...params.auctions__type , convertToEn(title)])
                    }else {
                        handleSetType( params.auctions__type.filter(item => item !== convertToEn(title)) )
                    }}}
                    
                class="form-check-input" type="checkbox" value="" id={id} />
            <label class="form-check-label" for={id}>
                {title}
            </label>
        </div>
    )
}

export default ItemType;