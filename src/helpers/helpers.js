import axios from 'axios';

const loginAction = (data) => {
    let urlToRun = 'http://localhost:3001/'+data.callUrl+'/';

    return axios({
        method: 'GET',
        url: urlToRun,
        mode: 'cors',
        withCredentials: false, 
        credentials: 'same-origin',
        headers: {
        'Access-Control-Allow-Origin': '*', 
        'Content-Type': 'application/json'
        },
        data:{},
        params : data.params,
        }).then(function (res) {
          return res.data;
        })  
}

export default loginAction;

