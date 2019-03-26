import DashBoardComponent from '../components/DashBoardComponent';
import { connect } from 'react-redux';
import { selectedProject } from '../actions/index';

const mapStateToProps = state => ({
  loggedIn : state.localStore.get('loggedIn'),
  userData : state.localStore.get('user'),
  userProjects : state.localStore.get('projects'),
  selectedProjectId : state.localStore.get('selectedProject'),
  customers : state.localStore.get('customers')
 })

 const mapDispatchToProps = dispatch => ({
  selectedProject : (data) => dispatch(selectedProject(data))
 })

 const Dashboard = connect(mapStateToProps, mapDispatchToProps)(DashBoardComponent);
 export default Dashboard;