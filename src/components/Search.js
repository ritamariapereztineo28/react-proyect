import React, { Component } from 'react';
import '../App.css';

class Search extends Component{
   
    SearchInformation(){
        let name = document.getElementById("search").value;  
        let url= "https://api.unsplash.com/search/photos/?client_id=96b6b151da73dca0f9a6b846ce863cae14d22f2f7433084ba441ca60e5f8824c&query="+name;
        
        fetch(url)
        .then(function(data){
            return (data.json());
        })
        .then(function(data){
            console.log(data) 
        })
    }
    
    render(){
        return (
            <div>
        <div className = "searcher">
            <input type="text" className="form-control" id="search" onChange={this.handleInput} placeholder="Search Photos" name="image"></input>
            <br/>
            <center><button className="btn" onClick={this.SearchInformation}>Search</button>
        </center></div>

        </div>
        )
    }
}

export default Search