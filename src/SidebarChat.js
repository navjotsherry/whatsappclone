import { Avatar } from "@mui/material";
import React, { useState , useEffect } from "react"
import './SidebarChat.css';

function SidebarChat(props) {

  const [seed,setSeed]= useState('');

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
    }, []);
  
  function createChat(){
    const roomName = prompt("Please enter name for chat")
    if (roomName){
      console.log(roomName)
    }
  };

  return !props.addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/avataaars/humans/${seed}.svg`}/>
      <div className="sidebarChatInfo">
        <h3>Room name</h3>
        <h4>Last Message..</h4>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat">
        <h2>Add new Chat</h2>
    </div>
  )
}
export default SidebarChat