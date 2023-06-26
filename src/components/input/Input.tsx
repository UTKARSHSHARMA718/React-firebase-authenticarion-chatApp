import React from 'react'
import './Input.scss';

type Props = {}

const Input = (props: Props) => {
    return (
        <>
            <div className='chat-input-container'>
                <input type="text" placeholder='type anything you like' />
                <div className='chat-additional-fetaures'>
                    <i className="fa-light fa-paperclip-vertical"></i>
                    <i className="fa-light fa-images"></i>
                    <i className="fa-duotone fa-images"></i>
                    <button>Send</button>
                </div>
            </div>
        </>
    )
}

export default Input;