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