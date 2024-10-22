import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
    paddingRight: '20px',
    paddingLeft: '20px',
    minHeight: '376px'

  },
  table: {
  },
}));


export default function SimpleTable(props) {

    const classes = useStyles();
    const [selected, setSelected] = React.useState([]);

    const handleClick = (event, pathogen, antibiotics) => {
        const selectedIndex = selected.indexOf(pathogen);
        let newSelected = [];
        if (selectedIndex === -1) {
          newSelected = [pathogen];
        }
        setSelected(newSelected);
        props.setAntibiotics(antibiotics)
        props.setOrgSelected(true)
        console.log(pathogen)
    }

    const isSelected = pathogen => selected.indexOf(pathogen) !== -1;

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    }

    const createRows = () => {
        
        const rows = props.table_data
        const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

        
        return(
            <>
                <Table className={classes.table}>
                    <TableHead>
                    <TableRow>
                        <TableCell style={{color: '#172D3D'}}>Name</TableCell>
                        <TableCell style={{color: '#172D3D'}} align="right">Number of Isolates</TableCell>
                        <TableCell style={{color: '#172D3D'}} align="right">Incidence Rate</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                        const isItemSelected = isSelected(row.bacteria);

                        return (
                            <TableRow 
                                key={row.bacteria}
                                onClick={event => handleClick(event, row.bacteria, row.antibiotics)}
                                tabIndex={-1}
                                selected={isItemSelected}
                                aria-checked={isItemSelected}
                                style={{
                                    cursor: 'pointer',
                                    backgroundColor: isItemSelected ? 'rgba(0, 0, 0, 0.04)' : ''
                                }}
                            >
                            <TableCell component="th" scope="row">
                                <Typography 
                                    style={{
                                        fontSize: '14px',
                                        fontWeight: '400',
                                    }}
                                >
                                    {row.bacteria}
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <div
                                    style={{
                                        backgroundColor: '#5FE0C6',
                                        padding: '2px 12px',
                                        borderRadius: '4px',
                                        display: 'inline-block'
                                    }}
                                >
                                    <Typography 
                                        style={{
                                            fontSize: '14px',
                                            fontWeight: '500',
                                            color: '#fff'
                                        }}
                                    >
                                        {row.isolates}
                                    </Typography>
                                </div>
                            </TableCell>
                            <TableCell align="right">
                                <Typography 
                                    style={{
                                        fontSize: '12px',
                                        fontWeight: '500',
                                        color: '#7252cf'
                                    }}
                                >
                                    {row.percent.toFixed(2)} %
                                </Typography>
                            </TableCell>
                            </TableRow>
                        )
                    })}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    backIconButtonProps={{
                        'aria-label': 'previous page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'next page',
                    }}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </>
        )
    }

    return (
        <Paper className={classes.root}>
            {props.table_loaded ? 
                createRows() : 
                <div style={{display: 'flex', justifyContent: 'center', paddingTop: '130px'}}>
                    <CircularProgress />
                </div>
                
            }
        </Paper>
    );
}