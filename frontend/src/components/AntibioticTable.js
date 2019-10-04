import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import AdbIcon from '@material-ui/icons/Adb';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
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

const orgAnts = {
    0: [
        ['amoxicillin', 300], 
        ['doxycycline', 43], 
        ['cephalexin', 77]
    ],
    1: [

    ],
    2: [

    ],
    3: [

    ],
    4: [

    ],
    5: [

    ],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
}

const rows = [
  createData('E. coli', 61, 28),
  createData('S. aureus', 60, 28),
  createData('Salmonella spp', 49, 22),
  createData('E. coli 2', 61, 28),
  createData('S. aureus 2', 60, 28),
  createData('Salmonella spp 2', 49, 22),
];

export default function AntibioticTable(props) {

    const classes = useStyles();
    const [selected, setSelected] = React.useState([]);
    const [antibiotics, setAntibiotics] = React.useState([])

    const handleClick = (event, pathogen, isolates) => {
        console.log(isolates)
        const selectedIndex = selected.indexOf(pathogen);
        let newSelected = [];
        if (selectedIndex === -1) {
          newSelected = [pathogen];
        }
        setSelected(newSelected);
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
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
    
    return (
        <div 
            style={{
                display: 'flex', 
                justifyContent: 'center',
                paddingTop: '100px'
            }}
        >
            <AdbIcon 
                style={{
                    color: 'rgba(0, 0, 0, 0.4)',
                    height: '2em',
                    width: '2em'
                }} 

            />
        </div>
    );
}