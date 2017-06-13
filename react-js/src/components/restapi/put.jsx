import React from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Panel,FormGroup,FormControl,Button} from 'react-bootstrap'

class Put extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            username : '',
            department : '',
            age : '',
            Id: ''
        }
        this.updateUserName = this.updateUserName.bind(this);
        this.updateDepartment = this.updateDepartment.bind(this);
        this.updateAge = this.updateAge.bind(this);
        this.recordDetails = this.recordDetails.bind(this);

        console.log('current endpoint',this.props.location.pathname)
        //Get the UserId which is present after the last /
        const currentId = this.props.location.pathname.split('/')
        const Id = currentId.pop()
        this.fillDetails(Id)
    }

    populateDetails(data){
        this.setState({
            username: data.Name,
            department : data.Department,
            age : data.Age,
            Id : data.Id
        });
    }

    fillDetails(userId){
        console.log(userId)
        var _this = this;
        axios({
            method:'get',
            url:'http://192.168.1.84:3000/Details/UserDetail?Id='+userId,
        }).then(function(response) {
            _this.populateDetails(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    }

    updateUserName(e) {
        this.setState({
            username: e.target.value
        });
    }

    updateDepartment(e) {
        this.setState({
            department: e.target.value
        });
    }

    updateAge(e) {
        this.setState({
            age: e.target.value
        });
    }

    recordDetails(){
        console.log(this.state);
        axios({
            method: 'put',
            url: 'http://192.168.1.84:3000/Details/UpdateUserDetail',
            data: {
                Name: this.state.username,
                Department: this.state.department,
                Age:this.state.age,
                Id : this.state.Id
            },
            contentType : 'Application/www-form-urlencoded'

        }).then(function(response) {
            console.log(response);
            if(response.status == 200){
                alert("User Details Saved!")
            }
            else{
                alert("Something went wrong please try again")
            }
        }).catch(function (error) {
            console.log(error);
        });
    }

    render(){
        const username = this.state.username;
        const department = this.state.department;
        const age = this.state.age;

        return(
            <div>
                <Panel>
                    <h3>Enter following details</h3>
                    <FormGroup>
                        <p>UserName</p>
                        <FormControl value={username} onChange={this.updateUserName}></FormControl>
                    </FormGroup>
                    <FormGroup>
                        <p>Department</p>
                        <FormControl value={department} onChange={this.updateDepartment} ></FormControl>
                    </FormGroup>
                    <FormGroup>
                        <p>Age</p>
                        <FormControl value={age} onChange={this.updateAge} type="number"></FormControl>
                    </FormGroup>
                    <Button bsStyle="info" onClick={this.recordDetails}>Edit Record</Button>
                </Panel>
            </div>
        )
    }
}

export default Put;