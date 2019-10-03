import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import { 
    PatientDashboard, 
    PhysicianDashboard
} from '../views'

const BaseRouter = () => (
    <Fragment>
        <Route exact path='/' component={PhysicianDashboard} />
        <Route exact path='/patient' component={PatientDashboard} />
    </Fragment>
)

export default BaseRouter