import React from 'react'
//import { AiFillBulb } from 'react-icons/ai'
import logo from '../../photos/bulb.png'
import './Navigation.css'
//<AiFillBulb className="d-inline-block align-top" width="30px" height="30px"alt=""/>
//<span className='navbar-toggler-icon'></span>
//<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"></button>
//<div className='collapse navbar-collapse' id='navbarNavAltMarkup'>

export default function Navigation() {
    return (
        <div>
            <nav className='navbar navbar-dark bg-dark navbar-expand-lg justify-content-between'>
                <a className='navbar-brand' href='/'>
                    <img src={logo} width='45px' height='45px' alt='' class="d-inline-block align-top"/>                    
                    Mismisi
                </a>
                <span className='navbar-text'>When you are shaken up, scream 'mismisi'</span>
                
                <div className='navbar-nav'>
                    <a className='nav-item nav-link active' href='/'>Home<span className='sr-only'>(current)</span></a>
                    <a className='nav-items nav-link' href='/'>About Me</a>
                    <a className='nav-items nav-link disabled' >Dead Zone</a>
                </div>
                <form className='form-inline'>
                    <input className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search' />
                    <button className='btn btn-outline-success my-2 my-sm-0' type='submit'>Search</button>
                </form>
            </nav>
        </div>
    )
}
