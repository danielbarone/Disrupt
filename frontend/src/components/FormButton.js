import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#1b1b1b',
    color: '#fff',
    textTransform: 'none'
  },
}));

export default function FormButton(props) {
  const classes = useStyles();

  return (
      <Button variant="contained" className={classes.button} type={props.type}>
        Update
      </Button>
  );
}
