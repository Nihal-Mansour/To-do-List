import React, { Component } from "react";
import propTypes from "prop-types";
import "./Addaction.css";

export class Addaction extends Component {
  state = {
    action: "",
    title:""
  };

  // event.target.name is helpful if there is many properties in the state
  onChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });
  onSubmit = (event) => {
    event.preventDefault();
    this.props.addaction(this.state.action , this.state.title);
    this.setState({ action: "" });
    this.setState({ title: "" });
  };

  render() {
    return (
      <div className="container">
        <div className="box1">
          <span className="formtitle">Organize Your Work and Life</span>
        </div>
        <div className="box2">
          <form onSubmit={this.onSubmit}>
          <h4 className="nameinputfield">Add a title for your task</h4>
            <div className="input-field">
            <input
              type="text"
              name="title"
              autocomplete="off"
              placeholder="Add Title ....."
              required=""
              value={this.state.title}
              onChange={this.onChange}
            />
            <span></span>
            </div>
            
            <h4 className="nameinputfield">Add a description for your task</h4>
            <div className="input-field">
            <input
              type="text"
              name="action"
              autocomplete="off"
              placeholder="Add Todo ....."
              required=""
              value={this.state.action}
              onChange={this.onChange}
            />
            <span></span>
            </div>

            <button className="submitbtn">
            <input type="submit" value="Add" id="submitinputfield"/>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

Addaction.propTypes = {
  addaction: propTypes.func.isRequired,
};

export default Addaction;
