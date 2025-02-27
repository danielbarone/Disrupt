import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AdbIcon from '@material-ui/icons/Adb';
import BugReportIcon from '@material-ui/icons/BugReport';
import BusinessIcon from '@material-ui/icons/Business';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Typography } from '@material-ui/core';

import ImageAvatar from './ImageAvatar'
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    backgroundColor: '#F16A54',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    backgroundColor: '#F16A54'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        style={{
            boxShadow: 'none', 
            backgroundColor: 'transparent',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <div className={classes.toolbar} style={{height: '80px'}}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? '' : <ChevronLeftIcon style={{color: '#fff'}}/>}
          </IconButton>
        </div>
        <Divider />
        <List style={{marginTop: '36px'}}>
          <ListItem button>
              <ListItemIcon>
                  <DashboardIcon style={{
                                color: '#F16A54', 
                                height: props.height ? props.height : '1em',
                                width: props.width ? props.width : '1em'
                            }} 
                  />
            </ListItemIcon>
              <ListItemText primary='Dashboard' />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                  <BusinessIcon style={{
                        color: props.color, 
                        height: props.height ? props.height : '1em',
                        width: props.width ? props.width : '1em'
                    }} 
                  />
            </ListItemIcon>
              <ListItemText primary='Hospital' />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                  <AssignmentIndIcon style={{
                        color: props.color, 
                        height: props.height ? props.height : '1em',
                        width: props.width ? props.width : '1em'
                    }} 
                  />
            </ListItemIcon>
              <ListItemText primary='Patient' />
            </ListItem>
        </List>

      </Drawer>
      <main className={classes.content}>
        <div 
          style={{
              backgroundColor: '#fff',
              height: '80px',
              width: '100%',
              position: 'fixed',
              zIndex: '15',
              display: 'flex',
              alignItems: 'center',
              marginLeft: '-24px',
              paddingLeft: '65px',
              paddingRight: '120px',
              top: 0,
          }} >
            <div style={{flexGrow: 1, }}>
                <Typography style={{fontSize: '15px', color: 'rgba(0, 0, 0, 0.4)'}}>Search...</Typography>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <Typography style={{fontSize: '15px', color: '#6B7983', fontWeight: '500'}}>
                Dr. Pamela Muresan, MD
              </Typography>
            </div>
            <ImageAvatar />

        </div>
        
        {props.children}
      </main>
    </div>
  );
}
