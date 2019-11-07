import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
    this.state = {
        initData : 'Footer'
    };
  }
  static getDerivedStateFromProps(props, state){
      
        return null; 
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    
  }

  render() {
    // const [initData, setinitData] = React.useState('Sreeja');
    return (
      <footer>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://material-ui.com/">
            Your Website
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </footer>
    );
  }
}
export default Footer;