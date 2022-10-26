import React, { useRef, useState } from 'react';
import { post } from '../plugins/http';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const password2Ref = useRef();

  const [error, setError] = useState('');
  const nav = useNavigate();

  async function register() {
    const registerData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password2: password2Ref.current.value,
    };

    const res = await post('register', registerData);
    setError(res.message);
    if (!res.error) {
      console.log('res.data', res.data);
      sessionStorage.setItem('secret', res.data);
      nav("/");
    };
    console.log('registerData res', res);
  }

  return (
    <div className='main'>
      <div className='container form fd-column' >
        <input ref={emailRef} type='text' placeholder='email' />
        <input ref={passwordRef} type='text' placeholder='password' />
        <input ref={password2Ref} type='text' placeholder='repeat password' />

        <button className='button' onClick={register}>register</button>
        <span className='error-msg'>{error}</span>
      </div>
    </div>
  )
}

export default Register;
