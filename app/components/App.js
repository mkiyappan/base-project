import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
// import { withStyles } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Home from './Home';

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
    marginRight: 36,
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
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function App() {
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
            <Header classes={classes}
                handleDrawerOpen = {handleDrawerOpen}
                open = {open}
            />
            <Sidebar classes={classes}
                handleDrawerClose = {handleDrawerClose}
                open = {open}
                theme = {theme}
            />
            <Home classes={classes}/>
            <Footer classes={classes}/>
        </div>
    );
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.listRef = React.createRef();
//     this.state = {
//         open : false
//     }
//   }
//   static getDerivedStateFromProps(props, state){
//      return null; 
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     return null;
//   }

//   componentDidUpdate(prevProps, prevState, snapshot) {
    
//   }

//   handleDrawerOpen = (status) => {
//     this.setState({
//       open: status
//     });
//   };

//   handleDrawerClose = (status) => {
//     this.setState({
//       open: status
//     });
//   };

//   render() {
//     // const [initData, setinitData] = React.useState('Sreeja');
//     const { classes } = this.props;
//     return (
//         <div className={classes.root}>
//             <CssBaseline />
//             <Header classes={classes}
//                 handleDrawerOpen = {this.handleDrawerOpen}
//                 open = {this.state.open}
//             />
//             <Sidebar classes={classes}
//                 handleDrawerClose = {this.handleDrawerClose}
//                 open = {this.state.open}
//             />
//             <Home classes={classes}/>
//             <Footer classes={classes}/>
//         </div>
//     );
//   }
// }
// export default  withStyles(useStyles)(App);