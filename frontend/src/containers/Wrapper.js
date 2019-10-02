import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

function getTheme(theme){
    return createMuiTheme({
        palette: {},
        primary: {},
    })
}

export const theme = getTheme({
    paletteType: 'light',
})


export default function Wrapper(props) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {props.children}
        </ThemeProvider>
    )
}
