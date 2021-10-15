import React from 'react';
import './style.css'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const Message = (props) => {
  // console.log(props.name.name)
  return (
    <div className="message">
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          title={props.name ? props.name : "User is undefined"}
          subheader={props.date}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default Message;