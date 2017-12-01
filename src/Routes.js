import React, {Component} from 'react'

import {Router, Route, IndexRoute, IndexRedirect, Redirect, hashHistory} from 'react-router'

import Index from './pages/Index'
import Position from './pages/Position'
import Search from './pages/Search'
import Mine from './pages/Mine'
import Page404 from './pages/404'
// import Detail from './pages/Detail'

class Routes extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Index}>
          <IndexRedirect to="/position"></IndexRedirect>
          <Route path="position" component={Position}></Route>
          <Route path="search" component={Search}></Route>
          <Route path="mine" component={Mine}></Route>
        </Route>
        <Route path="*" component={Page404}></Route>
      </Router>
    )
  }
}

export default Routes
