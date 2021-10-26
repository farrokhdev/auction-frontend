import React from 'react'



function ItemType({id , title  , handleSetType  ,Tags ,setTags, params}) {

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
                onClick={(e)=> {

                    if (params.auctions__type) {
                        if (e.currentTarget.checked) {
                            handleSetType([...params.auctions__type, convertToEn(title)])
                            setTags([...Tags, title])

                        } else {
                            handleSetType(params.auctions__type.filter(item => item !== convertToEn(title)))
                            setTags(Tags.filter((item) => item !== title))

                        }
                    }
                    else{
                        if (e.currentTarget.checked) {
                            handleSetType([...params.type, convertToEn(title)])
                            setTags([...Tags, title])
                        } else {
                            handleSetType(params.type.filter(item => item !== convertToEn(title)))
                            setTags(Tags.filter((item) => item !== title))
                        }
                    }
                }

                }

                    
                class="form-check-input" type="checkbox"
                 checked={Tags.indexOf(title) > -1 ? true : false} 
                 value="" id={id} />
            <label class="form-check-label" for={id}>
                {title}
            </label>
        </div>
    )
}

export default ItemType;