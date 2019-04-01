import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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
