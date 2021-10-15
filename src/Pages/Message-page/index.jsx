import React from 'react';
import './style.css'
import Container from '@mui/material/Container';
import Message from '../../Component/Message'




const MessagePage = () => {


  return (
    <Container maxWidth="lg">
      {/* {messages && messages.map(item => {
        return (
          <Message {...messages} />
        )
      })} */}
    </Container>
  )
}

export default MessagePage;