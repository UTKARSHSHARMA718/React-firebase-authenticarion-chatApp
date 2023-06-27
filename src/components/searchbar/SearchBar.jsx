import { useContext, useState } from 'react'
import './SearchBar.scss'
import UserChat from '../userchat/UserChat';
import { collections, getDoc, query, serverTimestamp, setDoc, updateDoc, where } from 'firebase/firestore';
import { db } from '../../firebase';
import { AuthContext } from '../../context/AuthContext';

const SearchBar = () => {
  const currentUser = useContext(AuthContext);
  const [searchUser, setSearchUser] = useState("");
  const [error, setError] = useState(false);
  const [user, setUser] = useState();

  const onHandleSearch = async () => {

    const chatsCollectionsReference = collections(db, "users");
    const q = query(chatsCollectionsReference, where('displayName', '==', searchUser));

    const querySnapshot = await getDoc(q);
    querySnapshot.forEach((doc) => {
      setUser(doc.data());
    });

  }

  const onKeyHandle = (event) => {
    event.code === 'Enter' && onHandleSearch();
  }

  const onHandleSelect = async () => {

    const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
    try {
      const response = await getDoc(db, "chats", combinedId);


      //other user chats
      // userChats:{
      //   janeId:{
      //     combinedId:{
      //       userInfo{
      //         dn,img,id
      //       },
      //       lastMessage:"",
      //       date:
      //     }
      //   }
      // }

      if (!response.exists()) {
        await setDoc(doc(db, "chats", combinedId), { message: [] })

        await updateDoc(doc(db, "userChats", currentUser.uib), {

          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoUrl: user.photoUrl
          },
          [combinedId + ".data"]: serverTimestamp()
        });
        await updateDoc(doc(db, "userChats", user.uib), {

          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoUrl: currentUser.photoUrl
          },
          [combinedId + ".data"]: serverTimestamp()
        });
      }
    } catch (err) {
      console.log(err);
      setError(true);
    }
  }


  return (
    <>
      <div className='search-container'>
        <input type="text" placeholder='Find a user' onKeyDown={onKeyHandle} onChange={(event) => setSearch(event.target.value)} />
        {user && <UserChat onClick={onHandleSelect} username={user.displayName} photoUrl={user.photoUrl} />}
        {
          error && <p>something went wrong!</p>
        }
      </div>
    </>
  )
}

export default SearchBar