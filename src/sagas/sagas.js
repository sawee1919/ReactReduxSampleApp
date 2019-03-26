import { call , put , takeEvery , all , takeLatest} from 'redux-saga/effects';
import axios from 'axios';


function* pullFromServer() {
    console.log("PULL FROM SERVER");
  const result = yield call(getThings, 0);
  console.log("get the rewsult", result);
      yield put({ type: "THINGS_RECEIVED", json: result});
  }
  export function getThings(){
    
    return axios({
      method: 'GET',
      url: 'http://localhost:3001/posts',
      mode: 'cors',
      withCredentials: false, 
      credentials: 'same-origin',
      headers: {
      'Access-Control-Allow-Origin': '*', 
      'Content-Type': 'application/json'
      },
      data:{},
      }).then(function (res) {
          console.log("OUTPUT DATA", res.data);
        return res.data;
      })
      
  }

function* loadProjectData() {
    yield takeLatest('LOAD_PROJECT', pullFromServer);
}




///Setup the root saga to load all the data at a time into the store from the server..

export default function* rootSaga(){
    console.log("ROOT SAGAS");
    yield all([
        loadProjectData()
        ])
}
// export default rootSaga;

