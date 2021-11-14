import types from './all.types';
import { removeToken, Token } from '../../../utils/utils'
const initial_state = {
    is_Open_Dashboard: false,
    check_Language: 'fa'
}




const allReducer = (state = initial_state, { type, payload }) => {
    switch (type) {
        case types.CLEAR_STORAGE_ALL:
            removeToken()
            return {}
        case types.OPEN_DASHBOARD:

            return { ...state , is_Open_Dashboard: payload }

        case types.CHANGE_LANGUAGE:

            return { ...state , check_Language: payload }
            
        default:
            return state;
    }
}

export default allReducer;