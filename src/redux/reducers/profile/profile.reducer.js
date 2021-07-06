import types from './profile.types';
import {removeToken, Token} from '../../../utils/utils'

const initial_state = {
    pending: false,
    error: null,
    "id": null,
    "first_name": null,
    "last_name": null,
    "username": "",
    "address": null,
    "postal_code": null,
    "email": null,
    "mobile": "",
    "national_code": null,
    "role": ""
}


const profileReducer = (state = initial_state, {type, payload={}}) => {
    switch (type) {
        case types.SET_PROFILE:
            return {
                ...state,
                ...payload,
                pending: true,
                error: null
            }
        default :
            return state;
    }
}

export default profileReducer;