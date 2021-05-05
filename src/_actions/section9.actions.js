import { userService } from '../_services';
import swal from 'sweetalert';

export const createVendor=(payload)=>{
    return dispatch => {
        let apiEndpoint = 'clscorporatesubscriber/';
        userService.post(apiEndpoint, payload)
        .then((response)=>{
            dispatch(createUserInfo());
            console.log(response.data);
            if(response.data){
                swal("Record Saved Successful",);
                
               // reset();
               }
            }).catch(err =>  swal(err, "error"));
    }
}


export function createUserInfo(createid){
    return{
        type: "USER_CREATED_SUCCESSFULLY",
        payload:createid
    }
}
