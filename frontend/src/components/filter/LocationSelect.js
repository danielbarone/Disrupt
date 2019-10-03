import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function LocationSelect(props) {
    const classes = useStyles();

    function handleChange(event) {
        props.setValues(oldValues => ({
            ...oldValues,
            [event.target.name]: event.target.value,
        }));
    }

    return (
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor="location-simple">Location</InputLabel>
            <Select
                value={props.values.location}
                onChange={handleChange}
                inputProps={{
                    name: 'location',
                    id: 'location-simple',
                }}
            >
                <MenuItem value={0}>Intensive Care Unit</MenuItem>
                <MenuItem value={1}>USC Verdugo Hills Hospital</MenuItem>
                <MenuItem value={2}>Glendale, CA</MenuItem>
                <MenuItem value={3}>Los Angeles County</MenuItem>
            </Select>
        </FormControl>
  );
}
