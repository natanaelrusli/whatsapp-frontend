import React, { useEffect, useState } from "react";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Pusher from 'pusher-js';
import axios from './axios';

function App() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    axios.get('/messages/sync')
      .then(response => {
        console.log(response.data);
        setMessages(response.data)
      })
  }, [])

  // Pusher for the frontend
  useEffect(() => {
    const pusher = new Pusher('b0eaac0916ece4820287', {
      cluster: 'ap1'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages , newMessage])
    });

    // Cleanup function
    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [messages])

  console.log(messages)

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
