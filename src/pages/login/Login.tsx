import React from 'react'
import './Login.scss'
type Props = {}

const Login = (props: Props) => {
  return (
    <>
      <>
        <div className='container'>
          <h1>Login Panel</h1>
          <form action="#" >
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
        </div>
      </>
    </>
  )
}

export default Login;