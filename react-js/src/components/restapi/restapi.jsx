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

class ApiComponent extends React.Component{
    render(){
        const getURL = "/restapi/get";
        const postURL = "/restapi/post";
        const deleteURL = "/restapi/delete"
        return (
            <div>
                <div>
                    <h2 className="center-align">Rest API calls with ReactJS!</h2>
                </div>
                <div className="row">
                    <Card text="Get" cardName = "Get" URL = {getURL}/>
                    <Card text="Post" cardName = "Post" URL = {postURL}/>
                    <Card text="Put" cardName = "Put"/>
                    <Card text="Delete" cardName = "Delete" URL = {deleteURL}/>
                </div>
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
            </div>
        )
    }
}

export default RestApi;