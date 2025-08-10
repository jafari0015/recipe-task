import React, { useState } from 'react';
import LoginForm from './LoginForm';
import CreateAccount from './CreateAccount';
import { useNavigate } from 'react-router-dom';
import AnimatedContent from '../Animation/AnimatedContent';
import FadeContent from '../Animation/FadeContent';

const WelcomeScreen = () => {
    const navigate = useNavigate();

    const openLoginForm = () => {
        navigate('/login')
    }

    const openRegisterForm = () => {
        navigate('/createAccount')
    }
    return (
        <div className="welcome-screen">
            <>
                <div>
                    <div className='backgroundColor'>
                        <img src="/background.jpg" alt="Core Fuel" />
                    </div>
                    <>
                            <div className='LoginFood'>
                                <FadeContent>
                                    <img src="/LoginFood.png" alt="" />
                                </FadeContent>
                            </div>
                            <div className='backgroundColor2'>
                                <AnimatedContent>
                                    <form action="" className='FormLogin'>
                                    <h1>
                                        Fuel your core, <br />
                                        Power your wellness.
                                    </h1>
                                    <p>
                                        Easy handpicked healthy dishes <br />
                                        with recipes for your diet.
                                    </p>
                                    <button className='loginBtn' type='button' onClick={openLoginForm}>
                                        Sign in
                                    </button> <br />
                                    <button className='createAcc' type='button' onClick={openRegisterForm}>
                                        Create New Account
                                    </button>
                                </form>
                                </AnimatedContent>
                            </div>
                    </>
                </div>
            </>
        </div>
    );
};

export default WelcomeScreen;
