import { Avatar, IconButton } from "@material-ui/core";
import { AttachFileOutlined, InsertEmoticon, Mic, MoreVert, SearchOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import axios from './axios'
import "./Chat.css";

function Chat({ messages }) {
  const [input, setInput] = useState('')

  const sendMessage = async (e) => {
    e.preventDefault()

    var t = new Date()
    await axios.post('/api/v1/message/new', {
      message: input,
      name: 'Nael',
      // Time intl format
      timestamp: t.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
      recieved: false
    })

    setInput('')
  }

  return (
    <div className="chat">

      <div className="chat__header">
        <Avatar />

        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFileOutlined />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      {/* Chat */}
      {/* Chat Input */}

      <div className="chat__body">
        {messages.map(message => (
          <p className={`chat__message ${message.recieved === false && 'chat__reciever'}`} key={message.timestamp}>
            <span className="chat__name">
              {message.name}
            </span>

            {message.message}

            <span className="chat__timestamp">
              {message.timestamp}
            </span>
          </p>
        ))}
      </div>

      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Type a message" />
          <button onClick={sendMessage} type="submit">Send message</button>
        </form>
        <Mic />
      </div>
    </div>
  );
}

export default Chat;
