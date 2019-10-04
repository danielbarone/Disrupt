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
    // const [values, setValues] = React.useState({
    //     syndrome: '',
    // });

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
                <MenuItem value={0}>Endocarditis</MenuItem>
                <MenuItem value={1}>Sepsis</MenuItem>
                <MenuItem value={2}>Urinary Tract Infection</MenuItem>
            </Select>
        </FormControl>
  );
}
