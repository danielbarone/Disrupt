import React from 'react';
import AdbIcon from '@material-ui/icons/Adb';
import { Typography } from '@material-ui/core';




// const orgAnts = {
//     0: [
//         ['amoxicillin', 300], 
//         ['doxycycline', 43], 
//         ['cephalexin', 77]
//     ],
// }


export default function AntibioticTable(props) {
    
    return (
        <>
        {props.org_selected ? 
            <>
                <Typography variant='h6' style={{color: '#172D3D', marginBottom: '10px', fontSize: '20px'}}>
                    Susceptibilities
                </Typography>
                {Object.keys(props.antibiotics).map((keyname, index) => {
                    const ant_percent = props.antibiotics[keyname][1]/props.antibiotics[keyname][2]*100
                    return (
                    <div 
                        style={{
                            display: 'flex', 
                            alignItems: 'center', 
                            marginBottom: '12px',
                            borderBottom: 'solid 1px rgba(0, 0, 0, 0.1)',
                            paddingBottom: '12px',
                        }}>
                        <div 
                            style={{
                                borderRadius: '100%',
                                backgroundColor: 'rgba(114, 82, 207, .2)',
                                height: '45px',
                                width: '45px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Typography 
                                style={{
                                    color: 'rgba(114, 82, 207, 1)',
                                    fontWeight: '600',
                                    fontSize: '12px'
                                }}
                            >
                                {ant_percent.toFixed()}%
                            </Typography>
                        </div>
                        <Typography 
                            style={{
                                color: '#172D3D',
                                fontWeight: '400',
                                fontSize: '18px',
                                marginLeft: '12px',
                                flexGrow: 1
                            }}
                        >
                            {props.antibiotics[keyname][0]}
                        </Typography>
                        <div
                            style={{
                                backgroundColor: '#5FE0C6',
                                padding: '2px 12px',
                                borderRadius: '4px'
                            }}
                        >
                            <Typography 
                                style={{
                                    color: '#fff',
                                    fontWeight: '600',
                                    fontSize: '14px',
                                }}
                            >
                                {props.antibiotics[keyname][1]} tests
                            </Typography>
                        </div>
                    </div>
                    )
                })}
            </>
        :
            <div 
                style={{
                    paddingTop: '100px',
                    textAlign: 'center'
                }}
            >
                <AdbIcon 
                    style={{
                        color: 'rgba(0, 0, 0, 0.4)',
                        height: '2em',
                        width: '2em'
                    }} 
                />
                <Typography style={{color: 'rgb(107, 121, 131)', fontWeight: '500', marginTop: '12px'}}>
                    Please select a pathogen.
                </Typography>
            </div>
        }
        </>
    );
}