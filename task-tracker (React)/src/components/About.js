import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h4>Version 1.0.0</h4>
            {/* Replace a tag with Link */}
            {/* <a href='/'>Go Back</a> */}
            <Link to='/'>Go Back</Link>
        </div>
    )
}

export default About
