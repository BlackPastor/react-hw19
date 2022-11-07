import React, { useState } from 'react';
import Padlock from './images/padlock.png';
import { Link } from 'react-router-dom'
import { EmailInput, FirstNameInput, PasswordInput, LastNameInput, EmailValidation, PasswordValidation } from './Validation';
import Button from './Button';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div
            style={{ font: 'Roboto' }} className='wrapper'>
            <form className='form-wrapper'>
                <div className='title'>
                    <img src={Padlock}></img><h4>Sign up</h4>
                </div>
                <div className='names'>
                    <FirstNameInput
                        type={'text'} placeholder='First Name*' value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        halfSize />
                    <LastNameInput
                        type={'text'}
                        placeholder='Last Name*'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        halfSize />
                </div>
                <EmailInput
                    type={'text'} placeholder='Email Adress*'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <PasswordInput
                    type={'text'}
                    placeholder='Password*'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <div className='checkbox'>
                    <input id='checkbox' type={'checkbox'} />
                    <label htmlFor='checkbox'>I want to reseive inspiration, marketing promotions and updates via email.</label>
                </div> <br></br>
                <Button disabled={!(firstName.length > 2 && lastName.length > 2 && EmailValidation.test(email) && PasswordValidation.test(password))}>sign up</Button> <br></br>
                <div className='link'>
                    <Link className='Link' to='/'>Already have an account?Sign in</Link>
                </div>
                <article>Copyright &copy; Your Webside 2020</article>
            </form>
        </div>
    );
};

export default SignUp;