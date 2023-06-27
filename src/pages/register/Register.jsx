import React, { useState } from 'react'
import './Register.scss';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from '../../firebase';
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const onHandleSubmit = async (event) => {

        event.preventDefault();
        console.log(event.target);
        const displayName = event.target[0].value;
        const email = event.target[1].value;
        const password = event.target[2].value;
        const file = event.target[3].files[0];

        console.log({ name: displayName, email, password, file });

        try {

            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log("response after creating user", response);
            const storageRef = ref(storage, displayName);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed',
                (snapshot) => {
                    console.log(snapshot);
                },
                (error) => {
                    console.log(error);
                    setError(true);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateProfile(response.user, {
                            displayName: displayName,
                            photoURL: downloadURL
                        })
                        //        database , collections name, unique id
                        await setDoc(doc, (db, "users", response.user.uid), {
                            uid: response.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL
                        });
                        console.log('File available at', downloadURL);
                        //creating document for users chats
                        await setDoc(doc, (db, "userschat", response.user.uid), {

                        });
                    });
                }
            );

            // navigate("/");

        }
        catch (error) {
            console.log(error);
            setError(true);
        }

    }
    return (
        <>
            <div className='container'>
                <h1>Register Panel</h1>
                <form action="#" onSubmit={onHandleSubmit}>
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
                {
                    error && <p>Something went wrong</p>
                }
            </div>
        </>
    )
}

export default Register;