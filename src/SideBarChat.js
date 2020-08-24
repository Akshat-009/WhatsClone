import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './SideBarChat.css'
function SideBarChat() {
    return (
        <>
          <div className="chat__container">
              <Avatar/>
              <div className="chat__container__chat">
                  <h2>Name</h2>
                  <p>Message</p>
              </div>
              
              </div>  
        </>
    )
}

export default SideBarChat
