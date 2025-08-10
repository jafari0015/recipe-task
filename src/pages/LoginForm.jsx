import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AnimatedContent from '../Animation/AnimatedContent';
const LoginForm = () => {
  const navigate = useNavigate();

  const  backToWelcome = () => {
    navigate('/')
  }
  return (
    <div className='LoginForm'>
        <div>
        <div className="onBackBtton">
        <button type='button' onClick={backToWelcome}>
          <i className="fa-solid fa-arrow-left-long"></i>
        </button>
      </div>
        <h1>Welcome Back</h1>
        <p>Login to your account </p>
        <form className='recipeLoginForm'>
             <AnimatedContent>
              <i className="fa-solid fa-user"></i>
            <input type="text" placeholder='User name / Mail' required />
            <br />
            <br />
            <i className="fa-solid fa-lock"></i>
            <input type="text" placeholder='Password' required/> <br />
            <div className="forgotPass">
              <div><input type="checkbox"/> 
            <span> &nbsp; Remember me </span></div>
            <span><a href="#">Forget Password</a></span>
            </div>
            <br />
            <br /> 
            <button onClick={() => navigate('/profile')}>
                Login
            </button> <br />
            <div className='signUp'>
              <span>Not hava an Account?</span> <span><a href="#" onClick={() => navigate('/createAccount')} >Sign up</a> </span>
            </div>
             </AnimatedContent>
        </form>
      </div>
    </div>
  )
}

export default LoginForm