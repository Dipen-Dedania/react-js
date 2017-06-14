import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom'

import $ from 'jquery';
import metismenu from 'metismenu';

function activeRoute2(routeName) {
    console.log(this.props.location.pathname);
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    //return "";
}

class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { menu } = this.refs;
        $(menu).metisMenu();
    }

    activeRoute(routeName) {
        //return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
        return "";
    }

    secondLevelActive(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
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
                        <li className={this.activeRoute("/about")}>
                            <NavLink to="/about" activeClassName="active"><i className="fa fa-th-large"></i> <span className="nav-label">About</span></NavLink>
                        </li>
                        <li className={this.activeRoute("/ajax")}>
                            <NavLink to="/ajax" activeClassName="active"><i className="fa fa-th-large"></i> <span className="nav-label">Ajax</span></NavLink>
                        </li>
                        <li className={this.activeRoute("/clock")}>
                            <NavLink to="/clock" activeClassName="active"><i className="fa fa-th-large"></i> <span className="nav-label">Clock With State</span></NavLink>
                        </li>
                        <li className={this.activeRoute("/focus")}>
                            <NavLink to="/focus" activeClassName="active"><i className="fa fa-th-large"></i> <span className="nav-label">Focus</span></NavLink>
                        </li>
                        <li className={this.activeRoute("/game")}>
                            <NavLink to="/game" activeClassName="active"><i className="fa fa-th-large"></i> <span className="nav-label">Tic Tac Toe</span></NavLink>
                        </li>
                        <li className={this.activeRoute("/calculator")}>
                            <NavLink to="/calculator" activeClassName="active"><i className="fa fa-th-large"></i> <span className="nav-label">Age Calculator & More </span></NavLink>
                        </li>
                        <li>
                            <NavLink to="/purecomponent" activeClassName="active"><i className="fa fa-th-large"></i> <span className="nav-label">Pure Component</span></NavLink>
                        </li>
                        <li className={this.activeRoute("/autocomplete")}>
                            <NavLink to="/autocomplete" activeClassName="active"><i className="fa fa-th-large"></i> <span className="nav-label">Autocomplete</span></NavLink>
                        </li>
                        <li className={this.activeRoute("/parentchild")}>
                            <NavLink to="/parentchild" activeClassName="active"><i className="fa fa-th-large"></i> <span className="nav-label">Parent child value passing techniques</span></NavLink>
                        </li>
                        <li className={this.activeRoute("/restapi")}>
                            <NavLink to="/restapi" activeClassName="active"><i className="fa fa-th-large"></i> <span className="nav-label">REST API</span></NavLink>
                        </li>
                        <li className={this.activeRoute("/uploadfile")}>
                            <NavLink to="/uploadfile" activeClassName="active"><i className="fa fa-th-large"></i> <span className="nav-label">Upload File</span></NavLink>
                        </li>
                        <li className={this.activeRoute("/secretpage")}>
                            <NavLink to="/secretpage" activeClassName="active"><i className="fa fa-th-large"></i> <span className="nav-label">Secret Page</span></NavLink>
                        </li>
                    </ul>

            </nav>
        )
    }
}

export default Navigation