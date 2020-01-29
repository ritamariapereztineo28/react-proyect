import React, { Component } from 'react';
import '../App.css';
// import Contacts from './Contacts';
import Body from './Body';

class Search extends Component{
   constructor(){
       super();
        this.name = "";
       this.state={
           images: []
       }
       this.Value = this.Value.bind(this)
       this.SearchInformation = this.SearchInformation.bind(this)
   }
    SearchInformation(){
        let url= `https://api.unsplash.com/search/photos/?client_id=96b6b151da73dca0f9a6b846ce863cae14d22f2f7433084ba441ca60e5f8824c&query=${this.name}`;
        
        fetch(url)
        .then(data=>{
            return data.json();
        })
        .then(jsonResponse=>{
            console.log(jsonResponse);
            this.setState({
                images: jsonResponse.results
            })
        })
    }
    Value(i){
        this.name = i.target.value;
    }
    image(){
        return this.state.images.map(image=>{
            return <div id="url-image"><center><img src={image.urls.small} key={image.id}/></center></div>
        })
    }
    render(){
        return (
            <div>
        <div className = "searcher">
            <input type="text" className="form-control" id="search" onChange={this.Value} placeholder="Search Photos" name="image"></input>
            <br/>
            <center><button className="btn" onClick={this.SearchInformation}>Search</button>
        </center></div>
                {/* Agregando el cuerpo */}
                <div className="panel panel-default">
                    <div className="panel-body">
                    <div>{this.image()}</div>
                </div>
            </div>  
        </div>
        )
    }
}

export default Search