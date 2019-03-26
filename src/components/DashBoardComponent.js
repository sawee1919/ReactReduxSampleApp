import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import { BrowserRouter, Route , Switch, Redirect} from 'react-router-dom';

class DashBoardComponent extends Component {
  constructor(props){
    super(props);
    this.customerRange = 3;
    this.state = {
      selectedProject : 0,
      rangeEnds : this.customerRange,
      rangeStarts : 0
    }
    this.displayPage = false;
    this.pagination = this.pagination.bind(this);
  }

  selectedProject(e, each){
    // this.setState({selectedProject : each.id})
    this.props.selectedProject(each.id);
  }

  componentWillUpdate(nextProps, nextState){
      if(nextProps !== this.props && nextProps.selectedProjectId !== 0 && nextProps.selectedProjectId !== this.props.selectedProjectId){
        this.displayPage = true;
      }else{
        this.displayPage = false;
      }
  }

  pagination(type){
    let size = this.props.customers.length;
    let end = this.customerRange;
    let start = 0;
    if(type === 'add'){
        end = (this.state.rangeEnds + this.customerRange) > size ? size : this.state.rangeEnds + this.customerRange;
        start = end - this.customerRange;
    }else{
        start = (this.state.rangeStarts - this.customerRange) < 0 ? 0 : this.state.rangeStarts - this.customerRange;
        end = start + this.customerRange;
    }
    this.setState({
      rangeEnds : end,
      rangeStarts : start 
    })
  }

  render() {
    let display = '';
    if(this.props.userProjects.length > 0 && this.props.selectedProjectId === 0 && this.props.selectedProjectId !== null){
      let projectsList = [];
      this.props.userProjects.map((each, index)=>{
        projectsList.push(<div key ={index} className={"project individual-project_" + index} onClick={(e)=>{this.selectedProject(e, each)}}>
            <div className="project-name">{each.projectName}</div>
             <div className="project-details">
              <div>
                <div>
                  Dept Name : 
                </div>
                <div style={{marginLeft:'4px'}}>
                  {each.projectDept}
                </div>
              </div>
            <div><div>Tech : </div><div>{each.projectTechnology}</div></div></div>
        </div>);
      });
      display = <div className="app-dashboard "> { projectsList } </div>
    }else{
      let customers = [];
      this.props.customers.slice(this.state.rangeStarts, this.state.rangeEnds).map((each, index)=>{
          customers.push(<div className="each-customer">
              <div className="image"><img src={"/images/customer_"+each.gender+".png"} /></div>
              <div className="customer-details">
                  <div className="details"><div>{each.customerName}</div><img src={"/images/namre.png"}/></div>
                  <div className="details"><div>{each.phoneNumber}</div><img src={"/images/phone.png"}/></div>
                  <div className="details"><div>{each.emailId}</div><img src={"/images/email.png"}/></div>
                  <div className="details"><div>{each.city}</div><img src={"/images/address.png"}/></div>
              </div>
          </div>)
      });
      display = <div className="app-dashboard customers">
        <div>
          <div>Project Details</div>
        </div>
        <div className="customer-main-div">
          <div>Customer List</div>
          <div>{customers}</div>
          <div className="customers-pagination"> 
            <div onClick={()=>{this.pagination('sub')}}><img src="/images/left.png" /></div>
            <div onClick={()=>{this.pagination('add')}}><img src="/images/right.png" /></div>
          </div>
        </div>
      </div>
    }
    
    let outputShown  = !this.props.loggedIn 
                      ? <Redirect to ="/" />  :  ((this.props.selectedProjectId !== 0 && this.displayPage) ? <Redirect to ={"/projects/:"+this.props.selectedProjectId} /> : display) ;
                      
    return (
      outputShown
    );
  }
}

export default DashBoardComponent;
