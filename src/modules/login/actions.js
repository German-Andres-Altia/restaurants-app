import {Config} from "../../config/Config";


export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_RESPONSE = 'USER_LOGIN_RESPONSE';

export const loginUser = (login, password) => {
    return dispatch => {
        dispatch({
            type: USER_LOGIN_REQUEST
        })


    const body = {
        login,
        password
    }

    fetch(`${Config.backendBaseUrl}/login`,
        {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .then(userInfo =>
            dispatch({
                type: USER_LOGIN_RESPONSE,
                userInfo
            })
        )
    }
}
