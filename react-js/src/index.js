import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './components/app/app';
import About from './components/mainpage/mainpage';
import JobsCollect from './components/somepage/somepage';
// import SecretPage from './components/secretpage/secretpage';
import Clock from './components/clock/clock';
import Game from './components/game/game';
import Agecalculator from './components/agecalculator/agecalculator';
import Autocomplete from './components/autocomplete/index';
import ParentChild from './components/parentchild/parentchild';
//import {jquery, jQuery, $} from 'jquery';
import Navigation from './components/common/Navigation'
import TopHeader from './components/common/TopHeader';
import RestApi from './components/restapi/restapi';

//Importing CSS
import './index.css'
import './style.css'
import './components/agecalculator/agecalculator.css'
import './components/parentchild/parentchild.css'
import './../node_modules/font-awesome/css/font-awesome.css'

//render part

ReactDOM.render(
	<Router>
	    <div id="wrapper">
		    <Navigation />
		    <div id="page-wrapper" className="gray-bg">
			    <TopHeader />
			    <div>
		        	<Route exact path="/" component={Home}/>
				    <Route path="/about" component={About}/>
				    <Route path="/career" component={JobsCollect}/>
				    <Route path="/clock" component={Clock}/>
				    <Route path="/game" component={Game}/>
				    <Route path="/calculator" component={Agecalculator}/>
					<Route path="/autocomplete" component={Autocomplete}/>
					<Route path="/parentchild" component={ParentChild}/>    
					<Route path="/restapi" component={RestApi}/> 
				</div>
	        </div>
	    </div>
	  </Router>
    , document.getElementById('root'));
