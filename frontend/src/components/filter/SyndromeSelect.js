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

export default function SyndromeSelect(props) {
    const classes = useStyles();

    function handleChange(event) {
        props.setValues(oldValues => ({
            ...oldValues,
            [event.target.name]: event.target.value,
        }));
    }

    return (
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor="syndrome-simple">Syndrome</InputLabel>
            <Select
                value={props.values.syndrome}
                onChange={handleChange}
                inputProps={{
                    name: 'syndrome',
                    id: 'syndrome-simple',
                }}
            >
                <MenuItem value={'Fever'}>Fever</MenuItem>
                <MenuItem value={'Urinary%20tract%20infection'}>Urinary tract infection</MenuItem>
                <MenuItem value={'Sore%20throat'}>Throat infection</MenuItem>
            </Select>
        </FormControl>
  );
}
