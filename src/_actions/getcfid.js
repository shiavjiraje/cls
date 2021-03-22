import { userService } from '../_services';
//import { history } from '../_helpers';
//import { useForm } from 'react-hook-form';
//import swal from 'sweetalert';


export const getCfid=(payload)=>{
    return dispatch => {
        let apiEndpoint = 'clscfid';
        userService.get(apiEndpoint, payload)
        .then((response)=>{
            alert("working")
            //dispatch(createUserInfo(response.data));
            console.log(response.data, "getcfid-action");
            });
    }
}

export function createUserInfo(getcfid){
    return{
        type: "USER_CREATED_SUCCESSFULLY", 
        getcfid:getcfid
    }
}