import { userService } from '../_services';
import { history } from '../_helpers';
//import { useForm } from 'react-hook-form';
import swal from 'sweetalert';


export const createVendorinfo=(payload)=>{
    return dispatch => {
        let apiEndpoint = 'clsagree/';
        userService.post(apiEndpoint, payload)
        .then((response)=>{
            dispatch(createUserInfo(response.data));
            console.log(response.data.cfid);
            localStorage.setItem("apiData", JSON.stringify(response.data));
            if(response.data){
                swal("Record Saved Successful", "You clicked the button!", "success");
                
               // reset();
               }
            }).catch(err =>  swal(err, "You clicked the button!", "error"));
    }
}

export function createUserInfo(getcfid){
    return{
        type: "USER_CREATED_SUCCESSFULLY", 
        getcfid:getcfid
    }
}