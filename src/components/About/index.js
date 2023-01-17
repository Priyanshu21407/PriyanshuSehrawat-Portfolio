import React from 'react'
import './index.scss'

import aboutmegif from '../../assets/images/codinggif.gif'
export default function index() {
  return (
    <div className='aboutsection'>
        <img src={aboutmegif} className="codinggif"></img>
        <h1 className='aboutme'>
            About Me
        </h1>
        <p>
            Currently, I am a 2nd year B.Tech student at IIIT-D, New Delhi.<br />
            
            My interests are to develope awesome looking projects.
            I am working on getting better at making web designs and UIs. <br />This personal portfolio is just a small project that I wanted to make. <br /><br/>

            I am an absolute pro gammer too. If you think you could beat me in fifa, you couldn't be further from the truth. But sometimes I like to do casual gaming and have a deep love for story-driven games.<br /><br />
            Programming languages I have worked and have experience in:
            <ul>
                <li>Pyhton </li>
                <li> C </li>
                <li> C++ </li>
                <li> Java </li>
                <li> Javascript </li>
                <li> HTML </li>
                <li> CSS</li>
            </ul>
            Technologies/tools I have worked in:
            <ul>
            <li> React </li>
            <li> libGDX </li>
            <li> Flutter</li>
            </ul>
        </p>
    </div>
  )
}
