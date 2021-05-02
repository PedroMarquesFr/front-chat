import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

export default function router() {
    return (
        <Router>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/register" component={ Register } />
          {/* <Route path="/cart" component={ Cart } />
          <Route path="/details/:id" component={ Details } />
          <Route path="/checkout" component={ Checkout } /> */}
        </Switch>
      </Router>
    )
}
