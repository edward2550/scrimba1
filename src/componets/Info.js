import React from 'react'
import About from './About'
import Interest from './Interests'

export default function Info(){
    return(
        <header className="header-info">
            <h1 className="info-h1">Laura Smith</h1>
            <h4>Frontend Developer</h4>
            <h5>www.webiste.io</h5>
            <div>
                <button>Email</button>
                <button className="info-btn2">Linkedin</button>
            </div>
            <div className="container-2">
            <About />
            <Interest />
            </div>
            
        </header>
    )
}