import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './containers/AppContainer';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
// import thunk from 'redux-thunk';
import rootReducer from './reducers/rootStore';
import { Provider } from 'react-redux'

import rootSaga  from './sagas/sagas';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);
////Root Path for the react page...
//1. setup the redux platform from overall app DOM manipulations if any changes in redux store..
//2.

ReactDOM.render(
    <Provider store={store}>
    <AppContainer />
   </Provider>, 
document.getElementById('root'));

serviceWorker.unregister();
