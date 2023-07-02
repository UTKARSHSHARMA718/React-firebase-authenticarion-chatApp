import React, { useContext, useEffect, useState } from 'react'
import Input from '../input/Input';
import Messages from '../messages/Messages';
import './Chats.scss'
import { doc, onSnapshot } from 'firebase/firestore';
import { AuthContext } from '../../context/AuthContext';
import { db } from '../../firebase';

const Chats = (props) => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    const getChats = () => {
      //fetching the real time changing data using firebase
      const unsub = onSnapshot(doc(db, "userChats", currentUser.udi), (doc) => {
        console.log("Current data: ", doc.data());
        setChats(Object.entries(doc.data()));
      });

      return () => {
        unsub();
      }
    }
    currentUser.uid && getChats();
  }, [currentUser.uid]);

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