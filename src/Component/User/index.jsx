import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useParams, Link, useRouteMatch } from 'react-router-dom'



const User = (props) => {
  return (
    <div className="user">
      {
        props &&
        <Card>
          <CardHeader
            title={props.name}

          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {props.email}
            </Typography>
          </CardContent>
        </Card>
      }
    </div>
  )
}

export default User;