import React from 'react';
import './style.css'
import Container from '@mui/material/Container';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import User from '../User';

const Sidebar = () => {
  const data = {
    name: "Robert",
    email: "email@email.email"
  }
  return (
    <div className='sidebar'>
      <User {...data} />
    </div>
  )

}
export default Sidebar