


import React from 'react'
import {
    DateSelect,
    FormButton,
    LocationSelect,
    SyndromeSelect,
    MapLocation,
} from '../components'
import Collapse from '@material-ui/core/Collapse';
import { Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import MyLocationIcon from '@material-ui/icons/MyLocation'

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
        padding: '20px',
        position: 'relative',
        paddingTop: '36px'
    }
}));


export default function Filter(props) {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        syndrome: '',
        date: '',
        location: ''
    });
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(values.syndrome,values.date,values.location)
        props.setTableLoaded()
        props.apiDataFiltered(values.syndrome,values.date,values.location)
    }

    const getRadius = () => {
        if (values.location === '') {
            return 100
        } else if (values.location === 'Glendale%20Memorial%20Hospital'){
            return 100
        } else if (values.location === 'Adventist%20Health%20Glendale'){
            return 500
        } else if (values.location === 'St%20Mary%27s%20Hospital'){
            return 6000
        } else if (values.location === 'St%20Joseph%27s%20Hospital'){
            return 15000
        }
    }

    return (
        <>
            <Grid container style={{marginTop: '105px'}}>
                <Grid item xs={12} style={{marginBottom: '10px'}}>
                    <Typography variant='h6' style={{color: '#172D3D', fontSize: '20px'}}>
                        Filter
                    </Typography>
                </Grid>
            </Grid>
            <Paper className={classes.filterContainer}>
                <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
                    <Grid container style={{marginBottom: '15px', paddingBottom: '36px'}}>
                        <Grid item xs={12}>
                            <div 
                                style={{
                                    height: '64px',
                                    display: 'flex', 
                                    alignItems: 'center',
                                }}>
                                <SyndromeSelect 
                                    setValues={setValues} 
                                    values={values} 
                                />
                                <DateSelect 
                                    setValues={setValues} 
                                    values={values} 
                                />
                                <LocationSelect setValues={setValues} values={values} />
                            </div>

                        </Grid>
                        <Grid item xs={12} style={{marginTop: '20px'}}>
                            <Collapse in={expanded} >
                                <MapLocation circleRadius={getRadius()} />
                            </Collapse>
                        </Grid>
                    </Grid>
                    <div 
                        style={{
                            height: '50px', 
                            backgroundColor: '#fafafa', 
                            position: 'absolute', 
                            bottom: 0, 
                            left: 0, 
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'flex-end',
                            paddingRight: '10px'
                        }}
                    >
                        <FormButton type='submit' />
                    </div>
                </form>
                <MyLocationIcon 
                    style={{
                        position: 'absolute',
                        top: 15,
                        right: 20,
                        color: !expanded ? '#172D3D' : 'rgba(0, 0, 0, 0.54)',
                        cursor: 'pointer'
                    }} 
                    onClick={handleExpandClick}
                />


            
            </Paper>
        </>
    )
}
