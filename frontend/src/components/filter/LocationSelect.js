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
        marginRight: '36px'
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
                <MenuItem value={'Glendale%20Memorial%20Hospital'}>Intensive Care Unit</MenuItem>
                <MenuItem value={'Adventist%20Health%20Glendale'}>USC Verdugo Hills Hospital</MenuItem>
                <MenuItem value={'St%20Mary%27s%20Hospital'}>Long Beach, CA</MenuItem>
                <MenuItem value={'St%20Joseph%27s%20Hospital'}>Los Angeles County</MenuItem>
            </Select>
        </FormControl>
  );
}
