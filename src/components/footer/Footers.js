import React from 'react'
import './Footers.css'

export default function Footers() {
    return (
        <div>
            <footer className='footer'>
                <div className='container'>
                    <span className='text-muted'>Made with ❤ by <a href='https://github.com/JayeshTiwari03'>@JayeshTiwari03</a> 🐱.</span>
                    <span className='text-muted'> Find this <a href='https://github.com/JayeshTiwari03/Sep-Cards-App'>Repo on GitHub</a></span>
                    <p className='text-muted'>This app is under development. Made using ReactJS and Bootstrap.</p>
                </div>
            </footer>
        </div>
    )
}