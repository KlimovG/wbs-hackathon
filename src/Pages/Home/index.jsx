import React from 'react';
import Container from '@mui/material/Container';
import Message from '../../Component/Message'
import { useState } from 'react';
import { useEffect } from 'react';

const MainPage = () => {
  const [messages, setMessages] = useState()


  useEffect(() => {
    getAllMessages()
  }, [])
  // Function to fet all messages from api
  function getAllMessages() {
    const url = "https://minitwitterbackend.herokuapp.com/messages"
    fetch(url)
      .then(
        (res) => {
          console.log({ responseStatus: res.status });
          if (!res.ok)
            throw new Error(`An error has occured. HTTP code: ${res.status}`);
          return res.json();
        },
        (err) => console.log({ first: err.message })
      )
      .then(data => setMessages(data))
  }

  return (
    <Container maxWidth="lg">
      {messages && messages.map((message, i) => {
        if (message.__v !== 0) {
          return (
            <Message
              key={message._id}
              name={message.userId ? message.userId.name : "User is undefined"}
              text={message.text}
              date={message.date}
            />
          )
        }
      })}
    </Container>

  )
};

export default MainPage;
