import React from 'react'
import { Grid } from '@material-ui/core'

import {
    MiniDrawer,
    Table,
} from '../../components'
import {
    Filter,
} from '../../containers'

export default function PhysicianDashboard() {
    return (
        <MiniDrawer>
            <Grid container style={{padding: '0 80px'}} spacing='2'>
                <Grid item xs={10}>
                    <Filter />
                </Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={6}> 
                    <Table />
                </Grid>
            </Grid>
        </MiniDrawer>
    )
}
