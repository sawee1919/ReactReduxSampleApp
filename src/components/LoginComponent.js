import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import loginAction from '../helpers/helpers.js';
import { BrowserRouter, Route , Switch, Redirect} from 'react-router-dom';

class LoginComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName : "",
      password : ""
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);

  }

  handleSubmit(e){
      if(this.state.userName !== '' && this.state.userName !== undefined && this.state.password !== undefined && this.state.password !== '' ){
          loginAction({callUrl : 'users',type : 'login', params : {username : this.state.userName, password : this.state.password }}).then((output)=>{
            if(output.length > 0 && output !== undefined){
                //Here code is not proper calling function inside another 
                loginAction({callUrl : 'projects',type : 'userData', params : {userId : output[0].id }}).then((result)=>{
                  loginAction({callUrl : 'customers',type : 'customersData'}).then((customersData)=>{
                    
                    this.props.loginSuccess({status : true, message : 'Logged successfully.', userData : output[0], userProjects : result, customers :customersData});

                  });
                });
            }
            else{
                this.props.loginSuccess({status : false, message : 'Invalid login.'});
                e.preventDefault();    
            }
          });
          e.preventDefault();
      }else{
        e.preventDefault();
      }
  }
  
  onChangeInput(e, inputName){
    if(inputName === 'username'){
        this.setState({userName : e.target.value});
    }else{
        this.setState({password : e.target.value});
    }
  }

  render() {
    let pageRedirect = this.props.loggedIn 
    ?  
      <Redirect to="/projects" /> 
    : 
    
      <div className="app-login">
        {/* <div className="login-form"> */}
        <form onSubmit={this.handleSubmit} className="login-form">
          <div className="login-name"> Login </div>
          <div>
            <input type="text" placeholder="Username" value={this.state.userName} onChange={(e) => { this.onChangeInput(e, 'username') }} />
          </div>
          <div>
            <input type="text" placeholder="Password" value={this.state.password} onChange={(e) => { this.onChangeInput(e, 'password') }} />
          </div>
          <div className="login-button">
            <input type="submit" value="Login" style={{ border: 'none' }} />
          </div>
        </form>
        {/* </div> */}
        <div className="social-login">
          <div className="register-button">
            Register
      </div>
        </div>
      </div>


    return (
      pageRedirect  
    );
  }
}

export default LoginComponent;
