import React, { Component } from 'react';
import '../App.css';

class Container extends Component{
    constructor() {
        super();
        this.state = {
            todo:[
                {
                    imgs: 'https://pm1.narvii.com/6804/f8b3432ad4bd523532b8d50faf18495fa2e7729cv2_hq.jpg',
                    name:'Rita Pérez',
                    description:'Fotógrafo, Cantante, Modelo'
                },
                {
                    imgs: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHD0BLEU9qc5RZsq94zlSf7dLYEh5bLrAXsSAnFbh7o3QBg0Loug&s',
                    name:'Maicol',
                    description:'Fotógrafo, Cantante, Modelo'
                },
                
                {
                    imgs: 'https://www.doctorhair.es/wp-content/uploads/2015/07/alberto-guillen.jpg',
                    name:'Cristopher',
                    description:'Fotógrafo, Cantante, Modelo'
                }
                ,
                {
                    imgs: 'https://www.doctorhair.es/wp-content/uploads/2015/07/alberto-guillen.jpg',
                    name:'Cristopher',
                    description:'Fotógrafo, Cantante, Modelo'
                }
            ]
            
            
        }  
    }
    
    render(){
        return(this.state.todo.map((i)=>{
            return(
                <div id = "container">
                <img id="image" src={i.imgs}/>
            <div className="name">{i.name}</div>
            <div className="description">{i.description}</div>
            </div>
            )
            
        })
            
        )
    }
}
export default Container;
