import { React, useState } from 'react';
import './style.css'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'
import { useEffect } from 'react';



const Message = (props) => {
  const [formDate, setFormDate] = useState(props.date);
  useEffect(() => {
    const formatedDate = new Date(props.date).toLocaleDateString()
    setFormDate(formatedDate)

  }, [])

  return (
    <div className="message">
      {
        props &&
        <Card>
          <Link to={`/users/${props.userId._id}`}>
            <CardHeader
              title={props.userId.name}
              subheader={formDate}
            />
          </Link>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {props.text}
            </Typography>
          </CardContent>
        </Card>
      }
    </div>
  )
}

export default Message;