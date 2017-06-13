import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import LoadingMask from '../common/LoadingMask';


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

class SomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false};
  }

  hideLoading() {
    this.setState({ isVisible: false });
    console.log("hideLoading");
  }

  GetData() {
    // Make a request for a user with a given ID
    this.setState({ isVisible: true });
    var _this = this;
    axios.get('https://codepen.io/jobs.json')
    .then(function (response) {
      console.log(response);
      if(response.status == 200){
          _this.hideLoading();
              ReactDOM.render(
          <JobList numbers={response.data.jobs} />
                  , document.getElementById('joblist'))
      }
      else{
        alert("Something went wrong please try again");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

    render(){
      const isVisible = this.state.isVisible;
        return (
        	<div>
        		<h1>Jobs</h1>
        		<button onClick={() => this.GetData()} className="btn btn-primary">Get All Jobs Using AJAX</button>
            <LoadingMask isVisible={isVisible}/>
            <hr />
        		<ul id="joblist"></ul>
        	</div>);
    }
}

export default SomePage;