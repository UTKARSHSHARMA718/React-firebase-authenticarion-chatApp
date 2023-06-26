import React from 'react'
import './Messages.scss';
type Props = {}

const Messages = (props: Props) => {
    return (
        <>
            <div className='message-conatiner owner'>
                <div className='chat-profile-name'>
                    <img src="https://images.unsplash.com/photo-1659835347242-97835d671db7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" alt="" />
                    <span>just now</span>
                </div>
                <div className='message-content'>
                    <img src="https://images.unsplash.com/photo-1659835347242-97835d671db7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" alt="" />
                    <span className='message-content-text'>Are you alive?</span>
                </div>
            </div>
        </>
    )
}

export default Messages;