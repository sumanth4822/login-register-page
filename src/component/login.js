import React, {useState} from 'react';

const Login = (props) => {

    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
}
    return(
        <div className='form-container'>
            <h2>LOGIN</h2>
        <form className='login-form' onSubmit={handleSubmit}>
            <label htmlFor="email">EMAIL</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="youremail@gmail.com" id="email" name="email"/>
            <label htmlFor="password">PASSWORD</label>
            <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="**********" id="password" name="password"/>
            <button type="submit" className='btn'>Login</button>
        </form>
        <button className='link-btn' onClick={() => props.onFormSwitch('register')}>Don't Have an Account? Register Here.</button>
        </div>
    )
}
export default Login;