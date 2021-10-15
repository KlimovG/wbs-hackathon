import React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import User from '../../Component/User'
import Message from '../../Component/Message'
import './style.css'
import { useParams, Link, useRouteMatch } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';

const UserPage = () => {
  const [user, setUser] = useState()
  const [messages, setMessages] = useState()

  const { id } = useParams();
  const { url, path } = useRouteMatch()
  console.log(path)
  useEffect(() => {
    const searchUrl = `https://minitwitterbackend.herokuapp.com/users/${id}`
    fetch(searchUrl)
      .then(
        (res) => {
          console.log({ responseStatus: res.status });
          if (!res.ok)
            throw new Error(`An error has occured. HTTP code: ${res.status}`);
          return res.json();
        },
        (err) => console.log({ first: err.message })
      )
      .then(data => setUser(data))

    getAllMessages()
  }, [id])
  function getAllMessages() {
    const url = `https://minitwitterbackend.herokuapp.com/users/${id}/messages`
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
    <Container maxWidth="sm">
      <User
        {...user}
      />
      <Link to={`/users/`}>
        Back to Users
      </Link> <br />
      <Link to={`/`}>
        Back to Messages
      </Link>
      <Stack className="user-messages">
        {
          messages && messages.map((message, i) => {
            return (
              <Message
                key={message._id}
                {...message}
              />
            )
          })
        }

      </Stack>
    </Container>
  )
}

export default UserPage;