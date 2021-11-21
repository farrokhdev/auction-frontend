import { Link } from 'react-router-dom'

export function convertTypePersian(value) {

    switch (value) {
        case "melli":
            return 'ملی'

        case "user":
            return 'کاربر'

        case "admin":
            return 'ادمین'

        case "home_auction":
            return 'خانه حراج'

        default:
            return ''
    }
}

export function  convertTypeEN(value){

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


export function status(value){

    switch (value) {

        case "آینده":
            return "PREPARING"
        case "فعلی":
            return "ACTIVE"
        case "گذشته":
            return "CLOSED"
    }
}



export function convertTypeAuctionToPersian(value) {
    switch (value) {
        case "LIVE":
            return 'زنده'

        case "ONLINE":
            return 'آنلاین'

        case "OFFLINE":
            return 'آفلاین'

        case "PERIODIC":
            return 'زمان‌دار'

        case "HIDDEN":
            return ' با پیشنهاد قیمت مخفی'

        case "SECOND_HIDDEN":
            return ' با دومین پیشنهاد قیمت مخفی'

        default:
            return ''
    }
}


export function convertMouthToPersian(value) {

    switch (value) {
        case '01':
            return 'فرودین'

        case '02':
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

        case ("PERIODIC" || "ONLINE"):
            return 'مشاهده حراج'

        case "LIVE":
            return 'مشاهده زنده'



        default:
            return ''
    }
}

export function convertStatus(value) {

    switch (value) {

        case true:
            return 'فعال'
        case false:
            return 'غیر فعال'

        default:
            return 'غیر فعال'
    }
}

// Conver Currency English String To Persion
export function convertCurrencyType(value) {

    switch (value) {

        case "toman":
            return 'تومان'
        case "dollar":
            return 'دلار'

        default:
            return 'تومان'
    }
}

export function AuctionType(type) {
    switch (type) {
        case "SECOND_HIDDEN":
            return "دومین پیشنهاد"
        case "HIDDEN":
            return "اولین پیشنهاد"
        case "PERIODIC":
            return "حراج مدت دار "
        case "ONLINE":
            return "حراج آنلاین"
        case "LIVE":
            return "حراج زنده"
        default:
            return ""
    }
}

export function AuctionTypeEN(type) {
    switch (type) {
        case "SECOND_HIDDEN":
            return "SECOND_HIDDEN"
        case "HIDDEN":
            return "HIDDEN"
        case "PERIODIC":
            return "PERIODIC "
        case "ONLINE":
            return "ONLINE"
        case "LIVE":
            return "LIVE"
        default:
            return ""
    }
}

export function convertToEn(type) {

    switch (type) {

        case "ONLINE":
            return <span className="category-icon online-icon">آنلاین</span>
        case "LIVE":
            return <span className="category-icon live-icon">زنده</span>

        case "PERIODIC":
            return <span className="category-icon timed-icon">مدت دار</span>

        case "HIDDEN":
            return <span className="category-icon firstoffer-icon">اولین پیشنهاد</span>

        case "SECOND_HIDDEN":
            return <span className="category-icon secondoffer-icon">دومین پیشنهاد</span>

    }
}

export function convertToEnForEnglish(type) {

    switch (type) {

        case "ONLINE":
            return <span className="category-icon online-icon">ONLINE</span>
        case "LIVE":
            return <span className="category-icon live-icon">LIVE</span>

        case "PERIODIC":
            return <span className="category-icon timed-icon">PERIODIC</span>

        case "HIDDEN":
            return <span className="category-icon firstoffer-icon">HIDDEN</span>

        case "SECOND_HIDDEN":
            return <span className="category-icon secondoffer-icon">SECOND_HIDDEN</span>

    }
}

export function isApproved(value) {
    switch (value) {
        case "waiting":
            return {
                title: "در انتظار تایید",
                css: "pending"
            }
        case "accept":
            return {
                title: "تایید شده",
                css: "accepted"
            }
        case "reject":
            return {
                title: "رد شده",
                css: "failed"
            }
        default:
            return {
                title: "",
                css: ""
            }
    }
}

export function isApprovedEN(value) {
    switch (value) {
        case "waiting":
            return {
                title: "Pending	",
                css: "pending"
            }
        case "accept":
            return {
                title: "accepted",
                css: "accepted"
            }
        case "reject":
            return {
                title: "failed",
                css: "failed"
            }
        default:
            return {
                title: "",
                css: ""
            }
    }
}

export function isAwaitingApproval(value) {
    switch (value) {
        case null:
            return {
                title: "در انتظار تایید",
                css: "pending"
            }
        case true:
            return {
                title: "تایید شده",
                css: "accepted"
            }
        case false:
            return {
                title: "رد شده",
                css: "failed"
            }
        default:
            return {
                title: "",
                css: ""
            }
    }
}

export function isAwaitingApprovalEN(value) {
    switch (value) {
        case null:
            return {
                title: "pending",
                css: "pending"
            }
        case true:
            return {
                title: "accepted",
                css: "accepted"
            }
        case false:
            return {
                title: "failed",
                css: "failed"
            }
        default:
            return {
                title: "",
                css: ""
            }
    }
}

// check status auction type and enrolled then generate btn 
export function AuctionStatusTextBtn(type, enrolled, id) {
    
    // auction ended and user not allow to join auction
    if (type === "CLOSED") {
        return <button type="button" className="btn btn-lightpink">حراج به پایان رسیده است</button>
        // user registred to auction then user not allow to join auction
    } else if (enrolled) {
        return <button type="button" className="btn btn-lightgreenbg">در حراجی ثبت‌نام کرده‌اید</button>
        // user not register to auction and auction is preparing or started then user allow to join auction
    } else {
        return <Link to={`/buyer-register/${id}`}>
            <button type="button" className="btn btn-main join">
                عضویت <span class="">در حراج</span>
            </button>
        </Link>
    }

}


// check status auction type and enrolled then generate btn 
export function AuctionStatusText(type, enrolled, id) {
    // auction ended and user not allow to join auction
    if (type === "CLOSED") {
        return <button type="button" className="btn btn-lightpink">حراج به پایان رسیده است</button>
        // user registred to auction then user not allow to join auction
    } else if (enrolled) {
        return <button type="button" className="btn btn-lightgreenbg">در حراجی ثبت‌نام کرده‌اید</button>
        // user not register to auction and auction is preparing or started then user allow to join auction
    } else {
        return <Link to={`/buyer-register/${id}`}>
            <button type="button" className="btn btn-basic">
                عضویت <span class="">در حراج</span>
            </button>
        </Link>
    }

}




