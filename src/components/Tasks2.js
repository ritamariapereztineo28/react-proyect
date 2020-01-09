import React, {Component} from 'react';
import '../App.css';
// import {datos} from '../tasks.json';
// import cocoApi from '../googleApi';

class Formulario extends Component {
    constructor() {
        super();
        this.state = {
            item: '',
            title:'',
            description: '',
        }
              this.InputChange = this.InputChange.bind(this);
              this.handleInput = this.handleInput.bind(this);
        }
        handleInput(event){
            const {value, name} = event.target;
            // console.log('value',value, 'name', name)
            this.setState({
                [name]: value
            })
          }
        InputChange(i){
            i.preventDefault();
            this.props.onAddTodo(this.state);
            // this.setState({title : '', description: ''})
          }

    render() {
        // const { props: { onAddTodo }, state: { title } } = this;
        
        
            return(
            
                <div id="contenido" style={fondoForm}>
                <form onSubmit={this.InputChange} >
            <input type="text" name="title" onChange={this.handleInput} placeholder="Title of the book"></input>
            <input type="text" name="description" onChange={this.handleInput} placeholder="Description of the book"></input>    
                 <hr/>
                  <button className="btn btn-info" style={colorBtn} onClick={this.onAddTodo}> Agregar </button>
                  </form>
              </div>
            )
    }
}
    const fondoForm={
        width:"30%",
        margin:'0.8em 1em 3em 2em',
        background: "url('https://image.freepik.com/vector-gratis/ilustracion-vector-estantes-libros-coloridos_8499-7.jpg')",
        opacity:'0.9',
        }
    const colorBtn={
        background:"rgba(238, 200, 200) ",
        border:"0.1em #fff solid"
    }
export default Formulario