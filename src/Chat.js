import { Avatar } from "@mui/material";
import { useState,useEffect } from "react";
import SearchIcon from '@mui/icons-material/Search';
import "./Chat.css";
import { IconButton } from "@mui/material";
import MicIcon from '@mui/icons-material/Mic';
import {  AttachFile, InsertEmoticon, MoreVert, Send } from "@mui/icons-material";

function Chat() {

  const [input,setInput] = useState('');
  const [seed,setSeed]= useState('');

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
    }, []);

    const sendMessage = (e) => {
        e.preventDefault()
        console.log(input)
        setInput("")
    }

  return (

    <div className="chat">
        <div className="chatHeader">
            <div className="chatHeaderLeft">
                <div className="Picture">
                    <Avatar src={`https://avatars.dicebear.com/api/avataaars/humans/${seed}.svg`}/>
                </div>
                <div className="chatHeaderInfo">
                    <h3>Room Name</h3>
                    <p>Last Seen at...</p>
                </div>
            </div>

            <div className="chatHeaderRight">
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                <IconButton>
                    <AttachFile/>
                </IconButton>
                <IconButton>
                    <MoreVert/>
                </IconButton>
                
            </div>


        </div>

        <div className="chatBody">
            <p className="chatMessage"> <span className="chatSenderName">SSS</span> Lorem ipsum dolor sit amet.  <span className="chatTimeStamp">10:43 PM</span></p>
            <p className="chatMessage chatReceiver"> <span className="chatSenderName">Lorem, ipsum.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, enim? Iure nobis nisi adipisci placeat modi inventore odit non maxime suscipit ducimus blanditiis voluptate facilis quod possimus unde quisquam vel, architecto, magnam veritatis nostrum nemo doloremque delectus ex! Odit, maxime! Voluptatum, delectus fuga perspiciatis deleniti modi quo itaque minus hic praesentium illum inventore doloremque consequatur?  <span className="chatTimeStamp">10:43 PM</span></p>
        </div>

        <div className="chatFooter">
            <InsertEmoticon/>
            <form>
                <input value={input} type="text" onChange={e=>setInput(e.target.value)} placeholder="Send Message..."/>
                <button onClick={sendMessage} type="submit">Send</button>
            </form>
            <MicIcon/>
            
        </div>

    </div>
  )
}
export default Chat