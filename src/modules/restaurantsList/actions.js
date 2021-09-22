import {Config} from "../../config/Config";

export const RESTAURANTES_REQUEST = 'RESTAURANTES_REQUEST';
export const RESTAURANTES_RESPONSE = 'RESTAURANTES_RESPONSE';

export const getRestaurantes = (start, limit) => {
    return dispatch => {
        dispatch({
            type: RESTAURANTES_REQUEST
        })

        fetch(`${Config.backendBaseUrl}/menus?start=${start}&limit=${limit}`)
            .then(response => response.json())
            .then(restaurantes => dispatch({
                    type: RESTAURANTES_RESPONSE,
                    restaurantes: restaurantes
                })
            )
    }
}


