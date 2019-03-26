import HeaderComponent from '../components/HeaderComponent';
import { connect } from 'react-redux';
import { simpleAction } from '../actions/index';

const mapStateToProps = state => ({
  ...state
 })

 const mapDispatchToProps = dispatch => ({
  // simpleAction: () => dispatch(simpleAction())
 })

 const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
 export default Header;