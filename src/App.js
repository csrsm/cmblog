import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './component/home.js';
import { RenderRoute } from './util/RenderRoute';
import { RouteConfig } from './routers/router'

function App() {
  return (
    <Router>
      {RenderRoute(RouteConfig)}
    </Router>
  )
}

export default App;
