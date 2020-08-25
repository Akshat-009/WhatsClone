import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './SideBarChat.css'
import db from './firebase'
import {NavLink} from 'react-router-dom'
function SideBarChat({addnewchat,name,id}) {
    const newchat=()=>{
        const roomname=prompt("Enter chat roomname")
        if(roomname)
        {
           db.collection("rooms").add({
               roomname:roomname,
           })
        }
    }
    return !addnewchat?(
        <>
        <NavLink  exact active className="chats" to={`/rooms/${id}`}>
        <div className="chat__container">
              <Avatar/>
              <div className="chat__container__chat">
                  <h2>{name}</h2>
                  <p>Message</p>
              </div>
              </div> 
        </NavLink>
 
        </>
    ):(
        <div className="chat__container" onClick={newchat}>
            <h2>Add new Chat</h2>
            </div>
    )
}

export default SideBarChat
