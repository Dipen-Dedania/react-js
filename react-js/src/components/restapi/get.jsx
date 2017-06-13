import React from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';

function PopulateUserName(props) {
    console.log('props',props)
    var content = props.Data;
    const listItems = content.map((content) =>
        <li key={content.Id}>
            {content.Id}-{content.Name}
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

function GetData() {
    axios({
        method:'get',
        url:'http://192.168.1.84:3000/Details/UserDetail',
    }).then(function(response) {
        ReactDOM.render(
            <PopulateUserName Data={response.data} />
            , document.getElementById('username'))
    }).catch(function (error) {
        console.log(error);
    });
}

class Get extends React.Component{
    render(){
        return(
            <div className="result">
                <a className="pointer" onClick={GetData}>Get Names of all users</a>
                <ul id="username"></ul>
            </div>
        )
    }
}
export default  Get;