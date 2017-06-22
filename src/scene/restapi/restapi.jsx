import React from 'react'
import Card from './card'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import './card.css'
import './restapi.css'
import Get from './get'
import Post from './post'
import Delete from './delete'
import Put from './put'
import {Panel} from 'react-bootstrap'

class ApiComponent extends React.Component{
    render(){
        const getURL = "/restapi/get";
        const postURL = "/restapi/post";
        const deleteURL = "/restapi/delete"
        const putURL = "/restapi/put"

        var style = {
            color: 'red',
        };

        return (
            <div>
                <div>
                    <h2 className="center-align">Rest API calls with ReactJS!</h2>
                </div>
                <div className="row">
                    <Card text="Get" cardName = "Get" URL = {getURL}/>
                    <Card text="Post" cardName = "Post" URL = {postURL}/>
                    <Card text="Put" cardName = "Put" URL = {putURL}/>
                    <Card text="Delete" cardName = "Delete" URL = {deleteURL}/>
                </div>
                <Panel>
                    <h4>Please Note Server API's are not working. <em><p style={style}>works only on local server</p></em></h4>
                </Panel>
            </div>
        )
    }
}

class RestApi extends React.Component{
    render(){
        return(
            <div>
                <ApiComponent />
                <Route path="/restapi/get" component={Get}/>
                <Route path="/restapi/post" component={Post}/>
                <Route path="/restapi/delete" component={Delete}/>
                <Route path="/restapi/put" component={Put}/>
            </div>
        )
    }
}

export default RestApi;