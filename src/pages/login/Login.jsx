import React,{useState} from 'react'
import './Login.scss';
import { AuthContext } from '../../context/AuthContext';
import {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from '../../firebase';

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const context = useContext(AuthContext);
  const currentUser=context.currentUser;

  const onHandleSubmit = async (event) => {

    event.preventDefault();
    console.log(event)
    const email = event.target[0].value;
    const password = event.target[1].value;
    console.log("navigate");
    
    try {
      console.log(auth);
      await signInWithEmailAndPassword (auth, email, password);
      navigate("/");
    }
    catch (error) {
      console.log(error);
      setError(true);
    }

  }
  return (
    <>
      <>
        <div className='container'>
          <h1>Login Panel</h1>
          <form action="#" onSubmit = {onHandleSubmit}>
            <div className="email">
              <label>User email : </label>
              <input type="email" name="name" id="user-email" />
            </div>
            <div className="password">
              <label>Password : </label>
              <input type="password" name="name" id="user-password" />
            </div>
            <input type="submit" value="Submit" />
          </form>
          <p className='form-footer'>
            If you are not a user then please: <a href="/Register">Register</a>
          </p>
          {
            error && <p>Something went wrong</p>
          }
        </div>
      </>
    </>
  )
}

export default Login;