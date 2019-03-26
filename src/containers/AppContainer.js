import App from '../components/App';
import { connect } from 'react-redux';
import { loadThings, thingsReceived } from '../actions/index';

const mapStateToProps = state => ({
  ///thingsReceived : state.localStore,
  loggedIn : state.localStore.get('loggedIn')
 })

 const mapDispatchToProps = dispatch => ({
  // simpleAction: () => dispatch(simpleAction({type : 'FETCH_PROJECT'}))
    loadThings : () => dispatch(loadThings({type : 'LOAD_PROJECT'})),
    // loadThings : () => dispatch(loadThings())
 })

 const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
 export default AppContainer;