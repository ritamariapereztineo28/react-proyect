import React, { Component } from 'react';
import '../App.css';
// import Formulario from './Tasks2';

class Search extends Component{
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
        return (
    
        <div class = "searcher">
            <input type="text" class="form-control" id="search" placeholder="Search Photos"></input>
            <br/><button class="btn" onClick={this.SearchInformation}>Search</button>
        </div>
        )
    }
    

}

// const styleimage={
//     width:'100%',
//     height:'10em%'

// }
export default Search