import React from 'react'
import { useState } from 'react'


//Passing the onAdd prop using destructuring
const AddTask = ({ onAdd }) => {
    //Create component state
    const [ text, setText ] = useState('')
    const [ day, setDay ] = useState('')
    //Set default reminder value to false
    const [ reminder, setReminder ] = useState(false)


    const onSubmit = (e) => {
        e.preventDefault()

        //Validate if there are any data in the fields
        if(!text) {
            alert('Please add a task')
            return
        } 

        //Calling the onAdd function by passing in text, day, and reminder
        onAdd({ text, day, reminder })

        //Reset the component state settings
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input 
                type="text" 
                placeholder='Add Task'
                value={text}
                //Use e.target.value to grab the value that was inputed in the field
                //The onChange will be fired off when data is being entered
                onChange={(e) => setText(e.target.value)}
                  />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input 
                type="text" 
                placeholder='Add Day & Time' 
                value={day}
                 //Use e.target.value to grab the value that was inputed in the field
                //The onChange will be fired off when data is being entered
                onChange={(e) => setDay(e.currentTarget.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input 
                type="checkbox" 
                //Checked will be changed to the value in the reminder state
                checked={reminder}
                value={reminder}
                //Use e.currentTarget.checked to return a boolean value (true or false) was inputed in the field
                //The onChange will be fired off when data is being entered
                onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>
            
            {/* The input triggers the onSubmitt event handler on this form */}
            <input type="submit" value='Save Task' className='btn btn-block'/>    
        </form>
    )
}

export default AddTask
