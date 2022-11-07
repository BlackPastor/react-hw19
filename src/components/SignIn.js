import React, { useState } from 'react';
import Padlock from './images/padlock.png';
import { Link } from 'react-router-dom';
import { EmailInput, PasswordInput, EmailValidation, PasswordValidation } from './Validation';
import Button from './Button';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div
        style={{ font: 'Roboto'}} className='wrapper'>
            <form className='form-wrapper'>
                <div className='title'>
                    <img src={Padlock}></img>
                    <h4>Sign in</h4>
                </div>
                <EmailInput
                    type={'text'} placeholder='Email Adress*'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} /> <br></br>
                <PasswordInput
                    type={'text'}
                    placeholder='Password*'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} /> <br></br>
                    <div className='checkbox-member'>
                    <input id='member' type={'checkbox'} />
                    <label htmlFor='member'>Remember me</label>
                    </div>
                <Button disabled={!(EmailValidation.test(email) && PasswordValidation.test(password))}>Sign in</Button> <br></br>
                <div className='link'>
                    <a href='#'>Forgot password?</a>
                    <Link className='link-a' to='/signUp'>Don't have an account?Sign up</Link>
                </div>
                <article>Copyright &copy; Your Webside 2020.</article>
            </form>
        </div>
    );
};

export default SignIn;