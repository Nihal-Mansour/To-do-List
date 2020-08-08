import React, { Component } from 'react';
import './App.css';
import Todolist from './components/Todolist'
import Navbar from './components/Navbar'

class App extends Component{
  state = {
    todos:[
      {
        id:1,
        action:"Cleaning my room Cleaning my room Cleaning my room",
        done:false
      },
      {
        id:2,
        action:"Watching a Course",
        done:true
      },
      {
        id:3,
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

  render(){
  return (
    <div className="App">
      <Navbar/>
      <Todolist todos = {this.state.todos} actioniscompleted={this.actioniscompleted} actionisdeleted={this.actionisdeleted}/>
    </div>
  );
}
}

export default App;
