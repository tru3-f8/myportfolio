import React from 'react'
import PropTypes from 'prop-types'
//Allows us to look at the router that's currently on
import { useLocation } from 'react-router-dom'
import Button from './Button'

//Use destructuring ({ })
const Header = ({ title, onAdd, showAdd }) => {
    console.log(title)

    const location = useLocation()


    return (
        <header className='header'>
            {/* //Inline CSS
            <h1 style={{ color: 'red', backgroundColor: 'black' }}>{title}</h1> */}
            
            {/* //Using a variable for CSS
            <h1 style={ headingStyle }>{title}</h1> */}

            <h1>{title}</h1>
            {/* Pass the prop color, text, onClick to the Button component */}
            {/* NOTE: The "color=" and "text=" attributes can be named anything as that's the attribute that's getting pass to other components */}
            {/* The showAdd is to change the name of the button depending on the value in the App level state */}
            {/* Use location.pathname (current route) to only render the item if it matches the route on the browser */}
            {location.pathname === '/' && (<Button color={showAdd ? 'Red' : 'Green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />)}
        </header>
    )
}


//Setting default props on this component. Default props will be overwritten if a props get passed in from another component.
Header.defaultProps = {
    title: 'Task Tracker'
}

//Set the prop's type (string, numbers, etc) required
Header.propTypes = {
    title: PropTypes.string.isRequired
}

// //Using variable for CSS
// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black'
// }


export default Header

