import React from 'react';
import './style.css'
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Message from '../../Component/Message'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';



const MessagePage = () => {
  const { id } = useParams();
  const [message, setMessage] = useState()
  useEffect(() => {
    const url = `https://minitwitterbackend.herokuapp.com/messages/${id}`
    console.log(url)
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
      .then(data => setMessage(data))
  }, [id])
  return (
    <Container maxWidth="sm">
      {
        message &&
        <Message
          {...message}
        />
      }

    </Container>
  )
}

export default MessagePage;