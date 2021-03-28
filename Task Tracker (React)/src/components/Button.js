import React from 'react'
import PropTypes from 'prop-types'

//Destructure ({ }) color and text
const Button = ({ color, text, onClick }) => {
// console.log(onClick)
   
    return (

        //Pass in the prop color, text, onClick from the Header component
        //Reason why you don't have the onClick method in the Button component because the button will be reused again in another component with a different function
       <button style={{ backgroundColor: color }} className='btn' onClick={onClick}>
           {text}
        </button>
    )
}

//Assign a default color if no props was passed in
Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
