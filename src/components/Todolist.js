import React, { Component } from "react";
import Todocard from './Todocard';
import propTypes from 'prop-types'
import './Todolist.css'


export class Todolist extends Component {
  render() {
    //this act as foreach like a loop on the state elements 
    return this.props.todos.map((todo) => (    
      <Todocard key={todo.id} todo={todo} actioniscompleted={this.props.actioniscompleted} actionisdeleted={this.props.actionisdeleted} editingaction={this.props.editingaction}/>
    ));
  }
}

Todolist.propTypes = {
    todos:propTypes.array.isRequired,
    actioniscompleted:propTypes.func.isRequired,
    actionisdeleted:propTypes.func.isRequired,
}

export default Todolist;
