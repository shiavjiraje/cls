import { userService } from '../_services';
//import { history } from '../_helpers';
//import { useForm } from 'react-hook-form';
import swal from 'sweetalert';


export const createVendorinfo=(payload)=>{
    return dispatch => {
        let apiEndpoint = 'clsregistration/';
        userService.post(apiEndpoint, payload)
        .then((response)=>{
            dispatch(createUserInfo(response.data));
            //console.log(response.data, "section-1-action");
            //localStorage.setItem("apiData", JSON.stringify(response.data));

            if(response.data){
                swal("User Created Successfully",);
                
               // reset();
               }
            }).catch(err =>  swal(err,  "error"));
    }
}

export function createUserInfo(getcfid){
    return{
        type: "USER_CREATED_SUCCESSFULLY", 
        getcfid:getcfid
    }
}