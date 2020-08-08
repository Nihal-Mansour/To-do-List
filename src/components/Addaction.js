import React, { Component } from 'react'

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
               <input type="text" name="action" placeholder="Add Todo ....." value = {this.state.action} onChange={this.onChange}/>
               <input type="submit" value="Submit"/>
           </form>
        )
    }
}

export default Addaction
