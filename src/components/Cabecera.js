import React, { Component } from 'react';
import '../App.css';
// import Formulario from './Tasks2';

class Cabecera extends Component{

    render(){
        return (
    
        <div class = "searcher">
            <input type="text" id="search" placeholder="Search Photos"></input>
            <button onClick={this.SearchInformation}>Search</button>
        </div>
        )
    }
    

}

// const styleimage={
//     width:'100%',
//     height:'10em%'

// }
export default Cabecera