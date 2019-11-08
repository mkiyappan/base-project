import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

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

ReactDOM.render(routing, document.getElementById('app'));