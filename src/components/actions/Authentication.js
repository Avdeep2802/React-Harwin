import axios from 'axios';
import React from 'react';

// export function signup_action(userdata){
//   return  axios.post('http://127.0.0.1:8080/api', userdata);
//
// }


export function signup_action(userdata){
   return (dispatch) => {
     axios({
            method: 'post',
            url: 'http://127.0.0.1:8080/api',
            data: userdata,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
          })
          .then(function (response) {
              //handle success
              console.log(response);
          })
          .catch(function (response) {
              //handle error
              console.log(response);
          });
      }

}
