import React from 'react';
import './Sidebar.css';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarHeader'>
        <IconButton>
          <AccountCircleIcon/>
        </IconButton>
        <div className="sidebarHeaderRight">
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
      <div className='searchBox'>
        <SearchIcon/>
        <input placeholder='Search Contacts and Groups....' type="text"/>
      </div>
      <div className='chatsName'>
        <SidebarChat addNewChat/>
        <SidebarChat/>
        <SidebarChat/>
      </div>
      
      
      
    </div>
  )
}

export default Sidebar