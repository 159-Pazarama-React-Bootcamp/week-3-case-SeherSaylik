import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Hello from './Pages/Hello/Hello';
import Login from './Pages/Login/Login'

export default function Album() {
  return (
  <Router>
      <Switch>
        <Route path="/" exact component={Hello}></Route>
        <Route path="/login" component={Login}></Route>
       </Switch>
  </Router>
  )
}