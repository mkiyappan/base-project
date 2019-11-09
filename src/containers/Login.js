import { connect } from 'react-redux';
import { login } from '../actions';
import Login from '../components/Login';

const mapStateToProps = state => {
    return {
        loginResponse : state.login.loginResponse
    };
};

const mapDispatchToProps = dispatch => {
    return {
       dispatchLogin : data => dispatch(login(data))
    };
};

export default connect( mapStateToProps, mapDispatchToProps)(Login);