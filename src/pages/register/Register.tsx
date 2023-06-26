import React, { FormEventHandler } from 'react'
import './Register.scss';
import {createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase'

type Props = {}

const Register = (props: Props) => {
    const onHandleSubmit = (event: React.FormEvent): void => {
        event.preventDefault();
        console.log(event)
        const name: string = event.target[0].value;
        const email: string = event.target[1].value;
        const password: string = event.target[2].value;
        const file: string = event.target[3].value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }
    return (
        <>
            <div className='container'>
                <h1>Register Panel</h1>
                <form action="#" onSubmit ={onHandleSubmit}>
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