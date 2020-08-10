import React, { Component } from "react";
import propTypes from "prop-types";
import "./Todocard.css";

export class Todocard extends Component {
  actionisdone = () => {
    return {
      textDecoration: this.props.todo.done ? "line-through" : "none",
      boxShadow: this.props.todo.done ? "#2C423F 0 0 10px" : "",
      opacity: this.props.todo.done ? "0.7" : "1",
    };
  };
  actionbutton = () => {
    return {
      backgroundColor: this.props.todo.done ? "#2C423F" : "rgb(112, 106, 106)",
    };
  };

  render() {
    const { id, title, action } = this.props.todo;
    return (
      <div className="todoCard" style={this.actionisdone()}>
        <span className="title">{title}</span>
        <hr />
        <p>{action}</p>
        <div className="mt-auto">
          <button
            className="isdonebutton"
            style={this.actionbutton()}
            onClick={this.props.actioniscompleted.bind(this, id)}
          >
            Done
          </button>

          <button
            className="deleting"
            onClick={this.props.actionisdeleted.bind(this, id)}
          >
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </div>
    );
  }
}

Todocard.propTypes = {
  todo: propTypes.object.isRequired,
  actioniscompleted: propTypes.func.isRequired,
  actionisdeleted: propTypes.func.isRequired,
};

export default Todocard;
