import './index.scss'
import { Outlet } from 'react-router-dom'
import React from 'react'
import Navbar from '../Navbar/index'
export default function index() {
  return (
    <div className='App'>
      <Navbar />
      <div className='Page'>
      <span className='top-tags'></span>
      <Outlet />
      <span className='bottom-tags'></span>
      <br />
      <span className='html-bottom-tags'></span>
      </div>
      
    </div>
  )
}
