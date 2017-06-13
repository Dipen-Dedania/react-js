import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import $ from 'jquery';
//import {$, jquery} from 'jquery';
import metismenu from 'metismenu';

class Navigation extends Component {

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
                            <span className="clear"> <span className="block m-t-xs"> <strong className="font-bold">Example user</strong>
                             </span> <span className="text-muted text-xs block">Example position<b className="caret"></b></span> </span> </a>
                                <ul className="dropdown-menu animated fadeInRight m-t-xs">
                                    <li><a href="#"> Logout</a></li>
                                </ul>
                            </div>
                            <div className="logo-element">
                                DD+
                            </div>
                        </li>
                        <li className={this.activeRoute("/")}>
                            <Link to="/"><i className="fa fa-th-large"></i> <span className="nav-label">Home</span></Link>
                        </li>
                        <li className={this.activeRoute("/about")}>
                            <Link to="/about"><i className="fa fa-th-large"></i> <span className="nav-label">About</span></Link>
                        </li>
                        <li className={this.activeRoute("/ajax")}>
                            <Link to="/ajax"><i className="fa fa-th-large"></i> <span className="nav-label">Ajax</span></Link>
                        </li>
                        <li className={this.activeRoute("/clock")}>
                            <Link to="/clock"><i className="fa fa-th-large"></i> <span className="nav-label">Clock With State</span></Link>
                        </li>
                        <li className={this.activeRoute("/game")}>
                            <Link to="/game"><i className="fa fa-th-large"></i> <span className="nav-label">Tic Tac Toe</span></Link>
                        </li>
                        <li className={this.activeRoute("/calculator")}>
                            <Link to="/calculator"><i className="fa fa-th-large"></i> <span className="nav-label">Age Calculator & More </span></Link>
                        </li>
                        <li className={this.activeRoute("/autocomplete")}>
                            <Link to="/autocomplete"><i className="fa fa-th-large"></i> <span className="nav-label">Autocomplete</span></Link>
                        </li>
                        <li className={this.activeRoute("/parentchild")}>
                            <Link to="/parentchild"><i className="fa fa-th-large"></i> <span className="nav-label">Parent child value passing techniques</span></Link>
                        </li>
                        <li className={this.activeRoute("/restapi")}>
                            <Link to="/restapi"><i className="fa fa-th-large"></i> <span className="nav-label">REST API</span></Link>
                        </li>
                    </ul>

            </nav>
        )
    }
}

export default Navigation