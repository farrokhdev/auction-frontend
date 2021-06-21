import types from './panel.types';

const initial_state = {
    drawer: true,
    activeNavDrawer: "p1",
    clickedNavDrawer: false,
    focusBankInfo : false,
}

const panelReducer = (state = initial_state, {type, payload}) => {
    switch (type) {
        case types.DRAWERTOGGLE:
            return {
                ...state,
                drawer: !state.drawer
            }

        case types.CLICK_NAV_DRAWER_TOGGLER:
            return {
                ...state,
                clickedNavDrawer: !state.clickedNavDrawer

            }

        case types.ACTIVE_NAV_DRAWER_TOGGLER:
            return {
                ...state,

                // activeNavDrawer : ( !state.clickedNavDrawer  ?   !state.activeNavDrawer   :
                // state.activeNavDrawer ) ,

            }

        case types.ACTIVE_NAV_DRAWER:
            return {
                ...state,
                activeNavDrawer: payload
            }

        case types.CLEAR_ACTIVE_DRAWER:
            return {
                ...state,
                activeNavDrawer: ""
            }

        case types.FOCUS_BANK_INFO : 
            return {
                ...state,
                focusBankInfo : true,
            }
        case types.UNFOCUS_BANK_INFO : 
            return {
                ...state,
                focusBankInfo : false,
            }

        default:
            return state;
    }
}

export default panelReducer;