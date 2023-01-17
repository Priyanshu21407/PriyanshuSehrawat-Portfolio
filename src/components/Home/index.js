import React from 'react'
import './index.scss'
import rain from '../../assets/images/homegif.gif'
export default function index() {
  return (
    <div className='home'>
        <span className='rain'>
        <img src={rain} alt="rainig"></img>
        </span>
        <h1 className='hi'>Hi! <br /></h1>
        <h2 className='name'>I am Priyanshu</h2>
        <h3 className='h3-first'>I like to make cool websites</h3>
        <h3 className='h3-second'>Also I like to learn new stuff</h3>
        <h5 className='h4-first'>Head on to 'About me' section to get to know me better</h5>
        <a className='contact-link' target="_blank "href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>DON'T CLICK</a>
        
    </div>
  )
}
