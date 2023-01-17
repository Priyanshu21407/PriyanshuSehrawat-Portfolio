import './index.scss'
import React from 'react'
import {NavLink} from 'react-router-dom'
import homeLogo from '../../assets/images/Home_icon_black.png'
export default function index() {
  return (
    <div className='navbar'>
      
      <NavLink  exact="true" activeclassname="active" className="home-link" to="/"> <img src={homeLogo} className="homelogo" alt="home" /></NavLink>
      <nav>
        
        <NavLink  exact="true" activeclassname="active" className="link" to="/About"> About</NavLink>
        <NavLink  exact="true" activeclassname="active" className="link" to="/Contact"> Contact</NavLink>
        </nav>
      </div>
  )
}
