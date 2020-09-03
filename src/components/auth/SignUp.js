import React from 'react'
import './main.css'
import logo from '../../photos/bulb.png'

export default function SignUp() {
    return (
        <div className='contain'>
            <form className='form-signin'>
                <img class='mb-4' src={logo} alt-width='72' height='72' />
                <h1 className='h3 mb-3 font-weight-normal'>Sign Up</h1>
                <label for='inputEmail' className='sr-only'>Email Address</label>
                <input type='email' className='form-control' id='inputEmail' placeholder='Email Address' required autofocus/>
                <label for='inputPassword' className='sr-only'>Password</label>
                <input type='password' className='form-control' id='inputPassword' placeholder='Password' required />
                
                <div class="checkbox mb-3">
                </div>
                <button class="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
                <p class="mt-5 mb-3 text-muted">© 2020</p>
            </form>
        </div>
    )
}
