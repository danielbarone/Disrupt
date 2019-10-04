import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import doctor from '../assets/doctor.jpg'

const useStyles = makeStyles({
  avatar: {
    margin: 10,
    marginLeft: '16px',
    width: 30,
    height: 30
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
});

export default function ImageAvatar() {
  const classes = useStyles();

  return (
      <Avatar alt="Remy Sharp" src={doctor} className={classes.avatar} />
  );
}
