import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router
} from 'react-router-dom'


import Navigation from './components/common/Navigation'
import TopHeader from './components/common/TopHeader';

import RouteList from './routes'
//Importing CSS
import './index.css'
import './style.css'
import './../node_modules/font-awesome/css/font-awesome.css'

// exact in router - When true, will only match if the path matches the location.pathname exactly.
//render part
ReactDOM.render(
	<Router>
	    <div id="wrapper">
		    <Navigation/>
		    <div id="page-wrapper" className="gray-bg">
			    <TopHeader />
			    <RouteList />
	        </div>
	    </div>
	  </Router>
    , document.getElementById('root'));
