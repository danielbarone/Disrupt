import React, { Fragment } from 'react'
import { Home } from '../views'

import { Route } from 'react-router-dom'

const BaseRouter = () => (
    <Fragment>
        <Route exact path='/' component={Home} />
    </Fragment>
)


export default BaseRouter