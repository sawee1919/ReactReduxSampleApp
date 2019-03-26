import { combineReducers } from 'redux';
import localStore from './localStore';
// const rootReducer = () =>combineReducers({
//     localStore
// });

// export default rootReducer;

const rootReducer =  combineReducers({
    localStore
});

export default rootReducer;