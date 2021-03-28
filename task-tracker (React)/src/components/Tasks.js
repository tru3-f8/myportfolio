import React, { Fragment } from 'react'
// //Import useState module for state management
// import { useState} from 'react'
import Task from './Task'



const Tasks = ({ tasks, onDelete, onToggle }) => {
//     //To use state in a function you will need to use the useState method
//     //Name the state in the function "tasks"
//     //Create an update task method named "setTasks"
//     const [ tasks, setTasks] = useState([
//         {
//         "id": 1,
//         "text": "Doctors Appointment",
//         "day": "Feb 5th at 2:30pm",
//         "reminder": true
//         },
//         {
//         "id": 2,
//         "text": "Meeting at School",
//         "day": "Feb 6th at 1:30pm",
//         "reminder": true
//         }
// ])

    return (
        <Fragment>
            {/* Loops through the array to output the text attribute */}
            {/* When looping through an array, you need to assign a key ID for each element */}
            {/* {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))} */}

            {tasks.map((task) => (
            //Create a component to pass the task properties to the "Task" component
            //The "key=" is used for assigning an ID to the props that are being passed to the "Task" component
            //Passing task, onDelete, and onToggle to the "Task" component
            <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </Fragment>
    )
}


export default Tasks
