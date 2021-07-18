import types from './auth.types';
import axios from "../../../utils/request";
import {BASE_URL} from "../../../utils";
import {REFRESH_TOKEN} from "../../../utils/constant";

// ----- Register --------
export const registerStart = () => (
    {
        type : types.REGISTER_START
    }
)
export const refreshToken = () => async dispatch=>{
    axios.put(`${BASE_URL}${REFRESH_TOKEN}`,{auth:false})
        .then(r => {
            console.log(r)
            return r;
        }).catch(e => {

    })
}

export const registerSuccess = (data) => (
    {
        type : types.REGISTER_SUCCESS,
        payload : data
    }
)

export const registerError = (error)=> (
    {
        type : types.REGISTER_ERROR,
        payload : error
    }
)



export const clearStorage = () => (
    {
        type : types.CLEAR_STORAGE,
    }
)




export const setPhoneNumber = (data) => (
    {
        type : types.SET_PHONENUMBER,
        payload : data
       
    }
)

export const setProfile = (data) => (
    {
        type : types.SET_PROFILE,
        payload : data
       
    }
)


export const loginSuccess = (data) => (
    {
        type : types.LOGIN_SUCCESS,
        payload : data
    }
)

export const getOtp = (data) => (
    {
        type : types.GET_OTP,
        payload : data
    }
)


