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
        antibiotics: [],
        org_selected: false,
    }

    formatData = (unformatedData) => {

        var orgObj = {}
        var orgWithAntList = {}
        var total = 0

        for (let i = 0; i < unformatedData.length; i++){
            // console.log(unformatedData[i])
            if (unformatedData[i].bacteria in orgObj ) {
                // console.log('exists')
                orgObj[unformatedData[i].bacteria] += 1
                orgWithAntList[unformatedData[i].bacteria].push(unformatedData[i].antibiotic)
                total += 1
                // console.log(orgObj[unformatedData[i].bacteria])
            } else {
                // console.log('doesntexist')
                orgObj[unformatedData[i].bacteria] = 1
                orgWithAntList[unformatedData[i].bacteria] = [unformatedData[i].antibiotic]
                total += 1
                // console.log(orgObj[unformatedData[i].bacteria])
            }
        }
        // console.log('===============')
        // console.log(orgObj)
        // console.log(total)

        var formatedData = {}
        Object.keys(orgObj).map((keyname, i) => {
            formatedData[keyname] = [orgObj[keyname], orgObj[keyname]/total*100, {}]
        })
        
        // console.log(formatedData)

        Object.keys(formatedData).map((keyname, i) => {
            var antibiotics_object = {}
            for (let i = 0; i < orgWithAntList[keyname].length; i++){
                if (i === 0){
                    antibiotics_object[orgWithAntList[keyname][i]] = [orgWithAntList[keyname][i], 1]
                } else {
                    if (orgWithAntList[keyname][i] in antibiotics_object){
                        antibiotics_object[orgWithAntList[keyname][i]][1] += 1
                    } else {
                        antibiotics_object[orgWithAntList[keyname][i]] = [orgWithAntList[keyname][i], 1]
                    }
                }
            }
            formatedData[keyname][2] = antibiotics_object
        })

        var superFormatedData = Object.keys(formatedData).map((keyname, index) => ({
            'bacteria': keyname,
            'isolates': formatedData[keyname][0],
            'percent': formatedData[keyname][1],
            'antibiotics': formatedData[keyname][2],
        }))

        // console.log(superFormatedData)



        return (
            superFormatedData
        )
    }

    setAntibiotics = (ants) => {
        this.setState({
            antibiotics: ants
        })
    }

    setOrgSelected = (thebool) => {
        this.setState({org_selected: thebool})
    }
    getApiData = () => {
        axios.get('https://52773b-01167381.labs.learning.intersystems.com/antibio/api/sus/Urinary%20tract%20infection/0/Adventist%20Health%20Glendale')
            .then(res => {
                // console.log(res.data.records)
                this.setState({
                    api_data: this.formatData(res.data.records),
                    table_loaded: true,
                })
            })
    }
    getApiDataFiltered = (syndrome,time_range,location) => {
        console.log(`https://52773b-01167381.labs.learning.intersystems.com/antibio/api/sus/${syndrome}/${time_range}/${location}`)
        axios.get(`https://52773b-01167381.labs.learning.intersystems.com/antibio/api/sus/${syndrome}/${time_range}/${location}`)
        .then(res => {
            // console.log(res.data.records)
            this.setState({
                api_data: this.formatData(res.data.records),
                table_loaded: true,
            })
        })
    }

    setTableLoadedFalse = () => {
        this.setState({
            table_loaded: false
        })
    }

    async componentDidMount(){
        await this.getApiData()
    }

    render(){
        const {table_loaded, api_data} = this.state
        return (
            <MiniDrawer>
                <Grid container style={{padding: '0 46px', marginBottom: '200px'}} spacing={2}>
                    <Grid item xs={12}>
                        <Filter apiDataFiltered={this.getApiDataFiltered} setTableLoaded={this.setTableLoadedFalse} />
                    </Grid>
                    <Grid item xs={12} style={{marginTop: '36px'}}>
                        <Typography variant='h6' style={{color: '#172D3D', fontSize: '20px'}}>
                            Pathogens
                        </Typography>
                    </Grid>
                    <Grid item xs={7}> 
                        <Table 
                            table_loaded={table_loaded}
                            table_data={api_data}
                            setAntibiotics={this.setAntibiotics}
                            setOrgSelected={this.setOrgSelected}
                        />
                    </Grid>
                    <Grid item xs={5} style={{maxHeight: '400px', overflow: 'scroll'}}> 
                        {/* {this.state.org_selected ? this.state.antibiotics : <AntibioticTable />} */}
                        <AntibioticTable antibiotics={this.state.antibiotics} org_selected={this.state.org_selected} />
                    </Grid>
                </Grid>
            </MiniDrawer>
        )
    }
}

export default PhysicianDashboard