import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import axios from 'axios'

import {
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
        axios.get(this.props.api_url)
            .then(res => {
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
                <Grid container style={{padding: '0 80px'}} spacing='2'>
                    <Grid item xs={10}>
                        <Filter />
                    </Grid>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={6}> 
                        <Table 
                            table_loaded={table_loaded}
                            table_data={api_data}
                        />
                    </Grid>
                </Grid>
            </MiniDrawer>
        )
    }
}


export default PhysicianDashboard