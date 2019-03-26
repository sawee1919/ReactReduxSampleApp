import { fromJS , Map} from "immutable";
import { stat } from "fs";

const initialState = fromJS({
    "posts" : [],
    "loggedIn" : false,
    "loggedUser" : null,
    "projects" :[],
    "customers" : [],
    "user" : [],
    "selectedProject" : 0
});

export default function localStore(state = initialState, action){
    switch (action.type) {
        
        case "LOAD_PROJECT":
        
        return state;

        case "USER_LOGIN_SUCCESS" :
            state = state.setIn(['loggedIn'], action.data.status);
            if(action.data.status){
               state = state.setIn(['user'], action.data.userData);
               state = state.setIn(['projects'], action.data.userProjects);
               state = state.setIn(['customers'], action.data.customers);
            }else{

            }
        return state;

        case "SELECTED_PROJECT":
            state = state.setIn(['selectedProject'], action.data);
        return state;

        case "THINGS_RECEIVED":
        // console.log("State", action);
        // state = state.setIn(['posts'], action.json);
        // console.log("State", state.toJS());
        return state;

        default:
        return state;
    }
}
