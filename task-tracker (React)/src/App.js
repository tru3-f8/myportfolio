//Import useState module for state management
//Import useEffect module for rendering data on the browser when is loaded
import { useState, useEffect, Fragment } from 'react'
//BrowserRouter is the React router but giving it an alias of Router to it
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import './App.css';


function App() {
  //This is to toggle on and off the task form
  const [showAddTask, setShowAddTask] = useState(false)

  //Name the state in the function "tasks"
  //Create an update task method named "setTasks"
  //Having the state in App.js makes it global to other components
  const [ tasks, setTasks] = useState([])

  //The useEffect is setup with an arrow function
  //Use useEffect to setup async & await
  //Since this is an asynchronous function this can be ran before fetchTasks since it doesn't need stop running while waiting for its data
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, []) //It's a useEffect dependency that will re-run the function if the state changes. In this case, the function will re-run if the objects from the API changes. If there are no dependencies, then set it to an empty array 

  //Fetch tasks from API
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  } 

  //Fetch task
  //This is needed for the reminder to be updated on the JSON server, so it will stick even after a refresh
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  } 

    //Add Task
    //Use math random to create a random ID number
    //The newTask is to add an ID to the new object
    //Use setTasks to add the new object to the array
    const addTask = async (task) => {
      const res = await fetch('http://localhost:5000/tasks', {
        method: 'POST', //Add new object
        headers: {
          'Content-type': 'application/json' //Type of content
        },
        body: JSON.stringify(task) //Convert to JSON format
      })

      const data = await res.json() //Return data as JSON

      setTasks([...tasks, data]) //Copy array from tasks, and then add the new object to it

      // const id = Math.floor(Math.random() * 1000) + 1
      // const newTask = { id, ...task }
      // setTasks([...tasks, newTask])
      
    }

    //Delete task
    //You're able to pass in any of the properties as an argument to methods within this function since they are state properties
    //The await fetch does not need to be in variable since we do not need to get data back
    const deleteTask = async (id) => {
      await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'DELETE', //Delete the object in the array
      })

      setTasks(tasks.filter((task) => task.id !== id)) //Passing in the ID of the object, and returns a new array with objects that doesn't match the given ID
      //This is needed so it can remove the object after has been deleted, or else you will need to refresh the browser for it to disappear
    }

    //Toggle reminder
    //Passing in the ID of the object, and if the task.id matches with the given ID then set the reminder to the opposite with !task.reminder or else return the task object
    // Using a map operator because we're changing the objects in the array and returning a new array with the new results
    const toggleReminder = async (id) => {
      const taskToToggle = await fetchTask(id) //Getting the task by calling the fetchTask function and passing the ID
      const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder } //Updating the task

      const res = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updTask)
      }) //Put data in the array

      const data = await res.json()

      setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task)) //Change from !task.reminder to data.reminder which is the current value in the array. This is to grab the updated information from the JSON server and updated on the UI
    }

  return (
    <Router>
      <div className="container">
        {/* Change the setShowAddTask to the opposite boolean value */}
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />

        {/* Create a route with exact (the path on the url needs to be exactly the same), and also using render as opposed to component since the are Javascript added on the components. Render uses an arrow function */}
        <Route path='/' exact render={(props) => (
        <Fragment>
           
        {/* Pass the addTask method to the addTask component */}
        {/* The && is shorthand for the ternary operator if true to display the form else do nothing */}
        {/* The showAdd is pass in the current value of showAddTask */}
        {showAddTask && <AddTask onAdd={addTask} />}


        {/* Pass the array "tasks" to the "Tasks" component as a prop */}
        {/* Pass the deleteTask method to the "Tasks" component */}
        {/* Pass the toggleReminder method to the "Tasks" component */}
        {/* Use ternary to display the task if the length of the array is greater than 0, or else return "No Task To Show" */}
        {/* NOTE: The "tasks=" attribute can be named anything as that's the attribute that's getting pass to other components */}

        {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        ) : (
          'No Task To Show'
        )}

        </Fragment>
        )} />

        {/* Create a route for About component */}
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
