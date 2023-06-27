import React from 'react'
import SearchBar from '../searchbar/SearchBar'
import Navbar from '../navbar/Navbar'
import UserChat from '../userchat/UserChat'
import './Sidebar.scss';

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <>
        <div className='sidebar-Container'>
            <Navbar/>
            <SearchBar/>
            <UserChat/>
            <UserChat/>
            <UserChat/>
            <UserChat/>
            <UserChat/>
            <UserChat/>
            <UserChat/>
            <UserChat/>
            <UserChat/>
        </div>
    </>
  )
}

export default Sidebar