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

        case '05':
            return 'تیر'
        
        case '06':
            return 'مرداد'   
            
        case '07':
            return 'شهریور'

        case '08':
            return 'آبان'

        case '09':
            return 'آذر'
    
        case '10':
            return 'دی'
            
        case '11':
            return 'بهمن'   
                
        case '12':
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

        case "ACTIVE" :
            return 'فعال'


        default:
            return 'غیر فعال'
    }
}


