import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function JobList(props) {
  var numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.company_name}>
      {number.company_name}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

function GetData() {
 	// Make a request for a user with a given ID
	axios.get('https://codepen.io/jobs.json')
	.then(function (response) {
		console.log(response);
		ReactDOM.render(
			<JobList numbers={response.data.jobs} />
			, document.getElementById('joblist'))
	})
	.catch(function (error) {
		console.log(error);
	});
}

class SomePage extends React.Component {
    render(){
        return (
        	<div>
        		<h1>Jobs</h1>
        		<button onClick={GetData}>Get All Jobs Using AJAX</button>
        		<ul id="joblist"></ul>
        	</div>);
    }
}

export default SomePage;