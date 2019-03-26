import FooterComponent from '../components/FooterComponent';
import { connect } from 'react-redux';
// import { simpleAction } from '../actions/index';

const mapStateToProps = state => ({
  ...state
 })

 const mapDispatchToProps = dispatch => ({
  // simpleAction: () => dispatch(simpleAction())
 })

 const Footer = connect(mapStateToProps, mapDispatchToProps)(FooterComponent);
 export default Footer;