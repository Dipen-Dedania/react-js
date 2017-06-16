import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom'

//import all the modules
import Home from './scene/app/app';
import About from './scene/mainpage/mainpage';
import JobsCollect from './scene/somepage/somepage';
import SecretPage from './scene/secretpage/secretpage';
import Login from './scene/secretpage/login';
import Clock from './scene/clock/clock';
import Game from './scene/game/game';
import Agecalculator from './scene/agecalculator/agecalculator';
//Here Exported multiple Components from single JSX file
import {Autocomplete} from './scene/autocomplete/index';
import ParentChild from './scene/parentchild/parentchild';
import RestApi from './scene/restapi/restapi';
import UploadFile from './scene/uploadfile/uploadfile';
import Focus from './scene/focus/focus';
import PureComponent  from './scene/purecomponent/purecomponent';
import Redux from './scene/redux/redux'
import {ButtonComp} from './components/theme_components/button/button'
import FunctionalProgramming from './scene/fp/fp'

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
				<Route exact path="/button" component={ButtonComp} />
				<Route exact path="/fp" component={FunctionalProgramming} />
			</div>
			);
    }
}
export default RouteList;