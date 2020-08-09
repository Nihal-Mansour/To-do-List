import React, { Component } from 'react'
import propTypes from 'prop-types'
import './Addaction.css'

export class Addaction extends Component {
    state ={
        action : ''
    }
    
    // event.target.name is helpful if there is many properties in the state
    onChange = (event) => this.setState({[event.target.name]:event.target.value});
    onSubmit = (event) => {
        event.preventDefault();
        this.props.addaction(this.state.action);
        this.setState({ action : ''})
    }

    render() {
        return (
           <form onSubmit={this.onSubmit}>
               <div className="leftcontent">
               <span className="formtitle">Organize Your Work and Life</span>
               </div>
               <div className="formcontent">
               <input type="text" name="action" placeholder="Add Todo ....." value = {this.state.action} onChange={this.onChange}/>
               <input type="submit" value="Submit"/>
               </div>
           </form>
        )
    }
}

Addaction.propTypes = {
    addaction:propTypes.func.isRequired
}

export default Addaction
