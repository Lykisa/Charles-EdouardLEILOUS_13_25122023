import axios from "axios";

export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"
export const GET_USER = "GET_USER"
export const EDIT_USER = "EDIT_USER"


export function Login(data) {
    return (dispatch) => {
        return axios.post("http://localhost:3001/api/v1/user/login", data).then((res) => {
          dispatch({ type: LOGIN, payload: res.data.body });
        });
      };
}

export function Logout() {
  return (dispatch) => {
    dispatch({ type: LOGOUT, payload: {}})
  }
}

export function getUser(token) {
    return (dispatch) => {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        return axios.post("http://localhost:3001/api/v1/user/profile", {}, config).then((res) => {
          dispatch({ type: GET_USER, payload: res.data.body });
        });
      };
}

export function editUser(token, data) {
  return (dispatch) => {
      const config = {
          headers: { Authorization: `Bearer ${token}` }
      };
      return axios.put("http://localhost:3001/api/v1/user/profile", data, config).then((res) => {
        dispatch({ type: EDIT_USER, payload: data });
      });
    };
}





