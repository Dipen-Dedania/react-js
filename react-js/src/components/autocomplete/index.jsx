import React, { Component } from 'react';
import './autocomplete.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import A1 from './a1';
import A2 from './a2';

class Card extends React.Component {
	handleClick(url){
		//window.open(url,"_self");
		console.log(url);
	};

	render(){
	  return (
	    <div className="col-md-3 col-sm-6 col-xs-12" onClick={this.handleClick(this.props.murl)}>
	      <div className="card-container">{this.props.text}</div>
	    </div>
	  );
	}
}

class Autocomplete extends React.Component {
    render(){
    	return (
    		<div className="row">
    			<Route path="/a1" component={A1}/>
    			<Route path="/a2" component={A2}/>
    			<Card text="Static Data" murl="/autocomplete/a1" />
    			<Card text="Async Data" murl="/autocomplete/a2" />
    			<Card text="Custom Menu" murl="/autocomplete/a3" />
    			<Card text="Managed Menu Visibility" murl="/autocomplete/a4" />
    		</div>
    		);
    }
}

export default Autocomplete;