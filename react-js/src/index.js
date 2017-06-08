import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './components/app/app';
import About from './components/mainpage/mainpage';
import Topics from './components/somepage/somepage';
//render part

ReactDOM.render(
	<Router>
	    <div>
	      <ul>
	        <li><Link to="/">Home</Link></li>
	        <li><Link to="/about">About</Link></li>
	        <li><Link to="/topics">Topics</Link></li>
	      </ul>

	      <hr/>

	      <Route exact path="/" component={Home}/>
	      <Route path="/about" component={About}/>
	      <Route path="/topics" component={Topics}/>
	    </div>
	  </Router>
    , document.getElementById('root'));
