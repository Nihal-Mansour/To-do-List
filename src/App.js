import React, { Component } from 'react';
import './App.css';
import Todolist from './components/Todolist'
import Navbar from './components/Navbar'
import Addaction from './components/Addaction'
import {v4 as uuid} from 'uuid'

class App extends Component{
  state = {
    todos:[
      {
        id:uuid(),
        action:"Cleaning my room Cleaning my room Cleaning my room",
        done:false
      },
      {
        id:uuid(),
        action:"Watching a Course",
        done:true
      },
      {
        id:uuid(),
        action:"Studying",
        done:false
      }
    ]
  }
  actioniscompleted = (id) => {
   this.setState ({todos: this.state.todos.map(todo => {
     if(todo.id === id){
       todo.done = !todo.done;
     }
     return todo;
})})
}

actionisdeleted = (id) => {
  this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
}

addaction = (action) => {
  const newaction = {
    id:uuid(),
    action,
    done:false
  }
  this.setState({todos : [...this.state.todos , newaction]});
}

  render(){
  return (
    <div className="App">
      <Navbar/>
      <Todolist todos = {this.state.todos} actioniscompleted={this.actioniscompleted} actionisdeleted={this.actionisdeleted}/>
      <Addaction addaction={this.addaction}/>
    </div>
  );
}
}

export default App;
