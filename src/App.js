import React, { Component } from 'react';
// import {datos} from './tasks.json';
import './App.css';
import './Api.js';
// import Routers from './Routers';
import Search from './components/Search.js'
import Container from './components/Container.js'
// import cocoApi from './googleApi';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component{
  
  
  render(){
    
    return(
      <Router>
      <div>
        <nav className="navbar navbar-default" role="navigation">
          <ul className="nav navbar-nav navbar-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            </ul>
            <ul className="nav navbar-nav navbar-right"> <li>
              <Link to="/about">About </Link>
            </li>
            <li>
              <Link to="/users">Contacts
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
          <Container/>
          </Route>
          <Route path="/topics">
          jsjsjs
          </Route>
          <Route path="/">
            <Search />
          </Route>
        </Switch>

      </div>
      </Router>

       
     
      
    )
  }

}

    export default App;
      
