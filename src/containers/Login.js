import LoginComponent from '../components/LoginComponent';
import { connect } from 'react-redux';
import { loginSuccess } from '../actions/index';

const mapStateToProps = state => ({
  loggedIn : state.localStore.get('loggedIn')
 })

 const mapDispatchToProps = dispatch => ({
  // simpleAction: () => dispatch(simpleAction())
    loginSuccess : (data) => dispatch(loginSuccess(data))
 })

 const Login = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
 export default Login;