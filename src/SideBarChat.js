import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './SideBarChat.css'
import db from './firebase'
function SideBarChat({addnewchat,name,key}) {
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
          <div className="chat__container">
              <Avatar/>
              <div className="chat__container__chat">
                  <h2>{name}</h2>
                  <p>Message</p>
              </div>
              
              </div>  
        </>
    ):(
        <div className="chat__container" onClick={newchat}>
            <h2>Add new Chat</h2>
            </div>
    )
}

export default SideBarChat
