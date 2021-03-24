import { userService } from '../_services/';
import { history } from '../_helpers';
import swal from 'sweetalert';

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
            console.log(response,"Login Response");
            if (response.data.status===true) {
                localStorage.setItem('token', response.data.data.token);
                localStorage.setItem('auth', response.data.data.auth);
                localStorage.setItem('Username', response.data.data.Username);
               // localStorage.setItem("apiData", JSON.stringify({cfid:"10"}));
                dispatch(setUserDetails(response.data.data));
                history.push('/welcome');
            }
            else{
                swal("Username Password Wrong", "You clicked the button!", "error");
            }
        })
    };
}

function logout(){
    return dispatch => {
        localStorage.removeItem('auth');
        localStorage.removeItem('token');
        localStorage.removeItem('Username');
        //localStorage.removeItem('apiData');
        dispatch(logoutUser());
        history.push('/');
    }
}

export function setUserDetails(user){
    return{
        type: "LOGIN_SUCCESS",
        auth: user.auth,
        token: user.token,
        user:user
    }
}

export function logoutUser(){
    return{
        type: "LOGOUT_SUCCESS",
        auth: false,
        token: ''
    }
}