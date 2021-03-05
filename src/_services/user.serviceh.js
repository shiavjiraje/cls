import axios from 'axios';
import config from '../config/config';


export const userService = {
    get,
    post,
    put,
    deleteDetail
};
function request(endpoint,method,data,headers={},params=''){
    var methodparams={
        method: method,
        url: config.baseUrl+endpoint
      }
      if (method === 'POST') {
        methodparams.data = data
      }
      if (params !== '') {
          methodparams.url += `?${params}`;
      }
      if (Object.keys(headers).length > 0) {
        methodparams.headers = headers
      }
    return axios(methodparams)
}
function get(apiEndpoint){
    return axios.get(config.baseUrl+apiEndpoint, getOptions()).then((response)=>{
        return response;
    }).catch((err)=>{
        console.log("Error in response");
        console.log(err);
    })
}

function post(apiEndpoint, payload){
    let headers= { "Content-Type": "multipart/form-data" }
    return request(apiEndpoint, 'POST', payload, headers)
    // return axios.post(config.baseUrl+apiEndpoint, payload, getOptions())
    // .then((response)=>{
    //     return response;
    // }).catch((err)=>{
    //     console.log(err);
    // })
}

function put(apiEndpoint, payload){
    return axios.put(config.baseUrl+apiEndpoint, payload, getOptions()).then((response)=>{
        return response;
    }).catch((err)=>{
        console.log(err);
    })
}

function deleteDetail(apiEndpoint){
    return axios.delete(config.baseUrl+apiEndpoint, getOptions()).then((response)=>{
        return response;
    }).catch((err)=>{
        console.log(err);
    })
}

function getOptions(){
    let options = {}; 
    if(localStorage.getItem('token')){
        options.headers = { 'x-access-token': localStorage.getItem('token') };
    }
    return options;
}