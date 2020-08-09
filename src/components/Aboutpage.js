import React from 'react'
import './Aboutpage.css'

export default function Aboutpage() {
    return (
        <div className="containerbox">
            <div className="titleabout">
                <h3 className="about">About</h3>
            </div>   
            <hr className="hrline"/>
            <div className="aboutcontent">
            <p className="aboutmytodolist">
                This To-do-List allows you to organize your time and write down your tasks, and if a task
                finished you can mark it as done and you can also delete it.
            </p>
            </div>
        </div>
    )
}
