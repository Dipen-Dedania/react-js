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
import RestApi from './components/restapi/restapi';


//render part

ReactDOM.render(
	<Router>
	    <div>
	      <ul>
	        <li><Link to="/">Home</Link></li>
	        <li><Link to="/about">About</Link></li>
	        <li><Link to="/ajax">Ajax</Link></li>
	        <li><Link to="/clock">Clock With State</Link></li>
	        <li><Link to="/game">Tic Tac Toe</Link></li>
            <li><Link to="/calculator"> Age Calculator & More </Link></li>
            <li><Link to="/autocomplete">Autocomplete</Link></li>
    		<li><Link to="/parentchild">Parent child value passing techniques</Link></li>
			<li><Link to="/restapi">Rest API Calls</Link></li>
	      </ul>

	      <hr/>

	      <Route exact path="/" component={Home}/>
	      <Route path="/about" component={About}/>
	      <Route path="/ajax" component={JobsCollect}/>
	      <Route path="/clock" component={Clock}/>
	      <Route path="/game" component={Game}/>
	      <Route path="/calculator" component={Agecalculator}/>
	      <Route path="/autocomplete" component={Autocomplete}/>
		<Route path="/parentchild" component={ParentChild}/>
    	<Route path="/restapi" component={RestApi}/>
	    </div>
	  </Router>
    , document.getElementById('root'));
