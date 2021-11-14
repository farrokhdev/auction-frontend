import types from './all.types';

// ----- Register --------


export const clearStorageAll = () => (
    {
        type : types.CLEAR_STORAGE_ALL,
    }
)


export const openDashboard = (payload)=>(
    {
        type : types.OPEN_DASHBOARD,
        payload
    }
)
// CHANGE_LANGUAGE
 
export const changeLanguage = (payload)=>(
    {
        type : types.CHANGE_LANGUAGE,
        payload
    }
)