import React, { Component } from 'react'
import {
    Wrapper,
} from './containers'

import {
    history,
    BaseRouter
} from './navigation'

import { 
    Router as BrowserRouter
 } from 'react-router-dom'

class App extends Component {

    render(){
        return(
            <BrowserRouter history={history}>
                <Wrapper {...this.props} >
                    <BaseRouter />
                </Wrapper>
            </BrowserRouter>
        )
    }
}

export default App
