import React, { createContext, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'


const chatContext = createContext();
const ChatContextProvider = ({children}) => {

    const currentUser = useContext(AuthContext);
    const initial_state = {
        users: {},
        chatId: "null"
    }

    const chatReducer = (state = initial_state, actions) => {
        switch (actions.type) {
            case "CHANGE_USER":
                return {
                    user: actions.payload,
                    chatId: currentUser.uid > actions.payload.uid ?
                        currentUser.uid + actions.payload.uid :
                        actions.payload.uid + currentUser.uid
                }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(chatReducer , initial_state);

    return (
        <chatContext.Provider value={{data:state,dispatch}}>
            {children}
        </chatContext.Provider>
    )
}

export default ChatContextProvider;