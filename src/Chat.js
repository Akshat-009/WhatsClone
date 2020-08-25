import React ,{useState,useEffect}from 'react'
import './Chat.css'
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import {useParams} from "react-router-dom";
import {useStateValue} from "./StateProvider"
import db from "./firebase"
import firebase from "firebase"
function Chat() {
const [input, setinput] = useState("")
const [{user},dispatch]=useStateValue()
 const {roomid}=useParams();
 const [roomname,setroomname]=useState("")
 const [messages,setmessage] = useState([])
 console.log(roomid)
 useEffect(() =>{
db.collection("rooms").doc(roomid).onSnapshot((snapshot) =>{
    setroomname(snapshot.data().roomname)
})
db.collection("rooms").doc(roomid).collection("messages").orderBy("timestamp","asc").onSnapshot((snapshot) =>(
    setmessage(snapshot.docs.map((doc) =>
        doc.data()
    ))
))

 },[roomid])
 console.log(messages)

const sendmessage =(e)=>{
    e.preventDefault()
    console.log(input)
    db.collection("rooms").doc(roomid).collection("messages").add({
        author:user.displayName,
        message:input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setinput("")
}
    return (
        <div className="conversation">
            <div className="conv__header">
            <Avatar/>
            <div className="conv__header__info">
    <h3>{roomname}</h3>
    
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
                {messages.map((message)=>(
                    <p className={`message ${message.author===user.displayName && "message_recieve"}`}><span className={` ${(message.author===user.displayName)? "author__send" : "sender"}`}>{message.author}</span>{message.message}<span className="timestamp">{new Date(message.timestamp?.toDate()).toUTCString()}</span></p>
    ))}


         
         
        
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
