import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'

// const authenticatedOptions = (
//   <Fragment>
//     <NavLink to='/change-password' className='nav-link'>Change Password</NavLink>
//     <NavLink to='/sign-out' className='nav-link'>Sign Out</NavLink>
//   </Fragment>
// )
//
// const unauthenticatedOptions = (
//   <Fragment>
//     <NavLink to='/sign-up' className='nav-link'>Sign Up</NavLink>
//     <NavLink to='/sign-in' className='nav-link'>Sign In</NavLink>
//   </Fragment>
// )

const alwaysOptions = (
  <Fragment>
    <NavLink exact to='/' className='nav-link'>Events</NavLink>
    <NavLink exact to='/about' className='nav-link'>About</NavLink>
    <NavLink exact to='/community' className='nav-link'>Community</NavLink>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg='primary' variant='dark' expand='md'>
    <Navbar.Brand>
      <a className="logo_image">
        <img src="tottenham_hotspurs_cockerel_white_logo.svg" width="30" height="30" background="white" alt=""/>
      </a>
      <h className="logo">
      Austin Spurs Supporters Group</h>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='ml-auto'>
        {user && (
          <span className='navbar-text mr-2'>Welcome, {user.email}</span>
        )}
        {alwaysOptions}
        {/*   {user ? authenticatedOptions : unauthenticatedOptions} */}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
