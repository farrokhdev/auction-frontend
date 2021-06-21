import types from './auth.types';

const initial_state = {
    favorite : false,
    pending : true,
    // basketCard : [],
    error: {},
}

const estateReducer = (state = initial_state , {type , payload})=> {
    switch(type){
        // case types.LOGIN_START:
        // case Ttypes.ESTATE._START:
        //     console.log('ESTATE_START')
        //     return {
        //         ...state , 
        //         pending : true,
        //         error : null
        //     }
        // case types.LOGIN_SUCCESS:
        // case types.ESTATE.SUCCESS:
        //     console.log('ESTATE_SUCCESS')
        //     return {
        //         ...state ,
        //         results: {...state.results },
        //         pending : false,
        //         error: state.error
        //     }
        // case types.LOGIN_ERROR:
        // case types.ESTATE_ERROR:
        //     console.log('ESTATE_ERROR')
        //     return {
        //         ...state , 
        //         pending : false,
        //         error : payload.error
        //     }


        case Ttypes.IS_ESTATE_FAVORITE:
            console.log('IS_ESTATE_FAVORITE')
            return {
                ...state , 
                pending : true,
                data: { ...state.data , ...payload },
                is_favorite_estate : true
            }

        default :
        return state;
    }
}

export default estateReducer;