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
                localStorage.setItem('Role', response.data.data.Role);
               // localStorage.setItem("apiData", JSON.stringify({cfid:"10"}));
                dispatch(setUserDetails(response.data.data));
                // if (response.data.data.Role==="Agent") {
                // history.push('/home');
                // }else{
                    history.push('/welcome');
               // }
            }
            else{
                swal("Username Password Wrong", "error");
            }
        })
    };
}

function logout(){
    return dispatch => {
        localStorage.removeItem('auth');
        localStorage.removeItem('token');
        localStorage.removeItem('Username');
        localStorage.removeItem('Role');
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