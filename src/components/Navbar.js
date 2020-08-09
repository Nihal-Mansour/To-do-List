import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar(){
    return(
<nav className="navbar">
    <span className="Todolistheader">My TodoList </span>
    <span className="Todolistlinks">
    <Link style={linkstyle} to="/">Home</Link> 
    <Link style={linkstyle} to="/about">About</Link>
    </span>
</nav>
    )
}
const linkstyle={
    color:'white',
    marginLeft:'10px'
}

export default Navbar;