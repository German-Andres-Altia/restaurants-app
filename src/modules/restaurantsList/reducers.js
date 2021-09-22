import {RESTAURANTES_REQUEST, RESTAURANTES_RESPONSE} from './actions';

const initialState = {
    restaurantes: {
        start: 0,
        limit: 0,
        count: 0,
        results: [],
    },
    loading: false,
    error: null
};

const menus = (state = initialState, action) => {
    switch (action.type) {
        case RESTAURANTES_REQUEST:
            return {
                ...state,
                loading: true
            };
        case RESTAURANTES_RESPONSE:
            return {
                ...state,
                loading: false,
                restaurantes: action.restaurantes
            };
        default:
            return state;
    }
};

export default menus;
