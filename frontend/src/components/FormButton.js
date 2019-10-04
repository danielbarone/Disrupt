import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    // backgroundColor: '#172D3D',
    color: '#172D3D',
  },
}));

export default function FormButton(props) {
  const classes = useStyles();

  return (
      <Button className={classes.button} type={props.type}>
          Update
      </Button>
  );
}
