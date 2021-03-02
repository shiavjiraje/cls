import { userService } from '../_services/';
import { history } from '../_helpers';

export const userActions = {
    login,
    logout
};

function login(username, password){
    return dispatch => {
        let apiEndpoint = 'clslogin';
        let payload = {
            username: username,
            password: password
        }
        userService.post(apiEndpoint, payload)
        .then((response)=>{
            console.log(response.data.status);
            if (response.data.status===true) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('auth', response.data.auth);
                dispatch(setUserDetails(response.data.data));
                history.push('/home');
            }
        })
    };
}

function logout(){
    return dispatch => {
        localStorage.removeItem('auth');
        localStorage.removeItem('token');
        dispatch(logoutUser());
        history.push('/');
    }
}

export function setUserDetails(user){
    return{
        type: "LOGIN_SUCCESS",
        auth: user.auth,
        token: user.token
    }
}

export function logoutUser(){
    return{
        type: "LOGOUT_SUCCESS",
        auth: false,
        token: ''
    }
}