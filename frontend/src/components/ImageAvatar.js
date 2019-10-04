import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import doctor from '../assets/doctor.jpg'

const useStyles = makeStyles({
  avatar: {
    margin: 10,
    marginLeft: '16px',
    width: 35,
    height: 35,
  },

});

export default function ImageAvatar() {
  const classes = useStyles();

  return (
      <Avatar alt="Remy Sharp" src={doctor} className={classes.avatar} />
  );
}
