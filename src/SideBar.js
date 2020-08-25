import React ,{useState,useEffect} from 'react'
import './SideBar.css'
import Avatar from '@material-ui/core/Avatar';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import SideBarChat from './SideBarChat';
import db from './firebase'
import {useStateValue} from "./StateProvider"

function SideBar() {
    const [rooms,setrooms]=useState([])
    const [{user}, dispatch]= useStateValue()
    useEffect(() => {
      const u=  db.collection('rooms').onSnapshot((snapshot) => {
            setrooms(
                    snapshot.docs.map((doc)=>({
                        id:doc.id,
                        data:doc.data()
                    }))
            )
        
        
            })
            return () => {
                u();
            }
    },[])
    
  
    return (
        <div className="sidebar">
            <div className="sidebar__header">
             <Avatar src={user.photoURL}/>
             <div className="sidebar__header__right">
                 <IconButton>
                 <DonutLargeIcon/>
                 </IconButton>
                 <IconButton>
                 <ChatIcon/>
                 </IconButton>
                 <IconButton>
                 <MoreVertIcon/>
                 </IconButton>
             </div>
            </div>
            <div className="sidebar__search">
             <div className="sidebar__search__container">
             <SearchIcon/>
             <input type="text" placeholder="Search"/>
             </div>
            </div>
            <div className="sidebar__chat">
                <SideBarChat
                addnewchat
                />
               {rooms.map((room, index) =>(
                   <SideBarChat
                   key={room.id}
                   name={room.data.roomname}
                   id={room.id}
                   />
    ))}
           
                
            </div>            
        </div>
    )
}

export default SideBar
