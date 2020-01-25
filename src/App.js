import React, { Component } from 'react';
// import {datos} from './tasks.json';
import './App.css';
import './Api.js';
// import Routers from './Routers';
import Search from './components/Search.js'
// import cocoApi from './googleApi';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component{
  constructor(){
    super();
  
  this.state = {
    
    
  }
  }
  
  render(){
    
    return(
      
      <Router>
      <div>
        <nav class="navbar navbar-default" role="navigation">
          <ul class="nav navbar-nav navbar-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            </ul>
            <ul class="nav navbar-nav navbar-right"> <li>
              <Link to="/about">About </Link>
            </li>
            <li>
              <Link to="/users">Contactos</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            
          </Route>
          <Route path="/topics">
            hhhh
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
      
