import React from 'react'

import './index.scss'
import contactmegif from '../../assets/images/contactmegif.gif'

export default function index() {
  return (
    <div>
        <img className='contactgif' src={contactmegif}></img>
    <h1 className='contact'>
        Contact Me
    </h1>
    <p className='contactlinks'>
        <br />
       Email: priyanshu21407@iiitd.ac.in
       <br />
       <br />
       Phone no.: 8287117706 
    </p>
</div>
  )
}
