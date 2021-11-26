import { ActionTypes } from "../constants/constants";
const initialState = {
    loading: false,
    users: [],
    err: ''
}
export const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_USERS_REQUEST: return {
            ...state, loading: true
        }
        case ActionTypes.FETCH_USERS_SUCCESS: return {
            loading:false, users: action.payload, err: '',
        }
        case ActionTypes.FETCH_USERS_FAILURE: return {
            loading:false, users: [], err: action.payload
        }
        case ActionTypes.REMOVE_USERS: return {
            loading: false, users: [], err: ''
        }
        default: return state;
    }
}