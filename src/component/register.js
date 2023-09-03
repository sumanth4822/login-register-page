import React, {useState} from "react";

const Register = (props) => {
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const [name,setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return(
        <div className="form-container">
            <h2>REGISTER</h2>
        <form className='register-form' onSubmit={handleSubmit}>
            <label htmlFor="name">FULL NAME</label>
            <input  value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" name="name" id="name" />
            <label htmlFor="email">EMAIL</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="youremail@gmail.com" id="email" name="email"/>
            <label htmlFor="password">PASSWORD</label>
            <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="**********" id="password" name="password"/>
            <button type="submit" className="btn">REGISTER</button>
        </form>
        <button className='link-btn' onClick={() => props.onFormSwitch('login')}>Already Have an Account? Login Here.</button>
        </div>
    )
}
export default Register;