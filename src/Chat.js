import React ,{useState}from 'react'
import './Chat.css'
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
function Chat() {
const [input, setinput] = useState("")
const sendmessage =(e)=>{
    e.preventDefault()
    console.log(input)
    setinput("")
}
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
            <p className={`message ${true && "message_recieve"}`}><span className="sender">Akshat</span>sample message</p>
            <p className="message"><span className="sender">Akshat</span>sample message</p>
        
            </div>
            <div className="conv__footer">
                <IconButton><InsertEmoticonIcon/></IconButton>
             <form>
                 <input value={input} onChange={(e)=>{setinput(e.target.value)}}  type="text" placeholder="Enter Your Message"></input>
                 <button onClick={sendmessage} type="submit">Send message</button>
             </form>
            <IconButton><MicIcon/></IconButton>
            </div>
        </div>
    )
}

export default Chat
