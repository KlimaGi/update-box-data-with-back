import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainContext from '../context/main-context';
import Button from './button';

const Toolbar = () => {
  const { user } = useContext(MainContext);
  const nav = useNavigate();

  const logout = () => {
    localStorage.removeItem("secret");
    nav('/');
  }
  return (
    <div className='toolbar'>
      <Link to='/register'>Register</Link>
      <Link to='/'>Login</Link>

      {user &&
        <>
          <Button func={logout} text='logout' />
        </>
      }

    </div>
  )
}

export default Toolbar;
