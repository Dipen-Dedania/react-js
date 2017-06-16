import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom'

//import all the modules
import Home from './components/app/app';
import About from './components/mainpage/mainpage';
import JobsCollect from './components/somepage/somepage';
import SecretPage from './components/secretpage/secretpage';
import Login from './components/secretpage/login';
import Clock from './components/clock/clock';
import Game from './components/game/game';
import Agecalculator from './components/agecalculator/agecalculator';
//Here Exported multiple Components from single JSX file
import {Autocomplete} from './components/autocomplete/index';
import ParentChild from './components/parentchild/parentchild';
import RestApi from './components/restapi/restapi';
import UploadFile from './components/uploadfile/uploadfile';
import Focus from './components/focus/focus';
import PureComponent  from './components/purecomponent/purecomponent';
import Redux from './redux/redux'
import Button from './components/button/button'

class RouteList extends React.Component {
    render(){
        return (
        	<div>
	        	<Route exact path="/" component={Home}/>
			    <Route exact path="/about" component={About}/>
			    <Route exact path="/ajax" component={JobsCollect}/>
			    <Route exact path="/clock" component={Clock}/>
			    <Route exact path="/game" component={Game}/>
			    <Route exact path="/calculator" component={Agecalculator}/>
				<Route path="/autocomplete" component={Autocomplete}/>
				<Route exact path="/parentchild" component={ParentChild}/>    
				<Route path="/restapi" component={RestApi}/>
				<Route exact path="/uploadfile" component={UploadFile}/> 
				<Route exact path="/secretpage" component={SecretPage}/> 
				<Route exact path="/login" component={Login} /> 
				<Route exact path="/focus" component={Focus} />
				<Route exact path="/purecomponent" component={PureComponent} /> 
				<Route exact path="/redux" component={Redux} />
				<Route exact path="/button" component={Button} />
			</div>
			);
    }
}
export default RouteList;