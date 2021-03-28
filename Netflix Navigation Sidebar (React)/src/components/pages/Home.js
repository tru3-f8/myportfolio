import React, { Fragment } from 'react'
import NetflixImage from '../images/NetflixImage'
import Navbar from '../layouts/Navbar'

const Home = () => {
  return (
    <Fragment>
      <div className='body'>
        <NetflixImage />
        <p className='text'>Mobile Navigation</p>
        <Navbar />
      </div>
    </Fragment>
  )
}

export default Home
