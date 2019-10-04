import React, { Component } from 'react'
import { Grid, Typography } from '@material-ui/core'
import axios from 'axios'

import {
    AntibioticTable,
    MiniDrawer,
    Table,
} from '../../components'
import {
    Filter,
} from '../../containers'

class PhysicianDashboard extends Component {

    state = {
        api_data: [],
        table_loaded: false,
    }
    getApiData = () => {
        axios.get('https://52773b-01167381.labs.learning.intersystems.com/antibio/api/sus/1')
            .then(res => {
                console.log(res.data)
                this.setState({
                    api_data: res.data.results,
                    table_loaded: true,
                })
            })
    }

    async componentDidMount(){
        await this.getApiData()
    }

    render(){
        const {table_loaded, api_data} = this.state
        return (
            <MiniDrawer>
                <Grid container style={{padding: '0 46px'}} spacing={2}>
                    <Grid item xs={12}>
                        <Filter />
                    </Grid>
                    <Grid item xs={12} style={{marginTop: '36px'}}>
                        <Typography variant='h6' style={{color: '#172D3D', fontSize: '20px'}}>
                            Pathogens
                        </Typography>
                    </Grid>
                    <Grid item xs={6}> 
                        <Table 
                            table_loaded={table_loaded}
                            table_data={api_data}
                        />
                    </Grid>
                    <Grid item xs={6}> 
                        <AntibioticTable />
                    </Grid>
                </Grid>
            </MiniDrawer>
        )
    }
}

export default PhysicianDashboard









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


export default function Filter() {
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
        <>
            <Grid container style={{marginTop: '120px'}}>
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
                            backgroundColor: '#f5f5f5', 
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
