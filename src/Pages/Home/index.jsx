import React from 'react';
import Container from '@mui/material/Container';
import Message from '../../Component/Message'
import Sidebar from '../../Component/Sidebar'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './style.css'


const MainPage = () => {
  const [messages, setMessages] = useState()
  const [letSort, setLetSort] = useState(false)
  const [isSortByDateUp, setIsSortByDateUp] = useState(false);
  const [isSortByDateDown, setIsSortByDateDown] = useState(false);
  const [isSortByUser, setIsSortByUser] = useState(false);
  const [isSortByText, setIsSortByText] = useState(false);
  const [search, setSearch] = useState("")
  const { id } = useParams();

  function sorting() {
    setLetSort(prev => prev = !prev)
  }


  function sortByDateUp(data) {
    const sortedMessages = data.sort((a, b) => {
      if (a.date > b.date) {
        return 1
      }
      if (a.date < b.date) {
        return -1
      }
      return 0
    })
    return sortedMessages
  }
  function sortByDateDown(data) {
    const sortedMessages = data.sort((a, b) => {
      if (a.date > b.date) {
        return -1
      }
      if (a.date < b.date) {
        return 1
      }
      return 0

    })
    return sortedMessages
  }

  function getSearchValue(e) {
    setSearch(e.target.value)
  }

  function searchByUser(data) {
    const value = search;
    const filteredData = data.filter(message => {
      console.log(message.userId.name === value)
      return message.userId.name === value
    });
    return filteredData;
  }
  function searchByText(data) {
    const value = search;
    const filteredData = data.filter(message => {
      const arrayOfText = message.text.split(" ").some(word => word === value)
      if (arrayOfText) {
        return message
      }
      return
    });
    console.log(filteredData)
    return filteredData;
  }

  useEffect(() => {
    getAllMessages()
  }, [letSort])
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
      .then(data => {
        if (isSortByDateUp) {
          setMessages(() => sortByDateUp(data))

        } else if (isSortByDateDown) {
          setMessages(() => sortByDateDown(data))
        } else if (isSortByUser) {
          setMessages(() => searchByUser(data))
        } else if (isSortByText) {
          setMessages(() => searchByText(data))
        } else {
          setMessages(data)

        }
      })
  }

  return (
    <div className="main">
      <Sidebar />
      <Stack className="filter" spacing={2} direction="column">
        <Button onClick={() => {
          setIsSortByDateUp(true)
          setIsSortByDateDown(false)
          setIsSortByUser(false)
          setIsSortByText(false)

          sorting()
        }} variant="contained">Sort by date up</Button>
        <Button onClick={() => {
          setIsSortByDateDown(true)
          setIsSortByDateUp(false)
          setIsSortByUser(false)
          setIsSortByText(false)

          sorting()
        }} variant="contained">Sort by date down</Button>
        <TextField
          id="outlined-basic"
          label="By User"
          variant="outlined"
          onChange={(e) => getSearchValue(e)}
        />
        <Button onClick={() => {
          setIsSortByUser(true)
          setIsSortByDateUp(false)
          setIsSortByDateDown(false)
          setIsSortByText(false)

          sorting()
        }} variant="contained">Sort by user</Button>
        <TextField
          id="outlined-basic"
          label="By text"
          variant="outlined"
          onChange={(e) => getSearchValue(e)}
        />
        <Button onClick={() => {
          setIsSortByUser(false)
          setIsSortByDateUp(false)
          setIsSortByDateDown(false)
          setIsSortByText(true)

          sorting()
        }} variant="contained">Sort by text</Button>
        <Button onClick={() => {
          setIsSortByUser(false)
          setIsSortByDateUp(false)
          setIsSortByDateDown(false)
          setIsSortByText(false)

          sorting()
        }} color="error" variant="contained">Reset</Button>
      </Stack>
      <Container maxWidth="sm">
        {
          messages && messages.map((message, i) => {
            if (message.__v !== 0) {
              return (
                <Message
                  key={message._id}
                  {...message}
                />
              )
            }
          })
        }
      </Container>
    </div>

  )
};

export default MainPage;


