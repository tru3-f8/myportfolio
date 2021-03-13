import React, { Component, Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NetflixImageNav from '../images/NetflixImageNav'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }

    this.openNav = this.openNav.bind(this)
    this.closeNav = this.closeNav.bind(this)
  }

  openNav(e) {
    this.setState({ value: 'visible' })
  }

  closeNav(e) {
    this.setState({ value: '' })
  }

  render() {
    return (
      <Fragment>
        <button onClick={this.openNav} className='nav-btn open-btn'>
          <FontAwesomeIcon icon='bars' />
        </button>
        <div className='nav nav-black' id={this.state.value}>
          <div className='nav nav-red' id={this.state.value}>
            <div className='nav nav-white' id={this.state.value}>
              <button onClick={this.closeNav} className='nav-btn close-btn'>
                <FontAwesomeIcon icon='times' />
              </button>
              <NetflixImageNav />
              <ul className='list' id={this.state.value}>
                <li>
                  <a href=''>Teams</a>
                </li>
                <li>
                  <a href=''>Locations</a>
                </li>
                <li>
                  <a href=''>Life at Netflix</a>
                </li>
                <li>
                  <ul>
                    <li>
                      <a href=''>Netflix culture memo</a>
                    </li>
                    <li>
                      <a href=''>Work life balance</a>
                    </li>
                    <li>
                      <a href=''>Inclusion & diversity</a>
                    </li>
                    <li>
                      <a href=''>Blog</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
export default Navbar
