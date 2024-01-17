import { EDIT_USER, GET_USER, LOGIN, LOGOUT } from "../actions/userActions";

const initialState = {};

function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return action.payload;
        case LOGOUT:
            return action.payload;
        case GET_USER:
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
              };
        case EDIT_USER:
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
              };
        default: return state;
    }
}

export default userReducer