import {
  ChatOutlined,
  DonutLargeOutlined,
  MoreVert,
  SearchOutlined,
} from "@material-ui/icons";
import { IconButton, Avatar } from "@material-ui/core";
import React from "react";
import SidebarChat from "./SidebarChat";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu9QUPNMMBHLTfxJQ9IHwLG4qDrbWqOJ1mpEJxla=s32-c-mo" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeOutlined />
          </IconButton>
          <IconButton>
            <ChatOutlined />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search or start a new chat" />
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
