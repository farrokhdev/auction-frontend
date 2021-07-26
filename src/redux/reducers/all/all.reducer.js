import types from './all.types';
import {removeToken , Token} from '../../../utils/utils'
const initial_state ={}




const allReducer = (state = initial_state , {type , payload})=> {
    switch(type){
        case types.CLEAR_STORAGE_ALL:
            removeToken()
            return {}
        default :
        return state;
    }
}

export default allReducer;