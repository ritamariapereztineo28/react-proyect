import React, { Component } from 'react';
// import {datos} from './tasks.json';
import './App.css';
import Formulario from './components/Tasks2';
import Contenido from './components/Tasks1';
import Cabecera from './components/Cabecera';
// import cocoApi from './googleApi';

class App extends Component {
    constructor(){
      super();
      
      this.state = {
        
        todo:
        [
          {
            title: "Matematica",
            description:"Nada",
            item: 0
          },
          {
            title: "Literatura",
            description:"Nada",
            item: 1
          }
          // cocoApi("Don Quijote")
        ]
      }
      this.AddInformation = this.AddInformation.bind(this);
    }
    // export default cocoApi=(libro) => {
    // const libro = this.props.store123.title
    // console.log(libro);
//     fetch(`https://www.googleapis.com/books/v1/volumes?q=${libro}`)
//     .then(response => response.json())
//     .then((data) => {
//     console.log(data.items[0].volumeInfo);
// });
// }



    removeTodo = (index) => {
      const newTodo = this.state.todo.filter(e => e.item !== index);
      // console.log(index)
      this.setState({
        todo: newTodo
      });
  }
  // componentDidMount(){
  //   cocoApi(this.props.title)
  //   .them((data) => {
  //     console.log(data.items[0].volumeInfo)
  //   })
  // }
  

    AddInformation(e){
      // const {title, description} = e.target
      // console.log(`Tu maldita madre ${title}`)
      this.setState({
        todo: [
          ...this.state.todo,e
          // {
          //   'title': title,
          //   'authors': authors
          // }
         ]

      }
      )
    }
    // componentDidMount() {
    //   cocoApi(this.state.todo.title)
    //   .then((data) => {
    //       this.AddInformation(data.items[0].volumeInfo)
          
    //     })
    //   .catch(err => {
    //       console.warn(err);
    //     })
    // }

  
    render() {
      // if(!this.state.todo[0]) {
      //   return (
      //     <p>Loading...</p>
      //   )
      // }
      // else {
        // console.log(this.state.todo[0].title)
        // const {title, authors} = this.state.todo[0]
        return(
        
          <body>
            <Cabecera/>
            <Formulario store123={this.state.todo} onAddTodo={this.AddInformation}/>
            <Contenido  store={this.state.todo} removeTo={this.removeTodo}/>
            </body>
          
        )
      }
      
     }
  
    export default App;
      
