import React, { Component } from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom'
import './App.css';
import Todolist from './components/Todolist'
import Navbar from './components/Navbar'
import Addaction from './components/Addaction'
import {v4 as uuid} from 'uuid'
import Aboutpage from './components/Aboutpage'


class App extends Component{
  state = {
    todos:[
      {
        id:uuid(),
        title:"Sports",
        action:"Cleaning my room Cleaning my room Cleaning my room",
        done:false,
      },
      {
        id:uuid(),
        title:"Education",
        action:"Watching a Course",
        done:true,
      },
      {
        id:uuid(),
        title:"Job",
        action:"Studying",
        done:false,
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

addaction = (action,title) => {
  const newaction = {
    id:uuid(),
    title,
    action,
    done:false
  }
  this.setState({todos : [...this.state.todos , newaction]});
}
  render(){  
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Route exact path="/" render={props =>( 
        <React.Fragment>
 <Todolist todos = {this.state.todos} actioniscompleted={this.actioniscompleted} actionisdeleted={this.actionisdeleted}/>
      <Addaction addaction={this.addaction}/>
        </React.Fragment>
      )} />
      <Route path="/about" component={Aboutpage} />
    </div>
    </Router>
  );
}
}



export default App;
