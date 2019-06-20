import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';
import Lazy from './lazyComponent';
import Lazyp3 from './lazyPageTre';


function App() {
  return (
    <Router>
      <Link>
        <title>page1</title>
        <title>page2</title>
      </Link>
        <Route path='Lazy'></Route>
        <Route></Route>

    </Router>
  );
}

export default App;
