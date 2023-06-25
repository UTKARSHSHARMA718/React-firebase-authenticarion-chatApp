import React from 'react'
import './Navbar.scss';

type Props = {}

const Navbar = (props: Props) => {
    return (
        <>
            <nav>
                <div className="logo">
                    <h2>Nemesis-Chats</h2>
                </div>
                <div className="control-panel">
                    <img src="https://images.unsplash.com/photo-1659835347242-97835d671db7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" alt="" />
                    <span>King</span>
                    <button>Logout</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar