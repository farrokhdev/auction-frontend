import types from './auction.types';
import {removeToken, Token} from '../../../utils/utils'

const initial_state = {
    pending: false,
    error: null,
    data:{
        description:""
    },
    products:[],
    bid_steps:[],
    validations_auction:[],
    selectComponent:1,
    payment_method:false,
    extendable_deadline:false,
    has_recommendation:false,
    admin_confirmation:false,
    add_previous_buyer:false,
}


const auctionReducer = (state = initial_state, {type, payload={}}) => {
    switch (type) {
        case types.SET_ADD_AUCTION:
            return {
                ...state,
                ...payload,
                pending: true,
                error: null
            }
            case types.REMOVE_ADD_AUCTION:
            return initial_state;
        default :
            return state;
    }
}

export default auctionReducer;