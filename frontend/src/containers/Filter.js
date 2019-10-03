import React from 'react'
import {
    DateSelect,
    FormButton,
    LocationSelect,
    SyndromeSelect,
    MapLocation,
} from '../components'


import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

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
    filterContainer: {
        padding: '20px'
    }
}));


export default function Filter() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        syndrome: '',
        date: '',
        location: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(values)
    }

    const getRadius = () => {
        if (values.location === '') {
            return 500
        } else if (values.location === 0){
            return 1000
        } else if (values.location === 1){
            return 2000
        } else if (values.location === 2){
            return 3000
        } else if (values.location === 3){
            return 4000
        }
    }

    return (
        <Paper className={classes.filterContainer}>
        <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
            <Grid container style={{marginBottom: '15px'}}>
                <Grid item xs={4}>
                    <SyndromeSelect setValues={setValues} values={values} />
                </Grid>
                <Grid item xs={4}>
                    <DateSelect setValues={setValues} values={values} />
                </Grid>
                <Grid item xs={4}>
                    <LocationSelect setValues={setValues} values={values} />
                </Grid>
                <Grid item xs={12}>
                    <MapLocation circleRadius={getRadius()} />
                </Grid>
            </Grid>
            <FormButton type='submit'>Send</FormButton>
        </form>
        
        </Paper>
    )
}
