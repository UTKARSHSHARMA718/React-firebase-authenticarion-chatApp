import React from 'react'
import Input from '../input/Input';
import Messages from '../messages/Messages';
import './Chats.scss'
type Props = {}

const Chats = (props: Props) => {
  return (
    <>
      <div className='chat-Container'>
        <div className='features'>
          <span>King</span>
          <div className='links'>
            <i className="fa-sharp fa-solid fa-circle-video"></i>
            <i className="fa-solid fa-address-book"></i>
            <i className="fa-solid fa-list-ul"></i>
          </div>
        </div>
        <div className="all-massages">
          <Messages />
          <Messages />
          <Messages />
          <Messages />
          <Messages />
          <Messages />
          <Messages />
          <Messages />
          <Messages />
          <Messages />
          <Messages />
          <Messages />
          <Messages />
        </div>
        <Input />
      </div>
    </>
  )
}

export default Chats;