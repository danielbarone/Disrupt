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
    // getApiData = () => {
    //     axios.get('https://52773b-01167381.labs.learning.intersystems.com/antibio/api/sus/1')
    //         .then(res => {
    //             console.log(res.data)
    //             this.setState({
    //                 api_data: res.data.results,
    //                 table_loaded: true,
    //             })
    //         })

    // }

    parseApiData = () => {
        // get "records" from body
        data = [
            {
                "id":31,
                "syndrome":"Fever",
                "timeTested":0,
                "wing":"ICU",
                "hospital":"Glendale Memorial Hospital",
                "city":"Glendale",
                "state":"CA",
                "bacteria":"Vibrio parahaemolyticus/vulnificus",
                "antibiotic":"Streptomycin"
            },
            {
                "id":32,
                "syndrome":"Fever",
                "timeTested":0,
                "wing":"ICU",
                "hospital":"Glendale Memorial Hospital",
                "city":"Glendale",
                "state":"CA",
                "bacteria":"Vibrio parahaemolyticus/vulnificus",
                "antibiotic":"Streptomycin"
            },
            {
                "id":34,
                "syndrome":"Fever",
                "timeTested":0,
                "wing":"ICU",
                "hospital":"Glendale Memorial Hospital",
                "city":"Glendale",
                "state":"CA",
                "bacteria":"Vibrio parahaemolyticus/vulnificus",
                "antibiotic":"Streptomycin"
            },
            {
                "id":37,
                "syndrome":"Fever",
                "timeTested":0,
                "wing":"ICU",
                "hospital":"Glendale Memorial Hospital",
                "city":"Glendale",
                "state":"CA",
                "bacteria":"Vibrio parahaemolyticus/vulnificus",
                "antibiotic":"Streptomycin"
            },
        ]

        const pathogens = new Map();

        data.forEach(record => {
            if (!pathogens.has(record.bacteria)) {
                pathogens.set(record.bacteria, {
                    isolates: 0,
                    incidence: 0.0,
                    antibiotics: []
                });
            }

            const entry = pathogens.get(record.bacteria)

            pathogens.set(record.bacteria, {
                isolates: entry.isolates + 1,
                incidence: entry.incidence + (1 / data.length),
                antibiotics: entry.antibiotics.concat([record.antibiotic])
            });
        });
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
