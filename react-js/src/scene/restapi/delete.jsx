import React from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Panel,FormGroup,FormControl,Button} from 'react-bootstrap'

class Deletes extends React.Component {
    constructor(){
        super()
        this.state = {
            user : ''
        }
        this.deleteID = this.deleteID.bind(this);
        this.deleteDetails = this.deleteDetails.bind(this);
    }

    deleteID(e) {
        this.setState({
            user : e.target.value
        });
    }

    deleteDetails(){
        console.log(this.state);
        axios({
            method: 'delete',
            url: 'http://192.168.1.84:3000/Details/DeleteUser',
            data: {
                Id: this.state.user,
            }
        }).then(function(response) {
            console.log(response.data);
            if(response.status == 200){
                alert("User Details Deleted!")
            }
            else{
                alert("Something went wrong please try again")
            }
        }).catch(function (error) {
            console.log(error);
        });
    }

    render(){
        const age = this.state.age;

        return(
            <div>
                <Panel>
                    <h3>Enter UserId to delete</h3>
                    <FormGroup>
                        <p>ID</p>
                        <FormControl value={age} onChange={this.deleteID} type="number"></FormControl>
                    </FormGroup>
                    <Button bsStyle="danger" onClick={this.deleteDetails}>Delete Record</Button>
                </Panel>
            </div>
        )
    }
}

export default Deletes;