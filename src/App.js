import React, { Component } from 'react';
// import {datos} from './tasks.json';
import './App.css';
import './Api.js';
// import Routers from './Routers';
import Cabecera from './components/Cabecera.js'
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
  SearchInformation(){
    // let clientId = '96b6b151da73dca0f9a6b846ce863cae14d22f2f7433084ba441ca60e5f8824c'
    // let wtf = "flower"
    let url= "https://api.unsplash.com/search/photos/?client_id=96b6b151da73dca0f9a6b846ce863cae14d22f2f7433084ba441ca60e5f8824c&query=flower";
    
    fetch(url)
    .then(function(data){
        console.log(data.json());
    })
    

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
            hhhh
          </Route>
          <Route path="/topics">
            hhhh
          </Route>
          <Route path="/">
            <Cabecera />
          </Route>
        </Switch>

      </div>
      </Router>

       
     
      
    )
  }

}

    export default App;
      
