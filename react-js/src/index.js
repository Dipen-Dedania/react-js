import React from 'react';
import ReactDOM from 'react-dom';
import App from './scene/app/App';
import './index.css';
// Import routing components
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

class Home extends React.Component {
    render(){
        return (<h1>Hi</h1>);
    }
}

// More components
class Car extends React.Component {
    render(){
        return (<h1>Cars page</h1>);
    }
}

class About extends React.Component {
    render(){
        return (<h1>About page</h1>);
    }
}

//render part

ReactDOM.render(
	<div>
		<ul>
	        <li><a href="/">Home</a></li>
	        <li><a href="/cars">Car</a></li>
	        <li><a href="/about">About</a></li>
	      </ul>
		<Router history={hashHistory}>
	        <Route path="/" component={Home} />
	        <Route path="/cars" component={Car} />
	        <Route path="/about" component={About} />
	    </Router>
    </div>
    , document.getElementById('root'));
