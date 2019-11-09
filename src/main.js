import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import Login from './containers/Login';
import Register from './components/Register';

const store = createStore(rootReducer);

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/dashboard" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>
    </Router>
  )

ReactDOM.render(
  <Provider store={store}>
    {routing}
  </Provider>, document.getElementById('app'));