import React, {Component} from 'react';
import '../App.css';
// import {datos} from '../tasks.json';
// import App from '../App';
class Contenido extends Component {
    
    render() {
        // console.log("Tasks1", this.props.store )
        return(this.props.store.map((todo)=>{
            // console.log(todo)
            return(
                <div id="contenido"  >
                    <div id="perfil">
                        <img id ="foto" alt="lllll" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA4DMKiZdel262Xb2JTdGgDUHU72nRbIQODqjB8M1WblWadD6M&s"/>
                        <div id="cabecera">{todo.title}</div>
                    </div>
                 
                     <hr/>
                 
                    <div id="descripcion">{todo.description}</div>
                    <button className="btn btn-info" onClick={this.props.removeTo.bind(this, todo.item)} >Eliminar</button>
                </div>
            )
        })    
    )    
}
}

// class Contenidazo extends Component{
//     render(){
//         return(
//             this.props.store.map((todo) => {
//                 return <Contenido name={todo.name} descripcion={todo.descripcion}/>
//             })
            
//         )
//     }

// }
export default Contenido;

