import React from 'react'
import './Register.scss';

type Props = {}

const Register = (props: Props) => {
    return (
        <>
            <div className='container'>
                <h1>Register Panel</h1>
                <form action="#" >
                    <div className="name">
                        <label>Username : </label>
                        <input type="text" name="name" id="user-name" />
                    </div>
                    <div className="email">
                        <label>User email : </label>
                        <input type="email" name="name" id="user-email" />
                    </div>
                    <div className="password">
                        <label>Password : </label>
                        <input type="password" name="name" id="user-password" />
                    </div>
                    <div className="file">
                        <input type="file" name="profileImage" id="profileImage" />
                        <label htmlFor="profileImage">
                            Please choose an image.
                        </label>
                    </div>

                    <input type="submit" value="Submit" />
                </form>
                <p className='form-footer'>
                    If you are already a user then : <a href="/login">Login</a>
                </p>
            </div>
        </>
    )
}

export default Register;