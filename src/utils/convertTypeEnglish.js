import { Link } from 'react-router-dom';

export function convertTypeToEn(type) {

    switch (type) {

        case "ONLINE":
            return <span className="category-icon online-icon mx-0 pr-0">Online</span>
        case "LIVE":
            return <span className="category-icon live-icon mx-0 pr-0">Live</span>

        case "PERIODIC":
            return <span className="category-icon timed-icon mx-0 pr-0">Timed</span>

        case "HIDDEN":
            return <span className="category-icon firstoffer-icon mx-0 pr-0">Hidden</span>

        case "SECOND_HIDDEN":
            return <span className="category-icon secondoffer-icon mx-0 pr-0">Second hidden</span>

    }
}


// check status auction type and enrolled then generate btn 
export function AuctionStatusTextBtn(type, enrolled, id) {
    
    // auction ended and user not allow to join auction
    if (type === "CLOSED") {
        return <button type="button" className="btn btn-lightpink">Offer is ended</button>
        // user registred to auction then user not allow to join auction
    } else if (enrolled) {
        return <button type="button" className="btn btn-lightgreenbg">You have registered in the auction</button>
        // user not register to auction and auction is preparing or started then user allow to join auction
    } else {
        return <Link to={`/buyer-register/${id}`}>
            <button type="button" className="btn btn-main join">
                Join <span class="">this auction</span>
            </button>
        </Link>
    }

}


export function AuctionType(type) {
    switch (type) {
        case "SECOND_HIDDEN":
            return "Second hidden"
        case "HIDDEN":
            return "Hidden"
        case "PERIODIC":
            return "Periodic"
        case "ONLINE":
            return "Online"
        case "LIVE":
            return "Live"
        default:
            return ""
    }
}


export function status(value){

    switch (value) {

        case "Future":
            return "PREPARING"
        case "Current":
            return "ACTIVE"
        case "Old":
            return "CLOSED"
    }
}