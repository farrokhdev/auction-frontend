export function convertTypePersian(value) {
    
    switch (value) {
        case"melli":
            return 'ملی'

        case"user":
            return 'کاربر'
        
        case"admin":
            return 'ادمین'

        case"home_auction":
            return 'خانه حراج'

        default:
            return ''
    }
}


export function convertTypeAuctionToPersian(value) {
    
    switch (value) {
        case"LIVE":
            return 'زنده'

        case"ONLINE":
            return 'آنلاین'

        case"OFFLINE":
            return 'آفلاین'
        
        case"PERIODIC":
            return 'زمان‌دار'

        case"HIDDEN":
            return 'حراج با پیشنهاد قیمت مخفی'
        
        case"SECOND_HIDDEN":
            return 'حراج با دومین پیشنهاد قیمت مخفی'

        default:
            return ''
    }
}


export function convertMouthToPersian(value) {
    
    switch (value) {
        case '01' :
            return 'فرودین'

        case '02' :
            return 'اردیبهشت'
        
        case '03':
            return 'خرداد'

        case '04':
            return 'تیر'
        
        case '05':
            return 'مرداد'   
            
        case '06':
            return 'شهریور'

        case '07':
            return 'آبان'

        case '08':
            return 'آذر'
    
        case '09':
            return 'دی'
            
        case '10':
            return 'بهمن'   
                
        case '11':
            return 'اسفند'
    

        default:
            return ''
    }
}


export function convertStatusShowAuctionPersian(value) {
    
    switch (value) {

        case ("PERIODIC" ||  "ONLINE") :
            return 'مشاهده حراج'

        case"LIVE":
            return 'مشاهده زنده'
    
        

        default:
            return ''
    }
}

export function convertStatus(value) {
    
    switch (value) {

        case true :
            return 'فعال'
        case false :
            return 'غیر فعال'

        default:
            return 'غیر فعال'
    }
}

// Conver Currency English String To Persion
export function convertCurrencyType(value) {
    
    switch (value) {

        case "toman" :
            return 'تومان'
        case "dollar" :
            return 'دلار'

        default:
            return 'تومان'
    }
}


