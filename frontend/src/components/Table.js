import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
    paddingRight: '20px',
    paddingLeft: '20px'

  },
  table: {
  },
}));

function createData(pathogen, isolates, incidence) {
    return { pathogen, isolates, incidence };
}

const rows = [
  createData('E. coli', 61, 28),
  createData('S. aureus', 60, 28),
  createData('Salmonella spp', 49, 22),
  createData('E. coli', 61, 28),
  createData('S. aureus', 60, 28),
  createData('Salmonella spp', 49, 22),
];

export default function SimpleTable() {
    const classes = useStyles();
    const handleClick = (event, pathogen) => {
        alert(pathogen)
    }
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    }
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                <TableRow>
                    <TableCell>Pathogen</TableCell>
                    <TableCell align="right">Number of Isolates</TableCell>
                    <TableCell align="right">Incidence Rate</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
                    <TableRow 
                        key={row.name}
                        onClick={event => handleClick(event, row.pathogen)}
                    >
                    <TableCell component="th" scope="row">
                        {row.pathogen}
                    </TableCell>
                    <TableCell align="right">{row.isolates}</TableCell>
                    <TableCell align="right">{row.incidence}</TableCell>
                    </TableRow>
                ))}
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
        </Paper>
    );
}