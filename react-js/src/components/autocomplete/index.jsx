import React, { Component } from 'react';
import './autocomplete.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import A1 from './a1';
import A2 from './a2';

var styles = {
  disabledItem: {
    cursor: 'not-allowed'
  },
  item: {
    cursor: 'pointer'
  }
};

class Card extends React.Component {
	render(){
	  return (
	    <div className="col-md-3 col-sm-6 col-xs-12" onClick={!this.props.isDisable? this.props.onSomeEvent : ''}>
	      <div className="card-container" style={this.props.isDisable ? styles.disabledItem : styles.item}>{this.props.text}</div>
	    </div>
	  );
	}
}

class InnerTabs extends React.Component {
	handleClick(url){
		window.open(url,"_self");
	};

	render(){
    	const url1 = "/autocomplete/a1";
    	const url2 = "/autocomplete/a2";
    	const disabled = true;
    	return (
    		<div className="row">
    			<Card text="Static Data" murl={url1} onSomeEvent={() => this.handleClick(url1)}/>
    			<Card text="Async Data" isDisable={disabled} murl={url2} onSomeEvent={() => this.handleClick(url2)} />
    			<Card text="Custom Menu" isDisable={disabled} murl="/autocomplete/a3" />
    			<Card text="Managed Menu Visibility" isDisable={disabled} murl="/autocomplete/a4" />
    		</div>
    		);
    }
}

class Autocomplete extends React.Component {
    render(){
    	const url1 = "/autocomplete/a1";
    	const url2 = "/autocomplete/a2";
    	return (
    		<div>
    			<Route path="/autocomplete" component={InnerTabs}/>
    			// this will not load A1 & A2 Components - they will be loaded onclick - Async
				<br />
				<br />
				<br />
    			//For more details - click on this <a href="https://github.com/reactjs/react-autocomplete">link</a>
    			<Route exact path="/autocomplete/a1" component={A1}/>
    			<Route path="/autocomplete/a2" component={A2}/>
    		</div>
    		);
    }
}

export default Autocomplete;