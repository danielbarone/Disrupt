import React from 'react'
import { Grid } from '@material-ui/core'

import {
    Table,
} from '../../components'
import {
    Filter,
} from '../../containers'

export default function PhysicianDashboard() {
    return (
        <Grid container justify='center'>
            <Grid item xs={6}>
                
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={6}> 
                <Table />
            </Grid>
            
        </Grid>

    )
}
