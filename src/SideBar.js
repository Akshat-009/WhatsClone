import React from 'react'
import './SideBar.css'
import Avatar from '@material-ui/core/Avatar';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import SideBarChat from './SideBarChat';
function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
             <Avatar/>
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
                <SideBarChat/>
           
                
            </div>            
        </div>
    )
}

export default SideBar
