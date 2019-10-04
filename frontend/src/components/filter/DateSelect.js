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

export default function DateSelect(props) {
    const classes = useStyles();

    function handleChange(event) {
        props.setValues(oldValues => ({
            ...oldValues,
            [event.target.name]: event.target.value,
        }));
    }

    return (
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor="date-simple">Date Range</InputLabel>
            <Select
                value={props.values.date}
                onChange={handleChange}
                inputProps={{
                    name: 'date',
                    id: 'date-simple',
                }}
            >
                <MenuItem value={0}>Last 30 days</MenuItem>
                <MenuItem value={1}>Last 3 months</MenuItem>
                <MenuItem value={2}>Last 6 months</MenuItem>
            </Select>
        </FormControl>
  );
}
