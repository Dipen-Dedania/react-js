import React from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Button,Panel} from 'react-bootstrap'

class Get extends React.Component{
    constructor(props){
        super(props);
        this.GetData = this.GetData.bind(this);
    }

    GetData() {
        axios({
            method:'get',
            url:'http://192.168.1.84:3000/Details/UserDetail',
        }).then(function(response) {
            ReactDOM.render(
                <PopulateUsers Data={response.data} />
                , document.getElementById('username'))
        }).catch(function (error) {
            console.log(error);
        });
    }

    render(){
        return(
            <div className="result">
                <Panel>
                    <Button bsStyle="primary" onClick={this.GetData}>Get Names of all users</Button>
                    <ul id="username"></ul>
                </Panel>
            </div>
        )
    }
}

class PopulateUsers extends React.Component{

    handle(content){
        window.open(`/restapi/put/${content.Id}`,"_self");
    }

    render(){
        var content = this.props.Data;
        const listItems = content.map((content) =>
        <li key={content.Id} className="pointer" onClick={this.handle.bind(this,content)}>
            {content.Id} - {content.Name}
        </li>);
        return (
            <ul>{listItems}</ul>
        );
    }
}

export default  Get;