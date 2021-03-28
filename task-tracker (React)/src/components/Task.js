import React from 'react'
import { FaTimes } from 'react-icons/fa'


//Passing in the task properties from the Tasks component
const Task = ({ task, onDelete, onToggle }) => {
    // console.log(onDelete)
    return (
        //Use the ternary operation to add the class reminder to the div element if it's true
        <div className={`task ${task.reminder ? 'reminder' : '' }`} onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text}
                {/* The onDelete method was passed from App.js to "Tasks" and then to here  */}
                {/* States gets passed down, and action gets passed up */}
                <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)}/>
            </h3>
            <p>{task.day}</p>
        </div>
    )
}


export default Task
