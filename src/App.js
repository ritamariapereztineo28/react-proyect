import React, { Component } from 'react';
import './App.css';
import Search from './components/Search.js'
import Container from './components/Container.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contacts from './components/Contacts';

class App extends Component{
  
  
  render(){
    
    return(
      <Router>
      <div className="principal">
        <nav className="navbar navbar-default" role="navigation">
          <ul className="nav navbar-nav navbar-center">
            <li>
              <Link to="/">Home</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right"> <li>
              <Link to="/about">About </Link></li>
            <li>
              <Link to="/users">Contacts
              </Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
              <Container/> 
              </Route>
          <Route path="/users">
            <Contacts/></Route>
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
      
