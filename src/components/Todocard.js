import React, { Component } from 'react'
import propTypes from 'prop-types'
import './Todocard.css'

export class Todocard extends Component {
    actionisdone = () =>{
        return {
            textDecoration: this.props.todo.done ? 'line-through' : 'none'
        }
    }

    render() {
        const {id,action} = this.props.todo;
        return (
            <div className="todoCard" style={this.actionisdone()}>
                <span className="title">Title</span>
                <hr/>
                <p>
                    {action}
                </p>
                <div className="mt-auto">
                <button className="isdonebutton" onClick={this.props.actioniscompleted.bind(this ,id)}>Done</button> 
              
                    <button className="editing">
                    <i className="fa fa-edit"></i>
                    </button>
                    <button className="deleting" onClick={this.props.actionisdeleted.bind(this ,id)}>
                    <i className="fa fa-trash"></i>
                    </button>
                </div>
            </div>
        )
    }
}

Todocard.propTypes = {
    todo:propTypes.object.isRequired
}

export default Todocard
