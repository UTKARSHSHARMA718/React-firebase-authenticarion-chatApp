import React, {useContext} from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './Home.scss';
import Chats from '../../components/chats/Chats';


const Home = () => {


   
    return (
        <>
            <div className='home-container'>
                <div className="chat-container">
                    <Sidebar />
                    <Chats />
                </div>
            </div>

        </>
    )
}

export default Home