import React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import User from '../../Component/User'
import { useParams, Link, useRouteMatch } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState()
  const { id } = useParams();
  const { url, path } = useRouteMatch()
  // useEffect(() => {
  //   const url = `https://minitwitterbackend.herokuapp.com/users/`
  //   console.log(url)
  //   fetch(url)
  //     .then(
  //       (res) => {
  //         console.log({ responseStatus: res.status });
  //         if (!res.ok)
  //           throw new Error(`An error has occured. HTTP code: ${res.status}`);
  //         return res.json();
  //       },
  //       (err) => console.log({ first: err.message })
  //     )
  //     .then(data => setUsers(data))
  // }, [])
  useEffect(() => {
    if (id) {
      const searchUrl = `https://minitwitterbackend.herokuapp.com/users/${id}`
      console.log(searchUrl)
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
        .then(data => setUsers(data))

    } else {
      const searchUrl = `https://minitwitterbackend.herokuapp.com/users/`
      console.log(searchUrl)
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
        .then(data => setUsers(data))
    }
  }, [id])
  return (
    <Container maxWidth="sm">
      {users && users.map(user => {
        if (user.name !== 'test') {
          return (
            <Link
              key={user._id}

              to={`/users/${user._id}`}>
              <User
                name={user.name}
                email={user.email}
              />

            </Link>
          )

        }
      })
      }
    </Container>
  )
}

export default Users;