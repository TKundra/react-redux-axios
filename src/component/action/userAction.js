import { ActionTypes } from "../constants/constants";
import axios from 'axios';

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                const users = response.data;
                dispatch(fetchUsersSuccess(users));
            })
            .catch((err) => dispatch(fetchUsersFailure(err.message)))
    }
}

export const fetchUsersRequest = () => {
    return {
        type: ActionTypes.FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = (users) => {
    return {
        type: ActionTypes.FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = (err) => {
    return {
        type: ActionTypes.FETCH_USERS_FAILURE,
        payload: err
    }
}

export const removeUsers = () => {
    return {
        type: ActionTypes.REMOVE_USERS,
    }
}
