import React, { useContext } from 'react'
import './Navbar.scss';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
    const { currentUser } = useContext(AuthContext);
    return (
        <>
            <nav>
                <div className="logo">
                    <h3>Nemesis-Chats</h3>
                </div>
                <div className="control-panel">
                    <img src={currentUser.photoURL} alt="" />
                    <span>{currentUser.displayName}</span>
                    <button onClick={() => signOut(auth)}>Logout</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar