import React, { Component } from 'react';
import '../styles/App.css';
// import { BrowserRouter, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import { BrowserRouter, Route , Switch, Redirect} from 'react-router-dom';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import Login from '../containers/Login';
import Dashboard from '../containers/Dashboard';


class App extends Component {
    constructor(props){
        super(props);

        props.loadThings();
    }
    componentDidMount(){
        
    }

  render() {
    
    return (
        <div className="main-app">
            <Header />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path='/projects' component={Dashboard}/>
                    <Route path='/projects/:project_id' component={Dashboard}/>
                </Switch>
            </BrowserRouter>
            <Footer /> 
        </div>
    );
  }
}

export default App;
