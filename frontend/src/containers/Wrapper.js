import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

function getTheme(theme){
    return createMuiTheme({
        palette: {
            background: {
                default: theme.paletteType === 'light' ?
                     '#EEF2F5': 
                    '',
                appBarBackground: 'red'
            },
        },
        primary: {
            main: theme.paletteType === 'light' ? 
                '#172D3D' :
                '#172D3D',
        },
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
