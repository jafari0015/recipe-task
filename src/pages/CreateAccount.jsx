import React from 'react'
import { useNavigate } from 'react-router-dom'
import FadeContent from '../Animation/FadeContent';
import AnimatedContent from '../Animation/AnimatedContent';

const CreateAccount = () => {
  const navigate = useNavigate();

  const onBack = () => {
    navigate('/')
  }
  return (
    <div className='CreateAccount'>
      <div className="onBackBtton">
        <button type='button' onClick={onBack}>
          <i className="fa-solid fa-arrow-left-long"></i>
        </button>
      </div>
     <form action="" className='RegisterForm'>
          <FadeContent>
            <h1>
           Register
          </h1>
          <p> Create your new account </p>
        <div className='registerInput'>
          <i className="fa-solid fa-user"></i>
          <input type="text" placeholder='User name'required/>
          <br /> <br />
          <i className="fa-solid fa-envelope"></i>
          <input type="text" placeholder='user@gmail.com' required/>
          <br /> <br />
          <i className="fa-solid fa-lock"></i>
          <input type="password"  placeholder='Password' required/>
        </div>
        <div className='registerButton'>
          <button type='submit' onClick={()=> navigate('/profile')}>Login</button> 
          <div className='registerFor'>
            <span>
              <input type="checkbox" /> <span> Remember me</span>
            </span>
            <span><a href="#">Forgot Password</a></span>
          </div>
        </div>
          </FadeContent>
     </form>

     <form className='googleSign'> 
      <div className='demo'><hr />  <span>Or continue with </span> <hr /></div>
      <div className='wrapper'>
        <AnimatedContent>
          <div className='IconDive'>
          <a href="#"><i className="fa-brands fa-square-facebook"></i></a>
          <a href="3"><i className="fa-brands fa-google"></i></a>
          <a href="#"><i className="fa-brands fa-apple"></i></a>
        </div>
        <p>
          Already have an account? <span><a href="#" onClick={() => navigate('/login')}>Sign in</a></span>
        </p>
        </AnimatedContent>
      </div>
     </form>
    </div>
  )
}

export default CreateAccount