import React from 'react'
import './UserChat.scss'

const img = "https://images.unsplash.com/photo-1659835347242-97835d671db7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
const UserChat = (props) => {
    return (
        <>
            <div className='userchats'>
                <img src={ props.displayName | img} alt="" />
                <span>{props.displayName | "Black Heart"}</span>
            </div>
        </>
    )
}

export default UserChat;