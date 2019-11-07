import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
    this.state = {

    }
  }
  static getDerivedStateFromProps(props, state){
        return null; 
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
   
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    
  }

  handleDrawerOpen=()=>{
    this.props.handleDrawerOpen(true);
  }

  render (){
    const { classes, open } = this.props;  
     
    return (
         <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={this.handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
           React + Redux + Node + MongoDB
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}
export default Header;