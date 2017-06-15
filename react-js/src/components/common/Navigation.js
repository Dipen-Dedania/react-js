import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'

import $ from 'jquery';
import metismenu from 'metismenu';

function NavigationLink(props) {
    return (
        <li>
            <NavLink to={props.to} activeClassName="active">
                <i className="fa fa-th-large"></i> 
                <span className="nav-label">{props.navlabel}</span>
            </NavLink>
        </li>);
}

class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { menu } = this.refs;
        $(menu).metisMenu();
    }

    render() {
        return (
            <nav className="navbar-default navbar-static-side" role="navigation">
                    <ul className="nav metismenu" id="side-menu" ref="menu">
                        <li className="nav-header">
                            <div className="dropdown profile-element"> <span>
                             </span>
                                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                            <span className="clear"> <span className="block m-t-xs"> <strong className="font-bold">React tutorials</strong>
                             </span> <span className="text-muted text-xs block">Checkout tabs<b className="caret"></b></span> </span> </a>
                                <ul className="dropdown-menu animated fadeInRight m-t-xs">
                                    <li><a href="#"> Logout</a></li>
                                </ul>
                            </div>
                            <div className="logo-element">
                                DD+
                            </div>
                        </li>
                        <NavigationLink to="/about" navlabel="About" />
                        <NavigationLink to="/ajax" navlabel="Ajax" />
                        <NavigationLink to="/clock" navlabel="Clock With State" />
                        <NavigationLink to="/focus" navlabel="Focus" />
                        <NavigationLink to="/calculator" navlabel="Age Calculator & More" />
                        <NavigationLink to="/game" navlabel="Tic Tac Toe" />
                        <NavigationLink to="/purecomponent" navlabel="Pure Component" />
                        <NavigationLink to="/autocomplete" navlabel="Autocomplete" />
                        <NavigationLink to="/parentchild" navlabel="Parent child value passing techniques" />
                        <NavigationLink to="/restapi" navlabel="REST API" />
                        <NavigationLink to="/uploadfile" navlabel="Upload File" />
                        <NavigationLink to="/secretpage" navlabel="Secret Page" />
                        <NavigationLink to="/redux" navlabel="Redux" />
                    </ul>

            </nav>
        )
    }
}

export default Navigation