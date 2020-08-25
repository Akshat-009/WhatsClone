import React from 'react'
import './Chat.css'
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
function Chat() {
    return (
        <div className="conversation">
            <div className="conv__header">
            <Avatar/>
            <div className="conv__header__info">
            <h3>Room name</h3>
             <p>info</p>
            </div>
            <div className="conv__header__right">
                <IconButton>
                      <SearchIcon></SearchIcon>
                      </IconButton>
                      <IconButton>
                      <AttachFileIcon/>
                      </IconButton>
                      <IconButton>
                      <MoreVertIcon/>
                      </IconButton>
            </div>
            </div>
            <div className="conv__body">
                
            <p className="message"><span className="sender">Akshat</span>sample message<span className="timestamp">3:52 pm</span></p>
            
        
            </div>
            <div className="conv__footer">
            
            </div>
        </div>
    )
}

export default Chat
