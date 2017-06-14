import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom'

import Home from './components/app/app';
import About from './components/mainpage/mainpage';
import JobsCollect from './components/somepage/somepage';
import SecretPage from './components/secretpage/secretpage';
import Login from './components/secretpage/login';
import Clock from './components/clock/clock';
import Game from './components/game/game';
import Agecalculator from './components/agecalculator/agecalculator';
import Autocomplete from './components/autocomplete/index';
import ParentChild from './components/parentchild/parentchild';
import Navigation from './components/common/Navigation'
import TopHeader from './components/common/TopHeader';
import RestApi from './components/restapi/restapi';
import UploadFile from './components/uploadfile/uploadfile';
import Focus from './components/focus/focus';
import PureComponent  from './components/purecomponent/purecomponent';
import Redux from './redux/redux'

//Importing CSS
import './index.css'
import './style.css'
import './components/agecalculator/agecalculator.css'
import './components/parentchild/parentchild.css'
import './../node_modules/font-awesome/css/font-awesome.css'

// exact in router - When true, will only match if the path matches the location.pathname exactly.
//render part
ReactDOM.render(
	<Router>
	    <div id="wrapper">
		    <Navigation/>
		    <div id="page-wrapper" className="gray-bg">
			    <TopHeader />
			    <div>
		        	<Route exact path="/" component={Home}/>
				    <Route exact path="/about" component={About}/>
				    <Route exact path="/ajax" component={JobsCollect}/>
				    <Route exact path="/clock" component={Clock}/>
				    <Route exact path="/game" component={Game}/>
				    <Route exact path="/calculator" component={Agecalculator}/>
					<Route path="/autocomplete" component={Autocomplete}/>
					<Route exact path="/parentchild" component={ParentChild}/>    
					<Route path="/restapi" component={RestApi}/>
					<Route exact path="/uploadfile" component={UploadFile}/> 
					<Route exact path="/secretpage" component={SecretPage}/> 
					<Route exact path="/login" component={Login} /> 
					<Route exact path="/focus" component={Focus} />
					<Route exact path="/purecomponent" component={PureComponent} />
					<Route exact path="/redux" component={Redux} />
				</div>
	        </div>
	    </div>
	  </Router>
    , document.getElementById('root'));
