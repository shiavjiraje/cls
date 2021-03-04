import { userService } from '../_services';
import swal from 'sweetalert';

export const createVendor=(payload)=>{
    return dispatch => {
        let apiEndpoint = 'clssharecapital/';
        userService.post(apiEndpoint, payload)
        .then((response)=>{
            dispatch(createUserInfo());
            console.log(response.data);
            if(response.data){
                swal("Record Saved Successful", "You clicked the button!", "success");
                
               // reset();
               }
            }).catch(err =>  swal(err, "You clicked the button!", "error"));
    }
}


export function createUserInfo(createid){
    return{
        type: "USER_CREATED_SUCCESSFULLY",
        payload:createid
    }
}
